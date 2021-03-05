import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectRegion } from './actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  function handleClick(id) {
    dispatch(selectRegion(id));
  }

  const { regions, selectedRegionId } = useSelector((state) => ({
    regions: state.regions,
    selectedRegionId: state.selectedRegionId,
  }));

  return (
    <ul>
      {regions.map(({ id, name }) => (
        <button type="button" key={id} onClick={() => handleClick(id)}>
        {`${name}${selectedRegionId === id ? '(v)':''}`}</button>
      ))}
    </ul>
  );
}
