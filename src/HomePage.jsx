import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <ul>
        <Link to="/about"><li>About</li></Link>
        <Link to="/restaurants"><li>Restaurants</li></Link>
      </ul>
    </div>
  );
}
