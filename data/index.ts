export const navItems = [
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Experiences", link: "#Experiences" },
    { name: "Contact", link: "#Contact" },
];
  
export const gridItems = [
  {
    id: 1,
    title: "I am driven by a passion for continuous learning and growth",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4",
    titleClassName: "lg:justify-end lg:mt-0 md:justify-end md:mt-3 sm:justify-center text-xl",

  },
  {
    id: 2,
    title: "Sanandaj",
    description: "Iran",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start text-xl",
  },
  {
    id: 3,
    title: "Tech enthusiast interested in coding",
    description: "no matter what framework or language",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    titleClassName: "justify-start text-xl",
  },

  {
    id: 4,
    title: "Currently imporving my django skills",
    description: "and much more alongside it",
    className: "md:col-span-3 md:row-span-1",
    titleClassName: "md:justify-start lg:justify-center text-xl",
  },
  {
    id: 5,
    title: "Do you want to work together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center text-xl",
  },
];

export const skills_1 = [
  {
    icon: '/Django.svg',
    delay: 0,
    name: 'Django'
  },
  {
    icon: '/REST.svg',
    delay: 0.2,
    name: 'Django Rest Framework'
  },
  {
    icon: '/PostgresSQL.svg',
    delay: 0.4,
    name: 'Postgres'
  },
  {
    icon: '/Next.svg',
    delay: 0.6,
    name: 'Nextjs'
  },
  {
    icon: '/Celery.svg',
    delay: 0.8,
    name: 'celery'
  },
  {
    icon: '/Redis.svg',
    delay: 1,
    name: 'Redis'
  },
  
];
export const skills_2 = [
  {
    icon: '/git.svg',
    delay: 0.3,
    name: 'Git'
  },
  {
    icon: '/GitHub.svg',
    delay: 0.6,
    name: 'GitHub'
  },
  {
    icon: '/NGINX.svg',
    delay: 0.9,
    name: 'Nginx'
  },
  {
    icon: '/Tailwind CSS.svg',
    delay: 1.1,
    name: 'Tailwind CSS'
  },
  {
    icon: '/Selenium.svg',
    delay: 1.3,
    name: 'Selenium'
  },
];
export const skills_3 = [
  {
    icon: '/FastAPI.svg',
    delay: 0.25,
    name: 'FastAPI'
  },
  {
    icon: '/TypeScript.svg',
    delay: 0.45,
    name: 'TypeScript'
  },
  {
    icon: '/Postman.svg',
    delay: 0.65,
    name: 'Postman'
  },
];

export const projects = [
  {
    id: 1,
    title: "Crypto Api Integration",
    des: "Explore the wonders of cryptocurrencies with a collection of tools to help you along the way",
    img: "/project 1.png",
    iconLists: ["/Django.svg", "/REST.svg", "/FastAPI.svg", "/Redis.svg"],
    link: "https://github.com/Far-1d",
  },
  {
    id: 2,
    title: "My Porfolio website",
    des: "Modern ui desgins, implementing next.js component with django for backend",
    img: "/project 2.png",
    iconLists: ["/next.svg", "/Django.svg", "/Tailwind CSS.svg", "/TypeScript.svg", "/fm.svg"],
    link: "#",
  },
];

export const experiences = [
  {
    id: 1,
    title: "Python Freelancer",
    year: "2023-2024",
    desc: "Successfully finished multiple python projects each with unique needs and a thing or two to learn, not only that but also worked on financial robot using mlq and pine script.",
    link: "https://karlancer.com/profile/320925",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/stars.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    name: "github",
    link: 'https://github.com/Far-1d',
  },
  {
    id: 2,
    name: "telegram",
    link: 'https://t.me/Faridz98',
  },
];

export const chartData = [
  { skill: "Django", current: 51},
  { skill: "drf", current: 40},
  { skill: "Postgres", current: 38},
  { skill: "Nextjs", current: 30},
  { skill: "celery", current: 30},
  { skill: "tailwind", current: 45},
];