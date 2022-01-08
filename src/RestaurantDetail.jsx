export default function RestaurantDetail({ restaurant }) {
  return (
    <>
      <h2>{restaurant.name}</h2>
      <span>주소 : </span>
      <span>
        {restaurant.address}
      </span>
      <h3>메뉴</h3>
      <ul>
        {restaurant.menuItems.map((menuItem) => (
          <li key={menuItem.id}>
            {menuItem.name}
          </li>
        ))}
      </ul>
    </>
  );
}
