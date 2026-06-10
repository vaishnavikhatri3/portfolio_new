// Portfolio Data for Vaishnavi Khatri

export const personalInfo = {
  name: "Vaishnavi Khatri",
  title: "Full Stack Developer",
  tagline: "MERN Stack Developer | AI/ML Enthusiast | Open Source Contributor",
  email: "vaishnavi3khatri@gmail.com",
  phone: "+91 9425897273",
  linkedin: "https://linkedin.com/in/vaishnavikhatri",
  github: "https://github.com/vaishnavikhatri3",
  instagram: "https://instagram.com/vaishnavikhatri",
  medium: "https://medium.com/@vaishnavikhatri",
  resume: "https://drive.google.com/file/d/1N0Pk9bkA1HGQHiAPPrF0YxTYb16v2wti/view",
  downloadResume: "https://drive.google.com/uc?export=download&id=1N0Pk9bkA1HGQHiAPPrF0YxTYb16v2wti",
  gssoc: "https://gssoc.girlscript.org/profile/4b78c7fa-6d36-451a-836d-41dcbf0545bb",
  holopin: "https://www.holopin.io/@vaishnavikhatri3",
  location: "Indore, Madhya Pradesh, India",
};

export const aboutMe = {
  intro: "Full-Stack Developer and AI/ML enthusiast skilled in MERN stack development and data-driven solutions. Passionate about building scalable web applications, intelligent systems, and impactful digital products.",
  education: [
    {
      degree: "Integrated M.Tech, Information Technology",
      institution: "International Institute of Professional Studies, DAVV, Indore",
      year: "Sep 2023 – Apr 2028",
      details: "CGPA: 9.48",
    },
    {
      degree: "Higher Secondary Education",
      institution: "First Step School, Chhindwara",
      year: "Mar 2022 – Feb 2023",
      details: "Class 12: 89.66%",
    },
    {
      degree: "Secondary Education",
      institution: "First Step School, Chhindwara",
      year: "Mar 2020 – Feb 2021",
      details: "Class 10: 96.33%",
    },
  ],
  interests: [
    "MERN Stack Development",
    "AI/ML Solutions",
    "Open Source Contributions",
    "UI/UX Design",
    "Building Scalable Applications",
  ],
  cards: [
    {
      title: "Leadership",
      description: "Android Lead at GDG IIPS, Design Lead, Technical Captain",
      icon: "users",
    },
    {
      title: "Open Source",
      description: "Hacktoberfest contributor (2x) with multiple PRs merged",
      icon: "code-2",
    },
    {
      title: "Development",
      description: "Building full-stack apps with MERN, FastAPI, and more",
      icon: "monitor",
    },
    {
      title: "Design",
      description: "Figma expert, UI/UX design, prototyping, wireframing",
      icon: "palette",
    },
  ],
};

export const skills = {
  categories: [
    {
      name: "Frontend",
      icon: "code",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 88 },
        { name: "React", level: 85 },
        { name: "Next.js", level: 75 },
        { name: "Tailwind CSS", level: 80 },
      ],
    },
    {
      name: "Backend",
      icon: "server",
      skills: [
        { name: "Node.js", level: 82 },
        { name: "Express.js", level: 80 },
        { name: "FastAPI", level: 75 },
      ],
    },
    {
      name: "Database",
      icon: "database",
      skills: [
        { name: "MongoDB", level: 82 },
        { name: "SQL", level: 70 },
        { name: "Supabase", level: 65 },
      ],
    },
    {
      name: "Programming",
      icon: "code-2",
      skills: [
        { name: "C", level: 75 },
        { name: "C++", level: 72 },
        { name: "Python", level: 78 },
        { name: "Java", level: 70 },
      ],
    },
    {
      name: "AI/ML & Data",
      icon: "brain",
      skills: [
        { name: "Machine Learning", level: 70 },
        { name: "NumPy", level: 75 },
        { name: "Pandas", level: 68 },
        { name: "Data Analysis", level: 72 },
      ],
    },
    {
      name: "Tools & Design",
      icon: "wrench",
      skills: [
        { name: "Git", level: 88 },
        { name: "GitHub", level: 88 },
        { name: "Figma", level: 85 },
        { name: "Power BI", level: 70 },
        { name: "Tableau", level: 68 },
        { name: "Canva", level: 80 },
      ],
    },
  ],
};

export const experience = [
  {
    role: "Android Lead",
    organization: "Google Developer Group (GDG) - IIPS DAVV",
    duration: "Oct 2025 – Present",
    description: "Leading Android development initiatives and mentoring students in mobile app development.",
    type: "leadership",
  },
  {
    role: "Design Lead",
    organization: "Google Developer Group (GDG) - IIPS DAVV",
    duration: "Oct 2024 – Oct 2025",
    description: "Managed event branding, promotional designs, and UI/UX assets for developer community events.",
    type: "leadership",
  },
  {
    role: "Open Source Contributor",
    organization: "GirlScript Summer of Code (GSSOC)",
    duration: "2026 – Present",
    description: "Currently contributing to open-source projects under GSSoC and collaborating with developers across the community.",
    type: "opensource",
  },
  {
    role: "Open Source Contributor",
    organization: "NSOC (National Summer of Code)",
    duration: "2026 – Present",
    description: "Active contributor in NSOC working on real-world development projects and open-source initiatives.",
    type: "opensource",
  },
  {
    role: "Hacktoberfest Contributor (2x)",
    organization: "DigitalOcean",
    duration: "2024 – 2025",
    description: "Contributed to open-source repositories across multiple projects and successfully completed Hacktoberfest in two editions.",
    type: "opensource",
  },
  {
    role: "Government Intern",
    organization: "AICTSL - Indore Municipal Corporation",
    duration: "Dec 2025 – Jan 2026",
    description: "Analyzed Indore's public transport system, studying BRTS operations and urban mobility challenges.",
    type: "work",
  },
];

export const projects = [
  {
    title: "ParkSarthi – Smart Parking System",
    description: "Smart parking platform predicting availability, reducing wait time, with EV charging, FASTag, challan management, and gamification.",
    technologies: ["React.js", "Node.js", "MongoDB", "FastAPI", "ML"],
    github: "https://github.com/vaishnavikhatri3",
    live: "#",
  },
  {
    title: "KanoonMitra – AI Legal Assistant",
    description: "AI-powered assistant providing immediate legal guidance using BNS and IPC sections to help users understand legal actions and rights.",
    technologies: ["React.js", "FastAPI", "MongoDB", "OpenAI"],
    github: "https://github.com/vaishnavikhatri3",
    live: "#",
  },
  {
    title: "Hallucination Citation Verification",
    description: "System to detect unreliable AI responses by validating outputs using trusted citations and sources.",
    technologies: ["Python", "NLP", "FastAPI", "React.js"],
    github: "https://github.com/vaishnavikhatri3",
    live: "#",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce application with payment integration and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    live: "#",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates and team features.",
    technologies: ["Next.js", "Supabase", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
  {
    title: "Weather Dashboard",
    description: "Beautiful weather app with location-based forecasts and interactive maps.",
    technologies: ["React", "OpenWeather API", "Chart.js"],
    github: "#",
    live: "#",
  },
];

export const achievements = {
  stats: [
    { label: "Projects Built", value: 15, suffix: "+" },
    { label: "GitHub Contributions", value: 500, suffix: "+" },
    { label: "Hackathons", value: 6, suffix: "" },
    { label: "CGPA", value: 9.48, suffix: "" },
  ],
  highlights: [
    {
      title: "DevCraft Hackathon - 2nd Runner Up",
      organization: "Powered by Mappls MapMyIndia",
      description: "Built an innovative solution that impressed judges with technical excellence",
    },
    {
      title: "Flowathon 2025 - 4th Place",
      organization: "FFDG Indore",
      description: "EV Charging App UI using FlutterFlow",
    },
    {
      title: "Academic Topper",
      organization: "IIPS DAVV",
      description: "Maintaining CGPA of 9.48 in Integrated M.Tech program",
    },
    {
      title: "Technical Captain",
      organization: "First Step School",
      description: "Led technical initiatives and mentored peers in programming",
    },
  ],
  opensource: [
    {
      title: "Hacktoberfest Contributor",
      badge: "2x Contributor",
      description: "Successfully completed Hacktoberfest in 2024 and 2025",
    },
    {
      title: "GSSoC Contributor",
      badge: "2026",
      description: "Contributing to open-source projects under GirlScript Summer of Code",
    },
    {
      title: "NSOC Contributor",
      badge: "2026",
      description: "Active contributor in National Summer of Code",
    },
  ],
};

export const certifications = [
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    status: "completed",
  },
  {
    title: "Meta Frontend Developer",
    issuer: "Meta",
    date: "2024",
    status: "completed",
  },
  {
    title: "Google UX Design",
    issuer: "Google",
    date: "2023",
    status: "completed",
  },
  {
    title: "MongoDB Developer",
    issuer: "MongoDB University",
    date: "2023",
    status: "completed",
  },
  {
    title: "Machine Learning Certificate",
    issuer: "Coming Soon",
    date: "2025",
    status: "pending",
  },
  {
    title: "React Developer Certification",
    issuer: "Coming Soon",
    date: "2025",
    status: "pending",
  },
];

export const testimonials = [
  {
    name: "Dr. Priya Sharma",
    role: "Professor, IIPS DAVV",
    content: "Vaishnavi is an exceptional student with outstanding technical skills and leadership qualities. Her projects demonstrate innovation and practical problem-solving abilities.",
    image: "/avatar-placeholder.jpg",
  },
  {
    name: "Rahul Verma",
    role: "GDG Chapter Lead",
    content: "Working with Vaishnavi on GDG events has been a pleasure. Her design leadership and technical expertise contributed significantly to our community success.",
    image: "/avatar-placeholder.jpg",
  },
  {
    name: "Priya Patel",
    role: "Hackathon Teammate",
    content: "Vaishnavi's ability to handle complex problems under pressure is remarkable. She brings creative solutions and excellent collaboration skills to every project.",
    image: "/avatar-placeholder.jpg",
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const hackathons = [
  "Flowathon (FFDG Indore)",
  "DevCraft Hackathon (2x, IIT Indore)",
  "Build Fest '25 (Hack2Skill, IIT Bombay)",
  "Code Slayers Hackathon (National Level, NIT Delhi)",
  "Indore Tech Hackathon (IMC Indore)",
];

export const githubStats = {
  contributions: 500,
  repos: 15,
  stars: 50,
  followers: 100,
  languages: ["JavaScript", "Python", "TypeScript", "HTML/CSS"],
};