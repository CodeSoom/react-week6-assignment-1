import React from 'react';

import { useSelector } from 'react-redux';

import { get } from './utils';

export default function RestaurantDetailContainer() {
  //const restaurantDetail = useSelector(get('restaurantDetail'));
  //console.log(restaurantDetail);
  
  const { name, address, menuItems } = useSelector(get('restaurantDetail'));
  //console.log(menuItems);

  // <ul>
  //   {menuItems.map((menuItem) => (
  //     <li key={menuItem.id}>
  //       {menuItem.name}
  //     </li>
  //   ))}
  // </ul>     

  return (
    <div>
      <h1>{name}</h1>
      <p>{address}</p> 
      <h1>메뉴</h1>
    </div>
  );
}
