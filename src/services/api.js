async function fetchGetJson(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export function fetchRegions() {
  return fetchGetJson('https://eatgo-customer-api.ahastudio.com/regions');
}

export function fetchCategories() {
  return fetchGetJson('https://eatgo-customer-api.ahastudio.com/categories');
}

export function fetchRestaurants({ regionName, categoryId }) {
  return fetchGetJson(
    'https://eatgo-customer-api.ahastudio.com/restaurants'
      + `?region=${regionName}&category=${categoryId}`,
  );
}

export function fetchRestaurant(restaurantId) {
  return fetchGetJson(`https://eatgo-customer-api.ahastudio.com/restaurants/${restaurantId}`);
}
