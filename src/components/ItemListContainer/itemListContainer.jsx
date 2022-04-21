import React, { useState, useEffect } from "react";
import { api } from '../../utils/api'
import ItemList from "./itemList/itemList";




const ItemListContainer = ({ greeting }) => {

  const endpoint = '?sort=desc'
  const [prod, setProd] = useState([])

    useEffect(() => {
        setTimeout(() => {
            api.get(endpoint)
                .then(res => {
                    console.log(res)
                    const { data } = res
                    setProd(data)
                })
                .catch(err => console.log(err))
                // .finally(() => loading())
        }, 2000);
    }, [endpoint])

    console.log(prod);

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2"  style={{backgroundColor: "grey"}}>Sidebar del Navegador</div>
                    <div className="col-lg-8"  style={{justifyContent:"center"}}>
                        <ItemList
                            prod={prod}/>
                    </div>
                    <div className="col-lg-2"  style={{backgroundColor: "grey"}}>Todavia nose</div>
                </div>
            </div>
        </>
    );
}

export default ItemListContainer