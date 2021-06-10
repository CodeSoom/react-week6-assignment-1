import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { loadRestaurant } from '../../actions';

import RestaurantContainer from '../../container/RestaurantContainer';
import { get } from '../../utils';

export default function RestaurantPage() {
  const { id: restaurantId } = useParams();

  const dispatch = useDispatch();

  const { menuItems, information } = useSelector(get('restaurant'));

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  });

  if (!menuItems || !information) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  return <RestaurantContainer />;
}
