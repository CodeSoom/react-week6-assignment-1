import { useSelector } from 'react-redux';

export default function RestaurantDetailPage() {
  const restaurant = useSelector((state) => state.restaurant);

  const { name, address, menuItems } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <p>{`주소: ${address}`}</p>
      <h3>메뉴</h3>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
