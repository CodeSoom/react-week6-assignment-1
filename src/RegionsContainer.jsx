import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Regions from './regions';

import { selectRegion } from './actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  function handleClick(id) {
    dispatch(selectRegion(id));
  }

  const { regions } = useSelector((state) => ({
    regions: state.regions
  }));

  return (
    <Regions
      regions={regions}
      onClick={handleClick}
    />
  );
}
