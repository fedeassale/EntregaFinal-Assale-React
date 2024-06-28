import {  useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetails from '../ItemDetails/ItemDetails';
import {doc,getDoc} from "firebase/firestore";
import { db } from '../../firebase/config';


const ItemDetailContainer = () => {

    let { itemId } = useParams();
    let [producto, setProducto] = useState(undefined);

    let [cargando, setCargando] =useState(true);

    useEffect(() => {
        const docRef=doc(db,"productos",itemId);
        getDoc(docRef)
        .then(res=>{
        if(res.data()){
          setProducto( { ...res.data(), id: res.id });
        }
        setCargando(false)
        })}
    , [itemId]);

        if(cargando){
          return <div>cargando...</div>
        } else if(producto){
          return (
            <ItemDetails producto={producto} />
           
         )
        } else{
          return <div>producto no encontrado</div>
        }
  
}

export default ItemDetailContainer