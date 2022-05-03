import React from 'react'
import './sidebarNav.css'
import {Link} from "react-router-dom"

const SidebarNav = () => {
  return (
    <div className='catalogoResponsive'>
        <h1 className='m-4 titleSidebar'>Catalogo</h1>
        <div className='catalogoList'>
            <ul>
                <li className='mt-4'><Link to="men's clothing" className='mt-4 vinculoCategorias'>MEN'S CLOTHING</Link></li>
                <li className='mt-4'><Link to="jewelery" className='mt-4 vinculoCategorias'>JEWELERY</Link></li>
                <li className='mt-4'><Link to="electronics" className='mt-4 vinculoCategorias'>ELECTRONICS</Link></li>
                <li className='mt-4'><Link to="women's clothing" className='mt-4 vinculoCategorias'>WOMEN'S CLOTHING</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default SidebarNav