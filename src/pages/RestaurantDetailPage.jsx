import { useParams } from 'react-router-dom';

export default function RestaurantDetailPage() {
  const { restaurantid } = useParams();
  return <div>{restaurantid}</div>;
}
