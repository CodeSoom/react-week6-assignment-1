import { useSelector } from 'react-redux';

export default function RestaurantList() {
  const restaurants = useSelector(
    (state) => state.restaurant.selectedRestaurants,
  );

  return (
    <ul>
      {restaurants.map(
        ({ id, name }) => (
          <li key={id}>
            {name}
          </li>
        ),
      )}
    </ul>
  );
}
