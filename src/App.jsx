import React from 'react';

import Restraunts from './Restraunts';

export default function App() {
  return (
    <div>
      <header>
        <h1>
          헤더
        </h1>
      </header>
      <ul>
        <li>About</li>
        <li>Restraunts</li>
      </ul>
      <Restraunts />
    </div>
  );
}
