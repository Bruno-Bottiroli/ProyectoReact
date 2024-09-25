import { collection, getDocs, getFirestore } from "firebase/firestore/lite"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import './ProductList.css';

const ProductList = () => {

    const[products, setProducts] = useState([])

    useEffect(()=> {
        const db = getFirestore()
        const productCollection= collection(db, 'productos')

        

        getDocs(productCollection).then((snapshot) => {
            if(snapshot.size === 0){
                console.log("no hay productos")
            }

            setProducts(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
        })
    }, [])


  return (
    <div className="container">
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-3 cardstyle">
            <div className='col-12'>
          <img src={product.image} alt={product.title} />
        </div>
        <div className='col-10 backgr'>
          <div className='col-12'>
            <h2>{product.title}</h2>
          </div>
          <div className='col-12'>
            <div className='col-6 d-flex'>
              <h3>{product.price}</h3>
            </div>
            <div className='col-6 d-flex'>
              <button>
                <Link to={`/product/${product.id}`}>Ver detalles</Link>
              </button>
            </div>
          </div>
          </div>
        </div>
        ))}
      </div>
    </div>
    
  )
}
export default ProductList;