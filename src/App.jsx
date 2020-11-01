import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import {
  loadInitialData,
} from './actions';

function HomePage() {
  return (
    <h2>Home</h2>
  );
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  });

  return (
    <div>
      <HomePage />
    </div>
  );
}
