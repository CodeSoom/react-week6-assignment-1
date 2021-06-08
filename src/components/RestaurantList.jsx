import { useSelector } from 'react-redux';

export default function RestaurantList() {
  const infos = useSelector((state) => state.restaurant.selectedRestaurants);

  return (
    <ul>
      {infos.map(
        ({ id, name }) => (
          <li key={id}>
            {name}
          </li>
        ),
      )}
    </ul>
  );
}
