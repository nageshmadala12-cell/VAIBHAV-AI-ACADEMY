import {
  LearningModule,
  MethodStage,
  WhyAiCard,
  StudentExperienceItem,
  OutcomeItem,
  BonusItem,
  FaqItem,
} from '../types';

export const ACADEMY_CONFIG = {
  name: "Vaibhav AI Academy",
  legalName: "Vaibhav AI Academy Private Limited",
  tagline: "Give Your Child the AI Skills to Learn Smarter, Create More & Lead the Future.",
  startedYear: "2026",
  location: "Banjara Hills, Hyderabad",
  targetAudience: "Classes 5–12",
  phoneDisplay: "630-524-1801",
  phoneTel: "tel:6305241801",
  whatsappUrl: "https://whatsapp.com/channel/0029Vb8XedJDzgT5HzMIvl2H",
  instagramUrl: "https://www.instagram.com/vaibhavaiacademy/",
  linkedinUrl: "https://www.linkedin.com/in/vaibhav-ai-academy-a92a2b417/",
  founder: {
    name: "Vaibhav Chowdhary",
    role: "Founder / Young AI Education Entrepreneur",
  },
};

export const WHY_AI_SKILLS: WhyAiCard[] = [
  {
    title: "LEARN SMARTER",
    description: "Use AI to understand difficult concepts and learn more effectively across school subjects.",
    icon: "Brain",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    title: "CREATE CONFIDENTLY",
    description: "Turn ideas into presentations, images, videos, stories and creative projects.",
    icon: "Sparkles",
    gradient: "from-sky-400 to-blue-600",
  },
  {
    title: "THINK & SOLVE",
    description: "Develop problem-solving and critical-thinking abilities using structured AI frameworks.",
    icon: "Lightbulb",
    gradient: "from-cyan-400 to-teal-500",
  },
  {
    title: "BUILD THE FUTURE",
    description: "Move beyond using AI and start creating real-world projects and entrepreneurial ventures.",
    icon: "Rocket",
    gradient: "from-violet-600 to-purple-800",
  },
];

export const LEARNING_MODULES: LearningModule[] = [
  {
    id: "fundamentals",
    number: "01",
    title: "AI FUNDAMENTALS",
    shortDesc: "Understand what AI is and how it is changing the world.",
    details: [
      "Demystifying Artificial Intelligence without complex math",
      "How Generative AI, Large Language Models, and machine perception work",
      "Real-world impacts on schools, future careers, and daily life",
    ],
    icon: "Cpu",
    gradient: "from-sky-400 to-indigo-500",
  },
  {
    id: "prompting",
    number: "02",
    title: "AI PROMPTING",
    shortDesc: "Learn how to communicate effectively with AI tools.",
    details: [
      "Mastering clear instructions, role prompts, and iterative refinement",
      "Avoiding common hallucinations and verifying generated facts",
      "Structuring prompt frameworks to get precise, insightful answers",
    ],
    icon: "MessageSquareCode",
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    id: "learning",
    number: "03",
    title: "AI FOR LEARNING",
    shortDesc: "Use AI to research, understand subjects and learn smarter.",
    details: [
      "Turning AI into an on-demand, patient 24/7 personal tutor",
      "Breaking down tough Math, Science, and Social Science topics",
      "Generating practice quizzes, flashcards, and interactive study plans",
    ],
    icon: "BookOpenCheck",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: "creativity",
    number: "04",
    title: "AI CREATIVITY",
    shortDesc: "Create presentations, images, videos, stories and ideas using AI.",
    details: [
      "Designing impactful school presentations and infographic slides",
      "Generating digital artwork, storyboards, and audio-visual narratives",
      "Expressing artistic vision while maintaining original creative voice",
    ],
    icon: "Palette",
    gradient: "from-cyan-500 to-sky-600",
  },
  {
    id: "projects",
    number: "05",
    title: "REAL-WORLD AI PROJECTS",
    shortDesc: "Build practical projects that turn ideas into something real.",
    details: [
      "Developing a functional school study assistant bot",
      "Building interactive research projects and community solution prototypes",
      "Publishing and presenting student projects with confidence",
    ],
    icon: "FolderGit2",
    gradient: "from-blue-600 to-indigo-700",
  },
  {
    id: "entrepreneurship",
    number: "06",
    title: "AI ENTREPRENEURSHIP",
    shortDesc: "Understand how AI can be used to solve problems and create opportunities.",
    details: [
      "Identifying community problems and formulating AI-assisted solutions",
      "Designing pitch decks and digital product prototypes",
      "Developing an ethical, responsible mindset for future leadership",
    ],
    icon: "TrendingUp",
    gradient: "from-violet-500 to-purple-700",
  },
];

export const METHOD_STAGES: MethodStage[] = [
  {
    step: "01",
    title: "AI FOUNDATION",
    subtitle: "Curiosity & Core Concepts",
    description: "Students learn what AI truly is, how it processes information, and why it is transforming the world.",
    outcome: "Lifts the mystery of AI; transforms passive consumers into curious explorers.",
  },
  {
    step: "02",
    title: "AI PROMPTING",
    subtitle: "Precision Communication",
    description: "Students learn to talk to AI models with clarity, context, and iterative guidance.",
    outcome: "Ability to command AI tools effectively and achieve exact, tailored results.",
  },
  {
    step: "03",
    title: "AI LEARNING",
    subtitle: "Academic Acceleration",
    description: "Using AI as a personalized study companion to master school subjects and study efficiently.",
    outcome: "Better grades, deeper conceptual retention, and self-directed study habits.",
  },
  {
    step: "04",
    title: "AI CREATION",
    subtitle: "Expressive Media & Stories",
    description: "Transforming imagination into presentations, artwork, videos, interactive games, and written works.",
    outcome: "Creative confidence and multi-media communication capability.",
  },
  {
    step: "05",
    title: "AI PROJECTS",
    subtitle: "Hands-on Synthesis",
    description: "Synthesizing tools into tangible real-world capstone projects solving actual student problems.",
    outcome: "A tangible project portfolio to showcase in school and future admissions.",
  },
  {
    step: "06",
    title: "AI ENTREPRENEURSHIP",
    subtitle: "Future-Ready Leadership",
    description: "Learning how AI powers startups, solves societal challenges, and demands responsible ethical stewardship.",
    outcome: "An entrepreneurial mindset ready to lead in an AI-accelerated tomorrow.",
  },
];

export const STUDENT_EXPERIENCE_ITEMS: StudentExperienceItem[] = [
  {
    id: "learn",
    title: "Learn",
    tagline: "Master Complex Topics Effortlessly",
    description: "Turn tricky Physics laws, Algebra problems, or History timelines into engaging interactive dialogues.",
    icon: "GraduationCap",
    color: "text-sky-500",
    previewPrompt: "Explain photosynthesis like I am a 7th-grade space explorer traveling to Mars.",
    sampleOutput: "Think of plant leaves like solar panels on your spacecraft! They capture photon sunlight, drink water through root tubes, and breathe in CO₂ to create sugar fuel and oxygen for your crew!",
  },
  {
    id: "explore",
    title: "Explore",
    tagline: "Discover Ideas Beyond the Textbook",
    description: "Ask boundless questions, investigate futuristic technologies, and explore how AI operates in space, medicine, and gaming.",
    icon: "Compass",
    color: "text-indigo-500",
    previewPrompt: "How does an autonomous Mars Rover use computer vision to navigate rocks?",
    sampleOutput: "The rover snaps stereo 3D images, calculates obstacle depth in milliseconds, maps optimal wheel paths, and avoids craters automatically!",
  },
  {
    id: "create",
    title: "Create",
    tagline: "Turn Imagination Into Presentations & Media",
    description: "Create visually stunning school slide decks, podcast scripts, and digital posters in minutes.",
    icon: "Palette",
    color: "text-purple-500",
    previewPrompt: "Generate a 5-slide outline with visual prompts for a science fair project on renewable solar energy.",
    sampleOutput: "Slide 1: The Solar Revolution. Slide 2: How Photons Move Electrons. Slide 3: Our Classroom Test Model. Slide 4: Real-time Energy Data. Slide 5: The Clean Energy Future.",
  },
  {
    id: "experiment",
    title: "Experiment",
    tagline: "Test Prompts & Refine Logic",
    description: "Learn how varying temperature, persona, and constraints changes AI outputs, building critical thinking.",
    icon: "FlaskConical",
    color: "text-cyan-500",
    previewPrompt: "Compare how a medieval knight vs. an astronaut would describe an eclipse.",
    sampleOutput: "Knight: 'The celestial dragon hath devoured the sun in a shroud of ominous twilight!' Astronaut: 'The moon is transiting the solar disk, revealing the dazzling solar corona.'",
  },
  {
    id: "build",
    title: "Build",
    tagline: "Create Real-World AI Projects",
    description: "Build interactive study chatbots, quiz generators, and automated research helpers for classmates.",
    icon: "Wrench",
    color: "text-blue-500",
    previewPrompt: "Create an interactive 5-question quiz generator for CBSE Class 9 Cell Biology.",
    sampleOutput: "Interactive Quiz Engine Ready: Q1. Why is the Mitochondria termed the powerhouse of the cell? [A] Protein synthesis [B] ATP generation [C] Lipid storage [D] DNA replication.",
  },
  {
    id: "share",
    title: "Share",
    tagline: "Present Confidently to Peers & Family",
    description: "Showcase completed projects, present live demos, and inspire friends and teachers with future skills.",
    icon: "Share2",
    color: "text-violet-500",
    previewPrompt: "Prepare a 60-second elevator pitch to explain my AI homework helper project.",
    sampleOutput: "'Hi everyone! Meet StudyPilot — an AI companion I built that doesn't just give students the answers, but asks Socratic questions so we actually understand our homework.'",
  },
];

export const OUTCOMES: OutcomeItem[] = [
  {
    title: "Better understanding of AI",
    description: "A clear, foundational grasp of how AI models work, removing tech anxiety.",
  },
  {
    title: "Practical prompting skills",
    description: "The skill to communicate precisely with AI to get accurate, high-value outcomes.",
  },
  {
    title: "Creative confidence",
    description: "Empowerment to design presentations, digital art, stories, and innovative ideas.",
  },
  {
    title: "AI-powered learning habits",
    description: "Methods to study smarter, grasp difficult school topics, and revise efficiently.",
  },
  {
    title: "Real-world project experience",
    description: "Hands-on projects built from scratch to showcase in school and future portfolios.",
  },
  {
    title: "Future-ready mindset",
    description: "Adaptability and confidence to thrive in an AI-assisted world and workplace.",
  },
  {
    title: "Responsible AI awareness",
    description: "Critical understanding of data ethics, safety, fact-checking, and digital citizenship.",
  },
  {
    title: "Entrepreneurial thinking",
    description: "The curiosity and drive to spot real problems and engineer creative solutions.",
  },
];

export const BONUSES: BonusItem[] = [
  {
    title: "AI Prompt Starter Kit",
    subtitle: "For School Students",
    description: "Curated library of tested prompts for homework assistance, research, brainstorming, and writing.",
    tag: "STUDENT FAVORITE",
  },
  {
    title: "AI Tools Cheat Sheet",
    subtitle: "Top Safe & Effective Tools",
    description: "A safe, vetted roadmap of age-appropriate generative AI tools for writing, image creation, and research.",
    tag: "PRACTICAL GUIDE",
  },
  {
    title: "AI Project Ideas Library",
    subtitle: "50+ Practical Project Blueprints",
    description: "Step-by-step project ideas across Science, Arts, Community, and Coding for Classes 5–12.",
    tag: "BUILD PORTFOLIO",
  },
  {
    title: "Parent’s AI Future Guide",
    subtitle: "Guiding Your Child Responsibly",
    description: "Essential advice for parents on digital safety, screen-time balance, and future career readiness.",
    tag: "FOR PARENTS",
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "Who can join Vaibhav AI Academy?",
    answer: "Our academy is specially tailored for school students from Classes 5 to 12. Modules and projects are structured into age-appropriate learning tracks so every student feels engaged, supported, and appropriately challenged.",
  },
  {
    question: "Does my child need coding knowledge?",
    answer: "No prior coding experience is required! Our foundational and practical AI learning journey is designed from the ground up for beginners, emphasizing logic, prompt craft, creative thinking, and applied tool usage.",
  },
  {
    question: "Is this only for technically strong students?",
    answer: "No. The program is specifically crafted to make AI understandable, intuitive, and practical for students with all types of learning backgrounds — whether their interests lie in arts, humanities, sciences, or technology.",
  },
  {
    question: "What will students actually learn?",
    answer: "Students learn AI fundamentals, prompt engineering, AI-assisted academic research and learning, digital creativity (presentations, visuals, narratives), practical real-world projects, responsible AI ethics, and entrepreneurial problem-solving.",
  },
  {
    question: "How can parents stay connected?",
    answer: "Parents are invited to join our official WhatsApp Community to receive regular AI updates, parenting tips, student showcases, and notifications about upcoming workshops and cohort schedules.",
  },
];
