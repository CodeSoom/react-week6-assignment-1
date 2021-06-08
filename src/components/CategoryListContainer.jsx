import { useDispatch, useSelector } from 'react-redux';

import ButtonList from './ButtonList';
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

  const handleClick = (newCategory) => {
    dispatch(selectCategory(newCategory));
    dispatch(loadRestaurants(region, newCategory.id));
  };

  return (
    <ButtonList
      names={categories}
      onClick={handleClick}
      selected={category.name}
    />
  );
}
