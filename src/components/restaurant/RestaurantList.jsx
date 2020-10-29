import React from 'react';

import { Link } from 'react-router-dom';

const RestaurantList = ({ restaurants }) => {
  if (restaurants.length === 0) {
    return null;
  }

  return (
    <ul>
      {restaurants.map(({ id, name }) => (
        <li key={id}>
          <Link to={`restaurants/${id}`}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default RestaurantList;
