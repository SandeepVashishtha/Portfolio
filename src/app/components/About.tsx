import Link from 'next/link'

import { MotionDiv } from '../lib/motion'
import { SectionContainer } from './SectionContainer'

import { MoveRight } from 'lucide-react'

export const About = () => {
  return (
    <SectionContainer id="about" title="About Me">
      <div className="flex items-center justify-between md:justify-center">
        <MotionDiv
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="flex max-w-2xl flex-col gap-6 text-xl md:text-center sm:text-lg"
        >
          <p>
            Hello, my name is{' '}
            <span className="font-bold text-target">Sandeep Vashishtha</span>.
            I’m a
            <span className="font-bold text-target">
              Certified Ethical Hacker
            </span>
            , and an experienced{' '}
            <span className="font-bold text-target">Java Developer</span>. I
            specialize in both front-end and back-end technologies and have
            expertise in frameworks like React, Next.js, Node.js, and
            Springboot. I’m also skilled in cloud platforms, including Google
            Cloud and Azure, for deploying scalable and secure applications. I
            have a strong focus on cybersecurity, blockchain development, and
            creating secure web applications.
          </p>
          <p>
            My portfolio highlights projects such as real-time collaborative
            tools, an AI-powered nutrition assistant, resume builders, and
            online code editors. Additionally, I’ve worked extensively with
            tools like TensorFlow and OpenCV for machine learning applications
            with Postman for API development and testing.
          </p>
          <p>
            I’m constantly exploring emerging technologies like Web3, Ethereum
            blockchain, and advanced cybersecurity practices. I am always eager
            to take on new challenges and collaborate with like-minded
            professionals in the tech community. Let’s connect and build
            something amazing!
          </p>

          <MotionDiv className="flex justify-start md:justify-center">
            <Link
              href="#contact"
              className="flex items-center gap-x-2 text-target transition-all hover:gap-x-3 hover:text-[#3385ff]"
            >
              Contact me <MoveRight />
            </Link>
          </MotionDiv>
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="flex flex-1 justify-end pl-8 md:hidden"
        >
          <div className="w-80 pb-10">
            <div className="flex flex-wrap justify-center gap-4 opacity-70">
              <span className="h-3 w-48 rounded-full bg-target"></span>
              <span className="h-3 w-32 rounded-full bg-secondaryHover"></span>
              <span className="h-3 w-20 rounded-full bg-target"></span>
              <span className="h-3 w-28 rounded-full bg-target"></span>
              <span className="h-3 w-14 rounded-full bg-secondaryHover"></span>
              <span className="h-3 w-20 rounded-full bg-target"></span>
              <span className="h-3 w-32 rounded-full bg-target"></span>
              <span className="h-3 w-32 rounded-full bg-secondaryHover"></span>
              <span className="h-3 w-32 rounded-full bg-secondaryHover"></span>
              <span className="h-3 w-20 rounded-full bg-target"></span>
              <span className="h-3 w-28 rounded-full bg-target"></span>
              <span className="h-3 w-14 rounded-full bg-secondaryHover"></span>
            </div>
          </div>
        </MotionDiv>
      </div>
    </SectionContainer>
  )
}
