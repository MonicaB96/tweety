import { clearSession } from '../utils/session.js';
import { navigateToLogin } from '../utils/url.js';

function logOutUser() {
  clearSession();
  navigateToLogin();
}

document.getElementById('logout').addEventListener(
  'click',
  function () {
    logOutUser();
  },
  false,
);
