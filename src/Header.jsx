import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>
        <Link to="/">
          헤더
        </Link>
      </h1>
    </header>
  );
}
