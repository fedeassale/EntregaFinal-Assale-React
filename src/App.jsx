

import "./app.css"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { NavBar } from "./components/NavBar/NavBar"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import  ItemDetailContainer  from "./components/ItemDetailContainer/ItemDetailContainer";



function App() {
  
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer/>}/> 
        </Routes>
      </div>
    </BrowserRouter>
  )
}


export default App