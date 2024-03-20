import cardform from "../assets/cardForm.png";
import calc from "../assets/calc.png";

//skill-level
const tech = {
    "JavaScript": 80,
    "React": 60,
    "Node.js": 60,
    "R3F.js": 20,
    "Express.js": 50,
    "MongoDB": 30,
    "PostgreSQL": 30,
    "sass": 60,
    "tailwind": 60,
    "Git": 80,
    "Vite": 80
};

const projects = [
    {
        "title": "Portfolio",
        "tags": "React, HTML, CSS",
        "link": "/",
        "preview": ""
    },
    {
        "title": "Card Form",
        "tags": "React, HTML, CSS",
        "link": "https://interactive-card-io.vercel.app/",
        "preview": cardform
    },
    {
        "title": "Bill Splitte",
        "tags": "React, HTML, CSS",
        "link": "https://bill-splitter-two.vercel.app/",
        "preview": calc
    },
]

const experiences = [
    {
    title: "React.js Developer",
    company_name: "Starbucks",
    date: "March 2020 - April 2021",
    points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
]

const credentials = {
    gitHub: "https://github.com/Tyubit",
    gitLab: "https://gitlab.com/Tuybit",
    linkedIn: "https://www.linkedin.com/in/elisha-kovalev/",
}

export { tech, projects, credentials };
