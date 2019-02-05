import config from "../config";
const localStorageTokenString = `${config.appName}:user:token`;

export function saveToken(token) {
  const { localStorage } = window;
  localStorage.setItem(localStorageTokenString, token);
}
export function retriveToken() {
  const { localStorage } = window;
  const token = localStorage.getItem(localStorageTokenString);
  return token;
}
export function deleteToken() {
  const { localStorage } = window;
  localStorage.removeItem(localStorageTokenString);
}
