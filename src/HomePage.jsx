import React from 'react';

import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link href="/about">
          About
        </Link>
      </nav>
    </div>
  );
}
