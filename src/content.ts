export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  logo: string;
  website: string;
  brandBackground: string;
  technologies: string[];
  whiteLogo?: boolean;
  current?: boolean;
}

export interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  logo: string;
  href?: string;
}

// Add new entries at the top of either list to keep the site chronological.
export const experiences: ExperienceItem[] = [
  {
    company: "Nokia",
    role: "Software Engineer Intern",
    period: "Sept 2026 – Dec 2026",
    logo: "/logos/nokia.svg",
    website: "https://www.nokia.com/",
    brandBackground: "linear-gradient(135deg, #03175f 0%, #005aff 58%, #6da8ff 100%)",
    technologies: ["Tcl", "Python", "Bash", "PyTest", "TCP/IP"],
    whiteLogo: true,
    current: true,
  },
  {
    company: "Ciena Corporation",
    role: "ASIC Design and Verification Hardware Intern",
    period: "Jan 2025 – Aug 2025",
    logo: "/logos/ciena.png",
    website: "https://www.ciena.com/",
    brandBackground: "linear-gradient(135deg, #75050b 0%, #d71920 58%, #ff625d 100%)",
    technologies: ["C++", "SystemVerilog", "UVM", "Python", "FEC", "SERDES"],
    whiteLogo: true,
  },
  {
    company: "Ford Motor Company",
    role: "Vehicle Software Engineer Intern",
    period: "Sept 2024 – Dec 2024",
    logo: "/logos/ford.svg",
    website: "https://www.ford.com/",
    brandBackground: "linear-gradient(135deg, #020611 0%, #0b2d5b 58%, #1269b0 100%)",
    technologies: ["Python", "Jenkins", "CAN FD", "ECU Testing"],
  },
  {
    company: "Ford Motor Company",
    role: "Vehicle Software Engineer Intern",
    period: "Jan 2024 – Apr 2024",
    logo: "/logos/ford.svg",
    website: "https://www.ford.com/",
    brandBackground: "linear-gradient(135deg, #020611 0%, #0b2d5b 58%, #1269b0 100%)",
    technologies: ["React", "Node.js", "Jira API", "Embedded Systems"],
  },
  {
    company: "MASV Inc.",
    role: "Software Engineer Intern",
    period: "May 2023 – Aug 2023",
    logo: "/logos/masv.svg",
    website: "https://massive.io/",
    brandBackground: "linear-gradient(135deg, #040b10 0%, #0a4258 58%, #149cb5 100%)",
    technologies: ["Vue.js", "Node.js", "PostgreSQL", "Docker", "AWS EC2"],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "HeartAI",
    description: "AI-powered cardiac CT analysis and interactive 3D heart reconstruction.",
    tech: ["Python", "PyTorch", "MONAI", "3D Slicer"],
    logo: "/logos/heartai.svg",
    href: "https://github.com/ahmadsobohhh/HeartAI",
  },
  {
    title: "Kalim",
    description: "Dialectal Arabic speaking app with an AI conversation partner.",
    tech: ["React Native", "Python", "OpenAI"],
    logo: "/logos/kalim.svg",
  },
  {
    title: "PlayVer",
    description: "Sports meetup platform for local teens to organize pickup games.",
    tech: ["Next.js", "Supabase"],
    logo: "/logos/playver.svg",
    href: "https://github.com/Playver/playver",
  },
  {
    title: "Encrypted",
    description: "End-to-end encrypted web chatrooms with signed media exchange.",
    tech: ["Node.js", "Express"],
    logo: "/logos/encrypted.svg",
    href: "https://github.com/ahmadsobohhh/Encrypted",
  },
  {
    title: "LettuceEat",
    description: "Group meal planning — first place at uOttaHack.",
    tech: ["React", "Node.js", "Gemini API"],
    logo: "/logos/lettuceeat.svg",
    href: "https://lettuceeat-six.vercel.app/",
  },
  {
    title: "CryptoPulse",
    description: "Serverless crypto price alerts with Lambda, DynamoDB, and SNS.",
    tech: ["AWS", "TypeScript"],
    logo: "/logos/cryptopulse.svg",
    href: "https://github.com/ahmadsobohhh/CryptoPriceAlerting",
  },
];
