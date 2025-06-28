"use client"
import React from 'react'
import Image from 'next/image';
import { FloatingWhatsApp } from 'react-floating-whatsapp'





function page() {
  return (
    <div>
      {/* secion */}
          <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col justify-center items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 m-10 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="text-8xl text-amber-400">Hi!</h1>
                <h2 className="title-font sm:text-4xl mb-4 font-medium text-amber-200">
                  <br className="hidden lg:inline-block" /> ITs Me M. Shahbaz
                  <br className="hidden lg:inline-block" />
                  Web Developer
                </h2>
                <p className="text-cyan-900">
                  Passionate Web Developer specializing in creating responsive, user-friendly websites and applications.
                  Proficient in HTML, CSS, JavaScript, and modern frameworks like React.
                  Committed to delivering clean, efficient code and seamless digital experiences.
                </p>
              </div>
      
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Image
                  className="object-cover object-center rounded-2xl"
                  alt="hero"
                  src="/img6.jpeg" // ✅ Use relative path from public folder
                  width={500}
                  height={500}
                  priority
                />
              </div>
            </div>
          </section>
      
{/* section */}
<section >
  <div className="container px-5 py-24 mx-auto mb-30 flex flex-wrap">
    <div className="lg:w-2/3 mx-auto">
      <div className="flex flex-wrap w-full  py-32 px-10 relative mb-4">
        <Image
                className="w-full object-cover h-full object-center block opacity-90 absolute inset-0 rounded-xl"
                src="/img10.jpeg"
                alt="Team Background"
                fill
                style={{ objectFit: "cover", zIndex: -1 }}
              />
        <div className="text-center relative z-10 w-full">
          <h2 className="text-2xl font-medium title-font text-white mb-2">My Team Members</h2>
          <p className="leading-relaxed text-white">All Team Members with Team Leader</p>
        </div>
      </div>
    </div>
  </div>
</section>
<FloatingWhatsApp 
phoneNumber='+923194573046'
accountName='M. Shahbaz'
avatar='../img6.jpeg'
chatMessage='Hi! How are you'
statusMessage='Availible 24/7'
darkMode={true}
/>   
</div>
  )

}

export default page
