/* 
  This is a React component file "about.js". 
  It defines a functional component "About" that 
  returns an HTML structure to display information 
  about the person.
*/

import React from "react";
import { css } from 'react';

// Define the "About" functional component
export default function About() {
  return (
    // The HTML structure for the about section
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          Hi, I'm Robert and I am passionate about Customer Success Management and Strategy.
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed">
          Don't let <a href="https://www.forbes.com/sites/blakemorgan/2019/09/24/50-stats-that-prove-the-value-of-customer-experience/?sh=15fff5c4ef22" class="text-pink-600 font-bold">75%</a> of your accounts fall into the hands of your competitors. Choose a CSM with both hard and soft skills to quickly resolve problems and keep your accounts from experiencing long ticket times. Let's chat and secure the success of your client's together!

          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
