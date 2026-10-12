import { CLINICAL_CASES } from './cases.js';
import { DIAGRAM_LEVELS, renderDiagramSVG } from './diagrams.js';
import { sound } from './audio.js';
import { DR_COHAN_SLIDES } from './atlas.js';

// Application State
const state = {
  cases: [...CLINICAL_CASES],
  currentCaseIndex: 0,
  activeFilter: 'all',
  selectedLevel: CLINICAL_CASES[0].correctLevel,
  selectedStructures: [],
  selectedWhyIndex: null,
  feedback: null,
  stats: {
    attempted: parseInt(localStorage.getItem('neuro_attempted') || '0', 10),
    correct: parseInt(localStorage.getItem('neuro_correct') || '0', 10),
    streak: parseInt(localStorage.getItem('neuro_streak') || '0', 10),
    bestStreak: parseInt(localStorage.getItem('neuro_best_streak') || '0', 10)
  },
  showAtlasModal: false,
  activeAtlasSlide: 0,
  showDrawingTipModal: false,
  hoveredStructInfo: null,
  examMode: false
};

// Filtered Cases Helper
function getFilteredCases() {
  if (state.activeFilter === 'all') return state.cases;
  if (state.activeFilter === 'exam1') {
    return state.cases.filter(c => c.source.includes('Exam 1 Cases -'));
  }
  if (state.activeFilter === 'exam1_cont') {
    return state.cases.filter(c => c.source.includes('Exam 1 Cases Continued -'));
  }
  return state.cases.filter(c => c.category.toLowerCase().includes(state.activeFilter.toLowerCase()));
}

function getCurrentCase() {
  const filtered = getFilteredCases();
  if (state.currentCaseIndex >= filtered.length) {
    state.currentCaseIndex = 0;
  }
  return filtered[state.currentCaseIndex] || state.cases[0];
}

// Main Render Function
function renderApp() {
  const app = document.getElementById('app');
  const currentCase = getCurrentCase();
  const filtered = getFilteredCases();
  const accuracy = state.stats.attempted > 0 
    ? Math.round((state.stats.correct / state.stats.attempted) * 100) 
    : 100;

  app.innerHTML = `
    <!-- Top Header -->
    <header class="app-header">
      <div class="brand-section">
        <div class="brand-logo-icon">🧠</div>
        <div class="brand-text">
          <h1>Neuroanatomy Lesion Studio</h1>
          <p>40 Clinical Cases • Dr. Chris Cohan's Brainstem Drawing System</p>
        </div>
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
        </div>

        <button id="btn-toggle-exam" class="btn-icon ${state.examMode ? 'active' : ''}" title="Toggle Exam / Practice Mode">
          <span>${state.examMode ? '📝 Exam Mode' : '💡 Practice Mode'}</span>
        </button>

        <button id="btn-open-atlas" class="btn-icon" title="View Dr. Cohan's 14-Slide Drawing Atlas">
          <span>🎨 Dr. Cohan's Drawing Guide</span>
        </button>

        <button id="btn-toggle-mute" class="btn-icon" title="Mute/Unmute Sounds">
          <span>${sound.muted ? '🔇' : '🔊'}</span>
        </button>
      </div>
    </header>

    <!-- Main Workspace Grid -->
    <main class="app-container">
      <!-- LEFT PANEL: Case Presentation & Why Selector -->
      <section class="left-panel">
        <div class="case-control-bar">
          <!-- Filter Pills -->
          <div class="filter-pills-row">
            <button class="filter-pill ${state.activeFilter === 'all' ? 'active' : ''}" data-filter="all">All 40 Cases</button>
            <button class="filter-pill ${state.activeFilter === 'exam1' ? 'active' : ''}" data-filter="exam1">Exam 1 (Cases 1-6)</button>
            <button class="filter-pill ${state.activeFilter === 'exam1_cont' ? 'active' : ''}" data-filter="exam1_cont">Exam 1 Cont. (7-12)</button>
            <button class="filter-pill ${state.activeFilter === 'spinal cord' ? 'active' : ''}" data-filter="spinal cord">Spinal Cord</button>
            <button class="filter-pill ${state.activeFilter === 'medulla' ? 'active' : ''}" data-filter="medulla">Medulla</button>
            <button class="filter-pill ${state.activeFilter === 'pons' ? 'active' : ''}" data-filter="pons">Pons</button>
            <button class="filter-pill ${state.activeFilter === 'midbrain' ? 'active' : ''}" data-filter="midbrain">Midbrain</button>
            <button class="filter-pill ${state.activeFilter === 'thalamus' ? 'active' : ''}" data-filter="thalamus">Thalamus</button>
            <button class="filter-pill ${state.activeFilter === 'cortex' ? 'active' : ''}" data-filter="cortex">Cortex</button>
          </div>

          <!-- Case Pagination Dropdown -->
          <div class="case-pagination-row">
            <button id="btn-prev-case" class="btn-icon" title="Previous Case" ${state.currentCaseIndex === 0 ? 'disabled style="opacity:0.4"' : ''}>
              <span>◀ Prev</span>
            </button>
            <select id="case-select-dropdown" class="case-select-dropdown">
              ${filtered.map((c, i) => `
                <option value="${i}" ${i === state.currentCaseIndex ? 'selected' : ''}>
                  Case ${c.id}: ${c.title}
                </option>
              `).join('')}
            </select>
            <button id="btn-next-case-nav" class="btn-icon" title="Next Case" ${state.currentCaseIndex === filtered.length - 1 ? 'disabled style="opacity:0.4"' : ''}>
              <span>Next ▶</span>
            </button>
          </div>
        </div>

        <!-- Case Card -->
        <article class="card">
          <div class="case-header-row">
            <div>
              <span class="case-badge-pill ${getBadgeClass(currentCase.source)}">
                ${currentCase.source}
              </span>
              <h2 class="case-title" style="margin-top:6px;">${currentCase.title}</h2>
              <div class="case-category">Target: ${currentCase.category}</div>
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

        <!-- "Why?" Pathophysiological Mechanism Selector -->
        <div class="card why-section">
          <div class="section-label">
            <span>2. Why is the lesion located here?</span>
            <span class="hint-badge">Select Mechanism</span>
          </div>

          <div class="why-options-list">
            ${currentCase.whyOptions.map((opt, idx) => `
              <label class="why-option-card ${state.selectedWhyIndex === idx ? 'selected' : ''}">
                <input type="radio" name="why-rationale" class="why-radio" value="${idx}" ${state.selectedWhyIndex === idx ? 'checked' : ''} />
                <span class="why-text">${opt}</span>
              </label>
            `).join('')}
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="actions-bar">
          <button id="btn-check-diagnosis" class="btn-primary">
            <span>⚡ Check Diagnosis</span>
          </button>
          <button id="btn-reset-selection" class="btn-secondary" title="Clear currently clicked structures">
            <span>Reset</span>
          </button>
        </div>

        <!-- Feedback Overlay Card (if checked) -->
        ${state.feedback ? renderFeedbackCard(currentCase) : ''}
      </section>

      <!-- RIGHT PANEL: Interactive SVG & Level Switcher -->
      <section class="right-panel">
        <!-- Level Tabs -->
        <div class="level-tabs-container">
          ${DIAGRAM_LEVELS.map(lvl => `
            <button class="level-tab ${state.selectedLevel === lvl.id ? 'active' : ''}" data-level="${lvl.id}">
              <span class="level-tab-name">${lvl.name}</span>
              <span class="level-tab-mnemonic">${lvl.mnemonic}</span>
            </button>
          `).join('')}
        </div>

        <!-- Cross-Section SVG Stage -->
        <div class="diagram-stage-card">
          <div class="diagram-header-info">
            <span class="diagram-level-title">
              Level: ${getCurrentLevelName(state.selectedLevel)}
            </span>
            <span class="diagram-instructions-badge">
              👆 Click directly on damaged tract(s) or nuclei
            </span>
          </div>

          <div class="diagram-svg-container" id="svg-container">
            ${renderDiagramSVG(state.selectedLevel, state.selectedStructures, state.feedback)}
          </div>

          <!-- Bottom HUD with Selection Pills & Hover info -->
          <div class="diagram-footer-hud">
            <div class="selected-pills-wrap">
              <span style="font-size:11px; font-weight:700; color:#64748b; text-transform:uppercase;">Selected:</span>
              ${state.selectedStructures.length === 0 ? `
                <span class="selection-empty-text">No structures selected yet. Click structures on the diagram above.</span>
              ` : state.selectedStructures.map(sId => `
                <div class="struct-pill">
                  <span>${formatStructName(sId)}</span>
                  <span class="struct-pill-remove" data-remove="${sId}">×</span>
                </div>
              `).join('')}
            </div>

            <div class="hover-info-badge" id="hover-info-badge">
              ${state.hoveredStructInfo || 'Hover over any tract or nucleus to view details'}
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Slide Atlas Modal -->
    ${state.showAtlasModal ? renderAtlasModal() : ''}

    <!-- Drawing Tip Modal -->
    ${state.showDrawingTipModal ? renderDrawingTipModal(currentCase) : ''}
  `;

  attachEventHandlers();
}

function getBadgeClass(source) {
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

// Render Feedback Card
function renderFeedbackCard(c) {
  const fb = state.feedback;
  const isAllCorrect = fb.isCorrect;

  return `
    <div class="feedback-modal-card ${isAllCorrect ? 'correct' : 'incorrect'}">
      <div class="feedback-header-row">
        <div class="feedback-title-badge ${isAllCorrect ? 'correct' : 'incorrect'}">
          <span>${isAllCorrect ? '✅ Brilliant Diagnosis!' : '⚠️ Review Diagnosis'}</span>
        </div>
        <span class="syndrome-tag">${c.clinicalSyndrome}</span>
      </div>

      <!-- Checklist of 4 evaluation criteria -->
      <div class="feedback-checklist">
        <div class="check-item ${fb.levelCorrect ? 'passed' : 'failed'}">
          <span class="check-item-label">1. CNS Level</span>
          <span class="check-item-val">${c.correctLevelDetail}</span>
        </div>

        <div class="check-item ${fb.sideCorrect ? 'passed' : 'failed'}">
          <span class="check-item-label">2. Side of Lesion</span>
          <span class="check-item-val">${c.correctSide.toUpperCase()}</span>
        </div>

        <div class="check-item ${fb.structCorrect ? 'passed' : 'failed'}">
          <span class="check-item-label">3. Target Structures</span>
          <span class="check-item-val">${c.correctStructureNames}</span>
        </div>

        <div class="check-item ${fb.whyCorrect ? 'passed' : 'failed'}">
          <span class="check-item-label">4. Why / Mechanism</span>
          <span class="check-item-val">${fb.whyCorrect ? 'Correct Rationale Selected' : 'Review Pathophysiology'}</span>
        </div>
      </div>

      <!-- Dr. Cohan's Slide Rule Callout -->
      <div class="dr-cohan-tip-box">
        <div class="dr-cohan-tip-header">💡 Dr. Cohan's Lecture Rule</div>
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

// Render Dr. Cohan Atlas Modal
function renderAtlasModal() {
  const currentSlide = DR_COHAN_SLIDES[state.activeAtlasSlide] || DR_COHAN_SLIDES[0];

  return `
    <div class="modal-backdrop" id="atlas-modal-backdrop">
      <div class="modal-window">
        <div class="modal-header">
          <div>
            <h2>🎨 Dr. Chris Cohan's CNS Drawing Atlas</h2>
            <p style="font-size:11px; color:#94a3b8;">Jacobs School of Medicine • 14 Step-by-Step Drawing Slides</p>
          </div>
          <button id="btn-close-atlas" class="btn-close">×</button>
        </div>

        <div class="modal-body">
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

          <!-- Featured Slide Card -->
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

          <!-- Slide Atlas Grid Preview -->
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

          <h3 style="font-size:15px; color:#fff; margin-bottom:8px;">How to Draw for Case ${c.id}:</h3>
          <p style="font-size:13.5px; color:#cbd5e1; line-height:1.6; margin-bottom:14px;">
            ${c.drawingInstruction}
          </p>

          <div style="background:rgba(245,158,11,0.1); border:1px solid rgba(245,158,11,0.3); border-radius:12px; padding:14px;">
            <span style="font-size:11px; font-weight:700; color:var(--accent-amber); text-transform:uppercase;">Dr. Cohan's Somatotopic Rule:</span>
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
  // Filter pills
  document.querySelectorAll('.filter-pill[data-filter]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      sound.playClick();
      state.activeFilter = e.target.dataset.filter;
      state.currentCaseIndex = 0;
      resetCaseInputs();
      renderApp();
    });
  });

  // Case Dropdown
  const dropdown = document.getElementById('case-select-dropdown');
  if (dropdown) {
    dropdown.addEventListener('change', (e) => {
      sound.playClick();
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
        sound.playClick();
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
        sound.playClick();
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
      sound.playClick();
      if (state.currentCaseIndex < filtered.length - 1) {
        state.currentCaseIndex++;
      } else {
        state.currentCaseIndex = 0;
      }
      resetCaseInputs();
      renderApp();
    });
  }

  // Why Radios
  document.querySelectorAll('.why-option-card').forEach(card => {
    card.addEventListener('click', (e) => {
      sound.playClick();
      const radio = card.querySelector('input[type="radio"]');
      if (radio) {
        radio.checked = true;
        state.selectedWhyIndex = parseInt(radio.value, 10);
        document.querySelectorAll('.why-option-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
      }
    });
  });

  // Level Tabs
  document.querySelectorAll('.level-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      sound.playClick();
      const levelId = tab.closest('.level-tab').dataset.level;
      state.selectedLevel = levelId;
      renderApp();
    });
  });

  // SVG Click on Interactive Structures
  const svgContainer = document.getElementById('svg-container');
  if (svgContainer) {
    svgContainer.addEventListener('click', (e) => {
      const struct = e.target.closest('.interactive-struct');
      if (struct) {
        const structId = struct.dataset.id;
        sound.playClick();
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
        badge.textContent = 'Hover over any tract or nucleus to view details';
      }
    });
  }

  // Remove struct pill
  document.querySelectorAll('.struct-pill-remove').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      sound.playClick();
      const sId = btn.dataset.remove;
      state.selectedStructures = state.selectedStructures.filter(id => id !== sId);
      renderApp();
    });
  });

  // Reset Selection
  const resetBtn = document.getElementById('btn-reset-selection');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      sound.playClick();
      state.selectedStructures = [];
      state.selectedWhyIndex = null;
      state.feedback = null;
      renderApp();
    });
  }

  // Check Diagnosis
  const checkBtn = document.getElementById('btn-check-diagnosis');
  if (checkBtn) {
    checkBtn.addEventListener('click', () => {
      evaluateDiagnosis();
    });
  }

  // Atlas Modal Open/Close
  const openAtlasBtn = document.getElementById('btn-open-atlas');
  if (openAtlasBtn) {
    openAtlasBtn.addEventListener('click', () => {
      sound.playClick();
      state.showAtlasModal = true;
      renderApp();
    });
  }

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
    elem.addEventListener('click', (e) => {
      sound.playClick();
      const slideIdx = parseInt(elem.closest('[data-slide]').dataset.slide, 10);
      state.activeAtlasSlide = slideIdx;
      renderApp();
    });
  });

  // Drawing Tip Modal
  const viewDrawTipBtn = document.getElementById('btn-view-drawing-tip');
  if (viewDrawTipBtn) {
    viewDrawTipBtn.addEventListener('click', () => {
      sound.playClick();
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

  // Toggle Mute
  const muteBtn = document.getElementById('btn-toggle-mute');
  if (muteBtn) {
    muteBtn.addEventListener('click', () => {
      sound.toggleMute();
      renderApp();
    });
  }

  // Toggle Exam Mode
  const examToggleBtn = document.getElementById('btn-toggle-exam');
  if (examToggleBtn) {
    examToggleBtn.addEventListener('click', () => {
      sound.playClick();
      state.examMode = !state.examMode;
      resetCaseInputs();
      renderApp();
    });
  }
}

function resetCaseInputs() {
  const currentCase = getCurrentCase();
  state.selectedStructures = [];
  state.selectedWhyIndex = null;
  state.feedback = null;
  // In practice mode, we can pre-switch to the case's level to help students visualize
  if (!state.examMode) {
    state.selectedLevel = currentCase.correctLevel;
  }
}

// Evaluate Diagnosis
function evaluateDiagnosis() {
  const currentCase = getCurrentCase();

  if (state.selectedStructures.length === 0 && state.selectedWhyIndex === null) {
    alert("Please select at least one damaged structure on the cross-section diagram and choose a 'Why?' diagnostic rationale.");
    return;
  }

  const levelCorrect = state.selectedLevel === currentCase.correctLevel;
  const whyCorrect = state.selectedWhyIndex === currentCase.correctWhyIndex;

  // Check structure match
  const selectedSet = new Set(state.selectedStructures);
  const correctSet = new Set(currentCase.correctStructures);

  // Partial or full match
  let matchesAll = selectedSet.size === correctSet.size && [...selectedSet].every(s => correctSet.has(s));
  const hasAtLeastOne = [...selectedSet].some(s => correctSet.has(s));

  // Determine side correctness
  let sideCorrect = false;
  if (currentCase.correctSide === 'bilateral' || currentCase.correctSide === 'midline') {
    sideCorrect = true;
  } else {
    sideCorrect = state.selectedStructures.some(s => s.includes(currentCase.correctSide));
  }

  const isOverallCorrect = levelCorrect && matchesAll && whyCorrect;

  state.feedback = {
    isCorrect: isOverallCorrect,
    levelCorrect,
    sideCorrect,
    structCorrect: matchesAll,
    whyCorrect,
    correctStructures: currentCase.correctStructures
  };

  // Update Stats
  state.stats.attempted++;
  if (isOverallCorrect) {
    sound.playCorrect();
    state.stats.correct++;
    state.stats.streak++;
    if (state.stats.streak > state.stats.bestStreak) {
      state.stats.bestStreak = state.stats.streak;
    }
  } else {
    sound.playIncorrect();
    state.stats.streak = 0;
  }

  localStorage.setItem('neuro_attempted', state.stats.attempted.toString());
  localStorage.setItem('neuro_correct', state.stats.correct.toString());
  localStorage.setItem('neuro_streak', state.stats.streak.toString());
  localStorage.setItem('neuro_best_streak', state.stats.bestStreak.toString());

  renderApp();
}

// Global Keyboard Navigation
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    state.showAtlasModal = false;
    state.showDrawingTipModal = false;
    renderApp();
  }
});

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
});
