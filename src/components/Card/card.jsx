import React from 'react'
import './card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faEye} from '@fortawesome/free-solid-svg-icons'

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
                {tagColor()}
                <p>
                    {name}
                </p>
                <div className="usuario">
                    <div className='logo'></div>
                    <div className="user-info">
                        <h5>$ {price}</h5>
                    </div>
                    <div className='icons'>
                        <FontAwesomeIcon className='icon-eye' icon={faEye} />
                        <FontAwesomeIcon className='icon-cart' icon={faCartShopping} />
                    </div>
                </div>
            </div>
        </div>


    </div>
  )
}

export { Card }