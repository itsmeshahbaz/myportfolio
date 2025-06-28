// "user client"

import React from 'react'
import Intro from '../../components/Intro'
import Education from '../../components/Education'
import Experience from '../../components/Experience'
import Skills from '../../components/Skills'

function About() {
  return (
    <div >
      <Intro />
      <div>
        <section className=" text-black body-font ">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-black">The purpose of learning is growth, and our minds, unlike our bodies, can continue growing as we continue to live</h1>
      <p className="mb-8 leading-relaxed text-black">I'm a skilled software developer with experience in JavaScript, and expertise in frameworks like React, Node.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!</p>
      
    </div>
  </div>
</section>

      </div>
      <Education />
      <Skills />
      <Experience />
    </div>
  )
}

export default About
