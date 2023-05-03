import React from "react";


import Minicontact from "../components/Minicontact";

// images
import Ordnhero from "../assets/ordained hero.png";
import Reasons from "../assets/Ordained reasons.png";
import Contactform from "../assets/ordain contact.png";
import Perks from "../assets/ordain perks.png";
import ProWork from "../components/ProWork";

const Laundry = () => {
  return (
    <div className="laundry">
      <div className="project-description">
        <h1>Ordained Laundry</h1>
        <p>
          Ordained Laundry is a React Application built for a Laundry and dry
          cleaning company.I built this project from scratch with React and
          Emailjs. This e-commerce application required a lot of heaving lifting
          to create an overall visitors and customers experience as well as to
          introduce the product, the perks of using the services of the business
          and include a contact page.
        </p>
      </div>

      <div className="tech-stack">
        <ul className="stack">
          <h4>STACK</h4>
          <li>React</li>
          <li>Emailjs</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Vercel</li>
        </ul>
        <div className="live">
          <h4>LIVE</h4>
          <a
            href="https://ordained-laundry-services.vercel.app/"
            rel="noreferrer"
            target="_blank"
          >
            <p>View Site</p>
          </a>
        </div>
      </div>
      <div className="ordn-img">
        <img src={Ordnhero} alt="hero" />
      </div>
      <div className="purpose-goal">
        <h2>Project Purpose and Goal</h2>
        <p className="purpose-description">
          This project included 2 phases and iterations of the site. Phase 1 was
          designed to introduce users to Ordained Laundry services and the
          reasons they should hire them. Phase 2 was the largest and most
          complex,as it includes the full shop and a fully functional email,
          providing a way to hire their services{" "}
        </p>
        <div className="stack-explanation">
          <div className="tools">
            <div className="tool">
             
              React
            </div>
            <div className="tool">Emailjs</div>
            <div className="tool">Vercel</div>
          </div>
          <div className="explanation">
            <h3> Web Stack and Explanation</h3>
            <p>
              React made the most sense for the web application because it is
              easy to make component reusable.{" "}
            </p>
            <p>
              React hooks are also used and Vercel is also an obvious choice
              for deployment because of its speed and reliability.
            </p>
          </div>
        </div>
      </div>
      <div className="project-images">
        <img src={Perks} alt="reasons" />
        <img src={Contactform} alt="reasons" />
      </div>

      <div className="problems-container">
        <div className="problems-thought-process">
          <h2> Problems and Thought Process</h2>
          <p>
            {" "}
            Like most projects, I ran into a few bumps along the way, one
            particularly difficult area was organization and structure of the
            code.Because of this project siz, I realized how important
            maintaining an organized structure would be
          </p>
          <p>
            I worked hard to keep components as reusable as possible and
            utilized props for many slight variations.
          </p>
        </div>

        <div className="ordn-img">
          <img src={Reasons} alt="hero" />
        </div>
        <div className="lesson">
          <h2>Lessons Learned </h2>
          <p>
            I could spend all day describing the lessons that i learned while
            working on this project, but the most important ones involved my
            newfound understanding of React, React Hooks, Git management and
            Emailjs. As my first large project using React, I learned a lot of
            lessons regarding code structure and organization.
          </p>
        </div>
      </div>
      <div className="other-work">
        <h2>Other Projects</h2>
        <div>
          <ProWork />
        </div>
      </div>
      <Minicontact />
    </div>
  );
};

export default Laundry;
