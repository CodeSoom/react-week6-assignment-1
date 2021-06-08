export default function RestaurantDetailPage({ match }) {
  return (
    <>
      <h1>{match.params.restaurantId}</h1>
      <p>서울시 강남구</p>
      <p>양천주가</p>
      <p>비빔밥</p>
    </>
  );
}
