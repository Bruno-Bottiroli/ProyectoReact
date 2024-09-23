import { doc, getDocs, getFirestore, where } from "firebase/firestore/lite"
import { useEffect, useState } from "react"

const ProductList =() =>{

const[products, setProducts] = useState([])

useEffect(()=> {
    const db = getFirestore()
    const productCollection= query(coleccion(db, 'productos'), where("category", "==", "arquitectura"))

    

    getDocs(productCollection).then((snapshot) => {
        if(snapshot.size === 0){
            console.log("no hay ni aka")
        }

        setProducts(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
    })
}, [])

return (
    <div>
        {
            products.length > 0 (
                products.map((p)=> 
                    <div key={p.id}>
                        <p>{p.price}</p>
                        <p>{p.image}</p>
                        <p>{p.title}</p>
                    </div>
                ) 
            )
        }
    </div>
)
}