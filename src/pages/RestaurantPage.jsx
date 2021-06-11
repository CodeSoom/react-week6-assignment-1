import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { loadRestaurantInfo } from '../redux_module/asyncActions';

export default function RestaurantPage() {
  const dispatch = useDispatch();
  const { id: restaurantID } = useParams();

  useEffect(() => {
    dispatch(loadRestaurantInfo(restaurantID));
  }, []);

  const { name, address, menuItems } = useSelector(
    (state) => state.restaurant.information,
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
