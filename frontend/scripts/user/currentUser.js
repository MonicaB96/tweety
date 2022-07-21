import { getCurrentUserSession } from '../utils/session.js';
import { profileUrl } from '../utils/url.js';

function getCurrentUser() {
  var user = getCurrentUserSession();
  if (user) {
    document.getElementById('currentUser').innerHTML +=
      '<p><b>You are currently logged in with: </b>' +
      user.email +
      '. <a href="' +
      profileUrl +
      '">Go to your profile</a></p>';
  }
}

window.onload = function () {
  getCurrentUser();
};
