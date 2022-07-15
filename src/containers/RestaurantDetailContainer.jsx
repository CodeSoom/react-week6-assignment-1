import { useSelector } from 'react-redux';

import { get } from '../utils';

export default function RestaurantDetailContainer() {
  const restaurant = useSelector(get('restaurant'));

  const {
    name,
    address,
    menu,
  } = restaurant;

  return (
    <>
      <h2>{name}</h2>
      <p>{address}</p>
      <h3>메뉴</h3>

      {menu ? (
        <ul>
          {
            menu.map((item) => (
              <li key={item}>
                {item}
              </li>
            ))
          }
        </ul>
      ) : null}
    </>
  );
}
