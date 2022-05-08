import Modal1 from "./Modal1";
import React, { useState } from "react";
import "../App.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Deals = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {openModal && <Modal1 closeModal={setOpenModal} />}

      <div className="rb-deals-hero-part">
        <p>LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</p>
        <button className="rb-hero-btn">Start order</button>
      </div>

      <div className="rb-hero-img-section">
        <img
          src="https://online.kfc.co.in/static/media/offer_deals_banner.777f20e1.svg"
          alt=""
        />
        <div className="rb-center-text">DEALS & OFFERS</div>
      </div>

      <div className="rb-card-section">
        <div className="rb-card-heading">NATIONAL OFFERS</div>
        <div className="rb-two-card-section">
          <div className="rb-first-card">
            <img
              src="https://online.kfc.co.in/static/media/Native_select%20a%20kfc_grey%20image.6e97ff02.svg"
              alt=""
            />
            <div className="rb-first-card-text">
              SELECT A KFC TO SEE LOCAL OFFERS
            </div>
            <div className="rb-first-card-btn">
              <Link to={`/deals/modal1`}>
                <button
                  className="rb-hero-btn first-card-btn"
                  onClick={() => {
                    setOpenModal(true);
                  }}
                >
                  Find a KFC
                </button>
              </Link>

              {/* <Modal1 /> */}
            </div>
          </div>

          <div className="rb-second-card">
            <div className="rb-red-card"></div>
            <div className="rb-second-card-text">
              SIGN IN TO SEE MORE EXCLUSIVE OFFERS & DEALS
            </div>
            <div className="rb-first-card-btn">
              <button className="rb-hero-btn second-card-btn">Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Deals;
