import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <div>
      <h2>Home</h2>
      <ul>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Restaurants">Restaurants</Link></li>
      </ul>
    </div>
  );
}
