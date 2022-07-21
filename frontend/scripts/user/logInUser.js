import { getApi } from '../utils/api.js';
import { writeMessage } from '../utils/writeMessage.js';
import { navigateToAccount } from '../utils/url.js';
import {
  getMessageSession,
  removeMessageSession,
  setCurrentUserSession,
} from '../utils/session.js';

async function logInUser() {
  var data = {
    email: document.getElementById('email').value,
  };
  getApi('user?email=' + data.email)
    .then((data) => {
      switch (data.status) {
        case 200:
          data.json().then((user) => setCurrentUserSession(user));
          navigateToAccount();
          break;
        case 404:
          writeMessage('Error: This email does not exist', 'red');
          break;
        default:
          writeMessage('Error: Please try again', 'red');
          break;
      }
    })
    .catch(() => writeMessage('Error: Please try again', 'red'));
}

const msg = getMessageSession();
if (msg) {
  writeMessage(msg, 'green');
  removeMessageSession();
}

document.getElementById('submitLogin').addEventListener(
  'click',
  function () {
    logInUser();
  },
  false,
);
