import React, { useState } from "react";
import { Link } from "react-router-dom";

// images
import JewelHero from "../assets/jewelled 1.png";
import Ordnhero from "../assets/ordained hero.png";
import Rubyhero from "../assets/ruby.a.png";
import EthHero from "../assets/domain a.png";

const ProWork = () => {
  const [projects, setProjects] = useState([
    {
      img: JewelHero,
      title: "Jewelled",
      description:
        " An e-commerce website built for a custom-made jewelry company created with React,TypeScript and TailwindCSS. It has an incorporated shopping cart the ability to filter while browsing products ",
      to: "/jewelled",
      btn: "view project >",
    },
    {
      img: Ordnhero,
      title: "Ordained Laundry",
      description:
        " An e-commerce application built with React and Emailjs for a Laundry Business where aside from browsing services, customers can enjoy seamless customer service",
      to: "/laundry",
      btn: "VIEW PROJECT >",
    },
    {
      img: Rubyhero,
      title: "Rubystore",
      description:
        "An e-commerce website built for a fashion company with an incorporated shopping cart where aside from browsing products and services, customers can enjoy seamless customer service.",
      to: "/rubystore",
      btn: "VIEW PROJECT >",
    },
    {
      img: EthHero,
      title: "ETHDomain",
      description:
        "EthDomain is a de-centralized domain name marketplace where you can list you can list your  Blockchain-based domain names and other people can buy them with their metamask account.",
      to: "/ethdomain",
      btn: " VIEW PROJECT >",
    },
  ]);
  return (
    <div className="project-items">
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <div className="project-img">
            <img
              src={project.img}
              alt="project.title"
              loading="lazy"
              style={{ borderRadius: "1rem" }}
            />
          </div>
          <h2 position="below" className="project_title">
            {project.title}
          </h2>
          <p position="below"> {project.description} </p>
          <Link to={project.to}>
            <p position="below" className="project_btn">
              {project.btn}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProWork;
