import React from 'react';

import { useSelector } from 'react-redux';

import { get } from './utils';

export default function RestaurantDetailContainer() {
  const { done, info } = useSelector(get('selectedRestaurantDetail'));

  if (done === false) {
    return (<div>loading</div>);
  }

  return (
    <>
      <h2>{info.name}</h2>
      <p>{`주소 : ${info.address}`}</p>
      <h3>메뉴</h3>
      <ul>
        {
          info.menuItems.map((menuItem) => (
            <li key={menuItem.id}>
              {menuItem.name}
            </li>
          ))
        }
      </ul>
    </>
  );
}
