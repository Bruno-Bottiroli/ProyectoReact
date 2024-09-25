import { doc, getDoc, getFirestore } from "firebase/firestore/lite"
import { useEffect, useState } from "react"

const ProductDetail = () => {
    const[product, setProduct] = useState(null)


    useEffect(()=> {
        const db = getFirestore()
        const getProduct = doc(db, 'productos','id'
 )
    getDoc(getProduct).then((snapshot)=>{
        if (snapshot.exists()){
            setProduct({id:snapshot.id, ...snapshot.data()})
        }
    })
    })

    return(
        product ? (
                <section className='container mt-5'>
                    <section className='row'>
                        <div className='col-12 d-flex justify-content-space'>
                            <div className="col-4">
                                <img className='imgdetail' src= {product.image} alt={product.title} />
                            </div>
                            <div className='col-4 backgroundcard'>
                                <div className='col-12 mb-2'>
                                    <h2 className='white'>Más detalles del producto.</h2>
                                </div>
                                <div className='col-12'>
                                    <h2 className='white'>{product.title}</h2>
                                </div>
                                <div className='col-12'>
                                    <h4 className='white'>Categoria: {product.category}</h4>
                                </div>
                                <div className='col-12'>
                                    <h2 className='white'><p>${product.price}</p></h2>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
        ) : (
            <p>producto no encontrado</p>
        )
        
    )
}

export default ProductDetail;