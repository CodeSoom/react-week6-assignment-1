import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <p>HOME</p>
      <ul>
        <li>
          <Link to="/about">소개페이지</Link>
        </li>
        <li>
          <Link to="/restaurants">레스토랑 페이지</Link>
        </li>
        <li>
          <Link to="/sdfadfv">nowhere</Link>
        </li>
      </ul>
    </div>
  );
}
