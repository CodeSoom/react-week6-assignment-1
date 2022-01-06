import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <span>HEADER</span>
      <Link to="/">Home</Link>
    </header>
  );
}
