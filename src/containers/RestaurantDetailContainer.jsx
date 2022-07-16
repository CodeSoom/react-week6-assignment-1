import { useSelector } from 'react-redux';

import { get } from '../utils';

export default function RestaurantDetailContainer() {
  const restaurant = useSelector(get('restaurant'));
  const loading = useSelector(get('loading'));

  if (loading) {
    return (
      <div>loading...</div>
    );
  }

  const {
    name,
    address,
    menuItems,
  } = restaurant;

  return (
    <>
      <h2>{name}</h2>
      <p>{address}</p>
      <h3>메뉴</h3>

      {menuItems && (
        <ul>
          {
            menuItems.map((menu) => (
              <li key={menu.id}>
                {menu.name}
              </li>
            ))
          }
        </ul>
      )}
    </>
  );
}
