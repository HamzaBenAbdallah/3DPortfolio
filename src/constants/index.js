import {
    mobile,
    backend,
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
    threejs,
    git,
    figma,
    docker,
    Ecommerce,
    Entertainmentcenter,
    Portfolio,
    corus,
    domtar,
    raymondjames,
    tfrs,
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
        title: "Frontend Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Mobile Developer",
        icon: mobile,
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
        title: "VR Developer",
        company_name: "The Full Room Studio",
        icon: tfrs,
        iconBg: "#E6DEDD",
        date: "March 2015 - August 2016",
        points: [
            "Created the project's pipelines and the tools to help the team to work more efficiently.",
            "Collaborated with cross-functional teams including designers and product managers to create high-quality assets.",
            "Implemented the vr animations and interactions.",
            "Helped the company secure multiple contracts with major clients due to rapid prototyping.",
        ],
    },
    {
        title: "Systems Analyst",
        company_name: "Raymond James",
        icon: raymondjames,
        iconBg: "#E6DEDD",
        date: "December 2019 - March 2021",
        points: [
            "Participated in the migration from win7 to win10 and the deployment of the new company's image.",
            "Supported 1,500+ end-users with connectivity expertise in a Windows 10 environment.",
            "Collaborated with multiple teams to secure the transition to work from home.",
            "Tested, deployed and maintained the company's financial applications.",
        ],
    },
    {
        title: "Systems Analyst",
        company_name: "Domtar",
        icon: domtar,
        iconBg: "#E6DEDD",
        date: "March 2021 - August 2021",
        points: [
            "Managed the migration from win7 to win10 and the deployment of the new company's image.",
            "Supported 6,000+ end-users across Canada and the US with connectivity expertise in a Windows 10 environment.",
            "Performed analysis including investigations, documentation, recommendation, and problem-solving.",
        ],
    },
    {
        title: "Senior Systems Analyst",
        company_name: "Corus Entertainment",
        icon: corus,
        iconBg: "#E6DEDD",
        date: "August 2021 - Present",
        points: [
            "Managed the back to work in the office setup for the Montreal office.",
            "Collaborated with the system architect team to migrate the phone system from Skype to MS Teams.",
            "Helped automate the onboarding process.",
            "Wrote multiple technical manuals for the IT team and the end-users.",
            "Oversaw first successful rollout of new software functionality.",
        ],
    },
];

const projects = [
    {
        name: "E-Center",
        description:
            "Web application that enables users to search for movies, create a watchlist, and view movie details.\n Users can create accounts and login to save their search, accounts are encrypted using bcrypt and stored in a MongoDB database.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "express",
                color: "black-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "Styled Components",
                color: "pink-text-gradient",
            },
        ],
        image: Entertainmentcenter,
        website_link: "https://entertainmentcenter.netlify.app/",
        source_code_link:
            "https://github.com/HamzaBenAbdallah/entertainmentcenter",
    },
    {
        name: "Portfolio",
        description:
            "Portolio website to showcase my work and skills. Built using React, ThreeJS, and TailwindCSS.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "threejs",
                color: "black-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "pink-text-gradient",
            },
        ],
        image: Portfolio,
        website_link: "https://hamzabenabdallah.dev/",
        source_code_link: "https://github.com/HamzaBenAbdallah/3DPortfolio",
    },
    {
        name: "E-Commerce",
        description:
            "An E-Commerce website with filters, shopping cart, checkout, and payment system. ",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "express",
                color: "black-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "Styled Components",
                color: "pink-text-gradient",
            },
        ],
        image: Ecommerce,
        website_link: "https://groupecommerce.netlify.app/",
        source_code_link:
            "https://github.com/HamzaBenAbdallah/E-Commerce-group-project/",
    },
];

export { services, technologies, experiences, projects };
