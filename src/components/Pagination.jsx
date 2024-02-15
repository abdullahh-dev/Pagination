import React from 'react';

function Pagination({ productsPerPage, totalProducts, paginate }) {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <nav className="flex justify-center mt-40">
      <ul className="flex">
        {pageNumber.map((number) => (
          <li className="bg-gray-100 border  px-4 py-1 text-[24px]">
            <a onClick={() => paginate(number)} key={number} href="#!">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
