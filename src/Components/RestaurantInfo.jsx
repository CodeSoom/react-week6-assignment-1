export default function RestaurantInfo({ restaurantName, address, menuItems }) {
  return (
    <>
      <h2>{restaurantName}</h2>
      <div>
        <span>주소:</span>
        <span>{address}</span>
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
