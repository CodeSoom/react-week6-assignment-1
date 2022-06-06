import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <div>
      <h2>Home화면</h2>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/restaurant">Restaurants</Link>
        </li>
        <li>
          <Link to="/xx">Not Found 테스트</Link>
        </li>
      </ul>
    </div>
  );
}
