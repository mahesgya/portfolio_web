import React from "react";
import "../Style/Home.css";
import { forwardRef } from "react";

const Home = ({text},Homeref) => {
  return (
    <section id="sectionHome" ref={Homeref}>
      <div className="containerHome">
        <h1 className="fullName">ANARGYA ISADHI MAHESWARA</h1>
        <h4 className="frontEnd">FRONT-END DEVELOPER</h4>
        <div className="contactHome">
          <a href="https://www.instagram.com/anargya_gy/">
            <img src="Images/InstagramWhite.png" alt="" />
          </a>
          <a href="https://github.com/mahesgya">
            <img src="Images/GithubWhite.png" alt="" />
          </a>
          <a href="mailto:anargya115@gmail.com">
            <img src="Images/GoogleWhite.png" alt="" />
          </a>
          <a href="https://x.com/Mahesgya">
            <img src="Images/TwitterWhite.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/anargya-isadhi-maheswara-64a747285/">
            <img src="Images/LinkedinWhite.png" alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default forwardRef(Home);
