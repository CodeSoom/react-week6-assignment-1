export default function RestaurantContainer() {
  const { name, address, menuItems } = {
    id: 1,
    categoryId: 1,
    name: '양천주가',
    address: '서울 강남구 123456',
    menuItems: [
      {
        id: 1,
        restaurantId: 1,
        name: '비빔밥',
      },
      {
        id: 2,
        restaurantId: 1,
        name: '짬뽕',
      },
      {
        id: 16,
        restaurantId: 1,
        name: '탕수육',
      },
    ],
  };
  return (
    <>
      <h2>{name}</h2>
      <p>{address}</p>
      <h3>메뉴</h3>
      <ul>
        {menuItems.map(({ name: menu }) => (
          <li>{menu}</li>
        ))}
      </ul>
    </>
  );
}
