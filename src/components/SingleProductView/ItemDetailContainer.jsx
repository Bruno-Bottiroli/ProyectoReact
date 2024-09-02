import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../item.js';
import "./ItemDetailContainer.css"

export default function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const { prodId } = useParams();

  useEffect(() => {
    setProduct(getProduct(prodId));
  }, [prodId]);

  return (
    <>
    <section className='container mt-5'>
      <section className='row'>
          <div className='col-12 d-flex justify-content-space'>
              <div className="col-4">
                  <img className='imgdetail' src= {product.imageitem} alt={product.title} />
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
      
    </>
  );
}