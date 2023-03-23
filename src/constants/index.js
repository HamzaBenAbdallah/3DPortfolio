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
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
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
        icon: meta,
        iconBg: "#E6DEDD",
        date: "March 2015 - August 2016",
        points: [
            "Created the projects pipelines and the tools to help the team to work more efficiently.",
            "Collaborated with cross-functional teams including designers and product managers to create high-quality assets.",
            "Implemented the vr animations and interactions.",
            "Helped the company secure multiple contracts with major clients due to rapid prototyping.",
        ],
    },
    {
        title: "Systems Analyst",
        company_name: "Raymond James",
        icon: shopify,
        iconBg: "#383E56",
        date: "December 2019 - March 2021",
        points: [
            "Participated in the migration from win7 to win10 and the deployment of the new company's image",
            "Supported 1,500+ end-users with connectivity expertise in a Windows 10 environment",
            "Collaborated with multiple team to secure the transition to work from home",
            "Tested, deployed and maintained the company's financial applications",
        ],
    },
    {
        title: "Systems Analyst",
        company_name: "Domtar",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "March 2021 - August 2021",
        points: [
            "Managed the migration from win7 to win10 and the deployment of the new company's image",
            "Supported 6,000+ end-users across Canada and the US with connectivity expertise in a Windows 10 environment",
            "Performed analysis including investigations, documentation, recommendation, and problem-solving",
        ],
    },
    {
        title: "Senior Systems Analyst",
        company_name: "Corus Entertainment",
        icon: starbucks,
        iconBg: "#383E56",
        date: "August 2021 - Present",
        points: [
            "Managed the back to work in the office setup for the Montreal office",
            "Collaborated with the system architect team to migrate the phone system from Skype to MS Teams",
            "Helped automate the onboarding process",
            "Wrote multiple technical manuals for the IT team and the end-users",
            "Oversaw first successful rollout of new software functionality",
        ],
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, projects };
