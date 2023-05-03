import React from "react";
import Minicontact from "../components/Minicontact";
import Timer from "../assets/newBegining.jpg";
import Project from "../assets/chalkwall.jpg";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact">
      <Minicontact />
      <div className="contact-info ">
        <div className="contact-text">
          <p> I'm a lot cooler on linkedin</p>
          <NavLink
            to="https://www.linkedin.com/in/victory-martins"
            target="_blank"
          >
            <p>see more {">"}</p>
          </NavLink>
        </div>
        <div className="contact-img">
          <img src={Timer} alt="timer" />
          <img src={Project} alt="project image" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
