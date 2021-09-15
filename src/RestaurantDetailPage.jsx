import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setRestaurantDetail } from './actions';

export default function RestaurantDetailPage() {
  const dispatch = useDispatch();

  const {
    name, address, menuItems, reviews,
  } = useSelector((state) => state.restaurantDetail);

  useEffect(() => {
    dispatch(setRestaurantDetail({
      name: '',
      address: '',
      menuItems: [],
      reviews: [],
    }));
  }, []);

  return (
    <>
      <h1>{name}</h1>
      <h2>주소</h2>
      <p>{address}</p>
      <h2>메뉴</h2>
      <ul>
        {menuItems.map((menuItem) => (
          <li key={menuItem.id}>
            {menuItem.name}
          </li>
        ))}
      </ul>
      <h2>리뷰</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            {review.description}
          </li>
        ))}
      </ul>
    </>
  );
}
