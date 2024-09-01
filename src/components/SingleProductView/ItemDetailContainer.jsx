import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../item.js';

export default function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const { prodId } = useParams();

  useEffect(() => {
    setProduct(getProduct(prodId));
  }, [prodId]);

  return (
    <>
      <section className='row'>
        <div className='col-12'>
            <div className='col-6'>
                <img src= {product.image} alt={product.title} />
            </div>
            <div className='col-6'>
                <div className='col-12'>
                    <h2>{product.title}</h2>
                </div>
                <div className='col-12'>
                    <h2><p>{product.price}</p></h2>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}