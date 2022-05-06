import React, { useState, useEffect } from "react";
import { api } from '../../utils/api'
import ItemList from "./itemList/itemList";
import SidebarNav from "../Sidebar/sidebarNav";
import Loader from "../../utils/Loader/Loader"

const ItemListContainer = () => {

  const [prod, setProd] = useState([])
  const [prods, setProds] = useState([])
  const [busqueda, setBusqueda] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  const endpoint = '/categories'
  
    useEffect(() => {
        setTimeout(() => {
            api.get()
                .then(res => {
                    const { data } = res
                    setProd(data)
                    setProds(data)
                })
                .catch(err => console.log(err))
            api.get(endpoint)
                .then(res => {
                    setCategories(res)
                })
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        });
    }, [endpoint])

    const handleChange=e=>{
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }

    const filtrar=(terminoBusqueda)=>{
        let r = prods.filter((e) => {
            if(e.title.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
                return e
            }
        })
        setProd(r)
    }

    return (
        <>
            <div className="container-fluid">
                
                <div className="row">
                    {loading ? <Loader/>
                    :
                    <>
                    <div className="col-lg-2 p-1"  style={{backgroundColor: "black"}}>
                        <SidebarNav
                            categories={categories.data}/>
                    </div>
                    <div className="col-lg-10"  style={{justifyContent:"center"}}>
                        <div className='search-box col-lg-3'>
                            <input 
                                value={busqueda}
                                type="text" 
                                placeholder="Search..."
                                onChange={handleChange}/>
                        </div>
                        <ItemList
                            prod={prod}/>
                    </div>
                    </>}
                </div>
            </div>
        </>
    );
}

export default ItemListContainer