export default function RestaurantDetail({ restaurant }) {
  return (
    <>
      <h2>{restaurant.name}</h2>
      <span>주소 : </span>
      <span>
        {restaurant.address}
      </span>
      <h3>메뉴</h3>
      <ul>
        <li>메뉴 리스트가 들어올 자리</li>
      </ul>
    </>
  );
}
