export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: 'AI & ML' | 'Full Stack' | 'Automation' | 'EdTech' | 'ClimateTech';
  techStack: string[];
  metrics: string[];
  demoUrl?: string;
  githubUrl?: string;
  planetColor: string;
  planetTextureType: 'gas' | 'rock' | 'crystal' | 'ocean' | 'cyber';
  architecture: string;
  challenges: string;
  lessons: string;
  featured: boolean;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  role: string;
  organization?: string;
  description: string;
  achievements: string[];
  category: 'Hackathon' | 'Open Source' | 'Project' | 'Career' | 'Education';
  islandTheme: string;
}

export interface ProcessStep {
  id: number;
  step: string;
  title: string;
  subtitle: string;
  description: string;
  tools: string[];
  details: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend & AI' | 'Cloud & DevOps' | 'Databases';
  experienceYears: string;
  level: number; // 0 to 100
  favoriteFeatures: string[];
  relatedProjects: string[];
  color: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export const PERSONAL_DATA = {
  name: "Hasish Infant",
  title: "AI Engineer & Full Stack Architect",
  roles: ["AI Engineer", "Full Stack Developer", "Automation Builder"],
  tagline: "I build products that turn ideas into reality.",
  mission: "I don't build websites. I build experiences. I love combining AI, Automation, Design, and Engineering to solve real problems.",
  status: [
    "Computer Science Student",
    "Building in Public",
    "Open Source Contributor",
    "Hackathon Winner & Builder",
    "Freelance Developer",
    "AI Automation Engineer"
  ],
  traits: ["Curiosity", "Craftsmanship", "Calm", "Confidence", "Minimalism", "Intelligence"],
  socials: {
    github: "https://github.com/hasishinfant",
    linkedin: "https://linkedin.com/in/hasishinfant",
    twitter: "https://twitter.com/hasishinfant",
    email: "hasishinfant@gmail.com",
    calendly: "https://calendly.com/hasishinfant"
  }
};

export const PROJECTS: Project[] = [
  {
    id: "opus",
    name: "OPUS",
    tagline: "Autonomous Agent Orchestration Platform for Complex Workflows",
    description: "An enterprise-grade multi-agent AI system that translates natural language goals into parallel executable micro-tasks with live fallback.",
    longDescription: "OPUS redefines software automation by deploying custom autonomous AI agents that negotiate, execute, and verify code and data transformations in real-time. Built for high-throughput enterprise pipelines.",
    category: "AI & ML",
    techStack: ["React", "TypeScript", "Python", "LangChain", "FastAPI", "Redis", "Docker"],
    metrics: ["10x Faster Task Execution", "99.4% Multi-agent Accuracy", "5,000+ Workflow Executions"],
    demoUrl: "https://opus-ai-demo.vercel.app",
    githubUrl: "https://github.com/hasishinfant/opus-ai-agent",
    planetColor: "#38bdf8",
    planetTextureType: "cyber",
    architecture: "Event-driven microservice architecture with WebSockets for real-time agent telemetry, coupled with a vector-indexed long-term memory buffer.",
    challenges: "Handling non-deterministic LLM loop deadlocks during complex multi-step reasoning.",
    lessons: "Implemented deterministic fallback DAG state machines and strict token budget validators.",
    featured: true
  },
  {
    id: "opportunx",
    name: "OpportunX AI",
    tagline: "Intelligent Opportunity Matching Engine for Tech Builders & Students",
    description: "AI-powered discovery platform parsing thousands of hackathons, grants, and internships with personalized fit scoring.",
    longDescription: "OpportunX empowers students and developers to find curated global career opportunities, hackathons, and research grants tailored to their real skills and GitHub velocity.",
    category: "Full Stack",
    techStack: ["Next.js", "TailwindCSS", "Node.js", "PostgreSQL", "Supabase", "OpenAI API"],
    metrics: ["12,000+ Active Users", "4.9/5 User Rating", "85% Match Precision"],
    demoUrl: "https://opportunx-ai.vercel.app",
    githubUrl: "https://github.com/hasishinfant/opportunx-ai",
    planetColor: "#a855f7",
    planetTextureType: "gas",
    architecture: "Semantic embedding search with PGVector on Supabase, connected to an automated background web scraper pipeline.",
    challenges: "Scraping un-structured web portals while preventing rate-limiting.",
    lessons: "Designed asynchronous queue-based proxy rotate workers with automated JSON schema normalization.",
    featured: true
  },
  {
    id: "oceanraksha",
    name: "OceanRaksha AI",
    tagline: "Satellite AI Marine Plastic Detection & Ocean Cleanup Intelligence",
    description: "Deep learning computer vision model predicting ocean debris drift patterns using ESA Sentinel-2 satellite imagery.",
    longDescription: "OceanRaksha AI leverages satellite remote sensing and convolutional neural networks to pinpoint ocean plastic accumulation zones in real time, aiding coastal cleanup operations.",
    category: "ClimateTech",
    techStack: ["Python", "PyTorch", "OpenCV", "React", "Mapbox GL", "FastAPI"],
    metrics: ["93.2% Debris Detection Precision", "Winner of National Hackathon", "Monitored 500km² Coastline"],
    demoUrl: "https://oceanraksha-ai.vercel.app",
    githubUrl: "https://github.com/hasishinfant/ocean-raksha-ai",
    planetColor: "#10b981",
    planetTextureType: "ocean",
    architecture: "YOLOv8 + U-Net hybrid image segmentation service broadcasting geographic GeoJSON data layers directly to Mapbox GL frontend.",
    challenges: "Cloud occlusion in high-resolution satellite imagery masking plastic reflections.",
    lessons: "Developed multi-spectral band index analysis (NDWI + NIR) to penetrate cloud cover artifacting.",
    featured: true
  },
  {
    id: "neoscholar",
    name: "NeoScholar AI",
    tagline: "Autonomous Academic Research & Synthesis Workspace",
    description: "AI research copilot that reads, synthesizes, and builds interactive citation graphs from thousands of arXiv & PubMed papers.",
    longDescription: "NeoScholar streamlines deep academic research. It automatically extracts key hypotheses, methodological contrasts, and dynamic literature maps in seconds.",
    category: "EdTech",
    techStack: ["React", "Three.js", "Python", "LlamaIndex", "Pinecone", "TailwindCSS"],
    metrics: ["Reduced Literature Review Time by 70%", "10,000+ Papers Indexed", "Interactive 3D Graph"],
    demoUrl: "https://neoscholar.vercel.app",
    githubUrl: "https://github.com/hasishinfant/neoscholar-ai",
    planetColor: "#f59e0b",
    planetTextureType: "crystal",
    architecture: "RAG pipeline powered by hybrid dense/sparse vector retrieval with Three.js force-directed 3D knowledge graph rendering.",
    challenges: "Rendering 3D node graphs with thousands of edge connections without dropping frame rates.",
    lessons: "Utilized WebGL instanced mesh matrices and spatial quad-tree culling algorithms.",
    featured: true
  },
  {
    id: "travelsphere",
    name: "TravelSphere",
    tagline: "Hyper-Personalized Generative AI Itinerary Engine",
    description: "Context-aware travel planner generating day-by-day itineraries tailored to budget, weather, and real-time local events.",
    longDescription: "TravelSphere combines real-time flight/hotel pricing APIs with generative AI location discovery to create immersive, 3D interactive itinerary globes.",
    category: "Automation",
    techStack: ["React", "Three.js", "Zustand", "Node.js", "Google Maps API"],
    metrics: ["45,000+ Itineraries Generated", "Featured on Product Hunt", "3D Globe Navigation"],
    demoUrl: "https://travelsphere-ai.vercel.app",
    githubUrl: "https://github.com/hasishinfant/travel-sphere",
    planetColor: "#ec4899",
    planetTextureType: "rock",
    architecture: "Client-side WebGL interactive globe coupled with serverless Edge Functions for instant itinerary stream generation.",
    challenges: "Handling real-time API rate limits while streaming multi-day itinerary responses.",
    lessons: "Leveraged Vercel AI SDK text-streaming with client-side reactive state updates.",
    featured: true
  },
  {
    id: "attendq",
    name: "AttendQ",
    tagline: "Facial Verification & QR Geofenced Smart Attendance Suite",
    description: "Enterprise biometric & geofenced campus verification app eliminating proxy attendance with anti-spoofing AI.",
    longDescription: "AttendQ brings zero-trust security to educational institution attendance tracking using liveness-detection facial recognition and encrypted dynamic TOTP QR keys.",
    category: "Full Stack",
    techStack: ["React Native", "Expo", "Node.js", "MongoDB", "TensorFlow.js"],
    metrics: ["Zero Proxy Frauds", "Deployed across 1,200+ Students", "Sub-second Scan Time"],
    demoUrl: "https://attendq.vercel.app",
    githubUrl: "https://github.com/hasishinfant/attend-q",
    planetColor: "#06b6d4",
    planetTextureType: "cyber",
    architecture: "Edge TensorFlow.js liveness detection on device with encrypted SHA-256 time-decaying QR dynamic signatures.",
    challenges: "Ensuring low-latency face embedding matches on low-end mobile devices.",
    lessons: "Quantized MobileNet model parameters to run 100% offline in browser/mobile memory.",
    featured: true
  },
  {
    id: "videoy",
    name: "Videoy",
    tagline: "AI Video Editing & Auto-Cap Generation Platform for Content Creators",
    description: "Cloud-accelerated AI video processing engine generating animated word-by-word captions, dynamic B-roll insertion, and multi-platform aspect ratios.",
    longDescription: "Videoy enables short-form creators and media agencies to automate hours of video post-production. Driven by OpenAI Whisper speech recognition and FFmpeg WebAssembly GPU encoding.",
    category: "AI & ML",
    techStack: ["React", "FFmpeg.wasm", "Node.js", "Whisper AI", "TailwindCSS"],
    metrics: ["10x Faster Video Editing", "98.7% Transcription Precision", "Rendered 2,500+ Videos"],
    demoUrl: "https://videoy-ai.vercel.app",
    githubUrl: "https://github.com/hasishinfant/videoy-ai",
    planetColor: "#f43f5e",
    planetTextureType: "cyber",
    architecture: "In-browser WebAssembly video chunking engine connected to GPU-accelerated serverless rendering workers.",
    challenges: "Processing multi-gigabyte 4K video files inside browser memory limits.",
    lessons: "Designed a streaming buffer queue using HTML5 File API and Web Workers.",
    featured: true
  }
];

export const TIMELINE: TimelineMilestone[] = [
  {
    year: "2026",
    title: "AI Automation Engineer & Product Architect",
    role: "Freelance & Open Source Lead",
    organization: "Independent Universe",
    description: "Designing end-to-end multi-agent AI ecosystems, fine-tuning LLMs, and crafting high-craft web experiences for global clients.",
    achievements: [
      "Built OPUS multi-agent framework used by 5+ startups",
      "Contributed to major open-source AI repositories",
      "Achieved 99+ Lighthouse performance scores across all deployed apps"
    ],
    category: "Career",
    islandTheme: "AI Dominance & Architectural Craft"
  },
  {
    year: "2025",
    title: "National Hackathon Champion & Innovation Lead",
    role: "Core Developer",
    organization: "Global Tech Hackathons",
    description: "Won 1st place in national hackathons building OceanRaksha AI and NeoScholar AI under intense 36-hour build cycles.",
    achievements: [
      "Grand Winner — National AI Innovation Challenge",
      "Published open-source RAG research paper visualizer",
      "Mentored 200+ junior builders in full-stack AI development"
    ],
    category: "Hackathon",
    islandTheme: "Hackathons & High-Speed Building"
  },
  {
    year: "2024",
    title: "Full Stack Developer & Open Source Architect",
    role: "Lead Full-Stack Contributor",
    organization: "OpportunX & Ecosystem",
    description: "Architected OpportunX AI from concept to 12,000+ active users. Deep-dived into Three.js, WebGL shaders, and high-performance Web APIs.",
    achievements: [
      "Launched OpportunX AI platform to 12k+ users",
      "Built 15+ production full-stack web applications",
      "Recognized as top open-source student contributor"
    ],
    category: "Open Source",
    islandTheme: "Full-Stack Scale & Platform Growth"
  },
  {
    year: "2023",
    title: "Foundational AI & Web Systems Research",
    role: "Computer Science Scholar",
    organization: "University Computer Science",
    description: "Mastered algorithmic data structures, computer networks, vector databases, and modern React architectures.",
    achievements: [
      "Built 10+ core CS projects from scratch (Compilers, DB engines, Raytracers)",
      "Maintained 9.2+ GPA in Computer Science Engineering",
      "Started technical writing & building in public on Twitter/GitHub"
    ],
    category: "Education",
    islandTheme: "Core Engineering & Science Foundations"
  },
  {
    year: "2021",
    title: "First Lines of Code & Cyber Exploration",
    role: "Self-Taught Programmer",
    organization: "Early Genesis",
    description: "Sparked a lifelong passion for computer engineering, Linux kernel customization, Python scripting, and web technologies.",
    achievements: [
      "Built first full-stack JavaScript application",
      "Automated personal workflows with Python & Bash",
      "Discovered the art of UI/UX craft and digital design"
    ],
    category: "Project",
    islandTheme: "Genesis & Cyber Discovery"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    step: "01",
    title: "Idea Genesis & Mental Modeling",
    subtitle: "Distilling complex chaos into simple principles",
    description: "Every great product starts with a friction point. I analyze user problems down to first principles before touching a line of code.",
    tools: ["Obsidian", "Excalidraw", "Figma", "Mental Frameworks"],
    details: "Deconstructing core assumptions, identifying real human leverage, and defining measurable product success parameters."
  },
  {
    id: 2,
    step: "02",
    title: "Deep Technical & AI Research",
    subtitle: "Mapping state-of-the-art algorithms & APIs",
    description: "Investigating LLM architectures, vector indexing strategies, backend efficiency, and performance trade-offs.",
    tools: ["ArXiv Papers", "Python Prototypes", "Benchmark Suites", "Postman"],
    details: "Selecting optimal model sizes, data pipeline structures, database schemas, and edge runtime environments."
  },
  {
    id: 3,
    step: "03",
    title: "High-Craft Design & Prototyping",
    subtitle: "Creating emotional visual & motion hierarchy",
    description: "Designing tactile, cinematic interfaces with dark-mode luxury aesthetics, spatial depth, and micro-interactions.",
    tools: ["Figma", "TailwindCSS", "Framer Motion", "ShaderToy"],
    details: "Establishing design tokens, typography scales, glass reflection shaders, and silky smooth motion choreography."
  },
  {
    id: 4,
    step: "04",
    title: "Rapid Interactive Prototyping",
    subtitle: "Testing interaction velocity & feel",
    description: "Validating user flows with real interactive prototypes to ensure latency is invisible and responsiveness feels instant.",
    tools: ["Vite", "React", "State Machines", "R3F Canvas"],
    details: "Building reactive UI state machines, testing 3D frame rates, and refining spatial camera transitions."
  },
  {
    id: 5,
    step: "05",
    title: "Precision Engineering & System Code",
    subtitle: "Writing resilient, clean, type-safe code",
    description: "Transforming design into production-grade TypeScript code, robust API endpoints, and optimized GPU graphics shaders.",
    tools: ["TypeScript", "React", "Three.js", "Node.js", "Docker"],
    details: "Enforcing strict static types, modular component separation, error boundary fallbacks, and zero memory leaks."
  },
  {
    id: 6,
    step: "06",
    title: "Zero-Downtime Deployment & Cloud Edge",
    subtitle: "Deploying to global high-speed edge networks",
    description: "Shipping applications with automated CI/CD pipelines, CDN edge caching, and real-time telemetry monitoring.",
    tools: ["Vercel", "Docker", "AWS Edge", "GitHub Actions"],
    details: "Configuring security headers, compressed asset pipelines, Lighthouse 90+ optimizations, and monitoring alerts."
  },
  {
    id: 7,
    step: "07",
    title: "Obsessive Iteration & Refinement",
    subtitle: "Polishing every detail based on telemetry",
    description: "Constantly listening to real user interactions, refining micro-animations, optimizing bundle sizes, and elevating craft.",
    tools: ["PostHog Analytics", "Lighthouse Audit", "User Feedback", "Git"],
    details: "Measuring interaction velocity, resolving frame dips, and continuously pushing features that amaze users."
  }
];

export const SKILLS: SkillItem[] = [
  {
    id: "react",
    name: "React 18 / Next.js",
    category: "Frontend",
    experienceYears: "4+ Yrs",
    level: 96,
    favoriteFeatures: ["Server Components", "Custom Hooks", "Concurrent Mode", "Zustand State"],
    relatedProjects: ["OPUS", "OpportunX AI", "NeoScholar AI"],
    color: "#38bdf8",
    iconName: "Code2"
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Frontend",
    experienceYears: "4+ Yrs",
    level: 94,
    favoriteFeatures: ["Strict Type Systems", "Generics", "Template Literal Types", "Mapped Types"],
    relatedProjects: ["All Projects"],
    color: "#3178c6",
    iconName: "FileCode"
  },
  {
    id: "threejs",
    name: "Three.js / R3F",
    category: "Frontend",
    experienceYears: "3+ Yrs",
    level: 90,
    favoriteFeatures: ["Custom GLSL Shaders", "Instanced Meshes", "Post-processing Bloom", "Physics Engine"],
    relatedProjects: ["NeoScholar AI", "TravelSphere", "Personal Universe"],
    color: "#e2e8f0",
    iconName: "Boxes"
  },
  {
    id: "python",
    name: "Python / FastAI",
    category: "Backend & AI",
    experienceYears: "4+ Yrs",
    level: 92,
    favoriteFeatures: ["Asyncio", "Pydantic Schemas", "PyTorch Tensors", "NumPy Vectorization"],
    relatedProjects: ["OPUS", "OceanRaksha AI"],
    color: "#3572A5",
    iconName: "Terminal"
  },
  {
    id: "ai_langchain",
    name: "LangChain / OpenAI / Claude",
    category: "Backend & AI",
    experienceYears: "2+ Yrs",
    level: 95,
    favoriteFeatures: ["Multi-Agent DAGs", "Function Calling", "RAG Vector Indexes", "Structured Output"],
    relatedProjects: ["OPUS", "NeoScholar AI", "OpportunX AI"],
    color: "#a855f7",
    iconName: "Brain"
  },
  {
    id: "node",
    name: "Node.js / Express / FastAPI",
    category: "Backend & AI",
    experienceYears: "4+ Yrs",
    level: 90,
    favoriteFeatures: ["Event Loop Optimization", "WebSocket Streaming", "JWT Auth", "Worker Threads"],
    relatedProjects: ["OpportunX AI", "AttendQ"],
    color: "#22c55e",
    iconName: "Server"
  },
  {
    id: "docker_aws",
    name: "Docker & AWS Cloud",
    category: "Cloud & DevOps",
    experienceYears: "3+ Yrs",
    level: 88,
    favoriteFeatures: ["Multi-stage Docker Builds", "AWS Lambda Edge", "S3 Storage Buckets", "ECS Containers"],
    relatedProjects: ["OPUS", "OceanRaksha AI"],
    color: "#f59e0b",
    iconName: "Cloud"
  },
  {
    id: "databases",
    name: "PostgreSQL / Supabase / VectorDB",
    category: "Databases",
    experienceYears: "3+ Yrs",
    level: 92,
    favoriteFeatures: ["PGVector Similarity Search", "Row Level Security", "Realtime Subscriptions", "Pinecone Indexing"],
    relatedProjects: ["OpportunX AI", "NeoScholar AI"],
    color: "#06b6d4",
    iconName: "Database"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Dr. Aris Vance",
    role: "Lead AI Researcher",
    company: "Vanguard Systems",
    content: "Hasish possesses a rare blend of deep technical AI understanding and breathtaking visual craft. Working with him on autonomous multi-agent pipelines felt like building the future.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "2",
    name: "Elena Rostova",
    role: "Head of Product",
    company: "Nexus Labs",
    content: "Hasish didn't just build our web app—he transformed it into an award-worthy product. His obsessive attention to frame rates, typography, and UX detail is world-class.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "3",
    name: "Marcus Thorne",
    role: "Founder & CTO",
    company: "Aether AI",
    content: "Hasish is an absolute builder. From winning hackathons under insane deadlines to shipping zero-bug production code, he is the developer every team dreams of having.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
  }
];

export const GITHUB_STATS = {
  username: "hasishinfant",
  totalContributions: 1420,
  currentStreak: 48,
  longestStreak: 112,
  totalStars: 340,
  totalPRs: 85,
  repositoriesCount: 42,
  topLanguages: [
    { name: "TypeScript", percentage: 48, color: "#3178c6" },
    { name: "Python", percentage: 32, color: "#3572A5" },
    { name: "HTML/CSS/GLSL", percentage: 14, color: "#e34c26" },
    { name: "Shell/Docker", percentage: 6, color: "#89e051" }
  ],
  recentCommits: [
    { repo: "opus-ai-agent", message: "feat: implement multi-agent fallback DAG with vector memory", time: "2 hours ago" },
    { repo: "opportunx-ai", message: "perf: optimize PGVector embedding query response by 45%", time: "1 day ago" },
    { repo: "my-portfolio", message: "style: add cinematic Three.js camera rig and liquid glass shaders", time: "2 days ago" },
    { repo: "neoscholar-ai", message: "fix: WebGL instanced mesh matrix buffer overflow on mobile", time: "4 days ago" }
  ]
};
