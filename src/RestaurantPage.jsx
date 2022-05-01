import { useParams } from 'react-router-dom';

import RestaurantContainer from './RestaurantContainer';

export default function RestaurantPage() {
  const { restaurantId } = useParams();

  return (
    <RestaurantContainer restaurantId={restaurantId} />
  );
}
