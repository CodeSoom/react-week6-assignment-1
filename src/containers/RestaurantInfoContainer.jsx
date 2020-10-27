import React from 'react';
import { useSelector } from 'react-redux';

import { get } from '../utils';

export default function RestaurantInfoContainer() {
  const restaurant = useSelector(get('restaurant'));

  return (
    <div>
      <h2>{restaurant.info.name}</h2>
      <address>{restaurant.info.address}</address>

      <h3>메뉴</h3>
      <ul>
        {
          restaurant.info.menuItems.map((item) => (
            <li
              key={item.id}
              data-testid={`menu${item.id}`}
            >
              {item.name}
            </li>
          ))
        }
      </ul>

      <h3>평가</h3>
      <ul>
        {
          restaurant.info.reviews.map((review) => (
            <li
              key={review.id}
              data-testid={`review${review.id}`}
            >
              <p>
                {`닉네임 : ${review.name}`}
              </p>
              <p>
                점수 :
                {`점수 : ${'★ ' * review.score}${'☆ ' * (5 - review.score)}`}
              </p>
              <p>
                {`평가 : ${review.description}`}
              </p>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
