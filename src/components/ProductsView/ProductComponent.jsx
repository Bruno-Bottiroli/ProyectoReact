
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
      
      <section className='container'>
        <div className='col-4 pt-3 d-flex justify-content-between'>
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
      <section className="container">
        <section className='row justify-content-center'>
        {products.map((prod) => (
          <ProductsCard
          key={prod.id}
            title={prod.title}
            price={prod.price}
            image={prod.image}
            idProd={prod.id}
          />
        ))}
        </section>
        
      </section>
    </>
  );
}