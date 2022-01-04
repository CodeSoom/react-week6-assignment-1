export default function RestaurantDetail({ restaurant }) {
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
          {restaurant.menu.map(({ id, name }) => (
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
