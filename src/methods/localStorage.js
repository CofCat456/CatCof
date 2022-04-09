export function savaLocalStorage(key, item) {
  localStorage.setItem(key, JSON.stringify(item));
}

export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
