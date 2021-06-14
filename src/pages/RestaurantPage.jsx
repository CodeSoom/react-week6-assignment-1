export default function RestaurantPage({ name, address, menuItems }) {
  return (
    <>
      <h2>{name}</h2>
      <h3>{address}</h3>

      <ul>
        {menuItems.map((item) => (
          <li key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
