import { useSelector } from 'react-redux';
import { get, isEmpty } from './utils';

export default function RestaurantInfoContainer() {
  const restaurantInfo = useSelector(get('restaurantInfo'));

  if (isEmpty(restaurantInfo)) {
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
        {menuItems.map(({ id, name: menuName }) => (<li key={id}>{menuName}</li>))}
      </ul>
    </>
  );
}
