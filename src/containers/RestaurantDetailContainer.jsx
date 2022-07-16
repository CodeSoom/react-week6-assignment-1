import { useSelector } from 'react-redux';

import RestaurantDetail from '../components/RestaurantDetail';

import { get } from '../utils';

export default function RestaurantDetailContainer() {
  const restaurant = useSelector(get('restaurant'));
  const isFetchingDetail = useSelector(get('isFetchingDetail'));

  return (
    <RestaurantDetail
      restaurant={restaurant}
      isFetching={isFetchingDetail}
    />
  );
}
