import { UilReact } from "@iconscout/react-unicons";
import Minicontact from "../components/Minicontact";
import ProWork from "../components/ProWork";
// images
import Jewelledhero from "../assets/jewelled 1.png";
import Jewelled2 from "../assets/jewelled 2.png";
import Jewelled3 from "../assets/jewelled 3.png";
import Jewelled4 from "../assets/jewelled 4.png";

const Jewelled = () => {
  return (
    <div className="laundry">
      <div className="project-description">
        <h1>Jewelled</h1>
        <p>
          An e-commerce website built for a custom-made jewelry company created
          with React,TypeScript and TailwindCSS. It has an incorporated shopping
          cart where aside from browsing products, customers can filter through
          the search and can add an item to cart, remove an item from cart and
          remove from the item from cart.
        </p>
      </div>
      <div className="tech-stack">
        <ul className="stack">
          <h4>STACK</h4>
          <li>React</li>
          <li>Typescript</li>
          <li>Tailwind CSS</li>
          <li>HTML</li>
          <li>Vercel</li>
        </ul>
        <div className="live">
          <h4>LIVE</h4>
          <a
            href="https://jewelled-fashion-store-u3a1.vercel.app/"
            rel="noreferrer"
            target="_blank"
          >
            <p>View Site</p>
          </a>
        </div>
      </div>
      <div className="ordn-img">
        <img src={Jewelledhero} alt="hero" />
      </div>
      <div className="purpose-goal">
        <h2>Project Purpose and Goal</h2>
        <p className="purpose-description">
          This project included 3 phases and iterations of the site. Phase 1 was
          designed introduce users to jewelled products.Phase 2 was to ensure
          the users enjoy ease and seamless experience during product search by
          filtering their input search and displaying products accordingly.
          Phase 3 is designed to ensure users can add,remove or delete products
          from the cart.
        </p>
        <div className="stack-explanation">
          <div className="tools">
            <div className="tool">
              <UilReact size="24" />
              React
            </div>

            <div className="tool">Vercel</div>
            <div className="tool">Typescript</div>
          </div>
          <div className="explanation">
            <h3> Web Stack and Explanation</h3>
            <p>
              React Context Api and hooks are used throughout the project to
              maintain the user cart items, the ability to add,remove or delete
              the cart items and other shopping data to be display universally
              without the use for Redux
            </p>
            <p>
              Typescript was used because it offers a better development
              experience helping to detect errors beforehand.
            </p>
            <p>
              Vercel is also an obvious choice for deployment because of its
              speed and reliability.
            </p>
          </div>
        </div>
        <div className="project-images">
          <img src={Jewelled2} alt="reasons" />
          <img src={Jewelled4} alt="reasons" />
        </div>
      </div>
      <div className="problems-container">
        <div className="problems-thought-process">
          <h2> Problems and Thought Process</h2>
          <p>
            Like most projects, I ran into a few bumps along the way, one
            particularly difficult was the use of Typescript.It was my first
            time using Typescript.Because of this project,I realized how the
            logic of Typescript works.
          </p>
          <p>
            I worked hard to keep components as reusable as possible and
            utilized props for many slight variations. I also used Tailwind CSS,
            because of the structure of CSS-in-Js is much clearer and prevents
            overrides.
          </p>
        </div>

        <div className="jewelled-img">
          <img src={Jewelled3} alt="hero" />
        </div>
        <div className="lesson">
          <h2>Lessons Learned </h2>
          <p>
            I could spend all day describing the lessons that i learned while
            working on this project, but the most important ones involved my
            newfound understanding of React Context Api and TypeScript. I have
            learnt a lot of lessons regarding the logic behind the language and
            how to use it.
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

export default Jewelled;
