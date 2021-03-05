import React from 'react';
import RegionsContainer from './RegionsContainer';
// import { fetchRegions } from './services/api';
import { setRegions } from './actions';
import { useDispatch } from 'react-redux';

async function loadRegions(dispatch) {
  const response = await fetch('https://eatgo-customer-api.ahastudio.com/regions');
  const data = await response.json();
  dispatch(setRegions(data));
}

export default function App() {
  const dispatch = useDispatch();
  loadRegions(dispatch);
  return (
    <RegionsContainer />
  );
}
