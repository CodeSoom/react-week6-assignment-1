export default function RestaurantDetail({ menuItems }) {
  if (!menuItems || menuItems.length) {
    return <p>등록된 메뉴가 없습니다.</p>;
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
