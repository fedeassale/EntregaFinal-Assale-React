import { Link,NavLink } from "react-router-dom";
import React from 'react';
import CartWidget from "../CartWidget/CartWidget";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config.js';
import  {useState } from 'react';

export const NavBar = () => {

  let [categories , setCategories]= useState([]);

  const categoriasRef = collection(db,"categorias");

  getDocs(categoriasRef)
  .then((res)=>{
    setCategories(res.docs.map((doc)=>{
      return { ...doc.data()} 
  }))});


  

  return (
        <div className="menu">
          <Link className="BotonText" to="/"><h1>Ferreteria FA</h1></Link>
          <nav>
            <ul className="Botonera">
              <li className="Boton">
                <NavLink className="BotonText" to="/">Inicio</NavLink>
              </li>
              {
                categories.map((category) => {
                  return (
                    <li key={category.id} className="Boton">
                      <NavLink className="BotonText" to={`/category/${category.id}`}>
                        {category.nombre}
                      </NavLink>
                    </li>
                  )
                })
              } 
            </ul>
          </nav>
          <div><CartWidget /></div>
        </div>
      

  )
}

