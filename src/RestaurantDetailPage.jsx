import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { loadRestaurant } from './actions';

export default function RestaurantDetailPage({ match }) {
  const { name, address, menuItems } = useSelector((state) => ({
    name: state.restaurant.name,
    address: state.restaurant.address,
    menuItems: state.restaurant.menuItems,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant(match.params.restaurantId));
  }, []);

  return (
    <>
      <h2>{name}</h2>
      <p>
        주소:
        {address}
      </p>
      <h3>메뉴</h3>
      {menuItems.length === 0
        ? <p>메뉴가 존재하지 않습니다.</p>
        : (
          <ul>
            {menuItems.map(({id, name: menuName}) => (
              <li key={id}>
                {menuName}
              </li>
            ))}
          </ul>
        )
      }
    </>
  );
}
