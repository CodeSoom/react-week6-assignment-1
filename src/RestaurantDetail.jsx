import React from 'react';

export default function RestaurantDetail({ restaurant }) {
  return (
    <>
      {restaurant ? (
        <div>
          <h2>{restaurant.name}</h2>
          <p>{restaurant.address}</p>
          <dl>
            <dt>메뉴</dt>
            {
              restaurant.menuItems.map((menu) => (
                <dd key={menu.id}>
                  {menu.name}
                </dd>
              ))
            }
          </dl>
        </div>
      ) : (
        <div>로딩중..</div>
      )}
    </>
  );
}
