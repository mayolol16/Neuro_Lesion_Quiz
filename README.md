# Neuro_Lesion_Quiz 🧠

Interactive clinical neuroanatomy lesion localization simulator and exam trainer featuring **40 high-yield clinical cases** and **Dr. Chris Cohan's CNS brainstem cross-sectional drawing system** (Jacobs School of Medicine, University at Buffalo).

---

## 🌟 Key Features

- **40 Comprehensive Clinical Cases**:
  - **Exam 1 Official Cases (1–6)**: Syringomyelia, Lateral Medullary (Wallenberg), Paracentral Lobule (ACA), T2 ALS transection, Brown-Séquard (T8).
  - **Exam 1 Continued Cases (7–12)**: Subacute Combined Degeneration (B12), Pure Sensory Thalamic Stroke (VPL/VPM), Rostral Medulla Medial Lemniscus, Lateral Postcentral Gyrus (MCA), Rostral Pons/Midbrain Tegmentum (ALS + VTT), Spinal Trigeminal Onion-Skin Somatotopy.
  - **High-Yield Board Cases (13–40)**: Dejerine medial medullary, Weber, Claude, Benedikt, Parinaud, Millard-Gubler, Foville, Locked-in syndrome, AICA lateral pontine, Central cord, Tabes dorsalis, Posterior cord, Conus medullaris, Anterior choroidal artery, Gerstmann syndrome, and cortical astereognosis.
- **Interactive SVG Cross-Section Diagrams**:
  - Click directly on anatomical structures, tracts, and nuclei to diagnose lesion sites.
  - Precision models for: **Spinal Cord**, **Caudal Medulla**, **Rostral Medulla**, **Caudal/Mid Pons**, **Rostral Pons ("The Snowman")**, **Midbrain ("The Pig from the rear")**, **Thalamus/Diencephalon**, and **Cerebral Cortex Homunculus**.
- **Diagnostic Reasoning ("Why?") Evaluator**:
  - Formulate the pathophysiological justification (decussation timing, somatotopic fiber arrangement, vascular territories, modality dissociations).
- **Dr. Cohan's Drawing Guide & Atlas**:
  - Integrated 14-slide step-by-step drawing atlas teaching how to draw every brainstem outline and pathway neatly for full exam credit.
- **Streak Tracking & Gamification**:
  - Streak tracking, accuracy scoring, and practice vs. exam modes.

---

## 🚀 Quickstart

### Prerequisites
- Node.js (v18+)
- npm

### Installation & Run

```bash
# Clone the repository
git clone git@github.com:mayolol16/Neuro_Lesion_Quiz.git
cd Neuro_Lesion_Quiz

# Install dependencies
npm install

# Start development server
npm run dev
```

Open `http://localhost:5173/` in your browser.

---

## 📁 Project Structure

```
neuro-lesion-trainer/
├── index.html          # HTML shell & SEO metadata
├── package.json        # Project scripts & dependencies
├── vite.config.js      # Vite build configuration
├── src/
│   ├── main.js         # State manager, event listeners, diagnostic engine
│   ├── cases.js        # 40 detailed clinical neuroanatomy cases & rationales
│   ├── diagrams.js     # Interactive SVG generators for all 8 CNS levels
│   ├── atlas.js        # Dr. Cohan's 14-slide drawing atlas & mnemonics
│   └── style.css       # Obsidian dark theme, glowing SVG tracts & responsive layout
└── README.md
```

---

