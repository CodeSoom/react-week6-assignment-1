import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';

import { loadRestaurantsInfo } from './actions';

import RestaurantsInfoContainer from './RestaurantsInfoContainer';

export default function RestaurantsInfoPage() {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(loadRestaurantsInfo(id));
  }, []);

  return (
    <RestaurantsInfoContainer />
  );
}
