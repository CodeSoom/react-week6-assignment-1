import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadRestaurant } from './actions';

import { get } from './utils';

export default function RestaurantsDetail({ match }) {
  const dispatch = useDispatch();
  const selectedRestaurant = useSelector(get('selectedRestaurant'));

  useEffect(() => {
    dispatch(loadRestaurant(match && match.params.id));
  }, []);

  return (
    <>
      <h2>Restaurants Detail</h2>
      <div>
        <h3>상호명:</h3>
        <p>{selectedRestaurant && selectedRestaurant.name}</p>
      </div>
      <div>
        <h3>주소:</h3>
        <p>{selectedRestaurant && selectedRestaurant.address}</p>
      </div>
      <div>
        <h3>메뉴: </h3>
        <ul>
          {selectedRestaurant
            && selectedRestaurant.menuItems.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
        </ul>
      </div>
    </>
  );
}
