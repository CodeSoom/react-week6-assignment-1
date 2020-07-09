import React from 'react';

import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <h1>6-1</h1>
      <li><Link to="about">about</Link></li>
      <li><Link to="restaurants">restaurants</Link></li>
      <li><Link to="notfoundtest">NotFoundPage</Link></li>
    </div>
  );
}
