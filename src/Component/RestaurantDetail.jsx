export default function RestaurantDetail({ restaurant }) {
  return (
    <div>
      <h4>레스토랑</h4>
      <p>{restaurant.name}</p>
      <p>{restaurant.address}</p>
    </div>
  );
}
