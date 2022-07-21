import { getCurrentUserSession } from '../utils/session.js';
import { accountUrl } from '../utils/url.js';

function getCurrentUser() {
  var user = getCurrentUserSession();
  if (user) {
    document.getElementById('currentUser').innerHTML +=
      '<p><b>You are currently logged in with: </b>' +
      user.email +
      '. <a href="' +
      accountUrl +
      '">Go to your account page</a></p>';
  }
}

window.onload = function () {
  getCurrentUser();
};
