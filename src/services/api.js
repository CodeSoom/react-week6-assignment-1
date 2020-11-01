async function fetchDataFrom(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchRegions() {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';
  return fetchDataFrom(url);
}

export async function fetchCategories() {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';
  return fetchDataFrom(url);
}

export async function fetchRestaurants({ regionName, categoryId }) {
  const url = 'https://eatgo-customer-api.ahastudio.com/restaurants'
    + `?region=${regionName}&category=${categoryId}`;
  return fetchDataFrom(url);
}

export async function fetchRestaurant({ restaurantId }) {
  const url = `https://eatgo-customer-api.ahastudio.com/restaurants/${restaurantId}`;
  return fetchDataFrom(url);
}
