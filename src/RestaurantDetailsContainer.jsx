export default function RestaurantDetailsContainer() {
  const restaurant = {
    id: 1,
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
    ],
  };

  const { name, address, menuItems } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <p>{address}</p>
      <h2>메뉴</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
