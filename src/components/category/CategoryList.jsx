import React from 'react';

const CategoryList = ({ categories, onSelectCategoryClick, selectedCategory }) => {
  if (categories.length === 0) {
    return null;
  }

  return (
    <ul>
      {categories.map(({ id, name }) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => onSelectCategoryClick(id)}
          >
            {name}
            {selectedCategory ? (
              <>
                {id === selectedCategory.id ? '(V)' : null}
              </>
            ) : null}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
