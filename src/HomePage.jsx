import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="about">
        <li>About</li>
      </Link>
      <Link to="restaurants">
        <li>Restaurants</li>
      </Link>
    </div>
  );
}
