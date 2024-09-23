import { doc, getDoc, getFirestore } from "firebase/firestore/lite"
import { useEffect, useState } from "react"

const Product = () => {
    const[product, setProduct] = useState(null)


    useEffect(()=> {
        const db = getFirestore()
        const getProduct = doc(db, 'productos','6D6ghnWFOxXGBdeMWjMd'
 )
    getDoc(getProduct).then((snapshot)=>{
        if (snapshot.exists()){
            setProduct({id:snapshot.id, ...snapshot.data()})
        }
    })
    })

    return(
        product ? (
            <div>
            <p>{product.price}</p>
        </div>
        ) : (
            <p>producto no encontrado</p>
        )
        
    )
}