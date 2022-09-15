import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';
import { loadRestaurantInfo } from '../actions';

import { get } from '../utils';

export default function RestaurantInfoPage() {
  const dispatch = useDispatch();

  const { restaurantInfo } = useSelector(get('restaurantInfo'));

  const { restaurantId } = useParams();

  useEffect(() => {
    dispatch(loadRestaurantInfo(restaurantId));
  }, [restaurantId]);

  const { name, address, menuItems } = restaurantInfo;
  return (
    <>
      <p>
        my parameter is
        { restaurantId }
        ok? ok.
        and my
        { name }
        { address }
        { menuItems }
        Thank you.
      </p>
    </>
  );
}
