import { React, useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Hero = () =>
{

    const el = useRef( null );
    useEffect( () =>
    {
    const typed = new Typed(el.current, {
      strings: ["Web Developer", "Photoshop Designer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
        startDelay: 300,
        typeSpeed: 150,
        backSpeed: 150,
        backDelay: 200,
        loop: true,
        showCursor:true,
        cursorChar: "|"
    }); 

    // Destropying
        return () =>
        {
            typed.destroy();
        };
    }, [] );

    return (
            <div className="hero-container" data-aos="fade-in">
                <h1>Mohamed Abo-Elmaaty</h1>
                <p> I'm <span ref={ el }></span></p>
            </div>
        
    );
}

export default Hero;
