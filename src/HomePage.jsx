import { Link } from 'react-router-dom';

import Header from './Header';

export default function HomePage() {
  return (
    <>
      <Header />
      <h2>Home</h2>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/restaurants">Restaurants</Link></li>
      </ul>
    </>
  );
}
