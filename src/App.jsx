

import "./app.css"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { NavBar } from "./components/NavBar/NavBar"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import  ItemDetailContainer  from "./components/ItemDetailContainer/ItemDetailContainer";
import Carrito from "./components/Carrito/Carrito";
import { CartProvider } from "./context/CartContext";
import Checkout from "./components/Checkout/Checkout";
import Footer from "./components/footer/Footer";


function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
            <Route path="/carrito" element={<Carrito />}/>
            <Route path="/finalizarCompra" element={<Checkout />}/>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}


export default App