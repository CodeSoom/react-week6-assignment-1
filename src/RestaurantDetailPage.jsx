import {
  useParams,
} from 'react-router-dom';

export default function RestaurantDetailPage() {
  const { id } = useParams();

  return (
    <p>
      RestaurantDetailPage:
      {id}
    </p>
  );
}
