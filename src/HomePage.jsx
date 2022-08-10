import { Link } from 'react-router-dom';

const HomePage = () => (
  <>
    <h2>Home</h2>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/restaurants">Restaurants</Link>
      </li>
    </ul>
  </>
);

export default HomePage;
