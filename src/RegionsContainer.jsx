import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectRegion, loadRestaurants } from './actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  function handleClick(id) {
    dispatch(selectRegion(id));
    dispatch(loadRestaurants());
  }

  const { regions, selectedRegion } = useSelector((state) => ({
    regions: state.regions,
    selectedRegion: state.selectedRegion,
  }));

  return (
    <ul>
      {regions.map(({ id, name }) => (
        <li key={id}>
          <button type="button" onClick={() => handleClick(id)}>
          {`${name}${(selectedRegion ? selectedRegion.id : -1) === id ? '(v)':''}`}</button>
        </li>
      ))}
    </ul>
  );
}
