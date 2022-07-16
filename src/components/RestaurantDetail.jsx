import { isEmptyObject } from '../utils';

export default function RestaurantDetail({ restaurant, isFetching }) {
  if (isFetching || !restaurant) {
    return (
      <div>loading...</div>
    );
  }

  if (isEmptyObject(restaurant)) {
    return (
      <div>
        레스토랑 정보 조회에 실패했습니다.
      </div>
    );
  }

  const {
    name,
    address,
    menuItems,
  } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <p>{address}</p>
      <h3>메뉴</h3>

      {menuItems && (
        <ul>
          {
            menuItems.map((menu) => (
              <li key={menu.id}>
                {menu.name}
              </li>
            ))
          }
        </ul>
      )}
    </div>
  );
}
