import React from 'react';
import '../App.css';
import { Button } from './Button'
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="" autoPlay loop muted />
            <h1> Radtke, Nicholas</h1>
            <h2>Full-Stack Developer</h2> 
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                Resume
                </Button>   
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                Technical Resume
                </Button> 
            </div>        
        </div>
    );
}

export default HeroSection;