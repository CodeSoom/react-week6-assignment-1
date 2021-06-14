export const fetchRegions = async () => {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';

  const response = await fetch(url);
  const data = await response.json();

  return data;
};

export const fetchCategories = async () => {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';

  const response = await fetch(url);
  const data = await response.json();

  return data;
};

export const fetchRestaurants = async (regionName, categoryId) => {
  const url = `https://eatgo-customer-api.ahastudio.com/restaurants?region=${regionName}&category=${categoryId}
  `;

  const response = await fetch(url);

  if (!response.ok) {
    return [];
  }

  const data = await response.json();

  return data.map(({ id, name }) => ({ id, name }));
};

export const fetchRestaurantInfo = async (reataurantId) => {
  const url = `https://eatgo-customer-api.ahastudio.com/restaurants/${reataurantId}`;

  const response = await fetch(url);

  if (!response.ok) {
    return [];
  }

  const { name, address, menuItems } = await response.json();

  return {
    name,
    address,
    menuItems: menuItems.map((item) => item.name),
  };
};
