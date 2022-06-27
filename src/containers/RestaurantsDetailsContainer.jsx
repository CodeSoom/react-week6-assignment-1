import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import { useEffect } from 'react';

import { get } from '../utils';

import { loadRestaurantsDetails } from '../actions';

import NotFoundPage from '../pages/NotFoundPage';

import RestaurantsDetails from '../components/RestaurantsDetails';

export default function RestaurantsDetailsContainer() {
  const dispatch = useDispatch();

  const { id } = useParams();

  if (!Number(id)) {
    return (<NotFoundPage />);
  }

  useEffect(() => {
    dispatch(loadRestaurantsDetails(id));
  }, []);

  const restaurantsDetails = useSelector(get('restaurantsDetails'));

  return (
    <RestaurantsDetails restaurantsDetails={restaurantsDetails} />
  );
}
