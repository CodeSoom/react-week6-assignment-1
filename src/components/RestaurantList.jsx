import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function RestaurantList() {
  const restaurants = useSelector(
    (state) => state.restaurant.selectedRestaurants,
  );

  return (
    <ul>
      {restaurants.map(
        ({ id, name }) => (
          <li key={id}>
            <Link to={`/restaurants/${id}`}>{name}</Link>
          </li>
        ),
      )}
    </ul>
  );
}
