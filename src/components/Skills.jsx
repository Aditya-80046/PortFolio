import React from 'react'
import Skills from './data/skills.json'

function Skill() {
  return (
    <>
     <div className="container skills" id="skills" data-aos="flip-left" data-aos-duration="1000">
      <h1>
        Skills 
      </h1>
      <div className="items" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
      {Skills.map((data)=>(
        <>
          <div className="item" key={data.id}>
            <img src={`/assets/${data.imagesrc}`} alt="" />
            <h3>{data.tittle}</h3>
          </div>
        </>
      ))}
      </div>
      </div> 
    </>
  )
}

export default Skill
