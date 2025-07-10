export const navigationLinks = [
  { label: 'Home', path: '#home' },
  { label: 'About', path: '#about' },
  { label: 'Projects', path: '#projects' },
  { label: 'Skills', path: '#skills' },
  { label: 'Contact', path: '#contact' }
]

export type projectType = {
  name: string
  repo: string
  url: string | false
  image: string
  description: string
  Skills: string[]
}

export const projectsData: projectType[] = [
  {
    name: 'Online Code-Editor',
    repo: 'https://github.com/SandeepVashishtha/Code-Editor',
    url: 'https://github.com/SandeepVashishtha/Code-Editor',
    image: '/code-editor.png',
    description:
      'A web-based real-time code editor that supports collaborative coding. Built using the MERN stack, with Monaco Editor for syntax highlighting and real-time updates via WebSockets.',
    Skills: ['MERN', 'Node.js', 'Monaco Editor']
  },
  {
    name: 'LaTeX-Based Resume Builder',
    repo: 'https://github.com/SandeepVashishtha/LaTeX-Resume-Builder',
    url: 'https://latex-resume-builder.vercel.app/',
    image: '/Latex-editor.png', // You can replace this with the actual image path
    description:
      'A web-based resume builder that allows users to create and customize resumes using LaTeX templates. Features live preview and PDF generation, built with React, TypeScript, and styled-components. Integrated Axios for API communication.',
    Skills: ['React', 'TypeScript', 'styled-components', 'Axios', 'API']
  },
  {
    name: 'Wanna Date?',
    repo: 'https://github.com/SandeepVashishtha/Wanna-Date',
    url: 'https://sandeepvashishtha.github.io/Wanna-Date/',
    image: '/Wanna-date.png', // Replace with the actual image path
    description:
      'A playful and interactive web application featuring a digital card that flips open to reveal the message "Wanna Date?" on hover. Designed with simplicity and creativity, this project showcases the use of CSS animations and hover effects.',
    Skills: ['HTML', 'CSS', 'Google Fonts']
  },
  {
    name: 'Portfolio',
    repo: 'https://github.com/SandeepVashishtha/Portfolio',
    url: 'https://vashishtha.live/',
    image: '/Portfolio.png', // Replace with the actual image path
    description:
      'A personal portfolio website showcasing my skills, projects, and experiences as a Java developer and ethical hacker. The site features a clean and modern design, making it easy for visitors to navigate and view my work.',
    Skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js']
  },
  {
    name: 'Brew Bliss Coffee Shop Website',
    repo: 'https://github.com/SandeepVashishtha/Brew-Bliss',
    url: 'https://sandeepvashishtha.github.io/Brew-Bliss/',
    image: '/brew-Bliss.png', // Replace with the actual image path
    description:
      'Welcome to Brew Bliss, your ultimate destination for savoring exquisite coffee blends! This website features a responsive design, interactive homepage, detailed menu section, customer reviews, and an online table booking form.',
    Skills: ['HTML5', 'CSS3', 'JavaScript', 'Swiper.js', 'Font Awesome']
  }
]

export const skillsData = [
  {
    category: 'Languages',
    items: [
      { name: 'Java', img: 'java/java-original.svg' },
      { name: 'JavaScript', img: 'javascript/javascript-original.svg' },
      { name: 'C++', img: 'cplusplus/cplusplus-original.svg' },
      { name: 'C', img: 'c/c-original.svg' }
    ]
  },
  {
    category: 'Frameworks and Libraries',
    items: [
      { name: 'React', img: 'react/react-original.svg' },
      { name: 'SpringBoot', img: 'spring/spring-original.svg' }
    ]
  },
  {
    category: 'Databases',
    items: [
      { name: 'MySQL', img: 'mysql/mysql-original.svg' },
      { name: 'MongoDB', img: 'mongodb/mongodb-original.svg' }
    ]
  },
  {
    category: 'Cloud and Devops',
    items: [
      //{ name: 'AWS', img: 'aws/aws-original.svg' },
      { name: 'Azure', img: 'azure/azure-original.svg' },
      { name: 'Docker', img: 'docker/docker-original.svg' },
      { name: 'Kubernetes', img: 'kubernetes/kubernetes-plain.svg' },
      { name: 'Github Actions', img: 'github/github-original.svg' }
    ]
  }
]
