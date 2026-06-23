export interface Project {
  id: string;
  title: string;
  period: string;
  category: 'ml-genai' | 'cv-iot' | 'analytics-ds';
  tech: string[];
  metrics: { label: string; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
  hfUrl?: string;
  driveUrl?: string;
  summary: string;
  description: string;
  architectureNodes: { id: string; label: string; type: 'input' | 'process' | 'model' | 'output' | 'database' }[];
  architectureLinks: { source: string; target: string; label?: string }[];
}

export interface Certification {
  name: string;
  authority: string;
  credentialUrl: string;
  iconName: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  gradeLabel: string;
}

export interface Achievement {
  title: string;
  detail: string;
  driveUrl?: string;
}

export interface Coursework {
  id: string;
  name: string;
  period: string;
  institution: string;
  details: { title: string; desc: string; highlights: string[] }[];
  driveUrl: string;
}

export const personalInfo = {
  name: "Tanush Sudheer Tambe",
  title: "Machine Learning & Generative AI Engineer",
  location: "Karjat, Raigad, Maharashtra, India",
  email: "tambetanush@gmail.com",
  phone: "+91 7058915474",
  github: "https://github.com/tambetanush",
  linkedin: "https://linkedin.com/in/tanush-tambe",
  summary: "Dual-degree student specializing in applied Machine Learning, Generative AI, and Data Analytics. AWS Certified Machine Learning Engineer Associate and Data Engineer Associate with extensive experience building production-grade ML systems, fine-tuning large language models, setting up multi-agent AI frameworks, deploying computer vision inference, and training reinforcement learning agents. Focused on writing clean, modular code and building robust, scalable applications."
};

export const educationList: Education[] = [
  {
    degree: "B.S. in Data Science and Applications",
    institution: "Indian Institute of Technology, Madras (Online BS Degree Program)",
    location: "Chennai, Tamil Nadu",
    period: "2022 - 2026",
    grade: "9.64/10",
    gradeLabel: "CGPA"
  },
  {
    degree: "B.E. in Computer Engineering",
    institution: "Konkan Gyanpeeth College of Engineering, Karjat (Mumbai University)",
    location: "Karjat, Maharashtra",
    period: "2022 - 2026",
    grade: "9.86/10",
    gradeLabel: "CGPA"
  }
];

export const certificationList: Certification[] = [
  {
    name: "AWS Certified Machine Learning Engineer Associate",
    authority: "Amazon Web Services (AWS)",
    credentialUrl: "https://drive.google.com/file/d/1IpRt-63hGcjg7Tl_VPWxN5kPMOgqwizz/view?usp=drive_link",
    iconName: "Brain"
  },
  {
    name: "AWS Certified Data Engineer Associate",
    authority: "Amazon Web Services (AWS)",
    credentialUrl: "https://drive.google.com/file/d/1slSvmSVoXh40OiFIK0Vf2GoMireV_CcR/view?usp=drive_link",
    iconName: "Database"
  },
  {
    name: "AWS Certified AI Practitioner",
    authority: "Amazon Web Services (AWS)",
    credentialUrl: "https://drive.google.com/file/d/16g0PmvNo1VIzEIsjkPRNwr54LTcYi0B8/view?usp=sharing",
    iconName: "Cpu"
  },
  {
    name: "AWS Certified Cloud Practitioner",
    authority: "Amazon Web Services (AWS)",
    credentialUrl: "https://drive.google.com/file/d/1Dx9-AnE7MLmZSrSTdU--zzkIX-bNJSku/view?usp=sharing",
    iconName: "Cloud"
  }
];

export const skillMatrix = {
  "Machine Learning & Data Science": [
    "Python", "Pandas", "NumPy", "Scikit-Learn", "Feature Engineering", "Statistical Analysis", "Forecasting", "XGBoost", "LightGBM", "CatBoost"
  ],
  "Deep Learning & Computer Vision": [
    "PyTorch", "HuggingFace Transformers", "Neural Networks", "OpenCV", "YOLOv8 (Ultralytics)", "YOLOv8-OBB", "ResNet18"
  ],
  "Generative AI & Large Language Models": [
    "LangChain", "Retrieval-Augmented Generation (RAG)", "Gemini API", "Jina Embeddings", "Pydantic (Structured output)", "Gemma 3-1B-IT", "Groq", "BitsAndBytes", "LoRA", "QLoRA", "PEFT", "TRL (SFTTrainer)"
  ],
  "Reinforcement Learning": [
    "Gymnasium", "Multi-Armed Bandits", "SARSA", "Q-Learning", "DQN / Dueling DQN", "REINFORCE (Policy Gradients)", "Options Framework (SMDP)", "Intra-Option Q-Learning"
  ],
  "MLOps & Backend Development": [
    "FastAPI", "Flask", "REST APIs", "Celery", "Redis", "SQLAlchemy", "Docker", "Podman", "HuggingFace Spaces", "ReportLab (PDF)", "NetworkX", "Statsmodels"
  ],
  "Databases & Cloud": [
    "AWS (S3, SageMaker, IAM, Lambda, EC2)", "SQL", "SQLite", "PostgreSQL", "Pinecone (Vector DB)", "Supabase", "Git"
  ],
  "Experiment Tracking & Evaluation": [
    "Weights & Biases (W&B)", "NDCG", "Hit@K", "BERTScore", "ROUGE-L", "LLM-as-a-Judge", "ABC/XYZ Inventory Analysis"
  ]
};

export const achievementList: Achievement[] = [
  {
    title: "NPTEL SUPER STAR",
    detail: "Secured Top 1% ranks in 3 of 4 NPTEL courses completed in a single semester.",
    driveUrl: "https://drive.google.com/file/d/1gI2JGJTsDRRPVrMwJQEvg5qZrvUa16t1/view?usp=drive_link"
  },
  {
    title: "Kaggle Engage2Value - Rank 14 / 1760+",
    detail: "Finished in the Top 1% on the private leaderboard (R²) in a purchase value regression competition; awarded S Grade in IITM BS Machine Learning Practice.",
    driveUrl: "https://drive.google.com/file/d/1BFQffD0xM9-fTgdS2-VdY1XqnhuzQ_hU/view?usp=sharing"
  },
  {
    title: "Academic Distinction - IIT Madras BS",
    detail: "Maintained a 9.64/10 CGPA in the BS Program; previously awarded Academic Distinction at Diploma level (CGPA > 9.5).",
    driveUrl: "https://drive.google.com/file/d/1deufaK85dFDOWtkoFS1X1gx9BHG86jzY/view?usp=drive_link"
  },
  {
    title: "Top 1% Nationally - NPTEL Data Mining",
    detail: "Scored 96% in Data Mining conducted by IIT Kharagpur among all national participants.",
    driveUrl: "https://drive.google.com/file/d/1k93b7TDXtxIp1XdOodqDG2V4S5WVXHqM/view?usp=sharing"
  },
  {
    title: "S Grade - Reinforcement Learning",
    detail: "Awarded the highest grade (S) in DA5007 Reinforcement Learning at IIT Madras.",
  }
];

export const rlCoursework: Coursework = {
  id: "rl-coursework",
  name: "Reinforcement Learning (DA5007)",
  period: "Jan - May 2026",
  institution: "IIT Madras BS Program",
  driveUrl: "https://drive.google.com/drive/folders/1yDObGd4NW0EJ_aHDLg16l3lVvpQk2iEr?usp=sharing",
  details: [
    {
      title: "PA1: Multi-Armed Bandits",
      desc: "Evaluated exploration-exploitation strategies on 10-armed and 10,000-armed testbeds over 2,000 runs.",
      highlights: [
        "Benchmarked Greedy, epsilon-greedy, and Upper Confidence Bound (UCB) algorithms.",
        "Demonstrated the phenomenon of 'UCB collapse' in massive action spaces (10,000 arms) due to logarithmic exploration terms.",
        "Proved that simple epsilon-greedy (epsilon=0.1) achieves an average reward of ~2.2, dramatically outperforming UCB in large action spaces."
      ]
    },
    {
      title: "PA2: SARSA vs Q-Learning",
      desc: "Compared on-policy and off-policy temporal difference methods across 20 distinct environment configurations.",
      highlights: [
        "Modeled Grid Worlds (10x10 and Four-Room layouts) with stochastic transitions, wind drift, and dynamic target goals.",
        "Evaluated convergence stability across a 100-seed suite.",
        "Demonstrated that SARSA (on-policy) outperforms Q-learning (off-policy) by 7.8 to 15.3 cumulative reward units in stochastic settings by avoiding risk-heavy boundaries."
      ]
    },
    {
      title: "PA3: Dueling DQN & REINFORCE",
      desc: "Implemented value-based deep RL and policy gradient methods on classic control environments.",
      highlights: [
        "Ran 40 full training runs on Gymnasium CartPole-v1 and Acrobot-v1.",
        "Identified environment-dependent preference: baseline-subtracted REINFORCE achieved 5/5 seed convergence on hard-exploration Acrobot.",
        "Conducted hyperparameter tuning and model tracking via Weights & Biases (W&B)."
      ]
    },
    {
      title: "PA4: SMDP & Intra-Option Q-Learning",
      desc: "Applied hierarchical reinforcement learning via the Options Framework to simplify complex decision processes.",
      highlights: [
        "Performed 384 tuning runs on Gymnasium Taxi-v4.",
        "Proved that Intra-Option Q-Learning is 1.7x more data-efficient than standard Q-learning.",
        "Designed task-aware temporal options that cut steps-to-convergence by 35% to 60% with zero loss in final policy performance."
      ]
    }
  ]
};

export const projectList: Project[] = [
  {
    id: "greensense",
    title: "GreenSense: Intelligent Crop Recommendation",
    period: "2024 - 2026",
    category: "cv-iot",
    tech: ["ESP32", "IoT Sensors", "Flask", "Scikit-Learn", "XGBoost", "LightGBM", "CatBoost", "Gemini API", "Pydantic", "SQLite"],
    metrics: [
      { label: "CatBoost YetiRank HIT@5", value: "0.7954" },
      { label: "API Response Time", value: "<200ms" },
      { label: "API Cache Similarity", value: ">95%" }
    ],
    githubUrl: "https://github.com/tambetanush/GreenSense-Crop-Recommendation-System/",
    liveUrl: "http://tanushtambe.dns.navy/greensense/",
    summary: "An IoT-enabled agriculture system that collects real-time soil and environmental metrics, applies learning-to-rank machine learning models to recommend crops, and utilizes Gemini LLM to generate pydantic-enforced explanations with similarity caching.",
    description: `# 🌱 GreenSense

### Intelligent Hybrid Crop Recommendation System (2024–2026)

---

GreenSense is an **end-to-end intelligent crop recommendation system** that integrates **IoT sensor data**, **machine learning ranking models**, and a **three-signal hybrid recommendation engine** to recommend the most suitable crops for a given soil and environmental condition — including crops the ML model has never seen during training.

Unlike traditional classification systems, GreenSense formulates **crop selection as a ranking problem** and extends it with a **content-based path for cold-start crops**, making it suitable for real-world agricultural deployment where new crop varieties need to be evaluated without retraining.

---

## 🚀 Key Highlights

- 📡 **Real-time IoT sensing** using ESP32 and environmental sensors
- 🧠 **Learning-to-Rank ML approach** using \`CatBoostRanker\` (tuned), with XGBoostRanker and LGBMRanker benchmarked
- 🔀 **Three-signal hybrid recommender** combining ML ranking, cosine similarity, and agronomic range compatibility
- 🌿 **Cold-start crop support** — register new crops via API without retraining the model
- ⚙️ **Robust feature engineering & preprocessing pipeline** with location-aware imputation
- 🌐 **Flask-based inference API** with SQLite persistence for crop registry and recommendation history
- 📊 Evaluation using **Hit@K**, **NDCG@K**, and **LRAP**
- 🔗 Live integration with **Google Sheets API** for sensor readings
- 🖥️ **Single-page dashboard** with light/dark theme, live sensor fetch, explainability panel, and history browser

---

## 🧠 Problem Formulation

Most crop recommendation systems treat the problem as **multi-class classification**, forcing a single "best" crop prediction.

**GreenSense models this as a listwise ranking problem**, enabling:

- Multiple suitable crops per condition, ranked by suitability
- Confidence-aware recommendations via RRF-fused scores
- Support for crops outside the training distribution (cold-start)
- Better real-world decision support with per-dimension explainability

---

## 🔀 Hybrid Recommendation Architecture

GreenSense v2 introduces a **three-signal hybrid engine** that fuses an ML ranker with two content-based signals using **Reciprocal Rank Fusion (RRF)** — a rank-based merging technique that is immune to score-scale differences between signals.

### Signal Paths

\`\`\`
                    Raw Sensor Input
                          │
          ┌───────────────┼────────────────┐
          ▼               ▼                ▼
   [Signal 1]       [Signal 2]        [Signal 3]
   ML Ranker     Cosine Similarity   Range Compat.
  (CatBoost)    (shared 16-dim       (per-dimension
  Known crops    vector space)        agronomic
  only                                window check)
          │               │                │
          └──── Known ────┘                │
          RRF(ML, Cosine)                  │
               │                           │
               │           New crops only  │
               │      RRF(Cosine, Range)───┘
               │               │
               └───────────────┘
               RRF(known_fused, new_fused)
                          │
                    Final Ranked List
               (tagged: ml+cosine / cosine+range)
\`\`\`

### Why Three Signals?

| Signal                   | Purpose                                                                  | Why Needed                                                                                                                                           |
| ------------------------ | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ML Ranker (CatBoost)** | Listwise ranking trained on historical sensor-crop data                  | Best accuracy for known crops; captures nonlinear feature interactions                                                                               |
| **Cosine Similarity**    | Geometric closeness in shared 16-dim vector space                        | Captures inter-crop relationships; both crop profiles and sensor readings live in the same space                                                     |
| **Range Compatibility**  | Per-dimension agronomic window check (pH, temp, moisture, NPK, sunlight) | Hard constraint checker — catches cases where cosine similarity scores a crop highly despite one critical dimension (e.g. pH) being completely wrong |

### Why RRF Instead of Weighted Sum?

A weighted sum like \`0.8 × ML + 0.2 × CB\` requires score normalisation per inference call, making the same crop's score unstable across batches. RRF converts all signals to **rank positions** first, then combines:

\`\`\`
RRF(crop) = Σ  1 / (k + rank_i)   for each signal i
\`\`\`

With \`k=60\`, this makes the fusion robust to the ML ranker outputting raw floats (e.g. \`-1.07\`) while cosine outputs values in \`[0,1]\` — they never need to be on the same scale.

### Cold-Start: New Crops Without Retraining

Any crop not in the ML training set can be registered via the \`/register_crop\` API endpoint by providing agronomic requirement ranges (pH, sunlight in lux, NPK, moisture, temperature). The crop immediately enters the **cosine+range path** and competes in the final RRF merge. Once enough data is collected, the model can be retrained to absorb the new crop into the ML path — no manual catalog switching required.

---

### Full Pipeline Overview

\`\`\`
IoT Sensors (ESP32)
        ↓
Google Sheets (Live Logging)
        ↓
Flask API  ←→  SQLite DB (crop registry + history)
        ↓
normalise_input() — field alias resolution + type coercion
        ↓
Preprocessing Pipeline
(clean_and_clip → RobustLocationImputer → feature_engineer → ColumnTransformer)
        ↓
┌──────────────────────────────────────────────────┐
│         HybridCropRecommenderV2                  │
│  ┌─────────────┐ ┌────────────┐ ┌─────────────┐  │
│  │ ML Ranker   │ │  Cosine    │ │   Range     │  │
│  │ (CatBoost)  │ │ Similarity │ │ Compat.     │  │
│  └──────┬──────┘ └─────┬──────┘ └──────┬──────┘  │
│         └──────RRF─────┘               │         │
│              known_fused     new_fused─┘         │
│                    └────RRF────┘                 │
└──────────────────────────────────────────────────┘
        ↓
Ranked Crop Recommendations
(with rank, RRF score, source tag, optional explain)
\`\`\`

---

## 🤖 AI Explanations (Gemini API)

GreenSense integrates **Google's Gemini 2.5 Flash** to provide natural language, scientifically accurate explanations of *why* a crop was recommended or discouraged based on the current environmental vectors.

**Key features:**
- **Pydantic Structured Output:** The LLM strictly responds in JSON format containing a summary, positive/negative key factors, and cautions.
- **Smart Prompting:** If the suitability score is high, it explains *why* the crop thrives. If the score is low, it shifts to *actionable advice* (e.g., adding fertilizer or waiting for winter).
- **Aggressive Caching (\`ai_explanations\` table):** To save on computational costs and latency, the system caches LLM responses. If the exact same crop is requested again with >95% Cosine Similarity on its environmental readings, it instantly returns the cached response instead of calling the API.
- **API Key Rotation:** Automatically rotates between 3 API keys (\`GEMINI_API_KEY_1\`, \`2\`, \`3\`) with built-in retries to gracefully handle rate limits.

---

## 🛠️ Tech Stack

### Hardware

- ESP32 Microcontroller
- Soil Moisture Sensor (ZTS-3002)
- DHT Temperature & Humidity Sensor
- BMP Pressure / Altitude Sensor
- MQ135 Gas Sensor (CO₂, CO, NH₃)
- LDR Light Intensity Sensor

### Backend & ML

- Python 3.11+
- Flask + SQLite (WAL mode)
- Scikit-Learn (Pipeline, ColumnTransformer, StandardScaler)
- CatBoostRanker, XGBRanker, LGBMRanker
- NumPy, Pandas, Joblib
- sklearn.metrics.pairwise (cosine_similarity)

### Data & Integration

- Google Sheets API (live sensor logging)
- REST API (JSON inference)
- SQLite (crop registry, recommendation history)

---

# Diagrams & Images:

<h2>Soil + Environment Analyzer Diagram</h2>

<img src="/screenshots/greensense/ESP32 S3.png" width="700">

<h3>Breadboard Implementations</h3>

<table align="center">
  <tr>
    <td align="center" valign="top">
      <img 
        src="/screenshots/greensense/IMG20251225093429.jpg"
        width="350"
        style="display:block;"
      />
      <div style="width:350px; text-align:center; margin-top:6px;">
        <b>Breadboard Implementation – View 1</b>
      </div>
    </td>
    <td align="center" valign="top">
      <img 
        src="/screenshots/greensense/IMG20251225093358.jpg"
        width="300"
        style="display:block;"
      />
      <div style="width:300px; text-align:center; margin-top:6px;">
        <b>Breadboard Implementation – View 2</b>
      </div>
    </td>
  </tr>

  <tr>
    <td align="center" valign="top">
      <img
        src="/screenshots/greensense/IMG20251225093336.jpg"
        width="300"
        style="display:block;"
      />
      <div style="width:300px; text-align:center; margin-top:6px;">
        <b>Final Assembly</b>
      </div>
    </td>
    <td align="center" valign="top">
      <img
        src="/screenshots/greensense/IMG20251225093404.jpg"
        width="300"
        style="display:block;"
      />
      <div style="width:300px; text-align:center; margin-top:6px;">
        <b>ZTS-3002 Soil Sensor</b>
      </div>
    </td>
  </tr>
</table>

<h3>Final Assembly Testing</h3>
<img src="/screenshots/greensense/IMG-20251031-WA0018.jpg" width="700">

---

## 📱 Application Walkthrough

<table align="center">
  <tr>
    <td align="center" valign="top">
      <img src="/screenshots/greensense/1 landing.png" width="400" />
      <div style="width:400px; text-align:center; margin-top:6px;"><b>1. Landing Page</b></div>
    </td>
    <td align="center" valign="top">
      <img src="/screenshots/greensense/2 login.png" width="400" />
      <div style="width:400px; text-align:center; margin-top:6px;"><b>2. Login Page</b></div>
    </td>
  </tr>
  <tr>
    <td align="center" valign="top">
      <img src="/screenshots/greensense/3 dashboard plus fetch readings.png" width="400" />
      <div style="width:400px; text-align:center; margin-top:6px;"><b>3. Dashboard & Fetch Readings</b></div>
    </td>
    <td align="center" valign="top">
      <img src="/screenshots/greensense/4 recommendations.png" width="400" />
      <div style="width:400px; text-align:center; margin-top:6px;"><b>4. Crop Recommendations</b></div>
    </td>
  </tr>
  <tr>
    <td align="center" valign="top">
      <img src="/screenshots/greensense/5 explantion.png" width="400" />
      <div style="width:400px; text-align:center; margin-top:6px;"><b>5. AI Explanation</b></div>
    </td>
    <td align="center" valign="top">
      <img src="/screenshots/greensense/6 register crop.png" width="400" />
      <div style="width:400px; text-align:center; margin-top:6px;"><b>6. Register New Crop</b></div>
    </td>
  </tr>
  <tr>
    <td align="center" valign="top">
      <img src="/screenshots/greensense/7 recommendation history.png" width="400" />
      <div style="width:400px; text-align:center; margin-top:6px;"><b>7. Recommendation History</b></div>
    </td>
    <td align="center" valign="top">
      <img src="/screenshots/greensense/8 users.png" width="400" />
      <div style="width:400px; text-align:center; margin-top:6px;"><b>8. User Management (Admin)</b></div>
    </td>
  </tr>
</table>

---

## 📂 Project Structure

\`\`\`
├── GreenSense/
│
├── app.py                           # Flask application — all API routes
├── requirements.txt                 # Python dependencies
├── LICENSE                          # Project license
├── README.md                        # Project documentation
├── .env                             # Environment variables (Firebase + Gemini Keys)
│
├── src/
│   ├── utils.py                     # Preprocessing, feature engineering, normalise_input()
│   ├── hybrid_recommender_v2.py     # Hybrid recommender class + RRF fusion engine
│   └── ai_explainer.py              # Gemini AI explanation logic and caching
│
├── models/
│   ├── hybrid_recommender_v2.joblib # Serialised HybridCropRecommenderV2
│   ├── best_ranker.joblib           # Trained CatBoostRanker
│   ├── best_model_XGBRanker.joblib  # Trained XGBRanker
│   ├── preprocessing_pipeline.joblib# Sklearn preprocessing pipeline
│   └── MLB.joblib                   # MultiLabelBinarizer for crop labels
│
├── data/
│   ├── greensense.db                # SQLite database (registry, history, cache, users)
│   ├── crop_catalog_updates.json    # JSON backup of registered crops
│   └── synthetic_crop_data.csv      # Synthetic dataset (6,326 rows, 5 location profiles)
│
├── scripts/
│   ├── test.py                      # Local testing script
│   ├── ble_check.py                 # BLE testing script
│   ├── make_admin.py                # Admin creation utility
│   └── resave_joblib.py             # Utility to resave joblib files
│
├── auth/                            # Firebase Authentication Logic
│
├── notebooks/                       # Research and training notebooks
│   ├── Ranker Notebook/             # Main ML notebook
│   ├── Old Models/                  # Archived classification approach
│   └── Soil-Environment Analyzer/   # IoT hardware & implementation assets
│
├── templates/
│   └── index.html                   # Single-page dashboard (User)
│   └── recommendation.html          # Single-page dashboard (Admin)
│
├── static/
│   └── style.css
│
└── __pycache__/
\`\`\`

---

## ⚙️ Machine Learning Approach

### 1️⃣ Synthetic Data Generation

Real standardised soil + environment datasets for Maharashtra are scarce, so a synthetic dataset of **6,326 rows** was generated using historically-backed parameters for five location profiles across Raigad and Nashik districts. The generator applies:

- Seasonal temperature simulation using sinusoidal day-of-year modelling
- Weighted crop assignment conditioned on temperature, moisture, pH, nutrients, altitude, and season
- Realistic noise (5%), random nulls (5%), sensor anomalies (2%), and extreme outliers (0.5%)

### 2️⃣ Feature Engineering

- Sensor value clipping and IQR-based outlier removal
- Three-level location-aware imputation: \`(district, location, season)\` → \`district\` → global median
- Derived features: nutrient ratios (\`N_plus_P\`, \`P_over_N\`, \`K_over_N\`), temperature delta, moisture delta, log-transformed light intensity, altitude bucket
- Categorical encoding: one-hot for district/location/season/alt_bucket, ordinal for season

### 3️⃣ Learning-to-Rank Formulation

Multi-label crop recommendation is reframed as a **listwise ranking problem**. Each crop competes within a query defined by a single sample:

\`\`\`
(Preprocessed Features ‖ One-Hot Crop Identity Vector)  →  Relevance Score
\`\`\`

The model predicts a score per crop; crops are sorted descending to produce the ranked recommendation list.

### 4️⃣ Model Comparison & Selection

Three rankers were benchmarked with default hyperparameters, then the top two were tuned via random search over 90 configurations each:

| Model                    | Hit@5      | NDCG@5     | LRAP       |
| ------------------------ | ---------- | ---------- | ---------- |
| **Tuned CatBoostRanker** | **0.7954** | **0.5083** | 0.4629     |
| CatBoostRanker (default) | 0.7883     | 0.5074     | **0.4655** |
| Tuned XGBRanker          | 0.7954     | 0.5029     | 0.4576     |
| LGBMRanker (default)     | 0.7820     | 0.4963     | 0.4531     |
| Tuned LGBMRanker         | 0.7907     | 0.4941     | 0.4457     |
| XGBRanker (default)      | 0.7796     | 0.4831     | 0.4387     |

**CatBoostRanker** with \`YetiRank\` loss consistently outperforms XGBoost and LightGBM across all ranking metrics, achieving the highest NDCG@5 — meaning it places relevant crops earlier in the list, which is critical when only top-ranked recommendations are acted upon.

Best CatBoost hyperparameters:

\`\`\`python
{
    "loss_function": "YetiRank",
    "depth": 6,
    "learning_rate": 0.03,
    "iterations": 800,
    "l2_leaf_reg": 5,
    "random_strength": 1,
    "bagging_temperature": 0.5
}
\`\`\`

### 5️⃣ Hybrid Extension (v2)

The trained CatBoostRanker is wrapped in \`HybridCropRecommenderV2\`, which adds two content-based signals and fuses all three via RRF. The shared 16-dimensional vector space uses:

\`\`\`
[ph_mid, ph_range, log1p(sun_mid), N, P, K, moisture_mid, temp_mid,
 season_summer, season_monsoon, season_winter,
 alt_very_low, alt_low, alt_med, alt_high, alt_very_high]
\`\`\`

This space is StandardScaler-fitted on training sensor readings, ensuring both crop profiles and live readings land in comparable positions for cosine comparison.

---

## 📈 Evaluation Metrics

| Metric     | Formula               | Interpretation                                                        |
| ---------- | --------------------- | --------------------------------------------------------------------- |
| **Hit@K**  | \`1/N Σ 𝟙(T∩R(K) ≠ ∅)\` | At least one relevant crop appears in top-K                           |
| **NDCG@K** | \`DCG@K / IDCG@K\`      | Ranking quality; penalises relevant crops appearing lower in the list |
| **LRAP**   | —                     | Label ranking average precision; global label ordering quality        |

---

## 🌐 Flask API Endpoints

### Pages

\`\`\`
GET  /                   → Single-page dashboard (index.html)
\`\`\`

### Inference

\`\`\`
POST /predict            → Hybrid crop recommendation
POST /explain            → Per-dimension signal breakdown for one crop
GET  /schema             → Feature names expected by preprocessor
\`\`\`

### Crop Registry

\`\`\`
POST   /register_crop       → Add a new crop (content-based path, persisted to SQLite)
GET    /crops               → List all registered crops (?search=, ?limit=, ?offset=)
DELETE /crops/<crop_name>   → Remove a registered crop
\`\`\`

### Recommendation History

\`\`\`
GET    /history             → Paginated history (?from=, ?to=, ?limit=, ?offset=)
GET    /history/<id>        → Single recommendation record
DELETE /history             → Clear all history (requires X-Confirm: yes header)
\`\`\`

### Monitoring

\`\`\`
GET  /health             → Recommender + DB status check
GET  /latest-readings    → Proxy to Google Sheets sensor API
\`\`\`

### Sample Predict Request

\`\`\`json
{
    "N": 198.03,
    "P": 9.17,
    "K": 175.78,
    "pH": 6.96,
    "Soil_Temp": 29.15,
    "Soil_Moisture": 51.87,
    "Env_Temp": 31.8,
    "DHT_Humidity": 68.54,
    "MQ135_CO2": 416.15,
    "MQ135_CO": 2.35,
    "MQ135_NH3": 3.92,
    "Light": 111924.6,
    "BMP_Altitude": 136.63,
    "BMP_Pressure": 1008.62,
    "district": "Raigad",
    "location": "Karjat",
    "season": "Monsoon"
}
\`\`\`

### Sample Predict Response

\`\`\`json
{
    "status": "ok",
    "record_id": 42,
    "recommendations": [
        {
            "rank": 1,
            "crop": "Rice",
            "rrf_score": 0.02844,
            "source": "ml+cosine"
        },
        {
            "rank": 2,
            "crop": "Vari",
            "rrf_score": 0.02743,
            "source": "ml+cosine"
        },
        {
            "rank": 3,
            "crop": "Coconut",
            "rrf_score": 0.02718,
            "source": "ml+cosine"
        },
        {
            "rank": 4,
            "crop": "Quinoa",
            "rrf_score": 0.02695,
            "source": "cosine+range"
        },
        {
            "rank": 5,
            "crop": "Banana",
            "rrf_score": 0.02672,
            "source": "ml+cosine"
        }
    ]
}
\`\`\`

### Sample Register Crop Request

\`\`\`json
{
    "crop_name": "Quinoa",
    "ph_min": 6.0,
    "ph_max": 7.5,
    "sun_min": 50000,
    "sun_max": 90000,
    "N_req": 140,
    "P_req": 30,
    "K_req": 120,
    "moisture_min": 35,
    "moisture_max": 60,
    "temp_min": 15,
    "temp_max": 25,
    "alt_bucket": "med",
    "seasons": "winter,summer"
}
\`\`\`

### Sample Explain Response (excerpt)

\`\`\`json
{
    "crop": "Grapes",
    "source": "ml+cosine",
    "ml_score": -1.0171,
    "cosine_score": 0.1744,
    "range_score": 0.6062,
    "dimensions": {
        "pH": { "env": null, "range": [6.5, 8.0], "score": 0.5 },
        "Temp": { "env": 36.56, "range": [15, 35], "score": 0.922 },
        "Moisture": { "env": 75.23, "range": [30, 55], "score": 0.191 },
        "N": { "env": 293.61, "range": [140, 260], "score": 0.72 }
    }
}
\`\`\`

---

## 🗄️ SQLite Persistence

Two tables are auto-created on first run:

**\`registered_crops\`** — stores every crop added via \`/register_crop\`, replayed into the recommender on each server startup so the DB is the single source of truth.

**\`recommendation_history\`** — stores every prediction as a JSON blob (input features + ranked output), queryable by date range. Supports full history clear with a confirmation header guard (\`X-Confirm: yes\`).

---

## 🖥️ Dashboard

The single-page frontend (\`index.html\`) has four tabs:

| Tab               | Function                                                                                                                                                      |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Recommend**     | Sensor fetch, manual input form with 🎲 randomiser, Top-K selector, recommendation cards with RRF scores, source badges (ML / CB), and per-crop explain panel |
| **Register Crop** | Form for adding new crops to the content-based catalog (all fields with validation)                                                                           |
| **Registry**      | Live search over registered crops, metadata display, remove button                                                                                            |
| **History**       | Date-filtered recommendation history with expandable input feature view and colour-coded source tags                                                          |

Light/dark theme toggle is persistent via \`localStorage\`.

---

## 🚀 Running Locally

### 1️⃣ Environment Setup

Create a \`.env\` file in the root directory (you can use \`.env.example\` as a template). You will need to configure your Firebase Admin credentials and your Gemini API keys. 

**Firebase Setup (Authentication):**
\`\`\`env
FIREBASE_TYPE="service_account"
FIREBASE_PROJECT_ID="your-project-id"
FIREBASE_PRIVATE_KEY_ID="your-private-key-id"
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\\n...\\n-----END PRIVATE KEY-----\\n"
FIREBASE_CLIENT_EMAIL="firebase-adminsdk-xxx@your-project-id.iam.gserviceaccount.com"
FIREBASE_CLIENT_ID="1234567890"
FIREBASE_AUTH_URI="https://accounts.google.com/o/oauth2/auth"
FIREBASE_TOKEN_URI="https://oauth2.googleapis.com/token"
FIREBASE_AUTH_PROVIDER_X509_CERT_URL="https://www.googleapis.com/oauth2/v1/certs"
FIREBASE_CLIENT_X509_CERT_URL="https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-xxx..."
\`\`\`

**Gemini API Setup (AI Explanations):**
The AI Explainer feature supports API key rotation to bypass rate limits. You can provide up to 3 keys:
\`\`\`env
GEMINI_API_KEY_1="your-first-gemini-key"
GEMINI_API_KEY_2="your-second-gemini-key"
GEMINI_API_KEY_3="your-third-gemini-key"

# Or just use one fallback key:
# GEMINI_API_KEY="your-single-key"
\`\`\`

### 2️⃣ Install Dependencies

\`\`\`bash
pip install -r requirements.txt
\`\`\`

### 2️⃣ Start Server

\`\`\`bash
python app.py
\`\`\`

Server runs at:

\`\`\`
http://localhost:5000
\`\`\`

The server auto-initialises \`greensense.db\`, loads the hybrid recommender from \`hybrid_recommender_v2.joblib\`, and syncs any previously registered crops from SQLite back into the in-memory catalog.

---

## 🔬 Research & Academic Value

- Demonstrates **learning-to-rank in precision agriculture**
- Novel application of **Reciprocal Rank Fusion** for hybrid ML + content-based crop recommendation
- Addresses the **cold-start problem** in agricultural recommender systems without retraining
- Explainable recommendations via per-dimension agronomic signal breakdown
- Suitable for **journal or conference submission** (ML in agriculture, recommender systems, IoT)

---

## 📌 Future Enhancements

- 📊 Temporal modelling with LSTMs for seasonal trend capture
- 🌦️ Weather API integration for forecast-aware recommendations
- 📱 Mobile app interface with offline sensor support
- 🧠 Personalized farmer profiles with preference learning
- ☁️ Cloud deployment (AWS/GCP) with auto-scaling
- 🔁 Active learning loop: use registered crop data to trigger automatic retraining

---

<!-- ## 👨‍💻 Author

**Tanush Sudheer Tambe**

Final Year Computer Engineering Student — University of Mumbai

Specialization: IoT · Machine Learning · Data Science -->

---

## 📜 License

This project is licensed under the **MIT License**.

See \`LICENSE\` file for details.

---
`,
    architectureNodes: [
      { id: "iot", label: "ESP32 + Soil Sensors", type: "input" },
      { id: "backend", label: "Flask Web API", type: "process" },
      { id: "ml_rank", label: "CatBoost YetiRanker", type: "model" },
      { id: "sim_cache", label: "SQLite Cosine Cache", type: "database" },
      { id: "gemini", label: "Gemini 2.5 (Pydantic)", type: "model" },
      { id: "dashboard", label: "React Dashboard", type: "output" }
    ],
    architectureLinks: [
      { source: "iot", target: "backend", label: "Telemetry" },
      { source: "backend", target: "ml_rank", label: "Vector" },
      { source: "backend", target: "sim_cache", label: "Lookup" },
      { source: "sim_cache", target: "gemini", label: "Cache Miss" },
      { source: "ml_rank", target: "dashboard", label: "Ranked list" },
      { source: "gemini", target: "dashboard", label: "Explanation" }
    ]
  },
  {
    id: "agrolm",
    title: "AgroLM: Domain-Adapted Agricultural QA",
    period: "May 2026 - Ongoing",
    category: "ml-genai",
    tech: ["QLoRA", "PEFT", "TRL", "Gemma 3-1B-IT", "BitsAndBytes", "HuggingFace Transformers", "ROUGE", "BERTScore", "Gradio"],
    metrics: [
      { label: "ROUGE-L Improvement", value: "+237%" },
      { label: "BERTScore F1", value: "0.8209" },
      { label: "LoRA Trainable Params", value: "<1%" }
    ],
    githubUrl: "https://github.com/tambetanush/agrolm",
    hfUrl: "https://huggingface.co/spaces/DumAcc000111/AgroLM-demo",
    summary: "Domain-adapted agricultural dialogue model fine-tuned on Gemma 3-1B-IT using QLoRA. Optimized to run on consumer hardware while matching larger models in specialized farming question answering.",
    description: `# AgroLM: Agricultural Q&A Fine-Tuning with Gemma 3

AgroLM is a domain-specific, highly optimized language model designed to act as an expert agricultural advisor. By utilizing **QLoRA (Quantized Low-Rank Adaptation)**, the lightweight foundation model **Gemma 3 (1B Instruct)** was fine-tuned on agricultural query-response data. This repository documents the entire lifecycle of the project, including data prep, 4-bit quantization, training dynamics, safety checkpointing, evaluation metrics, and deployment.

---

## 📊 Key Results & Evaluation

The fine-tuned model (AgroLM) was evaluated against the base model on a held-out test split of **2,262 examples**. The evaluation measured surface-level n-gram overlap (**ROUGE**) and semantic similarity (**BERTScore** using \`distilbert-base-uncased\`).

### Performance Metrics Comparison

| Metric | Base Model (Gemma-3-1B-IT) | AgroLM (Fine-tuned) | Delta (Absolute) | Improvement (%) |
| :--- | :---: | :---: | :---: | :---: |
| **ROUGE-1** | 0.1284 | 0.3496 | **+0.2212** | **+172.3%** |
| **ROUGE-2** | 0.0278 | 0.1496 | **+0.1218** | **+438.1%** |
| **ROUGE-L** | 0.0895 | 0.3146 | **+0.2251** | **+251.5%** |
| **BERTScore F1** | 0.7041 | 0.8209 | **+0.1168** | **+16.6%** |

![Evaluation Comparison Chart](/screenshots/agrolm/evaluation_comparison.png)

> [!NOTE]  
> The delta shows a massive boost in precision, recall, and coherence (ROUGE), alongside a substantial increase in semantic similarity (BERTScore F1). This indicates the model successfully transitioned from a general assistant to a highly accurate agricultural oracle.

---

## 🖥️ Interactive Gradio Demo (Side-by-Side Comparison)

An interactive web interface is hosted on Hugging Face Spaces to allow farmers, students, and developers to compare the base model and the fine-tuned AgroLM side-by-side.

* **Live Demo Space:** [AgroLM Demo on Hugging Face Spaces ↗](https://huggingface.co/spaces/DumAcc000111/AgroLM-demo)
* **Local Code:** The demo is fully contained in [app.py](file:///e:/Projects/AgroLM/app.py).

### How to Run Locally

1. **Set your Hugging Face Token:**
   \`\`\`bash
   # Linux/macOS
   export HF_TOKEN="your_huggingface_token"
   
   # Windows PowerShell
   $env:HF_TOKEN="your_huggingface_token"
   \`\`\`
2. **Install Gradio and Hugging Face dependencies:**
   \`\`\`bash
   pip install gradio transformers peft torch accelerate
   \`\`\`
3. **Launch the application:**
   \`\`\`bash
   python app.py
   \`\`\`

---

## 🚂 Training Dynamics

The model was trained for **2 epochs** (1,274 steps) using a Tesla T4 GPU on Kaggle. 

- **Training Time:** ~4 hours 8 minutes
- **Initial Cross-Entropy Loss:** ~14.65
- **Final Cross-Entropy Loss:** **1.04**
- **Effective Batch Size:** 16 (per-device batch size \`1\` × gradient accumulation steps \`16\` to optimize VRAM utilization)
- **Learning Rate:** 2e-4 with Cosine decay and 3% warmup steps

![Training Loss Curve](/screenshots/agrolm/training_loss.png)

---

## ⚙️ Architecture & Hyperparameter Configuration

The configuration is fully parameterized in the notebook to allow easy sweeps and environment adaptation.

\`\`\`python
MODEL_ID               = "google/gemma-3-1b-it"   # Base Model
HF_DATASET_ID          = "KisanVaani/agriculture-qa-english-only"  # ~22.6k QA pairs

# --- LoRA Parameters ---
LORA_R                 = 16                       # LoRA Rank
LORA_ALPHA             = 32                       # Scaling Factor (alpha/r = 2x)
LORA_DROPOUT           = 0.05                     # Regularization
TARGET_MODULES         = ["q_proj", "k_proj", "v_proj", "o_proj"]

# --- SFT Training Parameters ---
NUM_EPOCHS             = 2
BATCH_SIZE             = 1                        # Optimization for 15GB VRAM
GRAD_ACCUM             = 16                       # Effective Batch Size = 16
LEARNING_RATE          = 2e-4
MAX_SEQ_LEN            = 512
WARMUP_RATIO           = 0.03
OUTPUT_DIR             = "./agrolm-checkpoints"
\`\`\`

---

## 🛠️ Implementation Workflow

### 1. Environment & Setup
The project supports Google Colab, Kaggle, and Local execution environments. Libraries are configured to bypass memory allocation bugs on older hardware (such as caching allocator bugs on Tesla T4 GPUs).
* Quantization requires \`bitsandbytes\` (4-bit NF quantization).
* Model routing and training are handled via \`peft\`, \`transformers\`, and \`trl\`.

### 2. Dataset Preparation & Formatting
The dataset \`KisanVaani/agriculture-qa-english-only\` is formatted using Gemma's native chat template:
\`\`\`text
<bos><start_of_turn>user
Answer the question asked by the user.

which pesticides causes liver disease?<end_of_turn>
<start_of_turn>model
Copper sulfate<end_of_turn>
\`\`\`
* **Length Filtering:** Sentences exceeding \`512\` tokens are filtered out before splitting.
* **Train/Test Split:** 90% Training split (20,353 rows) and 10% Validation/Test split (2,262 rows).

### 3. Quantization & Model Loading (QLoRA)
To run fine-tuning on consumer-grade hardware or free-tier cloud instances (Tesla T4 GPU with 16GB VRAM):
- **Quantization:** Load weights in 4-bit NormalFloat (\`nf4\`) format with double quantization to reduce storage requirements.
- **Compute Precision:** Matrix multiplication is calculated in \`float16\`.
- **Memory Consumption:** Quantization reduced the active VRAM footprint from **~2.5 GB** to just **0.96 GB** upon loading, freeing up 14.67 GB of VRAM for training activations.

### 4. PEFT (LoRA) Setup
The model parameters are wrapped using \`prepare_model_for_kbit_training()\`. LoRA adapters are injected into the attention projection modules (\`q_proj\`, \`k_proj\`, \`v_proj\`, \`o_proj\`).
* **Trainable Parameters:** \`2,981,888\` parameters (~0.30% of the base model's 1.00B total parameters).

### 5. Training & Safety Checkpointing
To prevent loss of progress during long runs on preemptible hardware (e.g., Kaggle/Colab runtimes), the training logic incorporates a robust checkpointing strategy:
- **Auto-Resume:** Automatically detects and loads the latest checkpoint (e.g. \`checkpoint-1274\`) from the checkpoints directory.
- **Interrupt Handling:** Intercepts standard system interrupts (\`SIGINT\`, \`SIGTERM\`, or Jupyter keyboard interrupts) and executes a clean shutdown sequence that dumps an \`interrupt-checkpoint\` to disk.
- **Crash Recovery:** Wraps the training loop in an exception handling block that exports a \`crash-checkpoint\` if a system-level error or Python exception occurs.

### 6. Merging & Adapter Deployment
After training, the low-rank adapters are baked back into the base model weights to produce a standalone model, removing PEFT overhead during inference.
\`\`\`python
from peft import PeftModel
from transformers import AutoModelForCausalLM

# Load base model in half precision (float16)
base_model = AutoModelForCausalLM.from_pretrained("google/gemma-3-1b-it", torch_dtype=torch.float16)
# Load adapter weights and merge
model = PeftModel.from_pretrained(base_model, "./agrolm-checkpoints")
merged_model = model.merge_and_unload()
merged_model.save_pretrained("./agrolm-merged")
\`\`\`

---

## 🔮 Qualitative Sample Predictions

Below are sample inference outputs showing the precision and alignment of the fine-tuned model:

**Q: What is the best fertilizer for rice in sandy soil?**  
> **AgroLM:** For sandy rice cultivation, a balanced fertilizer with a higher proportion of nitrogen (N) is recommended. A commonly used fertilizer for rice in sandy soil is NPK 15-00, which provides 15% nitrogen (N), 0% phosphorus (P) and 0% potassium (K).

**Q: My tomato leaves show yellow patches with brown borders. What disease could this be?**  
> **AgroLM:** Septoria leaf spot is the most likely disease affecting tomato leaves with yellow patches with brown borders. It is caused by a fungus and can spread rapidly in warm, humid conditions.

**Q: What soil pH range is ideal for wheat cultivation?**  
> **AgroLM:** Wheat requires a soil pH range between 5.5 and 6.5 for optimal growth and nutrient uptake.

---

## 🚀 How to Use the Model

The final trained adapter is uploaded and hosted on the Hugging Face Hub.

### Load the Adapter on Top of Gemma-3-1B
\`\`\`python
import torch
from transformers import AutoModelForCausalLM, AutoTokenizer
from peft import PeftModel

MODEL_ID = "google/gemma-3-1b-it"
ADAPTER_ID = "DumAcc000111/agrolm-eval"

# Load tokenizer and base model
tokenizer = AutoTokenizer.from_pretrained(MODEL_ID)
base_model = AutoModelForCausalLM.from_pretrained(
    MODEL_ID,
    torch_dtype=torch.float16,
    device_map="auto"
)

# Attach the agricultural Q&A adapter
model = PeftModel.from_pretrained(base_model, ADAPTER_ID)
model.eval()

# Run Inference
question = "What soil pH range is ideal for wheat cultivation?"
messages = [
    {"role": "user", "content": f"Answer the question asked by the user.\\n\\n{question}"}
]
prompt = tokenizer.apply_chat_template(messages, tokenize=False, add_generation_prompt=True)
inputs = tokenizer(prompt, return_tensors="pt").to(model.device)

with torch.no_grad():
    outputs = model.generate(**inputs, max_new_tokens=150, temperature=0.1, do_sample=True)
    response = tokenizer.decode(outputs[0][inputs["input_ids"].shape[1]:], skip_special_tokens=True)
    print(response.strip())
\`\`\`
`,
    architectureNodes: [
      { id: "dataset", label: "KisanVaani QA Dataset", type: "input" },
      { id: "quant", label: "4-bit NF4 Quantizer", type: "process" },
      { id: "lora", label: "LoRA Adapters (r=16)", type: "model" },
      { id: "trainer", label: "TRL SFTTrainer", type: "process" },
      { id: "gemma", label: "Fine-tuned Gemma 3-1B", type: "model" },
      { id: "gradio", label: "HF Spaces / Gradio UI", type: "output" }
    ],
    architectureLinks: [
      { source: "dataset", target: "trainer" },
      { source: "quant", target: "trainer" },
      { source: "lora", target: "trainer" },
      { source: "trainer", target: "gemma" },
      { source: "gemma", target: "gradio", label: "Inference" }
    ]
  },
  {
    id: "careeratlas",
    title: "CareerAtlas: AI-Powered Career Assistant",
    period: "Feb - May 2026",
    category: "ml-genai",
    tech: ["FastAPI", "React", "Pinecone", "Gemini API", "Groq", "Supabase", "Pydantic", "PyMuPDF", "Jina Embeddings"],
    metrics: [
      { label: "Mean Extraction Score", value: "0.898 / 1.0" },
      { label: "LLM-as-a-Judge Rating", value: "8.1 / 10" },
      { label: "Vector Search Cosine", value: "Pinecone" }
    ],
    githubUrl: "https://github.com/tambetanush/CareerAtlas",
    summary: "A collaborative multi-agent platform designed to analyze resumes, identify career skill gaps, conduct deep job market research, generate learning roadmaps, and match users to job profiles.",
    description: `# CareerAtlas

**Note: The working repository is currently private due to workshop rules.**

## About The Project

CareerAtlas is an AI-powered platform designed to supercharge your career journey. It acts as an intelligent career companion, analyzing your resume, identifying skills gaps, researching the market, and matching you with relevant job opportunities.

Through its multi-agent architecture, CareerAtlas provides tailored roadmaps and actionable insights to help you achieve your career goals.

## Features

- **Intelligent Resume Extraction:** Automatically parses resumes to extract key skills, work experience, and personal projects.
- **Skill Gap Analysis:** Compares your current skill set against target job roles to identify missing technical and soft skills.
- **Personalized Career Roadmaps:** Generates structured learning paths to help you bridge your skill gaps and reach your career objectives.
- **Market-Driven Job Finder:** Recommends relevant job openings tailored to your profile and location.
- **Deep Research Insights:** Conducts in-depth research on industries, companies, and roles to provide actionable career intelligence.
- **Interactive Dashboard:** A seamless, user-friendly interface to track your progress, view job matches, and explore learning roadmaps.

## Methodology

CareerAtlas is built upon a **Multi-Agent Architecture** where specialized AI agents handle specific aspects of the career planning process:

1. **Extraction & Matching Agents:** Dedicated agents analyze resume data and query job markets to find the best possible matches.
2. **Gap Analysis & Research Agents:** Deep researcher agents investigate market trends, while gap analysis agents compare user profiles against industry standards.
3. **Evaluation Framework:** Extensive evaluation notebooks were developed to iteratively test, benchmark, and improve agent accuracy and reliability.
4. **Web Deployment:** The agents are orchestrated and deployed behind a visually engaging web interface, providing real-time career guidance.

## Walkthrough

Here is a visual walkthrough of the platform:

### 1. Landing Page

![Landing Page](/screenshots/careeratlas/1 landing page.png)

### 2. User Dashboard

![Dashboard](/screenshots/careeratlas/2 dashboard.png)

### 3. Resume Extraction - Skills

![Resume Skills](/screenshots/careeratlas/3 resume skills.png)

### 4. Resume Extraction - Experience

![Resume Skills & Experience](/screenshots/careeratlas/4 resume skills experience.png)

### 5. Resume Extraction - Projects

![Resume Projects](/screenshots/careeratlas/5 resume projects.png)

### 6. Career Roadmap

![Roadmap](/screenshots/careeratlas/6roadmap.png)

### 7. Skill Gap Analysis

![Gap Analysis](/screenshots/careeratlas/7 gaps.png)

### 8. Job Finder

![Job Finder](/screenshots/careeratlas/8 jobs.png)

## Evaluation & Benchmarks

To ensure the reliability and accuracy of CareerAtlas, we developed an extensive evaluation framework using **LLM-as-a-Judge** methodologies and field-level metrics. Our evaluation process rigorous tests the core agents:

### 1. Gap Analysis Agent
We conducted a head-to-head comparison between our RAG-augmented agent (Pinecone + BM25 + Jina Reranker) and a Naive LLM across 10 realistic career transition personas. An independent LLM judge (Google Gemini) scored both approaches, proving that our agent significantly outperforms the baseline in relevance, accuracy, and actionability by grounding recommendations in real job-market taxonomy.
![Gap Analysis Evaluation](/screenshots/careeratlas/eval_Gap_Analysis_Evaluation_0.png)

### 2. Resume Extraction Agent
We systematically tested the extraction pipeline using ground-truth test cases, measuring field-level metrics (Precision, Recall, F1 for lists; Accuracy for strings). Real PDF resumes were also scored out of 10 by an LLM-as-Judge to guarantee high fidelity in parsing skills and experiences.
![Resume Extraction Evaluation](/screenshots/careeratlas/eval_resume_extraction_eval_0.png)

### 3. Deep Researcher Agent
This LangGraph-based agent (which plans, searches via Tavily, and structures learning pathways) was evaluated on diverse profiles. An OpenRouter judge validated the quality of the generated roadmaps, scoring the pathways based on resource relevance and curriculum structure.
![Deep Researcher Evaluation](/screenshots/careeratlas/eval_deep_researcher_evaluation_notebook_0.png)

### 4. Job Hunter Agent
Using Adzuna for search and Jina for embeddings, the job hunter was evaluated on mock profiles to ensure high role relevance, location compliance, and skill alignment.
![Job Hunter Evaluation](/screenshots/careeratlas/eval_job_hunter_evaluation_0.png)

## Contributors

- **Tanush Tambe** - Resume Extractor and Job Finder, Evaluation Notebooks
- **Dripto Bhattacharyya** - Deep Researcher and Deployment
- **Sidhaarth Shree** - Gap Analysis Agent
- **G Hamsini** - Contributor
- **Shivanshu Gupta** - Contributor
`,
    architectureNodes: [
      { id: "pdf", label: "PDF Resume", type: "input" },
      { id: "extractor", label: "Resume Extractor Agent", type: "process" },
      { id: "jina", label: "Jina Embeddings", type: "process" },
      { id: "pinecone", label: "Pinecone Vector DB", type: "database" },
      { id: "agent_orchestrator", label: "FastAPI Orchestrator", type: "process" },
      { id: "ui", label: "React UI Dashboard", type: "output" }
    ],
    architectureLinks: [
      { source: "pdf", target: "extractor", label: "PyMuPDF" },
      { source: "extractor", target: "jina", label: "Profile Text" },
      { source: "jina", target: "pinecone", label: "Upsert / Query" },
      { source: "pinecone", target: "agent_orchestrator", label: "Job matches" },
      { source: "agent_orchestrator", target: "ui" }
    ]
  },
  {
    id: "herdpulse",
    title: "HerdPulse: Cattle Health Diagnostics",
    period: "2025 - 2026",
    category: "cv-iot",
    tech: ["Flask", "SQLAlchemy", "SQLite", "YOLOv8-OBB", "OpenCV", "PyTorch", "ResNet18", "XGBoost", "LightGBM", "APScheduler"],
    metrics: [
      { label: "Cow Classification Tasks", value: "11 Conditions" },
      { label: "Calf Classification Tasks", value: "5 Conditions" },
      { label: "Telemetry Logging", value: "Real-time" }
    ],
    githubUrl: "https://github.com/tambetanush/HerdPulse",
    liveUrl: "http://tanushtambe.dns.navy/herdpulse/",
    summary: "Multimodal livestock health diagnostics combining YOLOv8 oriented bounding boxes, PyTorch ResNet18 feature extraction, and IoT telemetry to detect health anomalies in cattle.",
    description: `# HerdPulse — Cattle Health Monitoring & Diagnostics System

### _Precision Livestock Telemetry & Machine Learning Classification Platform_

HerdPulse is a production-grade Flask web application for monitoring, tracking, and diagnosing health conditions in livestock. It integrates real-time IoT collar telemetry, computer vision object-detection pipelines, and machine learning ensemble classifiers to give livestock managers and veterinary experts instant diagnostic capabilities.

The platform provides dedicated modules for adult cows (**CowModel** — XGBoost) and calves (**CalfModel** — LightGBM), dynamically adjusting its diagnostics matrix and ML models based on the animal's age profile.

---

## 🌟 Key Features

- **Dual Animal System** — Separate Cow and Calf portals with dedicated disease classifiers, thresholds, and telemetry baselines.
- **Live IoT Telemetry Ingestion** — REST endpoint (\`/api/ingest-raw\`) accepts real-time collar sensor streams and persists them in SQLite.
- **Interactive Metrics Dashboard** — Two-tab dashboard (Metrics + Telemetry Logs) with Chart.js visualisations: Illness Incidence Curve, Healthy Herd Growth bar chart, Climatic Vitals Profile, and Active Health Distribution pie chart.
- **ML Diagnostics Pipeline** — Three input modes: manual vitals entry, Google Sheets sync, or YOLO-OBB live video processing.
- **YOLOv8-OBB Body Part Segmentation** — Offloaded to a remote Google Colab GPU server; crops Eye, Body, Hoof, Udder, Mouth regions automatically.
- **ResNet18 CNN Feature Extraction** — Local PyTorch pipeline converts each crop into a 512-dim semantic embedding vector.
- **Stacked Feature Classifier** — Merges 7 tabular sensor features with CNN embeddings into a single vector fed to the ensemble model (shape \`[1, 2055]\` for Calf, \`[1, 2567]\` for Cow).
- **Prediction History Audit** — All predictions are logged to SQLite with timestamp, animal type, predicted condition, confidence %, and video source.
- **Scheduled Snapshot Rebuild** — APScheduler job rebuilds dashboard aggregate snapshots every 10 minutes.
- **Dark / Light Theme Toggle** — Persisted in \`localStorage\`; full Tailwind \`dark:\` variant support via \`.dark-mode\` class selector.
- **Accessibility Controls** — Font size selector (A- / A / A+) persisted across sessions.

---

## 📸 Platform Tour & Screens

### 1. Secure Login Screen

Streamlined card layout with a **Demo Credentials quick-login widget** — one click to sign in as \`demo\` or \`admin\`.

![Login Screen](/screenshots/herdpulse/1 login.png)

---

### 2–6. Home Portal — Full Page Walkthrough

The home page (\`/\`) is a multi-section interactive command centre:

#### 2. Hero & System Selection Cards

Cow System (XGBoost Ensemble — classifies 11 adult pathologies) and Calf System (LightGBM Ensemble — classifies 5 calf pathologies) gateway cards with live sensor port indicators.

![Home — Hero & System Cards](/screenshots/herdpulse/2 dashboard 1.png)

#### 3. Data Pipeline Flowchart — Nodes 1 & 2

Animated SVG flowchart showing: **(1) Telemetry & Video Input** (collar CSV + Video MP4, live ECG wave animation) → **(2) YOLO OBB & CNN Extraction** (body-part bounding box scanner animation, \`[1, 512]\` tensor output).

![Home — Pipeline Nodes 1–2](/screenshots/herdpulse/3 dashboard 2.png)

#### 4. Data Pipeline Flowchart — Nodes 3 & 4

**(3) Multi-Modal Feature Stacking** (Vitals + CNN Crops → Stacked \`[1, 2567]\` Ensemble Matrix) → **(4) Actionable Diagnostics & Logs** (confidence gauge, live beacon radar, SQLite logger node).

![Home — Pipeline Nodes 3–4](/screenshots/herdpulse/4 dashboard 3.png)

#### 5. How To Use — 4-Step Workflow Guide

Step cards guiding users through: Choose Portal → Audit Telemetry → Run ML Diagnostics → Trace Predictions.

![Home — How To Use Guide](/screenshots/herdpulse/5 dashboard 4.png)

#### 6. Telemetry Baseline & ML Specs Reference Panel

Side-by-side reference listing all physiological normal ranges (Temperature \`38.5°C – 39.5°C\`, Heart Rate \`48 – 84 BPM\`, SpO₂ \`90–100%\`, Accelerometry Magnitude) alongside deep learning pipeline specs (YOLOv8-OBB, ResNet18, Tabular+CNN Stacking).

![Home — Specs Reference](/screenshots/herdpulse/6 dashboard 5.png)

---

### 7. Cow System Metrics Dashboard

Tabbed dashboard for adult cattle. **Metrics Dashboard** tab shows: 4 KPI stat cards (Total Herd, Healthy Active, Needs Audit, Illness Peak month), Active Classifier Scope panel listing all 11 CowModel disease classes, Illness Incidence Curve, and Healthy Herd Growth bar chart.

**CowModel classes:** Bovine Keratoconjunctivitis · Bovine Respiratory Disease · Bovine Spongiform Encephalopathy · Foot and Mouth Disease · Healthy · Johns Disease · Leptospirosis · Lumpy Skin Disease · Mastitis · Pneumonia · Ringworm

![Cow Dashboard — KPIs & Disease Classes](/screenshots/herdpulse/7 cow dashboard.png)

---

### 8. Cow Dashboard — Charts Section

Lower half of the Metrics tab: **Climatic Herd Vitals Profile** (dual-axis bar + line chart for Avg Temp & Avg HR) and **Active Health Distribution** (pie chart — Healthy vs Unhealthy split).

![Cow Dashboard — Vitals & Health Charts](/screenshots/herdpulse/8 cow graphs.png)

---

### 9. Cow System — Telemetry Logs Tab

**Telemetry Logs** tab with searchable, filterable raw IoT records from SQLite. Columns: Animal ID, Temperature (°C), Heart Rate (BPM), Vitals Level (acc mag), Condition/Health badge, Timestamp. Live record count badge (e.g. \`RECORDS RECORDED: 4068\`).

![Cow Telemetry Logs](/screenshots/herdpulse/9 cow readings.png)

---

### 10. Calf System Metrics Dashboard

Dedicated CalfModel dashboard with identical KPI + chart layout adapted for calf data.

**CalfModel classes:** Coccidiosis · Foot and Mouth Disease · Healthy · Lumpy Skin Disease · Pneumonia

![Calf Dashboard — KPIs & Disease Classes](/screenshots/herdpulse/10 calf dashbaord.png)

---

### 11. Calf System — Telemetry Logs Tab

Calf collar telemetry log table with CALF-ID prefixed Animal IDs and live health condition badges (Healthy / Unhealthy). Record count badge (e.g. \`RECORDS RECORDED: 4797\`).

![Calf Telemetry Logs](/screenshots/herdpulse/11 calf reasings.png)

---

### 12. Diagnostics — ML Disease Prediction

Three-stage diagnostics form with live model status badges (\`MODEL\`, \`YOLO\`, \`CNN\`):

1. **Calf / Cow System Mode toggle**
2. **Google Sheet Fetch** — enter Animal ID to auto-populate sensor form
3. **Sensor Readings** — 7 fields: Temperature, Heart Rate, X/Y/Z Acceleration, SpO₂; derived Acc Magnitude computed automatically
4. **Video Input for YOLO** — select stored video or upload new MP4 to trigger OBB body-part detection

![ML Diagnostics Form](/screenshots/herdpulse/12 prediction.png)

---

### 13. Diagnostics History Audit Log

Chronological table of all ML predictions with: Date & Time, Animal Type badge, Predicted Condition badge (colour-coded), Confidence Level (% + progress bar), Analyzed Video Source filename. Global total prediction count badge.

![Diagnostics History](/screenshots/herdpulse/13 history.png)

---

## 🛠️ System Architecture

\`\`\`mermaid
graph TD
    A[IoT Collar — 7 Sensor Streams] -->|temp, hr, x/y/z acc, SpO₂| G(Diagnostics Feature Vector)
    B[Video Input — MP4/AVI/MOV] -->|1 frame/sec sample| C[Remote Colab YOLOv8-OBB API]
    C -->|Detected bounding boxes| D[Local Flask Crop Engine]
    D -->|Crops: Eye, Body, Hoof, Udder, Mouth| E[Local ResNet18 CNN Extractor]
    E -->|512-dim embeddings per part| G
    G --> H[Ensemble Classifier]
    H -->|CalfModel LightGBM — 2055 features| I[Calf Diagnosis + Confidence %]
    H -->|CowModel XGBoost — 2567 features| J[Cow Diagnosis + Confidence %]
    I --> K[(SQLite — PredictionHistory)]
    J --> K
\`\`\`

### Pipeline Steps

1. **Tabular Telemetry (7 features)** — Temperature, Heart Rate, X/Y/Z Acceleration, SpO₂, and derived acceleration magnitude \`√(x²+y²+z²)\`.
2. **YOLO OBB Object Detection (remote)** — Sampled video frames are POSTed to a Google Colab GPU server running YOLOv8-OBB. Detected body-part bounding boxes are returned as JSON.
3. **Crop & CNN Extraction (local)** — Flask crops each bounding box from the frame and passes it through a local PyTorch ResNet18 (ImageNet pretrained, FC layer removed) to extract a \`[512]\` feature vector per body part. Top-k detections are averaged.
4. **Feature Stacking & Classification** — Tabular features are concatenated with all CNN embeddings. The combined vector is passed to the active ensemble model:
    - **CalfModel** (LightGBM) — \`[1, 2055]\` input → 5-class output
    - **CowModel** (XGBoost) — \`[1, 2567]\` input → 11-class output
5. **Logging** — Prediction result, confidence, and video source are persisted to \`PredictionHistory\` in SQLite.

---

## 📁 Project Directory Structure

\`\`\`text
backend/
├── instance/
│   └── db.sqlite3                      # SQLite DB — raw logs, users, snapshots, prediction history
├── models/
│   ├── CalfModel.joblib                # LightGBM classifier (5 calf disease classes, ~12.7 MB)
│   ├── CowModel.joblib                 # XGBoost classifier (11 cow disease classes, ~32.2 MB)
│   ├── calf_labelencoder.joblib        # LabelEncoder for CalfModel target classes
│   └── cow_labelencoder.joblib         # LabelEncoder for CowModel target classes
├── Notebook/
│   └── Colab_Cattle_YOLO.ipynb         # Notebook for google colab YOLO server
├── static/
│   └── screenshots/                    # Platform tour PNG files (1–13)
├── templates/
│   ├── base.html                       # Global shell — Tailwind CDN, Playfair/Lora/Space Mono fonts,
│   │                                   #   dark mode (.dark-mode selector), nav, accessibility controls
│   ├── index.html                      # Home portal — system cards, SVG pipeline flowchart,
│   │                                   #   4-step guide, telemetry & ML spec panels
│   ├── login.html                      # Sign-in page with Quick Demo / Quick Admin one-click login
│   ├── dashboard.html                  # Dual-tab metrics dashboard & telemetry logs (Cow / Calf)
│   ├── predict.html                    # ML diagnostics — Google Sheet fetch, sensor form, YOLO video
│   └── history.html                    # Prediction audit history table
├── uploads/
│   └── images/                         # Temporary frame crops generated during YOLO inference
├── videos/                             # Test / uploaded videos for YOLO analysis
├── Yolo/                               # YOLO model weights / config (Colab server side)
├── app.py                              # Flask backend — routes, ML pipeline, scheduler, DB logic
├── models.py                           # SQLAlchemy ORM models (RawCattleData, DashboardSnapshot,
│                                       #   User, PredictionHistory)
├── datagen.py                          # Synthetic data generation script
├── requirements.txt                    # Python dependency list
└── synthetic_cattle_health_sensor.csv  # Seed dataset — 9 556 raw collar records (auto-imported)
\`\`\`

---

## 🗄️ Database Models

| Table                 | Purpose                                                                                               |
| --------------------- | ----------------------------------------------------------------------------------------------------- |
| \`raw_cattle_data\`     | Raw IoT sensor readings — timestamp, cow_id, animal_type, temp, hr, x/y/z acc, SpO₂, health_condition |
| \`dashboard_snapshots\` | Pre-aggregated monthly stats per animal type rebuilt every 10 min by APScheduler                      |
| \`users\`               | Authenticated users (bcrypt-hashed passwords)                                                         |
| \`prediction_history\`  | ML diagnostic run log — animal_type, predicted_disease, confidence, video_names                       |

---

## 🔌 REST API Reference

| Method | Endpoint                               | Auth     | Description                                                     |
| ------ | -------------------------------------- | -------- | --------------------------------------------------------------- |
| \`POST\` | \`/api/ingest-raw\`                      | None     | Ingest a single IoT collar reading into \`raw_cattle_data\`       |
| \`GET\`  | \`/api/dashboard-latest?type=cow\\|calf\` | Required | Fetch the latest dashboard snapshot for an animal type          |
| \`GET\`  | \`/api/raw-logs?type=cow\\|calf\`         | Required | Retrieve all telemetry log records for an animal type           |
| \`GET\`  | \`/api/fetch-readings?cow_id=XXX\`       | None     | Proxy Google Sheet AppScript to auto-fill sensor form           |
| \`GET\`  | \`/api/videos\`                          | None     | List available video files in the \`/videos\` directory           |
| \`POST\` | \`/api/upload-video\`                    | None     | Upload a new video file to the \`/videos\` directory              |
| \`POST\` | \`/api/predict\`                         | Required | Run full ML diagnostic pipeline (sensor + YOLO + CNN)           |
| \`GET\`  | \`/health\`                              | None     | Health check — returns \`{"status": "Flask backend running ✅"}\` |

---

## 🚀 Setup & Startup Guide

### Prerequisites

- **Python 3.10+**
- A running **Google Colab notebook** with YOLOv8-OBB server and a public tunnel (Ngrok / Cloudflare)

---

### Step 1 — Start the Remote YOLO Server (Google Colab)

1. Open the Colab notebook in your browser (Notebook is present in Notebook folder \`Colab_Cattle_YOLO.ipynb\`)
2. Click **Runtime → Run all** (or press \`Ctrl + F9\`).
3. Scroll to the last cell and copy the public tunnel URL printed (e.g. \`https://xxxx.ngrok-free.app\`).

> ⚠️ Keep the Colab tab open — closing it stops the tunnel.

---

### Step 2 — Install Dependencies

\`\`\`powershell
cd "E:\\Projects\\Cattle Disease Prediction\\backend"
pip install -r requirements.txt
\`\`\`

---

### Step 3 — Set Environment Variables & Start Flask

**PowerShell:**

\`\`\`powershell
$env:COLAB_YOLO_URL = "https://YOUR-TUNNEL-URL.ngrok-free.app"
python app.py
\`\`\`

**Command Prompt:**

\`\`\`cmd
set COLAB_YOLO_URL=https://YOUR-TUNNEL-URL.ngrok-free.app
python app.py
\`\`\`

> The Google Sheet AppScript URL is already hardcoded in \`app.py\` but can be overridden via the \`GOOGLE_SHEET_URL\` environment variable.

You should see:

\`\`\`
[OK] CalfModel, CowModel and LabelEncoders loaded
[OK] ResNet18 CNN feature extractor loaded on cpu
[OK] Remote Colab YOLO reachable: https://...
* Running on http://127.0.0.1:5000
\`\`\`

---

### Step 4 — Open in Browser

Navigate to **[http://127.0.0.1:5000](http://127.0.0.1:5000)**

Use **Quick Demo** (\`demo / demo\`) or **Quick Admin** (\`admin / admin\`) for instant one-click login.

---

## 📋 Telemetry Sensor Baseline Reference

| Metric                           | Normal Range             | Notes                                     |
| -------------------------------- | ------------------------ | ----------------------------------------- |
| Rectal Temperature               | \`38.5°C – 39.5°C\`        | Adult Cow baseline                        |
| Heart Rate                       | \`48 – 84 BPM\`            | Resting range                             |
| Tri-Axial Acceleration (x, y, z) | Derived magnitude \`m/s²\` | Differentiates resting vs. hyper-activity |
| Blood Oxygen Saturation (SpO₂)   | \`90% – 100%\`             | Healthy metabolic indicator               |

---

## 🧰 Tech Stack

| Layer            | Technology                                                                    |
| ---------------- | ----------------------------------------------------------------------------- |
| Backend          | Python 3.10+, Flask, Flask-Login, Flask-Bcrypt, Flask-APScheduler, Flask-CORS |
| Database         | SQLite via SQLAlchemy / Flask-SQLAlchemy                                      |
| ML — Tabular     | XGBoost (CowModel), LightGBM (CalfModel), scikit-learn (LabelEncoder)         |
| ML — Vision      | PyTorch (ResNet18 CPU), torchvision, OpenCV, Pillow                           |
| Object Detection | YOLOv8-OBB (Ultralytics) — remote Colab GPU server                            |
| Data Source      | Google Sheets AppScript Web App (sensor telemetry sync)                       |
| Frontend         | Jinja2 templates, Tailwind CSS CDN, Chart.js                                  |
| Typography       | Playfair Display, Lora, Space Mono (Google Fonts)                             |

---

© 2026 HerdPulse Cattle Health Systems. All rights reserved.
`,
    architectureNodes: [
      { id: "cam", label: "IP Camera Video Feed", type: "input" },
      { id: "yolo", label: "YOLOv8-OBB (Cattle Isolator)", type: "model" },
      { id: "resnet", label: "ResNet18 (Embeddings)", type: "model" },
      { id: "telemetry", label: "Collar IoT Telemetry", type: "input" },
      { id: "classifier", label: "Dual ML Models (XGB/LGB)", type: "model" },
      { id: "api", label: "Flask API & SQLite", type: "process" }
    ],
    architectureLinks: [
      { source: "cam", target: "yolo" },
      { source: "yolo", target: "resnet", label: "Crops" },
      { source: "resnet", target: "classifier", label: "Embeds" },
      { source: "telemetry", target: "api" },
      { source: "classifier", target: "api", label: "Prediction" }
    ]
  },
  {
    id: "aethervolt",
    title: "AetherVolt: YouTube Predictive Engine",
    period: "Feb - May 2026",
    category: "analytics-ds",
    tech: ["Flask", "SQLite", "ReportLab", "NetworkX", "Statsmodels", "Scikit-Learn", "NLTK", "ARIMA"],
    metrics: [
      { label: "Comments Analyzed", value: "4,256" },
      { label: "Unique Users", value: "3,370" },
      { label: "Engagement Trend MAE", value: "Low" }
    ],
    githubUrl: "https://github.com/tambetanush/AetherVolt-YouTube-Analytics",
    liveUrl: "http://tanushtambe.dns.navy/aethervolt/",
    summary: "Advanced YouTube analytics engine mapping comment networks with NetworkX, extracting aspect-based sentiment, and predicting long-term channel engagement trends using ARIMA.",
    description: `# ⚡ AetherVolt YouTube Analytics Dashboard & Predictive Engine

AetherVolt is an end-to-end social media analytics intelligence suite and predictive dashboard engineered to mine engagement patterns, semantic spaces, community topology, and competitive indicators from YouTube channel data.

This project is built using **Flask**, **SQLite**, and **ReportLab** for the dashboard backend, and **Statsmodels (ARIMA)**, **NetworkX**, and **Scikit-Learn** for the analytical and forecasting engine.

---

## 📂 Project Structure & Clean Folder Layout

The repository has been structured cleanly to separate modular scripts, frontend layers, SQLite models, and Jupyter configurations:

\`\`\`
SMA/
├── Notebooks/                                # Standalone topic-wise split notebooks & master portfolio
│   ├── 01_Data_Collection.ipynb
│   ├── 02_Preprocessing_Feature_Engineering.ipynb
│   ├── 03_Exploratory_Data_Analysis.ipynb
│   ├── 04_Content_Topic_Analysis.ipynb
│   ├── 05_Network_Community_Analysis.ipynb
│   ├── 06_Competitor_Intelligence.ipynb
│   ├── 07_Sentiment_ML_Opinion_Mining.ipynb
│   ├── 08_Consolidated_Project_Summary.ipynb
│   └── TESLA_YouTube_Analytics_Portfolio.ipynb   # Master portfolio notebook (Executed, 6.5 MB)
├── src/                                      # Background analytics modules & script package
│   ├── __init__.py
│   ├── models.py                             # SQLAlchemy database model mappings
│   ├── analysis_pipeline.py                  # Data collection, NLP topic modeling, ML classifiers
│   ├── config.py                             # Environment configurations loader (.env parser)
│   ├── scheduler.py                          # Hourly background APScheduler task
│   └── build_notebook.py                     # Jupyter notebook compilation engine
├── static/                                   # CSS styles & web assets
│   └── css/
│       └── style.css                         # Glassmorphic, Light/Dark styling
├── templates/                                # HTML templates for Flask
│   ├── base.html                             # Sidebar shell & theme toggler
│   ├── login.html                            # guest login screen
│   ├── register.html                         # User registration screen
│   ├── dashboard.html                        # Overview telemetry card grids
│   ├── nlp.html                              # NLP sentiment & tag cloud page
│   ├── network.html                          # Vis.js commenter network visualizer
│   ├── competitor.html                       # Competitor benchmarking radar
│   ├── opinions.html                         # Aspect mining & ML comparison table
│   ├── compare.html                          # Side-by-side run delta comparator
│   ├── forecast.html                         # ARIMA forecasting timelines
│   ├── reports.html                          # Centralized reports download panel
│   └── settings.html                         # API credentials config page
├── app.py                                    # Flask Server, routes and controllers (Only Python file in root)
├── .env                                      # Configurations & API credentials (env template)
├── database.db                               # SQLite database storing historical runs
└── outputs/                                  # Relocated analytical outputs (CSV/PNG/JSON/HTML)
\`\`\`

---

## 🚀 Key Dashboard Features

1. **Multi-Page Analytical Workspace:** Offers modules for Overview telemetry, Topic spaces, Co-commenter Network graphs (using Vis.js), Competitor benchmarks (using ApexCharts radar charts), Aspect Opinion Mining, and Historical Comparison.
2. **Persistence Theme Selector:** Allows switching between Light/Dark modes in the top navigation bar, with the state persisted in browser \`localStorage\`.
3. **Hourly Background Scheduler:** Utilizing \`APScheduler\`, the dashboard executes the analytical pipeline every 1 hour to pull, clean, process, and persist data points into SQLite.
4. **Live Data Collection Settings:** An API settings page (\`/settings\`) registers/updates the YouTube Data API key and triggers manual pipeline runs on-demand, falling back to an intelligent simulation if no key is supplied.
5. **Advanced Forecasting (\`/forecast\`):** Forecasts channel Subscriber Growth, Video Views, and Comment Activity for the next 30 days. Uses statsmodels **ARIMA(1, 1, 0)** when history is $\\ge 8$ runs, falling back to a **Linear Regression Trend Line** for low run histories to prevent execution crashes.
6. **Centralized Reports & Exports (\`/reports\`):**
   - **Executive PDF Report:** Dynamically compiles a multi-page, publication-quality PDF using ReportLab Flowables. Includes a KPI summary, vector-drawn aspect sentiment charts, network structures, competitor indices, and an ML accuracy leaderboard.
   - **Gephi XML Export:** Reconstructs the commenter network and downloads a \`.gexf\` file.
   - **Tabular Data:** Downloads clean CSV spreadsheets for Videos list, Comments list, and Competitor stats.

---

## 📈 Jupyter Master Notebook Telemetry & Findings
*The following metrics, figures, and classification scores are extracted directly from the executed master notebook \`TESLA_YouTube_Analytics_Portfolio.ipynb\` in the workspace:*

### 📊 1. Data Scale & Boundaries
- **Videos Analysed:** 50 recent videos
- **Date Range of Corpus:** 2025-08-08 → 2026-05-21
- **Comments Analysed:** 4,256 comments
- **Unique Commenters:** 3,370 users

### 🕸️ 2. Co-Commenter Network Analysis
The graph network is built by connecting comment authors who comment on the same video (co-occurrence):
- **Active Commenters (commenting on $\\ge 2$ videos):** 432
- **Network Graph Size:** 427 nodes | 12,952 edges
- **Graph Density:** 0.1424 (High cohesion)
- **Average Degree:** 60.67 connections per user
- **Louvain Communities Detected:** 8 distinct audience sub-groups
- **Modularity Score:** 0.2676
- **Influential Commenters (PageRank / Degree Centrality Leaderboard):**
  1. \`@ivankuljis1780\` (Influence Score: 0.9883 | PageRank: 0.018393 | 27 comments | 708 likes)
  2. \`@tesla\` (Influence Score: 0.8476 | PageRank: 0.013604 | 19 comments | 3,926 likes)
  3. \`@ahmadasar5159\` (Influence Score: 0.7272 | PageRank: 0.011044 | 15 comments | 12 likes)

### 🎥 3. Content Performance (Viral Scores)
The viral score evaluates views, likes, and comment ratios to define video reach:
- **Top 1:** *"Move any Model Y seat without leaving your seat"* (Viral Score: 0.7413 | 6,528,386 views | 33,035 likes)
- **Top 2:** *"TERAFAB | The Largest Chip Manufacturing Facility Ever"* (Viral Score: 0.6028 | 1,385,870 views | 3,714 comments)
- **Top 3:** *"Tesla Lithium Refinery"* (Viral Score: 0.3289 | 775,081 views)

### 🚗 4. Competitor Benchmarking
- **Tesla:** 2,940,000 subscribers | Avg Views: 246,230 | Avg Likes: 7,520 | Engagement Rate: 3.27% | Avg Polarity: 0.00
- **BMW:** 1,980,000 subscribers | Avg Views: 356,990 | Avg Likes: 642 | Engagement Rate: 0.19% | Avg Polarity: 0.05
- **Mercedes-Benz:** 2,170,000 subscribers | Avg Views: 15,193 | Avg Likes: 528 | Engagement Rate: 3.76% | Avg Polarity: 0.07

### 🤖 5. Machine Learning Sentiment Leaderboard
Trains 5 supervised classifiers to predict comment sentiment polarity:
- **Gradient Boosting:** Accuracy = 0.6998 | F1-Score (W) = 0.6717 | CV (3-fold) = 0.6991 **(Winner)**
- **Linear SVC:** Accuracy = 0.6950 | F1-Score (W) = 0.6669 | CV (3-fold) = 0.6873 *(Dual set explicitly to False)*
- **Logistic Regression:** Accuracy = 0.6915 | F1-Score (W) = 0.6594 | CV (3-fold) = 0.6920 *(multi_class removed to prevent deprecation)*
- **Random Forest:** Accuracy = 0.6844 | F1-Score (W) = 0.6585 | CV (3-fold) = 0.6879
- **Naive Bayes:** Accuracy = 0.4681 | F1-Score (W) = 0.4362 | CV (3-fold) = 0.6645

### 📝 6. Aspect-Based Opinion Mining
Mines comment sentences matching aspect dictionaries to evaluate specific features:
- **Design / Style:** 263 mentions | Avg Polarity: +0.2121 | 57.8% positive | 9.9% negative
- **Price / Value:** 225 mentions | Avg Polarity: +0.0632 | 42.7% positive | 16.0% negative
- **Autopilot / FSD:** 217 mentions | Avg Polarity: +0.1909 | 58.5% positive | 5.1% negative
- **Build Quality:** 194 mentions | Avg Polarity: +0.1411 | 51.5% positive | 8.8% negative
- **Range / Battery:** 163 mentions | Avg Polarity: +0.1084 | 46.6% positive | 13.5% negative
- **Performance:** 100 mentions | Avg Polarity: +0.1979 | 65.0% positive | 6.0% negative
- **Service / Support:** 84 mentions | Avg Polarity: +0.1273 | 48.8% positive | 6.0% negative

---

## 🛠️ Installation & Setup

1. **Clone and Navigate:**
   \`\`\`bash
   cd e:/Projects/SMA
   \`\`\`
2. **Install Dependencies:**
   \`\`\`bash
   pip install -r requirements.txt
   # Or install core modules directly:
   pip install flask flask_sqlalchemy apscheduler scikit-learn textblob gensim networkx python-louvain google-api-python-client isodate statsmodels reportlab
   \`\`\`
3. **Configure Environment Variables:**
   Edit the [.env](file:///e:/Projects/SMA/.env) file:
   - \`YOUTUBE_API_KEY\`: Paste your YouTube Data API v3 credential key.
   - \`SECRET_KEY\`: Enter a secret session key for authentication.
4. **Compile Notebooks:**
   Run the compiler script to update the master notebook and generate the standalone notebooks:
   \`\`\`bash
   python build_notebook.py
   \`\`\`
5. **Run the Dashboard Web Server:**
   Launch the Flask server:
   \`\`\`bash
   python app.py
   \`\`\`
6. **Access App:**
   Open your browser and navigate to \`http://127.0.0.1:5000\`. Log in with the guest credentials:
   - **Username:** \`demo\`
   - **Password:** \`demo123\`
`,
    architectureNodes: [
      { id: "api", label: "YouTube API Scraper", type: "input" },
      { id: "db", label: "SQLite DB", type: "database" },
      { id: "net", label: "NetworkX Community Graph", type: "process" },
      { id: "sent", label: "Aspect Sentiment (NLTK)", type: "model" },
      { id: "ts", label: "ARIMA Forecaster", type: "model" },
      { id: "pdf", label: "ReportLab PDF Engine", type: "output" }
    ],
    architectureLinks: [
      { source: "api", target: "db" },
      { source: "db", target: "net" },
      { source: "db", target: "sent" },
      { source: "db", target: "ts" },
      { source: "net", target: "pdf" },
      { source: "sent", target: "pdf" },
      { source: "ts", target: "pdf" }
    ]
  },
  {
    id: "engage2value",
    title: "Engage2Value: Customer Value Analytics",
    period: "May - Aug 2025",
    category: "analytics-ds",
    tech: ["Python", "Pandas", "NumPy", "Scikit-Learn", "LightGBM", "XGBoost", "K-NN", "Feature Engineering"],
    metrics: [
      { label: "R² Score", value: "0.72" },
      { label: "Private Rank", value: "14 / 1760+" },
      { label: "Zero Inflation", value: "80%" }
    ],
    githubUrl: "https://github.com/tambetanush/Engage2Value",
    liveUrl: "http://tanushtambe.dns.navy/engagement/",
    driveUrl: "https://drive.google.com/file/d/1BFQffD0xM9-fTgdS2-VdY1XqnhuzQ_hU/view?usp=sharing",
    summary: "Two-stage predictive pipeline designed to model zero-inflated customer purchase values, placing 14th out of 1,760+ competitors on Kaggle.",
    description: `# 📊 Engage2Value: From Clicks to Conversions

![Dashboard Preview](/screenshots/engage2value/1 dashboard 1.png)

**Predicting Customer Purchase Value from Multi-Session Digital Behavior**

An end-to-end Machine Learning project that began as a competitive modeling task and evolved into a fully interactive, enterprise-grade ML Interpretability Dashboard.

**Course:** Machine Learning Practice Project (May 2025 Term)  
**Platform:** Kaggle & Custom Web Application  
**Author:** Tanush Sudheer Tambe

---

## 🌟 Application Showcase

To make the machine learning model accessible to business stakeholders, we built a highly interactive web application using **Flask, Plotly, and TailwindCSS (Crimson Theme)**. The dashboard provides real-time ML interpretability and inference.

### 1. Interactive Dashboard & Real-Time Insights

The landing page provides immediate insights into global behavioral drivers. It automatically generates **Partial Dependence Plots (PDP)** to demonstrate non-linear plateau effects and runs **Isolation Forests** to highlight anomalous high-frequency sessions in red.
![Dashboard Preview](/screenshots/engage2value/1 dashboard 1.png)
![Dashboard Insights](/screenshots/engage2value/2 dashboard 2.png)

### 2. Global Feature Importance (SHAP)

Navigate to the Data Exploration tab to see the top 10 features driving the predictive model globally across all segments.
![Global SHAP](/screenshots/engage2value/3 data analytics global shap.png)

### 3. Deep Feature Analysis

Select any feature to instantly view its statistical inferences, probability distributions, outlier boxplots, and categorical segmentations. The app uses background algorithms to automatically discover and highlight highly profitable sub-cohorts.
![Data Analysis](/screenshots/engage2value/4 data analysis.png)
![Advanced Data Analysis](/screenshots/engage2value/5 data analysis advanced.png)

### 4. Bivariate Analysis & Marginal Effects

Uncover hidden interactions by selecting secondary features. The app generates **2D Interaction Heatmaps**, grouped scatter plots, and isolated Marginal Effects.
![PDP and Bivariate](/screenshots/engage2value/6 pdp and bivariate.png)

### 5. Live Purchase Prediction Engine

A dynamic form that allows you to simulate customer behavior. Input session parameters, hit "Randomize" to test logic, and instantly generate the expected purchase value using our robust stacked ensemble pipeline.
![Prediction Form](/screenshots/engage2value/7 predict form.png)
![Prediction Result](/screenshots/engage2value/8 prediction.png)

---

## 🧠 Machine Learning Architecture (Kaggle Task)

### Problem Statement

The goal of this project is to **predict a customer’s purchase value** based on their multi-session behavior across digital touchpoints. The target variable \`purchaseValue\` is:

- Extremely **right-skewed** (skew > 50)
- Highly **zero-inflated** (majority zero purchase sessions)
- Influenced by **complex non-linear interactions**

### Dataset Overview

| Dataset | Rows    | Columns |
| ------- | ------- | ------- |
| Train   | 116,023 | 52      |
| Test    | 29,006  | 51      |

### Feature Engineering & Data Pipeline

- **Target Transformation:** Power transformation with exponent = 1/1.54 was chosen as the best trade-off to handle extreme skewness.
- **Categorical Processing:** Handled high-cardinality features using \`TargetEncoder\` and low-cardinality with \`OneHotEncoder\`.
- **Behavioral Indicators:** Engineered powerful features like \`bounce_hit_ratio\`, \`session_per_hit\`, and \`is_repeat_visitor\`.
- **Feature Stacking:**
    1. Applied **K-Means Clustering** to grouped numerical data.
    2. Trained a secondary **LightGBM Binary Classifier** to predict \`purchaseValue > 0\`. The resulting \`buy_prob\` became the most correlated feature with the target.

### Model Ensembling

We utilized a **VotingRegressor** stacking 5 optimized LightGBM models with slight parameter variations. This achieved the best balance of bias and variance, resulting in a **~0.70 public leaderboard R²** without relying on ID leakage.

---

## 📁 Repository Structure

The project has been cleaned and structured for production deployment:

\`\`\`text
Engage2Value/
├── app.py                      # Main Flask Web Server & API
├── custom_transformer.py       # ML Pipeline Scikit-Learn transformers
├── requirements.txt            # Python dependencies
│
├── data/                       # Contains the raw CSV and JSON samples
├── models/                     # Contains exported .joblib models & pipelines
├── notebooks/                  # Contains Jupyter notebooks & training scripts
│
├── static/                     # Frontend Javascript (main.js) & CSS
└── templates/                  # Frontend HTML Dashboard Structure
\`\`\`

---

## 🚀 Installation & How to Run

1. **Clone the repository.**
2. **Install dependencies:**
    \`\`\`bash
    pip install -r requirements.txt
    \`\`\`
3. **Run the Flask Application:**
    \`\`\`bash
    python app.py
    \`\`\`
4. **Access the Application:** Open your browser and navigate to \`http://127.0.0.1:5000\`.

---

## 👨‍💻 Author

**Tanush Sudheer Tambe**  
Final Year Engineering Student  
Specialization: IoT + Machine Learning + Data Science

### 📜 License

This project is released under the **MIT License** and is intended for educational and research purposes.
`,
    architectureNodes: [
      { id: "raw", label: "Session Clickstream Data", type: "input" },
      { id: "fe", label: "Yeo-Johnson & KNN Eng", type: "process" },
      { id: "clf", label: "Stage 1: XGBoost (Convert?)", type: "model" },
      { id: "reg", label: "Stage 2: LightGBM (Value?)", type: "model" },
      { id: "blend", label: "Expected Value Product", type: "process" },
      { id: "out", label: "Final Transaction Forecast", type: "output" }
    ],
    architectureLinks: [
      { source: "raw", target: "fe" },
      { source: "fe", target: "clf" },
      { source: "fe", target: "reg" },
      { source: "clf", target: "blend", label: "P(Convert)" },
      { source: "reg", target: "blend", label: "Value" },
      { source: "blend", target: "out" }
    ]
  },
  {
    id: "inventory",
    title: "Inventory Optimization & Logistics Strategy",
    period: "2025",
    category: "analytics-ds",
    tech: ["Python", "Excel", "ARIMA", "LightGBM", "ABC/XYZ Analysis", "Root Cause Analysis (RCA)", "EOQ/ROP"],
    metrics: [
      { label: "Category Segmentation", value: "7 Classes" },
      { label: "Holding Costs Saved", value: "Optimized" },
      { label: "Forecast Methods", value: "ARIMA/LGBM" }
    ],
    driveUrl: "https://drive.google.com/drive/folders/1p9M6k98f-jVzJ9n9_oGjE76aX9V2kF9e?usp=sharing",
    summary: "Data-driven business analysis and forecasting system developed as the IIT Madras Capstone, focusing on inventory classification, demand forecasting, and transit loss reduction.",
    description: `### Overview
Developed for the **IIT Madras Business Data Management Capstone**, this project focused on analyzing sales, supplier logs, and transit records of a regional tech supplier firm (FY22–FY25) to reduce operational capital lock-in and product shipping damages.

### Methodological Framework
1. **Data Cleaning & Auditing**:
   - Cleaned messy invoice records and mapped products into 7 core hardware categories.
   - Resolved missing GST details by performing cross-checks against Bill of Entry (BOE) import sheets.
2. **Inventory Classification**:
   - Applied **ABC Analysis** (revenue-based ranking) and **XYZ Analysis** (demand volatility grouping).
   - Highlighted overstocked items that locked up working capital and understocked items that led to stockouts.
3. **Demand Forecasting**:
   - Modelled product group sales using **ARIMA** (statistical time-series) and **LightGBM** (regressive ML).
   - Calculated safety stock sizes and reorder thresholds using Economic Order Quantity (**EOQ**) models.
4. **Logistics Optimization**:
   - Performed **Root Cause Analysis (RCA)** on damaged returns.
   - Recommended new shipping Standard Operating Procedures (SOPs), standardized boxes, and carrier-control guidelines to minimize transit damages.`,
    architectureNodes: [
      { id: "invoices", label: "Messy FY22-FY25 Invoices", type: "input" },
      { id: "audit", label: "GST BOE Cross-Auditing", type: "process" },
      { id: "abc", label: "ABC/XYZ Matrix Solver", type: "process" },
      { id: "forecast", label: "ARIMA & LightGBM Demand", type: "model" },
      { id: "eoq", label: "EOQ / ROP Formula Engine", type: "process" },
      { id: "recs", label: "Capital & SOP Recs", type: "output" }
    ],
    architectureLinks: [
      { source: "invoices", target: "audit" },
      { source: "audit", target: "abc" },
      { source: "abc", target: "forecast", label: "Volatility" },
      { source: "forecast", target: "eoq" },
      { source: "eoq", target: "recs" }
    ]
  }
];
