import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { loadRestaurantDetail } from './actions';

export default function RestaurantDetail() {
  const restaurantDetail = useSelector((state) => state.restaurantDetail);

  const { restaurantId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurantDetail(restaurantId));
  }, []);

  if (!Object.keys(restaurantDetail)) {
    return (<div>Loading...</div>);
  }

  const { name, address, menuItems } = restaurantDetail;
  return (
    <>
      <h2>
        {name}
      </h2>
      <div>
        주소 :
        {' '}
        {address}
      </div>
      <h2>메뉴</h2>
      <ul>
        {menuItems && menuItems.map((item) => (<li key={item.id}>{item.name}</li>))}
      </ul>
    </>
  );
}
