import { useSelector } from 'react-redux';

import { get } from './utils';

export default function RestaurantDetailPage() {
  const {
    name, address, menuItems, reviews,
  } = useSelector(get('restaurantDetail'));

  return (
    <div>
      <h1>상세정보</h1>
      <h2>{name}</h2>
      <p>
        주소:&nbsp;
        {`${address}`}
      </p>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <em>{review.name}</em>
            <p>{review.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}