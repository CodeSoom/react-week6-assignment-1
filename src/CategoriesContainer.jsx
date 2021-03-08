import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCategory, loadRestaurants } from './actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  function handleClick(id) {
    dispatch(selectCategory(id));
    dispatch(loadRestaurants());
  }

  const { categories, selectedCategory } = useSelector((state) => ({
    categories: state.categories,
    selectedCategory: state.selectedCategory,
  }));

  return (
    <ul>
      {categories.map(({ id, name }) => (
        <li key={id}>
          <button type="button"  onClick={() => handleClick(id)}>
        {`${name}${(selectedCategory ? selectedCategory.id : -1) === id ? '(v)':''}`}</button>
        </li>
      ))}
    </ul>
  );
}
