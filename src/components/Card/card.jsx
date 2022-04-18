import React from 'react'
import './card.css'

const Card = ({ name, price, img }) => {
  return (
    <div className='card-container'>
        <img src={img} alt={name}/>
        <div className='description'>
            <h3>{name}</h3>
            <ul>
                <li><b>Title:</b> {name}</li>
                <li><b>Price:</b> {price}</li>
            </ul>
        </div>
    </div>
  )
}

export { Card }

