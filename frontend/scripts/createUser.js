import { postApi } from './utils/api.js';
import { writeMessage } from './utils/writeMessage.js';

async function createUser() {
  var data = {
    email: document.getElementById('email').value,
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    birthday: document.getElementById('birthday').value,
  };
  postApi('user', data)
    .then((data) => {
      switch (data.status) {
        case 201:
          writeMessage('Success: Your account has been created!', 'green');
          break;
        case 400:
          writeMessage('Error: Please make sure all fields are filled', 'red');
          break;
        case 409:
          writeMessage('Error: This email is already in use', 'red');
          break;
        default:
          writeMessage('Error: Please try again', 'red');
          break;
      }
    })
    .catch(() => writeMessage('Error: Please try again', 'red'));
}

document.getElementById('submit').addEventListener(
  'click',
  function () {
    createUser();
  },
  false,
);
