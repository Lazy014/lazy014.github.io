import {
  Facebook,
  GitHub,
  Language,
  LinkedIn,
  YouTube,
} from "@material-ui/icons";

const Discord = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    style={{ marginRight: "15px" }}
    fill="white"
    className="bi bi-discord"
    {...props}
  >
    <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
  </svg>
);

const Leetcode = (props) => (
  <svg
    width={24}
    height={24}
    fill="white"
    style={{ marginRight: "25px" }}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>{"LeetCode icon"}</title>
    <path d="m16.102 17.93-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zm4.709-4.92H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
  </svg>
);
const resumeData = {
  name: "Tahmid Anjum Bin Haroon",
  title: "Software Engineer",
  Birthday: "October 15, 1999",
  email: "tahmidanjum320@gmail.com",
  address: "15, Hazibug Lane, Tootpara, Khulna",
  phone_no: "+880-1758838444",
  aboutMe:
    "I am Tahmid Anjum Bin Haroon. I am currently working as a Software developer at Samsung R&D Institute, Bangladesh. I completed my undergrad in Computer Science & Engineering in Bangladesh University of Engineering & Technology. I am a fast learner and very much versatile as a programmer. I have experience in different aspects of work in the CS industry like backend & frontend development, artificial intelligence, machine learning etc. During my time at Samsung, I learned a lot of things first hand, like the design principles, best practices, project managemnet and delivery, time management at work etc, which are crucial for any developer. I am a very determined, hardworking, passionate and ambitious person. I am quite adaptive to new working environments and I am a team player, just what you expect from a person you want to hire for your company.",
  socials: {
    Facebook: {
      Link: "https://www.facebook.com/tahmid.anjum.31/",
      title: "Tahmid Anjum",
      icon: <Facebook />,
    },
    Github: {
      Link: "https://github.com/TahmidAnjum",
      title: "TahmidAnjum",
      icon: <GitHub />,
    },
    LinkedIn: {
      Link: "https://www.linkedin.com/in/tahmid-anjum-b-251431106/",
      title: "Tahmid Anjum Bin Haroon",
      icon: <LinkedIn />,
    },
    Discord: {
      Link: "https://discord.com/users/Sleeping#2931",
      title: "Sleeping#2931",
      icon: <Discord />,
    },
    LeetCode: {
      Link: "https://leetcode.com/Ominous014/",
      title: "Ominous014",
      icon: <Leetcode />,
    },
  },

  tags: ["All", "Web", "A.I.", "M.L.", "Android", "Misc."],
  langNframe: [
    "C++",
    "Java",
    "Python",
    "Javascript",
    "Node",
    "React",
    "Material-UI",
    "Bootstrap",
    "Express",
    "PostgreSQL",
  ],

  education: [],

  skills: [
    {
      imgsrc:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/c-colored.svg",
      label: "C",
      proficiency: "7",
    },
    {
      imgsrc:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/cplusplus-colored.svg",
      label: "C++",
      proficiency: "9",
    },
    {
      imgsrc:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg",
      label: "Java",
      proficiency: "8",
    },
    {
      imgsrc:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg",
      label: "Python",
      proficiency: "8",
    },
    {
      imgsrc:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg",
      label: "TypeScript",
      proficiency: "8",
    },
    {
      imgsrc:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg",
      label: "JavaScript",
      proficiency: "8",
    },
    {
      imgsrc:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/csharp-colored.svg",
      label: "C#",
      proficiency: "7",
    },
    {
      imgsrc:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/go-colored.svg",
      label: "Go",
      proficiency: "7",
    },
    {
      imgsrc:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/babel-colored-dark.svg",
      label: "Babel",
      proficiency: "7",
    },
    {
      imgsrc:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/webpack-colored.svg",
      label: "Webpack",
      proficiency: "7",
    },
    {
      imgsrc:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/materialui-colored.svg",
      label: "Material UI",
      proficiency: "8",
    },
    {
      imgsrc:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg",
      label: "Bootstrap",
      proficiency: "8",
    },
    {
      imgsrc:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg",
      label: "TailwindCSS",
      proficiency: "7",
    },
    {
      imgsrc:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/gatsby-colored.svg",
      label: "Gatsby",
      proficiency: "7",
    },
    {
      imgsrc:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored-dark.svg",
      label: "NextJs",
      proficiency: "8",
    },
    {
      imgsrc:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg",
      label: "React",
      proficiency: "8",
    },
    {
      imgsrc:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg",
      label: "HTML5",
      proficiency: "9",
    },
    {
      imgsrc:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg",
      label: "CSS3",
      proficiency: "9",
    },
    {
      imgsrc:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg",
      label: "NodeJS",
      proficiency: "9",
    },
    {
      imgsrc:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored-dark.svg",
      label: "Express",
      proficiency: "9",
    },
    {
      imgsrc:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/oracle-colored.svg",
      label: "Oracle",
      proficiency: "9",
    },
    {
      imgsrc:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg",
      label: "MongoDB",
      proficiency: "8",
    },
    {
      imgsrc:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg",
      label: "MySQL",
      proficiency: "7",
    },
    {
      imgsrc:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg",
      label: "PostgreSQL",
      proficiency: "9",
    },
    {
      imgsrc:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/heroku-colored.svg",
      label: "Heroku",
      proficiency: "7",
    },
    {
      imgsrc:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/django-colored-dark.svg",
      label: "Django",
      proficiency: "7",
    },
    {
      imgsrc:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg",
      label: "Figma",
      proficiency: "7",
    },
  ],
  projects: [
    {
      tag: "Web",
      image: '../../assets/images/LineOfAction.png',
      title: "Learning Management System",
      description:
        "Built a full stack web environment maintaining REST API principles with CRUD operations and JWT authentication to create an advanced learning platform.",
      Languages: ["Javascript"],
      Frameworks: ["React", "Node", "Express", "PostgreSQL", "Sequelize"],
      Features: ["CRUD operations", "REST API", "JWT Authentication"],
      link: "https://github.com/TahmidAnjum/Software_Project"
    },
    {
      tag: "Web",
      image: '../../assets/images/LineOfAction.png',
      title: "Fantasy Premier League",
      description:
        "Full stack web project which is a recreation of the famous fantasy genre game Fantasy Premier League.",
      Languages: ["Javascript"],
      Frameworks: ["React", "Node", "Express", "MongoDB", "mongoose"],
      Features: ["CRUD operations", "REST API", "JWT Authentication"],
      link: "https://github.com/TahmidAnjum/Fantasy-Premier-League",
    },
    {
      tag: "M.L.",
      image: "../../assets/images/LineOfAction.png",
      title: "Anime Character Recognition",
      description:
        "Built a Machine Learning model which can differentiate and recognize individual anime characters. Implemented using Resnet and Few Shot Algorithm.",
      Languages: ["Python"],
      Frameworks: ["Pytorch", "Resnet", "Few Shot Learning"],
      Features: [],
      link: "https://github.com/TahmidAnjum/Anime-Character-Recognition",
    },
    {
      tag: "Misc.",
      image:
        "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/09/c3/99.jpg",
      title: "Wi-Fi Password Cracking Attack",
      description:
        "Cracking Wi-Fi password using Deauthentication Attack and Dictionary Attack.",
      Languages: ["C++", "Python"],
      Frameworks: ["Libtins"],
      Features: ["Deauthentication Attack", "Dictionary Attack"],
      links: [
        { link: "https://www.google.com/", icon: <YouTube /> },
        { link: "https://www.google.com/", icon: <GitHub /> },
        { link: "https://www.google.com/", icon: <Language /> },
      ],
    },
    {
      tag: "A.I.",
      image: "../../assets/images/LineOfAction.png",
      // "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/09/c3/99.jpg",
      title: "Line of Action",
      description:
        "AI backed board game. UI implementation using pygame, AI logic implementation(Min-Max algo) in C++",
      Languages: ["C++", "Python", "Bash"],
      Frameworks: ["Pygame"],
      Features: ["Min-Max algo."],
      link : "https://github.com/TahmidAnjum/Line-of-Action",
    },
    {
      tag: "Android",
      image: "../../assets/images/cappadocia-wallpaper-whatspaper-7.jpg",
      // "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/09/c3/99.jpg",
      title: "Weather App",
      description:
        "Simple weather app using Android, Weather API & Google loactions",
      Languages: ["Java"],
      Frameworks: ["Weather API"],
      Features: [],
      link: "https://github.com/TahmidAnjum/Weather-App",
    },
    {
      tag: "Misc.",
      image: "../../assets/images/cappadocia-wallpaper-whatspaper-7.jpg",
      // "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/09/c3/99.jpg",
      title: "Rapid Roll",
      description:
        "A recreation of the game Rapid Roll. Microprocessor project built with ATmega32 microchip, hex inverters, decoders and IR sensors",
      Languages: ["C"],
      Frameworks: ["AVR"],
      Features: [],
      link: "https://github.com/TahmidAnjum/Weather-App",
    },
  ],
};

export default resumeData;
