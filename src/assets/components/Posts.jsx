import React from 'react';

function Posts({ products }) {
  return (
    <div className="flex p-12 gap-12 flex-wrap ">
      {products.map((products) => (
        <div className="shadow-md mb-4 w-[300px]" key={products.id}>
          <div>
            <img
              className="mb-3 w-64 h-64 object-contain"
              src={products.image}
              alt=""
            />
          </div>
          <span className="px-4">
            <h1 className="text-[16px] font-semibold">{products.title}</h1>
            <p>${products.price}</p>
          </span>
        </div>
      ))}
    </div>
  );
}

export default Posts;
