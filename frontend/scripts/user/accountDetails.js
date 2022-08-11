import { getCurrentUserSession } from '../utils/session.js';
import { navigateToLogin } from '../utils/url.js';

export function getAccountDetails() {
  var user = getCurrentUserSession();
  if (!user) {
    navigateToLogin();
  } else {
    document.getElementById('name').innerHTML +=
      user.first_name + ' ' + user.last_name;
    document.getElementById('email').innerHTML += user.email;
    document.getElementById('birthday').innerHTML += new Date(
      user.birthday,
    ).toLocaleDateString('en-GB');
  }
}
