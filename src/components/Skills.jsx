import React from 'react'
import Skills from './data/skills.json'

function Skill() {
  return (
    <>
     <div className="container skills">
      <h1>
        Skills 
      </h1>
      <div className="items">
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
