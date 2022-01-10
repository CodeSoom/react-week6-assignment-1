import { useParams } from 'react-router-dom';

import RestaurantsInfoContainer from './RestaurantsInfoContainer';

export default function RestaurantsInfoPage({ params }) {
  const { id } = params || useParams();

  return (
    <RestaurantsInfoContainer restaurantId={id} />
  );
}
