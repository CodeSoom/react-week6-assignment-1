import React from 'react';

import Restaurant from './Restaurant';

const RestaurantList = ({ restaurants }) => {
  if (restaurants.length === 0) {
    return null;
  }

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <Restaurant
          key={restaurant.id}
          restaurant={restaurant}
        />
      ))}
    </ul>
  );
};

export default RestaurantList;
