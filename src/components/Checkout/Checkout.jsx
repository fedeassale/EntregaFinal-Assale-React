import React, { useContext, useState } from 'react'
import {  CartContext } from '../../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection , addDoc } from 'firebase/firestore';
import { db } from '../../firebase/config.js';

const Checkout = () => {

    const {carrito , calcularTotal, vaciarCarrito } = useContext( CartContext);
    const{ register , handleSubmit }= useForm();

    let [docId, setDocId ]= useState("")

    const comprar = (data)=>{
        const pedido = {
          cliente: data,
          productos: carrito,
          total: calcularTotal()
        }
        const pedidosRef = collection(db,"pedidos");

        addDoc(pedidosRef, pedido)
        .then((doc)=>setDocId(doc.id))
    }

    if(docId){
      vaciarCarrito()
      return(
        <div className="posicionFooter">
          <h1 className='textTitulo'>Gracias por tu compra</h1>
          <p className='textTitulo'>Si queres hacer el seguimiento de tu envio, el identificador es: {docId}</p>
        </div>
      )
    }

  return (
    <div className="posicionFooter" >
      <h1 className='textTitulo'>Rellene sus datos</h1>
        <form className='formulario' onSubmit={handleSubmit(comprar)}>
            <label for="name" class="form-label">Nombre</label>
            <input className='inputFor' type="text" id="name" placeholder='Nombre' {...register("nombre")}/>
            <label for="Apellido" class="form-label">Apellido</label>
            <input className='inputFor' id="Apellido" type="text" placeholder='Apellido' {...register("apellido")}/>
            <label for="Teléfono" class="form-label">Teléfono</label>
            <input className='inputFor' id='Teléfono' type="text" placeholder='Teléfono' {...register("teléfono")}/>
            <label for="email" class="form-label">Email</label>
            <input className='inputFor' type="text" placeholder='Email' {...register("email")}/>
            <button className='botonCard' type='submit'>Comprar</button>
        </form>
        
    </div>
   
  )
}

export default Checkout