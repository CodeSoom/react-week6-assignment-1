import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <span>헤더</span>
      <Link to="/">홈</Link>
    </header>
  );
}
