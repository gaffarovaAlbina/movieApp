import React from "react";
import { useLocation } from "react-router-dom";
import "./About.css";

function About() {
    console.log(useLocation())
    //console.log(useLocation())
    return (
        <div className="about__container">
          <span>О проекте: я сделал этот проект, потому что люблю фильмы</span>
        </div>
    )
}

export default About;