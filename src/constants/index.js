import {
  mobile,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  carrent,
  jobit,
  tripguide,
  desktop,
  threejs,
  netlify
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
 
];

const projects = [
  {
    name: "Yotube clone",
    description:
      "Web-based needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
     
    ],
    image: carrent,
    source_code_link: "https://github.com/Makar789654/youtube-clon",
    source_site_link: "https://roaring-zuccutto-520680.netlify.app/",
  },
  {
    name: "E-commerce site",
    description:
      "Web applicati.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
   
    ],
    image: jobit,
    source_code_link: "https://github.com/Makar789654/shop-on-react",
    source_site_link: "https://chimerical-puppy-0e222e.netlify.app/",
  },
  {
    name: "First site",
    description:
      "Build with HTML, CSS, JS ",
    tags: [
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Makar789654/makar7879654.ex1.github.io",
    source_site_link: "https://makar789654.github.io/makar7879654.ex1.github.io/",
  },
  {
    name: "Restaurant",
    description:
      "Restaurant",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
    ],
    image: desktop,
    source_code_link: "https://github.com/Makar789654/Restaurant",
    source_site_link: "https://tourmaline-liger-022054.netlify.app/",
  },
];

export { services, technologies, projects };
