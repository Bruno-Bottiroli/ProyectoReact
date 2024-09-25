import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'; 
import ProductList from '../ProductList';

export default function CategoryView() {
  const { categoryId } = useParams(); 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      const db = getFirestore();
      const q = query(collection(db, 'productos'), where('category', '==', categoryId)); 
      const querySnapshot = await getDocs(q);
      const filteredProducts = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProducts(filteredProducts);
    };

    fetchCategoryProducts();
  }, [categoryId]); 

  return (
    <section className="container">
      <h2>Productos en la categoría: {categoryId}</h2>
      <section className='row justify-content-center'>
        <ProductList products={products} /> 
      </section>
    </section>
  );
}