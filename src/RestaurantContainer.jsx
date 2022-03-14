export default function RestaurantContainer({ data }) {
  const { name, address, menuItems } = data;

  if (!data || data === '') {
    return (
      <p>레스토랑 데이터를 불러올 수 없습니다.</p>
    );
  }

  return (
    <div>
      <h2>{name}</h2>
      <p>
        주소:
        {address}
      </p>
      <ul>
        {menuItems ? menuItems.map((menu) => (
          <li key={menu.id}>
            {menu.name}
          </li>
        )) : null}
        ;
      </ul>
    </div>
  );
}
