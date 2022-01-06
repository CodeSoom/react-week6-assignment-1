import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <h2>Welcome Home!</h2>
      <ul>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/restaurants">Restaurants</Link>
        </li>
      </ul>
    </div>
  );
}
