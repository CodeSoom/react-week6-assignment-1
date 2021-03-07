import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { useParams } from 'react-router';

export default function RestaurantDetail({ params }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({});
  }, []);

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
