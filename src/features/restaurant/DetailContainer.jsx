import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  loadRestaurantDetail,
} from '../../apps/store/actions';

import { get } from '../../apps/utils';

import Detail from './Detail';

export default function DetailContainer() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const restaurantDetail = useSelector(get('restaurantDetail'));

  useEffect(() => {
    dispatch(loadRestaurantDetail(id));
  }, [id]);

  return (
    <>
      <Detail
        name={restaurantDetail.name}
        address={restaurantDetail.address}
        menuItems={restaurantDetail.menuItems}
      />
    </>
  );
}
