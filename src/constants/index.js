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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  excel,
  lead,
  functionup,
  data,
  tensorflow,
  keras,
  sckit,
  jupyter,
  ai,
  machine,
  sql,
  llm,
  time,
  rag,
  snowflake,
  prob
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
    title: "Data Scientist",
    icon: web,
  },
  {
    title: "Python Developer",
    icon: mobile,
  },
  {
    title: "Machine Learning",
    icon: backend,
  },
  {
    title: "Artificial Intelligence",
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
    title: "Data Scientist Trainee",
    company_name: "ExcelR",
    icon: excel,
    iconBg: "#E6DEDD",
    date: "May 2024 - Present",
    points: [
      "Developed data-driven insights that boosted strategic decisionmaking, increasing operational efficiency by 15%",
      "Implemented a data cleaning process that reduced errors by 20%, ensuring higher analysis accuracy",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Collaborated with marketing, finance, and product teams to deliver analytical solutions, contributing to a 10% business growth.",
    ],
  },
  {
    title: "Data Scientist Intern",
    company_name: "Lead Height",
    icon: lead,
    iconBg: "#383E56",
    date: "Feb 2024 - Aug 2024",
    points: [
      "Collected, analyzed, and modeled data using statistical techniques and machine learning algorithms",
      "Developed interactive dashboards and reports to communicate insights, optimizing processes and achieving cost savings",
      "Worked with cross-functional teams to identify process improvement opportunities and implemented data-driven solutions",
      "Optimized inventory management, reduced equipment downtime with predictive maintenance models, and received recognition for outstanding performance",
    ],
  },
  {
    title: "Full Stack Trainee",
    company_name: "FunctionUP",
    icon: functionup,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - Oct 2022",
    points: [
      "Create and manage the marketing budget, ensuring efficient allocation of resources and optimizing ROI.",
      "Oversee market research to identify emerging trends, customer needs, and competitor strategies.",
      "Monitor brand consistency across marketing channels and materials",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Juhaib proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Juhaib does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Juhaib optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Random Forest",
    description:
      "I implemented a Random Forest model for classifying the Glass dataset. The project involved data preprocessing, feature scaling, and evaluating the model in Jupyter Notebook, comparing its performance with Bagging and Boosting methods.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "eda",
        color: "green-text-gradient",
      },
      {
        name: "machine-learning",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Juhaib/Random-Forest",
  },
  {
    name: "Clustering",
    description:
      "Performed clustering with K-Means, Hierarchical Clustering, and DBSCAN after preprocessing and normalizing features. Evaluated clusters using the silhouette score and visualized results with scatter plots and dendrograms.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "K-Means",
        color: "green-text-gradient",
      },
      {
        name: "DBSCAN",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Juhaib/Clustering",
  },
  {
    name: "Logistics Regression",
    description:
      "Applied Logistic Regression for binary classification with data preprocessing and feature scaling. Evaluated the model using accuracy, precision, recall, and ROC-AUC, determining its overall predictive performance.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "visualization",
        color: "green-text-gradient",
      },
      {
        name: "machine-learning",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Juhaib/Logistics_Regression",
  },
];

export { services, technologies, experiences, testimonials, projects };
