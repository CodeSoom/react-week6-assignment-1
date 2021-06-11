import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadRestaurantInfo } from '../redux_module/asyncActions';
import RestaurantPage from './RestaurantPage';

export default function RestaurantPageContainer() {
  const dispatch = useDispatch();
  const { id: restaurantID } = useParams();

  useEffect(() => {
    dispatch(loadRestaurantInfo(restaurantID));
  }, []);

  const { name, address, menuItems } = useSelector(
    (state) => state.restaurant.information,
  );

  return (
    <RestaurantPage
      name={name}
      address={address}
      menuItems={menuItems}
    />
  );
}
