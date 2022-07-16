import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import {
  loadInitialData,
} from '@/store/async-actions';

import Regions from './Regions';
import Categories from './Categories';
import Restaurants from './Restaurants';

export default function RestaurantsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  });

  return (
    <div>
      <Regions />
      <Categories />
      <Restaurants />
    </div>
  );
}
