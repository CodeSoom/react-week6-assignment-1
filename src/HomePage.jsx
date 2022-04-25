import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <h2>Home</h2>
      <ul>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  );
}
