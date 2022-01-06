import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { loadRestaurantInfo } from '../actions';

import RestaurantInfo from './RestaurantInfo';

export default function RestaurantInfoContainer() {
  const { restaurantId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurantInfo(restaurantId));
  }, [restaurantId]);

  const {
    restaurantName, address, menuItems,
  } = useSelector((state) => ({
    restaurantName: state.restaurantInfo.name,
    address: state.restaurantInfo.address,
    menuItems: state.restaurantInfo.menuItems,
  }));

  return (
    <RestaurantInfo
      restaurantName={restaurantName}
      address={address}
      menuItems={menuItems}
    />
  );
}
