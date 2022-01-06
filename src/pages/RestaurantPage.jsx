import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { loadRestaurant } from '../actions';
import { isEmptyObj } from '../utils';

export default function RestaurantPage() {
  const dispatch = useDispatch();
  const params = useParams();

  const { restaurant } = useSelector((state) => state);

  useEffect(() => {
    dispatch(loadRestaurant(params.id));
  }, []);

  if (isEmptyObj(restaurant)) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  const { name, address, menuItems } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <p>
        주소:
        {' '}
        {address}
      </p>
      <div>
        <h3>메뉴</h3>
        <ul>
          {menuItems.map((menu) => (
            <li key={menu.id}>{menu.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
