import { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { loadRestaurantDetail } from './actions';

export default function RestaurantDetail() {
  const id = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurantDetail(id));
  }, [id]);

  const { restaurantDetail } = useSelector((state) => console.log(state));

  return <div>{id.id}</div>;
}
