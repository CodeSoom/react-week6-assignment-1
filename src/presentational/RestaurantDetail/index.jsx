import RestaurantMenuItems from '../components/RestaurantMenuItems';
import RestaurantAddress from '../components/RestaurantAddress';

export default function RestaurantDetail({ restaurant }) {
  const { menuItems, information } = restaurant;

  return (
    <div>
      <h2>메뉴</h2>
      <RestaurantMenuItems menuItems={menuItems} />
      <RestaurantAddress address={information} />
    </div>
  );
}
