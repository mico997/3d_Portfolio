import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  giant,
  cicis,
  sunrun,
  shopify,
  restaurant,
  iwinckle,
  reactPortfolio,
  tripadvisor,
  threejs,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Sr Frontend Developer",
    company_name: "Cicis Boutique",
    icon: cicis,
    iconBg: "#383E56",
    date: "October 2019 - current",
    points: [
      "Developing and maintaining single-page applications and components with exceedingly clean, semantic markup, using JavaScript and other related tools. ",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implemented all aspects of web development process, including UI development, API integration, deployment and testing tasks using React, Node, Express, MongoDB and RESTful APIs.",
      "Utilized Adobe InDesign to create magazines and brochures for marketing purposest",
      "Utilized Photoshop to create graphic designs later converted to HTML & CSS ",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Energy Consultant",
    company_name: "Sunrun",
    icon: sunrun,
    iconBg: "#E6DEDD",
    date: "Dec 2021 - Aug 2023",
    points: [
      "Analyzed client's energy usage by collecting electricity information and made recommendations to optimize energy usage.",
      "Explained marketing and environmental benefits of purchasing renewable energy and differentiated products against traditional energy offerings",
      "Developed and updated client reports and documents to maintain customer service and internal records.",
      "onducted solar consultations with new prospects, and sold solar energy programs",
    ],
  },
  {
    title: "Customer Service Supervisor",
    company_name: "Giant",
    icon: giant,
    iconBg: "#E6DEDD",
    date: "Feb 2019 - October 2021",
    points: [
      "Establish procedures and processes to assure regulatory compliance. ",
      "Develop, implement, monitor, and manage safety programs and procedures",
      "Evaluate sales revenue and record. ",
      "Resolve customer issues and maintain customer relationships.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "John Tanner",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Devcamp Restaurant",
    description:
      "A multi-page, responsive restaurant website that utilizes HTML5, CSS3, Flexbox, CSS Grid, Animations, media queries, custom forms, responsive images, and a range of front-end development techniques.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "Media Queries",
        color: "pink-text-gradient",
      },
    ],
    image: restaurant,
    source_code_link: "https://github.com/mico997/Davcamp-Restuarant",
    project_link: "https://davcamp-restuarant.vercel.app/",
  },
  {
    name: "Iwinckle",
    description:
      "An Ecommerce Web application that enables users to search products for products, add to cart, complete a purchase and signup for user accounts plus the ability to redeem coupons and pay with multiple payment services including apple pay and afterpay.",
    tags: [
      {
        name: "Shopify",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Liquid",
        color: "pink-text-gradient",
      },
    ],
    image: iwinckle,
    source_code_link: "https://github.com/",
    project_link: "https://iwinckle.com",
  },
  {
    name: "React Portfolio",
    description:
      "A React portfolio built with Bootstrap, HTML, SCSS, ReactJS, and JavaScript. This portfolio includes a blog with full CRUD capabilities and a portfolio manager with the ability to upload projects from the UI if authorized (Needs to be signed in. I am the only one with that access). The data from the projects are saved on a server, requiring API calls with Axios Library to get and render data. Utilization of REST API modals and authentication and authorization. ",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "RestAPI",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: reactPortfolio,
    source_code_link: "https://github.com/mico997/mike-vidal-react-portfolio",
    project_link: "https://mike-vidal-react-portfolio.vercel.app/",
  },
  {
    name: "Trip Advisor",
    description:
      "A single-page React application that utilizes API, NodeJS, HTML, CSS, and JavaScript to communicate with a rapid API and render information about hotels, restaurants, and attractions in your area. This application requires your browser to have access to your location to properly function. ",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: tripadvisor,
    source_code_link: "https://github.com/mico997/trip-advisor",
    project_link: "https://trip-advisor-livid.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
