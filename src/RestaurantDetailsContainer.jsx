import { useSelector } from 'react-redux';

import { get } from './utils';

export default function RestaurantDetailsContainer() {
  const restaurant = useSelector(get('restaurantDetails'));

  if (!restaurant) {
    return (
      <h2>Loading...</h2>
    );
  }

  const { name, address, menuItems } = restaurant;

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
