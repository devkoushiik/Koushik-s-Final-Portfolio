import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

import { SiRedux } from "react-icons/si";
import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.png";
import projectImage4 from "../assets/project4.jpeg";
// import projectImage5 from "../assets/project5.jpeg";
// import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Koushik",
  lastName: "Ahmed",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate frontend developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web experiences for over a year.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "E-Commerce Platform",
    description:
      "A personal portfolio website built with React and Tailwind CSS, Redux to showcase my skills, projects, and contact information.",
    image: projectImage1,
    live: {
      preview: "For Preview Click Here",
      link: "https://horizonxkoushik.netlify.app",
    },
    githubLink: "https://github.com/devkoushiik/Horizon_Ecommerce",
  },
  {
    id: 2,
    name: "Pizza Delivery App",
    description:
      "An e-commerce web application developed using React and Tailwind CSS, featuring a comprehensive product catalog, shopping cart, and checkout system.",
    image: projectImage2,
    live: {
      preview: "For Preview Click Here",
      link: "https://pizzaxkoushik.netlify.app",
    },
    githubLink: "https://github.com/devkoushiik/Pizza_shop",
  },
  {
    id: 3,
    name: "Cocktail hub",
    description:
      "A Cocktail hub application built with React and React Query for efficient product view, and details, features like smooth web traveling, with immediate caching.",
    image: projectImage3,
    live: {
      preview: "For Preview Click Here",
      link: "https://cocktail-koushik.netlify.app/",
    },
    githubLink: "https://github.com/devkoushiik/cocktail_hub",
  },
  {
    id: 4,
    name: "Cart Feature",
    description:
      "A Cart Feature application built with React and Redux tool kit for efficient product carting, and details, features like add, remove, calculation.",
    image: projectImage4,
    live: {
      preview: "For Preview Click Here",
      link: "https://rtkxkoushik.netlify.app",
    },
    githubLink: "https://github.com/devkoushiik/RTK_cart",
  },
];

export const BIO = [
  "I am a passionate Front-End Developer with expertise in React, TypeScript, and Next.js. With a strong foundation in building dynamic, responsive, and user-friendly web applications, I specialize in creating seamless user experiences that prioritize performance and accessibility. My approach combines clean, maintainable code with a keen eye for design, ensuring that each project I work on is both functional and visually appealing.",
  "Whether collaborating with teams or taking the lead on solo projects, I am committed to delivering high-quality solutions that meet client needs and exceed expectations. If you're looking for a developer who can bring your vision to life, let's connect and make it happen!",
];

export const SKILLS = [
  {
    icon: <FaHtml5 className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "HTML5",
    experience: "1+ year",
  },
  {
    icon: <FaCss3Alt className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "CSS3",
    experience: "1+ year",
  },
  {
    icon: <SiTailwindcss className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "Tailwind CSS",
    experience: "1+ year",
  },
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "6+ month",
  },
  {
    icon: <SiTypescript className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "TypeScript",
    experience: "6 month",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    experience: "3+ month",
  },

  {
    icon: <SiRedux className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Redux",
    experience: "6+ month",
  },
];

export const EXPERIENCES = [
  {
    title: "Front-end developer",
    company: "Freelance remote work. (not specific any.)",
    duration: "July 2024 - Present",
    description:
      "As the Frontend Developer, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, and TypeScript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
  },
];

export const EDUCATION = [
  {
    degree: "Diploma in Computer Technology",
    institution: "Magura Polytechnic Institute",
    duration: "January 2017 - June 2022",
    description:
      "Specialized in Human-Computer Interaction and Software Engineering. Completed an internship at Creative IT institute based in Bangladesh. Participated in various projects involving frontend development & backend development. Completed from Magura Polytechnic Institute with junior assistant engineering degree.",
  },
  {
    degree: "Bachelor of science in Computer Science and Engineering",
    institution: "Bangladesh University of Business and Technology - BUBT",
    duration: "August 2022 - July 2026",
    description:
      "Focused on Front-end development. Actively involved in coding clubs and hackathons, where I have developed several web applications using HTML, CSS, JavaScript, and React.js. Completed a fullstack project on developing an e-commerce platform. I am not graduated yet, it is on progress",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/itskoush",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  // {
  //   href: "https://x.com/",
  //   icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  // },
  // {
  //   href: "https://x.com/",
  //   icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  // },
  // {
  //   href: "https://x.com/",
  //   icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  // },
  {
    href: "https://github.com/devkoushiik",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/devkoushiik/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
