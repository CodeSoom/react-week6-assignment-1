import MenuItems from './MenuItems';

export default function RestaurantDetail({ restaurant }) {
  const { name, address, menuItems } = restaurant;

  return (
    <div>
      <h4>레스토랑</h4>
      <p>{name}</p>
      <p>{address}</p>
      <p>menu</p>
      <MenuItems menuItems={menuItems} />
    </div>
  );
}
