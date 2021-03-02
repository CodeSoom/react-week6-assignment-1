import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { loadRestaurantDetail } from './actions';
import { get } from './utils';

function RestaurantsDetailePage() {
  const dispatch = useDispatch();

  const restaurantDetail = useSelector(get('restaurantDetail'));

  const { id } = useParams();

  useEffect(() => {
    dispatch(loadRestaurantDetail(id));
  }, [id]);

  return (
    <>
      {restaurantDetail ? (
        <div>
          <h2>{restaurantDetail.name}</h2>
          <p>{restaurantDetail.address}</p>
          <dl>
            <dt>메뉴</dt>
            {restaurantDetail.menuItems.map((menu) => (
              <dd key={menu.id}>{menu.name}</dd>
            ))}
          </dl>
        </div>
      ) : <p>로딩중...</p>}
    </>
  );
}

export default RestaurantsDetailePage;
