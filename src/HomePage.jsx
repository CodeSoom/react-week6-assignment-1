import { AboutPage } from './App';
import RestaurantsPage from './RestaurantsPage';

export default function HomePage() {
  return (
    <div>
      <h1>Welcome Home!</h1>
      <ul>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/restaurants">Restaurants</a>
        </li>
      </ul>
    </div>
  );
}
