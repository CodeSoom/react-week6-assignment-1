export default function RestaurantsInfoContainer({ restaurantInfo }) {
  console.log(restaurantInfo);

  return (
    <div>
      <h2>{restaurantInfo.name}</h2>
      <p>
        주소:
        {' '}
        {restaurantInfo.address}
      </p>
      <ul>
        {
          restaurantInfo.menuItems?.map(({ id, name: menuName }) => (
            <li key={id}>
              {menuName}
            </li>
          ))
        }
      </ul>
    </div>
  );
}
