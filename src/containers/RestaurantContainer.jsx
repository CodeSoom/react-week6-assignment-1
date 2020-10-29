import React from 'react';
import { useSelector } from 'react-redux';

import { get } from '../utils';
import RestaurantMenu from '../components/RestaurantMenu';

export default function RestaurantContainer() {
  const restaurant = useSelector(get('restaurant'));

  return (
    <div>
      <h2>{restaurant.name}</h2>
      <address>{restaurant.address}</address>

      <RestaurantMenu menus={restaurant.menuItems} />

      <h3>평가</h3>
      <ul>
        {
          restaurant.reviews.map((review) => (
            <li
              key={review.id}
              data-testid={`review${review.id}`}
            >
              <p>
                {`닉네임 : ${review.name}`}
              </p>
              <p>
                점수 :
                {`점수 : ${'★'.repeat(review.score)}${'☆'.repeat(5 - review.score)}`}
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
