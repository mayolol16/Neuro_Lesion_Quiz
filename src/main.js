import { CLINICAL_CASES } from './cases.js';
import { STROKE_CASES, STROKE_ARTERIES, STROKE_QUICK_REFERENCE } from './strokeCases.js';
import { DIAGRAM_LEVELS, renderDiagramSVG } from './diagrams.js';
import { DR_COHAN_SLIDES } from './atlas.js';

const BRAINSTEM_STROKE_CASES = STROKE_CASES.filter(c => c.source.includes('Brainstem Stroke'));

// Application State
const state = {
  activeMode: 'lesion',      // 'lesion' (53 cases) | 'stroke' (Exam 3: 29 cases)
  cases: [...CLINICAL_CASES, ...BRAINSTEM_STROKE_CASES],
  strokeCases: [...STROKE_CASES],
  currentCaseIndex: 0,
  activeFilter: 'all',
  selectedLevel: null,       // Step 1: CNS level (null by default; user must select)
  selectedStructures: [],    // Step 2: structures clicked on cross-section
  step2Checked: false,       // Has the user checked Step 2 (Location)?
  step2Feedback: null,       // Step 2 evaluation result
  activeRefLocIndex: null,   // Index into validLocations when inspecting reference alternatives
  selectedArtery: null,      // Step 3A (Stroke Mode): selected occluded artery
  selectedWhyIndex: null,    // Step 3 (or 3B): selected mechanism index
  step3Checked: false,       // Has the user checked Step 3?
  feedback: null,            // Full case evaluation result (after Step 3)
  stats: {
    attempted: parseInt(localStorage.getItem('neuro_attempted') || '0', 10),
    correct: parseInt(localStorage.getItem('neuro_correct') || '0', 10),
    streak: parseInt(localStorage.getItem('neuro_streak') || '0', 10),
    bestStreak: parseInt(localStorage.getItem('neuro_best_streak') || '0', 10)
  },
  solvedCases: new Set(JSON.parse(localStorage.getItem('neuro_solved_cases') || '[]')),
  hideDiagramHints: false,
  corticalView: 'all',       // 'all' | 'lateral' | 'medial'
  showAtlasModal: false,
  activeAtlasTab: 'cohan',   // 'cohan' | 'stroke'
  activeAtlasSlide: 0,
  showDrawingTipModal: false,
  hoveredStructInfo: null
};

// Multi-location helper: normalizes any case to an array of valid { level, levelLabel, structures, structureNames, note }
function getValidLocations(c) {
  if (Array.isArray(c.validLocations) && c.validLocations.length > 0) {
    return c.validLocations;
  }
  return [
    {
      level: c.correctLevel,
      levelLabel: c.correctLevelDetail,
      structures: c.correctStructures,
      structureNames: c.correctStructureNames,
      note: ''
    }
  ];
}

// Filtered Cases Helper (Cohort-based, NO anatomical level spoilers)
function getFilteredCases() {
  if (state.activeMode === 'stroke') {
    if (state.activeFilter === 'all') return state.strokeCases;
    if (state.activeFilter === 'exam3_official') {
      return state.strokeCases.filter(c => c.source.includes('Exam 3 Stroke'));
    }
    if (state.activeFilter === 'brainstem_freedman') {
      return state.strokeCases.filter(c => c.source.includes('Brainstem Stroke'));
    }
    return state.strokeCases;
  }

  if (state.activeFilter === 'all') return state.cases;
  if (state.activeFilter === 'exam1') {
    return state.cases.filter(c => c.source.includes('Exam 1 Cases -'));
  }
  if (state.activeFilter === 'exam1_cont') {
    return state.cases.filter(c => c.source.includes('Exam 1 Cases Continued -'));
  }
  if (state.activeFilter === 'part3') {
    return state.cases.filter(c => c.id >= 13 && c.id <= 26);
  }
  if (state.activeFilter === 'part4') {
    return state.cases.filter(c => c.id >= 27 && c.id <= 40);
  }
  if (state.activeFilter === 'brainstem_strokes') {
    return state.cases.filter(c => c.source.includes('Brainstem Stroke'));
  }
  return state.cases;
}

function getCurrentCase() {
  const filtered = getFilteredCases();
  if (state.currentCaseIndex >= filtered.length) {
    state.currentCaseIndex = 0;
  }
  return filtered[state.currentCaseIndex] || (state.activeMode === 'stroke' ? state.strokeCases[0] : state.cases[0]);
}

function getArteryLabel(arteryId) {
  const found = STROKE_ARTERIES.find(a => a.id === arteryId);
  return found ? found.label : arteryId;
}

// Main Render Function
function renderApp() {
  const app = document.getElementById('app');
  const currentCase = getCurrentCase();
  const filtered = getFilteredCases();
  const isStrokeMode = state.activeMode === 'stroke';
  const validLocations = getValidLocations(currentCase);
  const accuracy = state.stats.attempted > 0
    ? Math.round((state.stats.correct / state.stats.attempted) * 100)
    : 100;

  // Determine which diagram feedback to render (supports inspecting alternate valid locations)
  let diagramFeedback = state.step2Checked ? state.step2Feedback : null;
  let diagramSelected = state.selectedStructures;
  if (state.step2Checked && state.activeRefLocIndex !== null && validLocations[state.activeRefLocIndex]) {
    const refLoc = validLocations[state.activeRefLocIndex];
    diagramFeedback = {
      ...state.step2Feedback,
      correctStructures: refLoc.structures
    };
    diagramSelected = refLoc.structures;
  }

  const canCheckStep3 = isStrokeMode
    ? (state.selectedArtery !== null && state.selectedWhyIndex !== null)
    : (state.selectedWhyIndex !== null);

  const modeCases = isStrokeMode ? state.strokeCases : state.cases;
  const solvedInMode = modeCases.filter(c => state.solvedCases.has(c.id)).length;
  const solvedPct = modeCases.length > 0 ? Math.round((solvedInMode / modeCases.length) * 100) : 0;

  const step1Done = Boolean(state.selectedLevel);
  const step2Done = Boolean(state.step2Checked);
  const step3Done = Boolean(state.step3Checked);

  app.innerHTML = `
    <!-- Top Header -->
    <header class="app-header">
      <div class="brand-section">
        <div class="brand-logo-icon">${isStrokeMode ? '🩸' : '🧠'}</div>
        <div class="brand-text">
          <h1>Neuroanatomy Lesion Studio</h1>
          <p>${isStrokeMode
            ? `Stroke Localization Mode • ${state.strokeCases.length} Cortical, Subcortical & Brainstem Stroke Cases`
            : `${state.cases.length} Clinical Cases • Interactive 3-Step Guided Lesion Localization`}</p>
        </div>
      </div>

      <!-- Mode Switcher -->
      <div class="mode-switcher" role="tablist" aria-label="Study Mode">
        <button class="mode-btn ${!isStrokeMode ? 'active' : ''}" data-mode="lesion">
          <span>🧠 Lesion Quiz</span>
          <span class="mode-count">${state.cases.length}</span>
        </button>
        <button class="mode-btn stroke-mode-btn ${isStrokeMode ? 'active' : ''}" data-mode="stroke">
          <span>🩸 Stroke Localization</span>
          <span class="mode-count">${state.strokeCases.length}</span>
        </button>
      </div>

      <div class="header-controls">
        <div class="stats-badge-group">
          <div class="stat-pill streak">
            <span>🔥 Streak:</span>
            <strong>${state.stats.streak}</strong>
          </div>
          <div class="stat-pill accuracy">
            <span>🎯 Accuracy:</span>
            <strong>${accuracy}% (${state.stats.correct}/${state.stats.attempted})</strong>
          </div>
          <button id="btn-reset-stats" class="btn-reset-stats" title="Reset accuracy, streak, and solved progress">↺</button>
        </div>

        <button id="btn-open-atlas" class="btn-icon" title="View Drawing Guide & Stroke Reference">
          <span>${isStrokeMode ? '🗺️ Stroke & Drawing Atlas' : '🎨 Drawing & Stroke Guide'}</span>
        </button>
      </div>
    </header>

    <!-- Main Workspace Grid -->
    <main class="app-container">
      <!-- LEFT PANEL: Case Presentation, Step 1 (Level) & Step 3 (Artery + Why) -->
      <section class="left-panel">
        <div class="case-control-bar">
          <!-- Mode Progress & Stepper Bar -->
          <div class="workspace-progress-bar">
            <div class="mode-progress-pill" title="${solvedInMode} of ${modeCases.length} cases solved in this mode">
              <span class="mode-progress-text">✓ Solved: <strong>${solvedInMode}/${modeCases.length}</strong></span>
              <div class="mode-progress-track">
                <div class="mode-progress-fill" style="width:${solvedPct}%;"></div>
              </div>
            </div>
            <div class="step-flow-stepper" aria-label="3-Step Diagnostic Flow">
              <span class="stepper-node ${step1Done ? 'done' : 'active'}">1. Level</span>
              <span class="stepper-sep">→</span>
              <span class="stepper-node ${step2Done ? 'done' : step1Done ? 'active' : ''}">2. Pinpoint</span>
              <span class="stepper-sep">→</span>
              <span class="stepper-node ${step3Done ? 'done' : step2Done ? 'active' : ''}">3. ${isStrokeMode ? 'Artery/Why' : 'Why'}</span>
            </div>
          </div>

          <!-- Filter Cohorts (No level spoilers) -->
          <div class="filter-pills-row">
            ${isStrokeMode ? `
              <button class="filter-pill ${state.activeFilter === 'all' ? 'active' : ''}" data-filter="all">All Stroke Cases (29)</button>
              <button class="filter-pill ${state.activeFilter === 'exam3_official' ? 'active' : ''}" data-filter="exam3_official">Exam 3 Official (16)</button>
              <button class="filter-pill ${state.activeFilter === 'brainstem_freedman' ? 'active' : ''}" data-filter="brainstem_freedman">Brainstem &amp; Lacunar (13)</button>
            ` : `
              <button class="filter-pill ${state.activeFilter === 'all' ? 'active' : ''}" data-filter="all">All ${state.cases.length} Cases</button>
              <button class="filter-pill ${state.activeFilter === 'exam1' ? 'active' : ''}" data-filter="exam1">Exam 1 (1–6)</button>
              <button class="filter-pill ${state.activeFilter === 'exam1_cont' ? 'active' : ''}" data-filter="exam1_cont">Exam 1 Cont. (7–12)</button>
              <button class="filter-pill ${state.activeFilter === 'part3' ? 'active' : ''}" data-filter="part3">Practice (13–26)</button>
              <button class="filter-pill ${state.activeFilter === 'part4' ? 'active' : ''}" data-filter="part4">Mastery (27–40)</button>
              <button class="filter-pill ${state.activeFilter === 'brainstem_strokes' ? 'active' : ''}" data-filter="brainstem_strokes">Brainstem Strokes (13)</button>
            `}
          </div>

          <!-- Case Pagination Dropdown -->
          <div class="case-pagination-row">
            <button id="btn-prev-case" class="btn-icon" title="Previous Case (← arrow)" ${state.currentCaseIndex === 0 ? 'disabled style="opacity:0.4"' : ''}>
              <span>◀ Prev</span>
            </button>
            <select id="case-select-dropdown" class="case-select-dropdown">
              ${filtered.map((c, i) => {
                const casePrefix = isStrokeMode
                  ? `Stroke #${i + 1}`
                  : (c.source.includes('Brainstem Stroke') ? c.source.replace('Brainstem Stroke - ', 'BS ') : `Case ${c.id}`);
                return `
                <option value="${i}" ${i === state.currentCaseIndex ? 'selected' : ''}>
                  ${state.solvedCases.has(c.id) ? '✓ ' : ''}${casePrefix}: ${c.title}
                </option>
              `;
              }).join('')}
            </select>
            <button id="btn-next-case-nav" class="btn-icon" title="Next Case (→ arrow)" ${state.currentCaseIndex === filtered.length - 1 ? 'disabled style="opacity:0.4"' : ''}>
              <span>Next ▶</span>
            </button>
          </div>
        </div>

        <!-- Case Presentation Card -->
        <article class="card">
          <div class="case-header-row">
            <div>
              <span class="case-badge-pill ${getBadgeClass(currentCase.source)}">
                ${currentCase.source}
              </span>
              ${validLocations.length > 1 ? `
                <span class="multi-loc-hint-pill" title="Multiple anatomical levels or views are valid for this case">
                  ✨ Multi-Location Valid
                </span>
              ` : ''}
              <h2 class="case-title" style="margin-top:6px;">${currentCase.title}</h2>
            </div>
            <button id="btn-view-drawing-tip" class="btn-icon" style="font-size:11px;" title="See how to draw this lesion">
              ✏️ Draw Tip
            </button>
          </div>

          <!-- Vignette Text -->
          <p class="case-vignette-text">${currentCase.vignette}</p>

          <!-- Findings Breakdown -->
          <div class="findings-checklist">
            ${currentCase.findings.map(f => `
              <div class="finding-item ${f.type}">
                <span class="finding-bullet"></span>
                <span>${f.text}</span>
              </div>
            `).join('')}
          </div>
        </article>

        <!-- STEP 1: Select CNS Level / Brain Region -->
        <div class="card step-container" id="step-1-card">
          <div class="step-card-header">
            <span class="step-badge">Step 1</span>
            <span class="step-title">What CNS level or brain region is affected?</span>
          </div>
          <p class="step-subtitle">
            ${isStrokeMode
              ? 'Choose a brainstem cross-section, Diencephalon/Internal Capsule, or Cortical Territories (ACA/MCA/PCA):'
              : 'Select the level to load and view its corresponding cross-section or cortical map in Step 2:'}
          </p>

          <div class="level-picker-grid">
            ${DIAGRAM_LEVELS.map(lvl => `
              <button class="level-pick-btn ${state.selectedLevel === lvl.id ? 'selected' : ''} ${lvl.id === 'cortex_territories' ? 'level-pick-featured' : ''}" data-pick-level="${lvl.id}">
                <span class="level-pick-name">${lvl.name}</span>
                <span class="level-pick-mnemonic">${lvl.mnemonic}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <!-- STEP 3: (Artery in Stroke Mode +) Pathophysiological Mechanism (Why?) -->
        <div class="card step-container ${state.step2Checked ? 'step-unlocked glow-focus' : 'step-locked'}" id="step-3-card">
          <div class="step-card-header">
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="step-badge step-3" style="${!state.step2Checked ? 'opacity:0.6;' : ''}">Step 3</span>
              <span class="step-title" style="${!state.step2Checked ? 'color:var(--text-muted);' : ''}">
                ${isStrokeMode ? 'Occluded Artery & Mechanism (Why?)' : 'Why is the lesion located here? (Mechanism)'}
              </span>
            </div>
            ${state.step2Checked ? `
              <span class="status-indicator-tag unlocked">🔓 Unlocked</span>
            ` : `
              <span class="status-indicator-tag locked">🔒 Complete Step 2 First</span>
            `}
          </div>

          ${!state.step2Checked ? `
            <p class="step-subtitle" style="color:var(--text-dim); margin-top:4px;">
              First complete Step 1 (CNS level / cortical map), pinpoint the lesion in Step 2, and click <strong>"Check Lesion Location"</strong> to unlock Step 3!
            </p>
          ` : `
            ${isStrokeMode ? `
              <div class="artery-picker-section">
                <p class="step-subtitle" style="margin-bottom:8px;"><strong>3A. Which artery / blood vessel is occluded?</strong></p>
                <div class="artery-picker-grid">
                  ${STROKE_ARTERIES.map(art => {
                    const isSel = state.selectedArtery === art.id;
                    const isCorrectArt = currentCase.correctArteries && currentCase.correctArteries.includes(art.id);
                    let cls = '';
                    if (state.step3Checked) {
                      if (isCorrectArt) cls = 'artery-correct';
                      else if (isSel) cls = 'artery-wrong';
                    } else if (isSel) {
                      cls = 'selected';
                    }
                    return `
                      <button class="artery-pick-btn ${cls}" data-artery="${art.id}" ${state.step3Checked ? 'disabled' : ''}>
                        ${art.label}
                      </button>
                    `;
                  }).join('')}
                </div>
              </div>
            ` : ''}

            <p class="step-subtitle" style="margin-top:${isStrokeMode ? '14px' : '0'};">
              ${isStrokeMode ? '<strong>3B. Select the pathophysiological mechanism explaining these deficits:</strong>' : "Select the pathophysiological mechanism explaining the patient's symptoms:"}
            </p>

            <div class="why-options-list" style="margin-top:10px;">
              ${currentCase.whyOptions.map((opt, idx) => `
                <label class="why-option-card ${state.selectedWhyIndex === idx ? 'selected' : ''} ${state.step3Checked ? (idx === currentCase.correctWhyIndex ? 'correct-choice' : (state.selectedWhyIndex === idx ? 'wrong-choice' : '')) : ''}">
                  <input type="radio" name="why-rationale" class="why-radio" value="${idx}" ${state.selectedWhyIndex === idx ? 'checked' : ''} ${state.step3Checked ? 'disabled' : ''} />
                  <span class="why-text">${opt}</span>
                </label>
              `).join('')}
            </div>

            ${!state.step3Checked ? `
              <div class="actions-bar" style="margin-top:12px;">
                <button id="btn-check-step3" class="btn-primary" ${!canCheckStep3 ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : ''}>
                  <span>${isStrokeMode ? '⚡ Check Artery & Mechanism & Complete' : '⚡ Check Mechanism & Complete Case'}</span>
                </button>
                <button id="btn-reset-selection" class="btn-secondary" title="Clear your selections">
                  <span>Reset Case</span>
                </button>
              </div>
            ` : ''}
          `}
        </div>

        <!-- Full Feedback & Synthesis Card (Revealed after Step 3 is checked) -->
        ${state.feedback ? renderFeedbackCard(currentCase, validLocations) : ''}
      </section>

      <!-- RIGHT PANEL: STEP 2 (Interactive SVG Cross-Section Stage & Location Verification) -->
      <section class="right-panel">
        <div class="diagram-stage-card ${state.step2Checked ? 'has-feedback-banner' : ''}">
          <div class="diagram-header-info">
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="step-badge step-2">Step 2</span>
              <span class="diagram-level-title">
                ${state.selectedLevel
                  ? `Pinpoint Lesion: ${getCurrentLevelName(state.selectedLevel)}`
                  : 'Awaiting Step 1 Level Selection'}
              </span>
            </div>
            ${state.selectedLevel ? `
              <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                ${state.selectedLevel === 'cortex_territories' ? `
                  <div class="cortical-view-switcher" role="group" aria-label="Cortical View Zoom">
                    <button class="cortical-view-btn ${state.corticalView === 'all' ? 'active' : ''}" data-cortical-view="all" title="Show all 4 cortical views">🗺️ All 4</button>
                    <button class="cortical-view-btn ${state.corticalView === 'lateral' ? 'active' : ''}" data-cortical-view="lateral" title="Zoom into Left & Right Lateral views">🧠 Lateral 2×</button>
                    <button class="cortical-view-btn ${state.corticalView === 'medial' ? 'active' : ''}" data-cortical-view="medial" title="Zoom into Left & Right Medial views">⚡ Medial 2×</button>
                  </div>
                ` : ''}
                <button id="btn-toggle-hints" class="btn-toggle-hints ${state.hideDiagramHints ? 'active' : ''}" title="Toggle structure text labels on the diagram for blind self-testing">
                  ${state.hideDiagramHints ? '👁️ Show Labels' : '🙈 Hide Labels'}
                </button>
                <span class="diagram-instructions-badge">
                  👆 Click target structure(s)
                </span>
              </div>
            ` : ''}
          </div>

          <div class="diagram-svg-container ${state.hideDiagramHints ? 'hide-svg-hints' : ''}" id="svg-container">
            ${state.selectedLevel ?
              renderDiagramSVG(state.selectedLevel, diagramSelected, diagramFeedback, { corticalView: state.corticalView }) :
              renderEmptyLevelPrompt(isStrokeMode)
            }
          </div>

          ${state.selectedLevel && !['cortex', 'cortex_territories'].includes(state.selectedLevel) ? `
            <div class="pathway-legend-bar" aria-label="Functional Pathway Legend">
              <span class="pathway-legend-item"><span class="pathway-dot motor"></span>Motor (CST/CBT)</span>
              <span class="pathway-legend-item"><span class="pathway-dot dcml"></span>Touch/Prop (DCML)</span>
              <span class="pathway-legend-item"><span class="pathway-dot als"></span>Body Pain (ALS)</span>
              <span class="pathway-legend-item"><span class="pathway-dot trigeminal"></span>Face Sens (V/VTT)</span>
              <span class="pathway-legend-item"><span class="pathway-dot cn"></span>CN Nuclei</span>
              <span class="pathway-legend-item"><span class="pathway-dot cerebellar"></span>Cerebellar</span>
              <span class="pathway-legend-item"><span class="pathway-dot autonomic"></span>Symp/BG</span>
            </div>
          ` : ''}

          <!-- Bottom HUD with Selection Pills & Hover info -->
          <div class="diagram-footer-hud">
            <div class="selected-pills-wrap">
              <span style="font-size:11px; font-weight:700; color:#64748b; text-transform:uppercase;">Selected:</span>
              ${state.selectedStructures.length === 0 ? `
                <span class="selection-empty-text">
                  ${state.selectedLevel ? 'No structures selected yet. Click on the diagram above.' : 'Select a CNS level in Step 1 first.'}
                </span>
              ` : state.selectedStructures.map(sId => `
                <div class="struct-pill">
                  <span>${formatStructName(sId)}</span>
                  ${!state.step2Checked ? `<span class="struct-pill-remove" data-remove="${sId}">×</span>` : ''}
                </div>
              `).join('')}
            </div>

            <div class="hover-info-badge" id="hover-info-badge">
              ${state.hoveredStructInfo || 'Hover over any tract, nucleus, or cortical territory to view details'}
            </div>
          </div>

          <!-- Dedicated Step 2 Verification & Feedback HUD -->
          <div class="step2-verification-hud">
            ${!state.step2Checked ? `
              <div class="step2-action-row">
                <button id="btn-check-step2" class="btn-step2-check ${!state.selectedLevel || state.selectedStructures.length === 0 ? 'btn-disabled' : ''}">
                  <span>⚡ Check Lesion Location (Step 2)</span>
                </button>
                <span class="step2-action-guide">
                  ${!state.selectedLevel
                    ? '👈 Complete Step 1 on the left first'
                    : state.selectedStructures.length === 0
                      ? '👆 Click tracts, nuclei, or cortical regions on the diagram'
                      : '🎯 Click to verify your selected level & structures'}
                </span>
              </div>
            ` : `
              <!-- Step 2 Checked: Location Feedback Banner -->
              <div class="step2-feedback-banner ${state.step2Feedback.isLocationCorrect ? 'success' : state.step2Feedback.levelCorrect ? 'partial' : 'error'}">
                <div class="step2-feedback-top">
                  <span class="step2-feedback-icon">${state.step2Feedback.isLocationCorrect ? '🎯' : state.step2Feedback.levelCorrect ? '⚠️' : '❌'}</span>
                  <div class="step2-feedback-heading">
                    <strong>
                      ${state.step2Feedback.isLocationCorrect
                        ? 'Spot-on Localization!'
                        : state.step2Feedback.levelCorrect
                          ? 'Level is Correct, But Re-Check Target Structures'
                          : 'CNS Level Needs Adjustment'}
                    </strong>
                    <span class="step2-subtext">
                      ${state.step2Feedback.isLocationCorrect
                        ? `Matched: ${state.step2Feedback.matchedLocation.levelLabel} • ${state.step2Feedback.matchedLocation.structureNames}`
                        : state.step2Feedback.levelCorrect
                          ? `Level verified (${state.step2Feedback.matchedLocation.levelLabel}). See dashed green outlines on diagram for target.`
                          : `Selected: ${getCurrentLevelName(state.selectedLevel)} | Expected: ${currentCase.correctLevelDetail}`}
                    </span>
                  </div>
                </div>

                ${validLocations.length > 1 ? `
                  <div class="multi-loc-ref-bar">
                    <span class="multi-loc-ref-label">📍 Multiple Valid Locations (click to preview):</span>
                    <div class="multi-loc-ref-pills">
                      ${validLocations.map((loc, idx) => `
                        <button class="ref-loc-pill ${state.activeRefLocIndex === idx ? 'active' : ''}" data-ref-loc="${idx}" title="${loc.note || loc.structureNames}">
                          ${loc.levelLabel}
                        </button>
                      `).join('')}
                    </div>
                    ${state.activeRefLocIndex !== null && validLocations[state.activeRefLocIndex]?.note ? `
                      <div class="multi-loc-ref-note">
                        💡 ${validLocations[state.activeRefLocIndex].note}
                      </div>
                    ` : ''}
                  </div>
                ` : ''}

                <div class="step2-feedback-bottom">
                  ${state.step2Feedback.isLocationCorrect ? `
                    <div class="step2-next-prompt">
                      <span>👇 <strong>Step 3</strong> is now unlocked on the left panel! ${isStrokeMode ? 'Identify the occluded artery and mechanism' : 'Follow up on the mechanism'} to finish the case.</span>
                    </div>
                  ` : state.step2Feedback.levelCorrect ? `
                    <div class="step2-next-prompt">
                      <span>Target: <strong>${state.step2Feedback.matchedLocation.structureNames}</strong>. Adjust or proceed to <strong>Step 3</strong> on the left.</span>
                    </div>
                  ` : `
                    <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                      <span style="font-size:12px; color:#fecdd3;">Inspect the target diagram?</span>
                      <button id="btn-switch-to-target-level" class="btn-inline-fix">
                        Switch to ${currentCase.correctLevelDetail}
                      </button>
                    </div>
                  `}

                  <button id="btn-recheck-step2" class="btn-recheck-inline" title="Make changes to location">
                    ✏️ Re-edit Location
                  </button>
                </div>
              </div>
            `}
          </div>
        </div>
      </section>
    </main>

    <!-- Attribution Footer -->
    <footer class="app-footer">
      <div class="app-footer-inner">
        <span>Created by <strong>Mark Youssef</strong> (Medical Student, JSMBS)</span>
        <span class="footer-dot" aria-hidden="true">•</span>
        <span>Adapted from the lecture of <strong>Dr. David Freedman</strong></span>
        <span class="footer-dot" aria-hidden="true">•</span>
        <span>Inspired by <strong>Dr. Chris Cohan's</strong> materials</span>
      </div>
    </footer>

    <!-- Slide & Stroke Reference Atlas Modal -->
    ${state.showAtlasModal ? renderAtlasModal() : ''}

    <!-- Drawing Tip Modal -->
    ${state.showDrawingTipModal ? renderDrawingTipModal(currentCase) : ''}
  `;

  attachEventHandlers();
}

function renderEmptyLevelPrompt(isStrokeMode) {
  return `
    <div class="empty-level-prompt">
      <span style="font-size:44px; filter:drop-shadow(0 0 16px rgba(99,102,241,0.5));">${isStrokeMode ? '🩸' : '🎯'}</span>
      <h3>Complete Step 1 on the Left</h3>
      <p>${isStrokeMode
        ? 'Select the affected CNS level — choose a brainstem cross-section, Diencephalon/Internal Capsule, or the new Cortical Territories (ACA / MCA / PCA) brain map!'
        : 'Select what CNS level you think the lesion is located at (e.g., Spinal Cord, Rostral Medulla, Pons, Midbrain, or Cortical Territories). The interactive diagram will appear here!'}</p>
    </div>
  `;
}

function getBadgeClass(source) {
  if (source.includes('Exam 3 Stroke')) return 'badge-stroke-exam3';
  if (source.includes('Brainstem Stroke')) return 'badge-stroke-brainstem';
  if (source.includes('Exam 1 Cases -')) return 'badge-exam1';
  if (source.includes('Exam 1 Cases Continued -')) return 'badge-exam1-cont';
  return 'badge-hy';
}

function getCurrentLevelName(levelId) {
  const lvl = DIAGRAM_LEVELS.find(l => l.id === levelId);
  return lvl ? `${lvl.name} (${lvl.subtitle})` : levelId;
}

function formatStructName(sId) {
  return sId.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

// Render Feedback Card (Full Case Debrief after Step 3)
function renderFeedbackCard(c, validLocations) {
  const fb = state.feedback;
  const isAllCorrect = fb.isCorrect;
  const isStrokeMode = state.activeMode === 'stroke';

  return `
    <div class="feedback-modal-card ${isAllCorrect ? 'correct' : 'incorrect'}">
      <div class="feedback-header-row">
        <div class="feedback-title-badge ${isAllCorrect ? 'correct' : 'incorrect'}">
          <span>${isAllCorrect ? '✅ Brilliant Diagnosis!' : '⚠️ Case Review & Synthesis'}</span>
        </div>
        <span class="syndrome-tag">${c.clinicalSyndrome}</span>
      </div>

      <!-- Checklist of evaluation criteria -->
      <div class="feedback-checklist">
        <div class="check-item ${fb.levelCorrect ? 'passed' : 'failed'}">
          <span class="check-item-label">Step 1: CNS Level</span>
          <span class="check-item-val">${fb.levelCorrect ? (fb.matchedLocation?.levelLabel || c.correctLevelDetail) : `Chosen: ${getCurrentLevelName(state.selectedLevel)} (Target: ${c.correctLevelDetail})`}</span>
        </div>

        <div class="check-item ${fb.sideCorrect ? 'passed' : 'failed'}">
          <span class="check-item-label">Side of Lesion</span>
          <span class="check-item-val">${c.correctSide.toUpperCase()}</span>
        </div>

        <div class="check-item ${fb.structCorrect ? 'passed' : 'failed'}">
          <span class="check-item-label">Step 2: Target Structures</span>
          <span class="check-item-val">${fb.matchedLocation?.structureNames || c.correctStructureNames}</span>
        </div>

        ${isStrokeMode ? `
          <div class="check-item ${fb.arteryCorrect ? 'passed' : 'failed'}">
            <span class="check-item-label">Step 3A: Occluded Artery</span>
            <span class="check-item-val">${c.correctArteryLabel}</span>
          </div>
        ` : ''}

        <div class="check-item ${fb.whyCorrect ? 'passed' : 'failed'}">
          <span class="check-item-label">Step ${isStrokeMode ? '3B' : '3'}: Mechanism (Why)</span>
          <span class="check-item-val">${fb.whyCorrect ? 'Correct Pathophysiology Selected' : 'Incorrect Mechanism Selected'}</span>
        </div>
      </div>

      ${validLocations.length > 1 ? `
        <div class="multi-loc-debrief-box">
          <div class="multi-loc-debrief-header">📍 All Valid Localizations (${validLocations.length} accepted answers — click to inspect on diagram)</div>
          <div class="multi-loc-debrief-list">
            ${validLocations.map((loc, idx) => `
              <button class="multi-loc-debrief-item ${state.activeRefLocIndex === idx ? 'active' : ''}" data-ref-loc="${idx}">
                <div class="multi-loc-item-title">${loc.levelLabel} — <span>${loc.structureNames}</span></div>
                ${loc.note ? `<div class="multi-loc-item-note">${loc.note}</div>` : ''}
              </button>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Lecture Rule Callout -->
      <div class="dr-cohan-tip-box">
        <div class="dr-cohan-tip-header">💡 ${isStrokeMode ? 'Stroke Localization Rule' : "Dr. Cohan's Lecture Rule"}</div>
        <p class="dr-cohan-tip-text">"${c.drCohanRule}"</p>
      </div>

      <!-- How to Draw Neatly for Full Credit -->
      <div class="drawing-neat-box">
        <div class="drawing-neat-header">✏️ Exam Drawing Instructions (Full Credit)</div>
        <p class="drawing-neat-text">${c.drawingInstruction}</p>
      </div>

      <!-- Full Explanation -->
      <p style="font-size:12.5px; color:#94a3b8; line-height:1.55; margin-bottom:14px;">
        ${c.explanation}
      </p>

      <button id="btn-next-case-feedback" class="btn-next-case">
        <span>Advance to Next Case ▶</span>
      </button>
    </div>
  `;
}

// Render Dr. Cohan Drawing Atlas & Stroke Reference Modal
function renderAtlasModal() {
  const currentSlide = DR_COHAN_SLIDES[state.activeAtlasSlide] || DR_COHAN_SLIDES[0];
  const isStrokeTab = state.activeAtlasTab === 'stroke';

  return `
    <div class="modal-backdrop" id="atlas-modal-backdrop">
      <div class="modal-window">
        <div class="modal-header">
          <div>
            <h2>${isStrokeTab ? '🩸 Stroke Vascular Territories & Brainstem Reference' : "🎨 Dr. Chris Cohan's CNS Drawing Atlas"}</h2>
            <p style="font-size:11px; color:#94a3b8;">Jacobs School of Medicine (JSMBS) • IMC 535 Neuroanatomy • Created by Mark Youssef • Adapted from Dr. David Freedman's lecture &amp; inspired by Dr. Chris Cohan's materials</p>
          </div>
          <div style="display:flex; align-items:center; gap:8px;">
            <div class="atlas-tab-group">
              <button class="filter-pill ${!isStrokeTab ? 'active' : ''}" data-atlas-tab="cohan">🎨 Drawing Guide (14)</button>
              <button class="filter-pill ${isStrokeTab ? 'active' : ''}" data-atlas-tab="stroke">🩸 Stroke Reference</button>
            </div>
            <button id="btn-close-atlas" class="btn-close">×</button>
          </div>
        </div>

        <div class="modal-body">
          ${isStrokeTab ? `
            <h3 style="font-family:var(--font-display); font-size:15px; color:#fff; margin-bottom:10px;">
              Cerebral Arterial Territories (Stroke Lecture Slide 11)
            </h3>
            <div class="stroke-ref-territory-grid">
              ${STROKE_QUICK_REFERENCE.corticalTerritories.map(t => `
                <div class="stroke-ref-card" style="border-left: 3px solid ${t.color};">
                  <div class="stroke-ref-title" style="color:${t.color};">${t.artery}</div>
                  <div class="stroke-ref-regions">${t.regions}</div>
                  <div class="stroke-ref-deficits">${t.deficits}</div>
                </div>
              `).join('')}
            </div>

            <h3 style="font-family:var(--font-display); font-size:15px; color:#fff; margin:18px 0 10px;">
              Brainstem Stroke Level-by-Level Summary (Dr. Freedman)
            </h3>
            <div class="stroke-ref-table-wrap">
              <table class="stroke-ref-table">
                <thead>
                  <tr>
                    <th>Level</th>
                    <th>Marker CN</th>
                    <th>Ipsilateral Findings</th>
                    <th>Contralateral Findings</th>
                    <th>Artery</th>
                  </tr>
                </thead>
                <tbody>
                  ${STROKE_QUICK_REFERENCE.brainstemTable.map(row => `
                    <tr>
                      <td><strong>${row.level}</strong></td>
                      <td><span class="cn-chip">${row.cn}</span></td>
                      <td>${row.ipsi}</td>
                      <td>${row.contra}</td>
                      <td><span class="artery-chip">${row.artery}</span></td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          ` : `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
              <div style="display:flex; gap:6px; overflow-x:auto; max-width:700px;">
                ${DR_COHAN_SLIDES.map((s, idx) => `
                  <button class="filter-pill ${idx === state.activeAtlasSlide ? 'active' : ''}" data-slide="${idx}">
                    Slide ${s.slideNum}
                  </button>
                `).join('')}
              </div>
              <span style="font-family:var(--font-mono); font-size:12px; color:var(--accent-cyan);">
                Slide ${currentSlide.slideNum} of 14
              </span>
            </div>

            <div style="background:rgba(15,23,42,0.8); border:1px solid rgba(6,182,212,0.3); border-radius:14px; padding:20px; margin-bottom:20px;">
              <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:10px;">
                <div>
                  <span class="slide-number-pill">SLIDE ${currentSlide.slideNum} • ${currentSlide.concept}</span>
                  <h3 style="font-family:var(--font-display); font-size:18px; color:#fff; margin-top:4px;">
                    ${currentSlide.title}
                  </h3>
                </div>
                <span class="slide-card-mnemonic">${currentSlide.mnemonic}</span>
              </div>

              <p style="font-size:13.5px; color:#cbd5e1; line-height:1.6; margin-bottom:14px;">
                ${currentSlide.summary}
              </p>

              <div style="background:rgba(10,15,29,0.6); padding:12px; border-radius:10px;">
                <span style="font-size:11px; font-weight:700; color:var(--accent-cyan); text-transform:uppercase;">Key Points to Remember:</span>
                <ul style="margin-left:18px; margin-top:6px; font-size:12.5px; color:#94a3b8;">
                  ${currentSlide.keyPoints.map(kp => `<li style="margin-bottom:4px;">${kp}</li>`).join('')}
                </ul>
              </div>
            </div>

            <div class="atlas-grid">
              ${DR_COHAN_SLIDES.map((s, idx) => `
                <div class="atlas-slide-card" data-slide="${idx}" style="cursor:pointer; ${idx === state.activeAtlasSlide ? 'border-color:var(--accent-cyan); background:rgba(6,182,212,0.1);' : ''}">
                  <div style="display:flex; justify-content:space-between;">
                    <span class="slide-number-pill">Slide ${s.slideNum}</span>
                    <span style="font-size:10px; color:var(--accent-amber); font-weight:600;">${s.mnemonic}</span>
                  </div>
                  <div class="slide-card-title">${s.title}</div>
                  <div class="slide-card-summary">${s.summary.substring(0, 95)}...</div>
                </div>
              `).join('')}
            </div>
          `}
        </div>
      </div>
    </div>
  `;
}

// Render Drawing Tip Modal
function renderDrawingTipModal(c) {
  return `
    <div class="modal-backdrop" id="drawing-modal-backdrop">
      <div class="modal-window" style="max-width:600px;">
        <div class="modal-header">
          <h2>✏️ Exam Drawing Instructions</h2>
          <button id="btn-close-drawing" class="btn-close">×</button>
        </div>
        <div class="modal-body">
          <div style="background:rgba(6,182,212,0.1); border:1px solid rgba(6,182,212,0.3); border-radius:12px; padding:16px; margin-bottom:16px;">
            <div style="font-family:var(--font-display); font-size:12px; color:var(--accent-cyan); font-weight:700; text-transform:uppercase;">
              Prompt Requirement:
            </div>
            <p style="font-size:12.5px; color:#e2e8f0; margin-top:4px; font-style:italic;">
              "Draw a cross-sectional diagram (similar to your slides) showing the damaged area... indicate the SIDE, POSITION and NAMES of structures, and the most likely LEVEL. If you wish to receive full credit, DRAW NEATLY."
            </p>
          </div>

          <h3 style="font-size:15px; color:#fff; margin-bottom:8px;">How to Draw for ${c.source}:</h3>
          <p style="font-size:13.5px; color:#cbd5e1; line-height:1.6; margin-bottom:14px;">
            ${c.drawingInstruction}
          </p>

          <div style="background:rgba(245,158,11,0.1); border:1px solid rgba(245,158,11,0.3); border-radius:12px; padding:14px;">
            <span style="font-size:11px; font-weight:700; color:var(--accent-amber); text-transform:uppercase;">Localization Rule:</span>
            <p style="font-size:12.5px; color:#fde68a; margin-top:4px;">
              ${c.drCohanRule}
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Event Listeners and Interaction Handling
function attachEventHandlers() {
  // Mode Switcher (Lesion Quiz vs Stroke Localization)
  document.querySelectorAll('.mode-btn[data-mode]').forEach(btn => {
    btn.addEventListener('click', () => {
      const nextMode = btn.dataset.mode;
      if (state.activeMode !== nextMode) {
        state.activeMode = nextMode;
        state.activeFilter = 'all';
        state.currentCaseIndex = 0;
        resetCaseInputs();
        renderApp();
      }
    });
  });

  // Filter pills
  document.querySelectorAll('.filter-pill[data-filter]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      state.activeFilter = e.currentTarget.dataset.filter;
      state.currentCaseIndex = 0;
      resetCaseInputs();
      renderApp();
    });
  });

  // Case Dropdown
  const dropdown = document.getElementById('case-select-dropdown');
  if (dropdown) {
    dropdown.addEventListener('change', (e) => {
      state.currentCaseIndex = parseInt(e.target.value, 10);
      resetCaseInputs();
      renderApp();
    });
  }

  // Prev / Next Navigation buttons
  const prevBtn = document.getElementById('btn-prev-case');
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (state.currentCaseIndex > 0) {
        state.currentCaseIndex--;
        resetCaseInputs();
        renderApp();
      }
    });
  }

  const nextNavBtn = document.getElementById('btn-next-case-nav');
  if (nextNavBtn) {
    nextNavBtn.addEventListener('click', () => {
      const filtered = getFilteredCases();
      if (state.currentCaseIndex < filtered.length - 1) {
        state.currentCaseIndex++;
        resetCaseInputs();
        renderApp();
      }
    });
  }

  // Next Case Feedback Button
  const nextFeedbackBtn = document.getElementById('btn-next-case-feedback');
  if (nextFeedbackBtn) {
    nextFeedbackBtn.addEventListener('click', () => {
      const filtered = getFilteredCases();
      if (state.currentCaseIndex < filtered.length - 1) {
        state.currentCaseIndex++;
      } else {
        state.currentCaseIndex = 0;
      }
      resetCaseInputs();
      renderApp();
    });
  }

  // Step 1: Level Picker Buttons
  document.querySelectorAll('[data-pick-level]').forEach(btn => {
    btn.addEventListener('click', () => {
      const levelId = btn.dataset.pickLevel;
      state.selectedLevel = levelId;
      state.selectedStructures = [];
      state.step2Checked = false;
      state.step2Feedback = null;
      state.activeRefLocIndex = null;
      state.selectedArtery = null;
      state.selectedWhyIndex = null;
      state.step3Checked = false;
      state.feedback = null;
      renderApp();
    });
  });

  // Reference Location Switcher (Multi-Location Cases)
  document.querySelectorAll('[data-ref-loc]').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.refLoc, 10);
      const currentCase = getCurrentCase();
      const locs = getValidLocations(currentCase);
      if (locs[idx]) {
        state.activeRefLocIndex = idx;
        state.selectedLevel = locs[idx].level;
        renderApp();
      }
    });
  });

  // SVG Click on Interactive Structures (Step 2)
  const svgContainer = document.getElementById('svg-container');
  if (svgContainer) {
    svgContainer.addEventListener('click', (e) => {
      if (state.step2Checked) return;
      const struct = e.target.closest('.interactive-struct');
      if (struct) {
        const structId = struct.dataset.id;
        if (state.selectedStructures.includes(structId)) {
          state.selectedStructures = state.selectedStructures.filter(id => id !== structId);
        } else {
          state.selectedStructures.push(structId);
        }
        renderApp();
      }
    });

    svgContainer.addEventListener('mouseover', (e) => {
      const struct = e.target.closest('.interactive-struct');
      const badge = document.getElementById('hover-info-badge');
      if (struct && badge) {
        const name = struct.dataset.name || struct.dataset.id;
        const info = struct.dataset.info || '';
        badge.innerHTML = `<strong>${name}</strong>: ${info}`;
      }
    });

    svgContainer.addEventListener('mouseout', (e) => {
      const struct = e.target.closest('.interactive-struct');
      const badge = document.getElementById('hover-info-badge');
      if (struct && badge) {
        badge.textContent = 'Hover over any tract, nucleus, or cortical territory to view details';
      }
    });
  }

  // Remove struct pill
  document.querySelectorAll('.struct-pill-remove').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const sId = btn.dataset.remove;
      state.selectedStructures = state.selectedStructures.filter(id => id !== sId);
      renderApp();
    });
  });

  // Check Step 2 (Location) Button
  const checkStep2Btn = document.getElementById('btn-check-step2');
  if (checkStep2Btn) {
    checkStep2Btn.addEventListener('click', () => {
      evaluateStep2Location();
    });
  }

  // Re-edit Step 2 Button
  const recheckStep2Btn = document.getElementById('btn-recheck-step2');
  if (recheckStep2Btn) {
    recheckStep2Btn.addEventListener('click', () => {
      state.step2Checked = false;
      state.step2Feedback = null;
      state.activeRefLocIndex = null;
      renderApp();
    });
  }

  // Switch to target level button (from Step 2 feedback error banner)
  const switchToTargetBtn = document.getElementById('btn-switch-to-target-level');
  if (switchToTargetBtn) {
    switchToTargetBtn.addEventListener('click', () => {
      const currentCase = getCurrentCase();
      const locs = getValidLocations(currentCase);
      const primary = locs[0];
      state.selectedLevel = primary.level;
      state.selectedStructures = [...primary.structures];
      state.activeRefLocIndex = 0;
      state.step2Checked = true;
      state.step2Feedback = {
        isLocationCorrect: true,
        levelCorrect: true,
        structCorrect: true,
        sideCorrect: true,
        correctStructures: primary.structures,
        matchedLocation: primary,
        validLocations: locs
      };
      renderApp();
      setTimeout(() => {
        const step3 = document.getElementById('step-3-card');
        if (step3) step3.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    });
  }

  // Step 3A: Artery Picker Buttons (Stroke Mode)
  document.querySelectorAll('.artery-pick-btn[data-artery]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (state.step3Checked) return;
      state.selectedArtery = btn.dataset.artery;
      renderApp();
    });
  });

  // Step 3 (or 3B): Why Radios
  document.querySelectorAll('.why-option-card').forEach(card => {
    card.addEventListener('click', () => {
      if (state.step3Checked) return;
      const radio = card.querySelector('input[type="radio"]');
      if (radio) {
        radio.checked = true;
        state.selectedWhyIndex = parseInt(radio.value, 10);
        document.querySelectorAll('.why-option-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        const checkStep3Btn = document.getElementById('btn-check-step3');
        const ready = state.activeMode === 'stroke' ? (state.selectedArtery !== null) : true;
        if (checkStep3Btn && ready) {
          checkStep3Btn.removeAttribute('disabled');
          checkStep3Btn.style.opacity = '1';
          checkStep3Btn.style.cursor = 'pointer';
        }
      }
    });
  });

  // Check Step 3 Button
  const checkStep3Btn = document.getElementById('btn-check-step3');
  if (checkStep3Btn) {
    checkStep3Btn.addEventListener('click', () => {
      evaluateStep3Mechanism();
    });
  }

  // Reset Selection
  const resetBtn = document.getElementById('btn-reset-selection');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      resetCaseInputs();
      renderApp();
    });
  }

  // Atlas Modal Open/Close & Tabs
  const openAtlasBtn = document.getElementById('btn-open-atlas');
  if (openAtlasBtn) {
    openAtlasBtn.addEventListener('click', () => {
      state.showAtlasModal = true;
      state.activeAtlasTab = state.activeMode === 'stroke' ? 'stroke' : 'cohan';
      renderApp();
    });
  }

  document.querySelectorAll('[data-atlas-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.activeAtlasTab = btn.dataset.atlasTab;
      renderApp();
    });
  });

  const closeAtlasBtn = document.getElementById('btn-close-atlas');
  if (closeAtlasBtn) {
    closeAtlasBtn.addEventListener('click', () => {
      state.showAtlasModal = false;
      renderApp();
    });
  }

  const atlasBackdrop = document.getElementById('atlas-modal-backdrop');
  if (atlasBackdrop) {
    atlasBackdrop.addEventListener('click', (e) => {
      if (e.target === atlasBackdrop) {
        state.showAtlasModal = false;
        renderApp();
      }
    });
  }

  // Slide Selection in Atlas
  document.querySelectorAll('[data-slide]').forEach(elem => {
    elem.addEventListener('click', () => {
      const slideIdx = parseInt(elem.closest('[data-slide]').dataset.slide, 10);
      state.activeAtlasSlide = slideIdx;
      renderApp();
    });
  });

  // Cortical Territories View Zoom Switcher (All 4 / Lateral 2x / Medial 2x)
  document.querySelectorAll('[data-cortical-view]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.corticalView = btn.dataset.corticalView;
      renderApp();
    });
  });

  // Toggle Blind Diagram Labels
  const toggleHintsBtn = document.getElementById('btn-toggle-hints');
  if (toggleHintsBtn) {
    toggleHintsBtn.addEventListener('click', () => {
      state.hideDiagramHints = !state.hideDiagramHints;
      renderApp();
    });
  }

  // Reset Stats & Solved Progress
  const resetStatsBtn = document.getElementById('btn-reset-stats');
  if (resetStatsBtn) {
    resetStatsBtn.addEventListener('click', () => {
      if (!confirm('Reset your accuracy, streak, and solved case checkmarks?')) return;
      state.stats = { attempted: 0, correct: 0, streak: 0, bestStreak: 0 };
      state.solvedCases = new Set();
      localStorage.removeItem('neuro_attempted');
      localStorage.removeItem('neuro_correct');
      localStorage.removeItem('neuro_streak');
      localStorage.removeItem('neuro_best_streak');
      localStorage.removeItem('neuro_solved_cases');
      renderApp();
    });
  }

  // Drawing Tip Modal
  const viewDrawTipBtn = document.getElementById('btn-view-drawing-tip');
  if (viewDrawTipBtn) {
    viewDrawTipBtn.addEventListener('click', () => {
      state.showDrawingTipModal = true;
      renderApp();
    });
  }

  const closeDrawBtn = document.getElementById('btn-close-drawing');
  if (closeDrawBtn) {
    closeDrawBtn.addEventListener('click', () => {
      state.showDrawingTipModal = false;
      renderApp();
    });
  }

  const drawBackdrop = document.getElementById('drawing-modal-backdrop');
  if (drawBackdrop) {
    drawBackdrop.addEventListener('click', (e) => {
      if (e.target === drawBackdrop) {
        state.showDrawingTipModal = false;
        renderApp();
      }
    });
  }
}

function resetCaseInputs() {
  state.selectedLevel = null;
  state.selectedStructures = [];
  state.step2Checked = false;
  state.step2Feedback = null;
  state.activeRefLocIndex = null;
  state.selectedArtery = null;
  state.selectedWhyIndex = null;
  state.step3Checked = false;
  state.feedback = null;
}

// Evaluate Step 2: Location (Supports Multiple Valid Levels & Structure Sets!)
function evaluateStep2Location() {
  const currentCase = getCurrentCase();

  if (!state.selectedLevel) {
    alert("Please complete Step 1 first: Select what CNS level or cortical region you think is affected.");
    const step1 = document.getElementById('step-1-card');
    if (step1) step1.scrollIntoView({ behavior: 'smooth' });
    return;
  }

  if (state.selectedStructures.length === 0) {
    alert("Please pinpoint the lesion: Click on the diagram where you expect the lesion to be.");
    return;
  }

  const validLocations = getValidLocations(currentCase);
  const selectedSet = new Set(state.selectedStructures);

  const levelMatches = validLocations.filter(loc => loc.level === state.selectedLevel);
  const levelCorrect = levelMatches.length > 0;

  let exactMatch = null;
  for (const loc of levelMatches) {
    const targetSet = new Set(loc.structures);
    if (selectedSet.size === targetSet.size && [...selectedSet].every(s => targetSet.has(s))) {
      exactMatch = loc;
      break;
    }
  }

  const structCorrect = Boolean(exactMatch);
  const matchedLocation = exactMatch || levelMatches[0] || validLocations[0];
  const matchedIdx = validLocations.indexOf(matchedLocation);

  // Determine side correctness
  let sideCorrect = false;
  if (currentCase.correctSide === 'bilateral' || currentCase.correctSide === 'midline') {
    sideCorrect = true;
  } else {
    sideCorrect = state.selectedStructures.some(s => s.includes(currentCase.correctSide));
  }

  const isLocationCorrect = levelCorrect && structCorrect;

  state.step2Checked = true;
  state.activeRefLocIndex = isLocationCorrect ? matchedIdx : null;
  state.step2Feedback = {
    isLocationCorrect,
    levelCorrect,
    structCorrect,
    sideCorrect,
    correctStructures: matchedLocation.structures,
    matchedLocation,
    validLocations
  };

  renderApp();

  setTimeout(() => {
    const step3 = document.getElementById('step-3-card');
    if (step3) {
      step3.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, 100);
}

// Evaluate Step 3: (Artery in Stroke Mode +) Pathophysiological Mechanism (Why) & Complete Case
function evaluateStep3Mechanism() {
  const currentCase = getCurrentCase();
  const isStrokeMode = state.activeMode === 'stroke';

  if (isStrokeMode && state.selectedArtery === null) {
    alert("Please select the occluded artery in Step 3A.");
    return;
  }

  if (state.selectedWhyIndex === null) {
    alert("Please select a pathophysiological mechanism ('Why') in Step 3.");
    return;
  }

  const arteryCorrect = isStrokeMode
    ? Boolean(currentCase.correctArteries && currentCase.correctArteries.includes(state.selectedArtery))
    : true;
  const whyCorrect = state.selectedWhyIndex === currentCase.correctWhyIndex;
  const isOverallCorrect = Boolean(state.step2Feedback && state.step2Feedback.isLocationCorrect && arteryCorrect && whyCorrect);

  state.step3Checked = true;
  state.feedback = {
    isCorrect: isOverallCorrect,
    levelCorrect: state.step2Feedback ? state.step2Feedback.levelCorrect : false,
    sideCorrect: state.step2Feedback ? state.step2Feedback.sideCorrect : false,
    structCorrect: state.step2Feedback ? state.step2Feedback.structCorrect : false,
    arteryCorrect,
    whyCorrect,
    correctStructures: state.step2Feedback ? state.step2Feedback.correctStructures : currentCase.correctStructures,
    matchedLocation: state.step2Feedback ? state.step2Feedback.matchedLocation : null
  };

  // Update Stats
  state.stats.attempted++;
  if (isOverallCorrect) {
    state.stats.correct++;
    state.stats.streak++;
    if (state.stats.streak > state.stats.bestStreak) {
      state.stats.bestStreak = state.stats.streak;
    }
    state.solvedCases.add(currentCase.id);
    localStorage.setItem('neuro_solved_cases', JSON.stringify([...state.solvedCases]));
  } else {
    state.stats.streak = 0;
  }

  localStorage.setItem('neuro_attempted', state.stats.attempted.toString());
  localStorage.setItem('neuro_correct', state.stats.correct.toString());
  localStorage.setItem('neuro_streak', state.stats.streak.toString());
  localStorage.setItem('neuro_best_streak', state.stats.bestStreak.toString());

  renderApp();

  setTimeout(() => {
    const fbCard = document.querySelector('.feedback-modal-card');
    if (fbCard) {
      fbCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 100);
}

// Global Keyboard Navigation
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    state.showAtlasModal = false;
    state.showDrawingTipModal = false;
    renderApp();
    return;
  }

  if (state.showAtlasModal || state.showDrawingTipModal) return;
  const tag = document.activeElement?.tagName;
  if (tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA') return;

  if (e.key === 'ArrowLeft' && state.currentCaseIndex > 0) {
    state.currentCaseIndex--;
    resetCaseInputs();
    renderApp();
  } else if (e.key === 'ArrowRight') {
    const filtered = getFilteredCases();
    if (state.currentCaseIndex < filtered.length - 1) {
      state.currentCaseIndex++;
      resetCaseInputs();
      renderApp();
    }
  }
});

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
});
