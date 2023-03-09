// Import the React library.
import React from "react";
// Import a component named "About" from a file named "./components/About.js".
import About from "./components/About";
// Import a component named "Contact" from a file named "./components/Contact.js".
import Contact from "./components/Contact";
// Import a component named "Navbar" from a file named "./components/Navbar.js".
import Navbar from "./components/Navbar";
// Import a component named "Projects" from a file named "./components/Projects.js".
import Projects from "./components/Projects";
// Import a component named "Skills" from a file named "./components/Skills.js".
import Skills from "./components/Skills";
// Import a fetch function named "fetch-ring" from a file named "Ring.js" in v1/source/components folder.
import Ring from "./components/Ring2.js";
// Import a fetch function named "fetch-hub" from a file named "Hub.js" in v1/source/components folder.
import Hubspot from "./components/Hub2.js";
// Import a component named "Testimonials" from a file named "./components/Testimonials.js".
import Testimonials from "./components/Testimonials";

// Export a default function named "App" that returns a React component.
export default function App() {
  // Return the React component.
  return (
    // The component is a "main" element with the class "text-gray-400 bg-gray-900 body-font". Make sure to update componets list below.
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Ring />
      <Hubspot />
      <Testimonials />
      <Contact />
    </main>
  );
}
