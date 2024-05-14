import Carrito from "../Carrito/Carrito"


export const NavBar = () => {

  return (
        <div className="menu">
          <h1>Ferreteria FA</h1>
          <nav>
            <ul className="Botonera">
              <li className="Boton"><a href="#" className="BotonText">Inicio</a></li>
              <li className="Boton"><a href="#" className="BotonText">Productos</a></li>
              <li className="Boton"><a href="#" className="BotonText">Contacto</a></li>
              <li className="Boton"><a href="#" className="BotonText">Nosotros</a></li>
            </ul>
          </nav>
          <div><Carrito/></div>
        </div>
      

  )
}

