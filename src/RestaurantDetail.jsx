import RestaurantMenuItem from './RestaurantMenuItem';

export default function RestaurantDetail({ restaurantInfo }) {
  const { name, address, menuItems } = restaurantInfo;

  return (
    <div>
      <h2>{name}</h2>
      <p>
        주소 :
        {' '}
        {address}
      </p>
      <h3>메뉴 : </h3>
      <RestaurantMenuItem menuItems={menuItems} />
    </div>
  );
}
