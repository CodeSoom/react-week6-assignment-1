import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <ul>
        <li>
          <Link to="./about">Home</Link>
        </li>
        <li>
          <Link to="./restaurants">Restaurants</Link>
        </li>
        <li>
          <Link to="./xxx">멸망의 길</Link>
        </li>
      </ul>
    </div>
  );
}
