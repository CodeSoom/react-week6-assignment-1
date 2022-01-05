export default function Restaurant({ restaurant }) {
  if (!restaurant) {
    return <p>레스토랑이 없습니다.</p>;
  }

  const { name, address, menuItems } = restaurant;

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {`주소: ${address}`}
      </p>
      <h2>메뉴</h2>
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
