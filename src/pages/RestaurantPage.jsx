import { useParams } from 'react-router-dom';

import RestaurantContainer from '../containers/RestaurantContainer';

export default function RestaurantPage() {
  const params = useParams();

  return (
    <RestaurantContainer restaurantId={params.id} />
  );
}
