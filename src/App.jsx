import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import {
  loadInitialData,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  }, []);

  return (
    <div>
      <h1>헤더</h1>
      <h2>Home</h2>
      <ul>
        <li>About</li>
        <li>Restaurants</li>
      </ul>
    </div>
  );
}
