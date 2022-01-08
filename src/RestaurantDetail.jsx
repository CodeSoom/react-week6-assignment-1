export default function RestaurantDetail({
  restaurant: {
    name,
    address,
    menuItems,
  },
}) {
  return (
    <div>
      <h1>{name}</h1>
      <address>{address}</address>
      <h2>메뉴</h2>
      <ul>
        {menuItems.map((menuItem) => (
          <li key={menuItem.id}>
            {menuItem.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
