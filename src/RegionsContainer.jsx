import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectRegion, loadRestaurants } from './actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  function handleClick(id) {
    dispatch(selectRegion(id));
    dispatch(loadRestaurants());
  }

  const { regions, selectedRegionId } = useSelector((state) => ({
    regions: state.regions,
    selectedRegionId: state.selectedRegionId,
  }));

  return (
    <ul>
      {regions.map(({ id, name }) => (
        <li key={id}>
          <button type="button" onClick={() => handleClick(id)}>
          {`${name}${selectedRegionId === id ? '(v)':''}`}</button>
        </li>
      ))}
    </ul>
  );
}
