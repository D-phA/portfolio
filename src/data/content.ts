// Every string the site renders lives here.

export const LINKEDIN_URL =
  "https://www.linkedin.com/in/daphne-defne-avkarogullari/";

export const GITHUB_URL = "https://github.com/D-phA";

export const profile = {
  name: "Daphne Avkarogullari",
  tagline:
    "I am an ECE undergraduate at Carnegie Mellon. I work where software meets hardware.",
  location: "San Francisco Bay Area, CA",
  status: "Seeking a Summer 2027 technical internship",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

// Longer bio paragraphs for the About section.
export const about = {
  paragraphs: [
    "I am a junior studying Electrical and Computer Engineering at Carnegie Mellon University, with an AI/ML minor and a 3.8 GPA. I am drawn to the intersection of software and hardware, and I genuinely enjoy everything about computers.",
    "My interests span systems (operating systems, compilers, and runtimes), hardware and embedded engineering, ML and AI systems and efficiency, and quantitative engineering. I am comfortable close to the metal and across the stack, and I like learning quickly across unfamiliar territory.",
    "So far that has meant building policy and configuration infrastructure for cloud-delivered security at Cisco, shipping full-stack features at Amazon, and building hardware and computer-vision projects from scratch at CMU hackathons.",
  ],
  education: {
    school: "Carnegie Mellon University",
    degree: "B.S. in Electrical and Computer Engineering, Minor in Machine Learning",
    dates: "Aug 2024 to May 2028 (Pittsburgh, PA)",
    gpa: "3.8",
    honors: "Dean's List with High Honors (Fall 2024, Spring 2025, Fall 2025)",
    coursework: [
      "Intro to Computer Systems",
      "Principles of Imperative Computation",
      "Structure and Design of Digital Systems",
      "Intro to Machine Learning",
      "Natural Language Processing",
      "Signals and Systems",
      "Electronic Devices and Analog Circuits",
      "Probability Theory",
      "Linear Algebra",
    ],
  },
};

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  dates: string;
  summary: string;
  bullets: string[];
  tags: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "Cisco",
    role: "Software Engineer, Data/AI/Intelligent Systems Intern",
    location: "San Francisco Bay Area",
    dates: "Summer 2026",
    summary:
      "Policy and configuration generation and distribution infrastructure behind Cisco's cloud-delivered security service (Umbrella) and the unified-policy layer of Cisco Secure Access (SSE).",
    bullets: [
      "Diagnosed a cross-filesystem (EXDEV) failure that blocked a memory-backed (tmpfs) storage mode for a policy pipeline, then shipped a fix that unblocked the mode. The change cut drive writes by roughly 50 percent and pulled sustained write load from about 124 percent to about 64 percent of the drives' rated endurance, roughly doubling projected SSD lifespan.",
      "Designed and implemented a reliability framework with checksums and integrity checks that reduced the volume of errors from a system core to the policy pipeline, meaningfully lowering operational load on the team. Built with Go, Python, and YAML, using Kafka and Kubernetes.",
      "Worked across several repositories with an industry-standard external tooling ecosystem, gaining hands-on experience with AWS (EKS, EC2, IAM, Secrets Manager, Certificate Manager), plus Ansible, Terraform, Jenkins, RabbitMQ, and Nginx.",
      "Built AI-enablement tooling for the team, including reusable skills, knowledge bases, and MCP servers.",
    ],
    tags: ["Python", "Go", "YAML", "Kafka", "Kubernetes", "AWS", "Systems"],
  },
  {
    company: "Amazon",
    role: "Software Development Engineer Intern",
    location: "Seattle, WA",
    dates: "Summer 2025",
    summary:
      "Prime Video Live Events. Full-stack development on tooling that operators use to run published live-sports events.",
    bullets: [
      "Launched template selection and quick switching, letting operators apply pre-tested settings to published live-sports events in one step. Projected to cut clicks by about 60 percent and task time by about 40 percent (internal metrics).",
      "Delivered full-stack development across Java on the backend and TypeScript and React on the frontend, with DynamoDB, feature flags, and safeguard mechanisms for safe rollout.",
      "Shipped to production with a unit and integration test suite (95 to 97 percent coverage) and CI workflows to ensure reliability and prevent regressions.",
    ],
    tags: ["Java", "TypeScript", "React", "DynamoDB", "AWS", "Full-stack"],
  },
];

export interface MediaSlot {
  /** Empty renders a placeholder tile instead of a broken image. */
  src: string;
  alt: string;
  caption: string;
  /** Set for a silent looping clip; `src` is then used as its poster. */
  video?: { mp4: string; webm: string };
}

export interface Project {
  name: string;
  award?: string;
  timeframe: string;
  blurb: string;
  bullets: string[];
  tags: string[];
  repoUrl?: string;
  repoNote?: string;
  featured?: boolean;
  media: MediaSlot[];
}

export const projects: Project[] = [
  {
    name: "Dunes Tower Defense",
    award: "Build18 2026 Officer's Choice Award",
    timeframe: "Winter 2026",
    featured: true,
    blurb:
      "A from-scratch tower-defense game (no engine) where a physical sandbox becomes the map. One of six awards selected from 100+ teams at CMU ECE's Build18.",
    bullets: [
      "Built the game in C++ with OpenGL for rendering and SDL for the game loop, input, and audio.",
      "Used a depth camera to reconstruct sand as a real-time heightmap and projected a topographic map onto the sandbox.",
      "Detected physical tower pieces with OpenCV and synced them with game state.",
      "Implemented dynamic enemy pathfinding over changing terrain (towers and elevation) using the computed topology.",
    ],
    tags: ["C++", "OpenGL", "SDL", "OpenCV", "Depth camera", "Pathfinding"],
    repoUrl: "https://github.com/D-phA/DunesTowerDefense",
    repoNote: "Build18 team project; this is my attributed repository, which credits the original team repo in its README.",
    media: [
      {
        src: "media/dunes-demo-poster.jpg",
        alt: "Sand in the box, lit by the projected height map, with 3D-printed towers on it and a hand reshaping the terrain",
        caption: "Reshaping the sand; the height map follows in real time",
        video: { mp4: "media/dunes-demo.mp4", webm: "media/dunes-demo.webm" },
      },
      {
        src: "media/dunes-1.jpg",
        alt: "Build18 demo table: the projector rig above the sandbox with people playing",
        caption: "The rig at Build18: projector overhead, depth camera beside it",
      },
    ],
  },
  {
    name: "FanBuddy Robot",
    timeframe: "Build18 2025",
    blurb:
      "An OpenCV-based person-tracking fan that follows you around the room, built end to end in a week.",
    bullets: [
      "Tracked a person with OpenCV and drove closed-loop control from computer-vision outputs to motor commands.",
      "Adjusted fan speed by distance, rotated to follow the subject, and auto-shut-off when no one was present.",
      "Ran an approximately 100 ms frame pipeline on a Raspberry Pi inside a custom 3D-printed frame.",
    ],
    tags: ["OpenCV", "Raspberry Pi", "Closed-loop control", "3D printing", "Embedded"],
    // No public repo for FanBuddy.
    repoNote: "No public repo yet.",
    media: [
      {
        src: "",
        alt: "FanBuddy Robot: the 3D-printed person-tracking fan",
        caption: "The 3D-printed person-tracking fan build",
      },
    ],
  },
];

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: [
      "C",
      "Java",
      "Python",
      "C++",
      "Go",
      "PHP",
      "SQL",
      "TypeScript / JavaScript",
      "Assembly (x86-64)",
      "SystemVerilog",
      "YAML",
    ],
  },
  {
    label: "Systems and Hardware",
    items: [
      "Multithreading / concurrency",
      "Memory hierarchy and caching",
      "Performance benchmarking",
      "Digital and logic design",
      "FPGA synthesis (Quartus, Vivado)",
      "RISC-V fundamentals",
      "Analog and mixed-signal circuits",
      "Raspberry Pi / microcontrollers",
    ],
  },
  {
    label: "ML and AI",
    items: [
      "Neural networks and backpropagation",
      "Logistic regression, decision trees",
      "Reinforcement learning (MDPs)",
      "N-gram and Transformer language models",
      "PyTorch, Hugging Face Transformers",
      "Probability theory, linear algebra",
    ],
  },
  {
    label: "Frameworks, Cloud and Tools",
    items: [
      "React.js",
      "OpenCV",
      "NumPy",
      "AWS (EKS, EC2, IAM, Secrets Manager, Certificate Manager)",
      "DynamoDB",
      "Kafka, Kubernetes",
      "Ansible, Terraform, Jenkins",
      "Docker, Nginx, RabbitMQ",
      "Git / GitHub, CI/CD, Linux",
      "MATLAB",
    ],
  },
];

export const interests = [
  "Systems (OS, compilers, runtimes)",
  "Hardware and software interface",
  "FPGA and digital design",
  "ML/AI systems and efficiency",
  "Quantitative engineering",
];

export const spokenLanguages = [
  "English (Native / Bilingual)",
  "Turkish (Native / Bilingual)",
  "Spanish (Professional Working)",
];

export const activities = [
  "IEEE @ CMU",
  "Society of Women Engineers @ CMU",
  "Women in ECE @ CMU",
  "Delta Gamma (Booth Electrical Committee and Buggy Team)",
  "Carnegie Mellon Racing (software and electrical)",
];
