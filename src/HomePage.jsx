import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <p>Home</p>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/restaurants">Restaurants</Link></li>
    </div>
  );
}
