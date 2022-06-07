import { useSelector } from 'react-redux';
import { get } from './utils';

export default function RestaurantInfoContainer() {
  const restaurantInfo = useSelector(get('restaurantInfo'));
  const restaurantInfoLoading = useSelector(get('restaurantInfoLoading'));

  if (!restaurantInfoLoading) {
    return (
      <p>
        Loading...
      </p>
    );
  }

  const { name, address, menuItems } = restaurantInfo;
  return (
    <>
      <h2>{name}</h2>
      <p>
        주소:
        {address}
      </p>
      <ul>
        {menuItems.map((menu) => (<li key={menu.id}>{menu.name}</li>))}
      </ul>
    </>
  );
}
