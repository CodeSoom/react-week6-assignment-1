import { useParams } from 'react-router-dom';

import RestaurantDetailContainer from '../Components/RestaurantDetailContainer';

export default function RestaurantDetailpage() {
  const { id } = useParams();

  return ((<RestaurantDetailContainer restaurantId={id} />));
}
