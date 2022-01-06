export default function RestaurantDetail({ restaurant }) {
  if (!restaurant) {
    return ((
      <section>
        <span>로딩중...</span>
      </section>
    ));
  }

  return (
    <section>
      <h1>{restaurant.name}</h1>
      <h2>상세정보</h2>
      <div>
        <h3>주소</h3>
        <span>{restaurant.address}</span>
      </div>
      <div>
        <h2>메뉴</h2>
        <ul>
          {restaurant.menuItems.map(({ id, name }) => (
            <li key={id}>
              <article>
                <h3>{name}</h3>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
