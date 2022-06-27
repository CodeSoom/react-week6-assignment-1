import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';
import RestaurantInfoContainer from '../container/RestaurantInfoContainer';

import { loadRestaurantInfo } from '../redux/actions';

export default function RestaurantInfoPage() {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(loadRestaurantInfo(id));
  }, []);

  return (
    <div>
      <RestaurantInfoContainer />
    </div>
  );
}
