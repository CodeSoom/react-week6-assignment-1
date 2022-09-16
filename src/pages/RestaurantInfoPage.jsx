import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';
import { loadRestaurantInfo } from '../store/actions';

import { get } from '../utils';

export default function RestaurantInfoPage() {
  const dispatch = useDispatch();

  const { restaurantId } = useParams();

  useEffect(() => {
    dispatch(loadRestaurantInfo(restaurantId));
  }, []);

  const restaurantInfo = useSelector(get('restaurantInfo'));

  if (!restaurantInfo) {
    return <p>Loading...</p>;
  }

  const { name, address, menuItems } = restaurantInfo;

  return (
    <>
      <h2>
        { name }
      </h2>
      <p>
        주소:
        {' '}
        { address }
      </p>
      <h3>메뉴</h3>
      <ul>
        {
          menuItems.map((menuItem) => (
            <li key={menuItem.id}>
              {menuItem.name}
            </li>
          ))
        }
      </ul>
    </>
  );
}
