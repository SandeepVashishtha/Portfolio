const data = {
  personal: {
    name: "Sandeep Vashishtha",
    title: "Full Stack Developer · Open Source Contributor · CS Graduate",
    bio: "Computer Science graduate focused on Java, Spring Boot, React.js, and cloud technologies. Built scalable full-stack applications and contributed 300+ merged pull requests to open-source projects.",
    email: "sandeepvashishtha@outlook.in",
    github: "SandeepVashishtha",
    avatar: "/profile.jpg",
    location: "India",
  },
  social: {
    github: "https://github.com/SandeepVashishtha",
    linkedin: "https://www.linkedin.com/in/SandeepVashishtha",
    twitter: "https://x.com/vsandeep_11",
  },
  coding: {
    leetcode: { username: "sandeepvashishtha" },
    github: { username: "sandeepvashishtha" },
  },
  about: {
    description:
      "I am a Full Stack Developer and CS graduate focused on engineering high-performance, scalable web systems with Java, Spring Boot, and React. With extensive hands-on experience in RESTful APIs, database optimization, and cloud deployments, I bring robust software engineering practices to every project. I am also an active open-source contributor with 250+ merged PRs and GSSoC Project Admin experience.",
  },
  skills: [
    {
      category: "Languages",
      items: [
        { name: "Java", img: "java/java-original.svg" },
        { name: "JavaScript", img: "javascript/javascript-original.svg" },
      ],
    },
    {
      category: "Frameworks and Libraries",
      items: [
        { name: "SpringBoot", img: "spring/spring-original.svg" },
        { name: "React", img: "react/react-original.svg" },
        { name: "Next.js", img: "nextjs/nextjs-original.svg" },
        { name: "Node.js", img: "nodejs/nodejs-original.svg" },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "MySQL", img: "mysql/mysql-original.svg" },
        { name: "MongoDB", img: "mongodb/mongodb-original.svg" },
      ],
    },
    {
      category: "Cloud and DevOps",
      items: [
        { name: "Azure", img: "azure/azure-original.svg" },
        { name: "Docker", img: "docker/docker-original.svg" },
        { name: "Kubernetes", img: "kubernetes/kubernetes-plain.svg" },
        { name: "Github Actions", img: "github/github-original.svg" },
      ],
    },
  ],
projects: [
  {
    name: "Patent IPR Management Platform",
    repo: "https://github.com/SandeepVashishtha/Patent-IPR",
    url: "https://patent-ipr-version-3.vercel.app",
    image: "/patent-ipr.png",
    description:
      "Comprehensive intellectual property management platform that streamlines patent, trademark, copyright, and design filings with role-based workflows, secure JWT authentication, chatbot assistance, and multi-step filing processes. Features dashboards for clients, agents, and admins with document management, timelines, and cost estimation.",
    tech: [
      "Next.js",
      "React",
      "Spring Boot",
      "PostgreSQL",
      "JWT Auth",
      "Tailwind CSS",
      "Swagger"
    ],
    status: "active",
    featured: true,
  },
  {
    name: "Eventra - Full Stack Event Management System",
    repo: "https://github.com/SandeepVashishtha/Eventra",
    url: "https://eventra.sandeepvashishtha.in/",
    image: "/eventra.png",
    description:
      "Modern full-stack event management platform with event creation, RSVP tracking, QR-code check-ins, admin dashboards, analytics, and secure JWT authentication. Built using Spring Boot backend and React frontend with Tailwind styling.",
    tech: [
      "React",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "Docker",
      "JWT Auth",
      "Tailwind CSS"
    ],
    status: "active",
    featured: true,
  },
  {
  name: "AI-Powered Recruitment & Talent Intelligence Platform",
  repo: "https://github.com/SandeepVashishtha/AI-Powered-Recruitment-Talent-Intelligence-Platform",
  url: "https://ai-powered-recruitment-talent-intel.vercel.app/",
  image: "/job-portal.png",
  description:
    "Full-stack recruitment and talent intelligence platform connecting candidates and recruiters through a modern job portal. Features secure authentication, job discovery and filtering, candidate dashboards, profile management, resume uploads with Cloudinary, recruiter workflows, and role-based access. The platform is designed to support AI-driven resume analysis, semantic job matching, candidate ranking, and skill-gap insights, with a scalable architecture using Next.js, Express.js, PostgreSQL, and Prisma.",
  tech: [
    "Next.js 15",
    "React",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Prisma",
    "JWT Auth",
    "Zustand",
    "TanStack Query",
    "Tailwind CSS",
    "shadcn/ui",
    "Cloudinary",
    "Swagger",
    "Azure",
    "Vercel"
  ],
  status: "active",
  featured: true,
},
  {
    name: "Team Task Manager",
    repo: "https://github.com/SandeepVashishtha/Team-Task-Manager",
    url: "https://team-task-manager-sable.vercel.app/",
    image: "/team-task-manager.png",
    description:
      "Full-stack team collaboration and project management platform for managing projects, tasks, team members, and deadlines. Includes JWT authentication, role-based access control, project and task management, member management, priority and status tracking, personalized dashboards, productivity insights, and REST API documentation.",
    tech: [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT Auth",
      "Swagger",
      "Tailwind CSS",
      "Azure",
      "Vercel"
    ],
    status: "active",
    featured: true,
  },
  {
    name: "DiagramCraft",
    repo: "https://github.com/SandeepVashishtha/DiagramCraft",
    url: "https://diagram-craft-eight.vercel.app/",
    image: "/diagram-craft.png",
    description:
      "Interactive web-based diagram editor powered by Mermaid.js, allowing users to write diagram syntax in an integrated CodeMirror editor and instantly preview the rendered result. Includes diagram templates, syntax error handling, and SVG and PNG export support for flowcharts, sequence diagrams, ER diagrams, class diagrams, Gantt charts, and more.",
    tech: [
      "React 19",
      "Vite",
      "Mermaid.js",
      "CodeMirror",
      "Tailwind CSS",
      "html-to-image"
    ],
    status: "active",
    featured: true,
  },
],
};

export default data;
