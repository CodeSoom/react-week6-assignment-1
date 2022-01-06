export default function RestaurantInfo({ restaurantName, address, menuItems }) {
  return (
    <>
      <h2>{restaurantName}</h2>
      <div>
        주소:
        {address}
      </div>
      <h2>
        메뉴
      </h2>
      <ul>
        {menuItems && menuItems.map(({ id, name }) => (
          <li
            key={id}
          >
            {name}
          </li>
        ))}
      </ul>
    </>
  );
}
