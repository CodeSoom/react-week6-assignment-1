import { useSelector } from 'react-redux';

import { get } from '../../utils';

export default function RestaurantContainer() {
  const restaurant = useSelector(get('restaurant'));

  // NOTE: 이렇게 하게 되면 모든 프로퍼티들을 다 적어줘야 하는데 restaurant 초기값을 null로 하는것이 좋을까?
  if (!(restaurant.menuItems && restaurant.information)) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  return (
    <div>
      <h2>메뉴</h2>
      <ul>
        {
          restaurant.menuItems.map(({ name, id }) => (
            <li key={id}>
              {name}
            </li>
          ))
        }
      </ul>
      <p>
        주소:
        {' '}
        {restaurant.information}
      </p>
    </div>
  );
}
