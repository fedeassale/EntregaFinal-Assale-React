import React, {useContext} from 'react'
import { Link } from "react-router-dom";
import {  CartContext } from '../../context/CartContext';

const ItemDetails = ({producto }) => {

  const {agregarAlCarrito , cantidad , handleRestar , handleSumar }=useContext( CartContext);
  return (
    <div className="posicionFooter">{producto ?
      <div className='DetailItem'> 
            <h2 className='textCard' > {producto.nombre}</h2>
         <div className='imgCardContainer'>
           <img className='imgCard' src={producto.img}></img>
         </div>
        <p className='textCard' > {producto.descripcion} </p>
         <p className='textCard' >$ {producto.precio} </p>
         <div className="flexSuma">
          <button className="btnSuma" onClick={handleRestar}>-</button>
          <p className="btnSuma">{cantidad}</p>
          <button className="btnSuma"  onClick={handleSumar}>+</button>
         </div>
         <div className='botonCardAgregaralCarrito'>
          <button className='TextCarcBtn' onClick={()=>agregarAlCarrito(producto)}>Agregar al carrito</button>
        </div>
         <div className='botonCard'>
           <Link className='TextCarcBtn' to={`/`}>Volver</Link>
         </div>
        </div>
       : "Cargando..."}
    </div>
  )
}

export default ItemDetails