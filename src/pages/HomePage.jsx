import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <h2>Home</h2>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/restaurants">RESTAURANTS</Link></li>
        <li><Link to="/sss">어디로</Link></li>
      </ul>
    </div>
  );
}
