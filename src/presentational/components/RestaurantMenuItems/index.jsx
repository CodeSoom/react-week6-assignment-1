export default function RestaurantMenuItems({ menuItems }) {
  if (!(menuItems || []).length) {
    return (
      <p>
        메뉴를 준비중입니다.
      </p>
    );
  }

  return (
    <ul>
      {
        menuItems.map(({ name, id }) => (
          <li key={id}>
            {name}
          </li>
        ))
      }
    </ul>
  );
}
