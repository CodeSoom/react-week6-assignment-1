import { useSelector } from "react-redux";

export default function RestaurantDetailPage() {
  const { name, address, menuItems } = useSelector((state) => ({
    name: state.restaurant.name,
    address: state.restaurant.address,
    menuItems: state.restaurant.menuItems,
  }));

  return (
    <>
      <h2>{name}</h2>
      <p>주소: {address}</p>
      <h3>메뉴</h3>
      <ul>
        {menuItems.map(({ id, name }) => (
          <li key={id}>
            {name}
          </li>
        ))}
      </ul>
    </>
  );
}
