import React from 'react'
import './card.css'

const Card = ({ name, price, img, category }) => {

    function tagColor(){
        if (category === "women's clothing") {
            return <span className="tag tag-pink">{category}</span>
        }
        if(category === "men's clothing"){
            return <span className="tag tag-purple">{category}</span>
        }
        else{
            return <span className="tag tag-teal">{category}</span>
        }
    }

  return (
    <div className="containerCard">

        <div className="card">
            <div className="card-header">
                <img src={img} alt={name} />
            </div>
            <div className="card-body">
            {/* <span className="tag tag-teal">{category}</span> */}
            {tagColor()}
            <h4>
                {name}
            </h4>
            <div className="user">
                <h2>L</h2>
                <div className="user-info">
                    <h5>$ {price}</h5>
                    <small>Carrito</small>
                </div>
            
            <div>
                <button className='btn btn-success button'>Ver mas...</button>
            </div>
            
            </div>

            </div>
        </div>


    </div>
  )
}

export { Card }