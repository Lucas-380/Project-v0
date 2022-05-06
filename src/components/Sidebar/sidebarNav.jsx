import React from 'react'
import './sidebarNav.css'
import {Link} from "react-router-dom"

const SidebarNav = ({categories}) => {

  return (
    <div className='catalogoResponsive'>
        <h1 className='m-4 titleSidebar'>Catalogo</h1>
        <div className='catalogoList'>
            <ul>
                {categories && categories.map((category =>(
                    <li className='mt-4' key={category}><Link to={`${category}`} className='mt-4 vinculoCategorias'>{category.toUpperCase()}</Link></li>
                )))}
            </ul>
        </div>
    </div>
  )
}

export default SidebarNav