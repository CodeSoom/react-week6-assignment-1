import React from 'react';

async function loadRestaurantDetail(id) {
  const url = `https://eatgo-customer-api.ahastudio.com/restaurants/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}

export default function RestaurantDetail({ match }) {
  // console.log(match);
  const { id } = match.params;
  loadRestaurantDetail(id);
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}
