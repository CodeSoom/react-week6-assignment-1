import { useParams } from 'react-router';

import RestaurantContainer from '../../container/RestaurantContainer';

export default function RestaurantPage({ params }) {
  const { id: restaurantId } = params || useParams();

  return <RestaurantContainer restaurantId={restaurantId} />;
}
