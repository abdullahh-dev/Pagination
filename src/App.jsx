import { useEffect, useState } from 'react';
import './App.css';
import { IoCart } from 'react-icons/io5';
import Pagination from './components/Pagination';
import axios from 'axios';
import Posts from './components/Posts';
import FilteredButton from './components/FilteredButton';

function App() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);
  const [currConvert, setCurrConvert] = useState(0);
  const [currCode, setCurrCode] = useState('USD');
  // const [totalCartItems, setTotalCartItems] = useState(0);

  (async () => {
    const res = await axios.get('https://fakestoreapi.com/products');
    const data = await res.data;
    setProducts(data);
    setFilter(data);
  })();
  // localStorage.getItem()

  const handleCurrChange = (e) => {
    const curr = e.target.value;
    setCurrCode(curr);
    console.log(curr);
  };
  useEffect(() => {
    const fetchExchangeRates = async () => {
      const exchangeRates = await axios.get(
        'https://v6.exchangerate-api.com/v6/da466f072d1513df8955f6f1/latest/USD'
      );
      const ratesData = exchangeRates.data;
      const exchange = ratesData.conversion_rates;
      const Curr = exchange[currCode];

      setCurrConvert(Curr);
    };
    fetchExchangeRates();
  }, [currCode]);

  const categories = [...new Set(products.map((val) => val.category))];

  const filteredProducts = (cat) => {
    const filtered = products.filter((products) => products.category === cat);
    setFilter(filtered);
  };

  const indexofLastProduct = currentPage * productsPerPage;
  const indexofFirstProduct = indexofLastProduct - productsPerPage;
  const currentProducts = filter.slice(indexofFirstProduct, indexofLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="flex max-w-[1440px] mt-8 px-[60px] m-auto">
        <FilteredButton
          categories={categories}
          filteredProducts={filteredProducts}
        />
        <div className="relative">
          <IoCart
            size={24}
            color="gray"
            className="self-center cursor-pointer ml-32"
          />
          <div className="absolute top-[-7px] right-[-6px] rounded-full w-4 h-4 flex items-center justify-center text-white font-[12px] bg-red-600">
            1
          </div>
        </div>
      </div>
      <Posts
        currCode={currCode}
        products={currentProducts}
        handleCurrChange={handleCurrChange}
        currConvert={currConvert}
      />

      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={filter.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
