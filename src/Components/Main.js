import React from 'react';
import Hero from './Hero';
import About from './About';
import Facts from './Facts';
import Skills from './Skills';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Services from './Services';
import Contact from './Contact';

const Main = () => {
    return (
        <div>
            <main id='main' data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" className="scrollspy-example" tabIndex="0">
                <section id="hero" className="SectionActive d-flex flex-column justify-content-center align-items-center">
                    <Hero />
                </section>
                <section id="about" className="about SectionActive">
                    <About />
                </section>
                <section id="facts" className="facts">
                    <Facts/>
                </section>
                <section id="skills" className="skills section-bg">
                    <Skills/>
                </section>
                <section id="resume" className="resume">
                    <Resume/>
                </section>
                <section id="portfolio" className="portfolio section-bg">
                    <Portfolio/>
                </section>
                <section id="services" className="services">
                    <Services/>
                </section>
                <section id="contact" className="contact">
                    <Contact/>
                </section>
            </main>
        </div>
    );
}

export default Main;
