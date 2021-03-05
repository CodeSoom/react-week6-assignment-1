import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCategory } from './actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  function handleClick(id) {
    dispatch(selectCategory(id));
  }

  const { categories, selectedCategoryId } = useSelector((state) => ({
    categories: state.categories,
    selectedCategoryId: state.selectedCategoryId,
  }));

  return (
    <ul>
      {categories.map(({ id, name }) => (
        <li key={id}>
          <button type="button"  onClick={() => handleClick(id)}>
        {`${name}${selectedCategoryId === id ? '(v)':''}`}</button>
        </li>
      ))}
    </ul>
  );
}
