import Image from 'next/image'

import { MotionDiv, MotionNav } from '../../lib/motion'
import { projectType } from '../../utils/data'

import { Code2, ExternalLink, Github, Star } from 'lucide-react'

type Props = {
  projectData: projectType
}

const item = {
  initial: {
    opacity: 0,
    y: 24
  },
  animate: {
    opacity: 1,
    y: 0
  }
}

const cardVariants = {
  initial: {
    scale: 1,
    rotateX: 0,
    rotateY: 0
  },
  hover: {
    scale: 1.02,
    rotateX: 2,
    rotateY: 2,
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  }
}

const imageVariants = {
  initial: {
    scale: 1
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.4,
      ease: 'easeOut'
    }
  }
}

const overlayVariants = {
  initial: {
    opacity: 0,
    backdropFilter: 'blur(0px)'
  },
  hover: {
    opacity: 1,
    backdropFilter: 'blur(4px)',
    transition: {
      duration: 0.3
    }
  }
}

export const ProjectCard = ({ projectData }: Props) => {
  return (
    <MotionDiv
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      className="border-text to-secondary-hover group relative flex h-full flex-col overflow-hidden rounded-2xl border border-opacity-20 bg-gradient-to-br from-secondary shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-target/20"
      style={{ perspective: '1000px' }}
    >
      {/* Image Section with Enhanced Overlay */}
      <div className="lg:min-h-[208px] relative min-h-[128px] overflow-hidden bg-secondary sm:min-h-[192px]">
        <MotionDiv variants={imageVariants} className="relative h-full">
          <Image
            src={projectData.image}
            alt={`${projectData.name} image`}
            width={448}
            height={280}
            className="h-full w-full object-cover transition-all duration-500"
            unoptimized
            priority
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </MotionDiv>

        {/* Enhanced Action Buttons Overlay */}
        <MotionDiv
          variants={overlayVariants}
          className="absolute inset-0 flex items-center justify-center bg-black/40"
        >
          <MotionNav
            variants={item}
            transition={{
              duration: 0.2
            }}
            className="flex items-center gap-x-4"
          >
            <a
              target="_blank"
              href={projectData.repo}
              className="group/btn flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-black backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white hover:shadow-lg"
              rel="noreferrer"
              title="View source code"
            >
              <Github className="h-4 w-4" />
              <span className="text-sm font-medium">Code</span>
            </a>
            {projectData.url && (
              <a
                target="_blank"
                href={projectData.url}
                className="group/btn flex items-center gap-2 rounded-full bg-target/90 px-4 py-2 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-target hover:shadow-lg"
                rel="noreferrer"
                title="View live demo"
              >
                <ExternalLink className="h-4 w-4" />
                <span className="text-sm font-medium">Demo</span>
              </a>
            )}
          </MotionNav>
        </MotionDiv>

        {/* Enhanced Action Buttons Overlay */}
        <MotionDiv
          variants={overlayVariants}
          className="absolute inset-0 flex items-center justify-center bg-black/40"
        >
          <MotionNav
            variants={item}
            transition={{
              duration: 0.2
            }}
            className="flex items-center gap-x-4"
          >
            <a
              target="_blank"
              href={projectData.repo}
              className="group/btn flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-black backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white hover:shadow-lg"
              rel="noreferrer"
              title="View source code"
            >
              <Github className="h-4 w-4" />
              <span className="text-sm font-medium">Code</span>
            </a>
            {projectData.url && (
              <a
                target="_blank"
                href={projectData.url}
                className="group/btn flex items-center gap-2 rounded-full bg-target/90 px-4 py-2 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-target hover:shadow-lg"
                rel="noreferrer"
                title="View live demo"
              >
                <ExternalLink className="h-4 w-4" />
                <span className="text-sm font-medium">Demo</span>
              </a>
            )}
          </MotionNav>
        </MotionDiv>

        {/* Status Badge */}
        <div
          className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-medium text-white backdrop-blur-sm ${
            projectData.status === 'active'
              ? 'bg-green-500/90'
              : projectData.status === 'in-progress'
              ? 'bg-yellow-500/90'
              : 'bg-blue-500/90'
          }`}
        >
          {projectData.status === 'active'
            ? 'Active'
            : projectData.status === 'in-progress'
            ? 'In Progress'
            : 'Completed'}
        </div>
      </div>

      {/* Content Section */}
      <div className="lg:gap-4 lg:p-6 flex flex-1 flex-col gap-3 p-4">
        {/* Title with subtle animation */}
        <div className="flex items-start justify-between">
          <h3 className="text-text lg:text-xl line-clamp-2 text-lg font-bold transition-colors duration-300 group-hover:text-target">
            {projectData.name}
          </h3>
        </div>

        {/* Description with better typography */}
        <p className="text-text/80 lg:text-sm line-clamp-3 text-xs leading-relaxed">
          {projectData.description}
        </p>

        {/* Enhanced Skills Tags */}
        <div className="mt-auto flex flex-wrap gap-2">
          {projectData.Skills.slice(0, 4).map((tag, index) => (
            <span
              className="inline-flex items-center rounded-full bg-target/10 px-3 py-1 text-xs font-medium text-target transition-all duration-300 hover:scale-105 hover:bg-target/20"
              key={index}
            >
              {tag}
            </span>
          ))}
          {projectData.Skills.length > 4 && (
            <span className="bg-text/10 text-text/60 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium">
              +{projectData.Skills.length - 4} more
            </span>
          )}
        </div>

        {/* Action Footer */}
        <div className="border-text/10 flex items-center justify-between border-t pt-4">
          <div className="text-text/60 flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3" />
              <span>{projectData.featured ? 'Featured' : 'Project'}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={projectData.repo}
              target="_blank"
              rel="noreferrer"
              className="text-text/60 rounded-lg p-2 transition-all duration-300 hover:bg-target/10 hover:text-target"
              title="View source code"
            >
              <Code2 className="h-4 w-4" />
            </a>
            {projectData.url && (
              <a
                href={projectData.url}
                target="_blank"
                rel="noreferrer"
                className="text-text/60 rounded-lg p-2 transition-all duration-300 hover:bg-target/10 hover:text-target"
                title="View live demo"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </MotionDiv>
  )
}
