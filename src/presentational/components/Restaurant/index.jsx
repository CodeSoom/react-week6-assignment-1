export default function Restaurant({
  restaurant,
  onClick,
}) {
  const { id, name } = restaurant;

  return (
    <li>
      <a
        href={`restaurants/${id}`}
        onClick={(event) => onClick({ event, restaurantId: id })}
      >
        {name}
      </a>
    </li>
  );
}
