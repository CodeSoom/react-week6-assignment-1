import React from 'react';

import './Loading.css';

export default function Loading() {
  return (
    <div className="loading">
      <h2>loading ...</h2>
      <svg className="loading-circle">
        <circle cx="50%" cy="50%" r="25" />
      </svg>
    </div>
  );
}
