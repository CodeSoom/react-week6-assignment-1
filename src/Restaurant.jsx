export default function Restaurant({ restaurant }) {
  if (!restaurant) {
    return null;
  }

  const { name, address, menuItems } = restaurant;

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {`주소: ${address}`}
      </p>
      <h3>메뉴</h3>
      <ul>
        {menuItems.map(({ id, name: menuName }) => (
          <li key={id}>
            {menuName}
          </li>
        ))}
      </ul>
    </div>
  );
}
