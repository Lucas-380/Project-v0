import React, { useState, useEffect } from "react";
import { api } from '../../utils/api'
import { Card } from "../Card/card";

const ItemListContainer = ({ greeting }) => {

  const endpoint = '?limit=6'
  const [prod, setProd] = useState([])

    useEffect(() => {
        setTimeout(() => {
            api.get(endpoint)
                .then(res => {
                    // console.log(res)
                    const { data } = res
                    setProd(data)
                })
        }, 2000);
    }, [endpoint])

    return (
        <div>
            { prod && prod.map((prods => 
                    (<Card
                        key={prods.id}
                        name={prods.title}
                        price={prods.price}
                        img={prods.image}
                        />) 
                    ))
                }
        </div>
    );
}

export default ItemListContainer