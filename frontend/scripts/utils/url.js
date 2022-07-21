export const loginUrl = '../../index.html';
export const signupUrl = '../../signup.html';
export const profileUrl = '../../profile.html';

export function navigateToLogin() {
  window.location.href = loginUrl;
}

export function navigateToSignup() {
  window.location.href = signupUrl;
}

export function navigateToProfile() {
  window.location.href = profileUrl;
}
