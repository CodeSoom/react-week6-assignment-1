export function get(key) {
  return (obj) => obj[key];
}

export function equal(key, value) {
  return (obj) => obj[key] === value;
}

export function isEmptyObj(obj) {
  return Object.values(obj).length === 0;
}

export function isEmptyArray(arr) {
  return arr.length === 0;
}
