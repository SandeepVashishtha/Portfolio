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
  status?: 'active' | 'completed' | 'in-progress'
  featured?: boolean
}

export const projectsData: projectType[] = [
  {
    name: 'LaTeX Resume Builder',
    repo: 'https://github.com/SandeepVashishtha/LaTeX-Resume-Builder',
    url: 'https://latex-resume-builder.vercel.app/',
    image: '/Latex-editor.png',
    description:
      'Full-stack LaTeX-based resume builder with real-time preview and PDF generation. Features user authentication, MongoDB integration, and an intuitive split-screen editor with live LaTeX rendering using KaTeX.',
    Skills: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'LaTeX',
      'KaTeX',
      'JWT Auth'
    ],
    status: 'active',
    featured: true
  },
  {
    name: 'Image Recognition System',
    repo: 'https://github.com/SandeepVashishtha/Image-Recognition',
    url: 'https://github.com/SandeepVashishtha/Image-Recognition',
    image: '/Image-reco.png',
    description:
      'Real-time object detection and recognition system using YOLOv5 and OpenCV. Capable of detecting 80+ object classes with live webcam feed processing, bounding box visualization, and confidence scoring.',
    Skills: [
      'Python',
      'YOLOv5',
      'OpenCV',
      'Computer Vision',
      'PyTorch',
      'Real-time Processing'
    ],
    status: 'completed',
    featured: true
  },
  {
    name: 'AlgoVisualizer',
    repo: 'https://github.com/SandeepVashishtha/AlgoVisualizer',
    url: 'https://github.com/SandeepVashishtha/AlgoVisualizer',
    image: '/Algo.png',
    description:
      'Interactive algorithm visualization platform featuring sorting, searching, and data structure visualizations. Built with React, offers real-time step-by-step algorithm execution with customizable speed controls and performance metrics.',
    Skills: [
      'React',
      'JavaScript',
      'CSS3',
      'Algorithm Visualization',
      'Educational Tech'
    ],
    status: 'active',
    featured: true
  },
  {
    name: 'Sci-Fi Innovation Club Website',
    repo: 'https://github.com/SandeepVashishtha/Sci-Fi-Cu',
    url: 'https://sci-fi-cu.vercel.app/',
    image: '/scifi.png',
    description:
      'Official website for Sci-Fi Innovation Club at Chandigarh University. Features futuristic design with interactive star field animations, team management system, contact forms with email integration, and responsive dark theme UI.',
    Skills: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'JavaScript',
      'Email API',
      'Animation Effects'
    ],
    status: 'active',
    featured: true
  },
  {
    name: 'Online Code Editor',
    repo: 'https://github.com/SandeepVashishtha/Code-Editor',
    url: 'https://github.com/SandeepVashishtha/Code-Editor',
    image: '/code-editor.png',
    description:
      'Browser-based code editor with Monaco Editor integration supporting JavaScript and Python execution. Features real-time code execution, Pyodide integration for Python, and responsive design with syntax highlighting.',
    Skills: [
      'React',
      'Monaco Editor',
      'Pyodide',
      'JavaScript',
      'Python',
      'Code Execution'
    ],
    status: 'active',
    featured: true
  },
  {
    name: 'CareSync Healthcare Platform',
    repo: 'https://github.com/SandeepVashishtha/CareSync',
    url: false,
    image: '/caresync.png',
    description:
      'Comprehensive healthcare management system built with Java and JavaScript. Features patient management, appointment scheduling, medical records, and healthcare provider dashboard with secure authentication.',
    Skills: [
      'Java',
      'SpringBoot',
      'JavaScript',
      'Healthcare Tech',
      'Database Management'
    ],
    status: 'in-progress',
    featured: true
  },
  {
    name: 'Portfolio Website',
    repo: 'https://github.com/SandeepVashishtha/Portfolio',
    url: 'https://vashishtha.live/',
    image: '/Portfolio.png',
    description:
      'Modern portfolio website showcasing projects and skills with enhanced 3D animations, responsive design, and smooth user interactions. Built with Next.js 14, featuring project cards with hover effects and performance optimization.',
    Skills: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      '3D Effects'
    ],
    status: 'active',
    featured: false
  },
  {
    name: 'Wanna Date? Interactive Card',
    repo: 'https://github.com/SandeepVashishtha/Wanna-Date',
    url: 'https://sandeepvashishtha.github.io/Wanna-Date/',
    image: '/Wanna-date.png',
    description:
      'Creative interactive web application featuring a playful digital card with flip animations. Demonstrates CSS animation expertise and creative design thinking with smooth hover effects and responsive interactions.',
    Skills: [
      'HTML5',
      'CSS3',
      'Animations',
      'Creative Design',
      'Interactive UI'
    ],
    status: 'completed',
    featured: false
  },
  {
    name: 'Brew Bliss Coffee Shop',
    repo: 'https://github.com/SandeepVashishtha/Brew-Bliss',
    url: 'https://sandeepvashishtha.github.io/Brew-Bliss/',
    image: '/brew-Bliss.png',
    description:
      'Modern coffee shop website with responsive design, interactive menu showcase, and online reservation system. Features smooth animations, Swiper.js integration, and optimized user experience across all devices.',
    Skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Swiper.js',
      'Responsive Design',
      'UX/UI'
    ],
    status: 'completed',
    featured: false
  }
]

export const skillsData = [
  {
    category: 'Languages',
    items: [
      { name: 'Java', img: 'java/java-original.svg' },
      { name: 'JavaScript', img: 'javascript/javascript-original.svg' }
    ]
  },
  {
    category: 'Frameworks and Libraries',
    items: [
      { name: 'SpringBoot', img: 'spring/spring-original.svg' },
      { name: 'React', img: 'react/react-original.svg' },
      { name: 'Node.js', img: 'nodejs/nodejs-original.svg' }
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
    category: 'Cloud and DevOps',
    items: [
      { name: 'Azure', img: 'azure/azure-original.svg' },
      { name: 'Docker', img: 'docker/docker-original.svg' },
      { name: 'Kubernetes', img: 'kubernetes/kubernetes-plain.svg' },
      { name: 'Github Actions', img: 'github/github-original.svg' }
    ]
  }
]
