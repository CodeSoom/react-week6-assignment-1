import { useParams } from 'react-router-dom';

import RestaurantDetailContainer from './RestaurantDetailContainer';

export default function RestaurantDetailPage({ params }) {
  const { restaurantId } = params || useParams();

  return (
    <RestaurantDetailContainer restaurantId={restaurantId} />
  );
}
