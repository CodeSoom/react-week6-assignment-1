export function get(key) {
  return (obj) => obj[key];
}

export function equal(key, value) {
  return (obj) => obj[key] === value;
}

export function isInteger(id) {
  return Number.isInteger(parseInt(id, 10));
}
