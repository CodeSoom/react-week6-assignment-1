import React from 'react';

import { useParams } from 'react-router';

export default function RestaurantDetail({ params }) {
  const { id } = params || useParams();
  return (
    <div>
      <div>
        <p>
          레스토랑
          {' '}
          {id}
        </p>
      </div>
    </div>
  );
}
