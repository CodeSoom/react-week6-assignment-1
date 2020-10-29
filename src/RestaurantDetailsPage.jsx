import React from 'react';

import RestaurantMenuItems from './RestaurantMenuItems';

export default function RestaurantsDetailsPage({ restaurant: { name, address, menuItems } }) {
  if (!name) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h1>{name}</h1>
      <p>
        주소 :
        {address}
      </p>
      <RestaurantMenuItems menuItems={menuItems} />
    </>
  );
}
