import React from 'react'
import {Card} from '../../Card/card'
import './itemList.css'

const ItemList = ({prod}) => {
  return (
    <div className="container-flex">
        <h2 className="title">Productos</h2>
          <div  style={{display:"flex", flexWrap:"wrap", justifyContent:"space-evenly"}}>
          {prod && prod.map((prods => 
                    (<Card
                        key={prods.id}
                        name={prods.title}
                        price={prods.price}
                        img={prods.image}
                        category={prods.category}
                        />) 
                ))}
          </div>
    </div>
  )
}

export default ItemList

