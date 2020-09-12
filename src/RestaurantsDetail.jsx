import React from 'react';

export default function RestaurantsDetail({ restaurant }) {
  return (
    <>
      <div>
        <h3>상호명:</h3>
        <p>{restaurant && restaurant.name}</p>
      </div>
      <div>
        <h3>주소:</h3>
        <p>{restaurant && restaurant.address}</p>
      </div>
      <div>
        <h3>메뉴: </h3>
        <ul>
          {restaurant && restaurant.menuItems.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
