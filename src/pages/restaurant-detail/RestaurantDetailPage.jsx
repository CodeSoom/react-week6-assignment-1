import { useParams } from 'react-router-dom';

export default function RestaurantDetailPage() {
  const { restaurantId } = useParams();

  return (
    <p>{restaurantId}</p>
  );
}
