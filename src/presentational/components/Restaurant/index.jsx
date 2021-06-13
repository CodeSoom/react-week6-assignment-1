export default function Restaurant({
  restaurant,
  onClickChangeRoute,
}) {
  const { id, name } = restaurant;

  function handleClick(restaurantId) {
    return (event) => {
      event.preventDefault();

      onClickChangeRoute(restaurantId);
    };
  }

  return (
    <li>
      <a
        href={`restaurants/${id}`}
        onClick={handleClick(id)}
      >
        {name}
      </a>
    </li>
  );
}
