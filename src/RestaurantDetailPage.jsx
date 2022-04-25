import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import { get } from './utils';

import { loadRestaurantDetail } from './actions';

export default function RestaurantDetailPage() {
  const { restaurantId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurantDetail({ restaurantId }));
  }, [restaurantId]);

  const restaurantDetail = useSelector(get('restaurantDetail'));

  if (!restaurantDetail) {
    return (
      <p>레스토랑 정보가 없어요!</p>
    );
  }

  return (
    <>
      <h2>
        {restaurantDetail.name}
      </h2>
      <p>
        주소:
        {' '}
        {restaurantDetail.address}
      </p>
      <h3>
        메뉴
      </h3>
      <ul>
        {restaurantDetail.menuItems?.map((menuItem) => (
          <li key={menuItem.id}>
            {menuItem.name}
          </li>
        ))}
      </ul>
    </>
  );
}
