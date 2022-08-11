import NotFound from './NotFound';

export default function RestaurantDetail({ restaurant }) {
  const { name, address, menuItems } = restaurant;

  if (!restaurant.id) return <NotFound />;

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
