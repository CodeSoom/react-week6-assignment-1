import React from 'react';

export default function RestaurantDetail({ restaurant }) {
  return (
    <>
      {restaurant ? (
        <div>
          <h2>{restaurant.name}</h2>
          <p>{restaurant.address}</p>
          <div>
            <h3>메뉴</h3>
            <ul>
              {
                restaurant.menuItems.map((menu) => (
                  <li key={menu.id}>
                    {menu.name}
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      ) : (
        <div>로딩중..</div>
      )}
    </>
  );
}
