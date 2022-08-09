import NotFoundPage from './NotFoundPage';

export default function Restaurant({ restaurant }) {
  const { name, address, menuItems } = restaurant;

  if (!restaurant.id) return <NotFoundPage />;

  return (
    <>
      <h2>{name}</h2>
      <p>
        주소:
        {address}
      </p>
      <h3>메뉴</h3>
      <ul>
        {menuItems && menuItems.map((menu) => (
          <li key={menu.id}>{menu.name}</li>
        ))}
      </ul>
    </>
  );
}
