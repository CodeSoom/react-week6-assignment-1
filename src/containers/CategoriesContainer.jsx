import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { selectCategory, loadRestaurants } from '../actions';
import CategoryList from '../components/category/CategoryList';

import { get } from '../utils';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector(get('categories'));
  const selectedCategory = useSelector(get('selectedCategory'));

  function handleClick(categoryId) {
    dispatch(selectCategory(categoryId));
    dispatch(loadRestaurants());
  }

  return (
    <CategoryList
      categories={categories}
      selectedCategory={selectedCategory}
      onCategoryClick={handleClick}
    />
  );
}
