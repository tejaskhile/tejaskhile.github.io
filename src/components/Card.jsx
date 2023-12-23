import React from 'react'

const Card = (props) => {
  return (
    <div className='card-container'>
      <div className='circle'>
         <i className={props.image} style={{color: "#ffffff"}}></i>
      </div>
      <div>
        <h4> {props.name} </h4>
      </div>
      <div>
        <p>
            {props.para}
        </p>
      </div>
    </div>
  )
}

export default Card
