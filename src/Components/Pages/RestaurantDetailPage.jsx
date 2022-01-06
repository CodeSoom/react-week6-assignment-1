import { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { get } from '../../Utils/utils';

export default function RestaurantDetailpage() {
  const restaurantDetail = useSelector(get('restaurantDetail'));

  useEffect(() => {

  }, []);

  if (!restaurantDetail) {
    return (
      <p>Loading...</p>
    );
  }

  const { name, address, menuItems } = restaurantDetail;

  return (
    <div>
      <h2>{name}</h2>
      <p>{`주소: ${address}`}</p>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
