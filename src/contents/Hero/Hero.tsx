import React from "react";
import Animation from "./Animation";
import HeroImage from "../../assets/img/profile.png";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <div id="about" className="hero-container">
      <div className="hero-background">
        <Animation />
      </div>
      <div className="hero-inner-container">
        <div className="hero-left-container">
          <div className="hero-title">Hi, I am Alifma</div>
          <div className="hero-occupation">I am a Software Engineer</div>
          <div className="hero-description">The DEscription</div>
          <div className="hero-contant-button">Check it out</div>
        </div>
        <div className="hero-right-container">
          <img src={HeroImage} alt="hero-image" className="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
