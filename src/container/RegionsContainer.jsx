import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectRegion,
  loadRestaurants,
} from '../actions';

import Regions from '../components/Regions';

import { get } from '../utils';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const regions = useSelector(get('regions'));

  const selectedRegion = useSelector(get('selectedRegion'));

  function handleClick(regionId) {
    dispatch(selectRegion(regionId));
    dispatch(loadRestaurants());
  }

  return (
    <Regions
      regions={regions}
      selectedRegion={selectedRegion}
      onClick={handleClick}
    />

  );
}
