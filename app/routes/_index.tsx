import React from 'react';

import type { MetaFunction } from "@remix-run/node";
import Header from '~/components/header';
import Hero from '~/components/hero';
import About from '~/components/about';
import Projects from '~/components/projects';

import '../styles/index.css';
import Contact from '~/components/contact';

export const meta: MetaFunction = () => {
  return [
    { title: "Arkadiusz Grondys Portfolio" },
    { name: "description", content: "Welcome to my portfolio site!" },
  ];
};

export default function Index() {
    const handleNavClick = (id: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
  return (
    <div className="wrapper flex flex-col  items-center justify-start">
        <Header handleNavClick={handleNavClick} />
        <div id="hero">
        <Hero handleNavClick={handleNavClick}/>
        </div>
        <div id="about">
            <About/>
        </div>
        <div id="projects">
            <Projects/>
        </div>
        <div id='contact'>
            <Contact/>
        </div>
    </div>
  );
}
