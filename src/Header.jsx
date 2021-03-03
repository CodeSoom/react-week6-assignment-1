import React from 'react';

import { Link } from 'react-router-dom';

export default function Header({ handleClick }) {
  return (
    <header>
      <p>
        <Link
          to="/"
          onClick={handleClick}
        >
          헤더
        </Link>
      </p>
    </header>
  );
}
