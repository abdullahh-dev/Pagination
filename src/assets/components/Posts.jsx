import React from 'react';

function Posts({ products }) {
  return (
    <ul className="mb-5">
      {products.map((products) => (
        <li key={products.id}>{products.title}</li>
      ))}
    </ul>
  );
}

export default Posts;
