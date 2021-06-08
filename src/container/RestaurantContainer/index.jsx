import { useSelector } from 'react-redux';

import { get } from '../../utils';

export default function RestaurantContainer() {
  const restaurant = useSelector(get('restaurant'));

  return (
    <div>
      <h2>메뉴</h2>
      <ul>
        {
          restaurant?.menuItems.map(({ name, id }) => (
            <li key={id}>
              {name}
            </li>
          ))
        }
      </ul>
      <p>
        주소:
        {' '}
        {restaurant?.information}
      </p>
    </div>
  );
}
