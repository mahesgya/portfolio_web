import React from "react";
import "../Style/About.css";
import { Link } from "react-router-dom";
import { forwardRef } from "react";

const About = ({text},Aboutref) => {
  return (
    <div id="aboutme" ref={Aboutref}>
      <h4 className="h4Atas">
        ABOUT <span>MYSELF</span>
      </h4>
      <div className="containerAbout">
        <div className="leftAbout">
          <h1>
            HI THERE! I'M <span>ARGY</span>
          </h1>
          <p>
            An undergraduate Computer Science student from IPB University. I have a deep passion for technology and computers. I enjoy solving complex problems and continuously expanding my knowledge in the ever-evolving field of computer
            science. Whether it’s coding, exploring new technologies, or developing innovative solutions, I am always eager to learn and grow in this dynamic industry.
          </p>
          <div className="divAboutHP">
            An undergraduate Computer Science student from IPB University. I have a deep passion for technology and computers. I enjoy solving complex problems and continuously expanding my knowledge in the ever-evolving field of computer
            science.
          </div>
          <div className="divButton">
            <a href="https://www.linkedin.com/in/anargya-isadhi-maheswara-64a747285/">
              <img src="Images/LinkedinBlue1.png" alt="" className="buttonIcon"/>
              <p>LINKED IN</p>
            </a>
            <a href="https://www.instagram.com/anargya_gy/">
                <img src="Images/PhoneBlue.png" alt="" className="buttonIcon"/>
              <p>CONTACT ME</p>
            </a>
          </div>
        </div>
        <div className="rightAbout">
          <img src="Images/FotoWajah.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default forwardRef(About);
