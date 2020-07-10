async function commonFetch(path) {
  const url = `https://eatgo-customer-api.ahastudio.com${path}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchRegions() {
  const regions = await commonFetch('/regions');
  return regions;
}

export async function fetchCategories() {
  const categories = await commonFetch('/categories');
  return categories;
}

export async function fetchRestaurants({ regionName, categoryId }) {
  const restaurants = await commonFetch(`/restaurants?region=${regionName}&category=${categoryId}`);
  return restaurants;
}

export async function fetchRestaurantDetail({ restaurantId }) {
  const restaurant = await commonFetch(`restaurants/${restaurantId}`);
  return restaurant;
}
