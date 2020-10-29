import React from 'react';

import { useSelector } from 'react-redux';

function RestaurantDetailContainer() {
  const { selectedRestaurant } = useSelector((state) => ({
    selectedRestaurant: state.selectedRestaurant,
  }));

  if (!selectedRestaurant) {
    return <div>로딩중...</div>;
  }

  const { name, address, menuItems } = selectedRestaurant;

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
}

export default RestaurantDetailContainer;
