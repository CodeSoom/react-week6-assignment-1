import React from 'react';

import { Link } from 'react-router-dom';

export default function HeaderPage() {
  return (
    <div>
      <Link to="/"><h1>헤더</h1></Link>
    </div>
  );
}
