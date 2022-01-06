import { Link } from 'react-router-dom';

const pages = [
  { name: 'About', path: '/about' },
  { name: '레스토랑 리스트', path: '/restaurants' },
];

export default function HomePage() {
  return (
    <section>
      <h1>홈페이지</h1>
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
