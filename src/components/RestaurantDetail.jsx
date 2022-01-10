import { isEmptyObject, isEmptyArray } from '../utils';

export default function RestaurantDetail({ restaurant }) {
  if (isEmptyObject(restaurant)) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  const { name: restaurantName, address, menuItems } = restaurant;

  if (isEmptyArray(menuItems)) {
    return (
      <div>
        <p>
          메뉴가 없습니다.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2>{restaurantName}</h2>
      <p>
        주소:
        {' '}
        {address}
      </p>
      <div>
        <h3>메뉴</h3>
        <ul>
          {menuItems.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
