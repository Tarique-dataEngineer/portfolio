import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
};

export default Home;