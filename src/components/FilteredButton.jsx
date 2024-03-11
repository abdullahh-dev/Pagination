import React from 'react';

function FilteredButton({ categories, filteredProducts }) {
  return (
    <div className="">
      {categories.map((val) => (
        <button
          onClick={() => filteredProducts(val)}
          className="px-2 py-1 rounded-md bg-slate-200 hover:bg-slate-300 mx-2">
          {val}
        </button>
      ))}
    </div>
  );
}

export default FilteredButton;
