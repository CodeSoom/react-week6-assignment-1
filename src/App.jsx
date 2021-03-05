import React from 'react';
import RegionsContainer from './RegionsContainer';
import { loadRegions } from './actions';
import { useDispatch } from 'react-redux';


export default function App() {
  const dispatch = useDispatch();
  dispatch(loadRegions());
  return (
    <RegionsContainer />
  );
}
