import React from 'react';

import Item from '../common/Item';

const CategoryList = ({ categories, onCategoryClick, selectedCategory }) => {
  if (categories.length === 0) {
    return null;
  }

  return (
    <ul>
      {categories.map(({ id, name }) => (
        <Item
          key={id}
          name={name}
          check={selectedCategory && id === selectedCategory.id}
          onClick={() => onCategoryClick(id)}
        />
      ))}
    </ul>
  );
};

export default CategoryList;
