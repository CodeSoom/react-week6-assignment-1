import React from 'react';

import HomePage from './HomePage';

export default function App() {
  const { location: { pathname } } = window;

  const MyComponent = {
    '/': HomePage,
  }[pathname];

  return (
    <MyComponent />
  );
}
