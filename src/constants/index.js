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
  carrent,
  jobit,
  tripguide,
  threejs,
  code1,
  shop,
  youtube,
  python,
  django,
  postgres,
  sql,
  next,
  vue,
  liveLink,
  portfolio15,
  portfolio16,
  portfolio17,
  linktree,
  tiktok,
  ig,
  beeclone,
  smartrep,
  matrixai,
  zapflow,
  notable,
  Logo,


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
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Fullstack Developer",
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "python",
    icon: python,
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
  {
    name: "django",
    icon: django,
  },
  {
    name: "postgres",
    icon: postgres,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "threejs",
    icon: threejs,
  },
  {
    name: "java",
    icon: next,
  },
  {
    name: "vue",
    icon: vue,
  },
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Hack Reactor",
    icon: code1,
    iconBg: "#E6DEDD",
    date: "2021",
    points: [
      "Successfully led a team of engineers in the development and deployment of a high-performance API web application within a tight six-week timeframe.",
      "Designed and implemented a scalable backend service utilizing MongoDB and FastAPI, following a test-driven development approach, ensuring a stable and well-tested codebase.",
      "Implemented secure user authentication by integrating Simple JWT, ensuring secure access to sensitive user information and a seamless user experience.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "ChiqueChickShop",
    icon: code1,
    iconBg: "#383E56",
    date: "2022",
    points: [
      "Developed ChiqueChickShop, a responsive e-commerce platform.",
      "Enhanced user experience with intuitive navigation features.",
      "Implemented secure payment processing for online transactions.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Madamcoon",
    icon: code1,
    iconBg: "#E6DEDD",
    date: "2023",
    points: [
      "Spearheaded the revamp of Madamcoon, focusing on responsive design and user experience improvements.",
      "Integrated CMS and implemented SEO strategies for enhanced online visibility.",
      "Optimized the website for increased engagement and performance metrics.",
    ],
  },
];

const imageProjects = [
  {
    id: 1,
    image: portfolio15,
    url: "https://madamcoon.com/",
    title: "Madamcoon Maine Coon Cattery NYC",
    description: "",
  },
  {
    id: 2,
    image: portfolio16,
    url: "https://chiquechickshop.com/",
    title: "ChiqueChickShop",
    description: "",
  },
  {
    id: 3,
    image: portfolio17,
    url: "https://jj-tailortech.vercel.app/",
    title: "TailorTech",
    description: "",
  },
  {
    id: 4,
    image: shop,
    url: "https://jj-ecomstore.vercel.app/",
    title: "E-commerce platform",
    description: "",
  },
  {
    id: 5,
    image: youtube,
    url: "https://jj-youtube-clone.netlify.app/",
    title: "Youtube clone",
    description: "",
  },
  {
    id: 6,
    image: ig,
    url: "https://jj-ig.vercel.app/",
    title: "Instagram clone",
    description: "",
  },
  {
    id: 7,
    image: tiktok,
    url: "https://jj-tiktok.vercel.app/",
    title: "TikTok clone",
    description: "",
  },
];

const projects = [
  {
    name: "SmartRep AI",
    description:
      "SmartRep AI is an advanced AI chatbot designed to streamline customer interactions, book appointments, process payments, and manage leads. It seamlessly integrates with any website, offering a customizable interface and a suite of powerful features to enhance user experience and business operations.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Neon",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
    ],
    image: smartrep,
    source_code_link: "https://github.com/jeffjiang13/smartrep-ai",
  },
  {
    name: "Notable",
    description:
      "Experience unparalleled team collaboration with Notable, a cutting-edge SaaS platform designed to enhance productivity dynamically. Built with Next.js 13 and adorned with the latest technologies like Stripe for secure payments, Drizzle ORM for efficient data management, Tailwind CSS for intuitive styling, Supabase for a scalable backend, and WebSockets for real-time interactions, Notable offers a modern workspace for teams and individuals to thrive in real time. Perfect for startups and large enterprises alike, Notable seamlessly integrates advanced collaboration tools into your daily operations, setting a new standard for what a collaborative platform can achieve.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Supabase",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
    ],
    image: notable,
    source_code_link: "https://github.com/jeffjiang13/notable",
  },
  {
    name: "ZapFlow",
    description:
      "ZapFlow is a SaaS Automation Builder, a powerful and versatile platform designed to automate and streamline your business processes. Built from the ground up without relying on integration libraries, this builder offers a seamless and customizable experience for creating automation flows. Whether you are a small business or a large enterprise, our builder has the features you need to connect various services and automate your workflows efficiently.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Neon",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: zapflow,
    source_code_link: "https://github.com/jeffjiang13/saas-automation",
  },
  {
    name: "Beeclone",
    description:
      "This project is a fullstack clone of Linktree built with Next.js, Tailwind CSS, and MongoDB. It allows users to create a personalized page with links to their content across the internet, customize their profile, and view analytics on their links.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: beeclone,
    source_code_link: "https://github.com/jeffjiang13/saas-newsletter",
  },
  {
    name: "Matrix AI",
    description:
      "MatrixAI is a comprehensive SaaS AI Platform with a modern tech stack including Next.js 13, React, Tailwind CSS, Prisma, and Stripe. This platform is designed to offer a wide range of AI-powered tools, from image and video generation to music creation and conversational AI. Featuring a sleek Tailwind design, full responsiveness, and a variety of authentication methods, this platform is equipped to handle the needs of diverse users.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Prisma",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: matrixai,
    source_code_link: "https://github.com/jeffjiang13/MatrixAI",
  },
  {
    name: "LinkTri",
    description:
      "This project is a fullstack clone of Linktree built with Next.js, Tailwind CSS, and MongoDB. It allows users to create a personalized page with links to their content across the internet, customize their profile, and view analytics on their links.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: linktree,
    source_code_link: "https://github.com/jeffjiang13/LinkTree",
  },
  {
    name: "Instagram Clone,",
    description:
      "The IG App 2024 is a comprehensive clone of the Instagram platform, designed to replicate the core functionalities and visual appeal of the original app with added enhancements. Developed using modern web technologies such as Vite, React.js, and Tailwind CSS, this project emphasizes a responsive and eye-catching user interface, ensuring optimal performance and user experience across various devices, specifically optimized for screens with a minimum width of 375px.",
    tags: [
      {
        name: "Vite.js",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ig,
    source_code_link: "https://github.com/jeffjiang13/IG-2.0",
  },
  {
    name: "TikTok Clone",
    description:
      "Explore the modern web with our TikTok Clone Application! This project encompasses a full suite of features including Google Authentication, video uploads, publishing, sharing, commenting, liking, category filtering, advanced search functionalities, profile pages, suggested accounts, and a custom responsive design.",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      {
        name: "Sanity",
        color: "pink-text-gradient",
      },
    ],
    image: tiktok,
    source_code_link: "https://github.com/jeffjiang13/tiktok",
  },
  {
    name: "TailorTech",
    description:
      "This comprehensive SaaS platform leverages the latest technologies including Next.js 14, Bun, Stripe Connect, Prisma, MySQL, and Tailwind to offer a robust solution for building websites, managing projects, and handling financial transactions seamlessly. Designed for agencies, freelancers, and businesses, our platform simplifies the digital landscape through an intuitive interface and powerful features.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Bun",
        color: "green-text-gradient",
      },
      {
        name: "Prisma",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio17,
    source_code_link: "https://github.com/jeffjiang13/tailortech",
  },
  {
    name: "ChiqueChickShop",
    description:
      "Engineered the ChiqueChickShop, a fully responsive e-commerce platform, from the ground up. This project entailed designing an inviting online shopping experience complete with intuitive navigation and streamlined user flows. Focused on integrating secure payment processing systems to ensure transactional safety. Implemented best practices in web development to enhance site responsiveness across all devices. Due to client confidentiality, project specifics and GitHub source are kept private.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio16,
    source_code_link: "https://github.com/jeffjiang13",
  },
  {
    name: "Madamcoon Maine Coon Cattery NYC",
    description:
      "Led the comprehensive development of the Madamcoon website, from concept to launch, focusing on crafting a responsive design that adapts seamlessly across devices. Enhanced user interaction and experience by implementing a user-friendly interface and streamlined navigation. Integrated robust content management systems for easy content updates and management. Employed advanced SEO strategies to maximize online visibility and search rankings. Project details are confidential with GitHub source kept private for client security.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio15,
    source_code_link: "https://github.com/jeffjiang13",
  },
  {
    name: "Movie App",
    description:
      "This app is an online database of information related to movies. Users can search for movies and learn about movies, as well as the cast of the movie. Navigating through the application is made simple with help of a AI voice chatbot. Also provides ratings of movies. Tech stack: JavaScript tools including React.js, Redux, Material UI, Alan AI, and more.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
    ],
    image: Logo,
    source_code_link: "https://github.com/jeffjiang13/movie-app",
  },
  {
    name: "Ecommerce App",
    description:
      "Fully responsive, full-stack e-commerce application with payments. It includes advanced React and Next.js best practices, and integrates Stripe for payment processing. The content of the app can be managed using Sanity, which allows for dynamic modifications of the store's home page and product details. The app is mobile-responsive and includes features such as adding and editing products, advanced card functionalities, and a complete checkout process.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Stripe",
        color: "green-text-gradient",
      },
      {
        name: "Sanity",
        color: "pink-text-gradient",
      },
    ],
    image: shop,
    source_code_link: "https://github.com/jeffjiang13/ecommerce_sanity",
  },
  {
    name: "YouTube Clone",
    description:
      "A responsive React JS application consisting of stunning video sections, custom categories, channel pages, and, most importantly, you can play videos straight from this app!",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "RAPIDAPI",
        color: "pink-text-gradient",
      },
    ],
    image: youtube,
    source_code_link: "https://github.com/jeffjiang13/youtube-clone",
  },
];

export {
  services,
  technologies,
  experiences,
  projects,
  imageProjects,
};
