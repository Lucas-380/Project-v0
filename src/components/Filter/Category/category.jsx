import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card } from '../../Card/card'
import { api } from '../../../utils/api'

const Category = () => {
    const [prod, setProd] = useState([])
    const { categoria } = useParams()
    const endpoint = '?sort=desc'


    useEffect(() => {
            api.get(endpoint)
                .then(res => {
                    // console.log(res)
                    const { data } = res
                    setProd(data.filter(d => d.category === categoria))
                })
                .catch(err => console.log(err))
    }, [endpoint])
    
    // console.log(category);

    
  return (
    <div>
    <h2>CATEGORY</h2>
      <div className="container-flex" style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
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

export default Category