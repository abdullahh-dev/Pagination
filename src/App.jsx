import { useEffect, useState } from 'react';
import './App.css';
import Pagination from './assets/components/Pagination';
import axios from 'axios';
import Posts from './assets/components/Posts';

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(10);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get('https://fakestoreapi.com/products');
      setProducts(res.data);
    };
    fetchProducts();
  }, []);
  return (
    <div className="bg-fuchsia-700">
      <Posts products={products} />
    </div>
  );
}

export default App;
