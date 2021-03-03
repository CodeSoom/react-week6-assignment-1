import React from 'react';
import { useSelector } from 'react-redux';
import { get } from './utils';

function RestaurantsDetailContainer() {
  const restaurantDetail = useSelector(get('restaurantDetail'));

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
                <dd>
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
