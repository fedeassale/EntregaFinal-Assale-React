import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {  CartContext } from '../../context/CartContext'


const CartWidget = () => {
   const { calcularCantidad }=useContext( CartContext);
  return (
    
     <div className="carritoimg">
        <Link className="TamañoCarrito" to= "/Carrito">🛒
        </Link>
        <p className="TamañoNúmero">{calcularCantidad()}</p>
     </div>
   
  )
}

export default CartWidget