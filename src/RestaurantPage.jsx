import { useSelector } from 'react-redux';

export default function RestaurantPage() {
  const { restaurant } = useSelector((selector) => ({
    restaurant: selector.restaurant,
  }));

  return (
    <div>
      <h2>{restaurant.name}</h2>
      <p>
        주소:
        {' '}
        {restaurant.address}
      </p>
      <h3>메뉴</h3>
      <ul>
        {restaurant.menuItems.map((menu) => (
          <li key={menu.id}>
            {menu.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
