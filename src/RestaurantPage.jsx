import { useParams } from 'react-router-dom';

export default function RestaurantPage({ params }) {
  const { id } = params || useParams();

  return (
    <div>
      마녀식당
      {' '}
      {id}
    </div>
  );
}
