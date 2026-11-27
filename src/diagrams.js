// Interactive SVG Generators for Dr. Cohan's Brainstem & Spinal Cord Cross-Sections
// plus Thalamus and Cortex levels

export const DIAGRAM_LEVELS = [
      { id: "spinal_cord", name: "Spinal Cord", subtitle: "Large Oval & Butterfly Gray", mnemonic: "Slide 2 & 9" },
      { id: "caudal_medulla", name: "Caudal Medulla", subtitle: "Circle & 3 Dorsal Neighbors", mnemonic: "Slide 3 & 10" },
      { id: "rostral_medulla", name: "Rostral Medulla", subtitle: "Olives, Pyramids & 4th Ventricle", mnemonic: "Slide 4 & 11" },
      { id: "caudal_mid_pons", name: "Caudal / Mid Pons", subtitle: "Square Tegmentum & Basilar Pons", mnemonic: "Slide 5 & 12" },
      { id: "rostral_pons", name: "Rostral Pons", subtitle: "'The Snowman!'", mnemonic: "Slide 6 & 13" },
      { id: "midbrain", name: "Midbrain", subtitle: "'The Pig (from the rear)!'", mnemonic: "Slide 7 & 14" },
      { id: "thalamus", name: "Diencephalon / Thalamus", subtitle: "VPL, VPM, STN & Internal Capsule", mnemonic: "Subcortical / Lacunar" },
      { id: "cortex", name: "Cortex (Homunculus)", subtitle: "Coronal Sensory & Motor Strip", mnemonic: "Coronal Cut" },
      { id: "cortex_territories", name: "Cortical Territories", subtitle: "Lateral & Medial Brain (ACA / MCA / PCA)", mnemonic: "Stroke Lecture Slide 11" }
];

export function renderDiagramSVG(levelId, selectedStructures = [], feedback = null, options = {}) {
      switch (levelId) {
            case "spinal_cord":
                  return renderSpinalCordSVG(selectedStructures, feedback);
            case "caudal_medulla":
                  return renderCaudalMedullaSVG(selectedStructures, feedback);
            case "rostral_medulla":
                  return renderRostralMedullaSVG(selectedStructures, feedback);
            case "caudal_mid_pons":
                  return renderCaudalMidPonsSVG(selectedStructures, feedback);
            case "rostral_pons":
                  return renderRostralPonsSVG(selectedStructures, feedback);
            case "midbrain":
                  return renderMidbrainSVG(selectedStructures, feedback);
            case "thalamus":
                  return renderThalamusSVG(selectedStructures, feedback);
            case "cortex":
                  return renderCortexSVG(selectedStructures, feedback);
            case "cortex_territories":
                  return renderCorticalTerritoriesSVG(selectedStructures, feedback, options);
            default:
                  return renderSpinalCordSVG(selectedStructures, feedback);
      }
}

function getStructureClass(structId, selectedStructures, feedback, extraClass = "") {
      const isSelected = selectedStructures.includes(structId);
      const suffix = extraClass ? ` ${extraClass}` : "";
      if (!feedback) {
            return (isSelected ? "interactive-struct selected" : "interactive-struct") + suffix;
      }
      const isCorrect = feedback.correctStructures.includes(structId);
      if (isSelected && isCorrect) return "interactive-struct state-correct" + suffix;
      if (isSelected && !isCorrect) return "interactive-struct state-incorrect" + suffix;
      if (!isSelected && isCorrect) return "interactive-struct state-missed" + suffix;
      return "interactive-struct" + suffix;
}

function renderSharedSVGDefs() {
      return `
    <defs>
      <radialGradient id="bg-parenchyma" cx="50%" cy="45%" r="60%">
        <stop offset="0%" stop-color="#1e2b45" />
        <stop offset="70%" stop-color="#141e33" />
        <stop offset="100%" stop-color="#0d1526" />
      </radialGradient>
      <radialGradient id="bg-tegmentum" cx="50%" cy="45%" r="60%">
        <stop offset="0%" stop-color="#1b2842" />
        <stop offset="100%" stop-color="#0f172a" />
      </radialGradient>
      <linearGradient id="bg-gray-matter" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#2d3c5c" />
        <stop offset="100%" stop-color="#1e2942" />
      </linearGradient>
      <radialGradient id="bg-ventricle" cx="50%" cy="50%" r="55%">
        <stop offset="0%" stop-color="#020617" />
        <stop offset="100%" stop-color="#081226" />
      </radialGradient>
      <linearGradient id="bg-cortex-surface" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#1f2d47" />
        <stop offset="100%" stop-color="#131c30" />
      </linearGradient>
      <filter id="shadow-depth" x="-12%" y="-12%" width="124%" height="124%">
        <feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#000000" flood-opacity="0.55" />
      </filter>
    </defs>
  `;
}

// -------------------------------------------------------------
// 1. SPINAL CORD (Slide 2 & 9)
// Large oval, central gray butterfly, dorsal/ventral rootlets, Lissauer's tract & somatotopy
// -------------------------------------------------------------
function renderSpinalCordSVG(selectedStructures, feedback) {
      return `
  <svg viewBox="0 0 700 500" class="neuro-cross-section" data-level="spinal_cord">
    ${renderSharedSVGDefs()}

    <!-- Dorsal & Ventral Nerve Rootlets -->
    <g class="nerve-rootlet-group" pointer-events="none">
      <path d="M 215 112 Q 190 80, 156 58" class="nerve-rootlet-line" />
      <path d="M 225 106 Q 202 74, 172 52" class="nerve-rootlet-line" />
      <path d="M 485 112 Q 510 80, 544 58" class="nerve-rootlet-line" />
      <path d="M 475 106 Q 498 74, 528 52" class="nerve-rootlet-line" />
      <path d="M 238 386 Q 214 418, 192 444" class="nerve-rootlet-line" />
      <path d="M 254 392 Q 232 424, 212 448" class="nerve-rootlet-line" />
      <path d="M 462 386 Q 486 418, 508 444" class="nerve-rootlet-line" />
      <path d="M 446 392 Q 468 424, 488 448" class="nerve-rootlet-line" />
    </g>

    <!-- Background Outline: Large Oval (Dr. Cohan Slide 2) -->
    <ellipse cx="350" cy="250" rx="300" ry="190" fill="url(#bg-parenchyma)" stroke="#475569" stroke-width="3.5" filter="url(#shadow-depth)" />
    <ellipse cx="350" cy="250" rx="292" ry="182" fill="none" stroke="rgba(148,163,184,0.14)" stroke-width="1" pointer-events="none" />

    <!-- Anterior Median Fissure & Posterior Median Sulcus -->
    <path d="M 350 440 L 350 306" class="median-sulcus-line" stroke-width="3" />
    <path d="M 350 60 L 350 185" class="median-sulcus-line" />
    <path d="M 290 88 Q 290 120, 292 142" stroke="#475569" stroke-width="1.4" stroke-dasharray="3 2" fill="none" pointer-events="none" />
    <path d="M 410 88 Q 410 120, 408 142" stroke="#475569" stroke-width="1.4" stroke-dasharray="3 2" fill="none" pointer-events="none" />

    <!-- Central Gray Butterfly -->
    <path d="M 350 250 
             C 335 240, 270 210, 280 150 
             C 285 120, 255 125, 245 150 
             C 230 190, 260 250, 280 270 
             C 270 280, 230 310, 230 350 
             C 230 380, 280 380, 310 330 
             C 330 295, 335 265, 350 255
             C 365 265, 370 295, 390 330 
             C 420 380, 470 380, 470 350 
             C 470 310, 430 280, 420 270 
             C 440 250, 470 190, 455 150 
             C 445 125, 415 120, 420 150 
             C 430 210, 365 240, 350 250 Z" 
          fill="url(#bg-gray-matter)" stroke="#64748b" stroke-width="2" />

    <!-- Lissauer's Tract caps on Dorsal Horns -->
    <path d="M 244 134 C 254 120, 274 120, 282 134" fill="none" stroke="rgba(245,158,11,0.55)" stroke-width="4" stroke-linecap="round" pointer-events="none" />
    <path d="M 456 134 C 446 120, 426 120, 418 134" fill="none" stroke="rgba(245,158,11,0.55)" stroke-width="4" stroke-linecap="round" pointer-events="none" />

    <!-- DORSAL COLUMNS: Left & Right (Slide 9) -->
    <path d="M 350 60 C 310 65, 290 90, 290 140 C 300 170, 330 180, 350 180 Z" 
          class="${getStructureClass('right_fasciculus_gracilis', selectedStructures, feedback, 'tract-dcml')}" 
          data-id="right_fasciculus_gracilis" 
          data-name="Right Fasciculus Gracilis" 
          data-info="Dorsal Column: Conscious touch, vibration, and proprioception from RIGHT lower body (T7-S5)" />

    <path d="M 350 60 C 390 65, 410 90, 410 140 C 400 170, 370 180, 350 180 Z" 
          class="${getStructureClass('left_fasciculus_gracilis', selectedStructures, feedback, 'tract-dcml')}" 
          data-id="left_fasciculus_gracilis" 
          data-name="Left Fasciculus Gracilis" 
          data-info="Dorsal Column: Conscious touch, vibration, and proprioception from LEFT lower body (T7-S5)" />

    <path d="M 290 90 C 230 115, 200 150, 205 180 C 240 180, 275 160, 290 140 Z" 
          class="${getStructureClass('right_fasciculus_cuneatus', selectedStructures, feedback, 'tract-dcml')}" 
          data-id="right_fasciculus_cuneatus" 
          data-name="Right Fasciculus Cuneatus" 
          data-info="Dorsal Column: Conscious touch, vibration, and proprioception from RIGHT upper body (C1-T6)" />

    <path d="M 410 90 C 470 115, 500 150, 495 180 C 460 180, 425 160, 410 140 Z" 
          class="${getStructureClass('left_fasciculus_cuneatus', selectedStructures, feedback, 'tract-dcml')}" 
          data-id="left_fasciculus_cuneatus" 
          data-name="Left Fasciculus Cuneatus" 
          data-info="Dorsal Column: Conscious touch, vibration, and proprioception from LEFT upper body (C1-T6)" />

    <!-- LATERAL CORTICOSPINAL TRACTS -->
    <path d="M 120 220 C 130 180, 170 180, 210 210 C 220 260, 180 300, 140 280 C 120 260, 115 240, 120 220 Z" 
          class="${getStructureClass('right_lateral_corticospinal', selectedStructures, feedback, 'tract-motor')}" 
          data-id="right_lateral_corticospinal" 
          data-name="Right Lateral Corticospinal Tract" 
          data-info="Motor: Primary voluntary motor pathway for RIGHT extremities (Somatotopy: C medial -> S lateral)" />

    <path d="M 580 220 C 570 180, 530 180, 490 210 C 480 260, 520 300, 560 280 C 580 260, 585 240, 580 220 Z" 
          class="${getStructureClass('left_lateral_corticospinal', selectedStructures, feedback, 'tract-motor')}" 
          data-id="left_lateral_corticospinal" 
          data-name="Left Lateral Corticospinal Tract" 
          data-info="Motor: Primary voluntary motor pathway for LEFT extremities (Somatotopy: C medial -> S lateral)" />

    <!-- ANTEROLATERAL SYSTEM (ALS) -->
    <path d="M 120 300 C 140 330, 200 400, 260 410 C 250 380, 210 330, 160 300 Z" 
          class="${getStructureClass('right_als', selectedStructures, feedback, 'tract-als')}" 
          data-id="right_als" 
          data-name="Right Anterolateral System (ALS)" 
          data-info="ALS: Pain & Temperature from CONTRALATERAL (LEFT) body starting 1-2 segments below (C medial -> S lateral)" />

    <path d="M 580 300 C 560 330, 500 400, 440 410 C 450 380, 490 330, 540 300 Z" 
          class="${getStructureClass('left_als', selectedStructures, feedback, 'tract-als')}" 
          data-id="left_als" 
          data-name="Left Anterolateral System (ALS)" 
          data-info="ALS: Pain & Temperature from CONTRALATERAL (RIGHT) body starting 1-2 segments below (C medial -> S lateral)" />

    <!-- VENTRAL HORNS -->
    <ellipse cx="280" cy="340" rx="30" ry="25" 
             class="${getStructureClass('right_ventral_horn', selectedStructures, feedback, 'tract-motor')}" 
             data-id="right_ventral_horn" 
             data-name="Right Ventral Horn" 
             data-info="Lower Motor Neurons for right limb/trunk muscles (flaccid weakness, atrophy, fasciculations)" />

    <ellipse cx="420" cy="340" rx="30" ry="25" 
             class="${getStructureClass('left_ventral_horn', selectedStructures, feedback, 'tract-motor')}" 
             data-id="left_ventral_horn" 
             data-name="Left Ventral Horn" 
             data-info="Lower Motor Neurons for left limb/trunk muscles (flaccid weakness, atrophy, fasciculations)" />

    <!-- VENTRAL WHITE COMMISSURE -->
    <rect x="330" y="270" width="40" height="26" rx="6" 
          class="${getStructureClass('ventral_white_commissure', selectedStructures, feedback, 'tract-als')}" 
          data-id="ventral_white_commissure" 
          data-name="Ventral White Commissure" 
          data-info="Decussating second-order spinothalamic pain/temp axons (damaged in Syringomyelia)" />

    <!-- Central Canal -->
    <circle cx="350" cy="250" r="10" fill="url(#bg-ventricle)" stroke="#0ea5e9" stroke-width="1.8" />

    <!-- Anatomical Labels -->
    <text x="350" y="32" class="diagram-label label-cardinal">DORSAL (POSTERIOR)</text>
    <text x="350" y="478" class="diagram-label label-cardinal">VENTRAL (ANTERIOR)</text>
    <text x="48" y="250" class="diagram-label label-side">RIGHT</text>
    <text x="652" y="250" class="diagram-label label-side">LEFT</text>

    <text x="320" y="122" class="text-hint territory-label-xs">Gracilis</text>
    <text x="380" y="122" class="text-hint territory-label-xs">Gracilis</text>
    <text x="245" y="145" class="text-hint territory-label-xs">Cuneatus</text>
    <text x="455" y="145" class="text-hint territory-label-xs">Cuneatus</text>
    <text x="320" y="142" class="text-hint somatotopy-tag">S · L</text>
    <text x="252" y="162" class="text-hint somatotopy-tag">T · C</text>
    <text x="168" y="236" class="text-hint territory-label-xs">Lat. CST</text>
    <text x="532" y="236" class="text-hint territory-label-xs">Lat. CST</text>
    <text x="168" y="250" class="text-hint somatotopy-tag">C · T · L · S</text>
    <text x="180" y="375" class="text-hint territory-label-xs">ALS (C·T·L·S)</text>
    <text x="520" y="375" class="text-hint territory-label-xs">ALS (C·T·L·S)</text>
    <text x="280" y="344" class="text-hint territory-label-xs">Vent. Horn</text>
    <text x="420" y="344" class="text-hint territory-label-xs">Vent. Horn</text>
    <text x="350" y="314" class="text-hint-center" style="font-size:10.5px;">Ventral White Comm.</text>
  </svg>`;
}

// -------------------------------------------------------------
// 2. CAUDAL MEDULLA (Slide 3 & 10)
// Big circle, central canal 1/3 from top, internal arcuate fibers, pyramidal decussation
// -------------------------------------------------------------
function renderCaudalMedullaSVG(selectedStructures, feedback) {
      return `
  <svg viewBox="0 0 700 500" class="neuro-cross-section" data-level="caudal_medulla">
    ${renderSharedSVGDefs()}

    <!-- Big Circle Outline -->
    <circle cx="350" cy="250" r="210" fill="url(#bg-parenchyma)" stroke="#475569" stroke-width="3.5" filter="url(#shadow-depth)" />
    <circle cx="350" cy="250" r="202" fill="none" stroke="rgba(148,163,184,0.14)" stroke-width="1" pointer-events="none" />

    <!-- Decorative Internal Arcuate Fibers & Pyramidal Decussation -->
    <g pointer-events="none" opacity="0.55">
      <path d="M 300 142 Q 285 215, 350 248" stroke="#38bdf8" stroke-width="1.6" stroke-dasharray="4 3" fill="none" />
      <path d="M 240 165 Q 250 232, 350 258" stroke="#38bdf8" stroke-width="1.6" stroke-dasharray="4 3" fill="none" />
      <path d="M 400 142 Q 415 215, 350 248" stroke="#38bdf8" stroke-width="1.6" stroke-dasharray="4 3" fill="none" />
      <path d="M 460 165 Q 450 232, 350 258" stroke="#38bdf8" stroke-width="1.6" stroke-dasharray="4 3" fill="none" />
      <path d="M 320 390 L 380 412 M 380 390 L 320 412 M 325 405 L 375 426 M 375 405 L 325 426" stroke="#fb7185" stroke-width="1.8" stroke-linecap="round" />
    </g>

    <!-- Central Canal -->
    <circle cx="350" cy="180" r="12" fill="url(#bg-ventricle)" stroke="#0ea5e9" stroke-width="1.8" />

    <!-- Median Fissures -->
    <line x1="350" y1="40" x2="350" y2="160" class="median-sulcus-line" />
    <line x1="350" y1="260" x2="350" y2="460" class="median-sulcus-line" />

    <!-- 3 CIRCLE NEIGHBORS ON EACH SIDE -->
    <circle cx="305" cy="110" r="32" 
            class="${getStructureClass('right_nucleus_gracilis', selectedStructures, feedback, 'tract-dcml')}" 
            data-id="right_nucleus_gracilis" 
            data-name="Right Nucleus Gracilis" 
            data-info="Relay nucleus for RIGHT lower body touch, vibration, and proprioception" />

    <circle cx="395" cy="110" r="32" 
            class="${getStructureClass('left_nucleus_gracilis', selectedStructures, feedback, 'tract-dcml')}" 
            data-id="left_nucleus_gracilis" 
            data-name="Left Nucleus Gracilis" 
            data-info="Relay nucleus for LEFT lower body touch, vibration, and proprioception" />

    <circle cx="230" cy="135" r="34" 
            class="${getStructureClass('right_nucleus_cuneatus', selectedStructures, feedback, 'tract-dcml')}" 
            data-id="right_nucleus_cuneatus" 
            data-name="Right Nucleus Cuneatus" 
            data-info="Relay nucleus for RIGHT upper body (arm/hand) touch, vibration, and proprioception" />

    <circle cx="470" cy="135" r="34" 
            class="${getStructureClass('left_nucleus_cuneatus', selectedStructures, feedback, 'tract-dcml')}" 
            data-id="left_nucleus_cuneatus" 
            data-name="Left Nucleus Cuneatus" 
            data-info="Relay nucleus for LEFT upper body (arm/hand) touch, vibration, and proprioception" />

    <ellipse cx="165" cy="185" rx="28" ry="38" 
             class="${getStructureClass('right_spinal_v', selectedStructures, feedback, 'tract-trigeminal')}" 
             data-id="right_spinal_v" 
             data-name="Right Spinal Trigeminal Complex" 
             data-info="Pars caudalis: Pain & Temperature from IPSILATERAL (RIGHT) face (onion-skin somatotopy)" />

    <ellipse cx="535" cy="185" rx="28" ry="38" 
             class="${getStructureClass('left_spinal_v', selectedStructures, feedback, 'tract-trigeminal')}" 
             data-id="left_spinal_v" 
             data-name="Left Spinal Trigeminal Complex" 
             data-info="Pars caudalis: Pain & Temperature from IPSILATERAL (LEFT) face (onion-skin somatotopy)" />

    <!-- ALS -->
    <path d="M 155 270 C 145 320, 175 380, 220 405 C 235 385, 215 330, 190 280 Z" 
          class="${getStructureClass('right_als', selectedStructures, feedback, 'tract-als')}" 
          data-id="right_als" 
          data-name="Right Anterolateral System (ALS)" 
          data-info="ALS: Pain & temperature from CONTRALATERAL (LEFT) body" />

    <path d="M 545 270 C 555 320, 525 380, 480 405 C 465 385, 485 330, 510 280 Z" 
          class="${getStructureClass('left_als', selectedStructures, feedback, 'tract-als')}" 
          data-id="left_als" 
          data-name="Left Anterolateral System (ALS)" 
          data-info="ALS: Pain & temperature from CONTRALATERAL (RIGHT) body" />

    <!-- Pyramids -->
    <path d="M 270 430 C 270 380, 310 350, 345 350 L 345 450 C 315 450, 285 445, 270 430 Z" 
          class="${getStructureClass('right_pyramid', selectedStructures, feedback, 'tract-motor')}" 
          data-id="right_pyramid" 
          data-name="Right Pyramid / Motor Decussation" 
          data-info="Corticospinal tract decussating to form lateral corticospinal tract" />

    <path d="M 430 430 C 430 380, 390 350, 355 350 L 355 450 C 385 450, 415 445, 430 430 Z" 
          class="${getStructureClass('left_pyramid', selectedStructures, feedback, 'tract-motor')}" 
          data-id="left_pyramid" 
          data-name="Left Pyramid / Motor Decussation" 
          data-info="Corticospinal tract decussating to form lateral corticospinal tract" />

    <!-- Labels -->
    <text x="350" y="25" class="diagram-label label-cardinal">DORSAL</text>
    <text x="350" y="485" class="diagram-label label-cardinal">VENTRAL</text>
    <text x="60" y="250" class="diagram-label label-side">RIGHT</text>
    <text x="640" y="250" class="diagram-label label-side">LEFT</text>

    <text x="305" y="114" class="text-hint territory-label-xs">Gracilis</text>
    <text x="395" y="114" class="text-hint territory-label-xs">Gracilis</text>
    <text x="230" y="139" class="text-hint territory-label-xs">Cuneatus</text>
    <text x="470" y="139" class="text-hint territory-label-xs">Cuneatus</text>
    <text x="165" y="188" class="text-hint territory-label-xs">Spinal V</text>
    <text x="535" y="188" class="text-hint territory-label-xs">Spinal V</text>
    <text x="350" y="238" class="text-hint somatotopy-tag">Internal Arcuate Fibers</text>
    <text x="180" y="346" class="text-hint territory-label-xs">ALS</text>
    <text x="520" y="346" class="text-hint territory-label-xs">ALS</text>
    <text x="306" y="422" class="text-hint territory-label-xs">Pyramids</text>
    <text x="394" y="422" class="text-hint territory-label-xs">Decuss.</text>
  </svg>`;
}

// -------------------------------------------------------------
// 3. ROSTRAL MEDULLA (Slide 4 & 11)
// Crinkled Inferior Olives, exiting CN XII & CN IX/X rootlets, ASA vs PICA territories
// -------------------------------------------------------------
function renderRostralMedullaSVG(selectedStructures, feedback) {
      return `
  <svg viewBox="0 0 700 500" class="neuro-cross-section" data-level="rostral_medulla">
    ${renderSharedSVGDefs()}

    <!-- Base Shape & 4th Ventricle Floor -->
    <path d="M 230 90 
             C 270 120, 330 140, 350 140 
             C 370 140, 430 120, 470 90 
             C 540 100, 600 150, 600 230 
             C 600 320, 550 420, 440 450 
             C 410 470, 360 475, 350 475 
             C 340 475, 290 470, 260 450 
             C 150 420, 100 320, 100 230 
             C 100 150, 160 100, 230 90 Z" 
          fill="url(#bg-parenchyma)" stroke="#475569" stroke-width="3.5" filter="url(#shadow-depth)" />

    <!-- Vascular Territory Guides & Exiting CN Rootlets -->
    <g pointer-events="none">
      <line x1="288" y1="150" x2="275" y2="455" stroke="rgba(244,63,94,0.32)" stroke-width="1.5" stroke-dasharray="5 4" />
      <line x1="412" y1="150" x2="425" y2="455" stroke="rgba(244,63,94,0.32)" stroke-width="1.5" stroke-dasharray="5 4" />
      <path d="M 322 166 Q 295 280, 272 440" stroke="#fbbf24" stroke-width="1.8" stroke-dasharray="3 2" fill="none" opacity="0.7" />
      <path d="M 378 166 Q 405 280, 428 440" stroke="#fbbf24" stroke-width="1.8" stroke-dasharray="3 2" fill="none" opacity="0.7" />
      <path d="M 222 248 Q 160 258, 92 268" stroke="#fbbf24" stroke-width="1.8" stroke-dasharray="3 2" fill="none" opacity="0.7" />
      <path d="M 478 248 Q 540 258, 608 268" stroke="#fbbf24" stroke-width="1.8" stroke-dasharray="3 2" fill="none" opacity="0.7" />
    </g>

    <!-- 4th Ventricle -->
    <path d="M 230 90 Q 350 150 470 90 Z" fill="url(#bg-ventricle)" stroke="#0ea5e9" stroke-width="1.8" />

    <!-- ICP -->
    <circle cx="170" cy="130" r="38" 
            class="${getStructureClass('right_icp', selectedStructures, feedback, 'tract-cerebellar')}" 
            data-id="right_icp" 
            data-name="Right Inferior Cerebellar Peduncle (ICP)" 
            data-info="Restiform body: afferent fibers to cerebellum (ipsilateral ataxia in Wallenberg / PICA)" />

    <circle cx="530" cy="130" r="38" 
            class="${getStructureClass('left_icp', selectedStructures, feedback, 'tract-cerebellar')}" 
            data-id="left_icp" 
            data-name="Left Inferior Cerebellar Peduncle (ICP)" 
            data-info="Restiform body: afferent fibers to cerebellum (ipsilateral ataxia in Wallenberg / PICA)" />

    <!-- Crinkled Folded Bag Inferior Olivary Nuclei -->
    <path d="M 255 322 C 232 308, 200 310, 188 332 C 176 350, 182 378, 204 392 C 228 406, 256 394, 260 374 C 242 378, 224 374, 214 364 C 204 354, 206 340, 220 334 C 234 328, 248 334, 255 322 Z" 
          class="${getStructureClass('right_inferior_olive', selectedStructures, feedback, 'tract-cerebellar')}" 
          data-id="right_inferior_olive" 
          data-name="Right Inferior Olive" 
          data-info="Crinkled ribbon nucleus: climbing fiber source to cerebellum via ICP" />

    <path d="M 445 322 C 468 308, 500 310, 512 332 C 524 350, 518 378, 496 392 C 472 406, 444 394, 440 374 C 458 378, 476 374, 486 364 C 496 354, 494 340, 480 334 C 466 328, 452 334, 445 322 Z" 
          class="${getStructureClass('left_inferior_olive', selectedStructures, feedback, 'tract-cerebellar')}" 
          data-id="left_inferior_olive" 
          data-name="Left Inferior Olive" 
          data-info="Crinkled ribbon nucleus: climbing fiber source to cerebellum via ICP" />

    <!-- Pyramids -->
    <polygon points="275,445 345,465 345,385 285,385" 
             class="${getStructureClass('right_pyramid', selectedStructures, feedback, 'tract-motor')}" 
             data-id="right_pyramid" 
             data-name="Right Pyramid" 
             data-info="Corticospinal tract: motor fibers to CONTRALATERAL (LEFT) body (ASA)" />

    <polygon points="425,445 355,465 355,385 415,385" 
             class="${getStructureClass('left_pyramid', selectedStructures, feedback, 'tract-motor')}" 
             data-id="left_pyramid" 
             data-name="Left Pyramid" 
             data-info="Corticospinal tract: motor fibers to CONTRALATERAL (RIGHT) body (ASA)" />

    <!-- MEDIAL LEMNISCUS -->
    <rect x="315" y="240" width="30" height="120" rx="8" 
          class="${getStructureClass('right_medial_lemniscus', selectedStructures, feedback, 'tract-dcml')}" 
          data-id="right_medial_lemniscus" 
          data-name="Right Medial Lemniscus" 
          data-info="Medial Lemniscus: Crossed touch, vibration, proprioception from LEFT body (neck dorsal, feet ventral)" />

    <rect x="355" y="240" width="30" height="120" rx="8" 
          class="${getStructureClass('left_medial_lemniscus', selectedStructures, feedback, 'tract-dcml')}" 
          data-id="left_medial_lemniscus" 
          data-name="Left Medial Lemniscus" 
          data-info="Medial Lemniscus: Crossed touch, vibration, proprioception from RIGHT body" />

    <!-- VTT -->
    <circle cx="330" cy="205" r="16" 
            class="${getStructureClass('right_vtt', selectedStructures, feedback, 'tract-trigeminal')}" 
            data-id="right_vtt" 
            data-name="Right Ventral Trigeminothalamic Tract (VTT)" 
            data-info="VTT: 'Hi neighbor!' Crossed pain, temp & touch from LEFT face" />

    <circle cx="370" cy="205" r="16" 
            class="${getStructureClass('left_vtt', selectedStructures, feedback, 'tract-trigeminal')}" 
            data-id="left_vtt" 
            data-name="Left Ventral Trigeminothalamic Tract (VTT)" 
            data-info="VTT: 'Hi neighbor!' Crossed pain, temp & touch from RIGHT face" />

    <!-- SPINAL TRIGEMINAL -->
    <ellipse cx="170" cy="210" rx="26" ry="34" 
             class="${getStructureClass('right_spinal_v', selectedStructures, feedback, 'tract-trigeminal')}" 
             data-id="right_spinal_v" 
             data-name="Right Spinal Trigeminal Complex" 
             data-info="Primary uncrossed pain/temp from IPSILATERAL (RIGHT) face (Wallenberg syndrome)" />

    <ellipse cx="530" cy="210" rx="26" ry="34" 
             class="${getStructureClass('left_spinal_v', selectedStructures, feedback, 'tract-trigeminal')}" 
             data-id="left_spinal_v" 
             data-name="Left Spinal Trigeminal Complex" 
             data-info="Primary uncrossed pain/temp from IPSILATERAL (LEFT) face (Wallenberg syndrome)" />

    <!-- ALS -->
    <ellipse cx="185" cy="285" rx="22" ry="26" 
             class="${getStructureClass('right_als', selectedStructures, feedback, 'tract-als')}" 
             data-id="right_als" 
             data-name="Right Anterolateral System (ALS)" 
             data-info="ALS: Pain & temperature from CONTRALATERAL (LEFT) body (Wallenberg syndrome)" />

    <ellipse cx="515" cy="285" rx="22" ry="26" 
             class="${getStructureClass('left_als', selectedStructures, feedback, 'tract-als')}" 
             data-id="left_als" 
             data-name="Left Anterolateral System (ALS)" 
             data-info="ALS: Pain & temperature from CONTRALATERAL (RIGHT) body (Wallenberg syndrome)" />

    <!-- CN XII -->
    <circle cx="325" cy="155" r="11" 
            class="${getStructureClass('right_hypoglossal_nucleus', selectedStructures, feedback, 'tract-cn')}" 
            data-id="right_hypoglossal_nucleus" 
            data-name="Right Hypoglossal Nucleus (CN XII)" 
            data-info="Motor to tongue: ipsilateral deviation on protrusion (Medial Medullary Syndrome)" />

    <circle cx="375" cy="155" r="11" 
            class="${getStructureClass('left_hypoglossal_nucleus', selectedStructures, feedback, 'tract-cn')}" 
            data-id="left_hypoglossal_nucleus" 
            data-name="Left Hypoglossal Nucleus (CN XII)" 
            data-info="Motor to tongue: ipsilateral deviation on protrusion" />

    <!-- Vestibular Nuclei -->
    <ellipse cx="255" cy="150" rx="22" ry="14"
             class="${getStructureClass('right_vestibular_nuclei', selectedStructures, feedback, 'tract-cn')}"
             data-id="right_vestibular_nuclei"
             data-name="Right Vestibular Nuclei"
             data-info="Vertigo, nausea, vomiting, and nystagmus (Lateral Medullary / PICA stroke)" />

    <ellipse cx="445" cy="150" rx="22" ry="14"
             class="${getStructureClass('left_vestibular_nuclei', selectedStructures, feedback, 'tract-cn')}"
             data-id="left_vestibular_nuclei"
             data-name="Left Vestibular Nuclei"
             data-info="Vertigo, nausea, vomiting, and nystagmus (Lateral Medullary / PICA stroke)" />

    <!-- Nucleus Ambiguus -->
    <circle cx="235" cy="245" r="14"
            class="${getStructureClass('right_nucleus_ambiguus', selectedStructures, feedback, 'tract-cn')}"
            data-id="right_nucleus_ambiguus"
            data-name="Right Nucleus Ambiguus (CN IX / X)"
            data-info="Hoarseness, dysphagia, loss of gag reflex, uvula deviates AWAY (to left)" />

    <circle cx="465" cy="245" r="14"
            class="${getStructureClass('left_nucleus_ambiguus', selectedStructures, feedback, 'tract-cn')}"
            data-id="left_nucleus_ambiguus"
            data-name="Left Nucleus Ambiguus (CN IX / X)"
            data-info="Hoarseness, dysphagia, loss of gag reflex, uvula deviates AWAY (to right)" />

    <!-- Sympathetics -->
    <circle cx="215" cy="215" r="10"
            class="${getStructureClass('right_sympathetic', selectedStructures, feedback, 'tract-autonomic')}"
            data-id="right_sympathetic"
            data-name="Right Hypothalamospinal (Sympathetic) Fibers"
            data-info="Ipsilateral Horner's syndrome: ptosis, miosis, anhidrosis" />

    <circle cx="485" cy="215" r="10"
            class="${getStructureClass('left_sympathetic', selectedStructures, feedback, 'tract-autonomic')}"
            data-id="left_sympathetic"
            data-name="Left Hypothalamospinal (Sympathetic) Fibers"
            data-info="Ipsilateral Horner's syndrome: ptosis, miosis, anhidrosis" />

    <!-- Labels -->
    <text x="350" y="28" class="diagram-label label-cardinal">DORSAL (4th VENTRICLE)</text>
    <text x="350" y="492" class="diagram-label label-cardinal">VENTRAL (PYRAMIDS) • ASA (MEDIAL) vs PICA (LATERAL)</text>
    <text x="48" y="250" class="diagram-label label-side">RIGHT</text>
    <text x="652" y="250" class="diagram-label label-side">LEFT</text>

    <text x="170" y="134" class="text-hint territory-label-xs">ICP</text>
    <text x="255" y="154" class="text-hint territory-label-xs">Vestib</text>
    <text x="170" y="214" class="text-hint territory-label-xs">Spinal V</text>
    <text x="235" y="249" class="text-hint territory-label-xs">N. Amb</text>
    <text x="215" y="200" class="text-hint territory-label-xs">Symp</text>
    <text x="185" y="289" class="text-hint territory-label-xs">ALS</text>
    <text x="218" y="362" class="text-hint territory-label-xs">Olive</text>
    <text x="330" y="302" class="text-hint territory-label-xs">ML</text>
    <text x="350" y="185" class="text-hint territory-label-xs">VTT</text>
    <text x="325" y="140" class="text-hint territory-label-xs">XII</text>
    <text x="80" y="284" class="text-hint somatotopy-tag">CN IX/X</text>
    <text x="262" y="438" class="text-hint somatotopy-tag">CN XII</text>
    <text x="115" y="395" class="text-hint territory-axis" style="fill:#fda4af;">← PICA</text>
    <text x="350" y="472" class="text-hint somatotopy-tag" style="fill:#fda4af;">ASA</text>
  </svg>`;
}

// -------------------------------------------------------------
// 4. CAUDAL & MID PONS (Slide 5 & 12)
// Facial colliculus + internal genu of CN VII, pontocerebellar striations, Basilar vs AICA
// -------------------------------------------------------------
function renderCaudalMidPonsSVG(selectedStructures, feedback) {
      return `
  <svg viewBox="0 0 700 500" class="neuro-cross-section" data-level="caudal_mid_pons">
    ${renderSharedSVGDefs()}

    <!-- Basilar Pons -->
    <path d="M 120 220 
             C 70 190, 80 140, 140 130 
             L 210 130 L 210 230 
             C 190 280, 220 370, 280 420 
             C 320 445, 380 445, 420 420 
             C 480 370, 510 280, 490 230 
             L 490 130 L 560 130 
             C 620 140, 630 190, 580 220 
             C 560 280, 520 380, 470 430 
             C 410 475, 290 475, 230 430 
             C 180 380, 140 280, 120 220 Z" 
          fill="url(#bg-parenchyma)" stroke="#3b82f6" stroke-width="2.8" filter="url(#shadow-depth)" />

    <!-- Transverse Pontocerebellar Fiber Striations -->
    <g pointer-events="none" opacity="0.38">
      <path d="M 225 315 Q 350 335, 475 315" stroke="#34d399" stroke-width="1.5" stroke-dasharray="6 4" fill="none" />
      <path d="M 215 355 Q 350 380, 485 355" stroke="#34d399" stroke-width="1.5" stroke-dasharray="6 4" fill="none" />
      <path d="M 175 215 Q 155 245, 235 320" stroke="#34d399" stroke-width="1.5" stroke-dasharray="4 3" fill="none" />
      <path d="M 525 215 Q 545 245, 465 320" stroke="#34d399" stroke-width="1.5" stroke-dasharray="4 3" fill="none" />
    </g>

    <!-- Tegmentum -->
    <rect x="210" y="90" width="280" height="150" rx="10" fill="url(#bg-tegmentum)" stroke="#38bdf8" stroke-width="2.5" />

    <!-- 4th Ventricle -->
    <path d="M 270 90 Q 350 142 430 90 Z" fill="url(#bg-ventricle)" stroke="#0ea5e9" stroke-width="1.8" />

    <!-- Internal Genu of CN VII (Facial Colliculus) + Exiting CN VI & VII Rootlets -->
    <g pointer-events="none" opacity="0.8">
      <path d="M 275 152 C 295 110, 336 96, 336 122 C 336 140, 290 148, 200 205" stroke="#fbbf24" stroke-width="2" fill="none" />
      <path d="M 425 152 C 405 110, 364 96, 364 122 C 364 140, 410 148, 500 205" stroke="#fbbf24" stroke-width="2" fill="none" />
      <path d="M 320 133 L 315 445" stroke="#fbbf24" stroke-width="1.6" stroke-dasharray="4 3" fill="none" />
      <path d="M 380 133 L 385 445" stroke="#fbbf24" stroke-width="1.6" stroke-dasharray="4 3" fill="none" />
      <line x1="286" y1="100" x2="286" y2="238" stroke="rgba(244,63,94,0.3)" stroke-width="1.4" stroke-dasharray="4 3" />
      <line x1="414" y1="100" x2="414" y2="238" stroke="rgba(244,63,94,0.3)" stroke-width="1.4" stroke-dasharray="4 3" />
    </g>

    <!-- Basilar Pons -->
    <ellipse cx="295" cy="360" rx="55" ry="45" 
             class="${getStructureClass('right_basilar_pons', selectedStructures, feedback, 'tract-motor')}" 
             data-id="right_basilar_pons" 
             data-name="Right Basilar Pons" 
             data-info="Corticospinal & corticobulbar fibers, pontine nuclei (Millard-Gubler & Locked-in)" />

    <ellipse cx="405" cy="360" rx="55" ry="45" 
             class="${getStructureClass('left_basilar_pons', selectedStructures, feedback, 'tract-motor')}" 
             data-id="left_basilar_pons" 
             data-name="Left Basilar Pons" 
             data-info="Corticospinal & corticobulbar fibers, pontine nuclei (Millard-Gubler & Locked-in)" />

    <!-- MEDIAL LEMNISCUS -->
    <path d="M 240 225 L 340 220 L 340 238 L 240 242 Z" 
          class="${getStructureClass('right_medial_lemniscus', selectedStructures, feedback, 'tract-dcml')}" 
          data-id="right_medial_lemniscus" 
          data-name="Right Medial Lemniscus" 
          data-info="Medial Lemniscus: 'Slanting now!' Crossed touch/proprioception from LEFT body" />

    <path d="M 360 220 L 460 225 L 460 242 L 360 238 Z" 
          class="${getStructureClass('left_medial_lemniscus', selectedStructures, feedback, 'tract-dcml')}" 
          data-id="left_medial_lemniscus" 
          data-name="Left Medial Lemniscus" 
          data-info="Medial Lemniscus: 'Slanting now!' Crossed touch/proprioception from RIGHT body" />

    <!-- VTT -->
    <circle cx="250" cy="205" r="16" 
            class="${getStructureClass('right_vtt', selectedStructures, feedback, 'tract-trigeminal')}" 
            data-id="right_vtt" 
            data-name="Right Ventral Trigeminothalamic Tract (VTT)" 
            data-info="VTT: 'Hi neighbor! Head on top of body!' Crossed touch & pain/temp from LEFT face" />

    <circle cx="450" cy="205" r="16" 
            class="${getStructureClass('left_vtt', selectedStructures, feedback, 'tract-trigeminal')}" 
            data-id="left_vtt" 
            data-name="Left Ventral Trigeminothalamic Tract (VTT)" 
            data-info="VTT: 'Hi neighbor! Head on top of body!' Crossed touch & pain/temp from RIGHT face" />

    <!-- ALS -->
    <ellipse cx="225" cy="180" rx="16" ry="20" 
             class="${getStructureClass('right_als', selectedStructures, feedback, 'tract-als')}" 
             data-id="right_als" 
             data-name="Right Anterolateral System (ALS)" 
             data-info="ALS: Pain & temperature from CONTRALATERAL (LEFT) body" />

    <ellipse cx="475" cy="180" rx="16" ry="20" 
             class="${getStructureClass('left_als', selectedStructures, feedback, 'tract-als')}" 
             data-id="left_als" 
             data-name="Left Anterolateral System (ALS)" 
             data-info="ALS: Pain & temperature from CONTRALATERAL (RIGHT) body" />

    <!-- Spinal / Chief Sensory V -->
    <circle cx="230" cy="135" r="18" 
            class="${getStructureClass('right_spinal_v', selectedStructures, feedback, 'tract-trigeminal')}" 
            data-id="right_spinal_v" 
            data-name="Right Trigeminal Sensory Complex (Chief / Spinal V)" 
            data-info="Mid-pons: Principal sensory nucleus (facial touch) & spinal V tract" />

    <circle cx="470" cy="135" r="18" 
            class="${getStructureClass('left_spinal_v', selectedStructures, feedback, 'tract-trigeminal')}" 
            data-id="left_spinal_v" 
            data-name="Left Trigeminal Sensory Complex (Chief / Spinal V)" 
            data-info="Mid-pons: Principal sensory nucleus (facial touch) & spinal V tract" />

    <!-- CN VI -->
    <circle cx="320" cy="120" r="13" 
            class="${getStructureClass('right_abducens_nucleus', selectedStructures, feedback, 'tract-cn')}" 
            data-id="right_abducens_nucleus" 
            data-name="Right Abducens (CN VI) Nucleus" 
            data-info="Lateral rectus motor & PPRF gaze center (Millard-Gubler & Foville)" />

    <circle cx="380" cy="120" r="13" 
            class="${getStructureClass('left_abducens_nucleus', selectedStructures, feedback, 'tract-cn')}" 
            data-id="left_abducens_nucleus" 
            data-name="Left Abducens (CN VI) Nucleus" 
            data-info="Lateral rectus motor & PPRF gaze center" />

    <!-- MCP -->
    <ellipse cx="145" cy="175" rx="36" ry="26"
             class="${getStructureClass('right_mcp', selectedStructures, feedback, 'tract-cerebellar')}"
             data-id="right_mcp"
             data-name="Right Middle Cerebellar Peduncle (MCP)"
             data-info="Pontocerebellar fibers: IPSILATERAL (right) limb ataxia & dysmetria (Mid/Caudal Pons)" />

    <ellipse cx="555" cy="175" rx="36" ry="26"
             class="${getStructureClass('left_mcp', selectedStructures, feedback, 'tract-cerebellar')}"
             data-id="left_mcp"
             data-name="Left Middle Cerebellar Peduncle (MCP)"
             data-info="Pontocerebellar fibers: IPSILATERAL (left) limb ataxia & dysmetria (Mid/Caudal Pons)" />

    <!-- Vm -->
    <circle cx="272" cy="128" r="12"
            class="${getStructureClass('right_trigeminal_motor', selectedStructures, feedback, 'tract-cn')}"
            data-id="right_trigeminal_motor"
            data-name="Right Trigeminal Motor Nucleus (CN Vm)"
            data-info="Muscles of mastication: jaw deviates IPSILATERALLY (to right) on opening" />

    <circle cx="428" cy="128" r="12"
            class="${getStructureClass('left_trigeminal_motor', selectedStructures, feedback, 'tract-cn')}"
            data-id="left_trigeminal_motor"
            data-name="Left Trigeminal Motor Nucleus (CN Vm)"
            data-info="Muscles of mastication: jaw deviates IPSILATERALLY (to left) on opening" />

    <!-- Sympathetics -->
    <circle cx="250" cy="182" r="9"
            class="${getStructureClass('right_sympathetic', selectedStructures, feedback, 'tract-autonomic')}"
            data-id="right_sympathetic"
            data-name="Right Descending Sympathetic Fibers"
            data-info="Ipsilateral Horner's syndrome: ptosis, miosis, anhidrosis" />

    <circle cx="450" cy="182" r="9"
            class="${getStructureClass('left_sympathetic', selectedStructures, feedback, 'tract-autonomic')}"
            data-id="left_sympathetic"
            data-name="Left Descending Sympathetic Fibers"
            data-info="Ipsilateral Horner's syndrome: ptosis, miosis, anhidrosis" />

    <!-- CN VII -->
    <circle cx="275" cy="165" r="14" 
            class="${getStructureClass('right_facial_nucleus', selectedStructures, feedback, 'tract-cn')}" 
            data-id="right_facial_nucleus" 
            data-name="Right Facial (CN VII) Nucleus" 
            data-info="Motor to right face muscles (lower motor neuron facial palsy)" />

    <circle cx="425" cy="165" r="14" 
            class="${getStructureClass('left_facial_nucleus', selectedStructures, feedback, 'tract-cn')}" 
            data-id="left_facial_nucleus" 
            data-name="Left Facial (CN VII) Nucleus" 
            data-info="Motor to left face muscles (lower motor neuron facial palsy)" />

    <!-- Labels -->
    <text x="350" y="28" class="diagram-label label-cardinal">DORSAL (4th VENTRICLE)</text>
    <text x="350" y="492" class="diagram-label label-cardinal">VENTRAL (BASILAR PONS) • BASILAR PARAMEDIAN vs AICA</text>
    <text x="40" y="250" class="diagram-label label-side">RIGHT</text>
    <text x="660" y="250" class="diagram-label label-side">LEFT</text>

    <text x="145" y="179" class="text-hint territory-label-xs">MCP</text>
    <text x="555" y="179" class="text-hint territory-label-xs">MCP</text>
    <text x="272" y="112" class="text-hint territory-label-xs">Vm</text>
    <text x="428" y="112" class="text-hint territory-label-xs">Vm</text>
    <text x="320" y="124" class="text-hint territory-label-xs">VI</text>
    <text x="380" y="124" class="text-hint territory-label-xs">VI</text>
    <text x="275" y="169" class="text-hint territory-label-xs">VII</text>
    <text x="425" y="169" class="text-hint territory-label-xs">VII</text>
    <text x="230" y="139" class="text-hint territory-label-xs">V</text>
    <text x="470" y="139" class="text-hint territory-label-xs">V</text>
    <text x="290" y="233" class="text-hint territory-label-xs">ML</text>
    <text x="410" y="233" class="text-hint territory-label-xs">ML</text>
    <text x="295" y="364" class="text-hint territory-label-xs">CST / CBT (R)</text>
    <text x="405" y="364" class="text-hint territory-label-xs">CST / CBT (L)</text>
    <text x="350" y="78" class="text-hint-center" style="font-size:11px;">Sensory Square (Tegmentum)</text>
    <text x="132" y="290" class="text-hint territory-axis" style="fill:#fda4af;">← AICA (Lat.)</text>
  </svg>`;
}

// -------------------------------------------------------------
// 5. ROSTRAL PONS (Slide 6 & 13)
// "The Snowman!" - 2 intersecting ovals + symmetric Basilar Pons + MLF + Sensory Trio
// -------------------------------------------------------------
function renderRostralPonsSVG(selectedStructures, feedback) {
      return `
  <svg viewBox="0 0 700 500" class="neuro-cross-section" data-level="rostral_pons">
    ${renderSharedSVGDefs()}

    <!-- Larger Bottom Oval: Basilar Pons -->
    <ellipse cx="350" cy="330" rx="200" ry="130" fill="url(#bg-parenchyma)" stroke="#3b82f6" stroke-width="2.8" filter="url(#shadow-depth)" />

    <!-- Transverse Pontine Fiber Bundles -->
    <g pointer-events="none" opacity="0.35">
      <path d="M 175 320 Q 350 342, 525 320" stroke="#34d399" stroke-width="1.6" stroke-dasharray="6 4" fill="none" />
      <path d="M 170 360 Q 350 385, 530 360" stroke="#34d399" stroke-width="1.6" stroke-dasharray="6 4" fill="none" />
      <path d="M 205 395 Q 350 415, 495 395" stroke="#34d399" stroke-width="1.6" stroke-dasharray="6 4" fill="none" />
    </g>

    <!-- Smaller Top Oval: Tegmentum -->
    <ellipse cx="350" cy="180" rx="160" ry="100" fill="url(#bg-tegmentum)" stroke="#38bdf8" stroke-width="2.5" />

    <!-- Superior Medullary Velum & 4th Ventricle -->
    <ellipse cx="350" cy="100" rx="34" ry="16" fill="url(#bg-ventricle)" stroke="#0ea5e9" stroke-width="1.8" />
    <!-- MLF Landmark Dots (Dorsomedial under 4th ventricle) -->
    <circle cx="332" cy="134" r="6" fill="rgba(148,163,184,0.22)" stroke="#64748b" stroke-width="1.2" pointer-events="none" />
    <circle cx="368" cy="134" r="6" fill="rgba(148,163,184,0.22)" stroke="#64748b" stroke-width="1.2" pointer-events="none" />

    <!-- Superior Cerebellar Peduncles (SCP) -->
    <ellipse cx="250" cy="130" rx="24" ry="34" 
             class="${getStructureClass('right_scp', selectedStructures, feedback, 'tract-cerebellar')}" 
             data-id="right_scp" 
             data-name="Right Superior Cerebellar Peduncle (SCP / Brachium Conjunctivum)" 
             data-info="Major cerebellum efferent outflow" />

    <ellipse cx="450" cy="130" rx="24" ry="34" 
             class="${getStructureClass('left_scp', selectedStructures, feedback, 'tract-cerebellar')}" 
             data-id="left_scp" 
             data-name="Left Superior Cerebellar Peduncle (SCP / Brachium Conjunctivum)" 
             data-info="Major cerebellum efferent outflow" />

    <!-- Symmetric Basilar Pons Motor Areas -->
    <ellipse cx="282" cy="355" rx="68" ry="52" 
             class="${getStructureClass('right_basilar_pons', selectedStructures, feedback, 'tract-motor')}" 
             data-id="right_basilar_pons" 
             data-name="Right Basilar Pons (CST / CBT)" 
             data-info="Right corticospinal & corticobulbar fibers + pontine nuclei" />

    <ellipse cx="418" cy="355" rx="68" ry="52" 
             class="${getStructureClass('left_basilar_pons', selectedStructures, feedback, 'tract-motor')}" 
             data-id="left_basilar_pons" 
             data-name="Left Basilar Pons (CST / CBT)" 
             data-info="Left corticospinal & corticobulbar fibers + pontine nuclei" />

    <!-- SENSORY TRIO IN TEGMENTUM (Slide 13): ML -> VTT -> ALS -->
    <path d="M 265 240 L 335 240 L 335 258 L 265 258 Z" 
          class="${getStructureClass('right_medial_lemniscus', selectedStructures, feedback, 'tract-dcml')}" 
          data-id="right_medial_lemniscus" 
          data-name="Right Medial Lemniscus" 
          data-info="Crossed touch, vibration, and proprioception from LEFT body" />

    <path d="M 365 240 L 435 240 L 435 258 L 365 258 Z" 
          class="${getStructureClass('left_medial_lemniscus', selectedStructures, feedback, 'tract-dcml')}" 
          data-id="left_medial_lemniscus" 
          data-name="Left Medial Lemniscus" 
          data-info="Crossed touch, vibration, and proprioception from RIGHT body" />

    <ellipse cx="240" cy="240" rx="18" ry="14" 
             class="${getStructureClass('right_vtt', selectedStructures, feedback, 'tract-trigeminal')}" 
             data-id="right_vtt" 
             data-name="Right Ventral Trigeminothalamic Tract (VTT)" 
             data-info="VTT: 'Hi neighbor!' Crossed pain, temp, and touch from LEFT face" />

    <ellipse cx="460" cy="240" rx="18" ry="14" 
             class="${getStructureClass('left_vtt', selectedStructures, feedback, 'tract-trigeminal')}" 
             data-id="left_vtt" 
             data-name="Left Ventral Trigeminothalamic Tract (VTT)" 
             data-info="VTT: 'Hi neighbor!' Crossed pain, temp, and touch from RIGHT face" />

    <ellipse cx="205" cy="235" rx="16" ry="14" 
             class="${getStructureClass('right_als', selectedStructures, feedback, 'tract-als')}" 
             data-id="right_als" 
             data-name="Right Anterolateral System (ALS)" 
             data-info="ALS: 'Hi neighbor!' Crossed pain and temperature from LEFT body" />

    <ellipse cx="495" cy="235" rx="16" ry="14" 
             class="${getStructureClass('left_als', selectedStructures, feedback, 'tract-als')}" 
             data-id="left_als" 
             data-name="Left Anterolateral System (ALS)" 
             data-info="ALS: 'Hi neighbor!' Crossed pain and temperature from RIGHT body" />

    <!-- Labels -->
    <text x="350" y="30" class="diagram-label label-cardinal">DORSAL (4th VENTRICLE)</text>
    <text x="350" y="485" class="diagram-label label-cardinal">VENTRAL (BASILAR PONS)</text>
    <text x="60" y="250" class="diagram-label label-side">RIGHT</text>
    <text x="640" y="250" class="diagram-label label-side">LEFT</text>

    <text x="350" y="65" class="text-hint-center">"The Snowman!" (Rostral Pons)</text>
    <text x="350" y="150" class="text-hint somatotopy-tag">MLF</text>
    <text x="250" y="134" class="text-hint territory-label-xs">SCP</text>
    <text x="450" y="134" class="text-hint territory-label-xs">SCP</text>
    <text x="205" y="239" class="text-hint territory-label-xs">ALS</text>
    <text x="240" y="244" class="text-hint territory-label-xs">VTT</text>
    <text x="300" y="253" class="text-hint territory-label-xs">ML</text>
    <text x="400" y="253" class="text-hint territory-label-xs">ML</text>
    <text x="460" y="244" class="text-hint territory-label-xs">VTT</text>
    <text x="495" y="239" class="text-hint territory-label-xs">ALS</text>
    <text x="282" y="359" class="text-hint territory-label-xs">CST / CBT (R)</text>
    <text x="418" y="359" class="text-hint territory-label-xs">CST / CBT (L)</text>
    <text x="350" y="290" class="text-hint-center" style="font-size:11px;">Sensory Trio: [ALS — VTT — ML]</text>
  </svg>`;
}

// -------------------------------------------------------------
// 6. MIDBRAIN (Slide 7 & 14)
// "The Pig (from the rear)!" - Exiting CN III rootlets, Crus somatotopy, PCA supply
// -------------------------------------------------------------
function renderMidbrainSVG(selectedStructures, feedback) {
      return `
  <svg viewBox="0 0 700 500" class="neuro-cross-section" data-level="midbrain">
    ${renderSharedSVGDefs()}

    <!-- 2 Bumps at top: Colliculi / Dorsal Tectum (Interactive for Parinaud Syndrome) -->
    <path d="M 280 88 C 290 54, 330 50, 350 70 C 370 50, 410 54, 420 88 Z"
          class="${getStructureClass('dorsal_tectum', selectedStructures, feedback, 'tract-cn')}"
          data-id="dorsal_tectum"
          data-name="Dorsal Midbrain Tectum (Superior Colliculi & Pretectum)"
          data-info="Vertical gaze center (riMLF / posterior commissure) & pupillary light reflex (Parinaud syndrome)" />

    <!-- Main Oval Body ("The Pig") -->
    <path d="M 210 120 
             C 120 160, 110 280, 152 356 
             C 164 378, 250 408, 286 406
             L 305 348 
             C 328 334, 372 334, 395 348 
             L 414 406
             C 450 408, 536 378, 548 356 
             C 590 280, 580 160, 490 120 
             C 450 90, 250 90, 210 120 Z" 
          fill="url(#bg-parenchyma)" stroke="#475569" stroke-width="3.5" filter="url(#shadow-depth)" />

    <!-- Interpeduncular fossa -->
    <path d="M 305 348 Q 350 322 395 348 Z" fill="url(#bg-ventricle)" stroke="#0ea5e9" stroke-width="1.5" />

    <!-- Cerebral Aqueduct & Periaqueductal Gray (PAG) -->
    <ellipse cx="350" cy="140" rx="34" ry="25" fill="url(#bg-gray-matter)" stroke="#64748b" stroke-width="1.8" />
    <circle cx="350" cy="140" r="10" fill="url(#bg-ventricle)" stroke="#0ea5e9" stroke-width="1.8" />

    <!-- Decorative Exiting CN III Rootlets + SCP Decussation Fibers -->
    <g pointer-events="none" opacity="0.82">
      <!-- Exiting Right CN III fascicles sweeping through Red Nucleus into Interpeduncular Fossa -->
      <path d="M 332 191 C 314 235, 314 295, 326 346" stroke="#fbbf24" stroke-width="2.1" fill="none" />
      <path d="M 338 191 C 325 235, 325 295, 333 345" stroke="#fbbf24" stroke-width="1.4" stroke-dasharray="3 2" fill="none" />
      <!-- Exiting Left CN III fascicles -->
      <path d="M 368 191 C 386 235, 386 295, 374 346" stroke="#fbbf24" stroke-width="2.1" fill="none" />
      <path d="M 362 191 C 375 235, 375 295, 367 345" stroke="#fbbf24" stroke-width="1.4" stroke-dasharray="3 2" fill="none" />
      <!-- SCP Decussation crossing midline -->
      <path d="M 282 228 Q 350 212, 418 228" stroke="#34d399" stroke-width="1.6" stroke-dasharray="4 3" fill="none" opacity="0.65" />
    </g>

    <!-- 2 Cerebral Peduncle Bases on bottom: CRUS CEREBRI (No transform attr!) -->
    <path d="M 164 334 C 160 324, 170 314, 184 318 L 300 350 C 310 353, 314 364, 308 376 L 296 396 C 290 406, 276 408, 264 404 L 166 372 C 154 368, 152 356, 156 346 Z"
          class="${getStructureClass('right_crus_cerebri', selectedStructures, feedback, 'tract-motor')}" 
          data-id="right_crus_cerebri" 
          data-name="Right Crus Cerebri (Cerebral Peduncle Base)" 
          data-info="Corticospinal & corticobulbar fibers (Weber syndrome: contralateral left body, lower face & tongue UMN weakness)" />

    <path d="M 536 334 C 540 324, 530 314, 516 318 L 400 350 C 390 353, 386 364, 392 376 L 404 396 C 410 406, 424 408, 436 404 L 534 372 C 546 368, 548 356, 544 346 Z"
          class="${getStructureClass('left_crus_cerebri', selectedStructures, feedback, 'tract-motor')}" 
          data-id="left_crus_cerebri" 
          data-name="Left Crus Cerebri (Cerebral Peduncle Base)" 
          data-info="Corticospinal & corticobulbar fibers (Weber syndrome: contralateral right body, lower face & tongue UMN weakness)" />

    <!-- Substantia Nigra (Snuggled dorsal & parallel to Crus Cerebri) -->
    <path d="M 182 304 C 220 312, 268 326, 308 340 L 302 352 C 262 338, 214 324, 176 316 Z"
          class="${getStructureClass('right_substantia_nigra', selectedStructures, feedback, 'tract-autonomic')}"
          data-id="right_substantia_nigra"
          data-name="Right Substantia Nigra"
          data-info="Dopaminergic neurons: contralateral (left) bradykinesia, rigidity, or tremor" />
    <path d="M 518 304 C 480 312, 432 326, 392 340 L 398 352 C 438 338, 486 324, 524 316 Z"
          class="${getStructureClass('left_substantia_nigra', selectedStructures, feedback, 'tract-autonomic')}"
          data-id="left_substantia_nigra"
          data-name="Left Substantia Nigra"
          data-info="Dopaminergic neurons: contralateral (right) bradykinesia, rigidity, or tremor" />

    <!-- Superior Cerebellar Peduncle Fibers -->
    <ellipse cx="268" cy="235" rx="18" ry="13"
             class="${getStructureClass('right_scp', selectedStructures, feedback, 'tract-cerebellar')}"
             data-id="right_scp"
             data-name="Right Superior Cerebellar Peduncle (SCP)"
             data-info="Post-decussation cerebellar outflow: CONTRALATERAL (left) arm & leg ataxia / intention tremor" />
    <ellipse cx="432" cy="235" rx="18" ry="13"
             class="${getStructureClass('left_scp', selectedStructures, feedback, 'tract-cerebellar')}"
             data-id="left_scp"
             data-name="Left Superior Cerebellar Peduncle (SCP)"
             data-info="Post-decussation cerebellar outflow: CONTRALATERAL (right) arm & leg ataxia / intention tremor" />

    <!-- Red Nuclei -->
    <circle cx="300" cy="270" r="30" 
            class="${getStructureClass('right_red_nucleus', selectedStructures, feedback, 'tract-cerebellar')}" 
            data-id="right_red_nucleus" 
            data-name="Right Red Nucleus" 
            data-info="Tegmental motor nucleus & dentatorubrothalamic relay (Claude & Benedikt syndromes)" />

    <circle cx="400" cy="270" r="30" 
            class="${getStructureClass('left_red_nucleus', selectedStructures, feedback, 'tract-cerebellar')}" 
            data-id="left_red_nucleus" 
            data-name="Left Red Nucleus" 
            data-info="Tegmental motor nucleus & dentatorubrothalamic relay" />

    <!-- Oculomotor (CN III) Nucleus -->
    <circle cx="335" cy="180" r="12" 
            class="${getStructureClass('right_oculomotor_nucleus', selectedStructures, feedback, 'tract-cn')}" 
            data-id="right_oculomotor_nucleus" 
            data-name="Right Oculomotor (CN III) Nucleus/Nerve" 
            data-info="CN III: Ptosis, mydriasis, 'down & out' eye (Weber, Claude, Benedikt)" />

    <circle cx="365" cy="180" r="12" 
            class="${getStructureClass('left_oculomotor_nucleus', selectedStructures, feedback, 'tract-cn')}" 
            data-id="left_oculomotor_nucleus" 
            data-name="Left Oculomotor (CN III) Nucleus/Nerve" 
            data-info="CN III: Ptosis, mydriasis, 'down & out' eye" />

    <!-- SENSORY RIBBON IN LATERAL TEGMENTUM -->
    <ellipse cx="230" cy="265" rx="16" ry="24" 
             class="${getStructureClass('right_medial_lemniscus', selectedStructures, feedback, 'tract-dcml')}" 
             data-id="right_medial_lemniscus" 
             data-name="Right Medial Lemniscus" 
             data-info="Medial Lemniscus: Crossed touch/proprioception from LEFT body" />

    <ellipse cx="470" cy="265" rx="16" ry="24" 
             class="${getStructureClass('left_medial_lemniscus', selectedStructures, feedback, 'tract-dcml')}" 
             data-id="left_medial_lemniscus" 
             data-name="Left Medial Lemniscus" 
             data-info="Medial Lemniscus: Crossed touch/proprioception from RIGHT body" />

    <ellipse cx="205" cy="245" rx="15" ry="20" 
             class="${getStructureClass('right_vtt', selectedStructures, feedback, 'tract-trigeminal')}" 
             data-id="right_vtt" 
             data-name="Right Ventral Trigeminothalamic Tract (VTT)" 
             data-info="VTT: 'Hi neighbor!' Crossed pain, temp & touch from LEFT face" />

    <ellipse cx="495" cy="245" rx="15" ry="20" 
             class="${getStructureClass('left_vtt', selectedStructures, feedback, 'tract-trigeminal')}" 
             data-id="left_vtt" 
             data-name="Left Ventral Trigeminothalamic Tract (VTT)" 
             data-info="VTT: 'Hi neighbor!' Crossed pain, temp & touch from RIGHT face" />

    <ellipse cx="180" cy="225" rx="14" ry="18" 
             class="${getStructureClass('right_als', selectedStructures, feedback, 'tract-als')}" 
             data-id="right_als" 
             data-name="Right Anterolateral System (ALS)" 
             data-info="ALS: Crossed pain & temperature from LEFT body" />

    <ellipse cx="520" cy="225" rx="14" ry="18" 
             class="${getStructureClass('left_als', selectedStructures, feedback, 'tract-als')}" 
             data-id="left_als" 
             data-name="Left Anterolateral System (ALS)" 
             data-info="ALS: Crossed pain & temperature from RIGHT body" />

    <!-- Labels -->
    <text x="350" y="25" class="diagram-label label-cardinal">DORSAL (COLLICULI)</text>
    <text x="350" y="485" class="diagram-label label-cardinal">VENTRAL (CRUS CEREBRI) • PCA SUPPLY</text>
    <text x="50" y="250" class="diagram-label label-side">RIGHT</text>
    <text x="650" y="250" class="diagram-label label-side">LEFT</text>

    <text x="350" y="50" class="text-hint territory-label-xs">Colliculi</text>
    <text x="350" y="112" class="text-hint territory-label-xs">PAG</text>
    <text x="335" y="164" class="text-hint territory-label-xs">III</text>
    <text x="365" y="164" class="text-hint territory-label-xs">III</text>
    <text x="268" y="218" class="text-hint territory-label-xs">SCP</text>
    <text x="432" y="218" class="text-hint territory-label-xs">SCP</text>
    <text x="300" y="274" class="text-hint territory-label-xs">Red Nuc</text>
    <text x="400" y="274" class="text-hint territory-label-xs">Red Nuc</text>
    <text x="180" y="229" class="text-hint territory-label-xs">ALS</text>
    <text x="205" y="249" class="text-hint territory-label-xs">VTT</text>
    <text x="230" y="269" class="text-hint territory-label-xs">ML</text>
    <text x="232" y="368" class="text-hint territory-label-xs">CST · CBT</text>
    <text x="468" y="368" class="text-hint territory-label-xs">CBT · CST</text>
    <text x="244" y="316" class="text-hint somatotopy-tag">Sub. Nigra</text>
    <text x="350" y="438" class="text-hint-center" style="font-size:11px;">"The Pig (from the rear)!" • PCA Perforators</text>
  </svg>`;
}

// -------------------------------------------------------------
// 7. THALAMUS & DIENCEPHALON (Axial Basal Ganglia + Internal Capsule + Thalamus)
// Caudate Head, Lentiform Nucleus (Putamen/GP), V-shaped Internal Capsule, VPL, VPM, STN
// -------------------------------------------------------------
function renderThalamusSVG(selectedStructures, feedback) {
      return `
  <svg viewBox="0 0 700 500" class="neuro-cross-section" data-level="thalamus">
    ${renderSharedSVGDefs()}

    <!-- Axial Diencephalic / Forebrain Capsule Outline -->
    <ellipse cx="350" cy="250" rx="285" ry="200" fill="url(#bg-parenchyma)" stroke="#475569" stroke-width="3.5" filter="url(#shadow-depth)" />

    <!-- Anterior Horn of Lateral Ventricles & Septum Pellucidum -->
    <path d="M 346 112 L 346 175 L 296 130 C 310 114, 330 108, 346 112 Z" fill="url(#bg-ventricle)" stroke="#0ea5e9" stroke-width="1.5" pointer-events="none" />
    <path d="M 354 112 L 354 175 L 404 130 C 390 114, 370 108, 354 112 Z" fill="url(#bg-ventricle)" stroke="#0ea5e9" stroke-width="1.5" pointer-events="none" />

    <!-- Third Ventricle Slit at Center -->
    <rect x="345" y="190" width="10" height="165" rx="5" fill="url(#bg-ventricle)" stroke="#0ea5e9" stroke-width="1.5" pointer-events="none" />

    <!-- Caudate Nucleus Head (Anteromedial Reference Landmark) -->
    <path d="M 284 128 C 258 134, 248 164, 266 184 C 282 198, 304 186, 304 160 Z" fill="url(#bg-gray-matter)" stroke="#64748b" stroke-width="1.6" pointer-events="none" />
    <path d="M 416 128 C 442 134, 452 164, 434 184 C 418 198, 396 186, 396 160 Z" fill="url(#bg-gray-matter)" stroke="#64748b" stroke-width="1.6" pointer-events="none" />

    <!-- Lentiform Nucleus (Putamen & Globus Pallidus - Lateral Reference Wedge) -->
    <path d="M 122 184 C 98 228, 98 292, 128 332 C 148 310, 174 266, 176 232 C 166 206, 146 188, 122 184 Z" fill="url(#bg-gray-matter)" stroke="#64748b" stroke-width="1.6" pointer-events="none" />
    <path d="M 578 184 C 602 228, 602 292, 572 332 C 552 310, 526 266, 524 232 C 534 206, 554 188, 578 184 Z" fill="url(#bg-gray-matter)" stroke="#64748b" stroke-width="1.6" pointer-events="none" />

    <!-- Anterior Limb of Internal Capsule (Non-interactive Reference) -->
    <path d="M 244 138 L 210 198 L 182 188 L 222 128 Z" fill="rgba(148,163,184,0.16)" stroke="rgba(148,163,184,0.35)" stroke-width="1.4" pointer-events="none" />
    <path d="M 456 138 L 490 198 L 518 188 L 478 128 Z" fill="rgba(148,163,184,0.16)" stroke="rgba(148,163,184,0.35)" stroke-width="1.4" pointer-events="none" />

    <!-- Right Thalamus (Viewer Left: Anatomical Right) -->
    <path d="M 336 185 C 276 185, 226 220, 226 280 C 226 326, 264 358, 336 358 Z" fill="url(#bg-tegmentum)" stroke="#64748b" stroke-width="2" />

    <!-- Left Thalamus (Viewer Right: Anatomical Left) -->
    <path d="M 364 185 C 424 185, 474 220, 474 280 C 474 326, 436 358, 364 358 Z" fill="url(#bg-tegmentum)" stroke="#64748b" stroke-width="2" />

    <!-- VENTRAL POSTEROLATERAL NUCLEUS (VPL): Body Sensory Relay -->
    <circle cx="255" cy="292" r="28" 
            class="${getStructureClass('right_vpl', selectedStructures, feedback, 'tract-dcml')}" 
            data-id="right_vpl" 
            data-name="Right Thalamus: VPL Nucleus" 
            data-info="Relay for ML (touch/proprioception) & ALS (pain/temp) from LEFT body (PCA perforators)" />

    <circle cx="445" cy="292" r="28" 
            class="${getStructureClass('left_vpl', selectedStructures, feedback, 'tract-dcml')}" 
            data-id="left_vpl" 
            data-name="Left Thalamus: VPL Nucleus" 
            data-info="Relay for ML & ALS from RIGHT body (PCA perforators)" />

    <!-- VENTRAL POSTEROMEDIAL NUCLEUS (VPM): Face Sensory Relay -->
    <circle cx="302" cy="306" r="21" 
            class="${getStructureClass('right_vpm', selectedStructures, feedback, 'tract-trigeminal')}" 
            data-id="right_vpm" 
            data-name="Right Thalamus: VPM Nucleus" 
            data-info="Relay for trigeminothalamic fibers (all modalities) from LEFT face (PCA perforators)" />

    <circle cx="398" cy="306" r="21" 
            class="${getStructureClass('left_vpm', selectedStructures, feedback, 'tract-trigeminal')}" 
            data-id="left_vpm" 
            data-name="Left Thalamus: VPM Nucleus" 
            data-info="Relay for trigeminothalamic fibers from RIGHT face (PCA perforators)" />

    <!-- INTERNAL CAPSULE: POSTERIOR LIMB (Boomerang from Genu posteriorly) -->
    <path d="M 210 202 C 194 248, 190 310, 212 362 L 182 368 C 158 310, 160 245, 182 192 Z" 
          class="${getStructureClass('right_internal_capsule_posterior_limb', selectedStructures, feedback, 'tract-motor')}" 
          data-id="right_internal_capsule_posterior_limb" 
          data-name="Right Internal Capsule (Posterior Limb)" 
          data-info="Descending CST/CBT motor (Face at genu -> Arm -> Leg) & sensory fibers (Lenticulostriate / MCA)" />

    <path d="M 490 202 C 506 248, 510 310, 488 362 L 518 368 C 542 310, 540 245, 518 192 Z" 
          class="${getStructureClass('left_internal_capsule_posterior_limb', selectedStructures, feedback, 'tract-motor')}" 
          data-id="left_internal_capsule_posterior_limb" 
          data-name="Left Internal Capsule (Posterior Limb)" 
          data-info="Descending CST/CBT motor (Face at genu -> Arm -> Leg) & sensory fibers (Lenticulostriate / MCA)" />

    <!-- SUBTHALAMIC NUCLEI (STN) -->
    <ellipse cx="275" cy="378" rx="24" ry="13"
             class="${getStructureClass('right_subthalamic_nucleus', selectedStructures, feedback, 'tract-autonomic')}"
             data-id="right_subthalamic_nucleus"
             data-name="Right Subthalamic Nucleus (STN)"
             data-info="Basal ganglia/diencephalon: lacunar infarct causes CONTRALATERAL (left) hemiballismus" />

    <ellipse cx="425" cy="378" rx="24" ry="13"
             class="${getStructureClass('left_subthalamic_nucleus', selectedStructures, feedback, 'tract-autonomic')}"
             data-id="left_subthalamic_nucleus"
             data-name="Left Subthalamic Nucleus (STN)"
             data-info="Basal ganglia/diencephalon: lacunar infarct causes CONTRALATERAL (right) hemiballismus" />

    <!-- Labels -->
    <text x="350" y="28" class="diagram-label label-cardinal">ANTERIOR</text>
    <text x="350" y="482" class="diagram-label label-cardinal">POSTERIOR</text>
    <text x="48" y="250" class="diagram-label label-side">RIGHT</text>
    <text x="652" y="250" class="diagram-label label-side">LEFT</text>

    <text x="280" y="166" class="text-hint territory-label-xs" style="fill:#64748b;">Caudate</text>
    <text x="132" y="255" class="text-hint territory-label-xs" style="fill:#64748b;">Lentiform</text>
    <text x="568" y="255" class="text-hint territory-label-xs" style="fill:#64748b;">Lentiform</text>
    <text x="350" y="96" class="text-hint-center" style="font-size:11px;">Lat. &amp; 3rd Ventricles</text>
    <text x="255" y="296" class="text-hint territory-label-xs">VPL</text>
    <text x="302" y="310" class="text-hint territory-label-xs">VPM</text>
    <text x="445" y="296" class="text-hint territory-label-xs">VPL</text>
    <text x="398" y="310" class="text-hint territory-label-xs">VPM</text>
    <text x="275" y="382" class="text-hint territory-label-xs">STN</text>
    <text x="425" y="382" class="text-hint territory-label-xs">STN</text>
    <text x="184" y="282" class="text-hint territory-label-xs">Post. Limb</text>
    <text x="516" y="282" class="text-hint territory-label-xs">Post. Limb</text>
    <text x="180" y="395" class="text-hint somatotopy-tag" style="fill:#fda4af;">Lenticulostriate (MCA)</text>
    <text x="350" y="422" class="text-hint somatotopy-tag" style="fill:#fcd34d;">PCA Perforators (Thalamus / STN)</text>
  </svg>`;
}

// -------------------------------------------------------------
// 8. CEREBRAL CORTEX & HOMUNCULUS
// Coronal view: Paracentral Lobule (Leg/Foot) to Lateral Postcentral Gyrus (Hand/Face)
// -------------------------------------------------------------
function renderCortexSVG(selectedStructures, feedback) {
      return `
  <svg viewBox="0 0 700 520" class="neuro-cross-section" data-level="cortex">
    ${renderSharedSVGDefs()}
    <!-- Vascular Territory Header Badges -->
    <g transform="translate(215, 42)">
      <rect x="0" y="0" width="270" height="24" rx="12" fill="rgba(15,23,42,0.88)" stroke="rgba(148,163,184,0.25)" />
      <circle cx="22" cy="12" r="5" fill="rgba(6,182,212,0.6)" stroke="#22d3ee" stroke-width="1.5" />
      <text x="33" y="16" class="territory-legend-text" fill="#67e8f9">ACA (Medial)</text>
      <circle cx="145" cy="12" r="5" fill="rgba(99,102,241,0.6)" stroke="#818cf8" stroke-width="1.5" />
      <text x="156" y="16" class="territory-legend-text" fill="#a5b4fc">MCA (Lateral)</text>
    </g>

    <!-- Coronal White Matter & Gyral Silhouette: Right Hemisphere (Viewer Left) -->
    <path d="M 346 318
             L 346 156
             C 340 132, 318 128, 304 142
             C 294 126, 266 128, 254 146
             C 238 138, 212 150, 204 170
             C 182 172, 160 192, 156 214
             C 132 222, 114 248, 116 274
             C 96 290, 92 324, 108 352
             C 102 374, 114 398, 134 404
             C 150 426, 182 432, 206 414
             C 230 412, 256 392, 268 370
             C 286 358, 314 352, 346 350 Z"
          class="cortex-outline" />

    <!-- Left Hemisphere (Viewer Right) -->
    <path d="M 354 318
             L 354 156
             C 360 132, 382 128, 396 142
             C 406 126, 434 128, 446 146
             C 462 138, 488 150, 496 170
             C 518 172, 540 192, 544 214
             C 568 222, 586 248, 584 274
             C 604 290, 608 324, 592 352
             C 598 374, 586 398, 566 404
             C 550 426, 518 432, 494 414
             C 470 412, 444 392, 432 370
             C 414 358, 386 352, 354 350 Z"
          class="cortex-outline" />

    <!-- Decorative Gyral Sulci & Sylvian Fissure Insular Indentations -->
    <path d="M 164 366 C 188 354, 206 346, 224 358" class="sulcus-guide-line" />
    <path d="M 536 366 C 512 354, 494 346, 476 358" class="sulcus-guide-line" />
    <path d="M 254 146 Q 262 178, 272 198" class="sulcus-guide-line" />
    <path d="M 446 146 Q 438 178, 428 198" class="sulcus-guide-line" />

    <!-- Corpus Callosum Bridge & Lateral Ventricles (Anatomical Orientation) -->
    <path d="M 278 308 C 296 286, 404 286, 422 308 C 414 326, 388 318, 350 318 C 312 318, 286 326, 278 308 Z"
          fill="#0f172a" stroke="#475569" stroke-width="2" />
    <path d="M 344 322 C 324 322, 304 334, 300 352 C 318 358, 338 352, 344 340 Z" class="ventricle-space" />
    <path d="M 356 322 C 376 322, 396 334, 400 352 C 382 358, 362 352, 356 340 Z" class="ventricle-space" />

    <!-- Longitudinal Fissure -->
    <line x1="350" y1="74" x2="350" y2="306" class="median-sulcus-line" stroke-width="3.5" />

    <!-- 1. PARACENTRAL LOBULE (Medial Wall / Toes, Foot & Leg - ACA territory) -->
    <path d="M 346 150 C 330 140, 314 142, 306 154 L 314 252 C 324 266, 336 272, 346 272 Z"
          class="${getStructureClass('right_paracentral_lobule', selectedStructures, feedback, 'artery-zone-aca')}"
          data-id="right_paracentral_lobule"
          data-name="Right Paracentral Lobule (Foot/Leg)"
          data-info="Primary somatosensory/motor cortex: Toes, foot & leg + micturition (Right ACA territory)" />

    <path d="M 354 150 C 370 140, 386 142, 394 154 L 386 252 C 376 266, 364 272, 354 272 Z"
          class="${getStructureClass('left_paracentral_lobule', selectedStructures, feedback, 'artery-zone-aca')}"
          data-id="left_paracentral_lobule"
          data-name="Left Paracentral Lobule (Foot/Leg)"
          data-info="Primary somatosensory/motor cortex: Toes, foot & leg + micturition (Left ACA territory)" />

    <!-- 2. SUPERIOR CONVEXITY: Hip, Trunk & Arm (Watershed / Upper MCA) -->
    <path d="M 306 154 C 272 142, 234 156, 206 184 L 222 214 C 246 190, 276 180, 310 188 Z"
          class="${getStructureClass('right_postcentral_arm_trunk', selectedStructures, feedback, 'artery-zone-aca-mca')}"
          data-id="right_postcentral_arm_trunk"
          data-name="Right Postcentral Gyrus (Trunk/Arm Area)"
          data-info="Primary somatosensory cortex: Hip, trunk & upper arm representation" />

    <path d="M 394 154 C 428 142, 466 156, 494 184 L 478 214 C 454 190, 424 180, 390 188 Z"
          class="${getStructureClass('left_postcentral_arm_trunk', selectedStructures, feedback, 'artery-zone-aca-mca')}"
          data-id="left_postcentral_arm_trunk"
          data-name="Left Postcentral Gyrus (Trunk/Arm Area)"
          data-info="Primary somatosensory cortex: Hip, trunk & upper arm representation" />

    <!-- 3. LATERAL CONVEXITY: Hand, Fingers, Face & Tongue (MCA territory) -->
    <path d="M 206 184 C 162 218, 128 274, 118 336 L 152 344 C 162 290, 188 244, 222 214 Z"
          class="${getStructureClass('right_postcentral_hand_face', selectedStructures, feedback, 'artery-zone-mca')}"
          data-id="right_postcentral_hand_face"
          data-name="Right Postcentral Gyrus (Hand & Face Area)"
          data-info="Primary somatosensory cortex: Hand/fingers astereognosis & lower face/tongue sensory loss (Right MCA)" />

    <path d="M 494 184 C 538 218, 572 274, 582 336 L 548 344 C 538 290, 512 244, 478 214 Z"
          class="${getStructureClass('left_postcentral_hand_face', selectedStructures, feedback, 'artery-zone-mca')}"
          data-id="left_postcentral_hand_face"
          data-name="Left Postcentral Gyrus (Hand & Face Area)"
          data-info="Primary somatosensory cortex: Hand/fingers astereognosis & lower face/tongue sensory loss (Left MCA)" />

    <!-- 4. POSTERIOR PARIETAL ASSOCIATION CORTEX (Extinction / Neglect / Gerstmann) -->
    <path d="M 164 290 C 176 266, 206 258, 226 276 C 238 296, 228 326, 202 334 C 176 338, 156 314, 164 290 Z"
          class="${getStructureClass('right_parietal_association', selectedStructures, feedback, 'artery-zone-mca')}"
          data-id="right_parietal_association"
          data-name="Right Posterior Parietal Cortex"
          data-info="Sensory extinction to double simultaneous stimulation & left spatial neglect (Right MCA)" />

    <path d="M 536 290 C 524 266, 494 258, 474 276 C 462 296, 472 326, 498 334 C 524 338, 544 314, 536 290 Z"
          class="${getStructureClass('left_parietal_association', selectedStructures, feedback, 'artery-zone-mca')}"
          data-id="left_parietal_association"
          data-name="Left Posterior Parietal Cortex (Angular Gyrus)"
          data-info="Gerstmann syndrome: finger agnosia, agraphia, acalculia, R-L confusion (Left MCA)" />

    <!-- Labels -->
    <text x="350" y="26" class="diagram-label label-cardinal">SUPERIOR / VERTEX</text>
    <text x="45" y="275" class="diagram-label label-side">RIGHT</text>
    <text x="655" y="275" class="diagram-label label-side">LEFT</text>

    <text x="350" y="100" class="text-hint-center">Longitudinal Fissure</text>
    <text x="326" y="208" class="text-hint territory-label-xs">Toes/Leg</text>
    <text x="374" y="208" class="text-hint territory-label-xs">Toes/Leg</text>
    <text x="258" y="176" class="text-hint territory-label-xs">Trunk/Arm</text>
    <text x="442" y="176" class="text-hint territory-label-xs">Trunk/Arm</text>
    <text x="155" y="254" class="text-hint territory-label-xs">Hand/Face</text>
    <text x="545" y="254" class="text-hint territory-label-xs">Hand/Face</text>
    <text x="195" y="305" class="text-hint territory-label-xs">Neglect</text>
    <text x="505" y="305" class="text-hint territory-label-xs">Angular</text>
    <text x="350" y="304" class="text-hint territory-label-xs" style="fill:#94a3b8;">Corpus Callosum</text>
    <text x="350" y="458" class="text-hint-center" style="fill:#94a3b8;">Somatotopic Homunculus: Medial (ACA Leg) → Lateral (MCA Hand &amp; Face)</text>
  </svg>`;
}

// -------------------------------------------------------------
// 9. CEREBRAL CORTEX FUNCTIONAL REGIONS & ARTERIAL TERRITORIES
// Anatomically contoured Lateral & Medial Hemispheres with ACA / MCA / PCA zones
// Supports view zoom via options.corticalView: 'all' | 'lateral' | 'medial'
// -------------------------------------------------------------
function renderCorticalTerritoriesSVG(selectedStructures, feedback, options = {}) {
      const view = options.corticalView || 'all';
      const showLateral = view === 'all' || view === 'lateral';
      const showMedial = view === 'all' || view === 'medial';
      const isZoomed = view !== 'all';

      const svgHeight = isZoomed ? 330 : 560;
      const latY = 48;
      const medY = isZoomed ? 48 : 302;
      const cardH = isZoomed ? 270 : 240;
      const innerScale = isZoomed ? 'translate(14, 24) scale(1.12)' : 'translate(15, 18)';
      const innerScaleRight = isZoomed ? 'translate(22, 24) scale(1.12)' : 'translate(25, 18)';

      return `
  <svg viewBox="0 0 820 ${svgHeight}" class="neuro-cross-section cortical-territories-svg ${isZoomed ? 'cortical-zoomed' : ''}" data-level="cortex_territories">
    ${renderSharedSVGDefs()}
    <!-- Top Vascular Territory Legend -->
    <g transform="translate(155, 8)">
      <rect x="0" y="0" width="510" height="30" rx="15" fill="rgba(15,23,42,0.92)" stroke="rgba(148,163,184,0.28)" />
      <circle cx="28" cy="15" r="6" fill="rgba(6,182,212,0.65)" stroke="#22d3ee" stroke-width="1.5" />
      <text x="41" y="19" class="territory-legend-text" fill="#67e8f9">ACA (Medial / Leg)</text>
      <circle cx="198" cy="15" r="6" fill="rgba(99,102,241,0.65)" stroke="#818cf8" stroke-width="1.5" />
      <text x="211" y="19" class="territory-legend-text" fill="#a5b4fc">MCA (Lateral / Face-Arm)</text>
      <circle cx="395" cy="15" r="6" fill="rgba(245,158,11,0.65)" stroke="#fbbf24" stroke-width="1.5" />
      <text x="408" y="19" class="territory-legend-text" fill="#fcd34d">PCA (Visual)</text>
    </g>

    ${showLateral ? `
    <!-- ======================================================= -->
    <!-- LEFT HEMISPHERE — LATERAL SURFACE (Anterior Left) -->
    <!-- ======================================================= -->
    <g transform="translate(18, ${latY})">
      <rect x="0" y="0" width="382" height="${cardH}" rx="14" class="quadrant-card" />
      <text x="191" y="20" class="diagram-label" style="fill:#a5b4fc;">LEFT HEMISPHERE — LATERAL (MCA / PCA POLE)</text>
      <g transform="${innerScale}">
        <!-- Subtle Cerebellum & Brainstem Reference Silhouette -->
        <path d="M 228 168 C 242 196, 286 196, 304 170 C 284 166, 256 164, 228 168 Z" class="brainstem-ref-silhouette" />
        <path d="M 190 166 L 198 198 L 222 198 L 228 168 Z" class="brainstem-ref-silhouette" />

        <!-- True Lateral Brain Silhouette with Frontal, Parietal, Occipital & Temporal Lobe -->
        <path d="M 32 118
                 C 28 66, 78 24, 168 22
                 C 248 20, 306 54, 318 110
                 C 322 142, 304 164, 266 168
                 C 238 170, 218 164, 198 172
                 C 172 182, 134 186, 114 170
                 C 104 160, 108 144, 126 136
                 C 110 134, 90 138, 66 138
                 C 42 138, 34 130, 32 118 Z"
              class="cortex-outline territory-mca-bg" />

        <!-- Decorative Cortical Sulci & MCA Candelabra Vessel Overlay -->
        <path d="M 60 66 Q 108 60, 146 66" class="sulcus-guide-line" />
        <path d="M 176 24 Q 166 78, 154 128" stroke="#64748b" stroke-width="2" stroke-dasharray="4 3" fill="none" pointer-events="none" />
        <path d="M 114 136 Q 176 130, 232 112" stroke="#64748b" stroke-width="2.2" fill="none" pointer-events="none" />
        <path d="M 206 72 Q 242 74, 272 86" class="sulcus-guide-line" />
        <path d="M 136 158 Q 186 154, 240 144" class="sulcus-guide-line" />
        <!-- MCA M2 cortical branches fanning from Sylvian fissure -->
        <path d="M 124 148 Q 140 132, 168 122 M 142 132 Q 134 108, 126 92 M 168 122 Q 180 86, 184 52 M 188 120 Q 214 132, 244 138" stroke="rgba(129,140,248,0.45)" stroke-width="1.6" stroke-linecap="round" fill="none" pointer-events="none" />

        <!-- 1. Left Prefrontal / Executive (ACA/MCA watershed) -->
        <path d="M 34 116 C 34 70, 74 34, 124 27 L 122 114 C 98 124, 62 134, 34 116 Z"
              class="${getStructureClass('left_prefrontal', selectedStructures, feedback, 'artery-zone-aca-mca')}"
              data-id="left_prefrontal"
              data-name="Left Prefrontal Cortex (Executive)"
              data-info="Executive functions, planning, working memory, motivation (ACA/MCA)" />

        <!-- 2. Left Frontal Eye Field (FEF) -->
        <path d="M 125 46 C 142 42, 158 46, 164 58 L 160 88 C 144 90, 130 88, 124 78 Z"
              class="${getStructureClass('left_fef', selectedStructures, feedback, 'artery-zone-mca')}"
              data-id="left_fef"
              data-name="Left Frontal Eye Field (FEF)"
              data-info="Conjugate gaze to right; lesion -> eyes deviate IPSILATERALLY (to left) (Left MCA)" />

        <!-- 3. Left Broca's Area (Inferior Frontal Gyrus above Sylvian fissure) -->
        <path d="M 102 92 C 122 86, 146 88, 158 98 L 152 128 C 132 134, 108 134, 96 124 Z"
              class="${getStructureClass('left_broca', selectedStructures, feedback, 'artery-zone-mca')}"
              data-id="left_broca"
              data-name="Left Broca's Area (Inferior Frontal Gyrus)"
              data-info="Non-fluent, hesitant expressive aphasia with intact comprehension (Left MCA Superior Div.)" />

        <!-- 4. Left Lateral Motor & Sensory Strip (Arm / Hand / Face) -->
        <path d="M 158 24 C 176 23, 192 25, 202 30 L 188 122 C 176 126, 164 128, 154 126 L 166 56 Z"
              class="${getStructureClass('left_postcentral_hand_face', selectedStructures, feedback, 'artery-zone-mca')}"
              data-id="left_postcentral_hand_face"
              data-name="Left Lateral Motor & Sensory Cortex (Arm/Hand/Face)"
              data-info="Contralateral (right) arm/hand/face weakness & sensory loss, astereognosis (Left MCA)" />

        <!-- 5. Left Posterior Parietal / Angular & Supramarginal Gyri -->
        <path d="M 203 32 C 238 38, 268 54, 282 78 L 268 122 C 244 124, 214 122, 192 118 Z"
              class="${getStructureClass('left_parietal_association', selectedStructures, feedback, 'artery-zone-mca')}"
              data-id="left_parietal_association"
              data-name="Left Posterior Parietal Cortex (Angular Gyrus)"
              data-info="Gerstmann syndrome (agraphia, acalculia, finger agnosia, R-L confusion) & agraphesthesia (Left MCA)" />

        <!-- 6. Left Wernicke's Area (Posterior Superior Temporal Gyrus below Sylvian fissure) -->
        <path d="M 154 138 C 186 132, 224 122, 256 124 L 254 162 C 216 170, 174 176, 142 164 Z"
              class="${getStructureClass('left_wernicke', selectedStructures, feedback, 'artery-zone-mca')}"
              data-id="left_wernicke"
              data-name="Left Wernicke's Area (Post. Sup. Temporal Gyrus)"
              data-info="Fluent, nonsensical speech with impaired comprehension & unawareness of errors (Left MCA Inferior Div.)" />

        <!-- 7. Left Lateral Occipital / Visual Pole (PCA) -->
        <path d="M 282 76 C 306 88, 318 106, 316 130 C 312 152, 294 164, 264 166 L 266 120 Z"
              class="${getStructureClass('left_visual_cortex', selectedStructures, feedback, 'artery-zone-pca')}"
              data-id="left_visual_cortex"
              data-name="Left Occipital / Visual Cortex (PCA)"
              data-info="Contralateral (right) homonymous hemianopia with macular sparing (Left PCA)" />

        <!-- Somatotopic & Region Labels -->
        <text x="78" y="82" class="text-hint territory-label">Prefrontal</text>
        <text x="144" y="69" class="text-hint territory-label-xs">FEF</text>
        <text x="128" y="114" class="text-hint territory-label-sm">Broca</text>
        <text x="180" y="45" class="text-hint territory-label-xs">Arm</text>
        <text x="176" y="76" class="text-hint territory-label-xs">Hand</text>
        <text x="171" y="108" class="text-hint territory-label-xs">Face</text>
        <text x="236" y="76" class="text-hint territory-label-sm">Post.</text>
        <text x="236" y="88" class="text-hint territory-label-sm">Parietal</text>
        <text x="204" y="150" class="text-hint territory-label-sm">Wernicke</text>
        <text x="292" y="126" class="text-hint territory-label-sm">Visual</text>
        <text x="42" y="198" class="text-hint territory-axis">ANT</text>
        <text x="304" y="198" class="text-hint territory-axis">POST</text>
      </g>
    </g>

    <!-- ======================================================= -->
    <!-- RIGHT HEMISPHERE — LATERAL SURFACE (Anterior Right) -->
    <!-- ======================================================= -->
    <g transform="translate(420, ${latY})">
      <rect x="0" y="0" width="382" height="${cardH}" rx="14" class="quadrant-card" />
      <text x="191" y="20" class="diagram-label" style="fill:#a5b4fc;">RIGHT HEMISPHERE — LATERAL (MCA / PCA POLE)</text>
      <g transform="${innerScaleRight}">
        <!-- Subtle Cerebellum & Brainstem Reference Silhouette -->
        <path d="M 106 168 C 92 196, 48 196, 30 170 C 50 166, 78 164, 106 168 Z" class="brainstem-ref-silhouette" />
        <path d="M 144 166 L 136 198 L 112 198 L 106 168 Z" class="brainstem-ref-silhouette" />

        <!-- True Lateral Brain Silhouette (Mirrored: Occipital Left, Frontal Right) -->
        <path d="M 302 118
                 C 306 66, 256 24, 166 22
                 C 86 20, 28 54, 16 110
                 C 12 142, 30 164, 68 168
                 C 96 170, 116 164, 136 172
                 C 162 182, 200 186, 220 170
                 C 230 160, 226 144, 208 136
                 C 224 134, 244 138, 268 138
                 C 292 138, 300 130, 302 118 Z"
              class="cortex-outline territory-mca-bg" />

        <!-- Decorative Cortical Sulci & MCA Candelabra Vessel Overlay -->
        <path d="M 274 66 Q 226 60, 188 66" class="sulcus-guide-line" />
        <path d="M 158 24 Q 168 78, 180 128" stroke="#64748b" stroke-width="2" stroke-dasharray="4 3" fill="none" pointer-events="none" />
        <path d="M 220 136 Q 158 130, 102 112" stroke="#64748b" stroke-width="2.2" fill="none" pointer-events="none" />
        <path d="M 128 72 Q 92 74, 62 86" class="sulcus-guide-line" />
        <path d="M 198 158 Q 148 154, 94 144" class="sulcus-guide-line" />
        <path d="M 210 148 Q 194 132, 166 122 M 192 132 Q 200 108, 208 92 M 166 122 Q 154 86, 150 52 M 146 120 Q 120 132, 90 138" stroke="rgba(129,140,248,0.45)" stroke-width="1.6" stroke-linecap="round" fill="none" pointer-events="none" />

        <!-- 1. Right Prefrontal / Executive -->
        <path d="M 300 116 C 300 70, 260 34, 210 27 L 212 114 C 236 124, 272 134, 300 116 Z"
              class="${getStructureClass('right_prefrontal', selectedStructures, feedback, 'artery-zone-aca-mca')}"
              data-id="right_prefrontal"
              data-name="Right Prefrontal Cortex (Executive)"
              data-info="Executive functions, attention, emotional prosody (ACA/MCA)" />

        <!-- 2. Right FEF -->
        <path d="M 209 46 C 192 42, 176 46, 170 58 L 174 88 C 190 90, 204 88, 210 78 Z"
              class="${getStructureClass('right_fef', selectedStructures, feedback, 'artery-zone-mca')}"
              data-id="right_fef"
              data-name="Right Frontal Eye Field (FEF)"
              data-info="Conjugate gaze to left; lesion -> eyes deviate IPSILATERALLY (to right) (Right MCA)" />

        <!-- 3. Right Inferior Frontal (Broca Homologue) -->
        <path d="M 232 92 C 212 86, 188 88, 176 98 L 182 128 C 202 134, 226 134, 238 124 Z"
              class="${getStructureClass('right_broca', selectedStructures, feedback, 'artery-zone-mca')}"
              data-id="right_broca"
              data-name="Right Inferior Frontal Gyrus"
              data-info="Non-dominant homologue: affective prosody of speech (Right MCA)" />

        <!-- 4. Right Lateral Motor & Sensory Strip (Arm / Hand / Face) -->
        <path d="M 176 24 C 158 23, 142 25, 132 30 L 146 122 C 158 126, 170 128, 180 126 L 168 56 Z"
              class="${getStructureClass('right_postcentral_hand_face', selectedStructures, feedback, 'artery-zone-mca')}"
              data-id="right_postcentral_hand_face"
              data-name="Right Lateral Motor & Sensory Cortex (Arm/Hand/Face)"
              data-info="Contralateral (left) arm/hand/face weakness & sensory loss, astereognosis (Right MCA)" />

        <!-- 5. Right Posterior Parietal (Hemineglect!) -->
        <path d="M 131 32 C 96 38, 66 54, 52 78 L 66 122 C 90 124, 120 122, 142 118 Z"
              class="${getStructureClass('right_parietal_association', selectedStructures, feedback, 'artery-zone-mca')}"
              data-id="right_parietal_association"
              data-name="Right Posterior Parietal Cortex (Neglect)"
              data-info="Left hemispatial neglect, anosognosia, sensory extinction on double simultaneous stim (Right MCA)" />

        <!-- 6. Right Superior Temporal -->
        <path d="M 180 138 C 148 132, 110 122, 78 124 L 80 162 C 118 170, 160 176, 192 164 Z"
              class="${getStructureClass('right_wernicke', selectedStructures, feedback, 'artery-zone-mca')}"
              data-id="right_wernicke"
              data-name="Right Posterior Superior Temporal Gyrus"
              data-info="Non-dominant temporal cortex: receptive prosody / emotional tone (Right MCA)" />

        <!-- 7. Right Lateral Occipital / Visual Pole (PCA) -->
        <path d="M 52 76 C 28 88, 16 106, 18 130 C 22 152, 40 164, 70 166 L 68 120 Z"
              class="${getStructureClass('right_visual_cortex', selectedStructures, feedback, 'artery-zone-pca')}"
              data-id="right_visual_cortex"
              data-name="Right Occipital / Visual Cortex (PCA)"
              data-info="Contralateral (left) homonymous hemianopia with macular sparing (Right PCA)" />

        <!-- Somatotopic & Region Labels -->
        <text x="256" y="82" class="text-hint territory-label">Prefrontal</text>
        <text x="190" y="69" class="text-hint territory-label-xs">FEF</text>
        <text x="206" y="114" class="text-hint territory-label-xs">Inf. Front.</text>
        <text x="154" y="45" class="text-hint territory-label-xs">Arm</text>
        <text x="158" y="76" class="text-hint territory-label-xs">Hand</text>
        <text x="163" y="108" class="text-hint territory-label-xs">Face</text>
        <text x="98" y="76" class="text-hint territory-label-sm">Post. Parietal</text>
        <text x="98" y="88" class="text-hint territory-label-xs">(Neglect)</text>
        <text x="130" y="150" class="text-hint territory-label-sm">Sup. Temp</text>
        <text x="42" y="126" class="text-hint territory-label-sm">Visual</text>
        <text x="26" y="198" class="text-hint territory-axis">POST</text>
        <text x="288" y="198" class="text-hint territory-axis">ANT</text>
      </g>
    </g>
    ` : ''}

    ${showMedial ? `
    <!-- ======================================================= -->
    <!-- LEFT HEMISPHERE — MEDIAL SURFACE (ACA & PCA) -->
    <!-- ======================================================= -->
    <g transform="translate(18, ${medY})">
      <rect x="0" y="0" width="382" height="${cardH}" rx="14" class="quadrant-card" />
      <text x="191" y="20" class="diagram-label" style="fill:#67e8f9;">LEFT HEMISPHERE — MEDIAL (ACA &amp; PCA)</text>
      <g transform="${innerScale}">
        <!-- Midline Thalamus / Brainstem Reference Silhouette -->
        <ellipse cx="174" cy="134" rx="28" ry="16" class="brainstem-ref-silhouette" />
        <path d="M 164 148 C 158 168, 168 188, 186 198 L 204 198 C 194 180, 192 164, 196 146 Z" class="brainstem-ref-silhouette" />

        <!-- Medial Brain Silhouette (Frontal Left, Occipital Right) -->
        <path d="M 36 124 C 32 68, 86 26, 174 24 C 254 22, 314 58, 322 118 C 324 152, 294 176, 238 170 C 210 166, 192 146, 162 146 C 122 146, 48 152, 36 124 Z"
              class="cortex-outline territory-aca-bg" />

        <!-- Occipital Medial PCA Zone Backdrop (Posterior to Parieto-Occipital Sulcus) -->
        <path d="M 230 38 C 280 50, 316 78, 320 118 C 322 152, 294 176, 238 170 L 222 142 L 226 92 Z"
              class="territory-pca-bg" />

        <!-- Anatomical Corpus Callosum (Genu, Body, Splenium) -->
        <path d="M 102 116 C 102 92, 138 82, 178 82 C 214 82, 234 94, 232 116 C 228 126, 214 114, 198 106 C 170 100, 136 102, 120 116 C 110 124, 102 122, 102 116 Z"
              fill="#0b1120" stroke="#475569" stroke-width="1.8" />

        <!-- Cingulate Sulcus, Parieto-Occipital Sulcus, Calcarine Sulcus & ACA Pericallosal Artery -->
        <path d="M 74 108 C 86 64, 146 56, 204 64 L 216 34" class="sulcus-guide-line" />
        <path d="M 96 126 C 88 94, 122 72, 178 72 L 204 72" stroke="rgba(34,211,238,0.45)" stroke-width="1.8" stroke-linecap="round" fill="none" pointer-events="none" />
        <path d="M 224 38 L 234 118" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3 3" fill="none" pointer-events="none" />
        <path d="M 234 126 L 316 114" stroke="#f59e0b" stroke-width="2.2" stroke-dasharray="4 2" fill="none" pointer-events="none" />

        <!-- 1. Left Medial Frontal / Emotional Control (ACA) -->
        <path d="M 40 122 C 40 72, 82 36, 144 28 L 150 82 C 122 86, 102 98, 98 118 L 58 134 Z"
              class="${getStructureClass('left_medial_frontal', selectedStructures, feedback, 'artery-zone-aca')}"
              data-id="left_medial_frontal"
              data-name="Left Medial Frontal Cortex (ACA)"
              data-info="Executive & emotional control, abulia / apathy (Left ACA)" />

        <!-- 2. Left Paracentral Lobule (Leg, Foot & Bladder - ACA) -->
        <path d="M 148 28 C 174 24, 202 27, 222 36 L 208 84 C 188 80, 170 80, 152 82 Z"
              class="${getStructureClass('left_paracentral_lobule', selectedStructures, feedback, 'artery-zone-aca')}"
              data-id="left_paracentral_lobule"
              data-name="Left Paracentral Lobule (Foot/Leg - ACA)"
              data-info="Contralateral (right) foot & leg weakness/sensory loss + urinary incontinence (Left ACA)" />

        <!-- 3. Left Cuneus (Upper Bank of Calcarine Sulcus -> Lower Visual Field - PCA) -->
        <path d="M 236 44 C 282 56, 314 82, 318 112 L 236 124 L 228 88 Z"
              class="${getStructureClass('left_cuneus', selectedStructures, feedback, 'artery-zone-pca')}"
              data-id="left_cuneus"
              data-name="Left Cuneus (Upper Visual Cortex - PCA)"
              data-info="Upper bank of calcarine sulcus: contralateral RIGHT LOWER homonymous quadrantanopia (Left PCA)" />

        <!-- 4. Left Lingual Gyrus (Lower Bank of Calcarine Sulcus -> Upper Visual Field - PCA) -->
        <path d="M 236 128 L 318 116 C 316 148, 292 170, 246 168 L 228 148 Z"
              class="${getStructureClass('left_lingual_gyrus', selectedStructures, feedback, 'artery-zone-pca')}"
              data-id="left_lingual_gyrus"
              data-name="Left Lingual Gyrus (Lower Visual Cortex - PCA)"
              data-info="Lower bank of calcarine sulcus: contralateral RIGHT UPPER homonymous quadrantanopia w/ macular sparing (Left PCA)" />

        <text x="92" y="72" class="text-hint territory-label-sm">Med. Frontal</text>
        <text x="92" y="84" class="text-hint territory-label-xs">(Emotion)</text>
        <text x="184" y="48" class="text-hint territory-label-sm">Paracentral</text>
        <text x="184" y="60" class="text-hint territory-label-xs">Leg/Foot/Bladder</text>
        <text x="276" y="88" class="text-hint territory-label-sm">Cuneus</text>
        <text x="276" y="99" class="text-hint territory-label-xs">(Lower Field)</text>
        <text x="274" y="146" class="text-hint territory-label-sm">Lingual</text>
        <text x="274" y="157" class="text-hint territory-label-xs">(Upper Field)</text>
        <text x="168" y="98" class="text-hint territory-label-xs" style="fill:#64748b;">Corpus Callosum</text>
        <text x="42" y="198" class="text-hint territory-axis">ANT</text>
        <text x="304" y="198" class="text-hint territory-axis">POST</text>
      </g>
    </g>

    <!-- ======================================================= -->
    <!-- RIGHT HEMISPHERE — MEDIAL SURFACE (ACA & PCA) -->
    <!-- ======================================================= -->
    <g transform="translate(420, ${medY})">
      <rect x="0" y="0" width="382" height="${cardH}" rx="14" class="quadrant-card" />
      <text x="191" y="20" class="diagram-label" style="fill:#67e8f9;">RIGHT HEMISPHERE — MEDIAL (ACA &amp; PCA)</text>
      <g transform="${innerScaleRight}">
        <!-- Midline Thalamus / Brainstem Reference Silhouette -->
        <ellipse cx="160" cy="134" rx="28" ry="16" class="brainstem-ref-silhouette" />
        <path d="M 170 148 C 176 168, 166 188, 148 198 L 130 198 C 140 180, 142 164, 138 146 Z" class="brainstem-ref-silhouette" />

        <!-- Medial Brain Silhouette (Occipital Left, Frontal Right) -->
        <path d="M 298 124 C 302 68, 248 26, 160 24 C 80 22, 20 58, 12 118 C 10 152, 40 176, 96 170 C 124 166, 142 146, 172 146 C 212 146, 286 152, 298 124 Z"
              class="cortex-outline territory-aca-bg" />

        <!-- Occipital Medial PCA Zone Backdrop -->
        <path d="M 104 38 C 54 50, 18 78, 14 118 C 12 152, 40 176, 96 170 L 112 142 L 108 92 Z"
              class="territory-pca-bg" />

        <!-- Anatomical Corpus Callosum -->
        <path d="M 232 116 C 232 92, 196 82, 156 82 C 120 82, 100 94, 102 116 C 106 126, 120 114, 136 106 C 164 100, 198 102, 214 116 C 224 124, 232 122, 232 116 Z"
              fill="#0b1120" stroke="#475569" stroke-width="1.8" />

        <!-- Cingulate, Parieto-Occipital, Calcarine Sulci & ACA Pericallosal Artery -->
        <path d="M 260 108 C 248 64, 188 56, 130 64 L 118 34" class="sulcus-guide-line" />
        <path d="M 238 126 C 246 94, 212 72, 156 72 L 130 72" stroke="rgba(34,211,238,0.45)" stroke-width="1.8" stroke-linecap="round" fill="none" pointer-events="none" />
        <path d="M 110 38 L 100 118" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3 3" fill="none" pointer-events="none" />
        <path d="M 100 126 L 18 114" stroke="#f59e0b" stroke-width="2.2" stroke-dasharray="4 2" fill="none" pointer-events="none" />

        <!-- 1. Right Medial Frontal / Emotional Control (ACA) -->
        <path d="M 294 122 C 294 72, 252 36, 190 28 L 184 82 C 212 86, 232 98, 236 118 L 276 134 Z"
              class="${getStructureClass('right_medial_frontal', selectedStructures, feedback, 'artery-zone-aca')}"
              data-id="right_medial_frontal"
              data-name="Right Medial Frontal Cortex (ACA)"
              data-info="Executive & emotional control, abulia / apathy (Right ACA)" />

        <!-- 2. Right Paracentral Lobule (Leg, Foot & Bladder - ACA) -->
        <path d="M 186 28 C 160 24, 132 27, 112 36 L 126 84 C 146 80, 164 80, 182 82 Z"
              class="${getStructureClass('right_paracentral_lobule', selectedStructures, feedback, 'artery-zone-aca')}"
              data-id="right_paracentral_lobule"
              data-name="Right Paracentral Lobule (Foot/Leg - ACA)"
              data-info="Contralateral (left) foot & leg weakness/sensory loss + urinary incontinence (Right ACA)" />

        <!-- 3. Right Cuneus (Upper Bank of Calcarine Sulcus -> Lower Visual Field - PCA) -->
        <path d="M 98 44 C 52 56, 20 82, 16 112 L 98 124 L 106 88 Z"
              class="${getStructureClass('right_cuneus', selectedStructures, feedback, 'artery-zone-pca')}"
              data-id="right_cuneus"
              data-name="Right Cuneus (Upper Visual Cortex - PCA)"
              data-info="Upper bank of calcarine sulcus: contralateral LEFT LOWER homonymous quadrantanopia (Right PCA)" />

        <!-- 4. Right Lingual Gyrus (Lower Bank of Calcarine Sulcus -> Upper Visual Field - PCA) -->
        <path d="M 98 128 L 16 116 C 18 148, 42 170, 88 168 L 106 148 Z"
              class="${getStructureClass('right_lingual_gyrus', selectedStructures, feedback, 'artery-zone-pca')}"
              data-id="right_lingual_gyrus"
              data-name="Right Lingual Gyrus (Lower Visual Cortex - PCA)"
              data-info="Lower bank of calcarine sulcus: contralateral LEFT UPPER homonymous quadrantanopia w/ macular sparing (Right PCA)" />

        <text x="242" y="72" class="text-hint territory-label-sm">Med. Frontal</text>
        <text x="242" y="84" class="text-hint territory-label-xs">(Emotion)</text>
        <text x="150" y="48" class="text-hint territory-label-sm">Paracentral</text>
        <text x="150" y="60" class="text-hint territory-label-xs">Leg/Foot/Bladder</text>
        <text x="58" y="88" class="text-hint territory-label-sm">Cuneus</text>
        <text x="58" y="99" class="text-hint territory-label-xs">(Lower Field)</text>
        <text x="60" y="146" class="text-hint territory-label-sm">Lingual</text>
        <text x="60" y="157" class="text-hint territory-label-xs">(Upper Field)</text>
        <text x="166" y="98" class="text-hint territory-label-xs" style="fill:#64748b;">Corpus Callosum</text>
        <text x="26" y="198" class="text-hint territory-axis">POST</text>
        <text x="288" y="198" class="text-hint territory-axis">ANT</text>
      </g>
    </g>
    ` : ''}
  </svg>`;
}
