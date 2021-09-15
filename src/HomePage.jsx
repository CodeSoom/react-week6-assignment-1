import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <Link to="/restaurants"><li>Restaurants</li></Link>
      </ul>
    </div>
  );
}
