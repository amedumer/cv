import ConsultlyLogo from "../images/logos/consultly.svg";
import AmbitLogo from "../images/logos/ambit.png";
import BarepapersLogo from "../images/logos/barepapers.svg";
import BimLogo from "../images/logos/bim.png";
import CDGOLogo from "../images/logos/cdgo.png";
import ClevertechLogo from "../images/logos/clevertech.png";
import EvercastLogo from "../images/logos/evercast.svg";
import Howdy from "../images/logos/howdy.png";
import JarockiMeLogo from "../images/logos/jarocki.svg";
import JojoMobileLogo from "../images/logos/jojomobile.png";
import MonitoLogo from "../images/logos/monito.svg";
import MobileVikingsLogo from "../images/logos/mv.png";
import NSNLogo from "../images/logos/nsn.svg";
import ParabolLogo from "../images/logos/parabol.svg";
import TastyCloudLogo from "../images/logos/tastycloud.png";
import YearProgressLogo from "../images/logos/yearprogress.svg";
import MetaLogo from "../images/logos/meta.svg";
import Minimal from "../images/logos/minimal.svg";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { XIcon } from "@/components/icons/XIcon";
import { CVIcon } from "@/components/icons/CVIcon";

export const RESUME_DATA = {
  name: "Omer Kayabasi",
  initials: "OK",
  location: "London, UK",
  locationLink: "https://www.google.com/maps/place/London",
  about:
    "Full Stack Engineer focused on building products with extra attention to details",
  summary: "I press keys on the keyboard.",
  avatarUrl: "https://avatars.githubusercontent.com/u/69629296?v=4",
  personalWebsiteUrl: "https://ahmetomer.me",
  contact: {
    email: "omer.kayabasi23@imperial.ac.uk",
    tel: "+0",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/amedumer",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ahmetomerkayabasi/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/amedumer_",
        icon: XIcon,
      },
      {
        name: "CV",
        url: "https://drive.google.com/file/d/1gaH_Q5T9auN-eGx9pZWMecbMIK_7UUR4/view",
        icon: CVIcon,
      },
    ],
  },
  education: [
    {
      school: "Imperial College London",
      degree: "Master's Degree in Software Engineering",
      start: "2023",
      end: "2024",
    },
    {
      school: "Sabanci University",
      degree: "Bachelor's Degree in Computer Engineering",
      start: "2019",
      end: "2023",
    },
    {
      school: "Sabanci University",
      degree: "Associate's Degree in Decision and Behavioral Sciences",
      start: "2019",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Meta",
      link: "https://about.meta.com/",
      badges: ["London"],
      title: "Business Engineer",
      logo: MetaLogo,
      start: "2024",
      end: "Now",
      description:
        "Design, plan and implement product integrations for Meta apps like Facebook, Instagram, and others with external clients",
    },
    {
      company: "Millicent Labs",
      link: "https://www.millicent.io",
      badges: ["London"],
      title: "Full Stack Developer",
      logo: ClevertechLogo,
      start: "2022",
      end: "2024",
      description:
        "Led blockchain development, implemented cryptocurrency payment applications, and contributed to various software projects. Technologies: Java, Python, React, Blockchain",
    },
    {
      company: "Sabanci University",
      link: "https://sabanciuniv.edu",
      badges: ["Turkey"],
      title: "Learning & Teaching Assistant",
      logo: ClevertechLogo,
      start: "2020",
      end: "2022",
      description:
        "Assisted in teaching computer science courses, engaged in research projects including a cryptographic suite for IoT devices. Technologies: C++, Python, Cryptography",
    },
  ],
  skills: [
    "Javascript",
    "Typescript",
    "Python",
    "Dart",
    "Go",
    "C++",
    "C#",
    "Rust",
    "SQL",
    "Solidity",
    "HTML",
    "Django",
    "Node.js",
    "Mux",
    "FastAPI",
    "React.js",
    "Next.js",
    "SvelteKit",
    "Bootstrap",
    "Tailwind CSS",
    "MUI",
    "Flutter",
    "Swift",
    "Cosmos SDK",
    "Firebase",
    "AWS",
    "Express",
    "MongoDB",
    "MySQL",
    "Selenium",
    "Nginx",
  ],

  projects: [
    {
      title: "Muallim",
      techStack: [
        "TypeScript",
        "Next.js",
        "Firebase",
        "Tailwind CSS",
        "Vercel",
      ],
      description:
        "AI lecture assistant for teachers, providing real-time feedback and insights on student engagement and performance.",
      logo: ClevertechLogo,
      link: {
        label: "muallim.tech",
        href: "https://muallim.tech/",
      },
    },
    {
      title: "UKVisaTimeline",
      techStack: [
        "SvelteKit",
        "TypeScript",
        "Pico.css",
        "Pocketbase",
        "Vercel",
      ],
      description:
        "A platform simplifying visa application processes through timeline tracking and insights, with a responsive and user-friendly interface.",
      logo: ClevertechLogo,
      link: {
        label: "ukvisatimeline.com",
        href: "https://ukvisatimeline.com/",
      },
    },
    {
      title: "Nakit",
      techStack: [
        "Cosmos SDK",
        "IBC",
        "Flutter",
        "TEE",
        "SE",
        "QR codes",
        "NFC",
        "Bluetooth",
      ],
      description:
        "Decentralized blockchain for offline transactions with Zero-Knowledge Proofs and a Flutter-based mobile app for transaction verification and offline authorization.",
      logo: ClevertechLogo,
      link: {
        label: "nakit.dev",
        href: "",
      },
    },
    {
      title: "Cekmece",
      techStack: [
        "React.js",
        "Next.js",
        "Node.js",
        "Flutter",
        "mySQL",
        "Scrum",
      ],
      description:
        "E-Commerce solution developed with a 5-member team, using a range of technologies and Scrum methodologies for iterative development.",
      logo: ClevertechLogo,
      link: {
        label: "cekmece.com",
        href: "",
      },
    },
    {
      title: "suEmpty",
      techStack: ["Flutter"],
      description:
        "Mobile application for finding empty classrooms at Sabanci University, featuring customizable filters for day, time, and faculty.",
      logo: ClevertechLogo,
      link: {
        label: "suempty.com",
        href: "",
      },
    },
  ],
} as const;
