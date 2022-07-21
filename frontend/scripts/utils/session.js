const currentUserSession = 'currentUser';
const message = 'msg';

export function setCurrentUserSession(user) {
  window.sessionStorage.setItem(currentUserSession, JSON.stringify(user));
}

export function getCurrentUserSession() {
  return JSON.parse(window.sessionStorage.getItem(currentUserSession));
}

export function clearSession() {
  window.sessionStorage.clear();
}

export function setMessageSession(msg) {
  window.sessionStorage.setItem(message, msg);
}

export function getMessageSession() {
  return window.sessionStorage.getItem(message);
}

export function removeMessageSession() {
  window.sessionStorage.removeItem(message);
}
