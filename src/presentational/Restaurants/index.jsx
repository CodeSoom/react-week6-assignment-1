import Restaurant from '../components/Restaurant';

export default function Restaurants({
  restaurants,
  onClick,
}) {
  return (
    <ul>
      {restaurants.map((restaurant) => (
        <Restaurant
          key={restaurant.id}
          restaurant={restaurant}
          onClick={onClick}
        />
      ))}
    </ul>
  );
}
