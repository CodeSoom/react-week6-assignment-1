export default function RestaurantDetail({ restaurant }) {
  return (
    <div>
      레스토랑
      {' '}
      {restaurant.id}
      {' '}
      {restaurant.name}
    </div>
  );
}
