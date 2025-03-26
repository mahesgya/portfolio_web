import React from "react";
import "../Style/Ormawa.css";
import { Link } from "react-router-dom";
import { forwardRef } from "react";
const Ormawa = ({text}, Ormawaref) => {
  return (
    <div id="Ormawa" ref={Ormawaref}>
      <h4 className="h4AtasOrmawa">
        MY <span>PORTFOLIO</span>
      </h4>
      <div className="containerOrmawa">
        <div className="leftOrmawa">
          <h4>Ormawa Eksekutif PKU IPB Website</h4>
          <img src="Images/OrmawaFoto.png" alt="" className="imgOrmawa" />
          <a className="divOrmawa" href="https://ormawaeksekutifpku.com/">
            <a href="https://ormawaeksekutifpku.com/">WEBSITE LINK</a>
          </a>
          <div className="rightOrmawa2">
          <p>
            Ormawa Eksekutif PKU IPB website project has successfully increased member engagement, streamlined information dissemination, and strengthened communication between the organization and its stakeholders. With this platform,
            Ormawa Eksekutif PKU IPB can more effectively organize and promote activities, thereby achieving the organization's goals.
          </p>
        </div>
        </div>
        <div className="rightOrmawa">
          <p>
            Ormawa Eksekutif PKU IPB website project has successfully increased member engagement, streamlined information dissemination, and strengthened communication between the organization and its stakeholders. With this platform,
            Ormawa Eksekutif PKU IPB can more effectively organize and promote activities, thereby achieving the organization's goals.
          </p>
        </div>
      </div>
      <div className="containerAkuCuciin">
        <div className="rightOrmawa">
          <p>
          AkuCuciin website significantly enhances the convenience of finding and using laundry services in the IPB Dramaga area. By providing a user-friendly platform with valuable local information, the website helps streamline the laundry experience for students and residents, fostering greater customer satisfaction and engagement with our brand.
          </p>
        </div>
        <div className="leftOrmawa">
          <h4>AkuCuciin Website</h4>
          <img src="Images/AkuCuciinFoto.png" alt="" className="imgOrmawa" />
          <a className="divOrmawa" href="https://akucuciin.com/">
            <a href="https://akucuciin.com/">WEBSITE LINK</a>
          </a>
          <div className="rightOrmawa2">
          <p>
          AkuCuciin website significantly enhances the convenience of finding and using laundry services in the IPB Dramaga area. By providing a user-friendly platform with valuable local information, the website helps streamline the laundry experience for students and residents, fostering greater customer satisfaction and engagement with our brand.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(Ormawa);
