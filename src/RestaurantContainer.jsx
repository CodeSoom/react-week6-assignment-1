import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { loadRestaurant } from './actions';

import { get } from './utils';

export default function RestaurantContainer() {
  const { id } = useParams();
  const { name, address, menuItems } = useSelector(get('restaurant'));
  const loading = useSelector(get('loading'));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant(id));
  }, []);

  const loadedRender = (
    <>
      <h2>{name}</h2>
      <p>
        주소:
        {address}
      </p>
      <h3>메뉴</h3>
      <ul>
        {menuItems && menuItems.map((menu) => (
          <li key={menu.id}>{menu.name}</li>
        ))}
      </ul>
    </>
  );

  const loadingRender = (
    <p>Now Loading...</p>
  );

  return (
    <div>
      {loading ? loadingRender : loadedRender}
    </div>
  );
}
