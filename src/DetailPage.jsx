import { useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { get } from './utils';

export default function DetailPage() {
  const { id } = useParams();
  console.log(id);

  const restaurants = useSelector(get('restaurants'));

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          {restaurant.name}
        </li>
      ))}
    </ul>
  );
}
