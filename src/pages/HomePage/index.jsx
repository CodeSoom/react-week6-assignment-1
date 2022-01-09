import { Link } from 'react-router-dom';

const pages = [
  { name: 'About', path: '/about' },
  { name: 'Restaurants', path: '/restaurants' },
];

export default function HomePage() {
  return (
    <section>
      <h1>Home</h1>
      <ul>
        {pages.map(({ name, path }) => (
          <li key={path}>
            <Link to={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
