import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="kmain-footer">
      <div className="kcontainer">
        <div className="ksymbol">
          <div>kfc</div>
          <div>kfc</div>
          <div>kfc</div>
        </div>
        <br></br>
        <br></br>
        <div className="kdeals">
          <h1>OFFERS & DEALS</h1>
          <a href="#">View All Deals </a>
        </div>
        <br></br>
        <br></br>
        <br></br>
        

        <div className="krow">
          <img
            src="https://images.ctfassets.net/wtodlh47qxpt/25FSYFuEtGct8NSrtpKe6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg"
            className="klogo"
          />

          {/* colum1 */}
          <div className="kcol">
            <h4>KFC Food</h4>
            <br></br>
            <ul className="klist">
              <li>Menu</li>
              <li>Order Lookup</li>
              <li>Gift Card</li>
            </ul>
          </div>
          {/* colum2 */}
          <div className="kcol">
            <h4>Support</h4>
            <br></br>
            <ul className="klist">
              <li>Get Help</li>
              <li>Contact Us</li>
              <li>KFC Feedback</li>
            </ul>
          </div>
          {/* colum3 */}
          <div className="kcol">
            <h4>Legal</h4>
            <br></br>
            <ul className="klist">
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Disclaimer</li>
              <li>Caution Notice</li>
            </ul>
          </div>
          {/* colum4 */}
          <div className="kcol">
            <h4>KFC India</h4>
            <br></br>
            <ul className="klist">
              <li>About KFC</li>
              <li>KFC Care</li>
              <li>Careers</li>
              <li>Our Golden Past</li>
            </ul>
          </div>
          <div className="kapps">
            <button><a href="##">Find KFC</a></button>
            <button><a href="##">Google Play</a></button>
            <button><a href="##">Apple store</a></button>
          </div>
        </div>

        <div className="klast">
          <p>Copyright © KFC Corporation 2021 All Rights Reserved</p>
          <div className="klinks">
            <a href="#">
              <img src="https://images.ctfassets.net/wtodlh47qxpt/4ZHyPA2EeaoP3aqtNDriBA/463462a9c27b0aa585e12b21ce3766e0/Social_Insta_White.svg" />
            </a>
            <a href="#">
              <img src="https://images.ctfassets.net/wtodlh47qxpt/dKiu2meLcfz2DNwsg7nZw/7194830b1ba6f25b158a23d6b2c4752c/Social_Facebook_White.svg" />
            </a>
            <a href="#">
              <img src="https://images.ctfassets.net/wtodlh47qxpt/78z9x0WwdkdXwGVK726EKX/6599ca34ec88e2a6f46d7d94ed85a8ad/Social_Twitter_White.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
