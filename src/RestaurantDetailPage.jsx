import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadRestaurantDetail } from './actions';

import { get } from './utils';

export default function RestaurantDetailPage() {
  const dispatch = useDispatch();
  const {
    name, address, menuItems, reviews,
  } = useSelector(get('restaurantDetail'));

  useEffect(() => {
    dispatch(loadRestaurantDetail());
  }, []);

  if (!name) return (<div>로딩중...</div>);

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
