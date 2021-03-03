import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadRestaurantDetail } from './actions';
import { get } from './utils';

function RestaurantsDetailContainer() {
  const dispatch = useDispatch();

  const { id } = useParams();

  const restaurantDetail = useSelector(get('restaurantDetail'));

  useEffect(() => {
    dispatch(loadRestaurantDetail(id));
  }, []);

  return (
    <>
      {restaurantDetail ? (
        <div>
          <h2>{restaurantDetail.name}</h2>
          <p>{restaurantDetail.address}</p>
          <dl>
            <dt>메뉴</dt>
            {
              restaurantDetail.menuItems.map((menu) => (
                <dd key={menu.id}>
                  {menu.name}
                </dd>
              ))
            }
          </dl>
        </div>
      ) : <div>로딩중..</div>}
    </>
  );
}

export default RestaurantsDetailContainer;
