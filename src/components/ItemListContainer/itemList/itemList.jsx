import React from 'react'
import {Card} from '../../Card/card'

const ItemList = ({prod}) => {
  return (
    <div>
        <h2>ItemList</h2>
          <div container-flex style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
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

