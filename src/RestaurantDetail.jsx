import React from 'react';

export default function RestaurantDetail({
  restaurant: {
    name, address, menuItems, reviews, information,
  },
}) {
  return (
    <div>
      <h2>{name}</h2>
      <p>
        {'주소 : '}
        <span>{address}</span>
      </p>
      <p>
        {'정보 : '}
        <span>{information}</span>
      </p>
      <h3>메뉴</h3>
      <ul className="menu-list">
        {menuItems.map((menu) => (
          <li key={menu.id}>
            {menu.name}
          </li>
        ))}
      </ul>
      <h3>리뷰</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            {review.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
