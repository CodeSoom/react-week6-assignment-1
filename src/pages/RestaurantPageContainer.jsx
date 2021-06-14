import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { loadRestaurantInfo } from '../redux_module/asyncActions';
import { setSelectedRestaurant } from '../redux_module/RestaurantSlice';
import RestaurantPage from './RestaurantPage';

export default function RestaurantPageContainer() {
  const dispatch = useDispatch();
  const { id: restaurantID } = useParams();

  useEffect(() => {
    dispatch(setSelectedRestaurant({ name: null, address: null, menuItems: [] }));
    dispatch(loadRestaurantInfo(restaurantID));
  }, []);

  const { name, address, menuItems } = useSelector(
    (state) => state.restaurant.restaurantInformation,
  );

  return (
    (name === null)
      ? <h1>loading</h1>
      : (
        <RestaurantPage
          name={name}
          address={address}
          menuItems={menuItems}
        />
      )
  );
}
