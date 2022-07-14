export async function fetchRegions() {
  // const url = 'https://eatgo-customer-api.ahastudio.com/regions';
  const url = '/regions';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchCategories() {
  // const url = 'https://eatgo-customer-api.ahastudio.com/categories';
  const url = '/categories';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// export async function fetchRestaurants({ regionName, categoryId }) {
export async function fetchRestaurants() {
  // const url = 'https://eatgo-customer-api.ahastudio.com/restaurants'
  //   + `?region=${regionName}&category=${categoryId}`;
  const url = '/restaurants';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
