import React from 'react'
import './itemDetail.css'
import { Link } from 'react-router-dom'

const ItemDetail = ({prod}) => {
    
    const {title, price, id, description, image, rating, category} = prod


  return (
    <div className="bodyItemDetail mt-5">
        <div className="card-Individual">
            <div className='back'>
                <Link to="/">
                    <div className="arrow">-</div>
                </Link>
                Volver
                <Link to={`/${category}`}>
                    <div className="heart">+</div>
                </Link>
                
            </div>

           <div className='containerCard'>
               
                <div className="photo">
                    <img src={image}/>
                </div>
                <div className="description-Individual">
                    <h2>{title}</h2>
                    <h4>{category}</h4>
                    <h1>$ {price}</h1>
                    <p>{description}</p>
                    <button className='botonCarrito botonDetail'>Añadir al Carrito</button>
                    <button className='botonFinalizar botonDetail'>Finalizar Compra</button>
                </div>

           </div> 

        </div>
    </div>

  )
}

export default ItemDetail