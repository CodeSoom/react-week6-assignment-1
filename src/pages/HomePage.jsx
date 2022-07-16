import { Link } from 'react-router-dom';

import { capitalizeFirstLetter } from '../utils';

export const ROUTES = ['about', 'restaurants'];

export default function HomePage() {
  return (
    <div>
      <h2>Home</h2>

      <ul>
        {
          ROUTES.map((route) => (
            <li key={route}>
              <Link to={`/${route}`}>
                {capitalizeFirstLetter(route)}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
