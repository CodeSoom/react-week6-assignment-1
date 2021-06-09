import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadRestaurantInfo } from '../redux_module/asyncActions';

export default function RestaurantPage({ restaurantID }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurantInfo(restaurantID));
  }, []);

  const { name, address, menuItems } = useSelector(
    (state) => state.restaurant.selected.restaurant,
  );

  // Todo container/presentational 도입(?)

  return (
    <>
      <h2>{name}</h2>
      <h3>{address}</h3>

      <ul>
        {menuItems.map((item) => (
          <li key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
