import React from 'react';

import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">
        About
      </Link>
    </div>
  );
}
