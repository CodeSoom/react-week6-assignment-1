import { useSelector } from 'react-redux';

import { get } from './utils';

export default function RestaurantDetailsContainer() {
  // TODO: 해당 state 충족하도록 action, reducer 수정

  const restaurantDetails = useSelector(get('restaurantDetails'));

  if (!restaurantDetails) {
    return (
      <h2>Loading...</h2>
    );
  }

  const { name, address, menuItems } = restaurantDetails;

  return (
    <div>
      <h2>{name}</h2>
      <p>{address}</p>
      <h2>메뉴</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
