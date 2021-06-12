import { useParams } from 'react-router-dom';

export default function RestaurantDetailPage() {
  const { id } = useParams();

  return (
    <p>
      restaurant
      {' '}
      {id}
    </p>
  );
}
