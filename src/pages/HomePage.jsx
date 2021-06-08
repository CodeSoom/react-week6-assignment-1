import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <p>
        Home
      </p>
      <ul>
        <Link to="/about">About</Link>
        <Link to="/restaurants">Restaurants</Link>
      </ul>
    </>
  );
}
