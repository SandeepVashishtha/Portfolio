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
    name: '#',
    repo: '#',
    url: '#',
    image:
      'https://i.ibb.co/b69XhBD/Screenshot-2023-07-11-at-22-26-22-REST-Countries-API.png',
    description: '#',
    Skills: ['react', 'typescript', 'styled-components', 'axios', 'api']
  }
]

export const skillsData = [
  {
    img: 'python/python-original.svg',
    name: 'Python'
  },
  {
    img: 'cplusplus/cplusplus-original.svg',
    name: 'C++'
  },
  {
    img: 'c/c-original.svg',
    name: 'C'
  },
  {
    img: 'mongodb/mongodb-original.svg',
    name: 'MongoDB'
  },
  {
    img: 'html5/html5-original.svg',
    name: 'HTML'
  },
  {
    img: 'css3/css3-original.svg',
    name: 'CSS'
  },
  {
    img: 'javascript/javascript-original.svg',
    name: 'JavaScript'
  },
  {
    img: 'solidity/solidity-original.svg',
    name: 'Solidity'
  },
  {
    img: 'git/git-original.svg',
    name: 'Git'
  },
  {
    img: 'nodejs/nodejs-original.svg',
    name: 'Node.js'
  },
  {
    img: 'googlecloud/googlecloud-original.svg',
    name: 'Google Cloud'
  },
  {
    img: 'tensorflow/tensorflow-original.svg',
    name: 'TensorFlow'
  },
  {
    img: 'mysql/mysql-original.svg',
    name: 'MySQL'
  },
  {
    img: 'oracle/oracle-original.svg',
    name: 'Oracle'
  },
  {
    img: 'selenium/selenium-original.svg',
    name: 'Selenium'
  }
]
