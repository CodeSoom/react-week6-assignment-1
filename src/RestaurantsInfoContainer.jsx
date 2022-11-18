import { useSelector } from 'react-redux';

export default function RestaurantsInfoContainer() {
  const { restaurantInfo } = useSelector((state) => ({
    restaurantInfo: state.restaurantInfo,
  }));

  if (!restaurantInfo) {
    return <p>Loading...</p>;
  }

  const { name, address, menuItems } = restaurantInfo;

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
        {
          menuItems?.map(({ id, name: menuName }) => (
            <li key={id}>
              {menuName}
            </li>
          ))
        }
      </ul>
    </div>
  );
}
