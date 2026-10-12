// 40 Comprehensive Clinical Neuroanatomy Cases
// Cases 1-6 from Ex1-Cases.pdf
// Cases 7-12 from exam 1 cases continued.docx
// Cases 13-40: Board-style high-yield cases matching Dr. Cohan's cross-sectional levels

export const CLINICAL_CASES = [
  // ==========================================
  // EXAM 1 OFFICIAL CASES (Ex1-Cases.pdf)
  // ==========================================
  {
    id: 1,
    source: "Exam 1 Cases - Case 1",
    title: "Barista with Bilateral Hand & Forearm Burns",
    category: "Spinal Cord",
    vignette: "A 30-year-old woman who runs a cappuccino bar presents because she has repeatedly burned her fingers on the steam pressurizer when making coffee. She states that she never notices the pain and only realizes she hurt herself hours later. Neurological exam reveals:\n1. Touch sensation is normal over entire right and left body and face.\n2. Position sense is normal in upper and lower limbs.\n3. Vibratory sense is normal on bony prominences of arms and legs bilaterally.\n4. Pinprick sensation is normal on both sides of the face.\n5. Pinprick sensation is ABSENT on all fingers of both right and left hands and forearms.\n6. Pinprick sensation is normal on the arms and rest of the body and face.",
    findings: [
      { text: "Touch & Vibration: Normal throughout body & face", type: "normal" },
      { text: "Proprioception: Normal in upper & lower limbs", type: "normal" },
      { text: "Pinprick on Face: Normal bilaterally", type: "normal" },
      { text: "Pinprick on Hands & Forearms: ABSENT bilaterally (C6-C8)", type: "deficit" },
      { text: "Pinprick on Lower Body/Legs: Normal bilaterally", type: "normal" }
    ],
    correctLevel: "spinal_cord",
    correctLevelDetail: "Cervical Spinal Cord (C6-C8)",
    correctSide: "bilateral",
    correctStructures: ["ventral_white_commissure"],
    correctStructureNames: "Ventral White Commissure of Spinal Cord (C6-C8)",
    clinicalSyndrome: "Syringomyelia",
    whyOptions: [
      "Second-order spinothalamic axons decussate across the ventral white commissure at their segment of entry; a central expanding syrinx interrupts these crossing fibers bilaterally while sparing ascending tracts in the periphery.",
      "The dorsal column fibers cross at the cervical cord level, causing bilateral loss of discriminative pain and temperature.",
      "Primary nociceptors enter through Lissauer's tract and cross immediately into the contralateral dorsal funiculus.",
      "A lesion of the lateral corticospinal tract prevents motor reflex response to painful steam burns."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Recognize bilateral loss of pain and temperature producing a 'suspended' sensory loss as the hallmark of SYRINGOMYELIA. A central canal lesion interrupts crossing fibers in the ventral white commissure.",
    drawingInstruction: "Draw the Spinal Cord oval (Slide 2). Draw the central gray butterfly and central canal. Shade the VENTRAL WHITE COMMISSURE (just ventral to the central canal) spanning both sides of the midline at C6-C8.",
    explanation: "Second-order spinothalamic neurons have their cell bodies in the dorsal horn. Their axons decussate obliquely across the ventral white commissure (anterior white commissure) within 1-2 segments of entry to reach the contralateral ALS. A syrinx (central cavitation) expanding from the central canal compresses these decussating fibers bilaterally at C6-C8, producing a 'cape-like' suspended loss of pain/temp. Because ascending ALS fibers from the lower body run more superficially in the lateral funiculus and dorsal columns are intact, touch and lower body sensation are completely spared."
  },
  {
    id: 2,
    source: "Exam 1 Cases - Case 2",
    title: "Sudden Right Body & Face Numbness (Body Pinprick Spared)",
    category: "Pons",
    vignette: "A 70-year-old man woke one morning with numbness on the right side of his body and face. Neurological exam reveals:\n1. Touch, vibratory, and proprioceptive sensation is ABSENT over entire right body; touch and vibration is ABSENT from right face.\n2. Touch, vibratory, and proprioceptive sensation is normal on left body and face.\n3. Pinprick sensation is ABSENT on right face, but normal on left face.\n4. Pinprick sensation is NORMAL on right and left body.",
    findings: [
      { text: "Right Body Touch, Vibration, Proprioception: ABSENT", type: "deficit" },
      { text: "Right Face Touch & Vibration: ABSENT", type: "deficit" },
      { text: "Right Face Pinprick: ABSENT", type: "deficit" },
      { text: "Right & Left Body Pinprick: NORMAL", type: "normal" },
      { text: "Left Body & Face All Sensation: NORMAL", type: "normal" }
    ],
    correctLevel: "rostral_pons",
    correctLevelDetail: "Left Mid/Rostral Pons or Midbrain",
    correctSide: "left",
    correctStructures: ["left_medial_lemniscus", "left_vtt"],
    correctStructureNames: "Left Medial Lemniscus & Left Ventral Trigeminothalamic Tract (VTT)",
    clinicalSyndrome: "Pontine/Midbrain Tegmental Infarct (ML + VTT)",
    whyOptions: [
      "In the rostral pons and midbrain, the VTT contains crossed trigeminal fibers for both touch and pain/temp and lies immediately adjacent to the Medial Lemniscus; the ALS (body pain/temp) lies more laterally and is spared.",
      "The medial lemniscus carries all sensation from both the body and face, while the spinothalamic tract is purely motor.",
      "The lesion is in the right medulla because second-order fibers have not yet crossed at this level.",
      "The chief sensory nucleus of V decussates in the midbrain and travels within the corticospinal tract."
    ],
    correctWhyIndex: 0,
    drCohanRule: "In mid/rostral pons or midbrain, VTT is 'Hi neighbor!' to the medial lemniscus. VTT carries all sensory modalities from the contralateral face. ALS moves laterally to separate from ML, explaining why body pinprick is spared.",
    drawingInstruction: "Draw the Rostral Pons 'Snowman' (Slide 6/13) or Midbrain 'Pig' (Slide 7/14). In the upper oval tegmentum on the LEFT side, shade the horizontal Medial Lemniscus and adjacent VTT. Leave the lateral ALS unshaded.",
    explanation: "The medial lemniscus contains crossed fibers from the contralateral body (right body) for touch, vibration, and proprioception. In the rostral pons and midbrain tegmentum, the Ventral Trigeminothalamic Tract (VTT) carries crossed secondary trigeminal fibers (touch from principal sensory nucleus and pain/temp from spinal V) and sits immediately adjacent to the medial lemniscus. A focal lesion here damages Left ML + Left VTT, knocking out right body touch/proprioception and ALL right face modalities. The ALS (body pain/temp) diverges laterally at rostral levels and is completely spared!"
  },
  {
    id: 3,
    source: "Exam 1 Cases - Case 3",
    title: "Alternating Hemisensory Loss (Left Face, Right Body Pinprick)",
    category: "Medulla",
    vignette: "A 60-year-old man is examined in the emergency department with the following findings:\n1. Touch, vibratory, and proprioceptive sensation is NORMAL over entire right and left sides of face and body.\n2. Pinprick sensation is ABSENT on the left side of the face.\n3. Pinprick sensation is ABSENT on the right side of the body, but normal on the left side of the body.",
    findings: [
      { text: "Touch, Vibration, Proprioception: Normal everywhere", type: "normal" },
      { text: "Left Face Pinprick: ABSENT", type: "deficit" },
      { text: "Right Body Pinprick: ABSENT", type: "deficit" },
      { text: "Left Body Pinprick: Normal", type: "normal" }
    ],
    correctLevel: "rostral_medulla",
    correctLevelDetail: "Left Rostral (or Caudal) Medulla",
    correctSide: "left",
    correctStructures: ["left_spinal_v", "left_als"],
    correctStructureNames: "Left Spinal Trigeminal Tract/Nucleus & Left Spinothalamic Tract (ALS)",
    clinicalSyndrome: "Lateral Medullary Syndrome (Wallenberg Syndrome)",
    whyOptions: [
      "In the lateral medulla, primary trigeminal pain fibers descend uncrossed in the spinal trigeminal tract (ipsilateral face loss), while body pain fibers in the ALS have already crossed in the spinal cord (contralateral body loss).",
      "Medial lemniscus fibers carry pain and temperature from the face, whereas the spinothalamic tract carries touch from the opposite body.",
      "Both face and body pain pathways cross at the junction of the midbrain and diencephalon.",
      "The spinal trigeminal nucleus decussates in the rostral pons, causing ipsilateral face and body deficits."
    ],
    correctWhyIndex: 0,
    drCohanRule: "The classic 'crossed' or 'alternating' sensory deficit (ipsilateral face + contralateral body pain/temp) localizes strictly to the LATERAL MEDULLA (PICA territory). ML is medial and spared.",
    drawingInstruction: "Draw the Rostral Medulla (Slide 4/11: big circle with 2 olives, 2 pyramids, 2 ICPs). In the LEFT dorsolateral tegmentum, shade the Spinal Trigeminal Tract/Nucleus and the adjacent ALS. Medial structures (ML, pyramids) are normal.",
    explanation: "This is the classic Wallenberg (lateral medullary) syndrome, typically caused by occlusion of PICA or the vertebral artery. The primary sensory neurons of CN V enter the brainstem and descend uncrossed in the spinal trigeminal tract to synapse in the spinal trigeminal nucleus. Thus, a left lesion causes loss of pain/temp on the IPSILATERAL (left) face. In contrast, body pain and temperature fibers crossed in the spinal cord and ascend in the lateral medulla via the ALS. A left ALS lesion produces CONTRALATERAL (right) body pain/temp loss. The medial lemniscus lies medially along the midline, so touch/vibration/proprioception is completely spared."
  },
  {
    id: 4,
    source: "Exam 1 Cases - Case 4",
    title: "Hockey Goalie Missing Saves due to Clumsy Left Foot",
    category: "Cortex",
    vignette: "A hockey goalie noticed that her left foot has felt clumsy lately and she has missed several goals. Neurological exam reveals:\n1. She cannot describe the position of her left foot and toes when passively flexed or extended.\n2. Vibratory sense is ABSENT from her left foot.\n3. Position and vibratory senses are normal in her right foot and elsewhere on her body.\n4. Pinprick sensation in her left foot is felt, but it is dull, not sharp, and poorly localized.\n5. Pinprick is normal over the rest of her body.",
    findings: [
      { text: "Left Foot Joint Position Sense: ABSENT", type: "deficit" },
      { text: "Left Foot Vibration: ABSENT", type: "deficit" },
      { text: "Left Foot Pinprick: Dull, non-sharp, poorly localized", type: "deficit" },
      { text: "Right Foot & Body Sensation: NORMAL", type: "normal" }
    ],
    correctLevel: "cortex",
    correctLevelDetail: "Right Cerebral Hemisphere (Posterior Paracentral Lobule)",
    correctSide: "right",
    correctStructures: ["right_paracentral_lobule"],
    correctStructureNames: "Right Paracentral Lobule (Primary Somatosensory Cortex, Foot Area)",
    clinicalSyndrome: "Cortical Somatosensory Deficit (ACA Territory)",
    whyOptions: [
      "The primary somatosensory cortex (postcentral gyrus / paracentral lobule) is required for discriminative touch, proprioception, and precise localization of noxious stimuli; the lower extremity is mapped medially in the paracentral lobule.",
      "The dorsal column decussates in the lumbar cord, so a lesion in the right internal capsule affects only the left arm.",
      "Crude sensation is processed in the precentral gyrus, while vibration is exclusively processed in the cerebellar cortex.",
      "The left fasciculus gracilis was compressed at the level of the sacral plexus."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Cortical lesions do not completely abolish pain awareness (crude pain reaches thalamus), but impair DISCRIMINATIVE functions: joint position, vibration, and exact localization of noxious stimuli. Lower extremity is in the paracentral lobule.",
    drawingInstruction: "Draw a coronal slice or medial hemispheric view of the cerebral cortex. In the RIGHT hemisphere, shade the MEDIAL surface of the postcentral gyrus inside the longitudinal fissure (Posterior Paracentral Lobule).",
    explanation: "Cortical lesions in primary somatosensory cortex (areas 3, 1, 2) selectively impair discriminative sensory modalities (joint position sense, 2-point discrimination, stereognosis, and high-fidelity spatial localization of pain). Crude pain sensation is perceived subcortically at the thalamic level, which explains why pinprick was still felt but was dull and poorly localized. The sensory homunculus maps the lower extremity and foot onto the medial bank of the hemisphere within the paracentral lobule (supplied by the anterior cerebral artery, ACA)."
  },
  {
    id: 5,
    source: "Exam 1 Cases - Case 5",
    title: "Stab Wound in the Back with Right T4 Sensory Level",
    category: "Spinal Cord",
    vignette: "A 20-year-old man presents to the emergency room after being stabbed in the back. Neurological exam reveals:\n1. Touch, vibratory, and proprioceptive sensation is NORMAL over entire right and left side of the body.\n2. Pinprick sensation is ABSENT on the right side of the body from the level of the nipple (T4) down.\n3. Pinprick sensation is normal on the left side of the body.",
    findings: [
      { text: "Touch, Vibration, Proprioception: Normal bilaterally", type: "normal" },
      { text: "Right Body Pinprick: ABSENT from nipple (T4) downward", type: "deficit" },
      { text: "Left Body Pinprick: Normal", type: "normal" }
    ],
    correctLevel: "spinal_cord",
    correctLevelDetail: "Thoracic Spinal Cord (T2)",
    correctSide: "left",
    correctStructures: ["left_als"],
    correctStructureNames: "Left Anterolateral System (ALS) at T2",
    clinicalSyndrome: "Isolated Unilateral Cordotomy / ALS Transection",
    whyOptions: [
      "Spinothalamic fibers ascend 1-2 segments in Lissauer's tract before synapsing and decussating across the ventral white commissure; thus a spinal ALS lesion produces contralateral loss beginning 1-2 segments BELOW the anatomical lesion.",
      "The spinothalamic tract decussates in the medulla, so a lesion at T4 affects sensation at the identical dermatome on the same side.",
      "Dorsal column fibers cross immediately at entry, causing contralateral loss of pain and temperature.",
      "The lesion must be on the right side at T6 because fibers descend before crossing."
    ],
    correctWhyIndex: 0,
    drCohanRule: "A lesion of the spinal cord ALS produces a CONTRALATERAL loss of pain and temperature starting at a dermatome 2 levels BELOW the lesion (T4 deficit $\rightarrow$ T2 lesion on the contralateral side).",
    drawingInstruction: "Draw the Spinal Cord oval (Slide 2/9) at T2. On the LEFT side, shade the anterolateral white matter perimeter (Left ALS). The dorsal columns (gracilis and cuneatus) and gray matter remain clear.",
    explanation: "Primary pain and temperature afferents enter the spinal cord, ascend 1-2 spinal segments within Lissauer's tract (dorsolateral fasciculus), and synapse in the dorsal horn (substantia gelatinosa / nucleus proprius). Second-order axons then decussate through the ventral white commissure over 1-2 segments to join the contralateral ALS. Consequently, interrupting the ALS on the LEFT side at T2 produces loss of pain and temperature on the CONTRALATERAL (RIGHT) side beginning 2 dermatomes below the lesion (T4, the nipple line) and encompassing all caudal dermatomes."
  },
  {
    id: 6,
    source: "Exam 1 Cases - Case 6",
    title: "Tree Trimmer Fall with Asymmetric Cord Signs",
    category: "Spinal Cord",
    vignette: "A 25-year-old man fell off a ladder while trimming trees and suffered spinal trauma. After regaining consciousness, exam reveals:\n1. Tactile and vibratory sensation is ABSENT over entire left lower body and lower limb. He cannot tell orientation of his left leg on passive movement.\n2. Tactile sensation is NORMAL on entire right side of body.\n3. Pinprick sensation is ABSENT on right side of lower body and leg from the level of the umbilicus (T10) down.\n4. Pinprick sensation is NORMAL on entire left side of body.\nQuestion: What SIDE and LEVEL is the lesion?",
    findings: [
      { text: "Left Lower Body & Leg Touch, Vibration, Proprioception: ABSENT", type: "deficit" },
      { text: "Right Lower Body Touch: NORMAL", type: "normal" },
      { text: "Right Lower Body Pinprick: ABSENT from umbilicus (T10) downward", type: "deficit" },
      { text: "Left Body Pinprick: NORMAL", type: "normal" }
    ],
    correctLevel: "spinal_cord",
    correctLevelDetail: "Thoracic Spinal Cord (T8), Left Hemicord",
    correctSide: "left",
    correctStructures: ["left_fasciculus_gracilis", "left_als"],
    correctStructureNames: "Left Hemicord (Left Fasciculus Gracilis + Left ALS at T8)",
    clinicalSyndrome: "Brown-Séquard Syndrome (Spinal Cord Hemisection)",
    whyOptions: [
      "A spinal cord hemisection destroys uncrossed ascending dorsal columns (ipsilateral touch/proprioception loss) and crossed ascending spinothalamic fibers (contralateral pain/temp loss starting 2 segments below the lesion: T10 deficit = T8 lesion).",
      "The medial lemniscus decussates in the lumbar cord, giving contralateral vibratory loss and ipsilateral pain loss.",
      "The anterior white commissure was destroyed across 10 spinal segments.",
      "Fasciculus cuneatus was severed on the right side at T10."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Recognize loss of tactile/proprioception on ONE side and loss of pain/temp on the OPPOSITE side as Brown-Séquard syndrome localizing to the SPINAL CORD. Side = side of tactile loss (Left). Level = 2 segments above pinprick loss (T10 - 2 = T8).",
    drawingInstruction: "Draw the Spinal Cord oval (Slide 2/9) at T8. Shade the entire LEFT hemicord: Left Fasciculus Gracilis in the dorsal column and Left ALS in the anterolateral quadrant.",
    explanation: "This is classic Brown-Séquard syndrome resulting from spinal cord hemisection. The dorsal columns ascend uncrossed in the cord, so a left-sided lesion causes IPSILATERAL (left) loss of touch, vibration, and proprioception below the lesion level. The ALS carries crossed pain and temperature fibers that decussated 1-2 segments below; thus, a left ALS lesion causes CONTRALATERAL (right) pain/temperature loss beginning 2 dermatomes below the lesion level. Since the sensory level is at the umbilicus (T10), the anatomical lesion is on the LEFT at level T8."
  },

  // ==========================================
  // EXAM 1 CONTINUED (exam 1 cases continued.docx)
  // ==========================================
  {
    id: 7,
    source: "Exam 1 Cases Continued - Case 1",
    title: "Vegetarian with 'Feet Wrapped in Cotton' and Sensory Ataxia",
    category: "Spinal Cord",
    vignette: "A 58-year-old strict vegetarian presents because he has been unsteady when walking, especially in the dark or when washing his face with eyes closed. He reports his feet feel 'like they are wrapped in cotton.' Neurological exam reveals:\n1. Fine touch, vibratory, and position sense are ABSENT in both right and left feet and legs up to hips.\n2. Fine touch, vibration, and position sense are NORMAL in both arms, hands, and face.\n3. Pinprick and temperature sensation are normal over entire body and face.\n4. When he stands with feet together and closes his eyes, he sways violently and nearly falls (positive Romberg).",
    findings: [
      { text: "Bilateral Feet/Legs Touch, Vibration, Proprioception: ABSENT", type: "deficit" },
      { text: "Arms, Hands, Face Touch & Vibration: NORMAL", type: "normal" },
      { text: "Pain and Temperature: Normal everywhere", type: "normal" },
      { text: "Romberg Sign: Positive (Sensory Ataxia)", type: "deficit" }
    ],
    correctLevel: "spinal_cord",
    correctLevelDetail: "Thoracic Spinal Cord (T6 or below)",
    correctSide: "bilateral",
    correctStructures: ["left_fasciculus_gracilis", "right_fasciculus_gracilis"],
    correctStructureNames: "Bilateral Fasciculus Gracilis (Dorsal Columns $\\le$ T6)",
    clinicalSyndrome: "Subacute Combined Degeneration (B12 Deficiency)",
    whyOptions: [
      "Dorsal column degeneration produces bilateral loss of vibration/position and sensory ataxia (Romberg); normal arms indicate fasciculus cuneatus is spared, isolating the lesion to bilateral fasciculus gracilis below T6.",
      "The spinocerebellar tracts carry vibratory sense from the legs and decussate in the pons.",
      "Ventral white commissure fibers are selectively depleted by vitamin B12 deficiency.",
      "The medial lemniscus was bilaterally infarcted in the midbrain."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Bilateral loss of vibration and position in legs with normal pain/temp is a dorsal column pattern. Positive Romberg confirms loss of proprioception. Sparing of arms means fasciculus cuneatus is intact; below T6 dorsal columns contain only gracilis.",
    drawingInstruction: "Draw the Spinal Cord oval (Slide 2/9) at T6 or below. In the posterior funiculus, shade BOTH the left and right Fasciculus Gracilis along the dorsal midline. Leave lateral white matter and gray matter intact.",
    explanation: "Vitamin B12 deficiency in strict vegetarians causes subacute combined degeneration, predominantly affecting the dorsal columns and lateral corticospinal tracts. Loss of conscious proprioception causes sensory ataxia, dramatically worsened in the absence of visual compensation (positive Romberg test). Fasciculus gracilis carries fibers from the lower body (T7 and below). Fasciculus cuneatus (arms/upper body) only enters at T6 and above. Because upper extremity sensation is completely normal, the pathology is restricted to the bilateral fasciculus gracilis below T6."
  },
  {
    id: 8,
    source: "Exam 1 Cases Continued - Case 2",
    title: "Complete Left Hemi-Sensory Loss Splitting at Midline",
    category: "Thalamus",
    vignette: "A 68-year-old woman woke one morning with complete numbness on the entire left side of her body and face. Neurological exam reveals:\n1. Touch, vibratory, proprioceptive, pinprick, and temperature sensation are ALL ABSENT over left face, left arm, trunk, and left leg.\n2. All sensory modalities are completely normal on the right side of the face and body.\n3. The sensory loss ends sharply at the midline of the face and body.",
    findings: [
      { text: "Left Face All Sensory Modalities: ABSENT", type: "deficit" },
      { text: "Left Body (Arm, Trunk, Leg) All Modalities: ABSENT", type: "deficit" },
      { text: "Midline Demarcation: Sharp split at exact anatomical midline", type: "deficit" },
      { text: "Right Side All Sensation: NORMAL", type: "normal" }
    ],
    correctLevel: "thalamus",
    correctLevelDetail: "Right Thalamus (VPL and VPM Nuclei)",
    correctSide: "right",
    correctStructures: ["right_vpl", "right_vpm"],
    correctStructureNames: "Right Thalamus (VPL for body + VPM for face)",
    clinicalSyndrome: "Pure Sensory Stroke (Thalamic Lacunar Infarct)",
    whyOptions: [
      "In the thalamus, all crossed second-order somatosensory pathways converge into a compact relay: VPL for the contralateral body and VPM for the contralateral face; a single vascular lesion abolishes all modalities split sharply at midline.",
      "The primary somatosensory cortex processes all modalities together in a single column without spatial division.",
      "The medial lemniscus merges with the spinal trigeminal tract in the caudal medulla to form a single tract.",
      "The right posterior limb of the internal capsule only carries motor fibers, so the thalamus is excluded."
    ],
    correctWhyIndex: 0,
    drCohanRule: "All second-order fibers (medial lemniscus, spinothalamic tract, and trigeminothalamic tracts) have already crossed and converge in the thalamus (VPL for body, VPM for face). A lesion produces complete contralateral loss splitting at midline.",
    drawingInstruction: "Draw a diencephalon / thalamus cross-section. On the RIGHT side, shade the Ventral Posterolateral (VPL) nucleus and the adjacent Ventral Posteromedial (VPM) nucleus.",
    explanation: "This is a classic 'pure sensory stroke' usually caused by a lacunar infarct in the territory of the thalamoperforating or thalamogeniculate arteries. The thalamus is the obligatory sensory relay for all conscious body and head sensations before projection to cortex: the Ventral Posterolateral (VPL) nucleus receives medial lemniscus and spinothalamic fibers from the contralateral body, while the Ventral Posteromedial (VPM) nucleus receives trigeminothalamic fibers from the contralateral face. A lesion of right VPL + VPM destroys all sensation on the left body and face, splitting cleanly at the midline."
  },
  {
    id: 9,
    source: "Exam 1 Cases Continued - Case 3",
    title: "Pure Left Body Tactile/Vibratory Loss (Face & Pain Spared)",
    category: "Medulla",
    vignette: "A 42-year-old man came to the emergency room after waking with numbness in his left arm, trunk, and leg. Neurological exam reveals:\n1. Touch, vibratory, and proprioceptive sensation are ABSENT over the left arm, trunk, and leg.\n2. Touch, vibratory, and proprioceptive sensation are normal on right side of body and on entire face.\n3. Pinprick and temperature sensation are normal on both sides of body and face.",
    findings: [
      { text: "Left Body Touch, Vibration, Proprioception: ABSENT", type: "deficit" },
      { text: "Right Body Touch & Vibration: NORMAL", type: "normal" },
      { text: "Entire Face (Right & Left) Sensation: NORMAL", type: "normal" },
      { text: "Pain and Temperature (Body & Face): NORMAL bilaterally", type: "normal" }
    ],
    correctLevel: "rostral_medulla",
    correctLevelDetail: "Right Rostral Medulla (Level of Inferior Olive)",
    correctSide: "right",
    correctStructures: ["right_medial_lemniscus"],
    correctStructureNames: "Right Medial Lemniscus (Rostral Medulla)",
    clinicalSyndrome: "Medial Medullary Syndrome Variant (Selective ML Lesion)",
    whyOptions: [
      "Second-order dorsal column fibers cross in the internal arcuate fibers of the caudal medulla; in the rostral medulla, the Medial Lemniscus carries crossed touch/vibration/proprioception from the contralateral body, while face fibers and ALS lie elsewhere.",
      "The spinothalamic tract decussates in the rostral medulla, carrying tactile sensation from the body.",
      "Face tactile fibers travel inside the medial lemniscus, while body fibers travel in the VTT.",
      "Because the deficit is on the left body, the lesion must be on the left side of the rostral medulla."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Rule of thumb: The lesion is on the side OPPOSITE the body deficit! Since left body touch/proprioception is lost, the lesion is in the RIGHT medial lemniscus. Rostral medulla ML is a vertical ribbon between the olives.",
    drawingInstruction: "Draw the Rostral Medulla (Slide 4/11: olives, pyramids, ICP, 4th vent). Shade the RIGHT Medial Lemniscus (vertical strip along the midline between the olive and raphe). Leave VTT, ALS, and Spinal V untouched.",
    explanation: "Dorsal column fibers cross in the lower medulla as internal arcuate fibers and form the Medial Lemniscus. Therefore, above the sensory decussation, the medial lemniscus represents the contralateral body. A lesion in the RIGHT medial lemniscus causes loss of touch, vibration, and proprioception on the LEFT body. The face is completely spared because facial tactile fibers ascend in separate trigeminal pathways. Pain and temperature are spared because the ALS travels laterally in the tegmentum."
  },
  {
    id: 10,
    source: "Exam 1 Cases Continued - Case 4",
    title: "Pianist with Right Hand Astereognosis & Lower Face Sensory Loss",
    category: "Cortex",
    vignette: "A 35-year-old professional pianist noticed she can no longer tell what she is touching with her right hand. When placed a key, coin, or paper clip in her right hand with eyes closed, she cannot name them (astereognosis), though she names them when looking. Exam reveals:\n1. She cannot tell whether right fingers are moved up or down, and two-point discrimination is greatly impaired on right hand.\n2. Pinprick on right hand and right lower face is felt, but dull and poorly localized.\n3. Sensation is normal on left face/body, right arm above wrist, and right trunk/leg.\n4. Muscle strength is normal throughout.",
    findings: [
      { text: "Right Hand Stereognosis: ABSENT (Astereognosis)", type: "deficit" },
      { text: "Right Hand Joint Position & 2-Point Discrimination: Severely impaired", type: "deficit" },
      { text: "Right Hand & Lower Face Pinprick: Dull, poorly localized", type: "deficit" },
      { text: "Right Arm above wrist, Trunk, Leg Sensation: NORMAL", type: "normal" },
      { text: "Motor Strength: Normal (5/5 throughout)", type: "normal" }
    ],
    correctLevel: "cortex",
    correctLevelDetail: "Left Cerebral Hemisphere (Lateral Postcentral Gyrus)",
    correctSide: "left",
    correctStructures: ["left_postcentral_hand_face"],
    correctStructureNames: "Left Postcentral Gyrus (Primary Somatosensory Cortex, Hand & Lower Face Area)",
    clinicalSyndrome: "Cortical Somatosensory Syndrome (MCA Territory)",
    whyOptions: [
      "Cortical lesions impair discriminative functions (stereognosis, 2-point, joint position, localization of pain) rather than crude sensation; the hand and lower face are adjacent on the lateral convexity of the postcentral gyrus.",
      "The medial lemniscus projects directly to the parietal lobule without synapsing in the thalamus.",
      "Damage to the right paracentral lobule selectively denervates the hand and lower face.",
      "A lesion of the fasciculus cuneatus at C2 selectively abolishes stereognosis while preserving touch."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Cortical lesions impair discriminative sensation (stereognosis, two-point, localization) rather than abolishing crude feeling. Hand and face are neighbors on the sensory homunculus in the lateral postcentral gyrus (areas 3, 1, 2).",
    drawingInstruction: "Draw the cerebral cortex (lateral convexity or coronal view). In the LEFT hemisphere, shade the inferior/lateral portion of the Postcentral Gyrus corresponding to the hand and lower face representations.",
    explanation: "Complex somatosensory processing including stereognosis, two-point discrimination, graphesthesia, and pinpoint localization of pain requires the primary somatosensory cortex (Brodmann areas 3, 1, 2). Lesions here spare crude subcortical pain perception at the thalamus but destroy discriminative capacity. On the homunculus along the lateral convexity of the postcentral gyrus (supplied by the MCA), the hand and lower face lie directly adjacent to each other and separate from the trunk and leg."
  },
  {
    id: 11,
    source: "Exam 1 Cases Continued - Case 5",
    title: "Hemorrhage Causing Left Face & Left Body Pinprick Loss",
    category: "Pons",
    vignette: "A 50-year-old man was brought to the ED after a small intracranial hemorrhage. Exam reveals:\n1. Touch, vibratory, and proprioceptive sensation are normal over entire right and left face and body.\n2. Pinprick and temperature sensation are ABSENT on entire left side of the face.\n3. Pinprick and temperature sensation are ABSENT on entire left side of the body, from neck down.\n4. Pinprick and temperature sensation are normal on right face and body.\nQuestion: Where is the lesion and why does it differ from a lateral medullary lesion?",
    findings: [
      { text: "Touch, Vibration, Proprioception: Normal throughout body & face", type: "normal" },
      { text: "Left Face Pinprick & Temperature: ABSENT", type: "deficit" },
      { text: "Left Body (Neck Down) Pinprick & Temp: ABSENT", type: "deficit" },
      { text: "Right Side Pinprick & Temp: NORMAL", type: "normal" }
    ],
    correctLevel: "rostral_pons",
    correctLevelDetail: "Right Lateral Midbrain or Rostral Pons Tegmentum",
    correctSide: "right",
    correctStructures: ["right_als", "right_vtt"],
    correctStructureNames: "Right ALS + Right Ventral Trigeminothalamic Tract (VTT)",
    clinicalSyndrome: "Rostral Brainstem Tegmental Lesion (ALS + VTT)",
    whyOptions: [
      "Above the trigeminal decussation in the pons, both face pain fibers (VTT) and body pain fibers (ALS) have crossed and ascend adjacent to each other laterally; a single lesion causes contralateral loss on both face and body (unlike the crossed pattern in lateral medulla).",
      "In the medulla, face pain fibers cross before entering the spinal trigeminal nucleus.",
      "The medial lemniscus merges with the spinal trigeminal tract in the rostral pons.",
      "The lesion is located in the left thalamus because all pain fibers are ipsilateral."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Difference from lateral medulla: In the lateral medulla, spinal V is uncrossed (ipsilateral face) and ALS is crossed (contralateral body) $\rightarrow$ crossed deficit. In rostral pons/midbrain, BOTH VTT and ALS have crossed $\rightarrow$ contralateral face AND body!",
    drawingInstruction: "Draw the Rostral Pons 'Snowman' (Slide 6/13) or Midbrain 'Pig' (Slide 7/14). On the RIGHT side, in the lateral tegmentum, shade the ALS and adjacent VTT ('Hi neighbor!'). Medial Lemniscus remains unshaded.",
    explanation: "This vignette contrasts directly with Lateral Medullary Syndrome (Wallenberg). In the medulla, facial pain fibers are primary uncrossed afferents in the spinal V tract, yielding an ipsilateral face and contralateral body deficit. But once secondary trigeminal axons cross in the pons/medulla and ascend in the VTT, they travel right alongside the crossed ALS in the lateral tegmentum of the rostral pons and midbrain. Thus, a lesion in the right rostral tegmentum destroys both crossed tracts, producing CONTRALATERAL (left) face and body pain/temperature loss."
  },
  {
    id: 12,
    source: "Exam 1 Cases Continued - Case 6",
    title: "Facial Pinprick Loss with 'Onion-Skin' Perioral Sparing",
    category: "Medulla",
    vignette: "A 55-year-old woman presents complaining that she cannot feel hot or sharp objects on part of her face. Exam reveals:\n1. Pinprick and temperature sensation are ABSENT on right cheek, jaw, forehead, and ear region.\n2. Pinprick and temperature sensation are NORMAL around nose, upper lip, and mouth on the right (perioral sparing).\n3. Touch and vibratory sensation are normal on both sides of face and body.\n4. Pinprick and temperature sensation are normal on left face and entire body.",
    findings: [
      { text: "Right Cheek, Jaw, Forehead, Ear Pinprick/Temp: ABSENT", type: "deficit" },
      { text: "Right Nose, Upper Lip, Mouth (Perioral): NORMAL (Spared)", type: "normal" },
      { text: "Touch & Vibration (Face & Body): Normal everywhere", type: "normal" },
      { text: "Left Face & Entire Body: Normal", type: "normal" }
    ],
    correctLevel: "caudal_medulla",
    correctLevelDetail: "Right Caudal Medulla to C2 Level",
    correctSide: "right",
    correctStructures: ["right_spinal_v"],
    correctStructureNames: "Right Spinal Trigeminal Nucleus (Pars Caudalis) & Tract (Caudal Portion)",
    clinicalSyndrome: "Onion-Skin Somatotopy of Spinal Trigeminal Nucleus",
    whyOptions: [
      "The spinal trigeminal nucleus has an 'onion-skin' somatotopic organization along its rostrocaudal length: the central perioral region is represented rostrally (near obex), while the peripheral outer face is represented caudally (caudal medulla to C2).",
      "V1 and V2 divisions of the trigeminal nerve terminate exclusively in the chief sensory nucleus in the midbrain.",
      "Perioral sensation is carried exclusively by the facial nerve (CN VII) through the tractus solitarius.",
      "The dorsal column nuclei in the caudal medulla suppress pain sensation from the central mouth."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Face representation in spinal trigeminal nucleus follows an 'onion skin' pattern: perioral is rostral, outer face (cheeks, jaw, ears) is caudal. A lesion at caudal medulla to C2 spares the central face. Touch is spared because chief sensory nuc is in the pons.",
    drawingInstruction: "Draw the Caudal Medulla (Slide 3/10: circle with central canal 1/3 from top). On the RIGHT side, shade the lateral-most circle of the '3 circle neighbors' (Right Spinal Trigeminal Tract and Nucleus).",
    explanation: "The spinal trigeminal nucleus pars caudalis exhibits a unique concentric 'onion-skin' somatotopic organization in its rostrocaudal axis. Fibers innervating the central face (mouth, lips, tip of nose) terminate rostrally near the obex of the medulla. Fibers innervating progressively more lateral rings of the face (cheek, forehead, ear, occiput) terminate progressively more caudally down to C2. Therefore, a caudal medullary/upper cervical lesion damages the outer concentric zones while sparing the rostrally represented perioral center."
  },

  // ==========================================
  // HIGH-YIELD CASES 13-40 (EXPANDED CURRICULUM)
  // ==========================================
  {
    id: 13,
    source: "Clinical Case 13",
    title: "Medial Medullary Syndrome (Dejerine Syndrome)",
    category: "Medulla",
    vignette: "A 64-year-old man with hypertension develops sudden weakness and numbness. Exam shows:\n1. Touch, vibratory, and proprioceptive sensation are ABSENT on the entire left body (arm, trunk, leg).\n2. Loss of pinprick/temperature is absent; pain/temperature is normal bilaterally.\n3. Left hemiparesis with hyperreflexia and positive Babinski.\n4. When he protrudes his tongue, it deviates strongly to the RIGHT with fasciculations and atrophy.",
    findings: [
      { text: "Left Body Touch, Vibration, Proprioception: ABSENT", type: "deficit" },
      { text: "Left Body Hemiparesis: 3/5 strength, hyperreflexia", type: "deficit" },
      { text: "Tongue Deviation: Deviates to the RIGHT on protrusion", type: "deficit" },
      { text: "Pain and Temperature: Normal everywhere", type: "normal" }
    ],
    correctLevel: "rostral_medulla",
    correctLevelDetail: "Right Rostral Medulla (Paramedian Territory)",
    correctSide: "right",
    correctStructures: ["right_medial_lemniscus", "right_pyramid", "right_hypoglossal_nucleus"],
    correctStructureNames: "Right Medial Lemniscus, Right Pyramid, Right CN XII Nucleus",
    clinicalSyndrome: "Medial Medullary Syndrome (Dejerine Syndrome)",
    whyOptions: [
      "Anterior spinal artery branch occlusion damages the medial rostral medulla: ipsilateral CN XII nerve/nucleus (tongue deviates to right), crossed pyramid (contralateral left hemiparesis), and crossed medial lemniscus (contralateral left proprioception/touch loss).",
      "PICA occlusion causes contralateral tongue deviation and ipsilateral proprioceptive loss.",
      "The corticospinal tract decussates in the midbrain, causing ipsilateral weakness.",
      "Medial lemniscus fibers carry pain and temperature, while the spinothalamic tract carries tongue motor control."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Medial Medullary Syndrome triad: Medial Lemniscus (contralateral proprioception loss) + Pyramid (contralateral hemiparesis) + CN XII (ipsilateral tongue deviation). Medial rostral medulla between the olives!",
    drawingInstruction: "Draw the Rostral Medulla (Slide 4). On the RIGHT side, shade the vertical Medial Lemniscus, the ventral Pyramid triangle, and the dorsomedial Hypoglossal nucleus near the 4th ventricle floor.",
    explanation: "Occlusion of the anterior spinal artery or paramedian branches of the vertebral artery causes Medial Medullary Syndrome. The triad consists of: (1) Ipsilateral flaccid paralysis of the tongue (CN XII), deviating toward the lesion (right); (2) Contralateral spastic hemiparesis (left body) due to damage to the pre-decussation corticospinal tract in the pyramid; and (3) Contralateral loss of touch, vibration, and proprioception (left body) due to damage to the crossed medial lemniscus."
  },
  {
    id: 14,
    source: "Clinical Case 14",
    title: "Midbrain Tegmental Lesion (Weber Syndrome)",
    category: "Midbrain",
    vignette: "A 72-year-old man presents with sudden double vision and weakness. Exam reveals:\n1. Ptosis of the left upper eyelid, a dilated non-reactive left pupil, and the left eye is deviated 'down and out' at rest.\n2. Flaccid paralysis of the right lower face and right arm and leg (contralateral hemiplegia).\n3. Babinski sign is present on the right.",
    findings: [
      { text: "Left Eye: Ptosis, fixed dilated pupil, 'down and out' gaze (CN III palsy)", type: "deficit" },
      { text: "Right Face & Body: Dense hemiplegia with hyperreflexia", type: "deficit" },
      { text: "Sensory Examination: Normal throughout", type: "normal" }
    ],
    correctLevel: "midbrain",
    correctLevelDetail: "Left Ventral Midbrain (Crus Cerebri)",
    correctSide: "left",
    correctStructures: ["left_crus_cerebri", "left_oculomotor_nucleus"],
    correctStructureNames: "Left Crus Cerebri & Left Oculomotor (CN III) Fascicles",
    clinicalSyndrome: "Weber Syndrome (Superior Alternating Hemiplegia)",
    whyOptions: [
      "PCA paramedian branch infarction damages the ventral midbrain, interrupting exiting ipsilateral CN III fibers (left oculomotor palsy) and uncrossed descending corticospinal/corticobulbar fibers in the crus cerebri (contralateral right hemiplegia).",
      "Basilar artery bifurcation aneurysm compresses the abducens nerve in the rostral pons.",
      "The medial lemniscus is destroyed in the crus cerebri, causing contralateral weakness.",
      "A lesion of the red nucleus causes oculomotor nerve regeneration."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Midbrain 'The Pig (from the rear)': The two rectangles on the bottom are the Crus Cerebri. Lesion of crus cerebri + CN III produces Weber syndrome (ipsilateral 3rd nerve palsy + contralateral hemiplegia).",
    drawingInstruction: "Draw the Midbrain 'Pig' (Slide 7/14). On the LEFT side, shade the rectangular Crus Cerebri at the bottom and the exiting rootlets/nucleus of CN III in the interpeduncular fossa.",
    explanation: "Weber syndrome (ventral midbrain syndrome) is caused by infarction of paramedian branches of the posterior cerebral artery (PCA). It selectively destroys the corticospinal and corticobulbar fibers descending through the crus cerebri (producing contralateral spastic hemiplegia of the body and lower face) along with the fascicles of the oculomotor nerve (CN III) coursing through the midbrain tegmentum (producing ipsilateral complete 3rd nerve palsy)."
  },
  {
    id: 15,
    source: "Clinical Case 15",
    title: "Mid-Pontine Trigeminal Neuropathy (Principal Sensory vs Motor)",
    category: "Pons",
    vignette: "A 48-year-old woman develops a mass in the middle tegmentum of the pons. Exam reveals:\n1. Fine touch, two-point discrimination, and vibratory sensation are ABSENT over the entire right face.\n2. Pinprick and temperature sensation on the right face are surprisingly preserved/normal.\n3. Weakness of right mastication; when she opens her jaw, the mandible deviates to the RIGHT.\n4. Body sensation and motor power are normal bilaterally.",
    findings: [
      { text: "Right Face Fine Touch & 2-Point: ABSENT", type: "deficit" },
      { text: "Right Face Pinprick & Temperature: NORMAL (Preserved)", type: "normal" },
      { text: "Jaw Opening: Deviates to the RIGHT (weak right pterygoids)", type: "deficit" },
      { text: "Body Sensation & Motor: Normal", type: "normal" }
    ],
    correctLevel: "caudal_mid_pons",
    correctLevelDetail: "Right Mid-Pons (Tegmentum)",
    correctSide: "right",
    correctStructures: ["right_spinal_v"],
    correctStructureNames: "Right Principal (Chief) Sensory Nucleus & Motor Nucleus of V",
    clinicalSyndrome: "Mid-Pontine Trigeminal Syndrome",
    whyOptions: [
      "In the mid-pons, the Principal Sensory Nucleus of V (discriminative tactile) and Motor Nucleus of V lie adjacent in the lateral tegmentum; pain/temp fibers descend to the medulla in the spinal V tract and are spared.",
      "The spinal trigeminal nucleus processes facial motor control, while the principal nucleus processes mastication.",
      "Tactile sensation from the face crosses before entering the principal nucleus.",
      "VTT fibers originate from the mesencephalic nucleus and decussate in the mid-pons."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Mid pons slide note: 'Mid pons looks the same as caudal pons but also includes principal sensory nuc and motor nuc of V'. Selective tactile loss on face with pain spared localizes to principal sensory nuc in mid-pons!",
    drawingInstruction: "Draw the Caudal/Mid Pons (Slide 5/12: square tegmentum atop basilar pons). In the RIGHT lateral tegmentum, shade the Principal Sensory and Motor nuclei of CN V.",
    explanation: "Primary sensory fibers for discriminative fine touch from the face terminate in the Chief (Principal) Sensory Nucleus of V located in the mid-pons tegmentum. In contrast, primary pain and temperature fibers descend through the spinal trigeminal tract to the medulla. Adjacent to the principal sensory nucleus is the Motor Nucleus of V, innervating muscles of mastication. An isolated mid-pontine tegmental lesion destroys facial touch and masticatory motor power (jaw deviates to the weak side, right) while sparing pain/temperature."
  },
  {
    id: 16,
    source: "Clinical Case 16",
    title: "Anterior Spinal Artery Syndrome of the Thoracic Cord",
    category: "Spinal Cord",
    vignette: "A 62-year-old man undergoing abdominal aortic aneurysm repair develops sudden paraplegia. Exam reveals:\n1. Flaccid paralysis of both legs with bilateral Babinski signs.\n2. Complete loss of pinprick and temperature sensation below the T10 dermatome bilaterally.\n3. Vibratory sense, two-point discrimination, and joint position sense are COMPLETELY PRESERVED in both legs.",
    findings: [
      { text: "Bilateral Leg Motor Power: Paraplegia (0/5 bilateral)", type: "deficit" },
      { text: "Pinprick & Temp: ABSENT bilaterally below T10", type: "deficit" },
      { text: "Vibration & Proprioception: COMPLETELY NORMAL in both legs", type: "normal" }
    ],
    correctLevel: "spinal_cord",
    correctLevelDetail: "Thoracic Spinal Cord (T8-T10, Anterior 2/3)",
    correctSide: "bilateral",
    correctStructures: ["left_als", "right_als", "left_lateral_corticospinal", "right_lateral_corticospinal"],
    correctStructureNames: "Bilateral ALS & Bilateral Lateral Corticospinal Tracts (Dorsal Columns Spared)",
    clinicalSyndrome: "Anterior Spinal Artery Syndrome (Beck's Syndrome)",
    whyOptions: [
      "The anterior spinal artery supplies the anterior two-thirds of the cord (corticospinal tracts and ALS), while the posterior spinal arteries supply the dorsal columns; infarction causes bilateral motor and pain/temp loss with preserved vibration/proprioception.",
      "The posterior spinal arteries supply the anterior horn motor neurons, causing flaccid paralysis.",
      "Dorsal columns are spared because they are supplied by the internal carotid artery.",
      "The spinocerebellar tracts carry pain and temperature, while the corticospinal tract carries proprioception."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Spinal cord vascular anatomy: Anterior spinal artery = anterior 2/3 of cord (ALS + corticospinal + ventral horns). Posterior spinal arteries = dorsal columns (gracilis/cuneatus). Dorsal columns spared = intact vibration/proprioception!",
    drawingInstruction: "Draw the Spinal Cord oval (Slide 2/9). Shade the entire anterior 2/3 of the cord bilaterally (including both ALS and lateral corticospinal tracts). Leave the entire dorsal column (both fasciculi gracilis) completely white and intact.",
    explanation: "Occlusion of the anterior spinal artery (often from hypoperfusion or clamping of the artery of Adamkiewicz during aortic surgery) causes infarction of the anterior two-thirds of the spinal cord. This bilaterally destroys the lateral corticospinal tracts (bilateral paraplegia), ventral horns, and the ALS (bilateral pain and temperature loss below the lesion). The posterior one-third of the cord is supplied independently by dual posterior spinal arteries, sparing the dorsal columns completely (intact vibration and joint position sense)."
  },
  {
    id: 17,
    source: "Clinical Case 17",
    title: "Caudal Pons Infarction (Millard-Gubler Syndrome)",
    category: "Pons",
    vignette: "A 59-year-old woman presents with facial droop and weakness. Exam shows:\n1. Inability to abduct the left eye on lateral gaze; left eye is stuck in adduction at rest.\n2. Complete lower motor neuron paralysis of the entire left face (forehead, eye closure, mouth droop).\n3. Spastic hemiplegia of the right arm and right leg with Babinski sign on the right.\n4. Proprioception, vibration, and pinprick are normal throughout.",
    findings: [
      { text: "Left Eye Abduction: ABSENT (Left CN VI palsy)", type: "deficit" },
      { text: "Left Face: Complete LMN facial paralysis (Left CN VII palsy)", type: "deficit" },
      { text: "Right Body Motor: Spastic hemiplegia (3/5 strength)", type: "deficit" },
      { text: "Sensory Exam: Intact bilaterally", type: "normal" }
    ],
    correctLevel: "caudal_mid_pons",
    correctLevelDetail: "Left Caudal Pons (Ventral Tegmentum / Basilar Pons)",
    correctSide: "left",
    correctStructures: ["left_basilar_pons", "left_facial_nucleus", "left_abducens_nucleus"],
    correctStructureNames: "Left Abducens (VI), Left Facial (VII) Fascicles, & Left Corticospinal Tract",
    clinicalSyndrome: "Millard-Gubler Syndrome (Ventral Pontine Syndrome)",
    whyOptions: [
      "Circumferential basilar artery branch occlusion in the caudal pons damages exiting CN VI and CN VII fascicles (ipsilateral lateral rectus and facial paralysis) and adjacent uncrossed corticospinal fibers (contralateral hemiplegia).",
      "Medial longitudinal fasciculus transection produces isolated facial droop and tongue deviation.",
      "The facial motor nucleus decussates in the midbrain, producing contralateral facial weakness.",
      "Damage to the superior cerebellar peduncle causes bilateral abducens nerve palsy."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Caudal Pons outline (Slide 5): Square tegmentum atop large basilar pons with protruding MCP arms. Exiting CN VI and VII fascicles run adjacent to the descending corticospinal fibers in the basilar pons.",
    drawingInstruction: "Draw the Caudal Pons (Slide 5: square tegmentum with curved basilar belly). On the LEFT side, shade the basilar pons (corticospinal tract) and the exiting fascicles of CN VI (abducens) and CN VII (facial).",
    explanation: "Millard-Gubler syndrome is an alternating hemiplegia of the caudal pons. A vascular lesion in the ventral tegmentum/basilar pons affects: (1) CN VI fascicles (ipsilateral lateral rectus palsy), (2) CN VII fascicles or nucleus (ipsilateral peripheral facial palsy affecting upper and lower face), and (3) corticospinal tract prior to its decussation (contralateral hemiplegia of the arm and leg)."
  },
  {
    id: 18,
    source: "Clinical Case 18",
    title: "Locked-In Syndrome (Bilateral Basilar Pons Infarction)",
    category: "Pons",
    vignette: "A 52-year-old man collapses and is found unresponsive to verbal commands. On detailed exam:\n1. He is fully awake and alert, comprehending questions by blinking and moving eyes vertically.\n2. Complete quadriplegia (0/5 strength in all 4 limbs).\n3. Complete bilateral loss of horizontal eye movements, speech (anarthria), and facial movement.\n4. Sensation (vibration, touch, pain) is remarkably intact throughout body and face.",
    findings: [
      { text: "Consciousness: Fully preserved (communicates via vertical eye blinks)", type: "normal" },
      { text: "Motor Power: Complete quadriplegia (0/5 in all 4 limbs)", type: "deficit" },
      { text: "Cranial Nerves: Bilateral horizontal gaze, facial, and bulbar paralysis", type: "deficit" },
      { text: "Sensory Pathways: Completely preserved bilaterally", type: "normal" }
    ],
    correctLevel: "caudal_mid_pons",
    correctLevelDetail: "Bilateral Basilar Pons (Ventral Pons)",
    correctSide: "bilateral",
    correctStructures: ["left_basilar_pons", "right_basilar_pons"],
    correctStructureNames: "Bilateral Basilar Pons (Corticospinal & Corticobulbar Tracts)",
    clinicalSyndrome: "Locked-In Syndrome",
    whyOptions: [
      "Basilar artery thrombosis bilaterally destroys the basilar pons (corticospinal and corticobulbar tracts), causing quadriplegia and anarthria, while sparing the dorsal tegmentum (reticular activating system, sensory tracts) and midbrain vertical gaze center.",
      "The cerebral cortex is completely infarcted, while the spinal cord generates vertical eye movements.",
      "Bilateral medial lemniscus destruction prevents all motor responses to stimuli.",
      "The reticular activating system is destroyed, causing coma with reflex eye movements."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Caudal/Mid Pons (Slide 5): 'All the sensory structures we are studying will go in the square (tegmentum). The large bottom area (basilar pons) contains motor structures.' Bilateral basilar lesion spares sensory square completely!",
    drawingInstruction: "Draw the Caudal/Mid Pons (Slide 5). Shade the entire lower curved belly (Bilateral Basilar Pons). Keep the upper sensory square (tegmentum) completely clear and intact.",
    explanation: "Locked-in syndrome is most commonly caused by basilar artery occlusion resulting in extensive infarction of the ventral (basilar) pons. This destroys the descending corticospinal tracts (quadriplegia) and corticobulbar tracts (anarthria, dysphagia, bilateral facial paralysis). The tegmentum of the pons is spared, preserving the ascending reticular activating system (patient remains fully conscious) and all sensory pathways (ML, VTT, ALS). Vertical eye movements and blinking are preserved because they are controlled in the midbrain."
  },
  {
    id: 19,
    source: "Clinical Case 19",
    title: "Lateral Pontine Syndrome (AICA Stroke)",
    category: "Pons",
    vignette: "A 56-year-old woman develops sudden vertigo, nausea, and deafness in the right ear. Exam reveals:\n1. Severe right-sided facial weakness (upper and lower face, CN VII).\n2. Loss of pinprick and temperature sensation on the RIGHT face.\n3. Loss of pinprick and temperature sensation on the LEFT body (neck down).\n4. Complete sensorineural hearing loss in the right ear (CN VIII).\n5. Right limb ataxia and dysmetria.\n6. Touch and vibration are normal on both sides of the body.",
    findings: [
      { text: "Right Hearing: Complete sensorineural deafness (CN VIII)", type: "deficit" },
      { text: "Right Face Motor: Lower motor neuron facial palsy (CN VII)", type: "deficit" },
      { text: "Right Face Pinprick/Temp: ABSENT", type: "deficit" },
      { text: "Left Body Pinprick/Temp: ABSENT", type: "deficit" },
      { text: "Right Limb Ataxia: Present", type: "deficit" },
      { text: "Touch & Vibration: Normal bilaterally", type: "normal" }
    ],
    correctLevel: "caudal_mid_pons",
    correctLevelDetail: "Right Caudal/Lateral Pons",
    correctSide: "right",
    correctStructures: ["right_spinal_v", "right_als", "right_facial_nucleus"],
    correctStructureNames: "Right Spinal Trigeminal Complex, Right ALS, Right CN VII/VIII",
    clinicalSyndrome: "Lateral Pontine Syndrome (AICA Infarct)",
    whyOptions: [
      "AICA occlusion damages the lateral caudal pons: ipsilateral CN VII and CN VIII (facial palsy and deafness), spinal V (ipsilateral face pain/temp loss), MCP (ataxia), and ALS (contralateral body pain/temp loss); distinguishes from Wallenberg by CN VII/VIII involvement.",
      "PICA supplies the lateral pons and innervates the cochlear nuclei directly.",
      "The medial lemniscus is destroyed in lateral pontine syndrome, producing bilateral deafness.",
      "AICA supplies the medial medulla and anterior horn motor neurons."
    ],
    correctWhyIndex: 0,
    drCohanRule: "AICA = Lateral Pons. PICA = Lateral Medulla. Both produce crossed pain/temp (ipsilateral face, contralateral body), but AICA adds IPSILATERAL FACIAL PARALYSIS (CN VII) and SENSORINEURAL DEAFNESS (CN VIII)!",
    drawingInstruction: "Draw the Caudal Pons (Slide 5). On the RIGHT side, shade the lateral tegmentum including Spinal Trigeminal tract, ALS, CN VII nucleus/fascicles, and middle cerebellar peduncle (MCP).",
    explanation: "Occlusion of the anterior inferior cerebellar artery (AICA) causes Lateral Pontine Syndrome. Like Wallenberg syndrome in the medulla, it causes crossed pain and temperature loss (ipsilateral face via spinal V, contralateral body via ALS) and ipsilateral cerebellar ataxia (MCP). However, it is distinguished clinically by damage to structures specific to the lateral caudal pons: ipsilateral complete facial paralysis (CN VII) and ipsilateral sensorineural deafness/tinnitus (CN VIII / cochlear nuclei)."
  },
  {
    id: 20,
    source: "Clinical Case 20",
    title: "Tabes Dorsalis (Syphilitic Dorsal Column Degeneration)",
    category: "Spinal Cord",
    vignette: "A 61-year-old man presents with sharp, shooting 'lightning pains' in his legs and severe difficulty walking at night. Exam shows:\n1. Complete loss of vibratory sense and joint position sense in both lower extremities.\n2. Normal pain and temperature sensation on the legs, trunk, and face.\n3. Absent deep tendon reflexes at knees and ankles bilaterally.\n4. Positive Romberg sign; wide-based high-stepping 'slapping' gait.\n5. Argyll Robertson pupils (accommodate but do not react to light).",
    findings: [
      { text: "Bilateral Leg Vibration & Proprioception: ABSENT", type: "deficit" },
      { text: "Bilateral Leg Pain & Temperature: NORMAL", type: "normal" },
      { text: "Deep Tendon Reflexes: Absent in both legs (areflexia)", type: "deficit" },
      { text: "Gait: Sensory ataxia (slapping feet, positive Romberg)", type: "deficit" },
      { text: "Pupils: Argyll Robertson (light-near dissociation)", type: "deficit" }
    ],
    correctLevel: "spinal_cord",
    correctLevelDetail: "Lumbosacral Spinal Cord (Dorsal Columns & Dorsal Roots)",
    correctSide: "bilateral",
    correctStructures: ["left_fasciculus_gracilis", "right_fasciculus_gracilis"],
    correctStructureNames: "Bilateral Dorsal Columns (Fasciculus Gracilis) & Dorsal Roots",
    clinicalSyndrome: "Tabes Dorsalis (Neurosyphilis)",
    whyOptions: [
      "Treponema pallidum damages dorsal nerve roots and dorsal columns (fasciculus gracilis), selectively abolishing proprioception, vibration, and deep tendon reflexes in the lower extremities while sparing the ALS.",
      "The spinothalamic tract is selectively calcified in tertiary syphilis.",
      "The anterior white commissure is transected, preventing pupillary light reflex.",
      "Bilateral corticospinal tract infarction causes the high-stepping slapping gait."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Spinal cord dorsal columns (Slide 2/9): Fasciculus Gracilis is medial and carries lower extremity vibration and proprioception. Selective dorsal root / gracilis degeneration causes sensory ataxia and areflexia.",
    drawingInstruction: "Draw the Spinal Cord oval (Slide 2/9) at lumbar level. In the posterior funiculus, shade BOTH left and right Fasciculus Gracilis and adjacent dorsal horn entry zones.",
    explanation: "Tabes dorsalis is a late manifestation of neurosyphilis resulting from slow degeneration of large-diameter sensory fibers in the dorsal roots and dorsal columns (fasciculus gracilis). This leads to severe sensory ataxia, loss of joint position and vibratory sense, positive Romberg sign, and loss of deep tendon reflexes (interrupted afferent reflex arc). The spinothalamic tract and anterior horn cells are spared. Argyll Robertson pupils localize the concurrent midbrain pretectal involvement."
  },
  {
    id: 21,
    source: "Clinical Case 21",
    title: "Central Cord Syndrome (Hyperextension Neck Injury)",
    category: "Spinal Cord",
    vignette: "A 71-year-old woman with severe cervical spondylosis is in a motor vehicle accident and suffers a hyperextension injury of the neck. Exam reveals:\n1. Severe flaccid weakness of both hands and arms (1/5 power), but motor strength in both legs is nearly normal (4+/5 power).\n2. Loss of pinprick and temperature sensation in a bilateral 'cape-like' distribution across shoulders, arms, and upper chest.\n3. Vibratory sense and proprioception are completely preserved throughout.",
    findings: [
      { text: "Upper Extremity Motor Power: Severe weakness (1/5 bilaterally)", type: "deficit" },
      { text: "Lower Extremity Motor Power: Near normal (4+/5 bilaterally)", type: "normal" },
      { text: "Pinprick & Temp: Absent across shoulders, arms, chest (cape distribution)", type: "deficit" },
      { text: "Vibration & Proprioception: Intact in all 4 limbs", type: "normal" }
    ],
    correctLevel: "spinal_cord",
    correctLevelDetail: "Cervical Spinal Cord (C5-C8 Central Cord)",
    correctSide: "bilateral",
    correctStructures: ["ventral_white_commissure", "left_ventral_horn", "right_ventral_horn"],
    correctStructureNames: "Central Cervical Cord: Ventral White Commissure, Medial Corticospinal & Ventral Horns",
    clinicalSyndrome: "Central Cord Syndrome",
    whyOptions: [
      "In the cervical cord, central hemorrhage/edema damages decussating spinothalamic fibers in the ventral white commissure and medial (arm) fibers of the corticospinal tract, producing arm > leg weakness and cape-like sensory loss.",
      "The lumbar cord is compressed by hyperextension, sparing the arms.",
      "The posterior spinal arteries are occluded, destroying the dorsal columns.",
      "Fasciculus cuneatus fibers decussate in the central canal to form the lateral horn."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Spinal cord somatotopy: In the lateral corticospinal tract, cervical (arm) fibers are MEDIAL, while sacral/lumbar (leg) fibers are LATERAL. A central lesion destroys medial arm fibers and crossing pain fibers, sparing the peripheral leg fibers!",
    drawingInstruction: "Draw the Spinal Cord oval (Slide 2/9) at C6. Shade the central gray area, ventral white commissure, and the medial-most aspect of both lateral corticospinal tracts. Leave the peripheral white matter and dorsal columns intact.",
    explanation: "Central cord syndrome is the most common incomplete spinal cord injury, typically caused by hyperextension of a stenotic cervical spine. The central lesion damages: (1) the ventral white commissure (bilateral cape-like loss of pain and temperature), (2) lower motor neurons in the cervical ventral horns (flaccid arm weakness), and (3) the medial portion of the lateral corticospinal tracts. Because corticospinal fibers are somatotopically laminated with cervical fibers located medially and sacral fibers laterally, the arms are severely paretic while the legs are largely spared."
  },
  {
    id: 22,
    source: "Clinical Case 22",
    title: "Midbrain Claude Syndrome (Tegmental PCA Infarct)",
    category: "Midbrain",
    vignette: "A 67-year-old man presents with double vision and severe tremor of his left arm. Exam shows:\n1. Ptosis of the right upper eyelid, dilated right pupil, and right eye deviated down and out (right CN III palsy).\n2. Right eye cannot adduct, elevate, or depress.\n3. Severe intention tremor and dysmetria of the LEFT arm and leg.\n4. Muscle power is 5/5 throughout; no spasticity or Babinski sign.\n5. Sensation is intact throughout.",
    findings: [
      { text: "Right Eye: Complete CN III oculomotor palsy", type: "deficit" },
      { text: "Left Arm & Leg: Severe intention tremor, dysmetria, ataxia", type: "deficit" },
      { text: "Motor Power: 5/5 intact throughout (no hemiplegia)", type: "normal" },
      { text: "Sensory Exam: Normal", type: "normal" }
    ],
    correctLevel: "midbrain",
    correctLevelDetail: "Right Midbrain Tegmentum (Red Nucleus & CN III)",
    correctSide: "right",
    correctStructures: ["right_red_nucleus", "right_oculomotor_nucleus"],
    correctStructureNames: "Right Red Nucleus & Right CN III Fascicles",
    clinicalSyndrome: "Claude Syndrome (Midbrain Tegmental Syndrome)",
    whyOptions: [
      "Infarction of PCA branches to the central midbrain tegmentum damages exiting ipsilateral CN III rootlets (right oculomotor palsy) and the adjacent red nucleus/cerebellothalamic fibers (contralateral left cerebellar ataxia/tremor) while sparing the crus cerebri.",
      "Damage to the substantia nigra causes resting parkinsonian tremor and contralateral miosis.",
      "Medial longitudinal fasciculus transection produces isolated intention tremor of the arm.",
      "The corticospinal tract is damaged in the periaqueductal gray, causing intention tremor."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Midbrain 'The Pig (from the rear)' (Slide 7): Crus cerebri is at bottom (Weber). Red nucleus is in the central tegmentum (Claude). Weber = CN III + hemiplegia. Claude = CN III + contralateral ataxia/tremor (red nucleus)!",
    drawingInstruction: "Draw the Midbrain 'Pig' (Slide 7/14). On the RIGHT side, shade the circular Red Nucleus in the tegmentum and the passing rootlets of CN III. Keep the ventral crus cerebri clear.",
    explanation: "Claude syndrome results from a focal lesion in the dorsal midbrain tegmentum. It damages the exiting fascicles of the oculomotor nerve (CN III), causing an ipsilateral 3rd nerve palsy, along with the adjacent Red Nucleus and crossing superior cerebellar peduncle (dentatorubrothalamic tract). Because cerebellothalamic fibers have already crossed once from the opposite cerebellum, damaging them prior to thalamic relay causes ataxia and intention tremor on the CONTRALATERAL (left) side."
  },
  {
    id: 23,
    source: "Clinical Case 23",
    title: "Midbrain Benedikt Syndrome (Crus Cerebri + Red Nucleus)",
    category: "Midbrain",
    vignette: "A 70-year-old woman presents with stroke. Exam shows:\n1. Complete right oculomotor (CN III) palsy with ptosis and dilated non-reactive right pupil.\n2. Dense spastic hemiparesis of the left arm and leg.\n3. Left arm exhibits coarse choreoathetoid movements and violent resting and intention tremors.\n4. Vibration and proprioception are absent in the left arm and leg.",
    findings: [
      { text: "Right Eye: Complete CN III palsy", type: "deficit" },
      { text: "Left Body Motor: Spastic hemiparesis (3/5 power)", type: "deficit" },
      { text: "Left Arm Involuntary Movements: Choreoathetosis and coarse tremor", type: "deficit" },
      { text: "Left Body Vibration & Touch: ABSENT", type: "deficit" }
    ],
    correctLevel: "midbrain",
    correctLevelDetail: "Right Ventral & Tegmental Midbrain",
    correctSide: "right",
    correctStructures: ["right_crus_cerebri", "right_red_nucleus", "right_medial_lemniscus", "right_oculomotor_nucleus"],
    correctStructureNames: "Right Crus Cerebri, Red Nucleus, Medial Lemniscus, & CN III",
    clinicalSyndrome: "Benedikt Syndrome (Paramedian Midbrain Syndrome)",
    whyOptions: [
      "A large paramedian midbrain lesion combines Weber and Claude: damages CN III, crus cerebri (contralateral hemiparesis), red nucleus/substantia nigra (contralateral involuntary chorea/tremor), and medial lemniscus (contralateral proprioception loss).",
      "Infarction of the anterior inferior cerebellar artery damages the oculomotor nucleus in the medulla.",
      "The spinothalamic tract is damaged in the crus cerebri, causing choreoathetosis.",
      "Destruction of the abducens nerve in the midbrain causes oculomotor palsy and hemiparesis."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Midbrain syndrome continuum: Weber = Crus cerebri + CN III. Claude = Red nucleus + CN III. Benedikt = BOTH crus cerebri AND red nucleus + CN III (+ medial lemniscus)!",
    drawingInstruction: "Draw the Midbrain 'Pig' (Slide 7/14). On the RIGHT side, shade the Crus Cerebri, the circular Red Nucleus, the passing Medial Lemniscus, and exiting CN III rootlets.",
    explanation: "Benedikt syndrome encompasses both the ventral and tegmental structures of the midbrain. The lesion damages: (1) exiting CN III fibers (ipsilateral 3rd nerve palsy), (2) corticospinal tract in crus cerebri (contralateral hemiparesis), (3) red nucleus, cerebellothalamic fibers, and substantia nigra (contralateral tremor, choreoathetosis, and ataxia), and (4) medial lemniscus (contralateral loss of touch and proprioception)."
  },
  {
    id: 24,
    source: "Clinical Case 24",
    title: "Dorsal Midbrain Parinaud Syndrome (Pinealoma Compression)",
    category: "Midbrain",
    vignette: "A 16-year-old boy presents with progressive headaches and double vision. Exam reveals:\n1. Inability to direct gaze upward (paralysis of upward gaze).\n2. Pupils are large and do not react to direct or consensual light, but constrict briskly during convergence (light-near dissociation).\n3. Attempted upward gaze produces convergence-retraction nystagmus.\n4. Bilateral eyelid retraction (Collier sign).\n5. Body motor and sensory testing are completely normal.",
    findings: [
      { text: "Upward Gaze: Completely paralyzed", type: "deficit" },
      { text: "Pupillary Light Reflex: Non-reactive to light, brisk on near target (Light-near dissociation)", type: "deficit" },
      { text: "Attempted Upward Gaze: Convergence-retraction nystagmus", type: "deficit" },
      { text: "Body Motor & Sensory: Normal bilaterally", type: "normal" }
    ],
    correctLevel: "midbrain",
    correctLevelDetail: "Dorsal Midbrain (Pretectal Area & Superior Colliculi)",
    correctSide: "midline",
    correctStructures: ["left_als"], // representing dorsal tectum
    correctStructureNames: "Dorsal Midbrain Tectum / Pretectal Area & Posterior Commissure",
    clinicalSyndrome: "Parinaud Syndrome (Dorsal Midbrain / Pretectal Syndrome)",
    whyOptions: [
      "Extrinsic compression of the dorsal midbrain tectum (e.g., pineal tumor) compresses the rostral interstitial nucleus of MLF, posterior commissure, and pretectal nuclei, abolishing vertical upward gaze and pupillary light reflexes while sparing tegmental sensory tracts.",
      "The medial lemniscus is compressed against the cerebral aqueduct, causing upward gaze palsy.",
      "The abducens nucleus in the midbrain tectum fails to fire during upward saccades.",
      "Anterior spinal artery thrombosis damages the superior colliculus."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Midbrain 'The Pig (from the rear)' (Slide 7): 'Now put 2 bumps at the top for the colliculi. Draw a small circle near the top for the cerebral aqueduct and outline the periaqueductal gray.' Dorsal compression of these top bumps = Parinaud!",
    drawingInstruction: "Draw the Midbrain 'Pig' (Slide 7). Shade the dorsal midline tectum: the bilateral Superior Colliculi, pretectal area, and dorsal periaqueductal gray surrounding the cerebral aqueduct.",
    explanation: "Parinaud (pretectal/dorsal midbrain) syndrome is classic for pineal gland tumors compressing the posterior commissure and pretectal area. The clinical tetrad includes: (1) upward gaze paralysis due to pressure on the rostral interstitial nucleus of the MLF (riMLF), (2) pseudo-Argyll Robertson pupils (light-near dissociation) from interruption of afferent light reflex fibers traversing the posterior commissure to the Edinger-Westphal nuclei, (3) convergence-retraction nystagmus on attempted upgaze, and (4) bilateral eyelid retraction (Collier sign)."
  },
  {
    id: 25,
    source: "Clinical Case 25",
    title: "Thalamic Pain Syndrome (Déjerine-Roussy Syndrome)",
    category: "Thalamus",
    vignette: "A 65-year-old man suffered a right thalamic lacunar stroke 6 months ago. His initial complete left-sided numbness has evolved into severe, intractable, agonizing burning and crushing pain across the entire left body and face. Exam shows:\n1. Light stroking with a cotton wisp across his left cheek or hand produces excruciating burning pain (allodynia).\n2. Pinprick threshold on the left is elevated, but once felt, the pain is abnormally intense and prolonged (hyperpathia).\n3. Touch, vibration, and proprioception are moderately impaired over the left body and face.\n4. Strength is normal.",
    findings: [
      { text: "Left Body & Face: Severe spontaneous burning pain (Thalamic Pain)", type: "deficit" },
      { text: "Tactile Allodynia: Light cotton touch triggers excruciating pain on left", type: "deficit" },
      { text: "Hyperpathia: Heightened, persistent discomfort to noxious stimuli on left", type: "deficit" },
      { text: "Left Body & Face Vibration/Proprioception: Reduced", type: "deficit" }
    ],
    correctLevel: "thalamus",
    correctLevelDetail: "Right Thalamus (VPL/VPM Complex)",
    correctSide: "right",
    correctStructures: ["right_vpl", "right_vpm"],
    correctStructureNames: "Right Ventral Posterior Thalamus (VPL & VPM)",
    clinicalSyndrome: "Déjerine-Roussy Syndrome (Central Post-Stroke Pain)",
    whyOptions: [
      "Infarction of the thalamic VPL/VPM complex causes loss of normal sensory gating and denervation hypersensitivity in surviving spinothalamic-cortical projections, leading to severe burning central neuropathic pain and allodynia on the contralateral side.",
      "The primary somatosensory cortex regenerates aberrantly into the trigeminal ganglion.",
      "Damage to the medial lemniscus causes peripheral nociceptors to fire spontaneously.",
      "The anterolateral system is damaged in the spinal cord, producing contralateral allodynia."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Thalamic lesion rule: VPL (body) + VPM (face) are adjacent in the ventral posterior thalamus. Initial contralateral hemisensory loss evolving into intractable burning allodynia = Déjerine-Roussy syndrome!",
    drawingInstruction: "Draw the thalamus cross-section. On the RIGHT side, shade the VPL and VPM nuclei in the ventrolateral/posterior thalamic nuclear group.",
    explanation: "Déjerine-Roussy syndrome (thalamic pain syndrome) is a central neuropathic pain condition that follows a stroke in the posterior thalamus (VPL/VPM, supplied by thalamogeniculate branches of PCA). Destruction of sensory relay neurons leads to disinhibition of medial pain pathways, thalamic plasticity, and hypersensitivity. Patients experience severe spontaneous dysesthesias, allodynia (pain from normally non-painful tactile stimuli), and hyperpathia strictly on the contralateral (left) side."
  },
  {
    id: 26,
    source: "Clinical Case 26",
    title: "Posterior Limb of Internal Capsule Stroke (Pure Motor Hemiparesis)",
    category: "Thalamus",
    vignette: "A 69-year-old diabetic woman presents with sudden onset of right-sided weakness. Exam reveals:\n1. Severe weakness (2/5 power) equally involving the right face, right arm, and right leg.\n2. Hyperreflexia, sustained clonus, and Babinski sign on the right.\n3. Sensation (fine touch, vibration, position, pinprick, temperature) is COMPLETELY NORMAL over the entire body and face.\n4. Language and visual fields are completely intact.",
    findings: [
      { text: "Right Face, Arm, Leg Power: Dense 2/5 hemiparesis (proportional)", type: "deficit" },
      { text: "Right Reflexes: Hyperreflexia, clonus, positive Babinski", type: "deficit" },
      { text: "Sensory Examination: 100% normal throughout face and body", type: "normal" },
      { text: "Vision & Speech: Completely normal", type: "normal" }
    ],
    correctLevel: "thalamus",
    correctLevelDetail: "Left Internal Capsule (Posterior Limb, Anterior 2/3)",
    correctSide: "left",
    correctStructures: ["left_internal_capsule_posterior_limb"],
    correctStructureNames: "Left Posterior Limb of Internal Capsule (Corticospinal Tract)",
    clinicalSyndrome: "Pure Motor Hemiparesis (Lacunar Stroke)",
    whyOptions: [
      "A lacunar infarct in the anterior two-thirds of the posterior limb of the internal capsule selectively severs descending corticospinal/corticobulbar fibers, causing dense contralateral hemiparesis while sparing sensory fibers traveling in the posterior third.",
      "The thalamic VPL nucleus is infarcted, selectively causing motor weakness.",
      "The medial lemniscus travels through the genu of the internal capsule and was spared.",
      "The precentral gyrus is supplied by the posterior cerebral artery."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Internal capsule organization: Anterior limb (frontopontine), Genu (corticobulbar), Posterior limb (anterior 2/3 = corticospinal motor; posterior 1/3 = thalamocortical sensory). Pure motor = anterior 2/3 of posterior limb!",
    drawingInstruction: "Draw the horizontal/coronal internal capsule diagram. On the LEFT side, shade the posterior limb between the thalamus and lentiform nucleus.",
    explanation: "Pure motor hemiparesis is the most common lacunar stroke syndrome, typically caused by lipohyalinosis or microatheroma in the lenticulostriate branches of the MCA. The posterior limb of the internal capsule carries tightly packed descending corticospinal motor fibers in its anterior two-thirds. A small 1-cm lacunar infarct here causes dense, proportional hemiparesis of the contralateral (right) face, arm, and leg without any sensory, visual, or cognitive deficit."
  },
  {
    id: 27,
    source: "Clinical Case 27",
    title: "Anterior Cerebral Artery (ACA) Stroke (Leg-Dominant Deficit)",
    category: "Cortex",
    vignette: "A 74-year-old man develops weakness and numbness in his right leg. Exam reveals:\n1. Severe weakness (1/5) in the right leg and foot, but right arm and face motor strength are completely normal (5/5).\n2. Loss of joint position sense, two-point discrimination, and vibratory sense in the right foot and leg.\n3. Pinprick in the right foot is felt as dull and poorly localized.\n4. Sensation in the right arm, right face, and entire left side is completely normal.",
    findings: [
      { text: "Right Leg & Foot Motor Power: 1/5 (Severe paralysis)", type: "deficit" },
      { text: "Right Arm & Face Motor Power: 5/5 (Completely normal)", type: "normal" },
      { text: "Right Leg/Foot Touch, Vibration, Proprioception: ABSENT", type: "deficit" },
      { text: "Right Arm & Face Sensation: Completely normal", type: "normal" }
    ],
    correctLevel: "cortex",
    correctLevelDetail: "Left Paracentral Lobule (ACA Territory)",
    correctSide: "left",
    correctStructures: ["left_paracentral_lobule"],
    correctStructureNames: "Left Paracentral Lobule (Primary Motor & Sensory Cortex, Leg Representation)",
    clinicalSyndrome: "Anterior Cerebral Artery (ACA) Infarction",
    whyOptions: [
      "The ACA supplies the medial surface of the frontal and parietal lobes (paracentral lobule), which somatotopically represents the contralateral lower extremity for both motor (anterior paracentral) and sensory (posterior paracentral) functions.",
      "The MCA exclusively supplies the lower extremity homunculus in the longitudinal fissure.",
      "Damage to the fasciculus gracilis causes isolated cortical leg hemiparesis.",
      "The internal capsule posterior limb separates the leg motor fibers into the anterior cerebral artery."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Sensory homunculus rule: The leg and foot are mapped onto the MEDIAL bank of the cerebral hemisphere inside the longitudinal fissure (Paracentral Lobule, ACA territory). Face and hand are on the lateral convexity (MCA territory)!",
    drawingInstruction: "Draw the cerebral cortex coronal section. In the LEFT hemisphere, shade the paracentral lobule along the medial wall of the longitudinal fissure. The lateral cortex (convexity) is spared.",
    explanation: "The anterior cerebral artery (ACA) irrigates the medial aspect of the cerebral hemisphere from the frontal pole to the parieto-occipital sulcus. This includes the paracentral lobule, which contains the motor and sensory representations for the contralateral lower extremity and perineum. An infarction of the left ACA causes contralateral (right) lower-extremity-predominant spastic paralysis and cortical sensory loss (astereognosis, impaired proprioception and vibration), while sparing the arm and face (MCA territory)."
  },
  {
    id: 28,
    source: "Clinical Case 28",
    title: "Parietal Lobe Sensory Extinction & Hemi-Spatial Neglect",
    category: "Cortex",
    vignette: "A 68-year-old woman is evaluated after a right hemispheric stroke. When her left hand or right hand is touched individually, she identifies the stimulus accurately. However, when both hands are touched simultaneously, she ONLY feels the touch on her RIGHT hand (sensory extinction to double simultaneous stimulation). Exam also shows:\n1. She ignores food on the left side of her plate and leaves the left side of her face unwashed.\n2. Primary sensation (pinprick, vibration) is intact when tested unilaterally.\n3. Left visual field extinction on double visual stimulation.",
    findings: [
      { text: "Unilateral Sensory Testing: Intact on both sides", type: "normal" },
      { text: "Double Simultaneous Tactile Stimulation: Ignores left stimulus (Sensory Extinction)", type: "deficit" },
      { text: "Spatial Behavior: Severe left hemi-spatial neglect", type: "deficit" },
      { text: "Motor Strength: Normal", type: "normal" }
    ],
    correctLevel: "cortex",
    correctLevelDetail: "Right Posterior Parietal Association Cortex (Area 5, 7, 39, 40)",
    correctSide: "right",
    correctStructures: ["right_parietal_association"],
    correctStructureNames: "Right Posterior Parietal Association Cortex",
    clinicalSyndrome: "Hemi-Spatial Neglect & Tactile Extinction",
    whyOptions: [
      "The right posterior parietal association cortex mediates bilateral spatial attention; lesions preserve primary sensation tested in isolation but impair attentional allocation during bilateral simultaneous stimulation (sensory extinction) and cause left spatial neglect.",
      "The left medial lemniscus suppresses contralateral touch during simultaneous stimulation.",
      "A lesion of the optic chiasm produces tactile extinction on the contralateral arm.",
      "The ventral posterolateral nucleus of the thalamus only activates during unilateral touch."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Cortical higher-order sensory testing: Primary sensory cortex (postcentral gyrus) loss = astereognosis, loss of 2-point. Posterior parietal association cortex loss = sensory EXTINCTION to double simultaneous stimulation and hemispatial neglect!",
    drawingInstruction: "Draw the lateral cerebral hemisphere. In the RIGHT hemisphere, shade the posterior parietal cortex (inferior parietal lobule: supramarginal and angular gyri) posterior to the postcentral gyrus.",
    explanation: "Tactile sensory extinction (inattention) is a hallmark of non-dominant (usually right) parietal association cortex damage. Primary thalamocortical sensory projections to area 3, 1, 2 are intact, so single stimuli on either side are perceived normally. However, during simultaneous bilateral stimulation, the damaged hemisphere cannot compete for attentional focus, resulting in extinction of the contralateral (left) stimulus."
  },
  {
    id: 29,
    source: "Clinical Case 29",
    title: "Gerstmann Syndrome (Dominant Angular Gyrus Lesion)",
    category: "Cortex",
    vignette: "A 54-year-old schoolteacher suffers an ischemic stroke. On neurological testing:\n1. She cannot identify, name, or distinguish her own fingers or the examiner's fingers (finger agnosia).\n2. She cannot distinguish right from left on herself or the examiner (right-left disorientation).\n3. She cannot perform simple arithmetic calculations like 7 + 5 or 12 - 4 (acalculia).\n4. She cannot write sentences, although her reading and spoken language are fluent (agraphia without alexia).\n5. Primary sensation and motor power are intact.",
    findings: [
      { text: "Finger Identification: Cannot distinguish or name fingers (Finger Agnosia)", type: "deficit" },
      { text: "Orientation: Cannot distinguish right from left (Right-Left Disorientation)", type: "deficit" },
      { text: "Calculation: Severe inability to calculate (Acalculia)", type: "deficit" },
      { text: "Writing: Unable to write coherent words (Agraphia)", type: "deficit" },
      { text: "Primary Touch & Motor: Completely intact", type: "normal" }
    ],
    correctLevel: "cortex",
    correctLevelDetail: "Left (Dominant) Inferior Parietal Lobule (Angular Gyrus)",
    correctSide: "left",
    correctStructures: ["left_parietal_association"],
    correctStructureNames: "Left Angular Gyrus (Brodmann Area 39)",
    clinicalSyndrome: "Gerstmann Syndrome",
    whyOptions: [
      "The dominant (left) angular gyrus is essential for spatial-symbolic integration and body schema; a focal lesion produces the classic tetrad of finger agnosia, right-left disorientation, acalculia, and agraphia without primary sensory loss.",
      "The postcentral gyrus is responsible for mathematical calculations and handwriting.",
      "The fasciculus cuneatus decussates in the angular gyrus, causing finger agnosia.",
      "Right thalamic VPM infarction selectively abolishes right-left orientation."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Gerstmann Syndrome Tetrad: (1) Finger agnosia, (2) Right-left disorientation, (3) Acalculia, (4) Agraphia. Localizes strictly to the DOMINANT (usually Left) ANGULAR GYRUS (Brodmann area 39)!",
    drawingInstruction: "Draw the lateral view of the cerebral cortex. In the LEFT hemisphere, shade the Angular Gyrus (Brodmann area 39) in the posterior inferior parietal lobule.",
    explanation: "Gerstmann syndrome is a classic neurobehavioral syndrome resulting from damage to the dominant (usually left) inferior parietal lobule, specifically the angular gyrus (Brodmann area 39, MCA territory). The syndrome consists of four specific cognitive deficits: finger agnosia, right-left confusion, dyscalculia/acalculia, and dysgraphia/agraphia. Primary motor, somatosensory, and speech comprehension faculties remain preserved."
  },
  {
    id: 30,
    source: "Clinical Case 30",
    title: "Caudal Medullary Infarct of Nucleus Cuneatus (Isolated Arm Proprioception Loss)",
    category: "Medulla",
    vignette: "A 51-year-old man presents with sudden inability to use his right arm in the dark. Exam reveals:\n1. Touch, vibratory, and joint position sense are ABSENT in the entire right arm and hand.\n2. Touch, vibratory, and joint position sense are completely normal in both legs, the left arm, and the face.\n3. Pinprick and temperature sensation are normal throughout the entire body and face.\n4. Motor power is normal (5/5).",
    findings: [
      { text: "Right Arm & Hand Touch, Vibration, Proprioception: ABSENT", type: "deficit" },
      { text: "Right Leg Sensation: Completely NORMAL", type: "normal" },
      { text: "Left Body & Face Sensation: Completely NORMAL", type: "normal" },
      { text: "Pain and Temperature: Normal everywhere", type: "normal" }
    ],
    correctLevel: "caudal_medulla",
    correctLevelDetail: "Right Caudal Medulla (Dorsal Column Nuclei)",
    correctSide: "right",
    correctStructures: ["right_nucleus_cuneatus"],
    correctStructureNames: "Right Nucleus Cuneatus (Caudal Medulla)",
    clinicalSyndrome: "Isolated Nucleus Cuneatus Infarction",
    whyOptions: [
      "In the caudal medulla prior to decussation of internal arcuate fibers, primary fibers from the arm terminate in the ipsilateral Nucleus Cuneatus; a right lesion abolishes ipsilateral right arm proprioception while sparing nucleus gracilis (legs) and ALS.",
      "The medial lemniscus decussates in the thoracic cord, so a lesion in the medulla affects the same-side arm.",
      "Nucleus cuneatus carries pain and temperature exclusively from the contralateral leg.",
      "The spinal trigeminal nucleus decussates into nucleus cuneatus in the caudal medulla."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Caudal Medulla Slide 3/10: 'Add 3 circle neighbors on each side: Nucleus gracilis (medial), Nucleus cuneatus (middle), Spinal trigeminal tract/nuc (lateral)'. Nucleus cuneatus = IPSILATERAL ARM touch/proprioception!",
    drawingInstruction: "Draw the Caudal Medulla (Slide 3/10: circle with central canal 1/3 from top). On the RIGHT dorsal surface, shade the MIDDLE circle of the 3 circle neighbors (Right Nucleus Cuneatus).",
    explanation: "Primary sensory axons for touch, vibration, and conscious proprioception from the upper body (T6 and above) ascend in the fasciculus cuneatus and synapse in the Nucleus Cuneatus in the caudal medulla. Because the internal arcuate fibers have NOT yet crossed at this caudal level, a lesion of the right nucleus cuneatus produces an IPSILATERAL (right) loss of touch, vibration, and proprioception restricted strictly to the arm and hand, sparing the more medially placed nucleus gracilis (leg) and the lateral ALS."
  },
  {
    id: 31,
    source: "Clinical Case 31",
    title: "Rostral Pons Tegmental Stroke with Crossed Body & Face Pain Loss",
    category: "Pons",
    vignette: "A 63-year-old man presents after a stroke. Exam shows:\n1. Complete loss of pinprick and temperature sensation on the LEFT face.\n2. Complete loss of pinprick and temperature sensation on the entire LEFT body (neck to toes).\n3. Touch, vibration, and proprioception are completely normal on both face and body.\n4. Motor strength, reflexes, and coordination are normal.",
    findings: [
      { text: "Left Face Pinprick & Temp: ABSENT", type: "deficit" },
      { text: "Left Body Pinprick & Temp: ABSENT", type: "deficit" },
      { text: "Touch & Vibration: Normal everywhere", type: "normal" },
      { text: "Motor & Reflexes: Normal", type: "normal" }
    ],
    correctLevel: "rostral_pons",
    correctLevelDetail: "Right Rostral Pons (Lateral Tegmentum)",
    correctSide: "right",
    correctStructures: ["right_als", "right_vtt"],
    correctStructureNames: "Right Spinothalamic Tract (ALS) & Right VTT",
    clinicalSyndrome: "Rostral Pontine Tegmental Infarct (Snowman Level)",
    whyOptions: [
      "In the rostral pons 'Snowman', VTT and ALS lie directly adjacent ('Hi neighbor!') in the lateral tegmentum carrying crossed face and body pain/temp; a right lesion causes complete contralateral (left) pain/temp loss on both face and body.",
      "The medial lemniscus merges with the ALS in the rostral pons to carry pain from the face.",
      "The lesion is in the left medulla because facial pain fibers decussate in the midbrain.",
      "The spinothalamic tract supplies the ipsilateral face and contralateral body in the rostral pons."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Rostral Pons 'The Snowman!' (Slide 6/13): Upper oval tegmentum has Medial Lemniscus, VTT ('Hi neighbor!'), and ALS ('Hi neighbor!'). Right lateral lesion knocks out Right VTT + Right ALS = Left Face + Left Body pain/temp loss!",
    drawingInstruction: "Draw the Rostral Pons 'Snowman' (Slide 6/13). On the RIGHT side of the upper oval tegmentum, shade the adjacent lateral pair: Right VTT and Right ALS. Leave the medial lemniscus untouched.",
    explanation: "At the rostral pons level ('The Snowman'), both pain pathways have decussated: the ALS (carrying crossed body pain and temperature) and the Ventral Trigeminothalamic Tract (VTT, carrying crossed face pain and temperature from the contralateral spinal V nucleus). They ascend together in the lateral tegmentum. A lesion in the right lateral tegmentum wipes out both tracts, producing contralateral loss of pain and temperature on both the left face and left body, while sparing the more medially placed medial lemniscus."
  },
  {
    id: 32,
    source: "Clinical Case 32",
    title: "Midbrain Lateral Sensory Crescent Lesion",
    category: "Midbrain",
    vignette: "A 49-year-old woman develops a focal cavernoma in the lateral midbrain tegmentum. Exam shows:\n1. Loss of all sensory modalities (touch, vibration, proprioception, pinprick, temperature) over the entire LEFT body.\n2. Loss of all sensory modalities over the entire LEFT face.\n3. Motor power is normal (5/5); no ptosis, eye movements are completely normal.",
    findings: [
      { text: "Left Body ALL Sensation: ABSENT", type: "deficit" },
      { text: "Left Face ALL Sensation: ABSENT", type: "deficit" },
      { text: "Motor Power: 5/5 intact throughout", type: "normal" },
      { text: "Cranial Nerves (Eye Movements): Normal (no CN III palsy)", type: "normal" }
    ],
    correctLevel: "midbrain",
    correctLevelDetail: "Right Midbrain Tegmentum (Lateral Sensory Ribbon)",
    correctSide: "right",
    correctStructures: ["right_medial_lemniscus", "right_vtt", "right_als"],
    correctStructureNames: "Right Sensory Crescent (Medial Lemniscus, VTT, and ALS)",
    clinicalSyndrome: "Lateral Midbrain Tegmental Syndrome",
    whyOptions: [
      "In the midbrain tegmentum, the Medial Lemniscus, VTT, and ALS form a compact continuous curved sensory ribbon laterally; a focal lesion destroys all three crossed tracts, causing complete contralateral hemi-sensory loss while sparing medial crus cerebri and CN III.",
      "The crus cerebri carries all somatosensory fibers from the contralateral body and face.",
      "The thalamic reticular nucleus decussates in the midbrain tegmentum.",
      "The red nucleus is the primary relay for facial touch and temperature."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Midbrain 'The Pig (from the rear)' (Slide 7/14): Sensory pathways form a ribbon in the lateral tegmentum curving around the red nucleus. From medial to lateral: ML $\\rightarrow$ VTT $\\rightarrow$ ALS. Knocking out all 3 destroys all sensation on contralateral side!",
    drawingInstruction: "Draw the Midbrain 'Pig' (Slide 7/14). In the RIGHT lateral tegmentum, shade the entire continuous crescent of Medial Lemniscus, VTT, and ALS. Crus cerebri and red nucleus are spared.",
    explanation: "In the midbrain, the three principal ascending sensory tracts—Medial Lemniscus (body touch/proprioception), Ventral Trigeminothalamic Tract (face touch and pain/temp), and Anterolateral System (body pain/temp)—are grouped tightly together into a single lateral sensory ribbon in the tegmentum. A focal lesion in this right lateral sensory ribbon knocks out all three pathways simultaneously, producing a complete hemisensory loss across all modalities on the contralateral (left) face and body."
  },
  {
    id: 33,
    source: "Clinical Case 33",
    title: "Cervical Spinal Cord Hemisection at C4 (Brown-Séquard with Arm & Leg)",
    category: "Spinal Cord",
    vignette: "A 32-year-old man is stabbed in the back of the neck on the right side. Exam reveals:\n1. Tactile, vibratory, and proprioceptive sensation are ABSENT over the entire RIGHT arm, trunk, and leg.\n2. Spastic paralysis (1/5 power) of the entire RIGHT arm and leg with hyperreflexia and Babinski sign on the right.\n3. Pinprick and temperature sensation are ABSENT on the LEFT side of the body from the level of the clavicle/upper chest (C6) down.\n4. Pinprick is normal on the right body.",
    findings: [
      { text: "Right Arm & Leg Touch/Vibration/Proprioception: ABSENT", type: "deficit" },
      { text: "Right Arm & Leg Motor Power: Spastic hemiplegia (1/5)", type: "deficit" },
      { text: "Left Body Pinprick & Temp: ABSENT from C6 downward", type: "deficit" },
      { text: "Right Body Pinprick: NORMAL", type: "normal" }
    ],
    correctLevel: "spinal_cord",
    correctLevelDetail: "Cervical Spinal Cord (C4), Right Hemicord",
    correctSide: "right",
    correctStructures: ["right_fasciculus_gracilis", "right_fasciculus_cuneatus", "right_als", "right_lateral_corticospinal"],
    correctStructureNames: "Right Hemicord at C4 (Gracilis, Cuneatus, ALS, Corticospinal)",
    clinicalSyndrome: "Cervical Brown-Séquard Syndrome",
    whyOptions: [
      "A right hemicord lesion at C4 severs uncrossed dorsal columns (ipsilateral arm/leg touch/proprioception loss), uncrossed lateral corticospinal tract (ipsilateral hemiplegia), and crossed ALS (contralateral pain/temp loss starting 2 segments below: C6 deficit = C4 lesion).",
      "The spinothalamic tract decussates in the midbrain, producing contralateral arm weakness.",
      "The ventral white commissure is damaged on the left side at C6.",
      "Fasciculus gracilis carries touch from the ipsilateral arm, while cuneatus carries touch from the leg."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Cervical cord level includes BOTH Fasciculus Gracilis (medial, leg) AND Fasciculus Cuneatus (lateral, arm). Hemicord lesion knocks out both dorsal columns + corticospinal + ALS on that side!",
    drawingInstruction: "Draw the Spinal Cord oval (Slide 2/9) at C4. Shade the entire RIGHT hemicord: Right Fasciculus Gracilis, Right Fasciculus Cuneatus, Right Lateral Corticospinal Tract, and Right ALS.",
    explanation: "At the C4 cervical level, the dorsal column contains both the fasciculus gracilis (carrying lower limb and trunk afferents) and the fasciculus cuneatus (carrying upper limb afferents). A right hemisection destroys the uncrossed dorsal columns (right arm and leg tactile/proprioception loss), the uncrossed lateral corticospinal tract (right spastic hemiplegia), and the crossed ALS. Since ALS fibers decussate 1-2 segments below, the contralateral (left) pain and temperature deficit begins at C6 (2 segments below C4)."
  },
  {
    id: 34,
    source: "Clinical Case 34",
    title: "Medial Rostral Medullary Stroke (Bilateral Pyramid Infarction)",
    category: "Medulla",
    vignette: "A 75-year-old man with severe vertebral basilar atherosclerotic disease develops sudden quadriparesis. Exam shows:\n1. Flaccid paralysis of all four extremities (0/5 in arms and legs) with bilateral Babinski signs.\n2. Vibratory and proprioceptive sensation are normal in all four limbs and face.\n3. Pinprick and temperature sensation are normal throughout.\n4. Bilateral paralysis and fasciculations of the tongue.",
    findings: [
      { text: "All 4 Limbs Motor Power: Flaccid quadriparesis (0/5)", type: "deficit" },
      { text: "Bilateral Babinski: Present", type: "deficit" },
      { text: "Tongue: Bilateral flaccid paralysis & atrophy (CN XII)", type: "deficit" },
      { text: "Sensory Exam: 100% normal throughout", type: "normal" }
    ],
    correctLevel: "rostral_medulla",
    correctLevelDetail: "Rostral Medulla (Bilateral Pyramids & CN XII)",
    correctSide: "bilateral",
    correctStructures: ["left_pyramid", "right_pyramid", "left_hypoglossal_nucleus", "right_hypoglossal_nucleus"],
    correctStructureNames: "Bilateral Pyramids & Hypoglossal (CN XII) Nuclei",
    clinicalSyndrome: "Bilateral Medial Medullary Syndrome / Cruciate Paralysis",
    whyOptions: [
      "Anterior spinal artery occlusion at the medullary junction bilaterally infarcts the ventral pyramids (corticospinal tracts) and hypoglossal nerve roots, causing quadriparesis and bilateral tongue paralysis while sparing dorsal sensory tracts.",
      "The medial lemniscus carries all motor fibers to the four limbs.",
      "Bilateral ALS infarction causes quadriparesis and hypoglossal atrophy.",
      "The basilar pons was infarcted, selectively causing tongue deviation."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Rostral Medulla shape (Slide 4): 'Draw 2 triangles down at the bottom (pyramids)'. The pyramids sit on either side of the ventral median fissure. Bilateral infarction knocks out motor power to all 4 limbs while sparing tegmental sensory tracts!",
    drawingInstruction: "Draw the Rostral Medulla (Slide 4). Shade BOTH pyramids (the two basal triangles) and the dorsomedial hypoglossal nuclei. The medial lemnisci and olives are spared.",
    explanation: "The anterior spinal artery originates from the convergence of both vertebral arteries and supplies the ventromedial territory of the medulla. Occlusion of the anterior spinal artery at the midline causes bilateral medial medullary infarction, destroying both pyramids (bilateral descending corticospinal tracts) and hypoglossal nerves. This causes acute quadriplegia and bilateral flaccid tongue paralysis without sensory loss."
  },
  {
    id: 35,
    source: "Clinical Case 35",
    title: "Conus Medullaris Syndrome vs Cauda Equina",
    category: "Spinal Cord",
    vignette: "A 45-year-old construction worker with a large L1 burst fracture presents with sudden bowel and bladder incontinence. Exam reveals:\n1. Severe, symmetrical 'saddle anesthesia' (numbness over perineum, buttocks, anus, S3-S5 dermatomes bilaterally).\n2. Early, severe urinary retention with overflow incontinence and fecal incontinence with loss of anal sphincter tone.\n3. Mild, symmetrical weakness of the lower extremities (4/5 power).\n4. Bilateral Achilles reflexes are absent, but patellar reflexes are preserved.\n5. Bilateral Babinski signs are present.",
    findings: [
      { text: "Perineum/Saddle Sensation: Symmetrical ABSENT sensation (S3-S5)", type: "deficit" },
      { text: "Sphincter Function: Severe bowel/bladder incontinence & flaccid anal sphincter", type: "deficit" },
      { text: "Motor Power: Mild symmetrical leg weakness (4/5)", type: "deficit" },
      { text: "Babinski Sign: Bilateral positive Babinski (Upper Motor Neuron sign)", type: "deficit" }
    ],
    correctLevel: "spinal_cord",
    correctLevelDetail: "Conus Medullaris (T12-L1 Vertebral Level / S1-S5 Cord Segments)",
    correctSide: "bilateral",
    correctStructures: ["left_als", "right_als", "ventral_white_commissure"],
    correctStructureNames: "Conus Medullaris (Sacral Segments S1-S5 & Coccygeal Cord)",
    clinicalSyndrome: "Conus Medullaris Syndrome",
    whyOptions: [
      "The conus medullaris represents the terminal tapered end of the spinal cord (S1-S5); injury causes sudden, symmetrical saddle anesthesia, early severe sphincter paralysis, and mixed UMN/LMN signs (Babinski present), distinguishing it from cauda equina.",
      "Cauda equina syndrome is an upper motor neuron lesion with hyperreflexia.",
      "The conus medullaris is located at the L5-S1 vertebral junction in adults.",
      "Dorsal column fibers terminate in the conus medullaris before entering the cauda equina."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Conus Medullaris vs Cauda Equina: Conus = true spinal cord (sacral segments S1-S5) $\rightarrow$ sudden, bilateral, symmetrical saddle anesthesia, early sphincter loss, positive Babinski (cord sign). Cauda equina = nerve roots $\rightarrow$ asymmetrical, severe radicular pain, absent Babinski.",
    drawingInstruction: "Draw the terminal spinal cord cross-section. Shade the central sacral gray matter and bilateral sacral perimeter tracts.",
    explanation: "Conus medullaris syndrome is an injury to the sacral spinal cord segments (S1-S5) located at the T12-L1 vertebral level. It is characterized by: (1) symmetrical bilateral saddle anesthesia (S3-S5 dermatomes), (2) early and severe autonomic sphincter dysfunction (loss of anal sphincter tone, urinary retention/incontinence), and (3) a mix of upper motor neuron signs (bilateral Babinski signs) and lower motor neuron signs (absent ankle jerks), contrasting with pure LMN cauda equina compression."
  },
  {
    id: 36,
    source: "Clinical Case 36",
    title: "Post-Herpetic Trigeminal Ganglionitis (Isolated V1 Pain)",
    category: "Medulla",
    vignette: "A 73-year-old woman develops severe vesicular eruptions and stabbing pain over her right forehead, upper eyelid, and bridge of the nose (ophthalmic division, V1). Two months later, the rash has resolved but she has severe lancinating pain and numbness over the right forehead. Exam shows:\n1. Pinprick, temperature, and light touch are ABSENT over the right forehead and upper eyelid (V1 territory).\n2. Sensation over the right maxillary (V2) and mandibular (V3) divisions is completely normal.\n3. The right corneal reflex is absent when stimulating the right cornea, but consensual blink in the left eye is intact when stimulating the left cornea.\n4. Body sensation is normal.",
    findings: [
      { text: "Right Forehead & Upper Eyelid (V1): Absent touch, pinprick, temperature", type: "deficit" },
      { text: "Right Cheek (V2) & Jaw (V3): Completely NORMAL", type: "normal" },
      { text: "Right Corneal Reflex: Absent afferent limb on right", type: "deficit" },
      { text: "Left Face & Entire Body: Completely normal", type: "normal" }
    ],
    correctLevel: "caudal_medulla",
    correctLevelDetail: "Right Trigeminal Nerve / Ophthalmic Branch (V1) & Spinal V",
    correctSide: "right",
    correctStructures: ["right_spinal_v"],
    correctStructureNames: "Right Spinal Trigeminal Tract & Nucleus (V1 Subnucleus)",
    clinicalSyndrome: "Herpes Zoster Ophthalmicus / Post-Herpetic Neuralgia",
    whyOptions: [
      "Herpes zoster reactivation in the trigeminal ganglion selectively destroys primary afferents in the V1 division, abolishing all sensation in the forehead and interrupting the afferent limb of the corneal reflex while sparing V2 and V3.",
      "The spinal trigeminal nucleus carries corneal reflex motor output through the facial nerve.",
      "The principal sensory nucleus only receives fibers from the mandibular (V3) division.",
      "The lesion must be in the contralateral rostral pons because trigeminal fibers decussate in the orbit."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Trigeminal pathway organization: V1 afferents travel in the ophthalmic nerve $\rightarrow$ trigeminal ganglion $\rightarrow$ enter pons $\rightarrow$ descend in spinal trigeminal tract. Corneal reflex afferent = V1, efferent = CN VII bilateral blinks!",
    drawingInstruction: "Draw the Caudal Medulla (Slide 3/10). On the RIGHT side, shade the lateral-most circle of the 3 circle neighbors (Right Spinal Trigeminal Tract and Nucleus).",
    explanation: "Reactivation of varicella-zoster virus in the ophthalmic branch (V1) of the trigeminal ganglion produces herpes zoster ophthalmicus. The primary afferents carrying touch and pain from the cornea and forehead descend into the spinal trigeminal tract in the medulla and enter the chief sensory nucleus in the pons. Damage to V1 selectively abolishes sensation across the forehead and destroys the afferent limb of the corneal reflex on that side."
  },
  {
    id: 37,
    source: "Clinical Case 37",
    title: "Anterior Choroidal Artery Infarct (Posterior Limb & Optic Tract)",
    category: "Thalamus",
    vignette: "A 58-year-old woman presents with stroke. Exam shows:\n1. Dense hemiplegia of the left face, left arm, and left leg (0/5 power throughout).\n2. Complete loss of all sensory modalities (touch, vibration, pain, temperature) over the entire left face and body.\n3. Left homonymous hemianopia on visual field testing.\n4. Normal speech, cognitive function, and comprehension.",
    findings: [
      { text: "Left Face, Arm, Leg Motor: 0/5 hemiplegia", type: "deficit" },
      { text: "Left Face & Body Sensation: Complete hemi-anesthesia", type: "deficit" },
      { text: "Visual Field: Left homonymous hemianopia", type: "deficit" },
      { text: "Cognition & Language: Normal", type: "normal" }
    ],
    correctLevel: "thalamus",
    correctLevelDetail: "Right Internal Capsule (Posterior Limb) & Optic Tract",
    correctSide: "right",
    correctStructures: ["right_internal_capsule_posterior_limb", "right_vpl", "right_vpm"],
    correctStructureNames: "Right Posterior Limb of Internal Capsule, Thalamus, & Optic Tract",
    clinicalSyndrome: "Anterior Choroidal Artery (AChA) Syndrome",
    whyOptions: [
      "The anterior choroidal artery supplies the posterior limb of the internal capsule, retrolenticular optic radiations, and lateral thalamus; occlusion produces the classic clinical triad of contralateral hemiplegia, hemisensory loss, and homonymous hemianopia.",
      "The posterior cerebral artery exclusively supplies the internal capsule and motor cortex.",
      "The medial lemniscus decussates in the optic tract, causing hemianopia and sensory loss.",
      "Damage to the basilar pons causes homonymous hemianopia."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Anterior Choroidal Artery Triad: (1) Contralateral hemiplegia (posterior limb motor), (2) Contralateral hemisensory loss (thalamocortical projections), (3) Contralateral homonymous hemianopia (optic tract / retrolenticular radiations)!",
    drawingInstruction: "Draw the horizontal diencephalic section. On the RIGHT side, shade the posterior limb of the internal capsule, adjacent thalamic sensory nuclei, and the retrolenticular area.",
    explanation: "The anterior choroidal artery (a branch of the internal carotid artery) irrigates a critical deep anatomical territory: the posterior limb of the internal capsule (corticospinal fibers), the thalamocortical sensory projections, and the optic tract/lateral geniculate nucleus/optic radiations. Occlusion results in the classic AChA stroke triad: contralateral spastic hemiplegia, contralateral hemisensory loss across all modalities, and contralateral homonymous hemianopia."
  },
  {
    id: 38,
    source: "Clinical Case 38",
    title: "Thoracic Cord Posterior Funiculus Tumor (Isolated Bilateral Leg Proprioception Loss)",
    category: "Spinal Cord",
    vignette: "A 38-year-old woman develops a slow-growing ependymoma in the dorsal columns of the thoracic cord at T8. Exam reveals:\n1. Severe loss of vibratory sensation and joint position sense in both feet and legs.\n2. Vibratory and position sense are normal in both arms and hands.\n3. Pinprick and temperature sensation are normal throughout the entire body.\n4. Motor strength is 5/5 in all extremities.\n5. Sways and falls with eyes closed (positive Romberg).",
    findings: [
      { text: "Bilateral Leg Vibration & Proprioception: ABSENT", type: "deficit" },
      { text: "Bilateral Arm Sensation: Completely NORMAL", type: "normal" },
      { text: "Pain and Temperature: Completely NORMAL throughout", type: "normal" },
      { text: "Motor Power: 5/5 normal throughout", type: "normal" },
      { text: "Romberg Sign: Positive (Sensory Ataxia)", type: "deficit" }
    ],
    correctLevel: "spinal_cord",
    correctLevelDetail: "Thoracic Spinal Cord (T8, Dorsal Columns)",
    correctSide: "bilateral",
    correctStructures: ["left_fasciculus_gracilis", "right_fasciculus_gracilis"],
    correctStructureNames: "Bilateral Fasciculus Gracilis (Thoracic Cord T8)",
    clinicalSyndrome: "Posterior Cord Syndrome",
    whyOptions: [
      "A midline posterior spinal cord lesion at T8 selectively compresses the bilateral fasciculus gracilis, abolishing lower extremity proprioception and vibration (sensory ataxia) while sparing fasciculus cuneatus (arms enter at T6 and above) and anterolateral tracts.",
      "The spinocerebellar tract decussates in the posterior columns at T8.",
      "Fasciculus gracilis carries motor commands to the gastrocnemius muscles.",
      "The ventral white commissure is located in the posterior columns of the thoracic cord."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Posterior Cord Syndrome: Fasciculus Gracilis is medial (carries legs T7-S5). Fasciculus Cuneatus is lateral (carries arms C1-T6). At T8, only gracilis is present in the dorsal column. Bilateral compression = bilateral leg proprioception loss with normal arms!",
    drawingInstruction: "Draw the Spinal Cord oval (Slide 2/9) at T8. In the posterior funiculus, shade BOTH the left and right Fasciculus Gracilis along the dorsal midline. Lateral white matter and anterior horns remain intact.",
    explanation: "Posterior cord syndrome involves selective damage to the posterior funiculus (dorsal columns). Because this lesion is at T8 (below the T6 entry level of upper extremity fibers in the fasciculus cuneatus), the dorsal columns contain exclusively the fasciculus gracilis representing the lower extremities. The patient presents with bilateral loss of vibratory and position sense in the legs, sensory ataxia (positive Romberg test), and intact pain, temperature, and motor power."
  },
  {
    id: 39,
    source: "Clinical Case 39",
    title: "Mid-Pontine Tegmental Lesion (Foville Syndrome)",
    category: "Pons",
    vignette: "A 66-year-old man presents with acute gaze palsy. Exam shows:\n1. Conjugate horizontal gaze palsy to the right: neither the right eye nor the left eye can look to the right.\n2. Complete right peripheral facial palsy (upper and lower right face, CN VII).\n3. Spastic hemiparesis of the left arm and leg.\n4. Proprioception and vibratory sense are absent in the left arm and leg.\n5. Pain and temperature are normal.",
    findings: [
      { text: "Horizontal Gaze: Conjugate paralysis of rightward gaze (Right PPRF / CN VI nucleus)", type: "deficit" },
      { text: "Right Face Motor: Complete LMN facial paralysis (CN VII)", type: "deficit" },
      { text: "Left Body Motor: Spastic hemiparesis", type: "deficit" },
      { text: "Left Body Vibration & Touch: ABSENT (Medial Lemniscus)", type: "deficit" },
      { text: "Pain and Temperature: Normal", type: "normal" }
    ],
    correctLevel: "caudal_mid_pons",
    correctLevelDetail: "Right Caudal/Mid Pons (Tegmentum & Base)",
    correctSide: "right",
    correctStructures: ["right_abducens_nucleus", "right_facial_nucleus", "right_medial_lemniscus", "right_basilar_pons"],
    correctStructureNames: "Right Abducens Nucleus / PPRF, Right Facial Nucleus, Right ML, & Corticospinal Tract",
    clinicalSyndrome: "Foville Syndrome (Inferior Medial Pontine Syndrome)",
    whyOptions: [
      "Infarction of paramedian branches of the basilar artery in the caudal pons damages the CN VI nucleus/PPRF (ipsilateral conjugate horizontal gaze palsy), CN VII nucleus (ipsilateral facial droop), corticospinal tract (contralateral hemiparesis), and medial lemniscus (contralateral proprioception loss).",
      "Medial longitudinal fasciculus lesion causes conjugate gaze palsy to the contralateral side.",
      "Damage to the superior cerebellar peduncle causes peripheral facial paralysis.",
      "The spinothalamic tract is damaged in the basilar pons, causing conjugate gaze palsy."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Caudal Pons Slide 5/12: 'Medial lemniscus is slanting now!' Foville syndrome damages the abducens nucleus/PPRF (horizontal gaze palsy towards the lesion) + facial nucleus + slanting medial lemniscus + basilar corticospinal tract!",
    drawingInstruction: "Draw the Caudal Pons (Slide 5: square tegmentum with basilar belly). On the RIGHT side, shade the dorsomedial tegmentum (Abducens nucleus and facial colliculus), the slanting Medial Lemniscus, and adjacent basilar corticospinal tract.",
    explanation: "Foville syndrome (inferior medial pontine syndrome) is caused by occlusion of paramedian branches of the basilar artery. The lesion affects: (1) the abducens nucleus or paramedian pontine reticular formation (PPRF), producing a conjugate horizontal gaze palsy towards the side of the lesion (right); (2) the facial motor nucleus/fibers (ipsilateral LMN facial palsy); (3) the corticospinal tract (contralateral left hemiparesis); and (4) the slanting medial lemniscus (contralateral left loss of touch/vibration/proprioception)."
  },
  {
    id: 40,
    source: "Clinical Case 40",
    title: "Somatosensory Cortex Astereognosis (Pure Cortical Hand Lesion)",
    category: "Cortex",
    vignette: "A 39-year-old software architect notices she cannot type accurately with her left hand without looking at the keyboard. Exam reveals:\n1. When objects (key, paperclip, marble) are placed in her left hand with eyes closed, she can describe their texture (smooth, cold) but CANNOT recognize what they are (astereognosis).\n2. She cannot identify numbers traced on her left palm (agraphesthesia).\n3. Two-point discrimination on the left fingertips is markedly widened (12 mm vs 3 mm on right).\n4. Pinprick, temperature, and crude touch are completely normal on both sides of the body.\n5. Motor strength is 5/5 throughout.",
    findings: [
      { text: "Left Hand Astereognosis: Cannot name key, paperclip, marble by touch", type: "deficit" },
      { text: "Left Palm Agraphesthesia: Cannot identify traced numbers", type: "deficit" },
      { text: "Left Fingertip 2-Point Discrimination: Severely impaired (12 mm vs 3 mm)", type: "deficit" },
      { text: "Crude Touch, Pain, Temperature: Normal bilaterally", type: "normal" },
      { text: "Motor Power: 5/5 intact throughout", type: "normal" }
    ],
    correctLevel: "cortex",
    correctLevelDetail: "Right Postcentral Gyrus (Hand Area, Area 3b, 1, 2)",
    correctSide: "right",
    correctStructures: ["right_postcentral_hand_face"],
    correctStructureNames: "Right Postcentral Gyrus (Primary Somatosensory Cortex, Hand Area)",
    clinicalSyndrome: "Isolated Cortical Astereognosis & Agraphesthesia",
    whyOptions: [
      "A focal infarct in the contralateral postcentral gyrus hand area selectively destroys primary somatosensory cortex (areas 3b, 1, 2), eliminating discriminative tactile processing (stereognosis, graphesthesia, 2-point) while crude touch and pain reach conscious perception subcortically in the thalamus.",
      "The thalamic VPM nucleus processes stereognosis, while the postcentral gyrus processes crude touch.",
      "Damage to the fasciculus cuneatus produces isolated astereognosis with normal 2-point discrimination.",
      "The motor cortex (precentral gyrus) is the primary site of tactile object recognition."
    ],
    correctWhyIndex: 0,
    drCohanRule: "Cortical sensory dissociation: Crude touch and pain are perceived subcortically at the thalamus. Discriminative touch—STEREOGNOSIS, GRAPHAPESTHESIA, 2-POINT DISCRIMINATION, and exact pinprick localization—requires the PRIMARY SOMATOSENSORY CORTEX!",
    drawingInstruction: "Draw the lateral cerebral hemisphere. In the RIGHT hemisphere, shade the middle third of the Postcentral Gyrus along the lateral convexity (the hand representation between the shoulder and face).",
    explanation: "This case exemplifies isolated cortical sensory loss (cortical astereognosis and agraphesthesia). Higher-order tactile recognition requires the complex receptive fields and spatial integration of Brodmann areas 3b, 1, and 2 in the primary somatosensory cortex. Crude sensations of temperature, pain, and light touch reach conscious perception in the thalamus, which explains why they remain intact. The deficit is strictly contralateral (right postcentral gyrus $\rightarrow$ left hand)."
  }
];
