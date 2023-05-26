import {
  Facebook,
  GitHub,
  Language,
  LinkedIn,
  YouTube,
} from "@material-ui/icons";

const LeetCode = (props) => {
  return (
    <svg
      width={24}
      height={24}
      style={{ marginRight: "25px" }}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{"LeetCode icon"}</title>
      <path d="m16.102 17.93-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zm4.709-4.92H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
    </svg>
  );
};

const resumeData = {
  name: "Tahmid Anjum Bin Haroon",
  title: "Software Engineer",
  Birthday: "October 15, 1999",
  email: "tahmidanjum320@gmail.com",
  address: "15, Hazibug Lane, Tootpara, Khulna",
  aboutMe:
    "I am Tahmid Anjum Bin Haroon. I am currently studying Computer Science & Engineering in Bangladesh University of Engineering & Technology. I am currently pursuing a job as CS programmer and waiting to land my first job. I am a fast learner and very much versatile. I have experience in different aspects of work in the CS industry like backend & frontend developing, artificial intelligence, machine learning etc.I am a very determined, hardworking, passionate and ambitious person. I am quite adaptive to new working environments and I am a team player, just what you expect from a person you want to hire for your company.",
  socials: {
    Facebook: {
      Link: "https://www.facebook.com/tahmid.anjum.31/",
      title: "Tahmid Anjum",
      icon: <Facebook />,
    },
    Github: {
      Link: "https://github.com/TahmidAnjum",
      title: "My Github",
      icon: <GitHub />,
    },
    LinkedIn: {
      Link: "https://www.linkedin.com/in/tahmid-anjum-b-251431106/",
      title: "My LinkedIn",
      icon: <LinkedIn />,
    },
    Leetcode: {
      Link: "https://leetcode.com/Ominous014/",
      title: "Ominous014",
      icon: <LeetCode />,
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
      proficiency: "8",
    },
    {
      imgsrc:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/go-colored.svg",
      label: "Go",
      proficiency: "8",
    },
    {
      imgsrc:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/babel-colored-dark.svg",
      label: "Babel",
      proficiency: "8",
    },
    {
      imgsrc:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/webpack-colored.svg",
      label: "Webpack",
      proficiency: "8",
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
      proficiency: "8",
    },
    {
      imgsrc:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/gatsby-colored.svg",
      label: "Gatsby",
      proficiency: "8",
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
      proficiency: "8",
    },
    {
      imgsrc:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg",
      label: "CSS3",
      proficiency: "8",
    },
    {
      imgsrc:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg",
      label: "NodeJS",
      proficiency: "8",
    },
    {
      imgsrc:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored-dark.svg",
      label: "Express",
      proficiency: "8",
    },
    {
      imgsrc:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/oracle-colored.svg",
      label: "Oracle",
      proficiency: "8",
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
      proficiency: "8",
    },
    {
      imgsrc:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg",
      label: "PostgreSQL",
      proficiency: "8",
    },
    {
      imgsrc:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/heroku-colored.svg",
      label: "Heroku",
      proficiency: "8",
    },
    {
      imgsrc:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/django-colored-dark.svg",
      label: "Django",
      proficiency: "8",
    },
    {
      imgsrc:
        "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg",
      label: "Figma",
      proficiency: "8",
    },
  ],
  projects: [
    {
      tag: "Web",
      image: `require("../../assets/images/ProfilePic.jpg")`,
      title: "Fantasy Premier League",
      description:
        "Full stack web project which is a recreation of the famous fantasy genre game Fantasy Premier League",
      Languages: ["Javascript"],
      Frameworks: ["React", "Node", "Express", "MongoDB", "mongoose"],
      Features: ["CRUD operations", "REST API", "JWT Authentication"],
      links: [
        { link: "https://www.google.com/", icon: <YouTube /> },
        { link: "https://www.google.com/", icon: <GitHub /> },
        { link: "https://www.google.com/", icon: <Language /> },
      ],
    },
    {
      tag: "React",
      image: "",
      title: "p2",
      description: "asd",
      Languages: ["Java"],
      Frameworks: ["Node"],
      Features: ["CRUD operations", "REST API", "JWT Authentication"],
      links: [
        { link: "https://www.google.com/", icon: <YouTube /> },
        { link: "https://www.google.com/", icon: <GitHub /> },
        { link: "https://www.google.com/", icon: <Language /> },
      ],
    },
    {
      tag: "Python",
      image:
        "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/09/c3/99.jpg",
      title: "p3",
      description: "asd",
      Languages: ["Python"],
      Frameworks: ["React"],
      Features: ["CRUD operations", "REST API", "JWT Authentication"],
      links: [
        { link: "https://www.google.com/", icon: <YouTube /> },
        { link: "https://www.google.com/", icon: <GitHub /> },
        { link: "https://www.google.com/", icon: <Language /> },
      ],
    },
    {
      tag: "A.I.",
      image: "../../assets/images/cappadocia-wallpaper-whatspaper-7.jpg",
      // "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/09/c3/99.jpg",
      title: "Line of Action",
      description: "asd",
      Languages: ["C++", "Python", "Bash"],
      Frameworks: ["Pygame"],
      Features: ["Minimax algo."],
      links: [
        { link: "https://www.google.com/", icon: <YouTube /> },
        { link: "https://www.google.com/", icon: <GitHub /> },
        { link: "https://www.google.com/", icon: <Language /> },
      ],
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
  ],
};

export default resumeData;
