import { Link } from 'react-router-dom';

const routers = [
  { path: '/about', name: 'About' },
  { path: '/restaurants', name: 'Restaurants' },
];

export default function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        {
          routers.map(({ path, name }) => (
            <li key={path}>
              <Link to={path}>{name}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
