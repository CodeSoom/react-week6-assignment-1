export default function RestaurantDetail({ error, restaurant, loading }) {
  const { name, address, menuItems } = restaurant || {};

  if (error) {
    return <p>잘못된 경로 입니다.</p>;
  }

  if (!restaurant || loading) {
    return <p>loading...</p>;
  }

  return (
    <div>
      <h2>{name}</h2>
      <p>
        주소:
        {' '}
        {address}
      </p>
      <h3>메뉴</h3>
      <ul>
        {menuItems.map((menu) => (
          <li key={menu.id}>
            {menu.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
