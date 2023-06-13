import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/about">About</Link>
      <Link to="/restaurants">Restaurants</Link>
      <Link to="/404">멸망의 길</Link>
    </div>
  );
}
