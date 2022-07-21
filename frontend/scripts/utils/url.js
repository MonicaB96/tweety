const href = window.location.href;
const dir = href.substring(0, href.lastIndexOf('/')) + '/';

export const loginUrl = dir + 'index.html';
export const signupUrl = dir + 'signup.html';
export const profileUrl = dir + 'profile.html';

export function navigateToLogin() {
  window.location.href = loginUrl;
}

export function navigateToSignup() {
  window.location.href = signupUrl;
}

export function navigateToProfile() {
  window.location.href = profileUrl;
}
