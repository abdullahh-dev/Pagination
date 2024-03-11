import React from 'react';

function Pagination({ productsPerPage, totalProducts, paginate }) {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumber.push(i);
  }
  return pageNumber.length <= 1 ? (
    false
  ) : (
    <nav className="flex justify-center mt-40">
      <ul className="flex">
        {pageNumber.map((number) => (
          <li className="bg-gray-100 border  px-4 py-1 text-[24px]">
            <button onClick={() => paginate(number)} key={number}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
