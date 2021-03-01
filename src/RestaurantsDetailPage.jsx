import React from 'react';

import { useLocation } from 'react-router-dom';

export default function RestaurantsDetailPage() {
  const { name } = useLocation().state;

  return (
    <div>
      <h2>{name}</h2>
      <h4>주소:</h4>
      <h3>메뉴</h3>
    </div>
  );
}
