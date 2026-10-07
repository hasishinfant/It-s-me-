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

export interface TimelineItem {
  year: string;
  title: string;
  type: string;
  organization?: string;
  description: string;
  metrics?: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  role: string;
  organization?: string;
  description: string;
  achievements: string[];
  category: string;
  islandTheme: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface LabExperiment {
  id: string;
  title: string;
  category: string;
  status: string;
  description: string;
  tech: string[];
  codeSnippet?: string;
  annotation: string;
}

export const PERSONAL_DATA = {
  name: "Hasish Infant",
  role: "Full-Stack Developer & AI Builder",
  title: "Full-Stack Developer & AI Builder",
  location: "Bengaluru, India",
  headline: "BUILDING THINGS THAT SHOULDN'T EXIST YET.",
  tagline: "BUILDING THINGS THAT SHOULDN'T EXIST YET.",
  mission: "I build products, experiments and systems while learning in public. Combining AI, automation, and tactile design.",
  heroSubheadline: "Full-stack developer and AI builder from Bengaluru. I build products, experiments and systems while learning in public.",
  status: "AVAILABLE FOR INTERNSHIPS",
  bioStatement: "STILL LEARNING. STILL BUILDING.",
  bioDescription: "I'm Hasish, a Computer Science student and full-stack developer from Bengaluru. I like taking an idea, turning it into a system, and seeing how far I can push it. Most of what I know came from building, breaking things, hackathons, open-source exploration, and sharing the process.",
  roles: ["Full Stack Developer", "AI Builder", "Creative Engineer"],
  traits: ["Curiosity", "Craftsmanship", "Speed", "Systems Thinking"],
  socials: {
    github: "https://github.com/hasishinfant",
    linkedin: "https://www.linkedin.com/in/hasish-infant",
    topmate: "https://topmate.io/hasish_infant",
    website: "https://hasishinfant.dev",
    email: "hasishinfant@gmail.com",
    twitter: "https://twitter.com/hasishinfant",
    calendly: "https://topmate.io/hasish_infant",
  }
};

export const PROJECTS: Project[] = [
  {
    id: "opus",
    name: "OPUS",
    tagline: "Personal AI operating system experiment with 3D orbital interface",
    description: "An AI layer between the user and their computer. Translates voice commands into autonomous macOS interactions, application launching, and visual feedback through an interactive 3D orbital interface.",
    longDescription: "OPUS reimagines human-computer interaction by replacing rigid desktop windows with a conversational 3D orbital control plane. It integrates real-time voice recognition, intent parsing, agent dispatch, and native OS automation.",
    category: "AI / SYSTEM",
    techStack: ["Next.js", "Three.js", "TypeScript", "Gemini", "Tailwind CSS"],
    metrics: ["Sub-400ms Voice Intent Routing", "Native macOS Bridge", "Interactive 3D Orbital UI"],
    githubUrl: "https://github.com/hasishinfant",
    badge: "HERO PROJECT",
    role: "BUILDER",
    year: "2026",
    accentColor: "#9333EA",
    planetColor: "#9333EA",
    architecture: "Voice Input → Gemini Intent Classification → Agent Dispatcher → Native macOS Tool Execution → 3D Three.js Visual Feedback",
    challenges: "Synchronizing low-latency voice telemetry with real-time 60 FPS Three.js orbital physics and local process orchestration.",
    lessons: "Implemented event-driven DAG execution queues with deterministic fallback states to ensure fluid UI responsiveness.",
    featured: true
  },
  {
    id: "opportunx",
    name: "OPPORTUNX",
    tagline: "AI-powered opportunity discovery and matching platform",
    description: "An intelligent platform aggregating internships, hackathons, and research grants globally. Features real-time multi-source data ingestion, AI-filtered matching, and dimensional card interaction.",
    longDescription: "OpportunX solves the fragmented student opportunity landscape by continuously indexing verified engineering programs, hackathons, and venture grants with semantic skill matching.",
    category: "CAREER TECH",
    techStack: ["React", "Python", "AWS Lambda", "DynamoDB", "S3", "CloudFront"],
    metrics: ["12,000+ Opportunities Parsed", "Automated Daily Pipeline", "Serverless AWS Scale"],
    devpostUrl: "https://devpost.com/software/opportunx",
    githubUrl: "https://github.com/hasishinfant",
    badge: "FEATURED BUILD",
    role: "FULL STACK",
    year: "2026",
    accentColor: "#3B82F6",
    planetColor: "#3B82F6",
    architecture: "Event-driven Python crawlers on AWS Lambda writing to DynamoDB with CloudFront edge caching and React dimensional client.",
    challenges: "Structuring unnormalized multi-source data streams without causing high serverless invocation latency.",
    lessons: "Designed schema validation with strict dead-letter queue routing and warm Lambda caching layers.",
    featured: true
  },
  {
    id: "neoscholar",
    name: "NEOSCHOLAR AI",
    tagline: "Research intelligence platform built during a 2-hour Neo4j mini-hack",
    description: "Transforms dense academic papers into interconnected knowledge graphs. Maps relationships, concepts, and citation lineages using Neo4j graph theory and interactive node visualization.",
    longDescription: "Engineered under 2-hour hackathon constraints. Reads scientific literature, synthesizes core conceptual nodes, and renders dynamic knowledge relationship webs.",
    category: "RESEARCH AI",
    techStack: ["React", "TypeScript", "Neo4j", "Python", "LangChain"],
    metrics: ["Built in 2-Hour Mini-Hack", "Knowledge Graph Extraction", "Citation Traversal"],
    githubUrl: "https://github.com/hasishinfant",
    badge: "NEO4J MINI-HACK",
    role: "BUILDER",
    year: "2026",
    accentColor: "#10B981",
    planetColor: "#10B981",
    architecture: "Document Ingestion → Entity & Relationship Extraction → Neo4j Cypher Graph Engine → Interactive Spatial Visualizer",
    challenges: "Rapid entity-resolution under extreme 120-minute hackathon deadline pressure.",
    lessons: "Focused on graph schema simplicity and declarative Cypher queries over sprawling microservices.",
    featured: true
  },
  {
    id: "travelsphere",
    name: "TRAVELSPHERE",
    tagline: "Data-driven travel decision intelligence and risk confidence engine",
    description: "A comprehensive travel decision system that synthesizes destination risk factors, weather patterns, transport viability, health advisories, and budget constraints into a singular unified confidence score.",
    longDescription: "Replaces 20 open browser tabs with one high-clarity intelligence dashboard. Users evaluate destination suitability via algorithmic multi-criteria decision models.",
    category: "TRAVEL INTELLIGENCE",
    techStack: ["React", "TypeScript", "AI Decision Models", "Tailwind CSS"],
    metrics: ["Multi-Factor Confidence Scoring", "Real-time Risk Aggregation", "Sub-second Analysis"],
    githubUrl: "https://github.com/hasishinfant",
    badge: "DECISION SUPPORT",
    role: "PRODUCT / ENGINEERING",
    year: "2026",
    accentColor: "#F59E0B",
    planetColor: "#F59E0B",
    architecture: "Multi-parameter weighted scoring algorithm evaluating climate, geo-security, logistics, and budget telemetry.",
    challenges: "Balancing competing priority weights (e.g. low budget vs. high transport convenience) into an intuitive single score.",
    lessons: "Used normalized percentile scaling with transparent breakdowns so users can inspect score provenance.",
    featured: true
  },
  {
    id: "civicflow",
    name: "CIVICFLOW",
    tagline: "Smart civic issue response and municipal resource optimization",
    description: "A spatial city operations system that aggregates citizen-reported infrastructure issues, calculates urgency priority, and optimizes municipal response team dispatch in real time.",
    longDescription: "Modernizes municipal civic operations by treating city maintenance like a distributed incident management queue. Connects citizen tickets directly to routing algorithms.",
    category: "CIVIC TECH",
    techStack: ["React", "TypeScript", "GeoJSON", "Node.js", "REST APIs"],
    metrics: ["Spatial City Operations UI", "Automated Priority Queue", "Resource Optimization"],
    githubUrl: "https://github.com/hasishinfant",
    badge: "MUNICIPAL SYSTEMS",
    role: "PRODUCT / ENGINEERING",
    year: "2026",
    accentColor: "#EC4899",
    planetColor: "#EC4899",
    architecture: "Spatial incident clustering engine prioritizing severity, density, and department availability across municipal grids.",
    challenges: "Visualizing high-density geospatial point clusters without degrading browser DOM performance.",
    lessons: "Implemented viewport-bounded spatial indexing with canvas-accelerated marker rendering.",
    featured: true
  },
  {
    id: "attendq",
    name: "ATTENDQ",
    tagline: "Geofenced attendance verification and real-time classroom telemetry",
    description: "Lightweight mobile and web attendance verification for educational institutions with cryptographic geofence validation and instant reporting.",
    longDescription: "Eliminates attendance fraud with rolling time-based credentials and sub-meter location boundaries.",
    category: "EDTECH",
    techStack: ["React Native", "TypeScript", "Node.js", "PostgreSQL"],
    metrics: ["Sub-2s Check-in Speed", "Cryptographic Validation", "Zero-Proxy Rate"],
    githubUrl: "https://github.com/hasishinfant",
    badge: "MOBILE SYSTEM",
    role: "FULL STACK",
    year: "2026",
    accentColor: "#06B6D4",
    planetColor: "#06B6D4",
    architecture: "Time-based rotating cryptographic token exchange verified against campus GPS polygon bounds.",
    challenges: "Handling sporadic indoor GPS drift and device clock discrepancies.",
    lessons: "Combined client-side Kalman filtering with server-verified NTP time offsets.",
    featured: false
  },
  {
    id: "parko",
    name: "PARKO",
    tagline: "Urban parking allocation and sensorless spot reservation app",
    description: "Smart urban parking discovery using predictive crowd-density algorithms and real-time reservation dispatch.",
    longDescription: "Reduces urban traffic congestion caused by circling vehicles through crowdsourced space availability models.",
    category: "MOBILITY",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    metrics: ["Crowd-Density Prediction", "Interactive Map UI", "Instant Booking Flow"],
    githubUrl: "https://github.com/hasishinfant",
    badge: "MOBILITY APP",
    role: "APP / PRODUCT",
    year: "2026",
    accentColor: "#8B5CF6",
    planetColor: "#8B5CF6",
    architecture: "Real-time state updates using Supabase subscriptions and location-proximity indexing.",
    challenges: "Predicting occupancy churn rates in high-turnover metropolitan zones.",
    lessons: "Leveraged exponential moving averages over historical time-block arrival patterns.",
    featured: false
  }
];

export const PROJECT_INDEX_DATA = [
  { name: "OPUS", year: "2026", type: "AI / SYSTEM", role: "BUILDER", id: "opus" },
  { name: "OPPORTUNX", year: "2026", type: "CAREER TECH", role: "FULL STACK", id: "opportunx" },
  { name: "NEOSCHOLAR AI", year: "2026", type: "RESEARCH AI", role: "BUILDER", id: "neoscholar" },
  { name: "TRAVELSPHERE", year: "2026", type: "TRAVEL INTELLIGENCE", role: "PRODUCT / ENGINEERING", id: "travelsphere" },
  { name: "CIVICFLOW", year: "2026", type: "CIVIC TECH", role: "PRODUCT / ENGINEERING", id: "civicflow" },
  { name: "ATTENDQ", year: "2026", type: "EDTECH", role: "FULL STACK", id: "attendq" },
  { name: "PARKO", year: "2026", type: "MOBILITY", role: "APP / PRODUCT", id: "parko" },
];

export const TECHNICAL_STACK = {
  languages: ["C", "C++", "Python", "Java", "JavaScript", "TypeScript", "SQL"],
  frontend: ["React", "Next.js", "React Native", "Three.js"],
  backend: ["Node.js", "Express", "REST APIs", "Supabase", "Firebase"],
  cloud: ["AWS", "Azure", "S3", "CloudFront", "Lambda", "DynamoDB"],
  ai: ["Gemini", "Claude", "LangChain", "AI Agents"],
  tools: ["Git", "GitHub", "Figma", "VS Code"],
};

export const PROOF_OF_WORK_TIMELINE: TimelineItem[] = [
  {
    year: "2026",
    title: "OPUS",
    type: "AI / 3D EXPERIMENT",
    description: "Architected personal AI operating system experiment connecting voice intent to native macOS tool calling with an interactive 3D orbital interface.",
    metrics: "Hero System • Three.js + Gemini"
  },
  {
    year: "2026",
    title: "NEOSCHOLAR AI",
    type: "NEO4J MINI-HACK",
    description: "Built an academic research intelligence and relationship mapping engine under intense 2-hour hackathon constraints using Neo4j graph theory.",
    metrics: "2-Hour Sprint • Graph Visualization"
  },
  {
    year: "2026",
    title: "TRAVELSPHERE",
    type: "TRAVEL INTELLIGENCE PROTOTYPE",
    description: "Engineered multi-criteria confidence scoring algorithm integrating geo-risk, weather forecasts, transportation viability, and health parameters.",
    metrics: "Decision Support • AI Scorer"
  },
  {
    year: "2026",
    title: "OPPORTUNX",
    type: "OPPORTUNITY INTELLIGENCE PLATFORM",
    description: "Shipped automated discovery engine indexing 12,000+ hackathons and grants with dimensional UI, serverless AWS Lambda, and Devpost showcase.",
    metrics: "AWS CloudFront • Devpost Project"
  },
  {
    year: "2026",
    title: "MICROSOFT / DEVELOPER EVENTS",
    type: "AI / CLOUD ECOSYSTEM EXPOSURE",
    description: "Engaged in hands-on developer workshops, cloud architectural discussions, and advanced AI systems engineering sessions.",
    metrics: "Technical Ecosystem • Cloud Architecture"
  },
  {
    year: "2026",
    title: "GDG BENGALURU",
    type: "DEVELOPER COMMUNITY",
    description: "Active participant in Google Developer Groups Bengaluru tech meetups, hackathons, and local builder community discussions.",
    metrics: "Community Builder • Bengaluru Tech"
  }
];

export const TIMELINE: TimelineMilestone[] = [
  {
    year: "2026",
    title: "OPUS",
    role: "Lead AI Architect",
    organization: "Independent Lab",
    description: "Architected personal AI operating system experiment with voice intent and 3D orbital UI.",
    achievements: ["Voice routing in <400ms", "Native macOS Swift tool caller", "Three.js 60fps orbital scene"],
    category: "Project",
    islandTheme: "cyber"
  },
  {
    year: "2026",
    title: "NeoScholar AI",
    role: "Builder",
    organization: "Neo4j Hackathon",
    description: "Academic knowledge graph engine built under 2-hour mini-hack constraints.",
    achievements: ["2-hour hackathon delivery", "Graph Cypher queries", "Citation relationship mapping"],
    category: "Hackathon",
    islandTheme: "crystal"
  },
  {
    year: "2026",
    title: "OpportunX",
    role: "Full Stack Engineer",
    organization: "OpportunX",
    description: "Automated opportunity matching platform indexing 12,000+ hackathons and grants.",
    achievements: ["AWS Lambda serverless scaling", "Devpost showcase", "CloudFront CDN"],
    category: "Project",
    islandTheme: "gas"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Engineering Lead",
    role: "Senior Staff Architect",
    company: "AI Innovation Lab",
    content: "Hasish has an uncommon ability to bridge high-craft spatial design with deep systems engineering. His work on autonomous agent architectures is exceptionally intentional.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  }
];

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

export const SKILLS: SkillItem[] = [
  {
    id: "ts",
    name: "TypeScript",
    category: "Languages",
    experienceYears: "3+",
    level: 95,
    favoriteFeatures: ["Strict Type Safety", "Generic Constrained Inference"],
    relatedProjects: ["OPUS", "OpportunX"],
    color: "#3178c6",
    iconName: "Code"
  },
  {
    id: "react",
    name: "React & Next.js",
    category: "Frontend",
    experienceYears: "3+",
    level: 92,
    favoriteFeatures: ["Server Components", "Suspense Streaming"],
    relatedProjects: ["OpportunX", "TravelSphere"],
    color: "#61dafb",
    iconName: "Layers"
  },
  {
    id: "three",
    name: "Three.js & R3F",
    category: "Graphics",
    experienceYears: "2+",
    level: 88,
    favoriteFeatures: ["Custom GLSL Shaders", "Instanced Buffer Geometries"],
    relatedProjects: ["OPUS", "NeoScholar AI"],
    color: "#ffffff",
    iconName: "Sparkles"
  },
  {
    id: "python",
    name: "Python",
    category: "AI & Backend",
    experienceYears: "3+",
    level: 90,
    favoriteFeatures: ["AsyncIO Workers", "PyTorch Tensors"],
    relatedProjects: ["OPUS", "OpportunX"],
    color: "#3572A5",
    iconName: "Terminal"
  }
];

export const GITHUB_STATS = {
  totalContributions: 1420,
  currentStreak: 42,
  longestStreak: 98,
  repositoriesCount: 24,
  totalPRs: 65,
  totalRepos: 24,
  totalStars: 180,
  recentCommits: [
    { message: "feat: deterministic DAG cycle validation", repo: "opus-ai-agent", date: "Today", time: "2h ago" },
    { message: "perf: cap Three.js DPR for low-power mobile GPUs", repo: "my-portfolio", date: "Yesterday", time: "1d ago" }
  ],
  topLanguages: [
    { name: "TypeScript", percentage: 58, color: "#3178c6" },
    { name: "Python", percentage: 26, color: "#3572A5" },
    { name: "C++", percentage: 16, color: "#f34b7d" }
  ]
};

export const BUILDING_IN_PUBLIC_DATA = {
  headline: "I DON'T JUST BUILD. I SHARE THE PROCESS.",
  subheadline: "Raw iterations, architectural decisions, failed attempts, and technical takeaways shared openly with the community.",
  metrics: [
    { value: "100K+", label: "LinkedIn Impressions", context: "Technical walkthroughs & build reflections" },
    { value: "28+", label: "In-Depth Posts", context: "Engineering breakdowns & architecture retros" },
    { value: "Multiple", label: "Hackathons", context: "High-intensity prototype sprints" },
    { value: "Bengaluru", label: "Builder Hub", context: "Active in local engineering community" },
  ],
  fragments: [
    {
      tag: "ITERATION 03",
      title: "Why Voice Agents Fail at Context Switching",
      note: "Learned that single-prompt LLMs fail when bridging OS actions with open-ended conversation. Replaced with dual-track Intent vs Tool DAG router.",
      topic: "System Design"
    },
    {
      tag: "HACKATHON SPRINT",
      title: "Building NeoScholar in 120 Minutes",
      note: "Constrained time forces radical prioritization: dropped complex graph embeddings, focused on pure Cypher relationship nodes.",
      topic: "Neo4j Hack"
    },
    {
      tag: "POST-MORTEM",
      title: "When Serverless Freezes: Taming Cold Starts",
      note: "Provisioned concurrency is expensive for student projects. Solved Lambda cold starts by bundling lightweight Python runtimes with minimal dependencies.",
      topic: "AWS Architecture"
    },
    {
      tag: "GRAPHICS LAB",
      title: "Sub-16ms Shaders on Low-Power Mobile GPUs",
      note: "Three.js models can easily throttle mobile browsers. Swapped heavy PBR textures for procedural mathematical shaders and capped DPR to 2.",
      topic: "Three.js Optimization"
    }
  ]
};

export const LAB_EXPERIMENTS: LabExperiment[] = [
  {
    id: "exp-01",
    title: "Deterministic Agent Loop State Machine",
    category: "AI AGENTS",
    status: "PROTOTYPE",
    description: "Preventing infinite token cycles in autonomous agents using mathematical cycle detection on task dependency graphs.",
    tech: ["TypeScript", "DAG Graph", "Gemini API"],
    codeSnippet: `// Cycle detection guard\nfunction validateTaskGraph(dag: TaskNode[]): boolean {\n  const visited = new Set<string>();\n  const recStack = new Set<string>();\n  return !dag.some(node => hasCycle(node, visited, recStack));\n}`,
    annotation: "BUILD 026 // ZERO-DEADLOCK"
  },
  {
    id: "exp-02",
    title: "Spatial Orbital UI Anchor Math",
    category: "3D UI",
    status: "ACTIVE LAB",
    description: "Calculating spherical coordinate projection for floating interface nodes orbiting an interactive center without jitter.",
    tech: ["Three.js", "GLSL", "React Three Fiber"],
    codeSnippet: `// Spherical orbital transform\nconst phi = Math.acos(-1 + (2 * i) / totalNodes);\nconst theta = Math.sqrt(totalNodes * Math.PI) * phi;\nx = radius * Math.cos(theta) * Math.sin(phi);\ny = radius * Math.sin(theta) * Math.sin(phi);\nz = radius * Math.cos(phi);`,
    annotation: "MATH // SPHERICAL PROJECTION"
  },
  {
    id: "exp-03",
    title: "Resilient Headless Scraper Rotation",
    category: "AUTOMATION",
    status: "SHIPPED",
    description: "Queue-backed distributed scraping workers with automated exponential backoff and ephemeral IP rotation.",
    tech: ["Python", "AsyncIO", "Proxy Mesh"],
    codeSnippet: `async def fetch_with_backoff(session, url, attempt=1):\n  try:\n    return await session.get(url, timeout=4.5)\n  except (TimeoutError, ProxyError):\n    if attempt > 3: raise\n    await asyncio.sleep(2 ** attempt)\n    return await fetch_with_backoff(session, url, attempt + 1)`,
    annotation: "WORKER // RESILIENT RETRY"
  },
  {
    id: "exp-04",
    title: "Multi-Criteria Decision Scoring Algorithm",
    category: "DECISION SYSTEMS",
    status: "VALIDATING",
    description: "Normalized percentile vector weighting for evaluating risk factors against traveler comfort constraints.",
    tech: ["TypeScript", "Vector Math"],
    codeSnippet: `function computeConfidenceScore(metrics: FactorVector, weights: WeightVector): number {\n  const normalized = normalizeFactors(metrics);\n  const dotProduct = normalized.reduce((acc, val, i) => acc + val * weights[i], 0);\n  return Math.min(100, Math.max(0, Math.round(dotProduct * 100)));\n}`,
    annotation: "ALGO // NORMALIZED SCORING"
  }
];

export const COMMUNITY_AFFILIATIONS = [
  { name: "Google Developer Groups Bengaluru", category: "Developer Community", location: "Bengaluru" },
  { name: "Microsoft Developer Ecosystem", category: "Cloud & AI", location: "Global / India" },
  { name: "Neo4j Graph Community", category: "Graph Intelligence", location: "Mini-Hack" },
  { name: "Major League Hacking (MLH)", category: "Hackathon Circuit", location: "Global" },
  { name: "Smart India Hackathon (SIH)", category: "National Innovation", location: "India" },
  { name: "GirlScript Summer of Code", category: "Open Source Contributor", location: "Community" },
  { name: "HackerRank", category: "Problem Solving", location: "Verified Skills" },
  { name: "Alliance University", category: "B.Tech Computer Science (3rd Year)", location: "Bengaluru" },
];
