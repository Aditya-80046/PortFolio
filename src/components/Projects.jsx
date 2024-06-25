import React from "react";
import Project from './data/projects.json'

function Projects() {
  return (
    <>
      <div className="container project" id="Projects" data-aos="flip-up" data-aos-duration="1000">
        <h1>Projects</h1>
        <div className="row d-flex justify-content-center align-item-center">
          {Project.map((data) => (
            <>
              <div className="div my-5 col-lg-4" key={data.id}>
                <div className="card bg-dark text-light" style={{width:'18rem',height:'400px'}}  data-aos="flip-right" data-aos-duration="1000">
                  <div className="img d-flex justify-content-center align-item-center p-3">
                  <img src={data.imagesrc}className="card-img-top" alt="..." style={{width:'200px', height:'200px',border:'2px soli black', borderRadius:'10px'}} />
                  </div>
                    <div className="card-body text-center">
                      <h5 className="card-title">{data.tittle}</h5>
                      <p className="card-text">{data.description}</p>
                      <a href={data.demo} className="btn btn-warning">Checkout</a>
                    </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
