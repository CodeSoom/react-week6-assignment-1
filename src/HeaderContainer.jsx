import React from 'react';

import { useDispatch } from 'react-redux';

import { initializeState } from './actions';

import Header from './Header';

export default function HeaderContainer() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(initializeState());
  }

  return (
    <Header handleClick={handleClick} />
  );
}
