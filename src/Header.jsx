import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to="/"><h1>헤더</h1></Link>
    </header>
  );
}
