import { useEffect, useState } from 'react';
import './App.css';
import Pagination from './assets/components/Pagination';
import axios from 'axios';
import Posts from './assets/components/Posts';

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get('https://fakestoreapi.com/products');
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  const indexofLastProduct = currentPage * productsPerPage;
  const indexofFirstProduct = indexofLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexofFirstProduct,
    indexofLastProduct
  );

  const paginate = (pagenumber) => {
    setCurrentPage(pagenumber);
  };

  return (
    <div>
      <Posts products={currentProducts} />

      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
