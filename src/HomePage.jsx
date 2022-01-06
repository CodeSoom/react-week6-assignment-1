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
        <li>
          <Link to="/tesdadsfadt">라우팅 안해준 페이지</Link>
        </li>
      </ul>
    </div>
  );
}
