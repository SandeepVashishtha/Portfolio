# Portfolio

My personal portfolio website built with Next.js and Tailwind CSS, showcasing my skills, projects, and experiences.

## Introduction

Welcome to my personal portfolio website! This project is built using Next.js and Tailwind CSS to showcase my skills, projects, and experiences. It serves as a central place to share my work and connect with others.

## Features

- **Fully Responsive Design**: Optimized for mobile (1 card per row) and desktop (2 cards per row)
- **Dynamic Project Showcase**: Projects loaded from JSON data with featured section on homepage
- **Skills & Technologies Display**: Categorized skills with icons from DevIcons CDN
- **Coding Statistics**: Real-time LeetCode stats integration
- **Modern UI Components**: Reusable Card, Button, and Badge components
- **Dark Mode First**: Minimalist dark theme with clean animations
- **SEO Optimized**: Built with Next.js 14 App Router for optimal performance
- **About Page**: Detailed information about background and expertise

## Technologies Used

- **Next.js 14**: React framework with App Router for server-side rendering and optimal performance
- **React 18**: Modern React with hooks and client-side interactivity
- **Tailwind CSS**: Utility-first CSS framework with custom breakpoints for responsive design
- **TypeScript**: Type-safe development experience
- **Vercel Analytics**: Performance monitoring and analytics
- **Lucide React**: Icon library for modern UI elements
- **PropTypes**: Runtime type checking for component props

## Project Structure

```
Portfolio/
├── public/
│   └── data.json           # Portfolio data (personal info, projects, skills)
├── src/
│   ├── app/
│   │   ├── layout.jsx      # Root layout with header and footer
│   │   ├── page.jsx        # Homepage with featured projects
│   │   ├── globals.css     # Global styles and animations
│   │   ├── about/
│   │   │   └── page.jsx    # About page
│   │   ├── projects/
│   │   │   └── page.jsx    # All projects page
│   │   ├── components/
│   │   │   ├── CodingStats.jsx    # LeetCode stats component
│   │   │   ├── ProjectCard.jsx    # Project card component
│   │   │   ├── SiteFooter.jsx     # Footer component
│   │   │   ├── SiteHeader.jsx     # Header/navigation
│   │   │   ├── Skills.jsx         # Skills display component
│   │   │   └── ui/
│   │   │       ├── Badge.jsx      # Badge UI component
│   │   │       ├── Button.jsx     # Button UI component
│   │   │       └── Card.jsx       # Card UI component
│   │   └── utils/
│   │       └── data.ts            # Data utilities
│   └── services/
│       └── getLeetCodeStats.js    # LeetCode API integration
├── tailwind.config.ts      # Tailwind configuration with custom breakpoints
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
└── package.json            # Project dependencies

```

## Installation

To get a local copy of the project up and running, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/SandeepVashishtha/Portfolio.git
```

2. Navigate to the project directory:

```bash
cd Portfolio
```

3. Install dependencies:

```bash
npm install
```

4. Update the `public/data.json` file with your personal information, projects, and skills.

## Usage

To run the project locally in development mode:

```bash
npm run dev
```

Open your browser and navigate to http://localhost:3000 to view the portfolio website.

To build for production:

```bash
npm run build
npm start
```

## Customization

### Editing Portfolio Data

All portfolio content is managed through `public/data.json`:

- **personal**: Your name, title, bio, email, GitHub, avatar
- **social**: Links to GitHub, LinkedIn, Twitter
- **coding**: LeetCode username for stats integration
- **about**: Detailed description for About page
- **skills**: Categorized list of technologies with DevIcons paths
- **projects**: Array of projects with title, description, tech stack, repo and live links

### Custom Breakpoints

The project uses custom Tailwind breakpoints (defined in `tailwind.config.ts`):

- **sm**: max-width 670px (mobile devices)
- **md**: max-width 865px (tablets)
- Anything above 865px is considered desktop

### Styling

Global styles and animations are in `src/app/globals.css`. The design uses a minimalist dark theme with subtle animations.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please fork the repository and create a pull request. For major changes, please open an issue to discuss what you would like to change.

- Fork the Project
- Create your Feature Branch (git checkout -b feature/AmazingFeature)
- Commit your Changes (git commit -m 'Add some AmazingFeature')
- Push to the Branch (git push origin feature/AmazingFeature)
- Open a Pull Request
