export default function RestaurantsDetails({ restaurantsDetails }) {
  if (!restaurantsDetails) {
    return (
      <p>Now is loading</p>
    );
  }

  const { name, address, menuItems } = restaurantsDetails;

  return (
    <div>
      <h1>{name}</h1>
      <p>{`주소: ${address}`}</p>
      <h2>메뉴</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
