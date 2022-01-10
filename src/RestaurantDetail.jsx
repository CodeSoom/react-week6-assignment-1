import MenuItems from './MenuItems';

export default function RestaurantDetail({ restaurant }) {
  const { name, address, menuItems } = restaurant;
  return (
    <>
      <h2>{name}</h2>
      <span>주소 : </span>
      <span>
        {address}
      </span>
      <h3>메뉴</h3>
      <MenuItems menuItems={menuItems} />
    </>
  );
}
