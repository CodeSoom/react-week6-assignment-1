import { useSelector } from 'react-redux';

import { get } from '../utils';

export default function RestaurantInfoContainer() {
  const restaurant = useSelector(get('restaurant'));

  return (
    <>
      <h1>{restaurant.name}</h1>
      <h2>
        <span>주소:</span>
        <span>{restaurant.address}</span>
      </h2>
      <h2>메뉴</h2>
      <ul>
        {restaurant.menuItems?.map((menuItem) => (
          <li key={menuItem.id}>menuItem.name</li>
        ))}
      </ul>
    </>
  );
}
