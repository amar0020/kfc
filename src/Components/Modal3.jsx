import React, { useState } from "react";
import "./Modal.css";
// import "../App.css";
import { Link } from "react-router-dom";

function Modal3() {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <div className="title">
            <h1>SCHEDULE ORDER</h1>
          </div>
          {/* <button
            onClick={() => {
              closeModal(false);
            }}
          >
            X
          </button> */}
        </div>
        <div className="body-3">
          <div className="order-type">
            <p>ORDER TYPE</p>
            <p>Delivery</p>
          </div>

          <div className="order-type">
            <p>YOUR LOCATION</p>
            <p>Jaipur</p>
          </div>

          <div className="order-type">
            <p>SCHEDULE FOR YOUR ORDER</p>
            <p>Today</p>
          </div>
        </div>
        <div className="btn-div-3">
          <Link to={`/`}>
            <button className="confirm-btn-3">Confirm</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Modal3;
