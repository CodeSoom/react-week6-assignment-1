import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadRestaurantInfo, selectRestaurant } from './actions';
import RestaurantInfoContainer from './RestaurantInfoContainer';

export default function RestaurantInfoPage({ match }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectRestaurant(Number(match.params.id)));
    dispatch(loadRestaurantInfo());
  });

  return (
    <RestaurantInfoContainer />
  );
}
