import React from 'react'
import { Link } from 'react-router-dom'
import {  CartContext } from '../../context/CartContext';
import { useContext } from 'react';

export const ItemList = ({productos,titulo}) => {

    const {agregarAlCarrito}=useContext( CartContext);

  return (
    <div><h1 className='textTitulo'>{titulo}</h1>
    <div className='flexCard'>
        {
        productos.length > 0 ?
        productos.map(producto => {
            return(
                <div key={producto.id}>
                <figure className='card'>
                    <h2 className='textCard'>{producto.nombre}</h2>
                    <div className='imgCardContainer'>
                        <img className='imgCard' src={producto.img}/>
                    </div>
                    <p className='textCardDescription'>{producto.descripcion}</p>
                    <p className='textCard'>${producto.precio}</p>
                    <div className='botonCard'>
                        <Link className='TextCardBtn' to={`/item/${producto.id}`}>Ver Más</Link> 
                    </div>
                    <div className='botonCardAgregaralCarrito'>
                        <button className='TextCarcBtnC' onClick={()=>agregarAlCarrito(producto)}>Agregar al carrito</button>
                    </div>
                    
                </figure>
                </div>
            )
        }):
        <p>No hay productos</p>
    }
    </div>
    </div>
  )
}
