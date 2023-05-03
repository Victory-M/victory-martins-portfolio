import Minicontact from "../components/Minicontact";
import ProWork from "../components/ProWork";

// images
import DomainA from "../assets/domain a.png";
import DomainB from "../assets/domain b.png";

const Ethdomain = () => {
  return (
    <div className="laundry">
      <div className="project-description">
        <h1>ETHDomain</h1>
        <p>
          EthDomain is a de-centralized domain name marketplace where you can
          list your blockchain-based domain names and other people can buy them
          with their metamask wallet. This dapp is powered by NFTs using the
          ERC-721 Non Fungible Token Standard. This decentralized application
          required a lot of heaving lifting to create a connection to the
          blockchain, create a smart contract to ensure that the users can buy
          and own blockchain-based domain names.
        </p>
      </div>
      <div className="tech-stack">
        <ul className="stack">
          <h4>STACK</h4>
          <li>Solidity</li>
          <li>React</li>
          <li>Metamask</li>
          <li>Hardhat</li>
          <li>Vercel</li>
        </ul>
        <div className="live">
          <h4>LIVE</h4>
          <a
            href="https://eth-domain.vercel.app/"
            rel="noreferrer"
            target="_blank"
          >
            <p>View Site</p>
          </a>
        </div>
      </div>
      <div className="ordn-img">
        <img src={DomainA} alt="hero" />
      </div>
      <div className="purpose-goal">
        <h2>Project Purpose and Goal</h2>
        <p className="purpose-description">
          This project included 3 phases and iterations of the site. Phase 1
          involves creating a smart contract, integrating it with Blockchain and
          also integrating it with Metamask. Phase 2 simply gives the users the
          ability to connect their metamask account to the dapp. Phase 3 is by
          far the largest and most complex, as it provides the ability to buy
          and own the domain names listed.
        </p>
        <div className="stack-explanation">
          <div className="tools">
            <div className="tool">
             
              Solidity
            </div>
            <div className="tool">React</div>
            <div className="tool">Ethers.js</div>
            <div className="tool">Metamask</div>
            <div className="tool">Vercel</div>
          </div>
          <div className="explanation">
            <h3> Web Stack and Explanation</h3>
            <p>
              I used Solidity in developing the smart contract because it
              provides a stable and more flexible coding patterns for smart
              contracts and also because it provides a secure, reliable and
              accurate medium for various sources in framing smart contracts
              between two parties.
            </p>
            <p>
              React made the most sense for the frontend of this de-centralized
              application because it enabled me to build a dynamic user
              interface quite quickly and Ethers.js is a lightweight Javascript
              library that connect the Javascript library with the Smart
              Contract and enables the user to connect to the blockchain and
              display data to the user.
            </p>
            <p>
              Metamask was used because it allows users to access their Ethereum
              wallet through a browser extension or a mobile app. Vercel is also
              an obvious choice for deployment because of its speed and
              reliability.
            </p>
          </div>
        </div>
        <div className="ordn-img">
          <img src={DomainB} alt="reasons" />
        </div>
      </div>
      <div className="problems-container">
        <div className="problems-thought-process">
          <h2> Problems and Thought Process</h2>
          <p>
            Like most projects, I ran into a few bumps along the way, one
            particularly difficult area was organization and structure of the
            code.Because of this project size, I realized how important
            maintaining an organized structure would be.
          </p>
          <p>
            I worked hard to keep components as reusable as possible and
            utilized props for many slight variations. I used custom CSS in
            styling the components.
          </p>
        </div>

        <div className="lesson">
          <h2>Lessons Learned </h2>
          <p>
            I could spend all day describing the lessons that i learned while
            working on this project, but the most important ones involved my
            newfound understanding of React, Solidity,Metamask, Hardhat, Git
            management and Ethers.js. As my first large project using Solidity,
            I learned a lot of lessons regarding writing Smart Contracts, code
            structure and organization.
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

export default Ethdomain;
