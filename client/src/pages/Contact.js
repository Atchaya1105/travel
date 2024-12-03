import React from "react";
import logo from "../assets/group.png";

const Contact = () => {
  return (
    <div className="container mt-2">
      <h2 className="display-6">Contact</h2>
      <div className="row mb-3">
        <div className="col">
          <img
            src={logo}
            width="25%"
            alt="Team Procedural"
            className="rounded mx-auto d-block"
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <h2 className="display-6">Darshan V V </h2>
          <a href="tel:7373737373">Call Darshan V V</a>
        </div>
        <div className="col">
          <h2 className="display-6">Janarthanan P S</h2>
          <a href="tel:9393939393">Call Janarthanan P S</a>
        </div>
        <div className="col">
          <h2 className="display-6">Atchaya V</h2>
          <a href="tel:9595959595">Call Atchaya V</a>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
