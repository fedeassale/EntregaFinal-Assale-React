
import React, { useContext } from 'react'
import {  CartContext } from '../../context/CartContext';
import { Link } from "react-router-dom";

const Carrito = () => {
  const {carrito , calcularTotal, vaciarCarrito ,  eliminarProducto } = useContext( CartContext)
  
  
  return (
    
    <div className='posicionFooter'>
      <table className='table'>
            <thead  id="trid">
              <tr>
                <th scope="col">PRODUCTOS</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio</th>
                <th scope="col"></th>
              </tr> 
            </thead>
            <hr />
            <tbody className="table-striped">
      {carrito.map((productos)=>{
        return(
            <tr key={productos.id}>
              <th scope="row"><h1 className='textCarrito'>{productos.nombre} </h1></th>
              <td className='carritoText'>{productos.cantidad}</td>
              <td className='carritoText'>${productos.precio}</td>
              <td>
                  <button className='botonEliminar' onClick={()=>{eliminarProducto(productos)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
                      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                  </button>
              </td>
            </tr>
            
        )})}
        </tbody>
        <hr />
        <tfoot>
              <tr>
                <th>TOTAL</th>
                <th></th>
                <th><h2> ${calcularTotal()}</h2></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
        </tfoot>


        </table>
      {carrito.length>0?
      <>
        {/* <h2>Total: ${calcularTotal()}</h2> */}
        <div className='botonesCarrito'>
          <div className="botonCard">
            <button onClick={()=>vaciarCarrito()}>Vaciar carrito</button>
          </div>
          <div className="botonCard">
            <Link className='TextCardBtn' to="/finalizarCompra">Finalizar Compra</Link>
          </div>
        </div>
      </>:
        <h2>Carrito vacío</h2>
      }
    </div>
  )
}

export default Carrito


{/* <div className='carrito' key={productos.id}>
              <h1 className='textCarrito'>{productos.nombre} </h1>
              <div>${productos.precio}</div>
              <div>{productos.cantidad}</div>
              <button className='botonEliminar' onClick={()=>{eliminarProducto(productos)}}>

              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
              </svg>
              </button>           
            </div> */}