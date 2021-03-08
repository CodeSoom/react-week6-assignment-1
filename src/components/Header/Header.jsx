import React from 'react';

import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <p>
        <Link to="/">
          헤더
        </Link>
      </p>
    </header>
  );
}
