import { useDispatch, useSelector } from 'react-redux';

import { loadRestaurants } from '../redux_module/asyncActions';
import { selectRegion } from '../redux_module/RestaurantSlice';
import Buttons from './Buttons';

export default function RegionListContainer() {
  const dispatch = useDispatch();

  const {
    regions, selected: { region },
  } = useSelector((state) => state.restaurant);

  const handleClick = (selectedRegion) => {
    dispatch(selectRegion(selectedRegion));
    dispatch(loadRestaurants());
  };

  return (
    <Buttons
      items={regions}
      onClick={handleClick}
      selected={region.name}
    />
  );
}
