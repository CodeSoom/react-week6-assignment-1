export function get(key) {
  return (obj) => obj[key];
}

export function equal(key, value) {
  return (obj) => obj[key] === value;
}

export function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function isEmptyObject(obj) {
  if (typeof obj !== 'object') {
    return false;
  }

  if (obj === null) {
    return false;
  }

  return Object.keys(obj).length === 0;
}
