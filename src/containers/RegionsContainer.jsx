import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { selectRegion, loadRestaurants } from '../actions';
import RegionList from '../components/region/RegionList';

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
    <RegionList
      regions={regions}
      selectedRegion={selectedRegion}
      onRegionClick={handleClick}
    />
  );
}
