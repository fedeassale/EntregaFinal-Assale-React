import { createContext, useState , useEffect} from "react";


export const CartContext= createContext();

export const CartProvider=({children})=>{
    const[carrito,setCarrito]= useState([]);

    const[cantidad, setCantidad]=useState(1)

    useEffect(()=>{
    
      
       localStorage.setItem('carrito',JSON.stringify(carrito));
      
    },[carrito])


    const agregarAlCarrito =(productos) => {
       const itemAgregado={...productos,cantidad};
       const nuevoCarrito1=[...carrito];
      const estaenelcarrito=nuevoCarrito1.find((prod)=>prod.id===itemAgregado.id);
     if(estaenelcarrito){
       estaenelcarrito.cantidad += cantidad;
     }else{
       nuevoCarrito1.push(itemAgregado)
     }
     setCarrito(nuevoCarrito1);
    }

    const handleSumar=()=>{
      setCantidad(cantidad+1)
    }
    const handleRestar=()=>{
      cantidad>1?setCantidad(cantidad-1):setCantidad(1);
    }
  
    const calcularCantidad=()=>{
     return carrito.length;
    }
  
    const calcularTotal=()=>{
     return carrito.reduce((acc,prod)=>acc+prod.precio*prod.cantidad,0).toFixed(2);
    }

    const eliminarProducto=(productos)=>{
       const productoEncontrado= carrito.find(prod=> prod.id===productos.id);
       console.log(productoEncontrado)

       if(productoEncontrado){ 
      const indice= carrito.indexOf(productoEncontrado);
      const nuevoCarrito= [...carrito];
       nuevoCarrito.splice(indice,1);
       setCarrito(nuevoCarrito);
     }}
    
    const vaciarCarrito=()=>{
      setCarrito([]);
    }
  return(
    <CartContext.Provider value={ { carrito , agregarAlCarrito , calcularCantidad , calcularTotal , vaciarCarrito , handleRestar , handleSumar  , eliminarProducto , cantidad } }>
        {children}
    </CartContext.Provider>
  )
}