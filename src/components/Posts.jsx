import React from 'react';

function Posts({ products }) {
  return (
    <div className="flex gap-12 mt-24 p-2 justify-center flex-wrap ">
      {products.map((products) => (
        <div 
          className="hover:shadow-md border rounded-md px-5 mb-3 w-[300px]"
          key={products.id}>
          <div className="mb-2">
            <img
              className="object-contain w-[300px] h-[250px] "
              src={products.image}
              alt=""
            />
          </div>
          <h1 className="text-[16px] font-semibold">
            {products.title}
            <p className="text-right">
              <span className="bg-black  text-white text-[16px] rounded-md px-1">
                {products.price}
                <span className="text-green-300 text-[15px]"> $</span>
              </span>
            </p>
          </h1>
          <p>
            <span className="text-gray-600">Category:</span>{' '}
            <span className="text-[#4b7ee4]"> {products.category}</span>
          </p>
          <button className="bg-black mb-4 w-full p-2 mt-2 rounded-md text-white">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Posts;
