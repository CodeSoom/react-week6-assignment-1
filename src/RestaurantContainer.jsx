export default function RestaurantContainer({ data }) {
  const { name, address, menuItems } = data;

  return (
    <div>
      <h2>{name}</h2>
      <p>주소: {address}</p>
      <ul>
        {menuItems ? menuItems.map((menu) => (
          <li key={menu.id}>
            {menu.name}
          </li>
        )): null};
      </ul>
    </div>
  );
}
