import { useParams } from 'react-router-dom';

import RestaurantDetailContainer from './RestaurantDetailContainer';

export default function RestaurantDetailPage({ params }) {
  const { id } = params || useParams();

  return (
    <RestaurantDetailContainer restaurantId={id} />
  );
}
