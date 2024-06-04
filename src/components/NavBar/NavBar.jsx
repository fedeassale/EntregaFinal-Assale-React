import Carrito from "../Carrito/Carrito"
import { Link,NavLink } from "react-router-dom"
import categories from "../../productos/categorias.json";
import React from 'react';

export const NavBar = () => {

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
          <div><Carrito/></div>
        </div>
      

  )
}

