import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { fetchRestaurant } from './services/api';

export default function RestaurantPage() {
  const [state, setState] = useState({
    restaurant: null,
  });

  const { restaurantId } = useParams();

  async function loadRestaurant() {
    const restaurant = await fetchRestaurant({ restaurantId });

    setState({
      ...state,
      restaurant,
    });
  }

  useEffect(() => {
    if (restaurantId) {
      loadRestaurant();
    }
  }, [restaurantId]);

  if (state.restaurant === null) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  const { name, address, menuItems } = state.restaurant;

  return (
    <div>
      restaurantId:
      {restaurantId}
      <h1>{name}</h1>
      <address>{address}</address>
      <h2>메뉴</h2>
      <ul>
        {
          menuItems.map((menu) => (
            <li key={menu.id}>
              {menu.name}
            </li>
          ))
        }
      </ul>
    </div>
  );
}
