import React, { useState } from "react";
import "./Modal.css";
// import "../App.css";
import { Link } from "react-router-dom";

function Modal2() {
  const [name, setName] = useState("");
  const [headText, setHeadText] = useState("");

  function onChange(e) {
    setName(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    setHeadText(name);
  }

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <div className="title">
            <h1>DELIVERY ADDRESS</h1>
          </div>
          {/* <button
            onClick={() => {
              closeModal(false);
            }}
          >
            X
          </button> */}
        </div>
        <div className="body body-2">
          <input
            onChange={onChange}
            type="text"
            placeholder="Enter your delivery address"
            name="address-text"
            id="address-text"
            value={name}
          />
          <button className="confirm-btn" onClick={onSubmit}>
            Confirm
          </button>
        </div>
        <div className="order-place-div">{headText}</div>
        <div className="next-btn-div">
          <Link to={`/deals/modal3`}>
            <button className="next-btn">Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Modal2;
