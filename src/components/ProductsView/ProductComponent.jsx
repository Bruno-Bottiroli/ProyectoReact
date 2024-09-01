
import { getProducts } from '../../item.js';
import { useEffect, useState } from 'react';
import ProductsCard from './ProductCard';

export default function ProductComponent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts.then((data) => setProducts(data));
  }, []);

  return (
    <>
      <h2>Vista de Products</h2>
      <section className='col-12'>
        <div className='col-3 pe-3'>
            <button>
                Naturaleza
            </button>
            <button>
                Arquitectura
            </button>
            <button>
                Collages     
            </button>
        </div>
      </section>
      <section className="row justify-content-between">
        {products.map((prod) => (
          <ProductsCard
            title={prod.title}
            price={prod.price}
            image={prod.image}
            idProd={prod.id}
          />
        ))}
      </section>
    </>
  );
}