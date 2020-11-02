import React from 'react';

import { Link } from 'react-router-dom';

const Restaurant = ({ restaurant }) => {
  const { id, name } = restaurant;

  return (
    <li>
      <Link to={`restaurants/${id}`}>
        {name}
      </Link>
    </li>
  );
};

export default Restaurant;
