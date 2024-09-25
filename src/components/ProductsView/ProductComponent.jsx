import { Link } from 'react-router-dom';
import ProductList from '../ProductList.jsx';
import { useEffect, useState } from 'react';
import { getProducts } from '../../item.js';

export default function ProductComponent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts.then((data) => setProducts(data));
  }, []);

  return (
    <>
      <section className='container'>
        <div className='col-4 pt-3 d-flex justify-content-between'>
          <Link to="/category/naturaleza">
            <button>
              Naturaleza
            </button>
          </Link>
          <Link to="/category/arquitectura">
            <button>
              Arquitectura
            </button>
          </Link>
          <Link to="/category/collages">
            <button>
              Collages     
            </button>
          </Link>
        </div>
      </section>

      <section className="container">
        <section className='row justify-content-center'>
          <ProductList products={products} />
        </section>
      </section>
    </>
  );
}
