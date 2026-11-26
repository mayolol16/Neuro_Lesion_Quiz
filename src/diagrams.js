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

// -------------------------------------------------------------
// 1. SPINAL CORD (Slide 2 & 9)
// Large oval, central gray butterfly, central canal
// -------------------------------------------------------------
function renderSpinalCordSVG(selectedStructures, feedback) {
  return `
  <svg viewBox="0 0 700 500" class="neuro-cross-section" data-level="spinal_cord">
    <defs>
      <filter id="glow-teal" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#06b6d4" />
      </filter>
      <filter id="glow-success" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#10b981" />
      </filter>
    </defs>

    <!-- Background Outline: Large Oval (Dr. Cohan Slide 2) -->
    <ellipse cx="350" cy="250" rx="300" ry="190" class="section-outline" />

    <!-- Anterior Median Fissure -->
    <path d="M 350 440 L 350 310" class="median-sulcus-line" />
    <!-- Posterior Median Sulcus -->
    <path d="M 350 60 L 350 180" class="median-sulcus-line" />

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
          class="central-gray-matter" />

    <!-- DORSAL COLUMNS: Left & Right (Slide 9) -->
    <!-- Fasciculus Gracilis: Medial (Legs/Lower Body) -->
    <!-- Right Gracilis (Viewer Left: Anatomical Right) -->
    <path d="M 350 60 C 310 65, 290 90, 290 140 C 300 170, 330 180, 350 180 Z" 
          class="${getStructureClass('right_fasciculus_gracilis', selectedStructures, feedback)}" 
          data-id="right_fasciculus_gracilis" 
          data-name="Right Fasciculus Gracilis" 
          data-info="Dorsal Column: Conscious touch, vibration, and proprioception from RIGHT lower body (T7-S5)" />

    <!-- Left Gracilis (Viewer Right: Anatomical Left) -->
    <path d="M 350 60 C 390 65, 410 90, 410 140 C 400 170, 370 180, 350 180 Z" 
          class="${getStructureClass('left_fasciculus_gracilis', selectedStructures, feedback)}" 
          data-id="left_fasciculus_gracilis" 
          data-name="Left Fasciculus Gracilis" 
          data-info="Dorsal Column: Conscious touch, vibration, and proprioception from LEFT lower body (T7-S5)" />

    <!-- Fasciculus Cuneatus: Lateral (Arms/Upper Body, T6 & above) -->
    <!-- Right Cuneatus -->
    <path d="M 290 90 C 230 115, 200 150, 205 180 C 240 180, 275 160, 290 140 Z" 
          class="${getStructureClass('right_fasciculus_cuneatus', selectedStructures, feedback)}" 
          data-id="right_fasciculus_cuneatus" 
          data-name="Right Fasciculus Cuneatus" 
          data-info="Dorsal Column: Conscious touch, vibration, and proprioception from RIGHT upper body (C1-T6)" />

    <!-- Left Cuneatus -->
    <path d="M 410 90 C 470 115, 500 150, 495 180 C 460 180, 425 160, 410 140 Z" 
          class="${getStructureClass('left_fasciculus_cuneatus', selectedStructures, feedback)}" 
          data-id="left_fasciculus_cuneatus" 
          data-name="Left Fasciculus Cuneatus" 
          data-info="Dorsal Column: Conscious touch, vibration, and proprioception from LEFT upper body (C1-T6)" />

    <!-- LATERAL CORONAL / LATERAL CORTICOSPINAL TRACTS -->
    <path d="M 120 220 C 130 180, 170 180, 210 210 C 220 260, 180 300, 140 280 C 120 260, 115 240, 120 220 Z" 
          class="${getStructureClass('right_lateral_corticospinal', selectedStructures, feedback)}" 
          data-id="right_lateral_corticospinal" 
          data-name="Right Lateral Corticospinal Tract" 
          data-info="Motor: Primary voluntary motor pathway for RIGHT extremities" />

    <path d="M 580 220 C 570 180, 530 180, 490 210 C 480 260, 520 300, 560 280 C 580 260, 585 240, 580 220 Z" 
          class="${getStructureClass('left_lateral_corticospinal', selectedStructures, feedback)}" 
          data-id="left_lateral_corticospinal" 
          data-name="Left Lateral Corticospinal Tract" 
          data-info="Motor: Primary voluntary motor pathway for LEFT extremities" />

    <!-- ANTEROLATERAL SYSTEM (ALS / Spinothalamic Tract - Slide 9) -->
    <!-- Right ALS -->
    <path d="M 120 300 C 140 330, 200 400, 260 410 C 250 380, 210 330, 160 300 Z" 
          class="${getStructureClass('right_als', selectedStructures, feedback)}" 
          data-id="right_als" 
          data-name="Right Anterolateral System (ALS)" 
          data-info="ALS: Pain & Temperature from CONTRALATERAL (LEFT) body starting 1-2 segments below" />

    <!-- Left ALS -->
    <path d="M 580 300 C 560 330, 500 400, 440 410 C 450 380, 490 330, 540 300 Z" 
          class="${getStructureClass('left_als', selectedStructures, feedback)}" 
          data-id="left_als" 
          data-name="Left Anterolateral System (ALS)" 
          data-info="ALS: Pain & Temperature from CONTRALATERAL (RIGHT) body starting 1-2 segments below" />

    <!-- VENTRAL HORNS (Lower Motor Neurons) -->
    <ellipse cx="280" cy="340" rx="30" ry="25" 
             class="${getStructureClass('right_ventral_horn', selectedStructures, feedback)}" 
             data-id="right_ventral_horn" 
             data-name="Right Ventral Horn" 
             data-info="Lower Motor Neurons for right limb/trunk muscles" />

    <ellipse cx="420" cy="340" rx="30" ry="25" 
             class="${getStructureClass('left_ventral_horn', selectedStructures, feedback)}" 
             data-id="left_ventral_horn" 
             data-name="Left Ventral Horn" 
             data-info="Lower Motor Neurons for left limb/trunk muscles" />

    <!-- VENTRAL WHITE COMMISSURE (Slide 2 & Case 1) -->
    <rect x="330" y="270" width="40" height="26" rx="6" 
          class="${getStructureClass('ventral_white_commissure', selectedStructures, feedback)}" 
          data-id="ventral_white_commissure" 
          data-name="Ventral White Commissure" 
          data-info="Decussating second-order spinothalamic pain/temp axons (damaged in Syringomyelia)" />

    <!-- Central Canal -->
    <circle cx="350" cy="250" r="10" class="central-canal" />

    <!-- Anatomical Labels -->
    <text x="350" y="35" class="diagram-label label-cardinal">DORSAL (POSTERIOR)</text>
    <text x="350" y="475" class="diagram-label label-cardinal">VENTRAL (ANTERIOR)</text>
    <text x="50" y="250" class="diagram-label label-side">RIGHT</text>
    <text x="650" y="250" class="diagram-label label-side">LEFT</text>

    <!-- Tract Text Guides -->
    <text x="315" y="130" class="text-hint">F. Gracilis (R)</text>
    <text x="385" y="130" class="text-hint">F. Gracilis (L)</text>
    <text x="235" y="145" class="text-hint">F. Cuneatus (R)</text>
    <text x="465" y="145" class="text-hint">F. Cuneatus (L)</text>
    <text x="180" y="380" class="text-hint">ALS (R)</text>
    <text x="520" y="380" class="text-hint">ALS (L)</text>
    <text x="350" y="315" class="text-hint-center">Ventral White Comm.</text>
  </svg>`;
}

// -------------------------------------------------------------
// 2. CAUDAL MEDULLA (Slide 3 & 10)
// Big circle, central canal 1/3 from top, 3 dorsal circle neighbors
// -------------------------------------------------------------
function renderCaudalMedullaSVG(selectedStructures, feedback) {
  return `
  <svg viewBox="0 0 700 500" class="neuro-cross-section" data-level="caudal_medulla">
    <!-- Big Circle Outline (Slide 3) -->
    <circle cx="350" cy="250" r="210" class="section-outline" />

    <!-- Central Canal (1/3 from top - Slide 3) -->
    <circle cx="350" cy="180" r="12" class="central-canal" />

    <!-- Median Fissures -->
    <line x1="350" y1="40" x2="350" y2="160" class="median-sulcus-line" />
    <line x1="350" y1="260" x2="350" y2="460" class="median-sulcus-line" />

    <!-- 3 CIRCLE NEIGHBORS ON EACH SIDE (Slide 10) -->
    <!-- 1. Nucleus Gracilis: Most medial -->
    <circle cx="305" cy="110" r="32" 
            class="${getStructureClass('right_nucleus_gracilis', selectedStructures, feedback)}" 
            data-id="right_nucleus_gracilis" 
            data-name="Right Nucleus Gracilis" 
            data-info="Relay nucleus for RIGHT lower body touch, vibration, and proprioception" />

    <circle cx="395" cy="110" r="32" 
            class="${getStructureClass('left_nucleus_gracilis', selectedStructures, feedback)}" 
            data-id="left_nucleus_gracilis" 
            data-name="Left Nucleus Gracilis" 
            data-info="Relay nucleus for LEFT lower body touch, vibration, and proprioception" />

    <!-- 2. Nucleus Cuneatus: Middle circle neighbor -->
    <circle cx="230" cy="135" r="34" 
            class="${getStructureClass('right_nucleus_cuneatus', selectedStructures, feedback)}" 
            data-id="right_nucleus_cuneatus" 
            data-name="Right Nucleus Cuneatus" 
            data-info="Relay nucleus for RIGHT upper body (arm/hand) touch, vibration, and proprioception" />

    <circle cx="470" cy="135" r="34" 
            class="${getStructureClass('left_nucleus_cuneatus', selectedStructures, feedback)}" 
            data-id="left_nucleus_cuneatus" 
            data-name="Left Nucleus Cuneatus" 
            data-info="Relay nucleus for LEFT upper body (arm/hand) touch, vibration, and proprioception" />

    <!-- 3. Spinal Trigeminal Tract & Nucleus: Lateral circle neighbor -->
    <ellipse cx="165" cy="185" rx="28" ry="38" 
             class="${getStructureClass('right_spinal_v', selectedStructures, feedback)}" 
             data-id="right_spinal_v" 
             data-name="Right Spinal Trigeminal Complex" 
             data-info="Pars caudalis: Pain & Temperature from IPSILATERAL (RIGHT) face (onion-skin somatotopy)" />

    <ellipse cx="535" cy="185" rx="28" ry="38" 
             class="${getStructureClass('left_spinal_v', selectedStructures, feedback)}" 
             data-id="left_spinal_v" 
             data-name="Left Spinal Trigeminal Complex" 
             data-info="Pars caudalis: Pain & Temperature from IPSILATERAL (LEFT) face (onion-skin somatotopy)" />

    <!-- ALS: "Don't forget me!" (Slide 10) -->
    <path d="M 155 270 C 145 320, 175 380, 220 405 C 235 385, 215 330, 190 280 Z" 
          class="${getStructureClass('right_als', selectedStructures, feedback)}" 
          data-id="right_als" 
          data-name="Right Anterolateral System (ALS)" 
          data-info="ALS: Pain & temperature from CONTRALATERAL (LEFT) body" />

    <path d="M 545 270 C 555 320, 525 380, 480 405 C 465 385, 485 330, 510 280 Z" 
          class="${getStructureClass('left_als', selectedStructures, feedback)}" 
          data-id="left_als" 
          data-name="Left Anterolateral System (ALS)" 
          data-info="ALS: Pain & temperature from CONTRALATERAL (RIGHT) body" />

    <!-- Pyramids / Pyramidal Decussation (Ventral) -->
    <path d="M 270 430 C 270 380, 310 350, 345 350 L 345 450 C 315 450, 285 445, 270 430 Z" 
          class="${getStructureClass('right_pyramid', selectedStructures, feedback)}" 
          data-id="right_pyramid" 
          data-name="Right Pyramid / Motor Decussation" 
          data-info="Corticospinal tract decussating to form lateral corticospinal tract" />

    <path d="M 430 430 C 430 380, 390 350, 355 350 L 355 450 C 385 450, 415 445, 430 430 Z" 
          class="${getStructureClass('left_pyramid', selectedStructures, feedback)}" 
          data-id="left_pyramid" 
          data-name="Left Pyramid / Motor Decussation" 
          data-info="Corticospinal tract decussating to form lateral corticospinal tract" />

    <!-- Labels -->
    <text x="350" y="25" class="diagram-label label-cardinal">DORSAL</text>
    <text x="350" y="485" class="diagram-label label-cardinal">VENTRAL</text>
    <text x="60" y="250" class="diagram-label label-side">RIGHT</text>
    <text x="640" y="250" class="diagram-label label-side">LEFT</text>

    <text x="290" y="70" class="text-hint">Nuc Gracilis</text>
    <text x="220" y="90" class="text-hint">Nuc Cuneatus</text>
    <text x="110" y="140" class="text-hint">Spinal V (Tract & Nuc)</text>
    <text x="140" y="370" class="text-hint">ALS ("Don't forget me!")</text>
    <text x="300" y="420" class="text-hint">Pyramids</text>
  </svg>`;
}

// -------------------------------------------------------------
// 3. ROSTRAL MEDULLA (Slide 4 & 11)
// Big circle + 2 ICP circles above + 2 Olive circles below + 2 Pyramid triangles bottom + 4th Ventricle
// -------------------------------------------------------------
function renderRostralMedullaSVG(selectedStructures, feedback) {
  return `
  <svg viewBox="0 0 700 500" class="neuro-cross-section" data-level="rostral_medulla">
    <!-- Base Shape & 4th Ventricle Floor (Slide 4) -->
    <path d="M 230 90 
             C 270 120, 330 140, 350 140 
             C 370 140, 430 120, 470 90 
             C 540 100, 600 150, 600 230 
             C 600 320, 550 420, 440 450 
             C 410 470, 360 475, 350 475 
             C 340 475, 290 470, 260 450 
             C 150 420, 100 320, 100 230 
             C 100 150, 160 100, 230 90 Z" 
          class="section-outline" />

    <!-- 4th Ventricle depression -->
    <path d="M 230 90 Q 350 150 470 90 Z" class="ventricle-space" />

    <!-- Inferior Cerebellar Peduncles (ICP) - 2 smaller circles above (Slide 4) -->
    <circle cx="170" cy="130" r="38" 
            class="${getStructureClass('right_icp', selectedStructures, feedback)}" 
            data-id="right_icp" 
            data-name="Right Inferior Cerebellar Peduncle (ICP)" 
            data-info="Restiform body: afferent fibers to cerebellum (ataxia if damaged)" />

    <circle cx="530" cy="130" r="38" 
            class="${getStructureClass('left_icp', selectedStructures, feedback)}" 
            data-id="left_icp" 
            data-name="Left Inferior Cerebellar Peduncle (ICP)" 
            data-info="Restiform body: afferent fibers to cerebellum" />

    <!-- Inferior Olivary Nuclei (ION) - 2 smaller crinkled circles below (Slide 4) -->
    <path d="M 230 310 C 200 315, 175 350, 195 385 C 220 405, 260 390, 255 350 Z" 
          class="${getStructureClass('right_inferior_olive', selectedStructures, feedback)}" 
          data-id="right_inferior_olive" 
          data-name="Right Inferior Olive" 
          data-info="Climbing fiber source to cerebellum" />

    <path d="M 470 310 C 500 315, 525 350, 505 385 C 480 405, 440 390, 445 350 Z" 
          class="${getStructureClass('left_inferior_olive', selectedStructures, feedback)}" 
          data-id="left_inferior_olive" 
          data-name="Left Inferior Olive" 
          data-info="Climbing fiber source to cerebellum" />

    <!-- Pyramids - 2 Triangles at Bottom (Slide 4) -->
    <polygon points="275,445 345,465 345,385 285,385" 
             class="${getStructureClass('right_pyramid', selectedStructures, feedback)}" 
             data-id="right_pyramid" 
             data-name="Right Pyramid" 
             data-info="Corticospinal tract: motor fibers to CONTRALATERAL (LEFT) body" />

    <polygon points="425,445 355,465 355,385 415,385" 
             class="${getStructureClass('left_pyramid', selectedStructures, feedback)}" 
             data-id="left_pyramid" 
             data-name="Left Pyramid" 
             data-info="Corticospinal tract: motor fibers to CONTRALATERAL (RIGHT) body" />

    <!-- MEDIAL LEMNISCUS: Tall Vertical Ribbon along midline between olives (Slide 11) -->
    <!-- Right ML (Viewer Left) -->
    <rect x="315" y="240" width="30" height="120" rx="8" 
          class="${getStructureClass('right_medial_lemniscus', selectedStructures, feedback)}" 
          data-id="right_medial_lemniscus" 
          data-name="Right Medial Lemniscus" 
          data-info="Medial Lemniscus: Crossed touch, vibration, proprioception from LEFT body (neck dorsal, feet ventral)" />

    <!-- Left ML (Viewer Right) -->
    <rect x="355" y="240" width="30" height="120" rx="8" 
          class="${getStructureClass('left_medial_lemniscus', selectedStructures, feedback)}" 
          data-id="left_medial_lemniscus" 
          data-name="Left Medial Lemniscus" 
          data-info="Medial Lemniscus: Crossed touch, vibration, proprioception from RIGHT body" />

    <!-- VTT: "Hi neighbor!" - sits directly dorsal to Medial Lemniscus (Slide 11) -->
    <circle cx="330" cy="205" r="16" 
            class="${getStructureClass('right_vtt', selectedStructures, feedback)}" 
            data-id="right_vtt" 
            data-name="Right Ventral Trigeminothalamic Tract (VTT)" 
            data-info="VTT: 'Hi neighbor!' Crossed pain, temp & touch from LEFT face" />

    <circle cx="370" cy="205" r="16" 
            class="${getStructureClass('left_vtt', selectedStructures, feedback)}" 
            data-id="left_vtt" 
            data-name="Left Ventral Trigeminothalamic Tract (VTT)" 
            data-info="VTT: 'Hi neighbor!' Crossed pain, temp & touch from RIGHT face" />

    <!-- SPINAL TRIGEMINAL TRACT & NUCLEUS: Dorsolateral (medial to ICP - Slide 11) -->
    <ellipse cx="170" cy="210" rx="26" ry="34" 
             class="${getStructureClass('right_spinal_v', selectedStructures, feedback)}" 
             data-id="right_spinal_v" 
             data-name="Right Spinal Trigeminal Complex" 
             data-info="Primary uncrossed pain/temp from IPSILATERAL (RIGHT) face (Wallenberg syndrome)" />

    <ellipse cx="530" cy="210" rx="26" ry="34" 
             class="${getStructureClass('left_spinal_v', selectedStructures, feedback)}" 
             data-id="left_spinal_v" 
             data-name="Left Spinal Trigeminal Complex" 
             data-info="Primary uncrossed pain/temp from IPSILATERAL (LEFT) face (Wallenberg syndrome)" />

    <!-- ALS: Anterolateral tegmentum (between Olive & Spinal V - Slide 11) -->
    <ellipse cx="185" cy="285" rx="22" ry="26" 
             class="${getStructureClass('right_als', selectedStructures, feedback)}" 
             data-id="right_als" 
             data-name="Right Anterolateral System (ALS)" 
             data-info="ALS: Pain & temperature from CONTRALATERAL (LEFT) body (Wallenberg syndrome)" />

    <ellipse cx="515" cy="285" rx="22" ry="26" 
             class="${getStructureClass('left_als', selectedStructures, feedback)}" 
             data-id="left_als" 
             data-name="Left Anterolateral System (ALS)" 
             data-info="ALS: Pain & temperature from CONTRALATERAL (RIGHT) body (Wallenberg syndrome)" />

    <!-- Hypoglossal Nuclei (Dorsomedial under 4th ventricle) -->
    <circle cx="325" cy="155" r="11" 
            class="${getStructureClass('right_hypoglossal_nucleus', selectedStructures, feedback)}" 
            data-id="right_hypoglossal_nucleus" 
            data-name="Right Hypoglossal Nucleus (CN XII)" 
            data-info="Motor to tongue: ipsilateral deviation on protrusion (Medial Medullary Syndrome)" />

    <circle cx="375" cy="155" r="11" 
            class="${getStructureClass('left_hypoglossal_nucleus', selectedStructures, feedback)}" 
            data-id="left_hypoglossal_nucleus" 
            data-name="Left Hypoglossal Nucleus (CN XII)" 
            data-info="Motor to tongue: ipsilateral deviation on protrusion" />

    <!-- Vestibular Nuclei (Dorsolateral floor of 4th ventricle) -->
    <ellipse cx="255" cy="150" rx="22" ry="14"
             class="${getStructureClass('right_vestibular_nuclei', selectedStructures, feedback)}"
             data-id="right_vestibular_nuclei"
             data-name="Right Vestibular Nuclei"
             data-info="Vertigo, nausea, vomiting, and nystagmus (Lateral Medullary / PICA stroke)" />

    <ellipse cx="445" cy="150" rx="22" ry="14"
             class="${getStructureClass('left_vestibular_nuclei', selectedStructures, feedback)}"
             data-id="left_vestibular_nuclei"
             data-name="Left Vestibular Nuclei"
             data-info="Vertigo, nausea, vomiting, and nystagmus (Lateral Medullary / PICA stroke)" />

    <!-- Nucleus Ambiguus (CN IX, X - Lateral Tegmentum) -->
    <circle cx="235" cy="245" r="14"
            class="${getStructureClass('right_nucleus_ambiguus', selectedStructures, feedback)}"
            data-id="right_nucleus_ambiguus"
            data-name="Right Nucleus Ambiguus (CN IX / X)"
            data-info="Hoarseness, dysphagia, loss of gag reflex, uvula deviates AWAY (to left)" />

    <circle cx="465" cy="245" r="14"
            class="${getStructureClass('left_nucleus_ambiguus', selectedStructures, feedback)}"
            data-id="left_nucleus_ambiguus"
            data-name="Left Nucleus Ambiguus (CN IX / X)"
            data-info="Hoarseness, dysphagia, loss of gag reflex, uvula deviates AWAY (to right)" />

    <!-- Descending Sympathetic / Hypothalamospinal Fibers (Horner's Syndrome) -->
    <circle cx="215" cy="215" r="10"
            class="${getStructureClass('right_sympathetic', selectedStructures, feedback)}"
            data-id="right_sympathetic"
            data-name="Right Hypothalamospinal (Sympathetic) Fibers"
            data-info="Ipsilateral Horner's syndrome: ptosis, miosis, anhidrosis" />

    <circle cx="485" cy="215" r="10"
            class="${getStructureClass('left_sympathetic', selectedStructures, feedback)}"
            data-id="left_sympathetic"
            data-name="Left Hypothalamospinal (Sympathetic) Fibers"
            data-info="Ipsilateral Horner's syndrome: ptosis, miosis, anhidrosis" />

    <!-- Labels -->
    <text x="350" y="30" class="diagram-label label-cardinal">DORSAL (4th VENTRICLE)</text>
    <text x="350" y="490" class="diagram-label label-cardinal">VENTRAL (PYRAMIDS)</text>
    <text x="50" y="250" class="diagram-label label-side">RIGHT</text>
    <text x="650" y="250" class="diagram-label label-side">LEFT</text>

    <text x="170" y="80" class="text-hint">ICP</text>
    <text x="255" y="128" class="text-hint">Vestib</text>
    <text x="100" y="210" class="text-hint">Spinal V</text>
    <text x="235" y="272" class="text-hint">Nuc Amb</text>
    <text x="215" y="198" class="text-hint">Symp</text>
    <text x="125" y="295" class="text-hint">ALS</text>
    <text x="210" y="360" class="text-hint">Inf. Olive</text>
    <text x="270" y="280" class="text-hint">Medial Lemniscus</text>
    <text x="350" y="195" class="text-hint-center">VTT ("Hi neighbor")</text>
  </svg>`;
}

// -------------------------------------------------------------
// 4. CAUDAL & MID PONS (Slide 5 & 12)
// Large square tegmentum atop curved basilar pons, MCP lateral arms, 4th ventricle
// -------------------------------------------------------------
function renderCaudalMidPonsSVG(selectedStructures, feedback) {
  return `
  <svg viewBox="0 0 700 500" class="neuro-cross-section" data-level="caudal_mid_pons">
    <!-- Basilar Pons (Large curved belly below - Slide 5) -->
    <!-- Protruding MCP arms -->
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
          class="basilar-pons-base" />

    <!-- Tegmentum: Large Square at Top (Slide 5: "All sensory structures go in the square") -->
    <rect x="210" y="90" width="280" height="150" rx="10" class="tegmentum-square" />

    <!-- 4th Ventricle (Top circle/roof - Slide 5) -->
    <path d="M 270 90 Q 350 140 430 90 Z" class="ventricle-space" />

    <!-- Basilar Pons Interactive Regions (Motor & Corticospinal) -->
    <ellipse cx="295" cy="360" rx="55" ry="45" 
             class="${getStructureClass('right_basilar_pons', selectedStructures, feedback)}" 
             data-id="right_basilar_pons" 
             data-name="Right Basilar Pons" 
             data-info="Corticospinal & corticobulbar fibers, pontine nuclei (damaged in Millard-Gubler & Locked-in)" />

    <ellipse cx="405" cy="360" rx="55" ry="45" 
             class="${getStructureClass('left_basilar_pons', selectedStructures, feedback)}" 
             data-id="left_basilar_pons" 
             data-name="Left Basilar Pons" 
             data-info="Corticospinal & corticobulbar fibers, pontine nuclei (damaged in Millard-Gubler & Locked-in)" />

    <!-- MEDIAL LEMNISCUS: "Slanting now!" (Slide 12: slanting horizontally along border) -->
    <!-- Right ML -->
    <path d="M 240 225 L 340 220 L 340 238 L 240 242 Z" 
          class="${getStructureClass('right_medial_lemniscus', selectedStructures, feedback)}" 
          data-id="right_medial_lemniscus" 
          data-name="Right Medial Lemniscus" 
          data-info="Medial Lemniscus: 'Slanting now!' Crossed touch/proprioception from LEFT body" />

    <!-- Left ML -->
    <path d="M 360 220 L 460 225 L 460 242 L 360 238 Z" 
          class="${getStructureClass('left_medial_lemniscus', selectedStructures, feedback)}" 
          data-id="left_medial_lemniscus" 
          data-name="Left Medial Lemniscus" 
          data-info="Medial Lemniscus: 'Slanting now!' Crossed touch/proprioception from RIGHT body" />

    <!-- VTT: "Hi neighbor! Head on top of body!" (Slide 12: sits on lateral/dorsal tip of ML) -->
    <circle cx="250" cy="205" r="16" 
            class="${getStructureClass('right_vtt', selectedStructures, feedback)}" 
            data-id="right_vtt" 
            data-name="Right Ventral Trigeminothalamic Tract (VTT)" 
            data-info="VTT: 'Hi neighbor! Head on top of body!' Crossed touch & pain/temp from LEFT face" />

    <circle cx="450" cy="205" r="16" 
            class="${getStructureClass('left_vtt', selectedStructures, feedback)}" 
            data-id="left_vtt" 
            data-name="Left Ventral Trigeminothalamic Tract (VTT)" 
            data-info="VTT: 'Hi neighbor! Head on top of body!' Crossed touch & pain/temp from RIGHT face" />

    <!-- ALS: Lateral Tegmentum (Slide 12) -->
    <ellipse cx="225" cy="180" rx="16" ry="20" 
             class="${getStructureClass('right_als', selectedStructures, feedback)}" 
             data-id="right_als" 
             data-name="Right Anterolateral System (ALS)" 
             data-info="ALS: Pain & temperature from CONTRALATERAL (LEFT) body" />

    <ellipse cx="475" cy="180" rx="16" ry="20" 
             class="${getStructureClass('left_als', selectedStructures, feedback)}" 
             data-id="left_als" 
             data-name="Left Anterolateral System (ALS)" 
             data-info="ALS: Pain & temperature from CONTRALATERAL (RIGHT) body" />

    <!-- Spinal Trigeminal Complex / Principal Sensory Nucleus of V (Lateral - Slide 12) -->
    <circle cx="230" cy="135" r="18" 
            class="${getStructureClass('right_spinal_v', selectedStructures, feedback)}" 
            data-id="right_spinal_v" 
            data-name="Right Trigeminal Sensory Complex (Chief / Spinal V)" 
            data-info="Mid-pons: Principal sensory nucleus (facial touch) & spinal V tract" />

    <circle cx="470" cy="135" r="18" 
            class="${getStructureClass('left_spinal_v', selectedStructures, feedback)}" 
            data-id="left_spinal_v" 
            data-name="Left Trigeminal Sensory Complex (Chief / Spinal V)" 
            data-info="Mid-pons: Principal sensory nucleus (facial touch) & spinal V tract" />

    <!-- Abducens Nucleus (Dorsomedial under facial colliculus) -->
    <circle cx="320" cy="120" r="13" 
            class="${getStructureClass('right_abducens_nucleus', selectedStructures, feedback)}" 
            data-id="right_abducens_nucleus" 
            data-name="Right Abducens (CN VI) Nucleus" 
            data-info="Lateral rectus motor & PPRF gaze center (Millard-Gubler & Foville)" />

    <circle cx="380" cy="120" r="13" 
            class="${getStructureClass('left_abducens_nucleus', selectedStructures, feedback)}" 
            data-id="left_abducens_nucleus" 
            data-name="Left Abducens (CN VI) Nucleus" 
            data-info="Lateral rectus motor & PPRF gaze center" />

    <!-- Middle Cerebellar Peduncles (MCP Arms - Lateral) -->
    <ellipse cx="145" cy="175" rx="36" ry="26"
             class="${getStructureClass('right_mcp', selectedStructures, feedback)}"
             data-id="right_mcp"
             data-name="Right Middle Cerebellar Peduncle (MCP)"
             data-info="Pontocerebellar fibers: IPSILATERAL (right) limb ataxia & dysmetria (Mid/Caudal Pons)" />

    <ellipse cx="555" cy="175" rx="36" ry="26"
             class="${getStructureClass('left_mcp', selectedStructures, feedback)}"
             data-id="left_mcp"
             data-name="Left Middle Cerebellar Peduncle (MCP)"
             data-info="Pontocerebellar fibers: IPSILATERAL (left) limb ataxia & dysmetria (Mid/Caudal Pons)" />

    <!-- Trigeminal Motor Nucleus (Mid-Pons: Jaw Deviation) -->
    <circle cx="272" cy="128" r="12"
            class="${getStructureClass('right_trigeminal_motor', selectedStructures, feedback)}"
            data-id="right_trigeminal_motor"
            data-name="Right Trigeminal Motor Nucleus (CN Vm)"
            data-info="Muscles of mastication: jaw deviates IPSILATERALLY (to right) on opening" />

    <circle cx="428" cy="128" r="12"
            class="${getStructureClass('left_trigeminal_motor', selectedStructures, feedback)}"
            data-id="left_trigeminal_motor"
            data-name="Left Trigeminal Motor Nucleus (CN Vm)"
            data-info="Muscles of mastication: jaw deviates IPSILATERALLY (to left) on opening" />

    <!-- Descending Sympathetic Fibers (Horner's Syndrome in Lateral Pons) -->
    <circle cx="250" cy="182" r="9"
            class="${getStructureClass('right_sympathetic', selectedStructures, feedback)}"
            data-id="right_sympathetic"
            data-name="Right Descending Sympathetic Fibers"
            data-info="Ipsilateral Horner's syndrome: ptosis, miosis, anhidrosis" />

    <circle cx="450" cy="182" r="9"
            class="${getStructureClass('left_sympathetic', selectedStructures, feedback)}"
            data-id="left_sympathetic"
            data-name="Left Descending Sympathetic Fibers"
            data-info="Ipsilateral Horner's syndrome: ptosis, miosis, anhidrosis" />

    <!-- Facial Motor Nucleus (Ventrolateral tegmentum) -->
    <circle cx="275" cy="165" r="14" 
            class="${getStructureClass('right_facial_nucleus', selectedStructures, feedback)}" 
            data-id="right_facial_nucleus" 
            data-name="Right Facial (CN VII) Nucleus" 
            data-info="Motor to right face muscles (lower motor neuron facial palsy)" />

    <circle cx="425" cy="165" r="14" 
            class="${getStructureClass('left_facial_nucleus', selectedStructures, feedback)}" 
            data-id="left_facial_nucleus" 
            data-name="Left Facial (CN VII) Nucleus" 
            data-info="Motor to left face muscles (lower motor neuron facial palsy)" />

    <!-- Labels -->
    <text x="350" y="30" class="diagram-label label-cardinal">DORSAL (4th VENTRICLE)</text>
    <text x="350" y="490" class="diagram-label label-cardinal">VENTRAL (BASILAR PONS)</text>
    <text x="40" y="250" class="diagram-label label-side">RIGHT</text>
    <text x="660" y="250" class="diagram-label label-side">LEFT</text>

    <text x="145" y="138" class="text-hint">MCP (Arm)</text>
    <text x="272" y="110" class="text-hint">Vm</text>
    <text x="350" y="80" class="text-hint-center">Sensory Square (Tegmentum)</text>
    <text x="290" y="215" class="text-hint">ML (Slanting!)</text>
    <text x="210" y="215" class="text-hint">VTT ("Head on top")</text>
    <text x="350" y="400" class="text-hint-center">Basilar Pons (Motor)</text>
  </svg>`;
}

// -------------------------------------------------------------
// 5. ROSTRAL PONS (Slide 6 & 13)
// "The Snowman!" - 2 intersecting ovals (smaller top = tegmentum, larger bottom = basilar pons)
// -------------------------------------------------------------
function renderRostralPonsSVG(selectedStructures, feedback) {
  return `
  <svg viewBox="0 0 700 500" class="neuro-cross-section" data-level="rostral_pons">
    <!-- "THE SNOWMAN!" (Slide 6) -->
    <!-- Larger Bottom Oval: Basilar Pons -->
    <ellipse cx="350" cy="330" rx="200" ry="130" class="basilar-pons-base" />

    <!-- Smaller Top Oval: Tegmentum (Slide 6: "All sensory structures go in upper oval") -->
    <ellipse cx="350" cy="180" rx="160" ry="100" class="tegmentum-square" />

    <!-- 4th Ventricle (beginning / aqueduct transition at top - Slide 6) -->
    <ellipse cx="350" cy="100" rx="30" ry="16" class="ventricle-space" />

    <!-- Superior Cerebellar Peduncles (SCP) dorsolateral walls -->
    <ellipse cx="250" cy="130" rx="24" ry="34" 
             class="${getStructureClass('right_scp', selectedStructures, feedback)}" 
             data-id="right_scp" 
             data-name="Right Superior Cerebellar Peduncle (SCP / Brachium Conjunctivum)" 
             data-info="Major cerebellum efferent outflow" />

    <ellipse cx="450" cy="130" rx="24" ry="34" 
             class="${getStructureClass('left_scp', selectedStructures, feedback)}" 
             data-id="left_scp" 
             data-name="Left Superior Cerebellar Peduncle (SCP / Brachium Conjunctivum)" 
             data-info="Major cerebellum efferent outflow" />

    <!-- Basilar Pons Motor Areas -->
    <ellipse cx="350" cy="350" rx="140" ry="80" 
             class="${getStructureClass('left_basilar_pons', selectedStructures, feedback)}" 
             data-id="left_basilar_pons" 
             data-name="Basilar Pons (Corticospinal)" 
             data-info="Corticospinal tracts and pontine nuclei" />

    <!-- SENSORY TRIO IN TEGMENTUM (Slide 13): ML, VTT ("Hi neighbor!"), ALS ("Hi neighbor!") -->
    <!-- 1. MEDIAL LEMNISCUS: Horizontal flat band along base of tegmentum -->
    <!-- Right ML -->
    <path d="M 265 240 L 335 240 L 335 258 L 265 258 Z" 
          class="${getStructureClass('right_medial_lemniscus', selectedStructures, feedback)}" 
          data-id="right_medial_lemniscus" 
          data-name="Right Medial Lemniscus" 
          data-info="Crossed touch, vibration, and proprioception from LEFT body" />

    <!-- Left ML -->
    <path d="M 365 240 L 435 240 L 435 258 L 365 258 Z" 
          class="${getStructureClass('left_medial_lemniscus', selectedStructures, feedback)}" 
          data-id="left_medial_lemniscus" 
          data-name="Left Medial Lemniscus" 
          data-info="Crossed touch, vibration, and proprioception from RIGHT body" />

    <!-- 2. VTT: "Hi neighbor!" - immediately lateral to Medial Lemniscus (Slide 13) -->
    <ellipse cx="240" cy="240" rx="18" ry="14" 
             class="${getStructureClass('right_vtt', selectedStructures, feedback)}" 
             data-id="right_vtt" 
             data-name="Right Ventral Trigeminothalamic Tract (VTT)" 
             data-info="VTT: 'Hi neighbor!' Crossed pain, temp, and touch from LEFT face" />

    <ellipse cx="460" cy="240" rx="18" ry="14" 
             class="${getStructureClass('left_vtt', selectedStructures, feedback)}" 
             data-id="left_vtt" 
             data-name="Left Ventral Trigeminothalamic Tract (VTT)" 
             data-info="VTT: 'Hi neighbor!' Crossed pain, temp, and touch from RIGHT face" />

    <!-- 3. ALS: "Hi neighbor!" - immediately lateral to VTT (Slide 13) -->
    <ellipse cx="205" cy="235" rx="16" ry="14" 
             class="${getStructureClass('right_als', selectedStructures, feedback)}" 
             data-id="right_als" 
             data-name="Right Anterolateral System (ALS)" 
             data-info="ALS: 'Hi neighbor!' Crossed pain and temperature from LEFT body" />

    <ellipse cx="495" cy="235" rx="16" ry="14" 
             class="${getStructureClass('left_als', selectedStructures, feedback)}" 
             data-id="left_als" 
             data-name="Left Anterolateral System (ALS)" 
             data-info="ALS: 'Hi neighbor!' Crossed pain and temperature from RIGHT body" />

    <!-- Labels -->
    <text x="350" y="30" class="diagram-label label-cardinal">DORSAL (4th VENTRICLE)</text>
    <text x="350" y="485" class="diagram-label label-cardinal">VENTRAL (BASILAR PONS)</text>
    <text x="60" y="250" class="diagram-label label-side">RIGHT</text>
    <text x="640" y="250" class="diagram-label label-side">LEFT</text>

    <text x="350" y="65" class="text-hint-center">"The Snowman!" (Rostral Pons)</text>
    <text x="210" y="115" class="text-hint">SCP</text>
    <text x="180" y="275" class="text-hint">ALS</text>
    <text x="235" y="275" class="text-hint">VTT</text>
    <text x="290" y="275" class="text-hint">ML</text>
    <text x="350" y="290" class="text-hint-center">Sensory Trio: [ALS - VTT - ML]</text>
  </svg>`;
}

// -------------------------------------------------------------
// 6. MIDBRAIN (Slide 7 & 14)
// "The Pig (from the rear)!" - Oval body, 2 colliculi bumps top, Aqueduct + PAG, 2 Crus Cerebri rectangles bottom
// -------------------------------------------------------------
function renderMidbrainSVG(selectedStructures, feedback) {
  return `
  <svg viewBox="0 0 700 500" class="neuro-cross-section" data-level="midbrain">
    <!-- "THE PIG (from the rear)!" Outline (Slide 7) -->
    <!-- 2 Bumps at top: Colliculi (Slide 7) -->
    <path d="M 280 85 C 290 55, 330 50, 350 70 C 370 50, 410 55, 420 85 Z" class="colliculi-bumps" />

    <!-- Main Oval Body (Slide 7) -->
    <path d="M 210 120 
             C 120 160, 110 280, 160 360 
             L 210 390 L 290 390 L 310 350 
             C 330 340, 370 340, 390 350 
             L 410 390 L 490 390 L 540 360 
             C 590 280, 580 160, 490 120 
             C 450 90, 250 90, 210 120 Z" 
          class="section-outline" />

    <!-- Interpeduncular fossa between crus cerebri -->
    <path d="M 310 350 Q 350 330 390 350 Z" class="ventricle-space" />

    <!-- Cerebral Aqueduct & Periaqueductal Gray (PAG) - Slide 7 -->
    <ellipse cx="350" cy="140" rx="32" ry="24" class="pag-area" />
    <circle cx="350" cy="140" r="10" class="central-canal" />

    <!-- 2 Rectangles on bottom: CRUS CEREBRI (Slide 7) -->
    <!-- Right Crus Cerebri -->
    <rect x="180" y="340" width="110" height="55" rx="10" transform="rotate(-15 235 365)" 
          class="${getStructureClass('right_crus_cerebri', selectedStructures, feedback)}" 
          data-id="right_crus_cerebri" 
          data-name="Right Crus Cerebri" 
          data-info="Corticospinal & corticobulbar fibers (Weber syndrome: contralateral hemiplegia)" />

    <!-- Left Crus Cerebri -->
    <rect x="410" y="340" width="110" height="55" rx="10" transform="rotate(15 465 365)" 
          class="${getStructureClass('left_crus_cerebri', selectedStructures, feedback)}" 
          data-id="left_crus_cerebri" 
          data-name="Left Crus Cerebri" 
          data-info="Corticospinal & corticobulbar fibers (Weber syndrome: contralateral hemiplegia)" />

    <!-- Substantia Nigra (Dorsal to Crus Cerebri - Interactive for Parkinsonian signs) -->
    <path d="M 205 325 C 240 314, 280 318, 308 338 L 300 348 C 275 330, 240 326, 210 336 Z"
          class="${getStructureClass('right_substantia_nigra', selectedStructures, feedback)}"
          data-id="right_substantia_nigra"
          data-name="Right Substantia Nigra"
          data-info="Dopaminergic neurons: contralateral (left) bradykinesia, rigidity, or tremor" />
    <path d="M 495 325 C 460 314, 420 318, 392 338 L 400 348 C 425 330, 460 326, 490 336 Z"
          class="${getStructureClass('left_substantia_nigra', selectedStructures, feedback)}"
          data-id="left_substantia_nigra"
          data-name="Left Substantia Nigra"
          data-info="Dopaminergic neurons: contralateral (right) bradykinesia, rigidity, or tremor" />

    <!-- Superior Cerebellar Peduncle Fibers (Post-decussation near Red Nucleus) -->
    <ellipse cx="268" cy="235" rx="18" ry="13"
             class="${getStructureClass('right_scp', selectedStructures, feedback)}"
             data-id="right_scp"
             data-name="Right Superior Cerebellar Peduncle (SCP)"
             data-info="Post-decussation cerebellar outflow: CONTRALATERAL (left) arm & leg ataxia / intention tremor" />
    <ellipse cx="432" cy="235" rx="18" ry="13"
             class="${getStructureClass('left_scp', selectedStructures, feedback)}"
             data-id="left_scp"
             data-name="Left Superior Cerebellar Peduncle (SCP)"
             data-info="Post-decussation cerebellar outflow: CONTRALATERAL (right) arm & leg ataxia / intention tremor" />

    <!-- Red Nuclei (Slide 7 / Claude Syndrome) -->
    <circle cx="300" cy="270" r="32" 
            class="${getStructureClass('right_red_nucleus', selectedStructures, feedback)}" 
            data-id="right_red_nucleus" 
            data-name="Right Red Nucleus" 
            data-info="Tegmental motor nucleus & dentatorubrothalamic relay (Claude & Benedikt syndromes)" />

    <circle cx="400" cy="270" r="32" 
            class="${getStructureClass('left_red_nucleus', selectedStructures, feedback)}" 
            data-id="left_red_nucleus" 
            data-name="Left Red Nucleus" 
            data-info="Tegmental motor nucleus & dentatorubrothalamic relay" />

    <!-- Oculomotor (CN III) Nucleus & Exiting Rootlets -->
    <circle cx="335" cy="180" r="12" 
            class="${getStructureClass('right_oculomotor_nucleus', selectedStructures, feedback)}" 
            data-id="right_oculomotor_nucleus" 
            data-name="Right Oculomotor (CN III) Nucleus/Nerve" 
            data-info="CN III: Ptosis, mydriasis, 'down & out' eye (Weber, Claude, Benedikt)" />

    <circle cx="365" cy="180" r="12" 
            class="${getStructureClass('left_oculomotor_nucleus', selectedStructures, feedback)}" 
            data-id="left_oculomotor_nucleus" 
            data-name="Left Oculomotor (CN III) Nucleus/Nerve" 
            data-info="CN III: Ptosis, mydriasis, 'down & out' eye" />

    <!-- SENSORY RIBBON IN LATERAL TEGMENTUM (Slide 14) -->
    <!-- Medial Lemniscus, VTT ("Hi neighbor!"), ALS from medial to lateral curving around tegmentum -->
    <!-- Right ML -->
    <ellipse cx="230" cy="265" rx="16" ry="24" 
             class="${getStructureClass('right_medial_lemniscus', selectedStructures, feedback)}" 
             data-id="right_medial_lemniscus" 
             data-name="Right Medial Lemniscus" 
             data-info="Medial Lemniscus: Crossed touch/proprioception from LEFT body" />

    <!-- Left ML -->
    <ellipse cx="470" cy="265" rx="16" ry="24" 
             class="${getStructureClass('left_medial_lemniscus', selectedStructures, feedback)}" 
             data-id="left_medial_lemniscus" 
             data-name="Left Medial Lemniscus" 
             data-info="Medial Lemniscus: Crossed touch/proprioception from RIGHT body" />

    <!-- Right VTT ("Hi neighbor!") -->
    <ellipse cx="205" cy="245" rx="15" ry="20" 
             class="${getStructureClass('right_vtt', selectedStructures, feedback)}" 
             data-id="right_vtt" 
             data-name="Right Ventral Trigeminothalamic Tract (VTT)" 
             data-info="VTT: 'Hi neighbor!' Crossed pain, temp & touch from LEFT face" />

    <!-- Left VTT -->
    <ellipse cx="495" cy="245" rx="15" ry="20" 
             class="${getStructureClass('left_vtt', selectedStructures, feedback)}" 
             data-id="left_vtt" 
             data-name="Left Ventral Trigeminothalamic Tract (VTT)" 
             data-info="VTT: 'Hi neighbor!' Crossed pain, temp & touch from RIGHT face" />

    <!-- Right ALS (Most lateral) -->
    <ellipse cx="180" cy="225" rx="14" ry="18" 
             class="${getStructureClass('right_als', selectedStructures, feedback)}" 
             data-id="right_als" 
             data-name="Right Anterolateral System (ALS)" 
             data-info="ALS: Crossed pain & temperature from LEFT body" />

    <!-- Left ALS -->
    <ellipse cx="520" cy="225" rx="14" ry="18" 
             class="${getStructureClass('left_als', selectedStructures, feedback)}" 
             data-id="left_als" 
             data-name="Left Anterolateral System (ALS)" 
             data-info="ALS: Crossed pain & temperature from RIGHT body" />

    <!-- Labels -->
    <text x="350" y="25" class="diagram-label label-cardinal">DORSAL (COLLICULI)</text>
    <text x="350" y="485" class="diagram-label label-cardinal">VENTRAL (CRUS CEREBRI)</text>
    <text x="50" y="250" class="diagram-label label-side">RIGHT</text>
    <text x="650" y="250" class="diagram-label label-side">LEFT</text>

    <text x="350" y="55" class="text-hint-center">Colliculi (2 Bumps)</text>
    <text x="350" y="115" class="text-hint-center">Aqueduct & PAG</text>
    <text x="300" y="275" class="text-hint">Red Nuc</text>
    <text x="135" y="210" class="text-hint">ALS</text>
    <text x="165" y="260" class="text-hint">VTT</text>
    <text x="215" y="300" class="text-hint">ML</text>
    <text x="235" y="375" class="text-hint">Crus Cerebri</text>
    <text x="350" y="440" class="text-hint-center">"The Pig (from the rear)!"</text>
  </svg>`;
}

// -------------------------------------------------------------
// 7. THALAMUS & DIENCEPHALON
// VPL, VPM, Posterior Limb of Internal Capsule
// -------------------------------------------------------------
function renderThalamusSVG(selectedStructures, feedback) {
  return `
  <svg viewBox="0 0 700 500" class="neuro-cross-section" data-level="thalamus">
    <!-- Diencephalic Boundary / Third Ventricle at Center -->
    <ellipse cx="350" cy="250" rx="270" ry="190" class="section-outline" />

    <!-- Third Ventricle slit -->
    <line x1="350" y1="120" x2="350" y2="380" class="median-sulcus-line" stroke-width="8" />

    <!-- Right Thalamus (Viewer Left: Anatomical Right) -->
    <path d="M 335 150 C 270 150, 220 200, 220 280 C 220 330, 260 370, 335 370 Z" class="thalamus-egg" />

    <!-- Left Thalamus (Viewer Right: Anatomical Left) -->
    <path d="M 365 150 C 430 150, 480 200, 480 280 C 480 330, 440 370, 365 370 Z" class="thalamus-egg" />

    <!-- VENTRAL POSTEROLATERAL NUCLEUS (VPL): Body Sensory Relay -->
    <!-- Right VPL -->
    <circle cx="250" cy="290" r="30" 
            class="${getStructureClass('right_vpl', selectedStructures, feedback)}" 
            data-id="right_vpl" 
            data-name="Right Thalamus: VPL Nucleus" 
            data-info="Relay for ML (touch/proprioception) & ALS (pain/temp) from LEFT body" />

    <!-- Left VPL -->
    <circle cx="450" cy="290" r="30" 
            class="${getStructureClass('left_vpl', selectedStructures, feedback)}" 
            data-id="left_vpl" 
            data-name="Left Thalamus: VPL Nucleus" 
            data-info="Relay for ML & ALS from RIGHT body" />

    <!-- VENTRAL POSTEROMEDIAL NUCLEUS (VPM): Face Sensory Relay -->
    <!-- Right VPM -->
    <circle cx="295" cy="305" r="22" 
            class="${getStructureClass('right_vpm', selectedStructures, feedback)}" 
            data-id="right_vpm" 
            data-name="Right Thalamus: VPM Nucleus" 
            data-info="Relay for trigeminothalamic fibers (all modalities) from LEFT face" />

    <!-- Left VPM -->
    <circle cx="405" cy="305" r="22" 
            class="${getStructureClass('left_vpm', selectedStructures, feedback)}" 
            data-id="left_vpm" 
            data-name="Left Thalamus: VPM Nucleus" 
            data-info="Relay for trigeminothalamic fibers from RIGHT face" />

    <!-- INTERNAL CAPSULE: POSTERIOR LIMB -->
    <!-- Right Posterior Limb -->
    <path d="M 200 200 C 180 250, 180 320, 205 370 L 175 375 C 150 320, 150 250, 170 195 Z" 
          class="${getStructureClass('right_internal_capsule_posterior_limb', selectedStructures, feedback)}" 
          data-id="right_internal_capsule_posterior_limb" 
          data-name="Right Internal Capsule (Posterior Limb)" 
          data-info="Descending corticospinal motor & ascending thalamocortical sensory fibers" />

    <!-- Left Posterior Limb -->
    <path d="M 500 200 C 520 250, 520 320, 495 370 L 525 375 C 550 320, 550 250, 530 195 Z" 
          class="${getStructureClass('left_internal_capsule_posterior_limb', selectedStructures, feedback)}" 
          data-id="left_internal_capsule_posterior_limb" 
          data-name="Left Internal Capsule (Posterior Limb)" 
          data-info="Descending corticospinal motor & ascending thalamocortical sensory fibers" />

    <!-- SUBTHALAMIC NUCLEI (STN - Hemiballismus, PCA perforators / Anterior Choroidal) -->
    <ellipse cx="275" cy="365" rx="22" ry="12"
             class="${getStructureClass('right_subthalamic_nucleus', selectedStructures, feedback)}"
             data-id="right_subthalamic_nucleus"
             data-name="Right Subthalamic Nucleus (STN)"
             data-info="Basal ganglia/diencephalon: lacunar infarct causes CONTRALATERAL (left) hemiballismus" />

    <ellipse cx="425" cy="365" rx="22" ry="12"
             class="${getStructureClass('left_subthalamic_nucleus', selectedStructures, feedback)}"
             data-id="left_subthalamic_nucleus"
             data-name="Left Subthalamic Nucleus (STN)"
             data-info="Basal ganglia/diencephalon: lacunar infarct causes CONTRALATERAL (right) hemiballismus" />

    <!-- Labels -->
    <text x="350" y="30" class="diagram-label label-cardinal">ANTERIOR</text>
    <text x="350" y="480" class="diagram-label label-cardinal">POSTERIOR</text>
    <text x="50" y="250" class="diagram-label label-side">RIGHT</text>
    <text x="650" y="250" class="diagram-label label-side">LEFT</text>

    <text x="350" y="95" class="text-hint-center">3rd Ventricle</text>
    <text x="245" y="295" class="text-hint">VPL (Body)</text>
    <text x="295" y="310" class="text-hint">VPM (Face)</text>
    <text x="275" y="390" class="text-hint">Subthalamic Nuc (STN)</text>
    <text x="140" y="270" class="text-hint">Post. Limb Int. Capsule</text>
  </svg>`;
}

// -------------------------------------------------------------
// 8. CEREBRAL CORTEX & HOMUNCULUS
// Coronal view: Paracentral Lobule (Leg/Foot) to Lateral Postcentral Gyrus (Hand/Face)
// -------------------------------------------------------------
function renderCortexSVG(selectedStructures, feedback) {
  return `
  <svg viewBox="0 0 700 520" class="neuro-cross-section" data-level="cortex">
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

        <!-- Decorative Cortical Sulci (Superior Frontal, Central, Sylvian, Intraparietal, Sup. Temporal) -->
        <path d="M 60 66 Q 108 60, 146 66" class="sulcus-guide-line" />
        <path d="M 176 24 Q 166 78, 154 128" stroke="#64748b" stroke-width="2" stroke-dasharray="4 3" fill="none" pointer-events="none" />
        <path d="M 114 136 Q 176 130, 232 112" stroke="#64748b" stroke-width="2.2" fill="none" pointer-events="none" />
        <path d="M 206 72 Q 242 74, 272 86" class="sulcus-guide-line" />
        <path d="M 136 158 Q 186 154, 240 144" class="sulcus-guide-line" />

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

        <!-- Decorative Cortical Sulci -->
        <path d="M 274 66 Q 226 60, 188 66" class="sulcus-guide-line" />
        <path d="M 158 24 Q 168 78, 180 128" stroke="#64748b" stroke-width="2" stroke-dasharray="4 3" fill="none" pointer-events="none" />
        <path d="M 220 136 Q 158 130, 102 112" stroke="#64748b" stroke-width="2.2" fill="none" pointer-events="none" />
        <path d="M 128 72 Q 92 74, 62 86" class="sulcus-guide-line" />
        <path d="M 198 158 Q 148 154, 94 144" class="sulcus-guide-line" />

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

        <!-- Cingulate Sulcus, Parieto-Occipital Sulcus & Calcarine Sulcus Guides -->
        <path d="M 74 108 C 86 64, 146 56, 204 64 L 216 34" class="sulcus-guide-line" />
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

        <!-- Cingulate, Parieto-Occipital & Calcarine Sulci -->
        <path d="M 260 108 C 248 64, 188 56, 130 64 L 118 34" class="sulcus-guide-line" />
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
