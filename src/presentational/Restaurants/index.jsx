import Restaurant from '../components/Restaurant';

export default function Restaurants({
  restaurants,
  onClickChangeRoute,
}) {
  return (
    <ul>
      {restaurants.map((restaurant) => (
        <Restaurant
          key={restaurant.id}
          restaurant={restaurant}
          onClickChangeRoute={onClickChangeRoute}
        />
      ))}
    </ul>
  );
}
