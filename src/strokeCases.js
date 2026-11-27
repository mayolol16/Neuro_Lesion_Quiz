// Stroke Localization Mode — 29 Comprehensive Clinical Cases
// Part A (Cases 101-116): Dr. Chris Cohan's "16 Practice Stroke Cases for Exam 3"
// Part B (Cases 117-129): Dr. David Freedman's Brainstem & Subcortical Stroke Practice Cases

export const STROKE_ARTERIES = [
  { id: "aca", label: "ACA (Anterior Cerebral)" },
  { id: "mca", label: "MCA (Middle Cerebral)" },
  { id: "lenticulostriate", label: "Lenticulostriate (MCA Lacunar)" },
  { id: "pca", label: "PCA (Posterior Cerebral)" },
  { id: "pca_perforators", label: "PCA Perforators (Lacunar)" },
  { id: "basilar_paramedian", label: "Basilar (Paramedian / Pontine)" },
  { id: "basilar_trunk", label: "Basilar Trunk (Bilateral)" },
  { id: "aica", label: "AICA (Ant. Inf. Cerebellar)" },
  { id: "pica", label: "PICA (Post. Inf. Cerebellar)" },
  { id: "asa_vertebral", label: "Anterior Spinal / Vertebral" }
];

export const STROKE_QUICK_REFERENCE = {
  corticalTerritories: [
    {
      artery: "ACA (Anterior Cerebral Artery)",
      color: "#06b6d4",
      regions: "Medial frontal lobe & Paracentral lobule",
      deficits: "Contralateral leg/foot UMN weakness & sensory loss, urinary incontinence, executive/emotional apathy (abulia)."
    },
    {
      artery: "MCA (Middle Cerebral Artery)",
      color: "#818cf8",
      regions: "Lateral hemisphere: M1/S1 (face/arm/hand), Broca, Wernicke, FEF, Posterior Parietal",
      deficits: "Contralateral face & arm weakness/sensory loss. Left: Broca (non-fluent) or Wernicke (fluent) aphasia, Gerstmann. Right: Left hemispatial neglect & anosognosia."
    },
    {
      artery: "PCA (Posterior Cerebral Artery)",
      color: "#f59e0b",
      regions: "Occipital lobe (Cuneus & Lingual gyrus), Midbrain, Thalamus & STN (perforators)",
      deficits: "Contralateral homonymous hemianopia/quadrantanopia with macular sparing (lingual = upper field, cuneus = lower field), midbrain CN III syndromes, thalamic pure sensory stroke."
    },
    {
      artery: "Lacunar Penetrating Vessels",
      color: "#10b981",
      regions: "Posterior Limb of Internal Capsule (Lenticulostriate), Thalamus & STN (PCA perforators)",
      deficits: "Small deep infarcts: pure motor hemiparesis (internal capsule), pure sensory loss / thalamic pain (VPL/VPM), or contralateral hemiballismus (STN)."
    }
  ],
  brainstemTable: [
    { level: "Rostral Midbrain (Medial)", cn: "CN III", ipsi: "Eye down & out, ptosis, dilated pupil", contra: "Body weakness, lower face droop, tongue deviation", artery: "PCA" },
    { level: "Rostral Midbrain (Tegmentum)", cn: "CN III", ipsi: "Eye down & out, ptosis, dilated pupil", contra: "Body touch loss (ML), face sensation (VTT), limb ataxia (SCP)", artery: "PCA" },
    { level: "Mid Pons", cn: "CN V", ipsi: "Jaw deviation (Vm), face touch loss (Vs), Horner's, ataxia (MCP)", contra: "Body pain/temp loss (ALS)", artery: "Basilar (pontine)" },
    { level: "Caudal Pons (Medial)", cn: "CN VI", ipsi: "Eye turned medially (abducens palsy)", contra: "Body weakness, lower face droop, tongue dev., body touch (ML), face pain (VTT)", artery: "Basilar (paramedian)" },
    { level: "Caudal Pons (Lateral)", cn: "CN VII", ipsi: "Whole-face LMN palsy, face pain/temp (Spinal V), Horner's, ataxia (MCP)", contra: "Body pain/temp loss (ALS)", artery: "AICA" },
    { level: "Basilar Trunk (Bilateral)", cn: "CN V–XII", ipsi: "Bilateral paralysis (awake, vertical gaze spared)", contra: "Locked-in syndrome", artery: "Basilar trunk" },
    { level: "Rostral Medulla (Medial)", cn: "CN XII", ipsi: "LMN tongue deviation toward lesion", contra: "Body weakness (CST), body touch/vib (ML), ± face pain (VTT)", artery: "Anterior Spinal / Vertebral" },
    { level: "Rostral Medulla (Lateral)", cn: "CN IX, X", ipsi: "Vertigo/nystagmus, ataxia (ICP), hoarseness/uvula away (NA), face pain/temp, Horner's", contra: "Body pain/temp loss (ALS)", artery: "PICA / Vertebral" }
  ]
};

export const STROKE_CASES = [
  // ==========================================================
  // PART A: EXAM 3 OFFICIAL STROKE PRACTICE CASES (16 Cases)
  // ==========================================================
  {
    id: 101,
    mode: "stroke",
    source: "Exam 3 Stroke - Case 1",
    title: "Sudden Diplopia with Contralateral Hemiplegia",
    category: "Midbrain",
    vignette: "A patient presents in the ED with sudden onset of the following symptoms:\n• Right-sided weakness of upper and lower limbs with hyperactive reflexes, increased muscle tone, and a Babinski sign.\n• Right-sided mouth droop with inability to smile on the right; both eyelids blink and eyebrows raise normally.\n• Tongue deviates to the right.\n• Left eye is turned down and out; left pupil is dilated with no direct or consensual response to light; inability to look up or down.\n• Sensation is intact throughout.",
    findings: [
      { text: "Left Eye: Down & out, dilated pupil, no light reflex (CN III)", type: "deficit" },
      { text: "Right Arm & Leg: UMN weakness, hyperreflexia, Babinski", type: "deficit" },
      { text: "Right Lower Face & Tongue: UMN droop (forehead spared), tongue deviates right", type: "deficit" },
      { text: "Sensation: Completely intact bilaterally", type: "normal" }
    ],
    correctLevel: "midbrain",
    correctLevelDetail: "Left Rostral Midbrain (Medial / Ventral)",
    correctSide: "left",
    correctStructures: ["left_crus_cerebri", "left_oculomotor_nucleus"],
    correctStructureNames: "Left Crus Cerebri (CST/CBT) & Left CN III",
    correctArteries: ["pca"],
    correctArteryLabel: "PCA (Posterior Cerebral Artery — paramedian branches)",
    clinicalSyndrome: "Weber Syndrome (Medial Midbrain Alternating Hemiplegia)",
    whyOptions: [
      "Left CN III fascicles + uncrossed CST/CBT in left crus cerebri cause ipsilateral CN III palsy and right UMN weakness.",
      "Left medial lemniscus and VTT lesion causes ipsilateral oculomotor palsy with contralateral flaccid paralysis.",
      "Right internal capsule lacunar infarct damages descending motor fibers and left oculomotor nerve simultaneously.",
      "Left caudal pontine basilar infarct spares forehead movement while paralyzing left lateral rectus abduction."
    ],
    correctWhyIndex: 0,
    drCohanRule: "CN III deficits localize to the rostral midbrain. Alternating hemiplegia (ipsilateral CN III + contralateral body/lower face/tongue UMN weakness) localizes to the medial ventral midbrain (PCA).",
    drawingInstruction: "Draw the Midbrain ('The Pig from the rear'). On the LEFT side, shade the Crus Cerebri (CST/CBT) and the exiting CN III rootlets/nucleus. Leave ML, VTT, and ALS clear.",
    explanation: "The ipsilateral left CN III palsy (down-and-out eye, mydriasis, absent light reflex) pinpoints the level to the left rostral midbrain. Right-sided UMN weakness of the arm, leg, lower face (forehead spared), and tongue (deviating toward the weak right side) reflects damage to the uncrossed left corticospinal and corticobulbar tracts in the crus cerebri. Supplied by paramedian branches of the PCA."
  },
  {
    id: 102,
    mode: "stroke",
    source: "Exam 3 Stroke - Case 2",
    title: "73 y/o Female with Slurred Speech & Pure Motor Weakness",
    category: "Thalamus",
    vignette: "BA is a 73-year-old female with hypertension, type 2 diabetes, and dyslipidemia who presented to the ED with slurred speech and progressive right-sided weakness over 6 hours.\nNeuro exam:\n• Strength: Right UE 4/5, Right LE 3/5; Left UE 5/5, Left LE 5/5.\n• Reflexes: Right UE 3+, LE 4+ with right Babinski sign; Left 2+.\n• Cranial Nerves: Right lower facial droop, right tongue deviation. Speech is fluent, commands understood, but pronunciation is slurred (dysarthria).\n• Sensation is completely intact to vibration, proprioception, and pinprick.",
    findings: [
      { text: "Right UE & LE: UMN weakness, hyperreflexia, Babinski", type: "deficit" },
      { text: "Right Lower Face & Tongue: UMN facial droop & tongue deviation right (dysarthria)", type: "deficit" },
      { text: "Sensation & Language Comprehension: Completely intact", type: "normal" },
      { text: "Brainstem CNs (III–XII): No crossed cranial nerve palsies", type: "normal" }
    ],
    correctLevel: "thalamus",
    correctLevelDetail: "Left Posterior Limb of Internal Capsule",
    correctSide: "left",
    correctStructures: ["left_internal_capsule_posterior_limb"],
    correctStructureNames: "Left Internal Capsule (Posterior Limb)",
    correctArteries: ["lenticulostriate", "mca"],
    correctArteryLabel: "Lenticulostriate arteries (deep penetrating branches of MCA)",
    clinicalSyndrome: "Pure Motor Lacunar Stroke (Internal Capsule)",
    whyOptions: [
      "Tightly packed CST and corticobulbar fibers in left posterior limb cause pure contralateral motor hemiparesis.",
      "Left cortical MCA occlusion selectively destroys leg, arm, and face motor cortex without any sensory loss.",
      "Left rostral medullary pyramid infarct causes right lower face droop, right tongue deviation, and hemiparesis.",
      "Left thalamic VPL/VPM lacunar infarct interrupts descending motor axons while sparing ascending sensory fibers."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Pure motor UMN hemiparesis affecting face, arm, AND leg equally without sensory or cortical/brainstem CN deficits is the hallmark of a lacunar infarct in the posterior limb of the internal capsule (lenticulostriate branches of MCA).",
    drawingInstruction: "Draw the Diencephalon / Thalamus axial section. Shade the LEFT posterior limb of the internal capsule (anterior motor portion), sparing the thalamus (VPL/VPM) and sensory fibers.",
    explanation: "Because face, arm, and leg motor fibers (corticobulbar + corticospinal) are tightly packed in the posterior limb of the left internal capsule while sensory fibers lie more posteriorly, a small lenticulostriate lacunar infarct produces pure right-sided UMN hemiparesis, lower facial droop, and dysarthria (right tongue UMN weakness) with zero sensory or cranial nerve nucleus deficits."
  },
  {
    id: 103,
    mode: "stroke",
    source: "Exam 3 Stroke - Case 3",
    title: "Sudden Jaw Deviation, Facial Touch Loss & Limb Ataxia",
    category: "Pons",
    vignette: "A patient is brought to the ED with sudden onset of the following symptoms:\n• Jaw deviates to the right on opening.\n• Loss of tactile (light touch) sensation on the right side of the face; pinprick sensation is intact.\n• Inaccuracy and tremor of the right arm on finger-nose-finger and right leg on heel-shin testing; difficulty with rapid alternating movements of the right upper limb.\n• Strength, reflexes, and body sensation are completely intact throughout.",
    findings: [
      { text: "Right Jaw: Deviates to the right (CN V motor)", type: "deficit" },
      { text: "Right Face Touch: Absent (pinprick intact)", type: "deficit" },
      { text: "Right Arm & Leg: Ipsilateral limb ataxia & dysdiadochokinesia", type: "deficit" },
      { text: "Strength & Body Sensation: Normal throughout", type: "normal" }
    ],
    correctLevel: "caudal_mid_pons",
    correctLevelDetail: "Right Mid Pons (Lateral Tegmentum & MCP)",
    correctSide: "right",
    correctStructures: ["right_trigeminal_motor", "right_spinal_v", "right_mcp"],
    correctStructureNames: "Right Trigeminal Motor (Vm), Principal Sensory V & Right MCP",
    validLocations: [
      {
        level: "caudal_mid_pons",
        levelLabel: "Right Mid Pons (Vm + Principal V + MCP)",
        structures: ["right_trigeminal_motor", "right_spinal_v", "right_mcp"],
        structureNames: "Right Motor V, Principal Sensory V & Right MCP",
        note: "Primary answer key: CN V motor + chief sensory nucleus + MCP in mid pons."
      },
      {
        level: "caudal_mid_pons",
        levelLabel: "Right Mid Pons (Principal V + MCP)",
        structures: ["right_spinal_v", "right_mcp"],
        structureNames: "Right Trigeminal Sensory Complex & Right MCP",
        note: "Also accepted if grouping CN V sensory/motor together in lateral mid-pons."
      }
    ],
    correctArteries: ["basilar_paramedian"],
    correctArteryLabel: "Basilar Artery (long circumferential / pontine branches)",
    clinicalSyndrome: "Lateral Mid-Pontine Syndrome (CN V + MCP)",
    whyOptions: [
      "Right mid-pons houses CN V motor, chief sensory nucleus (face touch), and MCP for ipsilateral limb coordination.",
      "Right rostral medulla houses spinal V for facial touch and ICP for ipsilateral jaw deviation and ataxia.",
      "Right midbrain tegmentum houses CN V motor and post-decussation SCP causing ipsilateral limb ataxia.",
      "Right caudal pons houses CN VII motor for jaw deviation and AICA-supplied lateral tegmentum."
    ],
    correctWhyIndex: 0,
    drCohanRule: "CN V (jaw deviation + ipsilateral facial touch loss) is the unique anatomical marker for the MID PONS, supplied by long circumferential branches of the basilar artery.",
    drawingInstruction: "Draw the Mid/Caudal Pons (square tegmentum + curved basilar pons). On the RIGHT lateral border, shade the Trigeminal Motor Nucleus (Vm), Chief Sensory Nucleus of V, and the Right MCP arm.",
    explanation: "Jaw deviation toward the right indicates weakness of the right pterygoids (right CN V motor nucleus). Loss of light touch on the right face with preserved pinprick localizes to the right chief (principal) sensory nucleus of V in the mid pons. Right-sided limb ataxia comes from the adjacent right middle (or superior) cerebellar peduncle. Supplied by long circumferential branches of the basilar artery."
  },
  {
    id: 104,
    mode: "stroke",
    source: "Exam 3 Stroke - Case 4",
    title: "Complete Left Hemisensory Loss Followed by Burning Pain",
    category: "Thalamus",
    vignette: "A 21-year-old woman with a family history of diabetes and hypertension experienced sudden numbness down the entire left side of her body and face.\nNeuro exam:\n• Movements, strength, cognitive function, and cranial nerves are normal.\n• Loss of all sensation (light touch, pinprick, and joint position sense at wrist and ankle) on the entire left face and left body.\n• Over the next month, sensory loss improved, but she developed severe, unpleasant burning pain on her left side worsened by light touch.",
    findings: [
      { text: "Entire Left Body & Face: Loss of touch, pain, temp & proprioception", type: "deficit" },
      { text: "Delayed Sequela: Severe burning allodynia on left side", type: "deficit" },
      { text: "Motor Strength, Cognition & Cranial Nerves: Completely normal", type: "normal" }
    ],
    correctLevel: "thalamus",
    correctLevelDetail: "Right Thalamus (VPL & VPM Nuclei)",
    correctSide: "right",
    correctStructures: ["right_vpl", "right_vpm"],
    correctStructureNames: "Right VPL & Right VPM Nuclei",
    correctArteries: ["pca_perforators", "pca"],
    correctArteryLabel: "PCA Perforating Arteries (Thalamogeniculate lacunar infarct)",
    clinicalSyndrome: "Pure Sensory Thalamic Stroke (Dejerine-Roussy Syndrome)",
    whyOptions: [
      "Right VPL (body) and VPM (face) relay all crossed sensory modalities; lacunar infarct triggers thalamic pain.",
      "Right internal capsule posterior limb infarct blocks all sensory modalities without affecting motor strength.",
      "Right lateral medulla infarct eliminates both touch and pain on the left face and left body simultaneously.",
      "Right postcentral gyrus infarct produces delayed central burning neuropathic pain across entire left hemibody."
    ],
    correctWhyIndex: 0,
    drCohanRule: "All sensory modalities (touch, proprioception, pain, temperature) for the entire contralateral face AND body converge in one tiny location: VPL + VPM of the thalamus (PCA perforators).",
    drawingInstruction: "Draw the Diencephalon / Thalamus axial view. Inside the RIGHT thalamus, shade both VPL (lateral, body) and VPM (medial, face). Leave the internal capsule intact.",
    explanation: "No single brainstem lesion produces pure, complete sensory loss of all modalities on the same contralateral side of both face and body without motor or cranial nerve deficits. Only the contralateral thalamus (right VPL + VPM) relays ML, ALS, and VTT together. Small PCA perforating artery occlusion causes a lacunar infarct and can lead to central post-stroke (Dejerine-Roussy) thalamic pain."
  },
  {
    id: 105,
    mode: "stroke",
    source: "Exam 3 Stroke - Case 5",
    title: "Alternating Tongue Deviation & Contralateral Hemiparesis",
    category: "Medulla",
    vignette: "A patient is brought to the ED with sudden onset of the following symptoms:\n• Weakness of the left upper and lower limbs with increased tone, hyperactive reflexes, and a left Babinski sign.\n• Movement of the right upper and lower limbs is normal.\n• Facial movement is completely normal.\n• Tongue deviates to the right on protrusion.\n• Loss of vibration and proprioception on the left upper and lower limbs; pinprick sensation is intact throughout.",
    findings: [
      { text: "Right Tongue: LMN weakness (deviates to the right)", type: "deficit" },
      { text: "Left Arm & Leg: UMN weakness, hyperreflexia, Babinski", type: "deficit" },
      { text: "Left Body: Loss of vibration & proprioception", type: "deficit" },
      { text: "Face Movement & Pinprick Sensation: Intact throughout", type: "normal" }
    ],
    correctLevel: "rostral_medulla",
    correctLevelDetail: "Right Rostral Medulla (Medial)",
    correctSide: "right",
    correctStructures: ["right_pyramid", "right_medial_lemniscus", "right_hypoglossal_nucleus"],
    correctStructureNames: "Right Pyramid (CST), Right Medial Lemniscus & Right CN XII",
    correctArteries: ["asa_vertebral"],
    correctArteryLabel: "Anterior Spinal Artery (or Vertebral paramedian branch)",
    clinicalSyndrome: "Medial Medullary Syndrome (Dejerine Syndrome)",
    whyOptions: [
      "Right CN XII (ipsilateral tongue) + right pyramid (left UMN) + right ML (left touch/vib) = alternating hemiplegia.",
      "Right corticobulbar fibers in the medulla cause ipsilateral tongue deviation with spared facial strength.",
      "Right PICA occlusion damages the medial medulla, sparing pinprick while destroying the inferior olive.",
      "Left anterior spinal artery occlusion affects decussated pyramids and uncrossed dorsal columns on the left."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Ipsilateral tongue deviation (CN XII LMN) + contralateral body UMN weakness + contralateral vibration/proprioception loss = Medial Medullary Syndrome (Anterior Spinal Artery). Facial movement is normal because CN VII fibers already exited in the pons!",
    drawingInstruction: "Draw the Rostral Medulla (olives, pyramids, 4th ventricle). On the RIGHT medial zone, shade the Pyramid, Medial Lemniscus, and Hypoglossal Nucleus/nerve (CN XII). Leave VTT and lateral structures clear.",
    explanation: "In contrast to supranuclear corticobulbar lesions (where tongue and limb weakness are on the same side), here the tongue deviates right (ipsilateral CN XII LMN) while limb weakness and vibration/proprioception loss are on the left (right pyramid + right medial lemniscus). VTT was spared due to individual vascular variation (vertebral vs anterior spinal)."
  },
  {
    id: 106,
    mode: "stroke",
    source: "Exam 3 Stroke - Case 6",
    title: "80 y/o Woman Ignoring Left Space & Clock Numbers",
    category: "Cortex",
    vignette: "An 80-year-old woman in poor health suddenly started to ignore her left side. She dressed normally on the right, but her left arm was not placed in the left sleeve of her blouse. She did not eat food on the left side of her dinner plate. When asked to draw a clock, she crowded all the numbers onto the right side of the circle and left the left side completely blank.",
    findings: [
      { text: "Left Hemispace: Complete disregard of left body & external space", type: "deficit" },
      { text: "Clock Drawing: All numbers crowded onto right half", type: "deficit" },
      { text: "Awareness: Anosognosia (unaware of her left-sided deficit)", type: "deficit" },
      { text: "Language & Primary Motor: Preserved", type: "normal" }
    ],
    correctLevel: "cortex_territories",
    correctLevelDetail: "Right Posterior Parietal Cortex (MCA Territory)",
    correctSide: "right",
    correctStructures: ["right_parietal_association"],
    correctStructureNames: "Right Posterior Parietal Cortex (Neglect Area)",
    validLocations: [
      {
        level: "cortex_territories",
        levelLabel: "Cortical Territories — Right Posterior Parietal (MCA)",
        structures: ["right_parietal_association"],
        structureNames: "Right Posterior Parietal Cortex (Neglect)",
        note: "Stroke territory view: Right MCA inferior/posterior parietal branch."
      },
      {
        level: "cortex",
        levelLabel: "Cortex Homunculus — Right Posterior Parietal",
        structures: ["right_parietal_association"],
        structureNames: "Right Posterior Parietal Cortex",
        note: "Also valid on the coronal cortex diagram."
      }
    ],
    correctArteries: ["mca"],
    correctArteryLabel: "MCA (Right Middle Cerebral Artery)",
    clinicalSyndrome: "Hemispatial Neglect Syndrome (Right Parietal MCA Stroke)",
    whyOptions: [
      "Right (non-dominant) posterior parietal cortex directs spatial attention to both sides; lesion causes left neglect.",
      "Right occipital lingual gyrus PCA infarct causes a visual field cut that patients cannot compensate for.",
      "Left angular gyrus MCA infarct causes left-sided neglect alongside Gerstmann syndrome and fluent aphasia.",
      "Right anterior cerebral artery infarct impairs medial prefrontal motivation causing left-sided dressing apraxia."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Left hemispatial neglect + anosognosia (crowding clock numbers onto the right) localizes to the RIGHT posterior parietal association cortex, supplied by the MCA.",
    drawingInstruction: "On the Right Hemisphere Lateral Cortex view (MCA territory), highlight the Right Posterior Parietal Association Cortex.",
    explanation: "The right parietal lobe attends to both right and left hemispace, whereas the left parietal lobe attends mainly to right hemispace. Therefore, a right MCA infarct in the posterior parietal lobe leaves left hemispace unattended, producing profound left neglect and anosognosia."
  },
  {
    id: 107,
    mode: "stroke",
    source: "Exam 3 Stroke - Case 7",
    title: "Whole-Face Paralysis, Facial Pain Loss & Ipsilateral Ataxia",
    category: "Pons",
    vignette: "A patient is brought to the ED with sudden onset of the following symptoms:\n• Complete paralysis of the left face, including inability to move the mouth, blink the left eyelid, or raise the left brow.\n• Loss of pinprick sensation on the left side of the face; tactile sensation on the face is intact.\n• Inaccuracy and tremor of the left arm on finger-nose-finger and left leg on heel-shin testing; difficulty with rapid alternating movements of the left upper limb.\n• Strength, reflexes, and body sensation are completely intact.",
    findings: [
      { text: "Entire Left Face: LMN paralysis (forehead + eyelid + mouth)", type: "deficit" },
      { text: "Left Face Pinprick: Absent (facial touch intact)", type: "deficit" },
      { text: "Left Limbs: Ipsilateral ataxia & dysdiadochokinesia", type: "deficit" },
      { text: "Strength & Body Sensation: Normal throughout", type: "normal" }
    ],
    correctLevel: "caudal_mid_pons",
    correctLevelDetail: "Left Caudal Pons (Lateral Tegmentum & MCP)",
    correctSide: "left",
    correctStructures: ["left_facial_nucleus", "left_spinal_v", "left_mcp"],
    correctStructureNames: "Left CN VII Nucleus, Left Spinal V & Left MCP",
    correctArteries: ["aica"],
    correctArteryLabel: "AICA (Anterior Inferior Cerebellar Artery)",
    clinicalSyndrome: "Lateral Caudal Pontine Syndrome (AICA Stroke)",
    whyOptions: [
      "Left caudal lateral pons contains CN VII (whole face), spinal V (ipsilateral face pain), and MCP (ipsilateral ataxia).",
      "Left lateral medulla PICA infarct causes whole-face paralysis, ipsilateral facial pain loss, and ICP ataxia.",
      "Left basilar paramedian infarct damages corticobulbar fibers causing Bell's palsy and contralateral ataxia.",
      "Left mid-pons infarct destroys CN V motor and chief sensory nucleus causing whole-face paralysis."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Sudden Bell's-palsy-like LMN facial paralysis (whole face including forehead) + ipsilateral face pain loss + ipsilateral ataxia = Lateral Caudal Pons (AICA).",
    drawingInstruction: "Draw the Caudal Pons (square tegmentum + basilar pons + MCP arms). On the LEFT lateral side, shade CN VII nucleus/nerve, Spinal Trigeminal Tract (STT), and the Left MCP.",
    explanation: "Involvement of the entire left face (including forehead and eye closure) indicates an LMN lesion of left CN VII in the caudal pons. Adjacent left spinal trigeminal tract damage causes ipsilateral facial pinprick loss (while facial touch via chief sensory V above is spared), and left MCP damage produces ipsilateral limb ataxia. Supplied by AICA."
  },
  {
    id: 108,
    mode: "stroke",
    source: "Exam 3 Stroke - Case 8",
    title: "46 y/o Squash Player with Left Upper Quadrantanopia",
    category: "Cortex",
    vignette: "A 46-year-old man was playing squash when he suddenly noticed a deterioration in his vision. Neurological exam revealed completely normal motor strength, reflexes, language, and somatosensory function.\nVisual field testing of both eyes revealed a **left upper homonymous quadrantanopia with macular sparing**.",
    findings: [
      { text: "Visual Fields: Left upper homonymous quadrantanopia (OU)", type: "deficit" },
      { text: "Central Vision: Macular sparing preserved", type: "normal" },
      { text: "Motor, Sensory & Language: Completely normal", type: "normal" }
    ],
    correctLevel: "cortex_territories",
    correctLevelDetail: "Right Lingual Gyrus (Lower Bank of Calcarine Sulcus — PCA)",
    correctSide: "right",
    correctStructures: ["right_lingual_gyrus"],
    correctStructureNames: "Right Lingual Gyrus (Lower Visual Cortex)",
    validLocations: [
      {
        level: "cortex_territories",
        levelLabel: "Cortical Territories — Right Lingual Gyrus (Medial PCA)",
        structures: ["right_lingual_gyrus"],
        structureNames: "Right Lingual Gyrus (Lower Bank of Calcarine Sulcus)",
        note: "Primary answer: Right lingual gyrus (inferior to calcarine sulcus) maps the contralateral left upper visual field."
      },
      {
        level: "cortex_territories",
        levelLabel: "Cortical Territories — Right Visual Cortex (Lateral Pole)",
        structures: ["right_visual_cortex"],
        structureNames: "Right Occipital / Visual Cortex",
        note: "General visual cortex territory (though specifically the medial lingual gyrus explains upper quadrantanopia)."
      }
    ],
    correctArteries: ["pca"],
    correctArteryLabel: "PCA (Right Posterior Cerebral Artery)",
    clinicalSyndrome: "PCA Occipital Infarct (Inferior Calcarine / Lingual Gyrus)",
    whyOptions: [
      "Right lingual gyrus (below calcarine sulcus) processes left upper visual field; PCA occlusion spares MCA-fed macula.",
      "Right cuneus (above calcarine sulcus) processes left upper visual field and receives blood from the MCA.",
      "Left lingual gyrus PCA infarct causes contralateral left upper quadrantanopia with macular splitting.",
      "Right parietal optic radiations (Baum's loop) cause left upper quadrantanopia with macular sparing."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Visual cortex is inverted: Lingual gyrus (LOWER bank of calcarine sulcus) = contralateral UPPER visual quadrant; Cuneus (UPPER bank) = contralateral LOWER quadrant. PCA occlusion causes macular sparing via MCA collateral flow.",
    drawingInstruction: "On the Right Hemisphere Medial Cortex view (PCA territory), highlight the Right Lingual Gyrus located immediately inferior to the calcarine sulcus.",
    explanation: "The left visual field projects to the right occipital cortex, and the upper visual field projects to the inferior bank of the calcarine sulcus (the lingual gyrus). Macular sparing is classic for PCA cortical strokes because the occipital pole receives dual collateral supply from the MCA."
  },
  {
    id: 109,
    mode: "stroke",
    source: "Exam 3 Stroke - Case 9",
    title: "76 y/o Female with Atrial Fibrillation, Diplopia & Intention Tremor",
    category: "Midbrain",
    vignette: "A 76-year-old female with atrial fibrillation stopped taking her Coumadin for one month. This morning she developed sudden diplopia and shaking of her left extremities when reaching for objects.\nExam:\n• Right eye deviated down and out; right pupil 8 mm (left 3 mm) with no direct or consensual light reflex in right eye.\n• Loss of tactile sensation on the left body, and loss of tactile and pinprick sensation on the left face. Body pinprick is intact.\n• Strength 5/5 and reflexes 2+ bilaterally.\n• Intention tremor, overshoot, and dysmetria on finger-nose-finger AND heel-shin testing of the left arm and leg.",
    findings: [
      { text: "Right Eye: Down & out, 8 mm dilated pupil, absent light reflex (CN III)", type: "deficit" },
      { text: "Left Body Touch & Left Face All Sensation: Absent (body pain intact)", type: "deficit" },
      { text: "Left Arm & Leg: Intention tremor & ataxia (both UE and LE)", type: "deficit" },
      { text: "Strength & Reflexes: 5/5, 2+ bilaterally (CST spared)", type: "normal" }
    ],
    correctLevel: "midbrain",
    correctLevelDetail: "Right Rostral Midbrain Tegmentum",
    correctSide: "right",
    correctStructures: ["right_oculomotor_nucleus", "right_medial_lemniscus", "right_vtt", "right_scp"],
    correctStructureNames: "Right CN III, Right Medial Lemniscus, Right VTT & Right SCP",
    validLocations: [
      {
        level: "midbrain",
        levelLabel: "Right Midbrain Tegmentum (CN III + ML + VTT + SCP)",
        structures: ["right_oculomotor_nucleus", "right_medial_lemniscus", "right_vtt", "right_scp"],
        structureNames: "Right CN III, ML, VTT & Right SCP (Dr. Cohan Answer Key)",
        note: "Most accurate: SCP fibers account for BOTH upper & lower limb ataxia (red nucleus only supplies upper limb)."
      },
      {
        level: "midbrain",
        levelLabel: "Right Midbrain Tegmentum (CN III + ML + VTT + Red Nucleus)",
        structures: ["right_oculomotor_nucleus", "right_medial_lemniscus", "right_vtt", "right_red_nucleus"],
        structureNames: "Right CN III, ML, VTT & Right Red Nucleus (Classic Benedikt)",
        note: "Classic textbook Benedikt answer; note Dr. Cohan emphasizes SCP fibers passing through/near red nucleus explain both arm & leg ataxia."
      }
    ],
    correctArteries: ["pca"],
    correctArteryLabel: "PCA (Posterior Cerebral Artery — paramedian/tegmental branches)",
    clinicalSyndrome: "Benedikt Syndrome (Midbrain Tegmental Infarct)",
    whyOptions: [
      "Right CN III + crossed ML, VTT, and post-decussation SCP in right midbrain tegmentum spare the ventral crus cerebri.",
      "Right crus cerebri and red nucleus infarct causes left intention tremor with preserved strength and sensation.",
      "Right rostral pons snowman infarct damages CN III, ML, VTT, and uncrossed SCP causing left limb ataxia.",
      "Left PCA occlusion causes contralateral right CN III palsy and ipsilateral left sensory and cerebellar deficits."
    ],
    correctWhyIndex: 0,
    drCohanRule: "In the rostral midbrain, SCP fibers have ALREADY crossed! So a RIGHT midbrain tegmental lesion (CN III + ML + VTT + SCP) produces right CN III palsy with contralateral LEFT touch/face sensory loss and LEFT arm & leg ataxia.",
    drawingInstruction: "Draw the Midbrain ('The Pig'). On the RIGHT tegmentum, shade CN III, SCP (near red nucleus), Medial Lemniscus, and VTT. Keep the Crus Cerebri and lateral ALS clear.",
    explanation: "Right CN III palsy localizes the stroke to the right rostral midbrain. Left body touch loss = right ML; left face touch & pain loss = right VTT; left arm & leg intention tremor/ataxia = right post-decussation SCP fibers (which carry cerebellar outflow for both upper and lower limbs). Normal 5/5 strength confirms the crus cerebri is spared. Supplied by PCA."
  },
  {
    id: 110,
    mode: "stroke",
    source: "Exam 3 Stroke - Case 10",
    title: "Fluent Nonsensical Speech & Right Sensory Loss",
    category: "Cortex",
    vignette: "Mr. B fell out of bed one morning and had difficulty communicating with his wife. In the ED he spoke in long, fluent, well-articulated sentences that were ungrammatical and filled with made-up words ('We stayed with the water over here and gorp with the people for them over blair'). He was unaware of his speech errors and could not understand why others did not understand him.\nFollow-up testing showed slow reading, inability to write, and reduced tactile sensation on the right side of his body. Motor strength was normal.",
    findings: [
      { text: "Speech: Fluent, well-articulated, nonsensical paraphasias", type: "deficit" },
      { text: "Comprehension & Insight: Impaired; unaware of speech errors", type: "deficit" },
      { text: "Right Body: Reduced tactile sensation (motor normal)", type: "deficit" }
    ],
    correctLevel: "cortex_territories",
    correctLevelDetail: "Left Wernicke's Area (Post. Sup. Temporal Gyrus) & Postcentral Gyrus",
    correctSide: "left",
    correctStructures: ["left_wernicke", "left_postcentral_hand_face"],
    correctStructureNames: "Left Wernicke's Area & Left Lateral Sensory Cortex",
    validLocations: [
      {
        level: "cortex_territories",
        levelLabel: "Left Wernicke's Area + Left Lateral S1 (Full Answer)",
        structures: ["left_wernicke", "left_postcentral_hand_face"],
        structureNames: "Left Wernicke's Area & Left Postcentral Gyrus",
        note: "Matches Exam 3 Answer Key: Posterior superior temporal gyrus (Wernicke) + postcentral gyrus (right tactile loss)."
      },
      {
        level: "cortex_territories",
        levelLabel: "Left Wernicke's Area Alone",
        structures: ["left_wernicke"],
        structureNames: "Left Wernicke's Area (Post. Sup. Temporal Gyrus)",
        note: "Core language localization for fluent Wernicke aphasia (left MCA inferior division)."
      }
    ],
    correctArteries: ["mca"],
    correctArteryLabel: "MCA (Left Middle Cerebral Artery — inferior division)",
    clinicalSyndrome: "Wernicke's (Receptive / Fluent) Aphasia",
    whyOptions: [
      "Left posterior superior temporal gyrus (Wernicke) + adjacent postcentral gyrus (MCA) cause fluent aphasia & right sensory loss.",
      "Left inferior frontal gyrus (Broca) MCA stroke causes fluent word salad with preserved motor strength.",
      "Right superior temporal gyrus MCA stroke causes fluent paraphasias and unawareness of speech deficits.",
      "Left PCA occipital-temporal stroke causes fluent aphasia with preserved comprehension and right sensory loss."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Fluent, nonsensical 'word salad' with poor comprehension and lack of awareness = Wernicke's aphasia (Left posterior superior temporal gyrus, MCA). Nearby structures in an MCA infarct present together (adjacent postcentral gyrus = right tactile loss).",
    drawingInstruction: "On the Left Hemisphere Lateral Cortex view (MCA territory), highlight Left Wernicke's Area (posterior superior temporal gyrus) and the adjacent Left Lateral Postcentral Gyrus.",
    explanation: "Mr. B exhibits classic Wernicke's aphasia (fluent paraphasic speech, poor comprehension, anosognosia for speech errors) from a left MCA inferior division infarct affecting the posterior superior temporal gyrus, extending into the adjacent postcentral gyrus to cause right-sided tactile sensory loss while sparing the precentral motor strip."
  },
  {
    id: 111,
    mode: "stroke",
    source: "Exam 3 Stroke - Case 11",
    title: "Medial Eye Deviation with Contralateral Hemiplegia & Touch Loss",
    category: "Pons",
    vignette: "A patient is brought to the ED with sudden onset of the following symptoms:\n• Weakness of the right upper and lower limbs with increased tone, hyperactive reflexes, and right Babinski sign.\n• Right lower facial droop (inability to smile on right), but both eyelids blink and eyebrows raise normally.\n• Tongue deviates to the right.\n• Left eye is deviated inward and cannot abduct laterally.\n• Loss of vibration and proprioception on the right limbs.\n• Loss of pinprick sensation on the right face (facial touch and body pinprick are intact).",
    findings: [
      { text: "Left Eye: Deviated medially, cannot abduct (CN VI)", type: "deficit" },
      { text: "Right Arm, Leg, Lower Face & Tongue: Contralateral UMN weakness", type: "deficit" },
      { text: "Right Limbs: Loss of vibration & proprioception (ML)", type: "deficit" },
      { text: "Right Face: Loss of pinprick only (face touch & body pain intact)", type: "deficit" }
    ],
    correctLevel: "caudal_mid_pons",
    correctLevelDetail: "Left Caudal Pons (Medial)",
    correctSide: "left",
    correctStructures: ["left_basilar_pons", "left_abducens_nucleus", "left_medial_lemniscus", "left_vtt"],
    correctStructureNames: "Left Basilar Pons (CST/CBT), Left CN VI, Left ML & Left VTT",
    correctArteries: ["basilar_paramedian"],
    correctArteryLabel: "Basilar Artery (paramedian branches)",
    clinicalSyndrome: "Medial Caudal Pontine Syndrome (Alternating Abducens Hemiplegia)",
    whyOptions: [
      "Left CN VI + basilar pons CST/CBT + ML + caudal VTT (pain only below mid-pons) explain all findings.",
      "Left lateral caudal pons AICA stroke destroys CN VI, spinal V, and corticospinal fibers in basis pontis.",
      "Left rostral midbrain PCA stroke paralyzes left lateral rectus while causing right hemiplegia and touch loss.",
      "Left rostral medulla ASA stroke damages CN VI, pyramid, and medial lemniscus while sparing facial movement."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Ipsilateral CN VI palsy (eye turned medially) + contralateral hemiplegia/lower face/tongue = Medial Caudal Pons (Basilar paramedian branches). Below mid-pons, VTT carries only crossed facial PAIN/TEMP!",
    drawingInstruction: "Draw the Caudal Pons. On the LEFT medial zone, shade the Basilar Pons (CST/CBT), CN VI nucleus/nerve, Medial Lemniscus (slanting), and VTT ('head on top').",
    explanation: "Inability to abduct the left eye (CN VI) localizes to the left caudal pons. Right UMN limb weakness, lower face droop (forehead spared), and right tongue deviation reflect left basilar pons CST/CBT involvement. Right limb touch/proprioception loss = left ML; right face pinprick loss (with facial touch intact) = left VTT below the mid-pontine level."
  },
  {
    id: 112,
    mode: "stroke",
    source: "Exam 3 Stroke - Case 12",
    title: "72 y/o Diabetic with Violent Uncontrollable Left Limb Flailing",
    category: "Thalamus",
    vignette: "A 72-year-old man with poorly controlled type 2 diabetes awakens one morning to find that he cannot control his left arm—it swings around violently as he sits in his chair. His left leg also flails about uncontrollably. His right limbs are normal, and he has no weakness, sensory loss, or cranial nerve deficits.",
    findings: [
      { text: "Left Arm & Leg: Violent, involuntary flinging movements (hemiballismus)", type: "deficit" },
      { text: "Right Limbs, Strength, Sensation & CNs: Completely normal", type: "normal" }
    ],
    correctLevel: "thalamus",
    correctLevelDetail: "Right Subthalamic Nucleus (Diencephalon)",
    correctSide: "right",
    correctStructures: ["right_subthalamic_nucleus"],
    correctStructureNames: "Right Subthalamic Nucleus (STN)",
    correctArteries: ["pca_perforators", "pca"],
    correctArteryLabel: "PCA Perforating Branches (or Anterior Choroidal Artery — lacunar infarct)",
    clinicalSyndrome: "Contralateral Hemiballismus (Subthalamic Nucleus Lacunar Stroke)",
    whyOptions: [
      "Right subthalamic nucleus lacunar infarct disinhibits the indirect basal ganglia pathway, causing left hemiballismus.",
      "Right red nucleus midbrain infarct causes violent proximal flailing of the contralateral left arm and leg.",
      "Left subthalamic nucleus infarct causes ipsilateral left hemiballismus via uncrossed thalamocortical loops.",
      "Right substantia nigra infarct causes violent hyperkinetic ballistic movements of the contralateral limbs."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Sudden violent flinging of contralateral limbs (hemiballismus) is pathognomonic for a small lacunar infarct in the contralateral Subthalamic Nucleus (STN) in the diencephalon, supplied by narrow perforating branches of the PCA (or anterior choroidal artery).",
    drawingInstruction: "Draw the Diencephalon / Thalamus section. Shade the RIGHT Subthalamic Nucleus (STN) just ventral to the thalamus, leaving VPL/VPM and internal capsule clear.",
    explanation: "The subthalamic nucleus excites the GPi/SNr to inhibit unwanted movement. A lacunar stroke in the right STN removes this brake on the right motor thalamus, unleashing violent involuntary flinging (hemiballismus) of the contralateral left arm and leg."
  },
  {
    id: 113,
    mode: "stroke",
    source: "Exam 3 Stroke - Case 13",
    title: "75 y/o Female Quadriplegic Communicating Only by Vertical Gaze",
    category: "Pons",
    vignette: "A 75-year-old woman with a 20-year history of hypertension and type 2 diabetes collapsed in her apartment. In the ED:\n• Bilateral paralysis of upper and lower limbs with increased muscle tone, hyperactive reflexes, and bilateral Babinski signs.\n• Bilateral paralysis of the entire face, tongue, and jaw; completely unable to speak.\n• Inability to move either eye laterally.\n• Up-and-down vertical eye movements and blinking are preserved; she answers yes/no questions accurately using vertical gaze.",
    findings: [
      { text: "All 4 Limbs: Bilateral UMN quadriplegia & Babinski signs", type: "deficit" },
      { text: "CN V, VI, VII, IX–XII: Bilateral facial, jaw, tongue & lateral gaze paralysis", type: "deficit" },
      { text: "Consciousness & Vertical Gaze: Fully awake; up/down gaze & blinking spared", type: "normal" }
    ],
    correctLevel: "caudal_mid_pons",
    correctLevelDetail: "Bilateral Anterior (Basilar) Pons",
    correctSide: "bilateral",
    correctStructures: ["right_basilar_pons", "left_basilar_pons"],
    correctStructureNames: "Bilateral Basilar Pons (CST & Corticobulbar Tracts)",
    validLocations: [
      {
        level: "caudal_mid_pons",
        levelLabel: "Caudal / Mid Pons — Bilateral Basilar Pons",
        structures: ["right_basilar_pons", "left_basilar_pons"],
        structureNames: "Right & Left Basilar Pons",
        note: "Primary level: basilar artery trunk supplies both halves of the ventral pons (CN V, VI, VII + CST/CBT)."
      },
      {
        level: "rostral_pons",
        levelLabel: "Rostral Pons ('The Snowman') — Bilateral Basilar Pons",
        structures: ["right_basilar_pons", "left_basilar_pons"],
        structureNames: "Right & Left Basilar Pons (Corticospinal/Corticobulbar)",
        note: "Also valid on the Rostral Pons diagram (bottom oval = basilar pons; dorsal tegmentum/reticular formation spared)."
      }
    ],
    correctArteries: ["basilar_trunk"],
    correctArteryLabel: "Basilar Artery Main Trunk (Bilateral Pontine Infarct)",
    clinicalSyndrome: "Locked-In Syndrome",
    whyOptions: [
      "Basilar trunk occlusion destroys bilateral ventral pons (CST/CBT) while sparing dorsal reticular formation & midbrain vertical gaze.",
      "Bilateral MCA occlusion destroys both motor cortices while sparing the brainstem vertical gaze centers.",
      "Anterior spinal artery occlusion causes bilateral quadriplegia and loss of horizontal eye movements.",
      "Bilateral midbrain crus cerebri occlusion spares CN V–VII while paralyzing vertical eye movements."
    ],
    correctWhyIndex: 0,
    drCohanRule: "One single artery (the Basilar Trunk) supplies BOTH sides of the anterior pons! Occlusion destroys bilateral CST/CBT (quadriplegia + CN V–XII paralysis) while sparing the dorsal reticular formation (awake) and midbrain CN III/IV vertical gaze.",
    drawingInstruction: "Draw the Pons cross-section and shade BOTH the left and right ventral Basilar Pons completely, leaving the dorsal tegmentum (reticular formation) unshaded.",
    explanation: "Locked-in syndrome results from basilar artery trunk occlusion causing a bilateral ventral pontine infarct. Corticospinal and corticobulbar tracts to CN V–XII are severed bilaterally, but consciousness (dorsal tegmental RAS) and vertical gaze/blinking (midbrain CN III/IV above the lesion) remain completely intact."
  },
  {
    id: 114,
    mode: "stroke",
    source: "Exam 3 Stroke - Case 14",
    title: "78 y/o Man with Right Leg Spasticity, Sensory Loss & Incontinence",
    category: "Cortex",
    vignette: "A 78-year-old man suddenly developed tingling and weakness isolated to his right leg. Exam demonstrated increased tone with spasticity, hyperreflexia, and weakness in the right foot, distal shin, and calf, accompanied by loss of all sensory modalities in the same region and new urinary incontinence. Motor and sensory function was completely normal in his face, arms, and left leg.",
    findings: [
      { text: "Right Foot & Leg: UMN spastic weakness & hyperreflexia", type: "deficit" },
      { text: "Right Foot & Leg: Sensory loss of all modalities", type: "deficit" },
      { text: "Bladder: New-onset urinary incontinence", type: "deficit" },
      { text: "Face, Arms & Left Side: Completely normal", type: "normal" }
    ],
    correctLevel: "cortex_territories",
    correctLevelDetail: "Left Paracentral Lobule (Medial Hemisphere — ACA)",
    correctSide: "left",
    correctStructures: ["left_paracentral_lobule"],
    correctStructureNames: "Left Paracentral Lobule (Foot/Leg & Micturition)",
    validLocations: [
      {
        level: "cortex_territories",
        levelLabel: "Cortical Territories — Left Paracentral Lobule (Medial ACA)",
        structures: ["left_paracentral_lobule"],
        structureNames: "Left Paracentral Lobule (ACA Territory)",
        note: "Stroke territory view: Medial hemisphere ACA supply to leg/foot motor+sensory and bladder control."
      },
      {
        level: "cortex",
        levelLabel: "Cortex Homunculus — Left Paracentral Lobule",
        structures: ["left_paracentral_lobule"],
        structureNames: "Left Paracentral Lobule (Foot/Leg)",
        note: "Also valid on the coronal homunculus diagram."
      }
    ],
    correctArteries: ["aca"],
    correctArteryLabel: "ACA (Left Anterior Cerebral Artery)",
    clinicalSyndrome: "Anterior Cerebral Artery (ACA) Stroke — Paracentral Lobule",
    whyOptions: [
      "Left medial paracentral lobule (ACA) contains both motor and sensory leg/foot areas plus cortical bladder control.",
      "Left MCA superior division infarct selectively affects the leg homunculus and causes urinary incontinence.",
      "Right thoracic spinal cord hemisection causes isolated right leg weakness, all-modality sensory loss, and incontinence.",
      "Left posterior limb of internal capsule lacunar infarct selectively weakens only the right foot without arm/face signs."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Contralateral leg/foot UMN weakness + leg/foot sensory loss + urinary incontinence with normal face & arm = Paracentral Lobule on the medial hemisphere (ACA).",
    drawingInstruction: "On the Left Hemisphere Medial Cortex view (ACA territory), highlight the Left Paracentral Lobule along the superior medial wall.",
    explanation: "The paracentral lobule is the medial continuation of the precentral and postcentral gyri, representing the contralateral leg, foot, and pelvic floor/bladder control. It is supplied exclusively by the Anterior Cerebral Artery (ACA)."
  },
  {
    id: 115,
    mode: "stroke",
    source: "Exam 3 Stroke - Case 15",
    title: "Hoarseness, Uvula Deviation, Crossed Pain Loss & Horner's (No Ataxia)",
    category: "Medulla",
    vignette: "A patient with poorly controlled type 2 diabetes presents to the ED with:\n• Difficulty swallowing (dysphagia) and a hoarse voice.\n• Loss of gag reflex on the right side; uvula deviates to the left with right palatal droop.\n• Loss of pinprick sensation on the right face and on the left body.\n• Right pupil is constricted with right eyelid droop (Horner's syndrome).\n• Limb strength is normal bilaterally, and finger-nose-finger and heel-shin tests are completely normal.",
    findings: [
      { text: "CN IX/X: Hoarseness, dysphagia, absent right gag, uvula deviates left", type: "deficit" },
      { text: "Crossed Pain Loss: Right face (ipsi) & Left body (contra)", type: "deficit" },
      { text: "Right Eye: Miosis & ptosis (right Horner's syndrome)", type: "deficit" },
      { text: "Strength & Coordination (FNF/HS): Normal (pyramid & ICP spared)", type: "normal" }
    ],
    correctLevel: "rostral_medulla",
    correctLevelDetail: "Right Rostral Medulla (Lateral — ICP Spared)",
    correctSide: "right",
    correctStructures: ["right_nucleus_ambiguus", "right_spinal_v", "right_als", "right_sympathetic"],
    correctStructureNames: "Right Nucleus Ambiguus, Right Spinal V, Right ALS & Right Sympathetic",
    correctArteries: ["pica", "asa_vertebral"],
    correctArteryLabel: "PICA (or Vertebral Artery lateral branch)",
    clinicalSyndrome: "Lateral Medullary (Wallenberg) Variant — ICP Spared",
    whyOptions: [
      "Right nucleus ambiguus, spinal V, ALS, and hypothalamospinal fibers are hit; smaller PICA/vertebral branch spares ICP.",
      "Right lateral caudal pons AICA infarct spares cerebellar peduncles while paralyzing right palatal elevation.",
      "Left PICA infarct causes left uvula deviation, left body pain loss, and right facial pinprick loss.",
      "Right medial medulla ASA infarct causes dysphagia, hoarseness, and Horner's syndrome with spared strength."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Nucleus ambiguus (CN IX/X: hoarseness, dysphagia, uvula deviates AWAY) + crossed pain/temp (ipsi face, contra body) + Horner's = Lateral Rostral Medulla (PICA / Vertebral). Normal FNF/HS simply means this smaller branch spared the ICP!",
    drawingInstruction: "Draw the Rostral Medulla. On the RIGHT lateral tegmentum, shade Nucleus Ambiguus, Spinal V, ALS, and Hypothalamospinal (Sympathetic) fibers. Leave the dorsal ICP and medial pyramid clear.",
    explanation: "Hoarseness, dysphagia, and left uvular deviation pinpoint right nucleus ambiguus (CN IX/X) in the right rostral medulla. Right spinal V = ipsilateral face pain loss; right ALS = contralateral left body pain loss; right descending sympathetic fibers = right Horner's. Normal coordination reflects sparing of the ICP."
  },
  {
    id: 116,
    mode: "stroke",
    source: "Exam 3 Stroke - Case 16",
    title: "80 y/o Cyclist with Non-Fluent Hesitant Speech & Intact Comprehension",
    category: "Cortex",
    vignette: "An 80-year-old woman was riding a bicycle when she suddenly felt unwell and could not find words to express her thoughts. On exam, she was alert but looked anxious and frustrated. She spoke hesitantly and non-fluently, unable to form sentences, frequently saying only 'Don't know.' However, she was able to follow basic commands from the physician. No limb weakness or sensory deficits were observed.",
    findings: [
      { text: "Speech Output: Hesitant, non-fluent, severe word-finding difficulty", type: "deficit" },
      { text: "Insight: Alert and visibly frustrated (aware of deficit)", type: "deficit" },
      { text: "Comprehension: Able to follow basic commands", type: "normal" },
      { text: "Motor & Sensation: No other deficits observed", type: "normal" }
    ],
    correctLevel: "cortex_territories",
    correctLevelDetail: "Left Broca's Area (Inferior Frontal Gyrus — MCA)",
    correctSide: "left",
    correctStructures: ["left_broca"],
    correctStructureNames: "Left Broca's Area (Inferior Frontal Gyrus)",
    correctArteries: ["mca"],
    correctArteryLabel: "MCA (Left Middle Cerebral Artery — superior division)",
    clinicalSyndrome: "Broca's (Expressive / Non-Fluent) Aphasia",
    whyOptions: [
      "Left inferior frontal gyrus (Broca's area, MCA) impairs speech production while sparing comprehension & insight.",
      "Left posterior superior temporal gyrus (Wernicke's area, MCA) causes non-fluent frustrated speech.",
      "Left anterior cerebral artery infarct in medial prefrontal cortex causes isolated expressive Broca aphasia.",
      "Right inferior frontal gyrus MCA infarct causes non-fluent expressive aphasia in a right-handed patient."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Non-fluent, hesitant speech + frustration (preserved insight) + intact command comprehension = Broca's area in the Left Inferior Frontal Gyrus (Left MCA superior division).",
    drawingInstruction: "On the Left Hemisphere Lateral Cortex view (MCA territory), highlight Left Broca's Area in the inferior frontal gyrus (anterior to the lower motor strip).",
    explanation: "Broca's area in the dominant (left) inferior frontal gyrus programs speech articulation and grammar. An isolated branch occlusion of the left MCA superior division produces non-fluent expressive aphasia with intact comprehension and acute patient frustration."
  },

  // ==========================================================
  // PART B: DR. FREEDMAN BRAINSTEM & SUBCORTICAL STROKE CASES (13 Cases)
  // ==========================================================
  {
    id: 117,
    mode: "stroke",
    source: "Brainstem Stroke - Case 1",
    title: "70 y/o Diabetic with Right CN III Palsy & Left Hemiplegia",
    category: "Midbrain",
    vignette: "A 70-year-old woman with poorly controlled diabetes wakes up with double vision. Exam shows:\n• Right eye deviated down and out, with a dilated pupil and drooping right eyelid.\n• Left arm and leg weakness with increased tone and a left Babinski sign.\n• Left lower face droop, with the forehead spared.\n• Tongue deviates to the left when protruded.",
    findings: [
      { text: "Right Eye: Down & out, ptosis, dilated pupil (CN III)", type: "deficit" },
      { text: "Left Arm & Leg: UMN weakness, increased tone, Babinski", type: "deficit" },
      { text: "Left Lower Face & Tongue: UMN droop (forehead spared), tongue deviates left", type: "deficit" }
    ],
    correctLevel: "midbrain",
    correctLevelDetail: "Right Rostral Midbrain (Medial / Crus Cerebri)",
    correctSide: "right",
    correctStructures: ["right_crus_cerebri", "right_oculomotor_nucleus"],
    correctStructureNames: "Right Crus Cerebri (CST/CBT) & Right CN III",
    correctArteries: ["pca"],
    correctArteryLabel: "PCA (Posterior Cerebral Artery — paramedian branches)",
    clinicalSyndrome: "Right Weber Syndrome (Medial Midbrain)",
    whyOptions: [
      "Right CN III + uncrossed CST/CBT in right crus cerebri produce ipsilateral CN III palsy & left UMN hemiplegia.",
      "Left crus cerebri infarct damages right CN III via crossed fibers and causes left UMN weakness.",
      "Right basilar pons infarct causes right CN III palsy, left facial droop, and left hemiplegia.",
      "Right posterior limb internal capsule infarct causes left hemiplegia and right dilated pupil."
    ],
    correctWhyIndex: 0,
    drCohanRule: "CN III = Midbrain. Ipsilateral CN III + contralateral body, lower face, and tongue UMN weakness = Alternating hemiplegia of the medial midbrain (PCA).",
    drawingInstruction: "Draw the Midbrain ('The Pig'). Shade the RIGHT Crus Cerebri and RIGHT CN III rootlets/nucleus.",
    explanation: "Right CN III palsy (down-and-out, ptosis, mydriasis) localizes to the right rostral midbrain. Left arm/leg UMN weakness, left lower face droop (forehead spared), and left tongue deviation (away from lesion) reflect right crus cerebri CST/CBT involvement. Supplied by PCA."
  },
  {
    id: 118,
    mode: "stroke",
    source: "Brainstem Stroke - Case 2",
    title: "58 y/o Man with Left CN III Palsy, Right Sensory Loss & Ataxia",
    category: "Midbrain",
    vignette: "A 58-year-old man has sudden onset of double vision and numbness. Exam shows:\n• Left eye turned down and out, with ptosis.\n• Loss of light touch, vibration, and proprioception on the right side of his body.\n• Loss of touch and pain/temperature on the right side of his face.\n• Right-sided limb ataxia (past-pointing and dysmetria).\n• Strength is completely normal.",
    findings: [
      { text: "Left Eye: Down & out with ptosis (CN III)", type: "deficit" },
      { text: "Right Body: Loss of touch, vibration & proprioception (ML)", type: "deficit" },
      { text: "Right Face: Loss of touch & pain/temp (VTT)", type: "deficit" },
      { text: "Right Limbs: Past-pointing & dysmetria (SCP) — Strength normal", type: "deficit" }
    ],
    correctLevel: "midbrain",
    correctLevelDetail: "Left Rostral Midbrain Tegmentum",
    correctSide: "left",
    correctStructures: ["left_oculomotor_nucleus", "left_medial_lemniscus", "left_vtt", "left_scp"],
    correctStructureNames: "Left CN III, Left Medial Lemniscus, Left VTT & Left SCP",
    validLocations: [
      {
        level: "midbrain",
        levelLabel: "Left Midbrain Tegmentum (CN III + ML + VTT + SCP)",
        structures: ["left_oculomotor_nucleus", "left_medial_lemniscus", "left_vtt", "left_scp"],
        structureNames: "Left CN III, ML, VTT & Left SCP",
        note: "Primary tegmental localization: post-decussation SCP explains contralateral right limb ataxia."
      },
      {
        level: "midbrain",
        levelLabel: "Left Midbrain Tegmentum (CN III + ML + VTT + Red Nucleus)",
        structures: ["left_oculomotor_nucleus", "left_medial_lemniscus", "left_vtt", "left_red_nucleus"],
        structureNames: "Left CN III, ML, VTT & Left Red Nucleus",
        note: "Also accepted for Benedikt tegmental syndrome."
      },
      {
        level: "midbrain",
        levelLabel: "Left Midbrain Tegmentum (CN III + ML + VTT + SCP + Red Nucleus)",
        structures: ["left_oculomotor_nucleus", "left_medial_lemniscus", "left_vtt", "left_scp", "left_red_nucleus"],
        structureNames: "Left CN III, ML, VTT, SCP & Red Nucleus",
        note: "Also accepted when selecting both the Red Nucleus and SCP."
      }
    ],
    correctArteries: ["pca"],
    correctArteryLabel: "PCA (Posterior Cerebral Artery)",
    clinicalSyndrome: "Left Midbrain Tegmental Syndrome (Benedikt)",
    whyOptions: [
      "Left midbrain tegmentum hits ipsilateral CN III plus already-crossed ML, VTT, and SCP while sparing CST.",
      "Left crus cerebri and ALS infarct spares strength while causing right body touch loss and ataxia.",
      "Left caudal pons infarct causes left CN III palsy and right-sided limb ataxia with normal strength.",
      "Right midbrain tegmentum infarct causes left CN III palsy and ipsilateral right limb dysmetria."
    ],
    correctWhyIndex: 0,
    drCohanRule: "At the rostral midbrain, ML, VTT, and SCP have ALL crossed—so all sensory and ataxia signs appear CONTRALATERAL to the lesion while CN III stays IPSILATERAL (PCA).",
    drawingInstruction: "Draw the Midbrain. On the LEFT tegmentum, shade CN III, SCP, Medial Lemniscus, and VTT. Keep Crus Cerebri clear.",
    explanation: "Left CN III palsy localizes to the left rostral midbrain. Because ML, VTT, and SCP have already decussated below this level, left tegmental damage causes right body touch/proprioception loss, right face all-modality sensory loss, and right limb ataxia, while sparing the ventral crus cerebri (normal strength). Supplied by PCA."
  },
  {
    id: 119,
    mode: "stroke",
    source: "Brainstem Stroke - Case 3",
    title: "66 y/o Man with Right CN III Palsy, Left Ataxia & Arm Stiffness",
    category: "Midbrain",
    vignette: "A 66-year-old man presents with sudden double vision and clumsiness. Exam shows:\n• Right eye down and out with ptosis and a dilated pupil.\n• Left limb ataxia on finger-to-nose and heel-to-shin testing.\n• Mild slowness (bradykinesia) and stiffness of the left arm.\n• Strength and sensation are normal; face is symmetric and tongue is midline.",
    findings: [
      { text: "Right Eye: Down & out, ptosis, dilated pupil (CN III)", type: "deficit" },
      { text: "Left Limbs: Ataxia on FNF & heel-shin (SCP / Red Nucleus)", type: "deficit" },
      { text: "Left Arm: Mild slowness & stiffness (Substantia Nigra)", type: "deficit" },
      { text: "Strength, Sensation, Face & Tongue: Completely normal", type: "normal" }
    ],
    correctLevel: "midbrain",
    correctLevelDetail: "Right Rostral Midbrain (CN III, SCP & Substantia Nigra)",
    correctSide: "right",
    correctStructures: ["right_oculomotor_nucleus", "right_scp", "right_substantia_nigra"],
    correctStructureNames: "Right CN III, Right SCP & Right Substantia Nigra",
    validLocations: [
      {
        level: "midbrain",
        levelLabel: "Right Midbrain (CN III + SCP + Substantia Nigra)",
        structures: ["right_oculomotor_nucleus", "right_scp", "right_substantia_nigra"],
        structureNames: "Right CN III, Right SCP & Right Substantia Nigra",
        note: "Matches lecture answer key: CN III + post-decussation SCP (ataxia) + Substantia Nigra (bradykinesia/rigidity)."
      },
      {
        level: "midbrain",
        levelLabel: "Right Midbrain (CN III + Red Nucleus + Substantia Nigra)",
        structures: ["right_oculomotor_nucleus", "right_red_nucleus", "right_substantia_nigra"],
        structureNames: "Right CN III, Right Red Nucleus & Right Substantia Nigra",
        note: "Also valid if selecting Red Nucleus for the cerebellar/ataxia component."
      },
      {
        level: "midbrain",
        levelLabel: "Right Midbrain (CN III + SCP + Red Nucleus + Substantia Nigra)",
        structures: ["right_oculomotor_nucleus", "right_scp", "right_red_nucleus", "right_substantia_nigra"],
        structureNames: "Right CN III, Right SCP, Red Nucleus & Substantia Nigra",
        note: "Also valid when selecting both SCP and Red Nucleus."
      }
    ],
    correctArteries: ["pca"],
    correctArteryLabel: "PCA (Posterior Cerebral Artery)",
    clinicalSyndrome: "Right Rostral Midbrain (Claude + Substantia Nigra Variant)",
    whyOptions: [
      "Right CN III + post-decussation SCP + substantia nigra explain right eye palsy, left ataxia, and left parkinsonism.",
      "Right crus cerebri infarct causes left arm stiffness and ataxia while sparing sensation and face symmetry.",
      "Right subthalamic nucleus infarct causes right CN III palsy and left arm bradykinesia.",
      "Left PCA infarct causes contralateral right CN III palsy and ipsilateral left limb ataxia."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Midbrain lesions can involve the Substantia Nigra just dorsal to the crus cerebri, producing contralateral parkinsonian slowness/stiffness alongside CN III palsy and SCP ataxia (PCA).",
    drawingInstruction: "Draw the Midbrain. On the RIGHT side, shade CN III, SCP (near red nucleus), and the Substantia Nigra band just dorsal to the crus cerebri. Leave sensory ribbon and crus cerebri clear.",
    explanation: "Right CN III palsy pinpoints the right rostral midbrain. Left limb ataxia comes from post-decussation right SCP fibers, and mild left arm bradykinesia/rigidity reflects right substantia nigra involvement. Normal strength, sensation, face, and tongue distinguish this from Weber and Benedikt syndromes."
  },
  {
    id: 120,
    mode: "stroke",
    source: "Brainstem Stroke - Case 4",
    title: "64 y/o Man with Left Jaw Deviation, Horner's, Ataxia & Right Body Pain Loss",
    category: "Pons",
    vignette: "A 64-year-old man has sudden onset of difficulty chewing and unsteadiness. Exam shows:\n• On jaw opening, his jaw deviates to the left.\n• Loss of light touch on the left side of his face.\n• Loss of pain and temperature on the right side of his body.\n• Left ptosis and a small left pupil.\n• Left limb ataxia.\n• Strength is normal and eye movements are full.",
    findings: [
      { text: "Left Jaw & Face Touch: Jaw deviates left (Vm); left face touch absent (Vs)", type: "deficit" },
      { text: "Right Body: Loss of pain & temperature (ALS)", type: "deficit" },
      { text: "Left Eye & Limbs: Left Horner's (ptosis/miosis) & left limb ataxia (MCP)", type: "deficit" },
      { text: "Strength & Eye Movements: Normal", type: "normal" }
    ],
    correctLevel: "caudal_mid_pons",
    correctLevelDetail: "Left Mid Pons (Lateral Tegmentum & MCP)",
    correctSide: "left",
    correctStructures: ["left_trigeminal_motor", "left_spinal_v", "left_als", "left_sympathetic", "left_mcp"],
    correctStructureNames: "Left Vm, Principal V, Left ALS, Left Sympathetic & Left MCP",
    correctArteries: ["basilar_paramedian"],
    correctArteryLabel: "Basilar Artery (pontine / long circumferential branches)",
    clinicalSyndrome: "Left Lateral Mid-Pontine Syndrome (with Ataxia)",
    whyOptions: [
      "Left mid-pons lateral tegmentum hits Vm, Vs, ALS, descending sympathetics, and MCP while sparing CN VI/VII.",
      "Left lateral medulla PICA infarct causes jaw deviation, face touch loss, Horner's, and right body pain loss.",
      "Left AICA caudal pons infarct causes jaw deviation and facial touch loss while sparing facial movement.",
      "Left midbrain PCA infarct damages CN V, ALS, and SCP causing left limb ataxia and left Horner's."
    ],
    correctWhyIndex: 0,
    drCohanRule: "CN V (jaw deviation + facial touch loss) is the marker for MID PONS. Add lateral tegmental neighbors: ALS (contralateral body pain/temp), descending sympathetics (ipsilateral Horner's), and MCP (ipsilateral ataxia). Artery: Basilar.",
    drawingInstruction: "Draw the Mid Pons. On the LEFT lateral tegmentum, shade Trigeminal Motor (Vm), Principal Sensory V, ALS, Sympathetic fibers, and MCP.",
    explanation: "CN V deficits (left jaw deviation + left face light touch loss) localize to the left mid pons. Neighboring lateral structures explain the remaining deficits: left ALS (right body pain/temp loss), left descending sympathetics (left Horner's), and left MCP (left limb ataxia). Supplied by basilar pontine branches."
  },
  {
    id: 121,
    mode: "stroke",
    source: "Brainstem Stroke - Case 5",
    title: "59 y/o Woman with Right Jaw Deviation, Face Touch Loss & Horner's (No Ataxia)",
    category: "Pons",
    vignette: "A 59-year-old woman has sudden onset of facial numbness and trouble chewing. Exam shows:\n• Her jaw deviates to the right on opening.\n• Loss of light touch on the right side of her face.\n• Loss of pain and temperature on the left side of her body.\n• Right ptosis, miosis, and decreased sweating on the right side of her face.\n• Coordination, strength, and eye movements are all completely normal.",
    findings: [
      { text: "Right Jaw & Face Touch: Jaw deviates right (Vm); right face touch absent (Vs)", type: "deficit" },
      { text: "Left Body: Loss of pain & temperature (ALS)", type: "deficit" },
      { text: "Right Face/Eye: Ptosis, miosis, anhidrosis (Right Horner's)", type: "deficit" },
      { text: "Coordination, Strength & Eye Movements: Normal (MCP spared)", type: "normal" }
    ],
    correctLevel: "caudal_mid_pons",
    correctLevelDetail: "Right Mid Pons (Lateral Tegmentum — MCP Spared)",
    correctSide: "right",
    correctStructures: ["right_trigeminal_motor", "right_spinal_v", "right_als", "right_sympathetic"],
    correctStructureNames: "Right Vm, Principal V, Right ALS & Right Sympathetic",
    correctArteries: ["basilar_paramedian"],
    correctArteryLabel: "Basilar Artery (pontine branches)",
    clinicalSyndrome: "Right Lateral Mid-Pontine Syndrome (Small Infarct, No Ataxia)",
    whyOptions: [
      "Smaller right mid-pontine lesion involves Vm, Vs, ALS, and sympathetics while sparing the lateral MCP.",
      "Right lateral medullary infarct causes jaw deviation, facial touch loss, and Horner's without ataxia.",
      "Right caudal pons AICA infarct selectively damages jaw muscles and sympathetics without facial palsy.",
      "Right midbrain infarct hits CN V and ALS while sparing CN III and cerebellar peduncles."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Same mid-pontine CN V + ALS + Horner's pattern, but normal coordination tells you the lesion is smaller and spares the cerebellar peduncles (Basilar pontine branches).",
    drawingInstruction: "Draw the Mid Pons. On the RIGHT lateral tegmentum, shade Vm, Principal V, ALS, and Sympathetic fibers. Leave the MCP arm unshaded.",
    explanation: "Right jaw deviation (Vm) and right facial touch loss (Vs) localize to the right mid pons, alongside right ALS (left body pain/temp loss) and right descending sympathetics (Horner's). Normal coordination confirms the cerebellar peduncles were spared."
  },
  {
    id: 122,
    mode: "stroke",
    source: "Brainstem Stroke - Case 6",
    title: "61 y/o Hypertensive Man with Left Esotropia & Right Hemiplegia",
    category: "Pons",
    vignette: "A 61-year-old man with long-standing hypertension has sudden onset of horizontal double vision. Exam shows:\n• Left eye is turned medially and cannot abduct.\n• Right arm and leg weakness with a right Babinski sign.\n• Right lower face droop with the forehead spared.\n• Tongue deviates to the right.\n• Loss of light touch on the right side of his body, and loss of pain/temperature on the right side of his face.",
    findings: [
      { text: "Left Eye: Turned medially, cannot abduct (CN VI)", type: "deficit" },
      { text: "Right Limbs, Lower Face & Tongue: UMN weakness (forehead spared)", type: "deficit" },
      { text: "Right Body Touch & Right Face Pain/Temp: Absent (ML & VTT)", type: "deficit" }
    ],
    correctLevel: "caudal_mid_pons",
    correctLevelDetail: "Left Caudal Pons (Medial)",
    correctSide: "left",
    correctStructures: ["left_basilar_pons", "left_abducens_nucleus", "left_medial_lemniscus", "left_vtt"],
    correctStructureNames: "Left Basilar Pons, Left CN VI, Left ML & Left VTT",
    correctArteries: ["basilar_paramedian"],
    correctArteryLabel: "Basilar Artery (paramedian branches)",
    clinicalSyndrome: "Left Medial Caudal Pontine Syndrome",
    whyOptions: [
      "Left medial caudal pons hits CN VI (ipsilateral esotropia) + CST/CBT, ML, and VTT (all contralateral).",
      "Left AICA stroke hits lateral caudal pons causing esotropia and UMN lower facial droop.",
      "Left midbrain PCA stroke causes inability to abduct the left eye and right-sided hemiplegia.",
      "Left medial medulla ASA stroke causes left esotropia, right hemiplegia, and right touch loss."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Alternating hemiplegia at the caudal pontine level uses CN VI (ipsilateral medial eye deviation) as the level marker; forehead sparing confirms UMN corticobulbar facial weakness (Basilar paramedian).",
    drawingInstruction: "Draw the Caudal Pons. On the LEFT medial region, shade Basilar Pons, CN VI, Medial Lemniscus, and VTT.",
    explanation: "Left CN VI palsy localizes to the left caudal pons. Right limb weakness, right lower face droop (forehead spared), and right tongue deviation reflect left CST/CBT in basis pontis. Right body touch loss = left ML; right face pain/temp loss = left VTT. Supplied by basilar paramedian branches."
  },
  {
    id: 123,
    mode: "stroke",
    source: "Brainstem Stroke - Case 7",
    title: "62 y/o Man with Vertigo, Frozen Left Face, Horner's & Crossed Pain Loss",
    category: "Pons",
    vignette: "A 62-year-old man with hypertension and atrial fibrillation suddenly develops vertigo and nausea while eating dinner. His wife notices the left side of his face looks 'frozen.' Exam shows:\n• The entire left face is drooped; he cannot wrinkle his left forehead or close his left eye.\n• Loss of pain and temperature on the left face and on the right body.\n• Small left pupil and drooping left upper eyelid.\n• Left limb ataxia.\n• Strength is intact in all limbs and the tongue is midline.",
    findings: [
      { text: "Entire Left Face: LMN palsy including forehead & eye closure (CN VII)", type: "deficit" },
      { text: "Crossed Pain/Temp: Left face (Spinal V) & Right body (ALS)", type: "deficit" },
      { text: "Left Eye & Limbs: Left Horner's, vertigo, & left limb ataxia (MCP)", type: "deficit" },
      { text: "Strength & Tongue: Normal, midline (CST & CN XII spared)", type: "normal" }
    ],
    correctLevel: "caudal_mid_pons",
    correctLevelDetail: "Left Caudal Pons (Lateral — AICA Territory)",
    correctSide: "left",
    correctStructures: ["left_facial_nucleus", "left_spinal_v", "left_als", "left_sympathetic", "left_mcp"],
    correctStructureNames: "Left CN VII, Left Spinal V, Left ALS, Left Sympathetic & Left MCP",
    correctArteries: ["aica"],
    correctArteryLabel: "AICA (Anterior Inferior Cerebellar Artery)",
    clinicalSyndrome: "Lateral Caudal Pontine Syndrome (AICA / Marie-Foix)",
    whyOptions: [
      "Left lateral caudal pons (AICA) damages CN VII (whole face), spinal V, ALS, sympathetics, and MCP.",
      "Left lateral medulla (PICA) causes whole-face LMN paralysis alongside crossed pain loss and ataxia.",
      "Left basilar paramedian stroke causes whole-face paralysis, vertigo, and spared limb strength.",
      "Left mid-pons stroke causes whole-face paralysis and ipsilateral face pain loss with normal jaw strength."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Whole-face LMN palsy (Bell's palsy pattern) + crossed pain/temp (ipsi face, contra body) + Horner's + ataxia = Lateral Caudal Pons (AICA). That CN VII finding is what separates AICA (pons) from PICA (medulla)!",
    drawingInstruction: "Draw the Caudal Pons. On the LEFT lateral tegmentum, shade CN VII, Spinal V, ALS, Sympathetic fibers, and MCP.",
    explanation: "Complete left facial paralysis (forehead included) indicates an LMN CN VII lesion in the left caudal pons. Adjacent lateral structures produce left face pain/temp loss (spinal V), right body pain/temp loss (ALS), left Horner's (sympathetics), vertigo (vestibular), and left ataxia (MCP). Supplied by AICA."
  },
  {
    id: 124,
    mode: "stroke",
    source: "Brainstem Stroke - Case 8",
    title: "55 y/o Woman with Right Whole-Face Palsy, Crossed Pain Loss & Horner's",
    category: "Pons",
    vignette: "A 55-year-old woman has sudden onset of right facial weakness and numbness. Exam shows:\n• The entire right face is drooped, including the forehead.\n• Loss of pain and temperature on the right side of her face.\n• Loss of pain and temperature on the left side of her body.\n• Right ptosis and miosis.\n• Coordination and strength are completely normal; tongue is midline.",
    findings: [
      { text: "Entire Right Face: LMN paralysis including forehead (CN VII)", type: "deficit" },
      { text: "Crossed Pain/Temp: Right face (Spinal V) & Left body (ALS)", type: "deficit" },
      { text: "Right Eye: Ptosis & miosis (Right Horner's)", type: "deficit" },
      { text: "Coordination, Strength & Tongue: Normal (MCP & CST spared)", type: "normal" }
    ],
    correctLevel: "caudal_mid_pons",
    correctLevelDetail: "Right Caudal Pons (Lateral — MCP Spared)",
    correctSide: "right",
    correctStructures: ["right_facial_nucleus", "right_spinal_v", "right_als", "right_sympathetic"],
    correctStructureNames: "Right CN VII, Right Spinal V, Right ALS & Right Sympathetic",
    correctArteries: ["aica"],
    correctArteryLabel: "AICA (Anterior Inferior Cerebellar Artery)",
    clinicalSyndrome: "Right Lateral Caudal Pontine Syndrome (No Ataxia)",
    whyOptions: [
      "Smaller right AICA infarct hits CN VII, spinal V, ALS, and sympathetics while sparing the MCP.",
      "Right PICA medullary infarct causes right whole-face paralysis and crossed pain loss without ataxia.",
      "Right internal capsule lacunar infarct causes right whole-face droop and left body pain loss.",
      "Right basilar paramedian infarct causes right whole-face palsy while sparing strength and tongue."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Same lateral caudal pons (AICA) signature (CN VII whole-face + crossed pain/temp + Horner's), but normal coordination means the cerebellar peduncles were spared.",
    drawingInstruction: "Draw the Caudal Pons. On the RIGHT lateral tegmentum, shade CN VII, Spinal V, ALS, and Sympathetic fibers. Leave MCP unshaded.",
    explanation: "Right whole-face LMN palsy (CN VII), right face pain/temp loss (spinal V), left body pain/temp loss (ALS), and right Horner's (descending sympathetics) localize to the right lateral caudal pons (AICA), sparing the MCP."
  },
  {
    id: 125,
    mode: "stroke",
    source: "Brainstem Stroke - Case 9",
    title: "68 y/o Man Awake & Alert with Only Vertical Eye Movements",
    category: "Pons",
    vignette: "A 68-year-old man with atrial fibrillation is found unresponsive-appearing after a sudden collapse. Over the next hours it becomes clear that:\n• He is awake and alert and follows commands with his eyes.\n• He has no voluntary movement of his arms or legs.\n• He cannot speak, swallow, or move his face or jaw.\n• His only voluntary movements are blinking and moving his eyes up and down.",
    findings: [
      { text: "Limbs & Bulbar: Complete quadriplegia; no speech, swallowing, face or jaw movement", type: "deficit" },
      { text: "Consciousness & Vertical Gaze: Fully awake; blinking & vertical eye movements intact", type: "normal" }
    ],
    correctLevel: "caudal_mid_pons",
    correctLevelDetail: "Bilateral Anterior (Basilar) Pons",
    correctSide: "bilateral",
    correctStructures: ["right_basilar_pons", "left_basilar_pons"],
    correctStructureNames: "Bilateral Basilar Pons (CST & Corticobulbar Tracts)",
    validLocations: [
      {
        level: "caudal_mid_pons",
        levelLabel: "Caudal / Mid Pons — Bilateral Basilar Pons",
        structures: ["right_basilar_pons", "left_basilar_pons"],
        structureNames: "Right & Left Basilar Pons",
        note: "Bilateral basilar artery trunk occlusion destroys ventral CST & CBT."
      },
      {
        level: "rostral_pons",
        levelLabel: "Rostral Pons ('The Snowman') — Bilateral Basilar Pons",
        structures: ["right_basilar_pons", "left_basilar_pons"],
        structureNames: "Right & Left Basilar Pons (Corticospinal/Corticobulbar)",
        note: "Also valid on the Rostral Pons view."
      }
    ],
    correctArteries: ["basilar_trunk"],
    correctArteryLabel: "Basilar Artery Trunk (Bilateral Occlusion)",
    clinicalSyndrome: "Locked-In Syndrome",
    whyOptions: [
      "Basilar trunk occlusion wipes out bilateral ventral CST/CBT while sparing dorsal RAS (awake) & midbrain vertical gaze.",
      "Bilateral vertebral artery occlusion destroys the medulla while sparing blinking and vertical eye movements.",
      "Bilateral PCA occlusion destroys midbrain tectum while preserving consciousness and vertical eye movements.",
      "Bilateral internal capsule lacunar infarcts destroy all brainstem cranial nerves while sparing consciousness."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Locked-in syndrome = Basilar trunk occlusion affecting the bilateral anterior pons. Consciousness (dorsal reticular formation) and vertical gaze/blinking (midbrain CN III/IV) are spared!",
    drawingInstruction: "Draw the Pons cross-section and shade BOTH left and right ventral Basilar Pons, leaving the dorsal tegmentum intact.",
    explanation: "Occlusion of the basilar artery trunk infarcts the bilateral ventral pons, interrupting all corticospinal and corticobulbar fibers to CN V–XII. Because the dorsal pontine tegmentum (reticular activating system) and midbrain vertical gaze centers are spared, the patient is fully conscious and communicates via vertical gaze and blinking."
  },
  {
    id: 126,
    mode: "stroke",
    source: "Brainstem Stroke - Case 10",
    title: "63 y/o Woman with Left Tongue Deviation, Right Hemiplegia & Touch Loss",
    category: "Medulla",
    vignette: "A 63-year-old woman develops sudden left-sided tongue weakness and right-sided body weakness. Exam shows:\n• Tongue deviates to the left when protruded, with LMN signs on the left.\n• Right arm and leg weakness with a right Babinski sign.\n• Loss of light touch, vibration, and proprioception on the right side of her body.\n• Loss of pain sensation on the right side of her face.\n• No facial droop, no vertigo, and no Horner's syndrome.",
    findings: [
      { text: "Left Tongue: LMN weakness (deviates toward left lesion — CN XII)", type: "deficit" },
      { text: "Right Arm & Leg: UMN weakness & Babinski (Pyramid)", type: "deficit" },
      { text: "Right Body Touch/Vib & Right Face Pain: Absent (ML & VTT)", type: "deficit" },
      { text: "Face Movement, Vertigo & Horner's: Completely absent", type: "normal" }
    ],
    correctLevel: "rostral_medulla",
    correctLevelDetail: "Left Rostral Medulla (Medial)",
    correctSide: "left",
    correctStructures: ["left_pyramid", "left_medial_lemniscus", "left_hypoglossal_nucleus", "left_vtt"],
    correctStructureNames: "Left Pyramid, Left ML, Left CN XII & Left VTT",
    validLocations: [
      {
        level: "rostral_medulla",
        levelLabel: "Left Medial Medulla (Pyramid + ML + CN XII + VTT)",
        structures: ["left_pyramid", "left_medial_lemniscus", "left_hypoglossal_nucleus", "left_vtt"],
        structureNames: "Left Pyramid, Left ML, Left CN XII & Left VTT",
        note: "Full lecture answer: includes VTT ('Hi neighbor!' dorsal to ML) for contralateral right face pain loss."
      },
      {
        level: "rostral_medulla",
        levelLabel: "Left Medial Medulla (Classic Triad: Pyramid + ML + CN XII)",
        structures: ["left_pyramid", "left_medial_lemniscus", "left_hypoglossal_nucleus"],
        structureNames: "Left Pyramid, Left ML & Left CN XII",
        note: "Classic Dejerine triad (though note this patient also has right face pain loss from left VTT)."
      }
    ],
    correctArteries: ["asa_vertebral"],
    correctArteryLabel: "Anterior Spinal Artery / Vertebral Artery (paramedian branches)",
    clinicalSyndrome: "Left Medial Medullary Syndrome (Dejerine)",
    whyOptions: [
      "Left CN XII + left pyramid + left ML + dorsal-neighbor VTT explain alternating tongue/body weakness & right sensory loss.",
      "Left PICA lateral medullary stroke causes ipsilateral tongue deviation and contralateral body weakness.",
      "Left basilar paramedian stroke causes left tongue deviation without any facial weakness or eye signs.",
      "Right anterior spinal artery stroke causes left tongue deviation and right arm/leg Babinski sign."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Alternating hemiplegia at the medulla uses CN XII (ipsilateral tongue deviation) as the marker, with NO facial droop (CN VII fibers already exited in the pons!). Supplied by Anterior Spinal / Vertebral arteries.",
    drawingInstruction: "Draw the Rostral Medulla. On the LEFT medial column, shade Pyramid, Medial Lemniscus, VTT (dorsal to ML), and CN XII nucleus/nerve.",
    explanation: "Left LMN tongue deviation (CN XII) localizes to the left rostral medulla. Right limb UMN weakness = left pyramid; right body touch/proprioception loss = left ML; right face pain loss = left VTT. No facial droop confirms the lesion is below the pons."
  },
  {
    id: 127,
    mode: "stroke",
    source: "Brainstem Stroke - Case 11",
    title: "57 y/o Man with Vertigo, Hoarseness, Left Ataxia & Crossed Pain Loss",
    category: "Medulla",
    vignette: "A 57-year-old man with hypertension has sudden onset of vertigo, vomiting, and hoarseness while mowing the lawn. Exam shows:\n• Nystagmus, falling toward the left, and truncal + left limb ataxia.\n• Hoarse voice and dysphagia; on saying 'ahh,' the uvula deviates to the right.\n• Loss of pain and temperature on the right body and on the left face.\n• Small left pupil with left ptosis (Horner's syndrome).\n• Strength is completely normal.",
    findings: [
      { text: "Vestibular & Cerebellar: Vertigo, vomiting, nystagmus, left limb ataxia (ICP)", type: "deficit" },
      { text: "CN IX/X: Hoarseness, dysphagia, uvula deviates right (Left Nuc. Ambiguus)", type: "deficit" },
      { text: "Crossed Pain/Temp & Horner's: Left face (Spinal V), Right body (ALS), Left Horner's", type: "deficit" },
      { text: "Strength: Completely normal (Medial pyramid spared)", type: "normal" }
    ],
    correctLevel: "rostral_medulla",
    correctLevelDetail: "Left Rostral Medulla (Lateral — PICA)",
    correctSide: "left",
    correctStructures: ["left_icp", "left_vestibular_nuclei", "left_nucleus_ambiguus", "left_spinal_v", "left_als", "left_sympathetic"],
    correctStructureNames: "Left ICP, Vestibular, Nuc. Ambiguus, Spinal V, ALS & Sympathetic",
    validLocations: [
      {
        level: "rostral_medulla",
        levelLabel: "Left Lateral Medulla (All 6 Lateral Structures)",
        structures: ["left_icp", "left_vestibular_nuclei", "left_nucleus_ambiguus", "left_spinal_v", "left_als", "left_sympathetic"],
        structureNames: "Left ICP, Vestibular, Nuc. Ambiguus, Spinal V, ALS & Sympathetic",
        note: "Complete Wallenberg syndrome (every structure in the left lateral rostral medulla)."
      },
      {
        level: "rostral_medulla",
        levelLabel: "Left Lateral Medulla (Core 4: ICP + Nuc Amb + Spinal V + ALS)",
        structures: ["left_icp", "left_nucleus_ambiguus", "left_spinal_v", "left_als"],
        structureNames: "Left ICP, Nucleus Ambiguus, Spinal V & ALS",
        note: "Core lateral medullary quartet (plus vestibular & sympathetic fibers)."
      },
      {
        level: "rostral_medulla",
        levelLabel: "Left Lateral Medulla (5-Struct: ICP + Nuc Amb + Spinal V + ALS + Symp)",
        structures: ["left_icp", "left_nucleus_ambiguus", "left_spinal_v", "left_als", "left_sympathetic"],
        structureNames: "Left ICP, Nucleus Ambiguus, Spinal V, ALS & Sympathetic",
        note: "Also accepted when selecting the 5 classic Wallenberg structures without Vestibular."
      },
      {
        level: "rostral_medulla",
        levelLabel: "Left Lateral Medulla (5-Struct: ICP + Vestib + Nuc Amb + Spinal V + ALS)",
        structures: ["left_icp", "left_vestibular_nuclei", "left_nucleus_ambiguus", "left_spinal_v", "left_als"],
        structureNames: "Left ICP, Vestibular, Nucleus Ambiguus, Spinal V & ALS",
        note: "Also accepted when selecting the 5 lateral structures without Sympathetic."
      }
    ],
    correctArteries: ["pica"],
    correctArteryLabel: "PICA (Posterior Inferior Cerebellar Artery)",
    clinicalSyndrome: "Left Lateral Medullary Syndrome (Wallenberg Syndrome)",
    whyOptions: [
      "Left PICA occlusion hits vestibular nuclei, ICP, nucleus ambiguus, spinal V, ALS, and sympathetics while sparing CST.",
      "Left AICA occlusion causes hoarseness, uvula deviation to the right, and spared facial motor strength.",
      "Left anterior spinal artery occlusion causes vertigo, ataxia, and crossed pain/temp loss.",
      "Right PICA occlusion causes right uvula deviation, right body pain loss, and left limb ataxia."
    ],
    correctWhyIndex: 0,
    drCohanRule: "The complete Wallenberg syndrome (PICA): vertigo/nystagmus (vestibular), ipsilateral ataxia (ICP), dysphagia/hoarseness/uvula away (nucleus ambiguus), ipsilateral face pain (spinal V), contralateral body pain (ALS), and ipsilateral Horner's—with NORMAL strength!",
    drawingInstruction: "Draw the Rostral Medulla. Shade the entire LEFT lateral wedge: ICP, Vestibular nuclei, Nucleus Ambiguus, Spinal V, ALS, and Sympathetic fibers. Leave Pyramid and ML clear.",
    explanation: "Classic left lateral medullary (Wallenberg) syndrome from PICA occlusion. Every single deficit maps to adjacent structures in the left lateral rostral medulla, while the medial pyramid (CST) and medial lemniscus are completely spared."
  },
  {
    id: 128,
    mode: "stroke",
    source: "Brainstem Stroke - Case 12",
    title: "72 y/o Man with Sudden Pure Right Motor Hemiparesis",
    category: "Thalamus",
    vignette: "A 72-year-old man has sudden onset of weakness:\n• Right arm, leg, and lower face weakness with hyperreflexia and a right Babinski sign.\n• No sensory loss anywhere.\n• No cranial nerve palsies other than the lower face, no ataxia, and no cognitive or visual deficits.",
    findings: [
      { text: "Right Arm, Leg & Lower Face: Pure UMN weakness, hyperreflexia, Babinski", type: "deficit" },
      { text: "Sensation, Brainstem CNs, Ataxia & Cognition: Completely normal", type: "normal" }
    ],
    correctLevel: "thalamus",
    correctLevelDetail: "Left Posterior Limb of Internal Capsule (Lacunar Infarct)",
    correctSide: "left",
    correctStructures: ["left_internal_capsule_posterior_limb"],
    correctStructureNames: "Left Internal Capsule (Posterior Limb)",
    correctArteries: ["lenticulostriate", "mca"],
    correctArteryLabel: "Lenticulostriate Arteries (penetrating branches of MCA)",
    clinicalSyndrome: "Pure Motor Lacunar Stroke (Not Brainstem!)",
    whyOptions: [
      "Left posterior limb internal capsule packs face, arm, and leg motor fibers together without sensory or brainstem CN signs.",
      "Left rostral midbrain Weber infarct produces pure right hemiparesis with zero oculomotor signs.",
      "Left MCA cortical infarct equally paralyzes face, arm, and leg without any aphasia or sensory loss.",
      "Left medial medullary infarct produces right arm, leg, and lower face droop with normal tongue movement."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Why NOT the brainstem? No crossed cranial nerve palsy, no ataxia, no sensory loss—and face + arm + leg are equally weak. That's a classic pure motor lacunar infarct in the Posterior Limb of the Internal Capsule (Lenticulostriate).",
    drawingInstruction: "Draw the Diencephalon / Thalamus axial view and shade the LEFT Posterior Limb of the Internal Capsule.",
    explanation: "A lacunar infarct of the lenticulostriate arteries damages tightly bundled descending motor fibers (corticobulbar + corticospinal) in the left posterior limb of the internal capsule, sparing more posterior sensory fibers and avoiding any brainstem cranial nerve nuclei."
  },
  {
    id: 129,
    mode: "stroke",
    source: "Brainstem Stroke - Case 13",
    title: "69 y/o Woman with Pure Left Face & Body Hemisensory Loss",
    category: "Thalamus",
    vignette: "A 69-year-old woman has sudden onset of numbness:\n• Loss of light touch, pain, and temperature on the entire left side of her face and body.\n• Strength is completely normal.\n• No cranial nerve palsies, no ataxia, and no cognitive or visual deficits.",
    findings: [
      { text: "Entire Left Face & Body: Loss of light touch, pain & temperature", type: "deficit" },
      { text: "Strength, Cranial Nerves, Ataxia & Cognition: Completely normal", type: "normal" }
    ],
    correctLevel: "thalamus",
    correctLevelDetail: "Right Thalamus (VPL & VPM Nuclei — Lacunar Infarct)",
    correctSide: "right",
    correctStructures: ["right_vpl", "right_vpm"],
    correctStructureNames: "Right VPL & Right VPM Nuclei",
    correctArteries: ["pca_perforators", "pca"],
    correctArteryLabel: "PCA Perforating Arteries (Lacunar Infarct)",
    clinicalSyndrome: "Pure Sensory Lacunar Stroke (Thalamus — Not Brainstem!)",
    whyOptions: [
      "Right thalamic VPL (body) and VPM (face) relay all crossed sensory modalities without motor or brainstem CN deficits.",
      "Right lateral medulla infarct eliminates both touch and pain on the left face and left body simultaneously.",
      "Right internal capsule posterior limb lacunar infarct causes pure sensory loss with spared motor strength.",
      "Right paracentral lobule ACA stroke causes complete loss of sensation on the left face and body."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Why NOT the brainstem? A brainstem lesion wouldn't knock out BOTH touch and pain/temp on the SAME contralateral side for both face and body with zero motor or CN signs. Only the Thalamus (VPL + VPM, PCA perforators) does that!",
    drawingInstruction: "Draw the Diencephalon / Thalamus axial view and shade both RIGHT VPL and RIGHT VPM nuclei.",
    explanation: "All ascending sensory tracts (ML, ALS, VTT) synapse in the contralateral thalamus (VPL for body, VPM for face). A lacunar infarct from long, narrow PCA penetrating branches produces a pure hemisensory stroke on the opposite face and body."
  }
];
