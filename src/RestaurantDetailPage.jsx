import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRestaurantDetail } from './services/api';

async function loadRestaurantDetail({ restaurantId, setState, state }) {
  const data = await fetchRestaurantDetail({ restaurantId });
  setState({
    ...state,
    restaurant: data,
  });
}

export default function RestaurantDetailPage() {
  const [state, setState] = useState({
    restaurant: {
      id: null,
      categoryId: null,
      name: '',
      address: '',
      menuItems: [],
      reviews: [],
      information: '',
    },
  });

  const { id } = useParams();

  useEffect(() => {
    loadRestaurantDetail({ restaurantId: id, setState, state });
  }, []);

  const { name, address, menuItems } = state.restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <p>{address}</p>

      <h3>메뉴</h3>
      <ul>
        {
          menuItems.map((menu) => (
            <li key={menu.id}>{menu.name}</li>
          ))
        }
      </ul>
    </div>
  );
}
