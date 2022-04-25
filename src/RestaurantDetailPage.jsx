import { useSelector } from 'react-redux';

import { get } from './utils';

export default function RestaurantDetailPage() {
  const restaurantDetail = useSelector(get('restaurantDetail'));

  if (!restaurantDetail) {
    return (
      <p>Loading...</p>
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
        {restaurantDetail.menuItems.map((menuItem) => (
          <li>
            {menuItem.name}
          </li>
        ))}
      </ul>
    </>
  );
}
