import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from "../../productos/productos.json";
import { Link,NavLink } from "react-router-dom";

const ItemDetailContainer = () => {

    let { itemId } = useParams();
    let [producto, setProducto] = useState(undefined);

    useEffect(() => {
        setProducto(data.find((prod) => prod.id === parseInt(itemId)));
    }, [itemId])
    

  return (
    <div>{producto ?
       <div className='DetailItem'> 
        <h2 className='textCard' > {producto.nombre}</h2>
        <div className='imgCardContainer'>
          <img className='imgCard' src={producto.img}></img>
        </div>
        <p className='textCard' > {producto.descripcion} </p>
        <p className='textCard' >$ {producto.precio} </p>
        <div className='botonCard'>
          <Link className='TextCarcBtn' to={`/`}>Volver</Link>
        </div>
       </div>
       : "Cargando..."}
    </div>
  )
}

export default ItemDetailContainer