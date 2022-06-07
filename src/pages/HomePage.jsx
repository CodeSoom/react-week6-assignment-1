import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <ul>
        <li>
          <Link to="./about">about</Link>
        </li>
        <li>
          <Link to="./restaurants">restaurants</Link>
        </li>
        <li>
          <Link to="./xxx">멸망의 길</Link>
        </li>
      </ul>
    </div>
  );
}
