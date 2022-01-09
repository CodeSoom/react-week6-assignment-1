import { useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { get } from './utils';

export default function DetailPage() {
  const { id } = useParams();

  const restaurants = useSelector(get('restaurants'));

  const restaurant = restaurants.find((item) => item.id === id);

  return (
    <ul>
      마녀식당
      {restaurant}
    </ul>
  );
}
