export default function Restaurant({ restaurant }) {
  return (
    <div>
      <h1>{restaurant.name}</h1>
      <address>{restaurant.address}</address>
      <h2>메뉴</h2>
      <ul>
        {restaurant.menuItems.map(({ name, id }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
