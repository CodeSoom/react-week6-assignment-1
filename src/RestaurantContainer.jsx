import { useSelector } from 'react-redux';

import { get } from './utils';

export default function RestaurantContainer() {
  const { name, address, menuItems } = useSelector(get('restaurant'));

  return (
    <>
      <h2>{name}</h2>
      <p>{address}</p>
      <h3>메뉴</h3>
      <ul>
        {menuItems.map(({ name: menu }) => (
          <li key={menu}>{menu}</li>
        ))}
      </ul>
    </>
  );
}
