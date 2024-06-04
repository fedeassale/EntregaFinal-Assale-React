
import React, {useState, useEffect } from 'React'
 import data from "../../productos/productos.json"
 import categories from "../../productos/categorias.json"
 import { useParams } from 'react-router-dom';
 import { Link } from 'react-router-dom'


export const ItemListContainer = ()=>{
    let { categoryId } = useParams();
    
    let[productos, setProductos] = useState([]);
    let [titulo, setTitulo] = useState("Productos");

    const pedirProductos=() => {
        return new Promise((resolve,reject) =>{
            setTimeout(
                () => {
                    resolve(data);
                },1000);
        }

        )
    }
    useEffect(()=> {
        pedirProductos()
        .then((res)=>{
            if (!categoryId) {
                setTitulo("Productos");
                setProductos(res);
            }else{
                setTitulo(categories.find((cat) => cat.id === categoryId).nombre);
                setProductos(res.filter((prod) => prod.categoria.id === categoryId));
        }})
     },[categoryId]);

    return(
    <div><h1 className='textTitulo'>{titulo}</h1>
    <div className='flexCard'>
        {
        productos.length > 0 ?
        productos.map(producto => {
            return(
                <div>
                <figure className='card'>
                    <h2 className='textCard'>{producto.nombre}</h2>
                    <div className='imgCardContainer'>
                        <img className='imgCard' src={producto.img}/>
                    </div>
                    <p className='textCard'>{producto.descripcion}</p>
                    <p className='textCard'>${producto.precio}</p>
                    <div className='botonCard'>
                        <Link className='TextCardBtn' to={`/item/${producto.id}`}>Ver más</Link> 
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

