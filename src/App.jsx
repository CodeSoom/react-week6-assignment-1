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
      <HomePage />
    </div>
  );
}
