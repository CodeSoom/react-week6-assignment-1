import React from 'react';

import { Link } from 'react-router-dom';

const Restaurant = ({ restaurant: { id, name } }) => (
  <li>
    <Link to={`restaurants/${id}`}>
      {name}
    </Link>
  </li>
);

export default Restaurant;
