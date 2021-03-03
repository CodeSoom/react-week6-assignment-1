import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { initializeState } from './actions';

import Home from './Home';

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeState());
  }, []);

  return (
    <Home />
  );
}
