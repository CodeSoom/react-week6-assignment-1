import { useSelector } from 'react-redux';

export default function RestaurantPage() {
  const { restaurant } = useSelector((selector) => ({
    restaurant: selector.restaurant,
  }));

  const { name, address, menuItems } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <p>
        주소:
        {' '}
        {address}
      </p>
      <h3>메뉴</h3>
      <ul>
        {menuItems.map((menu) => (
          <li key={menu.id}>
            {menu.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
