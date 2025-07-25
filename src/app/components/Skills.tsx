import Image from 'next/image'

import { MotionDiv } from '../lib/motion'
import { skillsData } from '../utils/data'
import { SectionContainer } from './SectionContainer'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
}

export const Skills = () => {
  return (
    <SectionContainer id="skills" title="Skills">
      <div className="flex flex-col items-center">
        {skillsData.map((cat) => (
          <div key={cat.category} className="mb-10 w-full max-w-4xl">
            <h3 className="text-accent mb-6 text-center text-xl font-extrabold sm:text-2xl">
              {cat.category}
            </h3>
            <MotionDiv
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-8"
            >
              {cat.items.map((skill) => (
                <MotionDiv
                  variants={item}
                  transition={{ duration: 0.3 }}
                  key={skill.name}
                  className="flex items-center gap-3 rounded-lg bg-secondary px-4 py-2 font-bold"
                >
                  <Image
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.img}`}
                    alt={skill.name}
                    width={40}
                    height={40}
                    className="sm:h-8 sm:w-8"
                  />
                  {skill.name}
                </MotionDiv>
              ))}
            </MotionDiv>
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}
