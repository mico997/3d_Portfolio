import {
  mobile,
  backend,
  web,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  sql,
  covidDashboard,
  docker,
  sqlicon,
  giant,
  cicis,
  rxo,
  upwork,
  stream9,
  excel,
  tableau,
  vba,
  powerbi,
  grafton,
  restaurant,
  iwinckle,
  reactPortfolio,
  tripadvisor,
  threejs,
  ux,
  analyst,
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
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Analyst",
    icon: analyst,
  },
  {
    title: "Front-End Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },

  {
    title: "UX Designer",
    icon: ux,
  },

  {
    title: "SQL Developer",
    icon: sqlicon,
  },
];

const technologies = [
  {
    name: "MYSQL",
    icon: sqlicon,
  },
  {
    name: "Excel",
    icon: excel,
  },
  {
    name: "Power-BI",
    icon: powerbi,
  },

  {
    name: "Tableau",
    icon: tableau,
  },
  {
    name: "VBA",
    icon: vba,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Freelancer",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#383E56",
    date: "Oct 2024 - Current",
    points: [
      "I have participated in several contracts since my last contract with RXO.",
      "The most prominent is a contract with a company called Tachet Palm Juice. ",
      "I am a lead developer in the website redesign project which is scheduled to end its last sprint on 01/30.",
      " I also had a minor contract with Social Buzz as a marketing data analyst to assist in determining their most popular category. ",
      " Most of this work was done with Excel with data extracted using MYSQL",
      "Utilized KPI Reporting techniques in data analysis to provide actionable insights for business growth strategies",
      "Gathered data using reporting tools, SQL queries and analyzed logistics invoice data to research ordercharges, ensuring accuracy and compliance with financial practices. ",
    ],
  },
  {
    title: "Data Analyst - Contract",
    company_name: "RXO",
    icon: rxo,
    iconBg: "#383E56",
    date: "Febuary 2024 - Oct 2024",
    points: [
      "Utilized Excel and Power BI to develop & implement data analytics solutions and provide updates via dashboards and creating reports ",
      "Managed and enhanced the company's data visualization by creating intuitive dashboard reporting, resulting in improved business insights",
      "Engaged with clients via email and calls, including discussion on past due balances and working towards getting resolution on open balances.",
      "Utilized KPI Reporting techniques in data analysis to provide actionable insights for business growth strategies",
      "Gathered data using reporting tools, SQL queries and analyzed logistics invoice data to research ordercharges, ensuring accuracy and compliance with financial practices. ",
    ],
  },
  {
    title: "Frontend Analyst - Full Time",
    company_name: "The Fountain Group",
    icon: cicis,
    iconBg: "#383E56",
    date: "October 2019 - Jan 2024",
    points: [
      "Developing and maintaining single-page applications and components with exceedingly clean, semantic markup, using JavaScript and other related tools. ",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implemented all aspects of web development process, including UI development, API integration, deployment and testing tasks using React, Node, Express, MongoDB and RESTful APIs.",
      "Utilized Adobe InDesign to create magazines and brochures for marketing purposest",
      "Utilized Photoshop to create graphic designs later converted to HTML & CSS ",
    ],
  },
  {
    title: "Web Developer - Contract",
    company_name: "Grafton Studio",
    icon: grafton,
    iconBg: "#383E56",
    date: "Jun 2020 - Oct 2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer - Contract",
    company_name: "Stream 9",
    icon: stream9,
    iconBg: "#E6DEDD",
    date: "December 2019 - March 2020",
    points: [
      "Analyzed client's energy usage by collecting electricity information and made recommendations to optimize energy usage.",
      "Explained marketing and environmental benefits of purchasing renewable energy and differentiated products against traditional energy offerings",
      "Developed and updated client reports and documents to maintain customer service and internal records.",
      "onducted solar consultations with new prospects, and sold solar energy programs",
    ],
  },
  {
    title: "Customer Service Supervisor - Full Time",
    company_name: "Giant",
    icon: giant,
    iconBg: "#E6DEDD",
    date: "April 2018 - October 2019",
    points: [
      "Establish procedures and processes to assure regulatory compliance;",
      " Develop, implement, monitor and manage safety programs and procedures",
      " Ensure the compliance of company policy",
    ],
  },
];

const projects = [
  {
    name: "Covid Dashboard",
    description:
      "A project which utilize MYSQL data and Tableau to create a visualisation dashboard. Skills Used: Tableau",
    tags: [
      {
        name: "Tableau",
        color: "blue-text-gradient",
      },
      {
        name: "Data Visualisation",
        color: "green-text-gradient",
      },
      {
        name: "Dashboards",
        color: "pink-text-gradient",
      },
    ],
    image: covidDashboard,
    source_code_link:
      "https://github.com/mico997/Data-Visualisation-Tableau/tree/main",
    project_link:
      "https://public.tableau.com/app/profile/mike.kwekam/viz/CovidDashboard_17189333385750/Dashboard1?publish=yeshttps://public.tableau.com/shared/N89C8Q6BM",
  },
  {
    name: "Covid Data Exploration",
    description:
      "A project which utilizes MYSQL Server to explore global COVID 19 data. Skills Used: Joins, CTE's, Temp Tables, Windows Functions, Aggregate Function, Creating Views, Converting Data Types",
    tags: [
      {
        name: "MYSQL",
        color: "blue-text-gradient",
      },
      {
        name: "Docker",
        color: "green-text-gradient",
      },
      {
        name: "Azure Data Studio",
        color: "pink-text-gradient",
      },
    ],
    image: sql,
    source_code_link: "https://github.com/mico997/Data-Exploration",
  },
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
      "A single-page React application that utilizes API, NodeJS, HTML, CSS, and JavaScript to communicate with a rapid API and render information about hotels, restaurants, and attractions in your area. This application requires your browser to have access to your location to properly function. Chrome browser is recommended! ",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Vite.Js",
        color: "green-text-gradient",
      },
      {
        name: "Three.Js",
        color: "pink-text-gradient",
      },
    ],
    image: tripadvisor,
    source_code_link: "https://github.com/mico997/trip-advisor",
    project_link: "https://trip-advisor-livid.vercel.app/",
  },
];

export { services, technologies, experiences, projects };
