import React, { useState } from 'react';

const addToCart = (items) => {
  console.log(items);
  localStorage.setItem('items', JSON.stringify([items]));
};

function Posts({ products, currConvert, currCode, handleCurrChange }) {
  return (
    <div className="flex gap-2 mt-24 p-2 justify-center flex-wrap ">
      {products.map((products) => (
        <div
          className="hover:shadow-md border rounded-md px-5 mb-3 w-[300px]"
          key={products.id}>
          <div className="h-[380px]">
            <div className="mb-2">
              <img
                className="object-contain w-[300px] h-[250px]"
                src={products.image}
                alt=""
              />
            </div>
            <h1 className="text-[16px] font-semibold">{products.title}</h1>
            <p>
              <span className="text-gray-600">Category:</span>{' '}
              <span className="text-[#4b7ee4]"> {products.category}</span>
            </p>
          </div>
          <p className="text-right">
            <span className="text-[16px] rounded-md px-1">
              <select
                onChange={handleCurrChange}
                value={currCode}
                name="currChange"
                id="currChange">
                <option value="USD">USD</option>
                <option value="PKR">PKR</option>
              </select>
              {(products.price * currConvert).toFixed(2)}
            </span>
          </p>
          <button
            onClick={() => addToCart(products)}
            className="bg-black mb-4 w-full p-2 mt-2 rounded-md text-white">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Posts;
