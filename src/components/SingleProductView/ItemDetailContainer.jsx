import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useCart } from '../../context/CartContext'; 
import './ItemDetailContainer.css';

export default function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [cantidad, setCantidad] = useState(1); 
  const { prodId } = useParams();
  const { addItem } = useCart(); 

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const db = getFirestore();
        const docRef = doc(db, 'productos', prodId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log('No se encontró el producto.');
        }
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      }
    };

    fetchProduct();
  }, [prodId]);

  const handleAdd = () => {
    if (product && cantidad > 0) {
      addItem(product, cantidad);
    }
  };

  const increment = () => {
    if (cantidad < product.stock) {
      setCantidad(cantidad + 1);
    }
  };

  const decrement = () => {
    if (cantidad > 1){
      setCantidad(cantidad - 1);
    }
  };

  if (!product) {
    return <div>Cargando producto...</div>;
  }

  return (
    <section className='container mt-5'>
      <section className='row'>
        <div className='col-12 d-flex justify-content-space'>
          <div className="col-4">
            <img className='imgdetail' src={product.image} alt={product.title} />
          </div>
          <div className='col-4 backgroundcard'>
            <div className='col-12 mb-2'>
              <h2 className='white'>Más detalles del producto.</h2>
            </div>
            <div className='col-12'>
              <h2 className='white'>{product.title}</h2>
            </div>
            <div className='col-12'>
              <h4 className='white'>Categoría: {product.category}</h4>
            </div>
            <div className='col-12'>
              <h2 className='white'><p>${product.price}</p></h2>
            </div>
            <div className='col-12'>
              <label className="white">Cantidad:</label>
              <div className="d-flex align-items-center">
                <button onClick={decrement} disabled={cantidad <= 1}>-</button> 
                <span className="mx-2">{cantidad}</span> 
                <button onClick={increment} disabled={cantidad >= product.stock}>+</button> 
              </div>
            </div>
            <button onClick={handleAdd}>Agregar al carrito</button>
          </div>
        </div>
      </section>
    </section>
  );
}