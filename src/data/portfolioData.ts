export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: string;
  techStack: string[];
  metrics: string[];
  demoUrl?: string;
  githubUrl?: string;
  devpostUrl?: string;
  linkedinPostUrl?: string;
  badge: string;
  role: string;
  year: string;
  accentColor: string;
  planetColor?: string;
  planetTextureType?: 'gas' | 'rock' | 'crystal' | 'ocean' | 'cyber';
  architecture: string;
  challenges: string;
  lessons: string;
  featured: boolean;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  tag: string;
}

export interface FreelanceStep {
  step: string;
  title: string;
  description: string;
}

export const PERSONAL_DATA = {
  name: "Hasish Infant",
  role: "Full-Stack Developer, AI Builder & Freelancer",
  title: "Full-Stack Developer & AI Builder",
  location: "Bengaluru, India",
  headline: "I BUILD DIGITAL PRODUCTS AND EXPERIMENT WITH AI.",
  tagline: "FULL-STACK DEVELOPER · AI BUILDER · FREELANCER",
  heroSubheadline: "I'm a Computer Science undergraduate from Bengaluru building full-stack applications, AI systems and digital experiences.",
  mission: "Building scalable web applications, autonomous AI agents, and shipping products for clients.",
  status: "OPEN TO INTERNSHIPS · AVAILABLE FOR FREELANCE",
  education: {
    institution: "Alliance University",
    school: "Alliance School of Advanced Computing",
    degree: "B.Tech Computer Science and Engineering",
    duration: "2024 — 2028",
    location: "Bengaluru, India"
  },
  bioStatement: "WHO IS HASISH?",
  bioDescription: "I'm a Computer Science student from Bengaluru who likes turning ideas into working software. I learn by building. Some projects are serious. Some are experiments. Some fail. That is usually where the interesting part starts.",
  bioTags: ["STUDENT", "BUILDER", "FREELANCER", "LEARNER"],
  socials: {
    github: "https://github.com/hasishinfant",
    linkedin: "https://www.linkedin.com/in/hasish-infant",
    topmate: "https://topmate.io/hasish_infant",
    website: "https://hasishinfant.dev",
    email: "hasishinfant@gmail.com",
    resumeUrl: "/resume/hasish-infant-resume.png",
    twitter: "https://twitter.com/hasishinfant",
    calendly: "https://topmate.io/hasish_infant"
  }
};

export const RECRUITER_SNAPSHOT = [
  { label: "LOCATION", value: "Bengaluru, India", highlight: false },
  { label: "DEGREE", value: "B.Tech Computer Science", highlight: false },
  { label: "INSTITUTION", value: "Alliance University", highlight: false },
  { label: "CORE FOCUS", value: "Full-Stack Development", highlight: false },
  { label: "SPECIALTY", value: "AI & System Automation", highlight: false },
  { label: "STATUS", value: "Open to Opportunities", highlight: true }
];

export const CURRENT_EXPLORATIONS = [
  {
    id: "full-stack",
    title: "FULL-STACK",
    description: "Production web applications using React, Next.js, Node.js, PostgreSQL, and serverless AWS.",
    badge: "CORE STRENGTH"
  },
  {
    id: "ai-systems",
    title: "AI SYSTEMS",
    description: "Autonomous reasoning agents, RAG document pipelines, multimodal vision and intent routers.",
    badge: "ACTIVE BUILDS"
  },
  {
    id: "product-dev",
    title: "PRODUCT DEVELOPMENT",
    description: "Designing end-to-end user journeys, solving real-world friction, and building user-centric interfaces.",
    badge: "FOUNDER MINDSET"
  },
  {
    id: "3d-web",
    title: "3D WEB",
    description: "Interactive WebGL, React Three Fiber, hardware-accelerated shaders, and tactile spatial interfaces.",
    badge: "INTERACTIVE"
  },
  {
    id: "automation",
    title: "AUTOMATION",
    description: "Distributed scrapers, queue workers, IoT telemetry pipelines, and native macOS process bridges.",
    badge: "HIGH LEVERAGE"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "opportunx",
    name: "OPPORTUNX",
    tagline: "AI-POWERED CAREER COPILOT",
    description: "An AI-powered career platform that analyzes resumes and generates personalized career roadmaps based on skills and alignment.",
    longDescription: "OpportunX solves the fragmented student career landscape. It parses real resume skills against thousands of opportunities, generating deterministic career roadmaps and customized internship matches.",
    category: "CAREER TECH",
    techStack: ["AWS Lambda", "API Gateway", "DynamoDB", "CloudFront", "React"],
    metrics: ["12,000+ Opportunities Parsed", "Automated Daily Pipeline", "Serverless AWS Scale"],
    githubUrl: "https://github.com/hasishinfant/OpportuneX-ai.git",
    demoUrl: "https://d1hbuq3aci83lo.cloudfront.net",
    devpostUrl: "https://devpost.com/software/opportunx",
    badge: "FEATURED BUILD",
    role: "FULL STACK & CLOUD",
    year: "2026",
    accentColor: "#FAFF00",
    planetColor: "#FAFF00",
    architecture: "Event-driven Python crawlers on AWS Lambda writing to DynamoDB with API Gateway routing and CloudFront edge CDN.",
    challenges: "Handling real-time resume parsing without serverless cold start timeouts.",
    lessons: "Implemented optimized lightweight Python runtimes with pre-cached embeddings.",
    featured: true
  },
  {
    id: "rakshatantra",
    name: "RAKSHATANTRA AI",
    tagline: "WORKFORCE SAFETY INTELLIGENCE",
    description: "Workplace safety monitoring using IoT signals, computer vision and AI. Bronze Medal winner at Code Veda Hackathon.",
    longDescription: "Engineered during the Code Veda Hackathon to safeguard industrial laborers. Combines edge IoT sensory data with computer vision models on Microsoft Azure to detect safety violations and hazard exposure in real time.",
    category: "SAFETY & VISION AI",
    techStack: ["IoT", "Computer Vision", "AI", "Microsoft Azure", "Python"],
    metrics: ["Bronze Medal Winner", "Code Veda Hackathon", "Real-Time Hazard Alerting"],
    githubUrl: "https://github.com/hasishinfant/Rakshatantra-AI.git",
    badge: "BRONZE MEDAL // CODE VEDA",
    role: "AI & IOT ARCHITECT",
    year: "2026",
    accentColor: "#FF0000",
    planetColor: "#FF0000",
    architecture: "Edge sensor stream + OpenCV camera frames processed through Azure AI inference nodes triggering instantaneous alerts.",
    challenges: "Synchronizing high-frequency IoT telemetry with computer vision frame rates.",
    lessons: "Separated sensor anomaly queues from vision classification loops to prevent backpressure.",
    featured: true
  },
  {
    id: "travelsphere",
    name: "TRAVELSPHERE",
    tagline: "TRAVEL RISK INTELLIGENCE",
    description: "An 8-factor destination confidence scoring engine for more risk-aware travel planning. Top 52 National Finalist at TBO VoyageHack 3.0.",
    longDescription: "Replaces scattered travel tabs with a unified intelligence dashboard. Synthesizes weather patterns, geopolitical risk, transport reliability, and health advisories into an 8-factor confidence score.",
    category: "TRAVEL INTELLIGENCE",
    techStack: ["React", "TypeScript", "AI Decision Models", "Tailwind CSS"],
    metrics: ["Top 52 Nationally", "TBO VoyageHack 3.0", "8-Factor Confidence Scoring"],
    githubUrl: "https://github.com/hasishinfant/tbo.git",
    linkedinPostUrl: "https://www.linkedin.com/posts/hasish-infant_traveltech-ai-productengineering-activity-7434099428321394688-Ibyq",
    badge: "TOP 52 NATIONALLY // TBO",
    role: "PRODUCT / ENGINEERING",
    year: "2026",
    accentColor: "#0044FF",
    planetColor: "#0044FF",
    architecture: "Multi-parameter weighted scoring algorithm calculating risk indices and rendering an interactive confidence interface.",
    challenges: "Normalizing disparate international datasets into a single intuitive metric.",
    lessons: "Implemented percentile vector scaling with transparent breakdown provenance.",
    featured: true
  },
  {
    id: "videoy",
    name: "VIDEOY",
    tagline: "REAL-TIME AI VIDEO INTELLIGENCE",
    description: "A multi-party video platform using WebRTC and Mediasoup SFU with AI-generated meeting intelligence and automated summaries.",
    longDescription: "High-throughput video conferencing engine with sub-100ms latency. Integrates a real-time AI copilot that transcribes, extracts actionable items, and generates contextual meeting summaries.",
    category: "VIDEO & SFU PLATFORM",
    techStack: ["WebRTC", "Mediasoup SFU", "Node.js", "AI Summary API"],
    metrics: ["Sub-100ms Video Latency", "Mediasoup Selective Forwarding", "Real-Time AI Copilot"],
    githubUrl: "https://github.com/hasishinfant/Videoy.git",
    badge: "SFU WEBRTC ENGINE",
    role: "FULL STACK & WEBRTC",
    year: "2026",
    accentColor: "#10B981",
    planetColor: "#10B981",
    architecture: "Selective Forwarding Unit (SFU) architecture with Mediasoup C++ worker threads orchestrated via Node.js.",
    challenges: "Managing bandwidth allocation across fluctuating network connections.",
    lessons: "Designed dynamic simulcast stream switching based on consumer viewport visibility.",
    featured: true
  },
  {
    id: "oceanraksha",
    name: "OCEANRAKSHA AI",
    tagline: "MARINE SAFETY INTELLIGENCE",
    description: "An early-warning system for coastal fishermen using environmental data and multilingual advisory generation.",
    longDescription: "Engineered to protect vulnerable artisanal fishermen. Aggregates oceanographic meteorological data and generates localized, speech-enabled advisories in coastal regional languages.",
    category: "MARINE & CLIMATE TECH",
    techStack: ["Environmental APIs", "AI", "Multilingual NLP", "Python"],
    metrics: ["Multilingual Speech Advisories", "Early Storm Warning", "Artisanal Fishing Support"],
    githubUrl: "https://github.com/AdvayaBGSCET/team-momentum.git",
    badge: "COASTAL DEFENSE",
    role: "AI & NLP ENGINEER",
    year: "2025",
    accentColor: "#8B5CF6",
    planetColor: "#8B5CF6",
    architecture: "Environmental API telemetry fed into localized multilingual generative models with audio synthesis.",
    challenges: "Translating complex ocean risk terminology into actionable regional dialects.",
    lessons: "Trained zero-shot prompt templates focused on direct, imperative safety advice.",
    featured: true
  }
];

export const PROJECT_INDEX_DATA = [
  { name: "OPPORTUNX", year: "2026", type: "CAREER TECH", stack: "AWS Lambda / DynamoDB / React", url: "https://github.com/hasishinfant/OpportuneX-ai.git" },
  { name: "RAKSHATANTRA AI", year: "2026", type: "SAFETY & VISION", stack: "Azure / IoT / OpenCV / Python", url: "https://github.com/hasishinfant/Rakshatantra-AI.git" },
  { name: "TRAVELSPHERE", year: "2026", type: "TRAVEL RISK AI", stack: "React / TypeScript / AI Models", url: "https://github.com/hasishinfant/tbo.git" },
  { name: "VIDEOY", year: "2026", type: "VIDEO SFU", stack: "WebRTC / Mediasoup / Node.js", url: "https://github.com/hasishinfant/Videoy.git" },
  { name: "OCEANRAKSHA AI", year: "2025", type: "MARINE AI", stack: "Environmental APIs / NLP / Python", url: "https://github.com/AdvayaBGSCET/team-momentum.git" }
];

export const PROOF_METRICS = [
  { value: "50+", label: "DSA PROBLEMS SOLVED", detail: "Active problem solver & algorithm practice" },
  { value: "4x", label: "GRAND FINALIST", detail: "Proven hackathon competitor under sprint pressure" },
  { value: "1x", label: "HACKATHON WINNER", detail: "Shipped winning prototypes end-to-end" },
  { value: "BRONZE", label: "CODE VEDA HACKATHON", detail: "National workforce safety innovation award" },
  { value: "TOP 52", label: "TBO VOYAGEHACK 3.0", detail: "Selected among thousands of national teams" }
];

export const LEADERSHIP_DATA = [
  {
    role: "CO-LEAD",
    org: "SIG Web App & UI/UX — Alliance University",
    description: "Mentoring students in modern React, UI/UX principles, design systems, wireframing, testing, debugging, version control, and production deployment.",
    badge: "UNIVERSITY LEADERSHIP"
  },
  {
    role: "FOUNDER",
    org: "Tech^Ferrs Community",
    description: "Founded an engineering community connecting student developers with seasoned software and AI engineers through talks, workshops, and collaborative hackathons.",
    badge: "COMMUNITY FOUNDER"
  }
];

export const FREELANCE_SERVICES: ServiceItem[] = [
  {
    id: "business-websites",
    number: "01",
    title: "BUSINESS WEBSITES",
    description: "Modern, high-speed, fully responsive websites for businesses, creators, and small teams that want a standout digital presence.",
    deliverables: ["Custom Layout", "Blistering Load Speed", "Mobile Optimization", "SEO Foundations"],
    tag: "WEB PRESENCE"
  },
  {
    id: "landing-pages",
    number: "02",
    title: "LANDING PAGES",
    description: "High-impact landing pages focused on clear messaging, strong visual hierarchy, and converting visitors into customers.",
    deliverables: ["Punchy Copy Hierarchy", "Visual Storytelling", "Fast Form Integrations", "Analytics Setup"],
    tag: "CONVERSION"
  },
  {
    id: "web-apps",
    number: "03",
    title: "WEB APPLICATIONS",
    description: "Full-stack web applications, internal operational tools, user portals, and high-throughput dashboards built to scale.",
    deliverables: ["Full-Stack Architecture", "Authentication & Databases", "API Integrations", "Admin Dashboards"],
    tag: "FULL STACK"
  },
  {
    id: "ai-features",
    number: "04",
    title: "AI-POWERED FEATURES",
    description: "Integrating intelligent LLM capabilities, document synthesis, conversational assistants, and automated workflow triggers.",
    deliverables: ["Gemini / Claude API Integration", "Document RAG", "Workflow Automations", "Intelligent Bots"],
    tag: "AI CAPABILITIES"
  },
  {
    id: "frontend-dev",
    number: "05",
    title: "FRONTEND DEVELOPMENT",
    description: "Transforming Figma designs and rough concepts into pixel-perfect, accessible, production-quality code with tactile animations.",
    deliverables: ["React / Next.js / TypeScript", "Tailwind CSS", "Interactive Micro-Animations", "Clean Component Architecture"],
    tag: "CRAFT & UI"
  }
];

export const FREELANCE_PROCESS: FreelanceStep[] = [
  { step: "01", title: "IDEA", description: "We discuss your vision, core requirements, and target timeline to define the essential first version." },
  { step: "02", title: "DESIGN", description: "I outline the visual hierarchy, component layout, and user flows with clean, bold aesthetics." },
  { step: "03", title: "DEVELOPMENT", description: "I write clean, modular, production-ready code with responsive layouts and robust state handling." },
  { step: "04", title: "DEPLOYMENT", description: "We ship to a live URL with custom domain configuration, SSL encryption, and analytics." }
];

export const TECHNICAL_SKILLS = {
  languages: ["Java", "C++", "Python", "JavaScript", "TypeScript", "SQL"],
  frontend: ["React.js", "Next.js", "React Native", "HTML5", "CSS3", "Tailwind CSS", "Leaflet.js"],
  backend: ["Node.js", "Express.js", "REST APIs", "MongoDB", "Firebase", "Supabase", "WebRTC", "Mediasoup SFU"],
  cloud: ["AWS Lambda", "API Gateway", "DynamoDB", "S3", "CloudFront", "Microsoft Azure"],
  toolsAndAI: ["Git", "GitHub", "LangChain", "Claude API", "Groq", "Figma"],
  fundamentals: ["Data Structures & Algorithms", "Object-Oriented Programming", "DBMS"]
};

// Backward compatibility helper exports for any remaining canvas components
export interface SkillItem {
  id: string;
  name: string;
  category: string;
  experienceYears: string;
  level: number;
  favoriteFeatures: string[];
  relatedProjects: string[];
  color: string;
  iconName: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  category: string;
  description: string;
  achievements: string[];
  role?: string;
  organization?: string;
  islandTheme?: string;
}

export const SKILLS: SkillItem[] = [
  { id: "ts", name: "TypeScript", category: "Languages", experienceYears: "3+", level: 95, favoriteFeatures: ["Strict Type Safety"], relatedProjects: ["OpportunX"], color: "#3178c6", iconName: "Code" }
];

export const BUILDING_IN_PUBLIC_DATA = {
  headline: "BUILDING IN PUBLIC",
  subheadline: "Retrospectives, takeaways, and sharing the engineering process.",
  fragments: [
    { title: "OpportunX Cloud Launch", tag: "CLOUD // AWS", topic: "CLOUD INFRASTRUCTURE", note: "Serverless AWS Lambda crawlers with DynamoDB.", text: "Deployed serverless roadmap generation on AWS.", metrics: "12,000+ Parsed" }
  ],
  metrics: [
    { label: "Community Members", value: "200+" }
  ]
};

export const LAB_EXPERIMENTS = [
  {
    id: "webrtc-sfu",
    title: "WebRTC SFU Multiplexing",
    date: "2026",
    description: "Selective Forwarding Unit real-time media router with Mediasoup C++ workers.",
    status: "ACTIVE EXPERIMENT",
    tags: ["WebRTC", "SFU", "C++", "Node.js"],
    category: "SYSTEMS",
    annotation: "Sub-100ms latency testing",
    codeSnippet: "const router = await mediasoupWorker.createRouter();"
  }
];

export const COMMUNITY_AFFILIATIONS = [
  {
    name: "SIG Web App & UI/UX",
    category: "UNIVERSITY LEADERSHIP",
    location: "Bengaluru, IN",
    role: "Co-Lead",
    org: "Alliance University",
    type: "University Leadership",
    impact: "Mentoring student developers in React & web architecture"
  },
  {
    name: "Tech^Ferrs",
    category: "DEV COMMUNITY",
    location: "Bengaluru, IN",
    role: "Founder",
    org: "Tech^Ferrs Community",
    type: "Community Builder",
    impact: "Bridging students with industry engineers"
  }
];

export const TESTIMONIALS = [
  {
    id: "hackathon-1",
    name: "Hackathon Judge",
    role: "Tech Lead",
    company: "Code Veda",
    avatar: "",
    content: "Hasish brings incredible velocity, full-stack competence, and extreme ownership to every project.",
    quote: "Hasish brings incredible velocity, full-stack competence, and extreme ownership to every project.",
    author: "Hackathon Judge & Tech Lead",
    title: "Code Veda Hackathon"
  }
];

export const TIMELINE: TimelineMilestone[] = [
  {
    year: "2026",
    title: "Hackathon Wins & Production Scaled",
    category: "MILESTONE",
    description: "Won Bronze Medal at Code Veda, Top 52 at TBO VoyageHack 3.0, and launched OpportunX on AWS.",
    achievements: ["Code Veda Bronze Medal", "TBO VoyageHack 3.0 Top 52", "OpportunX AWS CloudFront Launch"],
    role: "Full-Stack Engineer",
    organization: "Independent Builder",
    islandTheme: "cyber"
  }
];

export const GITHUB_STATS = {
  totalRepos: 30,
  totalStars: 45,
  totalContributions: 850,
  currentStreak: 21,
  longestStreak: 45,
  repositoriesCount: 30,
  totalPRs: 28,
  recentCommits: [
    { repo: "OpportuneX-ai", time: "2 days ago", message: "feat: add serverless AWS Lambda roadmap generation" },
    { repo: "Videoy", time: "5 days ago", message: "perf: optimize Mediasoup SFU consumer bitrate switching" }
  ],
  topLanguages: [
    { name: "TypeScript", percentage: 55, color: "#3178c6" },
    { name: "Python", percentage: 25, color: "#3572A5" },
    { name: "JavaScript", percentage: 15, color: "#f1e05a" },
    { name: "C++", percentage: 5, color: "#f34b7d" }
  ]
};

