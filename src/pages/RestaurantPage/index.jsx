import { useParams } from 'react-router';

import RestaurantContainer from '../../container/RestaurantContainer';

export default function RestaurantPage() {
  const { id: restaurantId } = useParams();

  return <RestaurantContainer restaurantId={restaurantId} />;
}
