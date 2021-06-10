import { useDispatch, useSelector } from 'react-redux';

import Buttons from './Buttons';
import { loadRestaurants } from '../redux_module/asyncActions';
import { selectCategory } from '../redux_module/RestaurantSlice';

export default function CategoryListContainer() {
  const dispatch = useDispatch();

  const {
    categories,

    selected: {
      region,
      category,
    },
  } = useSelector((state) => state.restaurant);

  const handleClick = (selectedCategory) => {
    dispatch(selectCategory(selectedCategory));
    dispatch(loadRestaurants(region.name, selectedCategory.id));
  };

  return (
    <Buttons
      items={categories}
      onClick={handleClick}
      selected={category.name}
    />
  );
}
