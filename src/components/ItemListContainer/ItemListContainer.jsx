
import  {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from "../ItemList/ItemList";
import { collection, getDocs, query , where } from 'firebase/firestore';
import { db } from '../../firebase/config.js';


export const ItemListContainer = ()=>{
    let { categoryId }  = useParams();
    
    let[productos, setProductos] = useState([]);
    let [titulo, setTitulo] = useState("Productos");

    
    useEffect(()=> {

        const productosRef = collection(db,"productos");
        const q = categoryId? query(productosRef, where("categoria.id", "==",categoryId)): productosRef;

        const categoriasRef = collection(db,"categorias");
        let catQuery = categoryId && query(categoriasRef, where("id","==",categoryId)) 

       getDocs(q)
       .then((res)=>{
        
        setProductos(
            res.docs.map((doc)=>{
                return {...doc.data(),id: doc.id}
            })
        )
    })
    if(catQuery){
        getDocs(catQuery)
    .then((res)=>{setTitulo(res.docs.map((doc)=>{
        return doc.data().nombre
    }))})
    }else{
        setTitulo("Productos")
    }
    },[categoryId]);
       

    return(
    <div>
        <ItemList productos={productos} titulo={titulo} />
    </div>
    )
}

