import React from "react";

function Navbar() {
  return (
    <>
      <div className="container nav-bar" data-aos="fade-down" data-aos-duration="1000">
        <div className="left nav-items">Portfolio</div>
        <div className="right">
          <a href="#Home" className="nav-items">Home</a>
          <a href="#skills" className="nav-items">Skills</a>
          <a href="#Projects" className="nav-items">Projects</a>
          <a href="#Contact" className="nav-items">Contact</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
