import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Regions from './regions';

export default function RegionsContainer() {
 

  const { regions } = useSelector((state) => ({
    regions: state.regions
  }));

  return (
    <Regions
      regions={regions}
    />
  );
}
