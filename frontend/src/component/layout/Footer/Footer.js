import React from "react";
import logo from "../../../images/zerogreen-logo.png";
import ig from "../../../images/ig.png";
import fb from "../../../images/fb.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
        <div className="footer-content">
            <img src={logo} alt="logo" />
            <h4>ZEROGREEN is a website platform that support using zero waste. </h4>
            <div className="socials">
                <a href="https://www.instagram.com/near_roth/"><img src={ig} alt="ig" /></a>
                <a href="https://www.instagram.com/near_roth/"> <img src={fb} alt="fb" /></a>
            </div>
            <h5>Location: 74, Truong Chinh, Phuong Mai, Dong Da, Hanoi</h5>
            <p>Copyrights 2022 &copy; ZeroGreen</p>
        </div>

     

    </footer>
  );
};

export default Footer;