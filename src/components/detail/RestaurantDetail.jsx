import React from 'react';

const RestaurantDetail = ({ restaurant }) => {
  if (!restaurant) {
    return <div>로딩중...</div>;
  }

  const { name, address, menuItems } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <p>{`주소: ${address}`}</p>
      {menuItems.map((menu) => (
        <li key={menu.id}>
          {menu.name}
        </li>
      ))}
    </div>
  );
};

export default RestaurantDetail;
