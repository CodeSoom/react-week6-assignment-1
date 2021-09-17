import { Link } from 'react-router-dom';

export default function HomePage() {
  const routers = [
    { path: '/about', name: 'About' },
    { path: '/restaurants', name: 'Restaurants' },
  ];

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
