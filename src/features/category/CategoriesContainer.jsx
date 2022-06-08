import { useDispatch, useSelector } from 'react-redux';

import {
  selectCategory,
  loadRestaurants,
} from '../../apps/store/actions';

import { get } from '../../apps/utils';

import Categories from './Categories';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector(get('categories'));
  const selectedCategory = useSelector(get('selectedCategory'));

  function handleClick(categoryId) {
    dispatch(selectCategory(categoryId));
    dispatch(loadRestaurants());
  }

  return (
    <Categories
      categories={categories}
      onClick={handleClick}
      selectedCategory={selectedCategory}
    />
  );
}
