export default function Restaurant({ restaurant }) {
  return (
    <>
      <h2>{restaurant.name}</h2>
      <p>
        주소:
        {' '}
        {restaurant.address}
      </p>
      <h3>메뉴</h3>
      <ul>
        {restaurant.menuItems.map(({ id, name }) => (
          <li key={id}>
            {name}
          </li>
        ))}
      </ul>
    </>
  );
}
