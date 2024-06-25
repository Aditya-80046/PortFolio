import React, { useEffect, useRef } from "react";
import Logo from "./data/logo.json";
import Typed from "typed.js";

function Home() {
  const introRef = useRef(null);
  useEffect(() => {
    const option = {
      strings: [
        "My Name is Aditya Srivastava",
        "Full Stack Developer",
        "Wordpress Developer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    const typed = new Typed(introRef.current, option);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id="Home">
        <div className="left" data-aos="fade-right" data-aos-duration="1000">
          <h1 ref={introRef}></h1>
          <a href="" className="btn btn-outline-warning my-2">
            Resume
          </a>
        </div>
        <div className="right" data-aos="fade-left" data-aos-duration="1000">
          <div className="img">
            <img src={`/assets/${Logo.imgsrc}`} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
