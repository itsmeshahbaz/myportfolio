'use client';

import React from 'react';
import Image from 'next/image';

function Intro() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col justify-center items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 m-10 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-8xl text-amber-400">Hi!</h1>
          <h2 className="title-font sm:text-4xl mb-4 font-medium text-amber-200">
            <br className="hidden lg:inline-block" /> IT's Me M. Shahbaz
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
  );
}

export default Intro;
