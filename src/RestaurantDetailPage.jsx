import React, { useState, useEffect } from 'react';

import {
  fetchRestaurantInformation,
} from './services/api';

export default function RestaurantDetailPage(props) {
  const [state, setState] = useState({
    id: -1,
    categoryId: -1,
    name: '',
    address: '',
    menuItems: [],
    reviews: [],
    information: '',
  });

  useEffect(async () => {
    const resultInformation = await fetchRestaurantInformation(props.match.params.id);
    setState(resultInformation);
  }, []);

  return (
    <div>
      <h1>{state.name}</h1>
      <p>
        주소:
        {' '}
        {state.address}
      </p>
      <h2>메뉴</h2>
      <ul>
        {state.menuItems.map(({ id, name }) => (
          <li key={id}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
