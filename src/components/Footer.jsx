import React from "react";
import "../Style/Footer.css";
import { forwardRef } from "react";
const Footer = ({text},contactRef) => {
  return (
    <footer id="Footer" ref={contactRef}>
      <div className="Footer-B">
        <div className="Footer-B1">
          <img src="Images/Logo2.png" alt="" className="logo-Footer" />
          <p>Platform digital yang dirancang khusus untuk memudahkan kehidupan mahasiswa dalam mencari dan menggunakan jasa laundry agar lebih praktis</p>
          
        </div>
        <div className="Footer-B2">
          <div className="Footer-Pelengkap">
            <h4>EXPLORE</h4>
           
            <p>Home Page</p>
            <p>About Us Page</p>
            <p>Service Page</p>
            <p>Contact</p>
           
          </div>
          <div className="Footer-Pelengkap">
            <h4>VISIT</h4>
         
            <a href="https://akucuciin.com/">AkuCuciin</a>
            <a href="https://ormawaeksekutifpku.com/">Ormawa Eksekutif PKU</a>
          </div>
          <div className="Footer-Pelengkap">
            <h4>CONTACT</h4>
            
            <a href="https://wa.me/6285849373612" className="Footer-Akhir">
              <img src="Images/PhoneWhite.png" alt="" />
              <p className="emailFot">(+62)858-4937-3612</p>
            </a>
            <a className="Footer-Akhir" href="mailto:anargya115@gmail.com">
              <img src="Images/GoogleWhite.png" alt="" />
              <p className="emailFot">anargya115@gmail.com</p>
            </a>
            <a href="https://www.instagram.com/anargya_gy/" className="Footer-Akhir">
              <img src="Images/InstagramWhite.png" alt="" />
              <p className="emailFot">anargya_gy</p>
            </a>
            <a href="https://www.linkedin.com/in/anargya-isadhi-maheswara-64a747285/" className="Footer-Akhir">
              <img src="Images/LinkedinWhite.png" alt="" />
              <p className="emailFot">Linked In</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default forwardRef(Footer);
