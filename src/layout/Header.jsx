import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const { pathname } = useLocation();

  if (pathname === '/') return null;

  return (
    <Link to="/">홈으로</Link>
  );
}
