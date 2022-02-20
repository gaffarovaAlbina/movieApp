import React from "react";
import { useLocation } from "react-router-dom";
import "./About.css";
import "./Home.css"

function About() {
    return (
      <div className="container">
        <div className="about__container">
          <span>О проекте: я сделал этот проект, потому что люблю фильмы</span>
        </div>
      </div>
    )
}

export default About;