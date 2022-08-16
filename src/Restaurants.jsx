import { Link } from 'react-router-dom';

export default function Restaurant({ restaurants }) {
  return (
    <ul>
      {restaurants && restaurants.map((restaurant) => {
        const { id, name } = restaurant;
        const path = `/restaurants/${id}`;

        return (
          <li key={id}>
            <Link to={path}>
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
