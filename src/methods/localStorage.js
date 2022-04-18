export function savaLocalStorage(key, item) {
  localStorage.setItem(key, JSON.stringify(item));
}

export function getLocalStorage(key) {
  if (localStorage.getItem(key) === null) {
    return [];
  }
  return JSON.parse(localStorage.getItem(key));
}
