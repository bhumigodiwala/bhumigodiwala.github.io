import { Project, Experience, Education, SkillCategory, MovieItem } from '../types';

export const GITHUB_PROJECTS: Project[] = [
  {
    id: 'pipeedge',
    title: 'PipeEdge: Pipeline Parallelism for Heterogeneous Edge Inference',
    name: 'PipeEdge',
    category: 'Distributed Inference & Edge Systems',
    filter: 'Systems & Edge',
    description: 'Pipeline parallelism system tailored for large-scale deep learning model inference across heterogeneous, resource-constrained edge computing clusters. Optimizes layer partitioning, minimizes pipeline bubbles, and achieves low-latency inference on edge nodes.',
    highlightSummary: 'Pipeline Parallelism for Large-Scale Model Inference on Heterogeneous Edge Devices',
    meta: 'Public · Forked from Mystery-Golden-Retriever/PipeEdge',
    isForked: true,
    forkedFrom: 'Mystery-Golden-Retriever/PipeEdge',
    isPrivate: false,
    language: 'Python',
    license: 'BSD 3-Clause "New" or "Revised" License',
    updatedDate: 'Dec 31, 2023',
    stars: 1,
    forks: 1,
    tags: ['Python', 'Pipeline Parallelism', 'Edge AI', 'Model Serving', 'Heterogeneous Clusters'],
    metrics: ['Distributed Edge Serving', 'Reduced Bubble Latency', 'Multi-Device Scheduling'],
    repoUrl: 'https://github.com/bhumigodiwala/PipeEdge',
    featured: true,
  },
  {
    id: 'hybrid-reco-system',
    title: 'Hybrid Recommendation System: Movie Engine',
    name: 'hybrid-reco-system',
    category: 'Information Retrieval & Recommenders',
    filter: 'Recommendation',
    description: 'Dual-engine hybrid movie recommendation system blending Content-Based Filtering (metadata, synopsis embeddings, genre vectors) with Collaborative Filtering (user-item interaction matrix factorization). Overcomes cold-start while delivering tailored diversity.',
    highlightSummary: 'Movie Recommendation System leveraging content similarities and collaborative user ratings',
    meta: 'Public · Forked from darpan-jain/hybrid-reco-system',
    isForked: true,
    forkedFrom: 'darpan-jain/hybrid-reco-system',
    isPrivate: false,
    language: 'Python',
    license: 'MIT License',
    updatedDate: 'Active Project',
    stars: 2,
    forks: 1,
    tags: ['Python', 'Recommendation System', 'Collaborative Filtering', 'Content-Based', 'Matrix Factorization'],
    metrics: ['Hybrid Scoring Fusion', 'Cold-Start Mitigation', 'Top-K Ranking'],
    repoUrl: 'https://github.com/bhumigodiwala/hybrid-reco-system',
    featured: true,
  },
  {
    id: 'asl-st-gan',
    title: 'ASL Gestures Prediction using ST-GAN for Shadow Removal',
    name: 'ASL-Gestures-Prediction-using-ST-GAN-for-Shadow-Removal',
    category: 'Computer Vision & Generative AI',
    filter: 'Vision & GAN',
    description: 'Generative adversarial framework deploying Spatial-Temporal GANs (ST-GAN) to synthesize clean hand images by removing ambient shadow noise and occlusion, followed by deep CNN classification for high-precision American Sign Language gesture recognition.',
    highlightSummary: 'Shadow removal using ST-GAN to enhance real-world ASL hand gesture classification accuracy',
    meta: 'Private · Forked from ChenhuaFan/EE641FinalProject',
    isForked: true,
    forkedFrom: 'ChenhuaFan/EE641FinalProject',
    isPrivate: true,
    language: 'Python / PyTorch',
    license: 'Academic Research',
    updatedDate: 'Course Capstone (USC EE641)',
    tags: ['PyTorch', 'ST-GAN', 'Shadow Removal', 'Hand Gesture Classification', 'Computer Vision'],
    metrics: ['92.9% Gesture Accuracy', 'End-to-End GAN-CNN', 'Shadow Robustness'],
    repoUrl: 'https://github.com/bhumigodiwala/ASL-Gestures-Prediction-using-ST-GAN-for-Shadow-Removal',
    featured: true,
  },
  {
    id: 'subspace-alignment',
    title: 'Subspace Alignment Algorithm for Domain Adaptation',
    name: 'Subspace-Alignment-Algorithm',
    category: 'Transfer Learning & Domain Adaptation',
    filter: 'Analytics & Platforms',
    description: 'Implementation of the Subspace Alignment algorithm for unsupervised domain adaptation. Learns a mapping function aligning the eigenspaces of source and target domains without requiring target labels, enabling resilient cross-domain machine learning classifiers.',
    highlightSummary: 'Unsupervised domain adaptation algorithm mapping high-dimensional source and target manifolds',
    meta: 'Public Repository',
    isForked: false,
    isPrivate: false,
    language: 'Python / NumPy / Scikit-learn',
    license: 'MIT License',
    updatedDate: 'Maintained',
    tags: ['Machine Learning', 'Domain Adaptation', 'Subspace Alignment', 'PCA / Eigenspaces', 'NumPy'],
    metrics: ['Cross-Domain Transfer', 'Unsupervised Adaptation', 'Closed-Form Solution'],
    repoUrl: 'https://github.com/bhumigodiwala/Subspace-Alignment-Algorithm',
    featured: false,
  },
  {
    id: 'banking-subscription',
    title: 'Banking Subscription Predictive Analytics',
    name: 'Banking-Subscription-Analysis',
    category: 'Predictive Modeling & FinTech Data Science',
    filter: 'Analytics & Platforms',
    description: 'Comprehensive end-to-end data analytics and predictive modeling pipeline predicting customer term deposit subscriptions. Includes class-imbalance treatment (SMOTE), exploratory financial demographics, hyperparameter tuning, and ROC-AUC optimization.',
    highlightSummary: 'Predictive modeling and conversion propensity analysis for banking term deposit campaigns',
    meta: 'Public Repository',
    isForked: false,
    isPrivate: false,
    language: 'Python / Jupyter / Pandas',
    license: 'Apache-2.0',
    updatedDate: 'Maintained',
    tags: ['Data Science', 'Classification', 'SMOTE', 'Financial Analytics', 'Pandas & Scikit-Learn'],
    metrics: ['High ROC-AUC Score', 'Feature Attribution', 'Marketing Conversion Lift'],
    repoUrl: 'https://github.com/bhumigodiwala/Banking-Subscription-Analysis',
    featured: false,
  },
  {
    id: 'community-car-rentals',
    title: 'Community Car Rentals Platform',
    name: 'Community-Car-Rentals-Platform',
    category: 'Full-Stack Systems & Distributed Software',
    filter: 'Analytics & Platforms',
    description: 'Scalable community peer-to-peer car sharing and vehicle rental booking system. Features dynamic availability scheduling, customer verification workflows, real-time booking status tracking, and database integrity management for local community fleets.',
    highlightSummary: 'Full-featured community car rental and fleet management platform architecture',
    meta: 'Public Repository',
    isForked: false,
    isPrivate: false,
    language: 'JavaScript / Node.js / SQL',
    license: 'MIT License',
    updatedDate: 'Maintained',
    tags: ['Full-Stack', 'Node.js', 'SQL / PostgreSQL', 'REST APIs', 'Fleet Scheduling'],
    metrics: ['Real-time Booking', 'Role-based Access', 'Responsive UI'],
    repoUrl: 'https://github.com/bhumigodiwala/Community-Car-Rentals-Platform',
    featured: false,
  }
];

export const EXPERIENCES: Experience[] = [
  {
    period: 'Apr 2026 — Present',
    role: 'Graduate Research Data Scientist',
    organization: 'ASU Decision Theater Network',
    websiteUrl: 'https://dt.asu.edu/',
    logoUrl: 'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://dt.asu.edu&size=128',
    location: 'Tempe, AZ',
    description: 'Production deep-learning serving, NLP skill extraction at scale, health-outcome clustering, and multimodal LLM + RAG research for complex decision environments.',
    impactBullets: [
      'Architected NLP and embedding pipelines mapping academic programs to real-time labor market shifts.',
      'Developed scalable health outcome predictive clustering on high-dimensional demographic data.',
      'Led research on LLM reasoning and agentic workflow orchestration for research serving.'
    ],
    technologies: ['PyTorch', 'Hugging Face', 'LLMs', 'RAG', 'Docker', 'FastAPI']
  },
  {
    period: 'Jan 2025 — Nov 2025',
    role: 'Senior Data Scientist',
    organization: 'Infosys Ltd',
    websiteUrl: 'https://www.infosys.com/',
    logoUrl: 'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.infosys.com&size=128',
    duration: '11 months',
    location: 'Houston, TX',
    description: 'Anomaly detection and behavioral analytics for a regulated energy utility serving more than one million residential and commercial customers.',
    impactBullets: [
      'Engineered real-time anomaly detection pipelines boosting energy theft identification by 25%.',
      'Processed multi-terabyte smart meter time series streams using Spark and cloud architectures.',
      'Mentored junior engineers and delivered production ML services to enterprise stakeholders.'
    ],
    technologies: ['Python', 'Spark', 'Time Series', 'AWS', 'Anomaly Detection', 'SQL']
  },
  {
    period: 'May 2024 — Jan 2025',
    role: 'Sr. AI/ML Engineer',
    organization: 'MemoryCare AI (now Scienza Health)',
    websiteUrl: 'https://scienzahealth.com/',
    logoUrl: 'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://scienzahealth.com&size=128',
    duration: 'approx 8 months',
    location: 'Newport Beach, CA',
    description: 'HIPAA-compliant LLM + RAG pipelines and multimodal behavioral tracking for clinical neuro-cognitive diagnostics.',
    impactBullets: [
      'Built avatar-based speech and facial behavior tracking for early cognitive impairment detection.',
      'Achieved 90% behavioral anomaly detection accuracy while slashing patient assessment duration by 35%.',
      'Engineered secure RAG architectures with strict clinical privacy safeguards.'
    ],
    technologies: ['PyTorch', 'OpenCV', 'RAG', 'Azure AI', 'Computer Vision', 'Audio Processing']
  },
  {
    period: 'Jul 2023 — Jul 2024',
    role: 'Machine Learning Engineer',
    organization: 'USC Information Sciences Institute',
    websiteUrl: 'https://www.isi.edu/',
    logoUrl: 'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.isi.edu&size=128',
    duration: '1 year',
    location: 'Marina Del Rey, CA',
    description: 'Researched model optimization and distributed edge computing architectures for distributed deep neural network execution.',
    impactBullets: [
      'Explored pipeline and tensor distribution schemes for edge devices with non-uniform memory bandwidth.',
      'Improved communication efficiency and parameter transmission speeds across distributed nodes.'
    ],
    technologies: ['Python', 'PyTorch', 'Distributed Systems', 'Edge Inference', 'CUDA']
  },
  {
    period: 'May 2022 — May 2023',
    role: 'Machine Learning Intern',
    organization: 'TetraMem Inc',
    websiteUrl: 'https://tetramem.com/',
    logoUrl: 'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://tetramem.com&size=128',
    duration: '1 year',
    location: 'Fremont, CA',
    description: 'Edge-oriented model architecture design and visual-wake-word models for ultra-low latency compute-in-memory accelerator hardware.',
    impactBullets: [
      'Adapted vision architectures for custom low-power memory and silicon constraints.',
      'Benchmarked latency, throughput, and accuracy tradeoffs on edge hardware testbeds.'
    ],
    technologies: ['TensorFlow', 'ONNX', 'Edge Computing', 'Embedded ML']
  },
  {
    period: 'Oct 2020 — Aug 2021',
    role: 'Software Engineer',
    organization: 'Tata Consultancy Services',
    websiteUrl: 'https://www.tcs.com/',
    logoUrl: 'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.tcs.com&size=128',
    duration: '8 months',
    location: 'Mumbai, India',
    description: 'Production web systems serving 10,000+ active users and reporting automation reducing manual workload by 30%.',
    impactBullets: [
      'Constructed high-throughput backend APIs and automated batch processing systems.',
      'Streamlined reporting processes with end-to-end reliability and database indexing.'
    ],
    technologies: ['Java', 'Spring Boot', 'SQL', 'JavaScript', 'REST APIs']
  }
];

export const EDUCATION: Education[] = [
  {
    degree: 'PhD in Computer Science',
    institution: 'Arizona State University',
    websiteUrl: 'https://www.asu.edu/',
    logoUrl: 'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://asu.edu&size=128',
    period: '2026 — Present',
    grade: 'GPA 4.0 / 4.0',
    honors: 'Doctoral Research Scholar',
    location: 'Tempe, AZ'
  },
  {
    degree: 'Master of Science in Computer Engineering',
    institution: 'University of Southern California',
    websiteUrl: 'https://www.usc.edu/',
    logoUrl: 'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://usc.edu&size=128',
    period: '2021 — 2023',
    grade: 'GPA 3.8 / 4.0',
    honors: 'Viterbi School of Engineering',
    location: 'Los Angeles, CA'
  },
  {
    degree: 'Bachelor of Engineering in Electronics & Telecommunication',
    institution: 'D.J. Sanghvi College of Engineering, University of Mumbai',
    websiteUrl: 'https://djsce.ac.in/',
    logoUrl: 'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://mu.ac.in&size=128',
    symbolNote: 'Official seal of University of Mumbai',
    period: '2016 — 2020',
    grade: 'CGPA 9.19 / 10',
    honors: 'First Class with Distinction',
    location: 'Mumbai, India'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Recommendation & Information Retrieval',
    icon: 'Sparkles',
    skills: [
      { name: 'Hybrid Recommender Systems', level: 95, note: 'Content-based + Collaborative Filtering' },
      { name: 'Matrix Factorization & SVD', level: 92, note: 'Latent factor modeling & embeddings' },
      { name: 'Vector Search & Approximate Nearest Neighbors', level: 90, note: 'FAISS, Cosine & Dot product retrieval' },
      { name: 'Cold-Start & Diversity Reranking', level: 88, note: 'Calibrated recommendations & serendipity' }
    ]
  },
  {
    title: 'Distributed Systems & Edge Inference',
    icon: 'Cpu',
    skills: [
      { name: 'Pipeline Parallelism (PipeEdge)', level: 94, note: 'Inter-node layer partitioning & scheduling' },
      { name: 'Heterogeneous Cluster Serving', level: 90, note: 'Memory-aware compute allocation' },
      { name: 'ONNX Runtime & TensorRT', level: 88, note: 'Inference optimization & model exporting' },
      { name: 'Micro-Batching & Async Streams', level: 90, note: 'Throughput optimization on edge devices' }
    ]
  },
  {
    title: 'Computer Vision & Generative AI',
    icon: 'Eye',
    skills: [
      { name: 'Spatial-Temporal GANs (ST-GAN)', level: 92, note: 'Shadow removal & visual restoration' },
      { name: 'Gesture & Motion Recognition', level: 90, note: 'ASL recognition, OpenCV & PyTorch CNNs' },
      { name: 'Multimodal Feature Extraction', level: 91, note: 'Visual-textual joint representation' },
      { name: 'Time-Series Demographics & FinTech', level: 89, note: 'Anomaly detection & client scoring' }
    ]
  },
  {
    title: 'LLM Systems & Production Engineering',
    icon: 'Boxes',
    skills: [
      { name: 'RAG Architecture & Semantic Chunking', level: 93, note: 'Context retrieval & hallucination reduction' },
      { name: 'FastAPI & Microservices', level: 94, note: 'Low-latency async serving endpoints' },
      { name: 'Docker & Cloud Deployment', level: 90, note: 'AWS, Azure containerized pipelines' },
      { name: 'MLflow & Experiment Tracking', level: 89, note: 'Reproducible model versioning' }
    ]
  }
];

// Sample movie dataset for the interactive Hybrid Recommendation Engine
export const SAMPLE_MOVIES: MovieItem[] = [
  {
    id: 'm1',
    title: 'Interstellar',
    year: 2014,
    genres: ['Sci-Fi', 'Drama', 'Adventure'],
    director: 'Christopher Nolan',
    collaborativeAffinity: 0.96,
    contentSimilarity: 0.94,
    posterIcon: '🚀',
    description: 'Humanity journeys across a wormhole near Saturn in search of a habitable sanctuary.'
  },
  {
    id: 'm2',
    title: 'Blade Runner 2049',
    year: 2017,
    genres: ['Sci-Fi', 'Mystery', 'Thriller'],
    director: 'Denis Villeneuve',
    collaborativeAffinity: 0.91,
    contentSimilarity: 0.95,
    posterIcon: '🌆',
    description: 'A young blade runner unearths a long-buried secret that threatens society.'
  },
  {
    id: 'm3',
    title: 'Inception',
    year: 2010,
    genres: ['Sci-Fi', 'Action', 'Thriller'],
    director: 'Christopher Nolan',
    collaborativeAffinity: 0.95,
    contentSimilarity: 0.90,
    posterIcon: '🌀',
    description: 'A thief who steals corporate secrets through dream-sharing technology is given an inverse task.'
  },
  {
    id: 'm4',
    title: 'Arrival',
    year: 2016,
    genres: ['Sci-Fi', 'Drama', 'Mystery'],
    director: 'Denis Villeneuve',
    collaborativeAffinity: 0.89,
    contentSimilarity: 0.92,
    posterIcon: '🛸',
    description: 'A linguist works with the military to communicate with alien lifeforms after twelve spacecraft appear.'
  },
  {
    id: 'm5',
    title: 'The Prestige',
    year: 2006,
    genres: ['Drama', 'Mystery', 'Sci-Fi'],
    director: 'Christopher Nolan',
    collaborativeAffinity: 0.92,
    contentSimilarity: 0.85,
    posterIcon: '🎩',
    description: 'Two stage magicians engage in a competitive rivalry to create the ultimate teleportation illusion.'
  },
  {
    id: 'm6',
    title: 'Ex Machina',
    year: 2014,
    genres: ['Sci-Fi', 'Drama', 'Thriller'],
    director: 'Alex Garland',
    collaborativeAffinity: 0.87,
    contentSimilarity: 0.91,
    posterIcon: '🤖',
    description: 'A programmer is invited to administer the Turing test to an intelligent humanoid robot.'
  },
  {
    id: 'm7',
    title: 'Parasite',
    year: 2019,
    genres: ['Drama', 'Thriller', 'Comedy'],
    director: 'Bong Joon-ho',
    collaborativeAffinity: 0.94,
    contentSimilarity: 0.72,
    posterIcon: '🏠',
    description: 'Greed and class discrimination threaten the newly formed symbiotic relationship between two families.'
  },
  {
    id: 'm8',
    title: 'Whiplash',
    year: 2014,
    genres: ['Drama', 'Music'],
    director: 'Damien Chazelle',
    collaborativeAffinity: 0.93,
    contentSimilarity: 0.65,
    posterIcon: '🥁',
    description: 'A promising young drummer enrolls at a cutthroat music conservatory where his ruthless instructor stops at nothing.'
  }
];
