export default function RestaurantMenuItem({ menuItems }) {
  if (!menuItems || menuItems.length === 0) {
    return <p>메뉴가 없어요!</p>;
  }

  return (
    <ul>
      {
        menuItems.map((menuItem) => (
          <li key={menuItem.id}>
            {menuItem.name}
          </li>
        ))
      }
    </ul>
  );
}
