export async function fetchRegions() {
  const response = await fetch('https://eatgo-customer-api.ahastudio.com/regions');
  const data = await response.json();
  console.log(data);
  return data;
}