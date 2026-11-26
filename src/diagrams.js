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

export function renderDiagramSVG(levelId, selectedStructures = [], feedback = null) {
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
      return renderCorticalTerritoriesSVG(selectedStructures, feedback);
    default:
      return renderSpinalCordSVG(selectedStructures, feedback);
  }
}

function getStructureClass(structId, selectedStructures, feedback) {
  const isSelected = selectedStructures.includes(structId);
  if (!feedback) {
    return isSelected ? "interactive-struct selected" : "interactive-struct";
  }
  const isCorrect = feedback.correctStructures.includes(structId);
  if (isSelected && isCorrect) return "interactive-struct state-correct";
  if (isSelected && !isCorrect) return "interactive-struct state-incorrect";
  if (!isSelected && isCorrect) return "interactive-struct state-missed";
  return "interactive-struct";
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
// Coronal view: Paracentral Lobule (Leg) to Lateral Postcentral Gyrus (Hand/Face)
// -------------------------------------------------------------
function renderCortexSVG(selectedStructures, feedback) {
  return `
  <svg viewBox="0 0 700 500" class="neuro-cross-section" data-level="cortex">
    <!-- Coronal Cut of Cerebral Hemispheres with Longitudinal Fissure -->
    <path d="M 350 420 
             L 350 160 
             C 330 160, 270 170, 220 200 
             C 170 230, 130 280, 110 350 
             C 105 370, 120 400, 140 400 
             C 170 400, 210 320, 250 290 
             C 290 260, 310 270, 330 350 Z" 
          class="cortex-outline" />

    <!-- Left Hemisphere -->
    <path d="M 350 420 
             L 350 160 
             C 370 160, 430 170, 480 200 
             C 530 230, 570 280, 590 350 
             C 595 370, 580 400, 560 400 
             C 530 400, 490 320, 450 290 
             C 410 260, 390 270, 370 350 Z" 
          class="cortex-outline" />

    <!-- Longitudinal Fissure -->
    <line x1="350" y1="50" x2="350" y2="440" class="median-sulcus-line" stroke-width="4" />

    <!-- 1. PARACENTRAL LOBULE (Medial Wall / Foot & Leg Representation - ACA territory) -->
    <!-- Right Paracentral Lobule (Viewer Left) -->
    <path d="M 350 160 L 320 165 C 315 200, 320 250, 350 260 Z" 
          class="${getStructureClass('right_paracentral_lobule', selectedStructures, feedback)}" 
          data-id="right_paracentral_lobule" 
          data-name="Right Paracentral Lobule (Foot/Leg)" 
          data-info="Primary somatosensory cortex: Foot & leg discriminative sensation (ACA territory)" />

    <!-- Left Paracentral Lobule (Viewer Right) -->
    <path d="M 350 160 L 380 165 C 385 200, 380 250, 350 260 Z" 
          class="${getStructureClass('left_paracentral_lobule', selectedStructures, feedback)}" 
          data-id="left_paracentral_lobule" 
          data-name="Left Paracentral Lobule (Foot/Leg)" 
          data-info="Primary somatosensory cortex: Foot & leg discriminative sensation (ACA territory)" />

    <!-- 2. SUPERIOR CONVEXITY: Trunk & Arm -->
    <path d="M 320 165 C 270 175, 230 205, 205 240 L 225 255 C 245 225, 280 200, 315 190 Z" 
          class="${getStructureClass('right_postcentral_arm_trunk', selectedStructures, feedback)}" 
          data-id="right_postcentral_arm_trunk" 
          data-name="Right Postcentral Gyrus (Trunk/Arm Area)" 
          data-info="Primary somatosensory cortex: Trunk & upper extremity representation" />

    <path d="M 380 165 C 430 175, 470 205, 495 240 L 475 255 C 455 225, 420 200, 385 190 Z" 
          class="${getStructureClass('left_postcentral_arm_trunk', selectedStructures, feedback)}" 
          data-id="left_postcentral_arm_trunk" 
          data-name="Left Postcentral Gyrus (Trunk/Arm Area)" 
          data-info="Primary somatosensory cortex: Trunk & upper extremity representation" />

    <!-- 3. LATERAL CONVEXITY: Hand & Lower Face (MCA territory - Cases 4 & 10) -->
    <!-- Right Hand & Face -->
    <path d="M 205 240 C 160 280, 130 330, 115 375 L 140 385 C 155 340, 180 300, 220 260 Z" 
          class="${getStructureClass('right_postcentral_hand_face', selectedStructures, feedback)}" 
          data-id="right_postcentral_hand_face" 
          data-name="Right Postcentral Gyrus (Hand & Face Area)" 
          data-info="Primary somatosensory cortex: Hand astereognosis & lower face sensory loss (MCA territory)" />

    <!-- Left Hand & Face -->
    <path d="M 495 240 C 540 280, 570 330, 585 375 L 560 385 C 545 340, 520 300, 480 260 Z" 
          class="${getStructureClass('left_postcentral_hand_face', selectedStructures, feedback)}" 
          data-id="left_postcentral_hand_face" 
          data-name="Left Postcentral Gyrus (Hand & Face Area)" 
          data-info="Primary somatosensory cortex: Hand astereognosis & lower face sensory loss (MCA territory)" />

    <!-- Posterior Parietal Association Cortex (Cases 28 & 29: Extinction & Gerstmann) -->
    <circle cx="160" cy="300" r="24" 
            class="${getStructureClass('right_parietal_association', selectedStructures, feedback)}" 
            data-id="right_parietal_association" 
            data-name="Right Posterior Parietal Cortex" 
            data-info="Sensory extinction to double simultaneous stimulation & spatial neglect" />

    <circle cx="540" cy="300" r="24" 
            class="${getStructureClass('left_parietal_association', selectedStructures, feedback)}" 
            data-id="left_parietal_association" 
            data-name="Left Posterior Parietal Cortex (Angular Gyrus)" 
            data-info="Gerstmann syndrome: finger agnosia, agraphia, acalculia, R-L confusion" />

    <!-- Labels -->
    <text x="350" y="30" class="diagram-label label-cardinal">SUPERIOR / VERTEX</text>
    <text x="50" y="250" class="diagram-label label-side">RIGHT</text>
    <text x="650" y="250" class="diagram-label label-side">LEFT</text>

    <text x="350" y="140" class="text-hint-center">Longitudinal Fissure</text>
    <text x="305" y="200" class="text-hint">Paracentral (Leg/Foot)</text>
    <text x="215" y="195" class="text-hint">Trunk/Arm</text>
    <text x="110" y="270" class="text-hint">Hand & Face (MCA)</text>
  </svg>`;
}

// -------------------------------------------------------------
// 9. CEREBRAL CORTEX FUNCTIONAL REGIONS & ARTERIAL TERRITORIES
// Based on Stroke Lecture Slide 11 (Lateral & Medial Views, Both Hemispheres)
// Color-coded vascular territory backdrops: ACA (cyan), MCA (indigo), PCA (amber)
// -------------------------------------------------------------
function renderCorticalTerritoriesSVG(selectedStructures, feedback) {
  return `
  <svg viewBox="0 0 800 560" class="neuro-cross-section cortical-territories-svg" data-level="cortex_territories">
    <!-- Top Vascular Territory Legend -->
    <g transform="translate(155, 8)">
      <rect x="0" y="0" width="490" height="30" rx="15" fill="rgba(15,23,42,0.9)" stroke="rgba(148,163,184,0.28)" />
      <circle cx="30" cy="15" r="6" fill="rgba(6,182,212,0.6)" stroke="#06b6d4" stroke-width="1.5" />
      <text x="43" y="19" class="territory-legend-text" fill="#67e8f9">ACA (Medial / Leg)</text>
      <circle cx="195" cy="15" r="6" fill="rgba(99,102,241,0.6)" stroke="#818cf8" stroke-width="1.5" />
      <text x="208" y="19" class="territory-legend-text" fill="#a5b4fc">MCA (Lateral / Face-Arm)</text>
      <circle cx="388" cy="15" r="6" fill="rgba(245,158,11,0.6)" stroke="#f59e0b" stroke-width="1.5" />
      <text x="401" y="19" class="territory-legend-text" fill="#fcd34d">PCA (Visual)</text>
    </g>

    <!-- ======================================================= -->
    <!-- TOP LEFT: LEFT HEMISPHERE — LATERAL SURFACE (Anterior Left) -->
    <!-- ======================================================= -->
    <g transform="translate(20, 48)">
      <rect x="0" y="0" width="370" height="236" rx="14" class="quadrant-card" />
      <text x="185" y="20" class="diagram-label" style="fill:#a5b4fc;">LEFT HEMISPHERE — LATERAL (MCA / PCA POLE)</text>
      <g transform="translate(15, 16)">
        <!-- Outer Brain Silhouette (Frontal on Left, Occipital on Right) -->
        <path d="M 40 130 C 35 72, 90 30, 175 28 C 255 26, 315 62, 322 122 C 326 158, 302 184, 260 185 C 228 186, 200 182, 165 186 C 120 192, 92 178, 86 156 C 58 158, 42 150, 40 130 Z"
              class="cortex-outline territory-mca-bg" />
        <!-- Occipital Pole PCA Zone Backdrop -->
        <path d="M 274 62 C 304 78, 322 102, 320 132 C 316 158, 298 178, 270 181 L 266 105 Z"
              class="territory-pca-bg" />
        <!-- Central Sulcus & Sylvian Fissure guides -->
        <path d="M 186 30 Q 174 82, 162 124" stroke="#475569" stroke-width="2" stroke-dasharray="4 3" fill="none" />
        <path d="M 118 140 Q 180 128, 238 118" stroke="#475569" stroke-width="2" stroke-dasharray="4 3" fill="none" />

        <!-- Left Prefrontal / Executive -->
        <path d="M 42 126 C 42 78, 82 42, 128 34 L 128 116 L 84 134 C 58 136, 44 135, 42 126 Z"
              class="${getStructureClass('left_prefrontal', selectedStructures, feedback)}"
              data-id="left_prefrontal"
              data-name="Left Prefrontal Cortex (Executive)"
              data-info="Executive functions, planning, working memory, motivation (ACA/MCA)" />

        <!-- Left FEF -->
        <ellipse cx="144" cy="70" rx="18" ry="14"
                 class="${getStructureClass('left_fef', selectedStructures, feedback)}"
                 data-id="left_fef"
                 data-name="Left Frontal Eye Field (FEF)"
                 data-info="Conjugate gaze to opposite side; lesion -> eyes deviate IPSILATERALLY (to left) (MCA)" />

        <!-- Left Broca's Area (Inferior Frontal Gyrus) -->
        <ellipse cx="122" cy="116" rx="26" ry="18"
                 class="${getStructureClass('left_broca', selectedStructures, feedback)}"
                 data-id="left_broca"
                 data-name="Left Broca's Area (Inferior Frontal Gyrus)"
                 data-info="Non-fluent, hesitant expressive aphasia with intact comprehension (Left MCA Superior Div.)" />

        <!-- Left Lateral Motor & Sensory Strip (Arm / Hand / Face) -->
        <path d="M 164 34 L 204 34 L 190 124 L 154 124 Z"
              class="${getStructureClass('left_postcentral_hand_face', selectedStructures, feedback)}"
              data-id="left_postcentral_hand_face"
              data-name="Left Lateral Motor & Sensory Cortex (Face/Arm/Hand)"
              data-info="Contralateral (right) face/arm/hand weakness & sensory loss, astereognosis (Left MCA)" />

        <!-- Left Wernicke's Area (Posterior Superior Temporal Gyrus) -->
        <ellipse cx="222" cy="144" rx="34" ry="20"
                 class="${getStructureClass('left_wernicke', selectedStructures, feedback)}"
                 data-id="left_wernicke"
                 data-name="Left Wernicke's Area (Post. Sup. Temporal Gyrus)"
                 data-info="Fluent, nonsensical speech with impaired comprehension & unawareness of errors (Left MCA Inferior Div.)" />

        <!-- Left Posterior Parietal / Angular Gyrus -->
        <ellipse cx="242" cy="86" rx="30" ry="26"
                 class="${getStructureClass('left_parietal_association', selectedStructures, feedback)}"
                 data-id="left_parietal_association"
                 data-name="Left Posterior Parietal Cortex (Angular Gyrus)"
                 data-info="Gerstmann syndrome (agraphia, acalculia, finger agnosia, R-L confusion) & agraphesthesia (Left MCA)" />

        <!-- Left Lateral Occipital / Visual Pole -->
        <path d="M 282 68 C 308 82, 322 104, 320 132 C 316 158, 298 176, 274 180 L 270 110 Z"
              class="${getStructureClass('left_visual_cortex', selectedStructures, feedback)}"
              data-id="left_visual_cortex"
              data-name="Left Occipital / Visual Cortex (PCA)"
              data-info="Contralateral (right) homonymous hemianopia with macular sparing (Left PCA)" />

        <text x="80" y="84" class="text-hint territory-label">Prefrontal</text>
        <text x="144" y="73" class="text-hint territory-label-sm">FEF</text>
        <text x="122" y="120" class="text-hint territory-label">Broca</text>
        <text x="178" y="78" class="text-hint territory-label-sm">M1/S1</text>
        <text x="176" y="90" class="text-hint territory-label-xs">Face/Arm</text>
        <text x="242" y="83" class="text-hint territory-label-sm">Post.</text>
        <text x="242" y="95" class="text-hint territory-label-sm">Parietal</text>
        <text x="222" y="148" class="text-hint territory-label">Wernicke</text>
        <text x="296" y="130" class="text-hint territory-label-sm">Visual</text>
        <text x="48" y="206" class="text-hint territory-axis">ANT</text>
        <text x="310" y="206" class="text-hint territory-axis">POST</text>
      </g>
    </g>

    <!-- ======================================================= -->
    <!-- TOP RIGHT: RIGHT HEMISPHERE — LATERAL SURFACE (Anterior Right) -->
    <!-- ======================================================= -->
    <g transform="translate(410, 48)">
      <rect x="0" y="0" width="370" height="236" rx="14" class="quadrant-card" />
      <text x="185" y="20" class="diagram-label" style="fill:#a5b4fc;">RIGHT HEMISPHERE — LATERAL (MCA / PCA POLE)</text>
      <g transform="translate(25, 16)">
        <!-- Outer Brain Silhouette (Occipital on Left, Frontal on Right) -->
        <path d="M 300 130 C 305 72, 250 30, 165 28 C 85 26, 25 62, 18 122 C 14 158, 38 184, 80 185 C 112 186, 140 182, 175 186 C 220 192, 248 178, 254 156 C 282 158, 298 150, 300 130 Z"
              class="cortex-outline territory-mca-bg" />
        <!-- Occipital Pole PCA Zone Backdrop -->
        <path d="M 66 62 C 36 78, 18 102, 20 132 C 24 158, 42 178, 70 181 L 74 105 Z"
              class="territory-pca-bg" />
        <path d="M 154 30 Q 166 82, 178 124" stroke="#475569" stroke-width="2" stroke-dasharray="4 3" fill="none" />
        <path d="M 222 140 Q 160 128, 102 118" stroke="#475569" stroke-width="2" stroke-dasharray="4 3" fill="none" />

        <!-- Right Prefrontal / Executive -->
        <path d="M 298 126 C 298 78, 258 42, 212 34 L 212 116 L 256 134 C 282 136, 296 135, 298 126 Z"
              class="${getStructureClass('right_prefrontal', selectedStructures, feedback)}"
              data-id="right_prefrontal"
              data-name="Right Prefrontal Cortex (Executive)"
              data-info="Executive functions, attention, emotional prosody (ACA/MCA)" />

        <!-- Right FEF -->
        <ellipse cx="196" cy="70" rx="18" ry="14"
                 class="${getStructureClass('right_fef', selectedStructures, feedback)}"
                 data-id="right_fef"
                 data-name="Right Frontal Eye Field (FEF)"
                 data-info="Conjugate gaze to left; lesion -> eyes deviate IPSILATERALLY (to right) (MCA)" />

        <!-- Right Inferior Frontal -->
        <ellipse cx="218" cy="116" rx="26" ry="18"
                 class="${getStructureClass('right_broca', selectedStructures, feedback)}"
                 data-id="right_broca"
                 data-name="Right Inferior Frontal Gyrus"
                 data-info="Non-dominant homologue: affective prosody of speech (Right MCA)" />

        <!-- Right Lateral Motor & Sensory Strip (Arm / Hand / Face) -->
        <path d="M 176 34 L 136 34 L 150 124 L 186 124 Z"
              class="${getStructureClass('right_postcentral_hand_face', selectedStructures, feedback)}"
              data-id="right_postcentral_hand_face"
              data-name="Right Lateral Motor & Sensory Cortex (Face/Arm/Hand)"
              data-info="Contralateral (left) face/arm/hand weakness & sensory loss, astereognosis (Right MCA)" />

        <!-- Right Posterior Parietal (Hemineglect!) -->
        <ellipse cx="98" cy="86" rx="32" ry="26"
                 class="${getStructureClass('right_parietal_association', selectedStructures, feedback)}"
                 data-id="right_parietal_association"
                 data-name="Right Posterior Parietal Cortex (Neglect)"
                 data-info="Left hemispatial neglect, anosognosia, sensory extinction on double simultaneous stim (Right MCA)" />

        <!-- Right Superior Temporal -->
        <ellipse cx="118" cy="144" rx="34" ry="20"
                 class="${getStructureClass('right_wernicke', selectedStructures, feedback)}"
                 data-id="right_wernicke"
                 data-name="Right Posterior Superior Temporal Gyrus"
                 data-info="Non-dominant temporal cortex: receptive prosody / emotional tone (Right MCA)" />

        <!-- Right Lateral Occipital / Visual Pole -->
        <path d="M 58 68 C 32 82, 18 104, 20 132 C 24 158, 42 176, 66 180 L 70 110 Z"
              class="${getStructureClass('right_visual_cortex', selectedStructures, feedback)}"
              data-id="right_visual_cortex"
              data-name="Right Occipital / Visual Cortex (PCA)"
              data-info="Contralateral (left) homonymous hemianopia with macular sparing (Right PCA)" />

        <text x="260" y="84" class="text-hint territory-label">Prefrontal</text>
        <text x="196" y="73" class="text-hint territory-label-sm">FEF</text>
        <text x="218" y="120" class="text-hint territory-label-xs">Inf. Front.</text>
        <text x="162" y="78" class="text-hint territory-label-sm">M1/S1</text>
        <text x="164" y="90" class="text-hint territory-label-xs">Face/Arm</text>
        <text x="98" y="83" class="text-hint territory-label-sm">Post. Parietal</text>
        <text x="98" y="95" class="text-hint territory-label-xs">(Neglect)</text>
        <text x="118" y="148" class="text-hint territory-label-sm">Sup. Temp</text>
        <text x="44" y="130" class="text-hint territory-label-sm">Visual</text>
        <text x="30" y="206" class="text-hint territory-axis">POST</text>
        <text x="292" y="206" class="text-hint territory-axis">ANT</text>
      </g>
    </g>

    <!-- ======================================================= -->
    <!-- BOTTOM LEFT: LEFT HEMISPHERE — MEDIAL SURFACE (ACA & PCA) -->
    <!-- ======================================================= -->
    <g transform="translate(20, 300)">
      <rect x="0" y="0" width="370" height="240" rx="14" class="quadrant-card" />
      <text x="185" y="20" class="diagram-label" style="fill:#67e8f9;">LEFT HEMISPHERE — MEDIAL (ACA &amp; PCA)</text>
      <g transform="translate(15, 20)">
        <!-- Medial Brain Silhouette (Frontal Left, Occipital Right) -->
        <path d="M 40 130 C 35 72, 90 30, 175 28 C 255 26, 315 62, 322 122 C 326 158, 295 182, 240 176 C 210 172, 185 150, 155 150 C 115 150, 50 156, 40 130 Z"
              class="cortex-outline territory-aca-bg" />
        <!-- Occipital Medial PCA Zone Backdrop (Posterior to Parieto-occipital sulcus) -->
        <path d="M 232 42 C 282 54, 318 82, 322 122 C 324 158, 295 182, 240 176 L 222 146 L 228 96 Z"
              class="territory-pca-bg" />
        <!-- Corpus Callosum landmark -->
        <path d="M 110 118 C 125 90, 215 90, 232 118 C 222 126, 208 112, 170 110 C 135 110, 122 124, 110 118 Z"
              fill="#0f172a" stroke="#475569" stroke-width="1.5" />
        <!-- Calcarine Sulcus guide -->
        <path d="M 244 134 L 316 122" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4 2" fill="none" />

        <!-- Left Medial Frontal / Emotional Control (ACA) -->
        <path d="M 44 128 C 44 78, 86 42, 146 32 L 154 92 C 128 96, 112 108, 108 124 L 62 138 Z"
              class="${getStructureClass('left_medial_frontal', selectedStructures, feedback)}"
              data-id="left_medial_frontal"
              data-name="Left Medial Frontal Cortex (ACA)"
              data-info="Executive & emotional control, abulia / apathy (Left ACA)" />

        <!-- Left Paracentral Lobule (Foot / Leg Motor & Sensory + Bladder - ACA) -->
        <path d="M 150 32 C 175 28, 206 32, 224 40 L 210 94 C 190 90, 172 90, 156 92 Z"
              class="${getStructureClass('left_paracentral_lobule', selectedStructures, feedback)}"
              data-id="left_paracentral_lobule"
              data-name="Left Paracentral Lobule (Foot/Leg - ACA)"
              data-info="Contralateral (right) foot & leg weakness/sensory loss + urinary incontinence (Left ACA)" />

        <!-- Left Cuneus (Upper Bank of Calcarine Sulcus -> Lower Visual Field - PCA) -->
        <path d="M 240 50 C 284 62, 316 86, 320 120 L 246 132 L 232 96 Z"
              class="${getStructureClass('left_cuneus', selectedStructures, feedback)}"
              data-id="left_cuneus"
              data-name="Left Cuneus (Upper Visual Cortex - PCA)"
              data-info="Upper bank of calcarine sulcus: contralateral RIGHT LOWER homonymous quadrantanopia (Left PCA)" />

        <!-- Left Lingual Gyrus (Lower Bank of Calcarine Sulcus -> Upper Visual Field - PCA) -->
        <path d="M 246 136 L 320 124 C 318 156, 294 176, 250 174 L 234 156 Z"
              class="${getStructureClass('left_lingual_gyrus', selectedStructures, feedback)}"
              data-id="left_lingual_gyrus"
              data-name="Left Lingual Gyrus (Lower Visual Cortex - PCA)"
              data-info="Lower bank of calcarine sulcus: contralateral RIGHT UPPER homonymous quadrantanopia w/ macular sparing (Left PCA)" />

        <text x="96" y="78" class="text-hint territory-label-sm">Med. Frontal</text>
        <text x="96" y="90" class="text-hint territory-label-xs">(Emotion)</text>
        <text x="186" y="58" class="text-hint territory-label-sm">Paracentral</text>
        <text x="186" y="70" class="text-hint territory-label-xs">Leg/Foot (ACA)</text>
        <text x="278" y="96" class="text-hint territory-label-sm">Cuneus</text>
        <text x="278" y="156" class="text-hint territory-label-sm">Lingual</text>
        <text x="170" y="106" class="text-hint territory-label-xs" style="fill:#64748b;">Corpus Callosum</text>
        <text x="48" y="204" class="text-hint territory-axis">ANT</text>
        <text x="310" y="204" class="text-hint territory-axis">POST</text>
      </g>
    </g>

    <!-- ======================================================= -->
    <!-- BOTTOM RIGHT: RIGHT HEMISPHERE — MEDIAL SURFACE (ACA & PCA) -->
    <!-- ======================================================= -->
    <g transform="translate(410, 300)">
      <rect x="0" y="0" width="370" height="240" rx="14" class="quadrant-card" />
      <text x="185" y="20" class="diagram-label" style="fill:#67e8f9;">RIGHT HEMISPHERE — MEDIAL (ACA &amp; PCA)</text>
      <g transform="translate(25, 20)">
        <!-- Medial Brain Silhouette (Occipital Left, Frontal Right) -->
        <path d="M 300 130 C 305 72, 250 30, 165 28 C 85 26, 25 62, 18 122 C 14 158, 45 182, 100 176 C 130 172, 155 150, 185 150 C 225 150, 290 156, 300 130 Z"
              class="cortex-outline territory-aca-bg" />
        <!-- Occipital Medial PCA Zone Backdrop -->
        <path d="M 108 42 C 58 54, 22 82, 18 122 C 16 158, 45 182, 100 176 L 118 146 L 112 96 Z"
              class="territory-pca-bg" />
        <!-- Corpus Callosum landmark -->
        <path d="M 230 118 C 215 90, 125 90, 108 118 C 118 126, 132 112, 170 110 C 205 110, 218 124, 230 118 Z"
              fill="#0f172a" stroke="#475569" stroke-width="1.5" />
        <!-- Calcarine Sulcus guide -->
        <path d="M 96 134 L 24 122" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4 2" fill="none" />

        <!-- Right Medial Frontal / Emotional Control (ACA) -->
        <path d="M 296 128 C 296 78, 254 42, 194 32 L 186 92 C 212 96, 228 108, 232 124 L 278 138 Z"
              class="${getStructureClass('right_medial_frontal', selectedStructures, feedback)}"
              data-id="right_medial_frontal"
              data-name="Right Medial Frontal Cortex (ACA)"
              data-info="Executive & emotional control, abulia / apathy (Right ACA)" />

        <!-- Right Paracentral Lobule (Foot / Leg Motor & Sensory + Bladder - ACA) -->
        <path d="M 190 32 C 165 28, 134 32, 116 40 L 130 94 C 150 90, 168 90, 184 92 Z"
              class="${getStructureClass('right_paracentral_lobule', selectedStructures, feedback)}"
              data-id="right_paracentral_lobule"
              data-name="Right Paracentral Lobule (Foot/Leg - ACA)"
              data-info="Contralateral (left) foot & leg weakness/sensory loss + urinary incontinence (Right ACA)" />

        <!-- Right Cuneus (Upper Bank of Calcarine Sulcus -> Lower Visual Field - PCA) -->
        <path d="M 100 50 C 56 62, 24 86, 20 120 L 94 132 L 108 96 Z"
              class="${getStructureClass('right_cuneus', selectedStructures, feedback)}"
              data-id="right_cuneus"
              data-name="Right Cuneus (Upper Visual Cortex - PCA)"
              data-info="Upper bank of calcarine sulcus: contralateral LEFT LOWER homonymous quadrantanopia (Right PCA)" />

        <!-- Right Lingual Gyrus (Lower Bank of Calcarine Sulcus -> Upper Visual Field - PCA) -->
        <path d="M 94 136 L 20 124 C 22 156, 46 176, 90 174 L 106 156 Z"
              class="${getStructureClass('right_lingual_gyrus', selectedStructures, feedback)}"
              data-id="right_lingual_gyrus"
              data-name="Right Lingual Gyrus (Lower Visual Cortex - PCA)"
              data-info="Lower bank of calcarine sulcus: contralateral LEFT UPPER homonymous quadrantanopia w/ macular sparing (Right PCA)" />

        <text x="244" y="78" class="text-hint territory-label-sm">Med. Frontal</text>
        <text x="244" y="90" class="text-hint territory-label-xs">(Emotion)</text>
        <text x="154" y="58" class="text-hint territory-label-sm">Paracentral</text>
        <text x="154" y="70" class="text-hint territory-label-xs">Leg/Foot (ACA)</text>
        <text x="62" y="96" class="text-hint territory-label-sm">Cuneus</text>
        <text x="62" y="156" class="text-hint territory-label-sm">Lingual</text>
        <text x="170" y="106" class="text-hint territory-label-xs" style="fill:#64748b;">Corpus Callosum</text>
        <text x="30" y="204" class="text-hint territory-axis">POST</text>
        <text x="292" y="204" class="text-hint territory-axis">ANT</text>
      </g>
    </g>
  </svg>`;
}
