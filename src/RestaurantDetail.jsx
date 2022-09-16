export default function RestaurantDetail({ restaurantDetail }) {
  return (
    <>
      <h2>{restaurantDetail.name}</h2>
      <p>
        주소:
        {' '}
        {restaurantDetail.address}
      </p>
      <h3>메뉴</h3>
      <ul>
        {restaurantDetail.menuItems.map((menuItem) => (
          <li key={menuItem.id}>
            {menuItem.name}
          </li>
        ))}
      </ul>
    </>
  );
}
