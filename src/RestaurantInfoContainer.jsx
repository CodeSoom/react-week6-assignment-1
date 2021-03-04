import React from 'react';

import {
  useParams,
} from 'react-router-dom';

export default function RestaurantInfoContainer() {
  const { restaurantId } = useParams();

  return (
    <div>
      <h2>Restaurant Information</h2>
      <p>
        Restaurant id:
        {' '}
        {restaurantId}
      </p>
      {/* <h3>{restaurant.name}</h3> */}
      <p>
        주소:
        {' '}
        {/* {restaurant.address} */}
      </p>
      <h4>메뉴</h4>
      {/* <ul>
        {restaurant.menuItems.map((item) => (
          <li key={item.id}>
            {item.name}
          </li>
        ))}
      </ul> */}
    </div>
  );
}
