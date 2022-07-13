import { useParams } from 'react-router-dom';

export default function RestaurantPage() {
  const { restaurantId } = useParams();

  return (
    <p>{restaurantId}</p>
  );
}
