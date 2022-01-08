import { isEmptyObj, isEmptyArray } from '../utils';

export default function RestaurantDetail({ restaurant }) {
  if (isEmptyObj(restaurant)) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  const { name, address, menuItems } = restaurant;

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
      <h2>{name}</h2>
      <p>
        주소:
        {' '}
        {address}
      </p>
      <div>
        <h3>메뉴</h3>
        <ul>
          {menuItems.map((menu) => (
            <li key={menu.id}>{menu.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
