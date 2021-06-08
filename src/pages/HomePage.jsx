import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <h2>
        Home
      </h2>

      <ul>
        <Link to="/about">About</Link>
        <br />
        <Link to="/restaurants">Restaurants</Link>
      </ul>
    </>
  );
}
