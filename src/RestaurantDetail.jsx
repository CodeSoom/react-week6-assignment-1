import React from 'react';

import List from './List';

export default function RestaurantDetail({ restaurant }) {
  if (!restaurant) {
    return <h3>텅~!</h3>;
  }

  const {
    name, address, menuItems, reviews, information,
  } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <div>
        {`주소 : ${address}`}
      </div>
      <div>
        {`정보 : ${information}`}
      </div>
      <List
        title="메뉴"
        list={menuItems}
      />
      <List
        title="리뷰"
        list={reviews}
      />
    </div>
  );
}
