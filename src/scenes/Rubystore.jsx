import Minicontact from "../components/Minicontact";
import ProWork from "../components/ProWork";
// images
import RubyHero from "../assets/ruby.a.png";
import RubyB from "../assets/ruby.b.png";
import RubyC from "../assets/ruby.c.png";

const Rubystore = () => {
  return (
    <div className="laundry">
      <div className="project-description">
        <h1>Rubystore</h1>
        <p>
          Rubystore is a React Application built for a Fashion Company.I built
          this project from scratch with React and Bootstrap. This e-commerce
          application required a lot of heaving lifting to create a universal
          cart and an overall shopping experience as well as to introduce the
          product and include a contact page.
        </p>
      </div>
      <div className="tech-stack">
        <ul className="stack">
          <h4>STACK</h4>
          <li>React</li>
          <li>Context Api</li>
          <li>Bootstrap</li>
          <li>HTML</li>
          <li>Vercel</li>
        </ul>
        <div className="live">
          <h4>LIVE</h4>
          <a
            href="https://rubystore.vercel.app/"
            rel="noreferrer"
            target="_blank"
          >
            <p>View Site</p>
          </a>
        </div>
      </div>
      <div className="ordn-img">
        <img src={RubyHero} alt="hero" />
      </div>
      <div className="purpose-goal">
        <h2>Project Purpose and Goal</h2>
        <p className="purpose-description">
          {" "}
          This project included 2 phases and the iterations of the site. Phase 1
          was designed to introduce users to Rubystore services and the reasons
          they should hire them. Phase 2 was the largest and most complex,as it
          includes the full shop and a cart pages as well the logic that goes
          with it.{" "}
        </p>
        <div className="stack-explanation">
          <div className="tools">
            <div className="tool">
              <UilReact size="24" />
              React
            </div>
            <div className="tool">Context Api</div>
            <div className="tool">Bootstrap</div>
            <div className="tool">Vercel</div>
          </div>
          <div className="explanation">
            <h3> Web Stack and Explanation</h3>
            <p>
              React made the most sense for the web application because it is
              easy to make component reusable.{" "}
            </p>
            <p>
              React hooks are also used throughout the project to maintain the
              user cart items and allows the cart count and other shopping data
              to be displayed universally with the use of Context Api. Vercel
              is also an obvious choice for deployment because of its speed and
              reliability.
            </p>
          </div>
        </div>
        <div className="ordn-img">
          <img src={RubyB} alt="reasons" />
        </div>
      </div>
      <div className="problems-container">
        <div className="problems-thought-process">
          <h2> Problems and Thought Process</h2>
          <p>
            {" "}
            Like most projects, I ran into a few bumps along the way, one
            particularly difficult area was organization and structure of the
            code.Because of this project size, I realized how important
            maintaining an organized structure would be
          </p>
          <p>
            I worked hard to keep components as reusable as possible and
            utilized props for many slight variations. I also used Bootstrap,
            because of the structure of CSS-in-Js is much clearer and prevents
            overrides. It also helps to position and style things nicely without
            need much our own CSS{" "}
          </p>
        </div>

        <div className="ordn-img">
          <img src={RubyC} alt="hero" />
        </div>
        <div className="lesson">
          <h2>Lessons Learned </h2>
          <p>
            I could spend all day describing the lessons that i learned while
            working on this project, but the most important ones involved my
            newfound understanding of React, React Hooks, Git management and
            fetching Api. I learnt a lot of lessons regarding code structure and
            organization. When I first began, I would write sloppy code and move
            on but I now spend a lot more time refactoring and improving every
            line of code I write for the best readability and far fewer
            headaches.
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

export default Rubystore;
