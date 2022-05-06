import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../utils/Loader/Loader'
import { api } from '../../utils/api'
import ItemDetail from './ItemDetail/itemDetail'


const ItemDetaliContainer = () => {
    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    const endpoint = `${id}`
  
    useEffect(() => {
        setTimeout(() => {
            api.get(endpoint)
                .then(res => {
                    const { data } = res
                    setProducto(data)
                })
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        });
    }, [endpoint])
  return (
    <>
        {loading ? <Loader/>
        :
        <div>
            <ItemDetail
                prod={producto}/>
        </div>
        }
    </>
  )
}

export default ItemDetaliContainer