import './ProductCard.css';
import { Link } from 'react-router-dom';

export default function ProductsCard({ title, price, image, idProd }) {
  return (
    <>
      <div className='col-3 cardstyle'>
        <div className='col-12'>
          <img src={image} alt={title} />
        </div>
        <div className='col-12'>
          <h2>{title}</h2>
        </div>
        <div className='col-12'>
          <div className='col-6'>
            <h3>{price}</h3>
          </div>
          <div className='col-6'>
            <button>
              <Link to={`/product/${idProd}`}>Ver detalles</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

    