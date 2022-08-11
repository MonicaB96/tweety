import { postApi } from '../utils/api.js';
import { writeMessage } from '../utils/writeMessage.js';
import { navigateToLogin } from '../utils/url.js';
import { getCurrentUserSession } from '../utils/session.js';
import { createPostComponent } from '../components/post.js';

async function createPost() {
  var user = getCurrentUserSession();
  var data = {
    authorId: user.id,
    text: document.getElementById('newPost').value,
  };
  postApi('post', data)
    .then((data) => {
      switch (data.status) {
        case 201:
          writeMessage('Post has been created!', 'green');
          data.json().then((post) => {
            createPostComponent(post, user, 'newAddedPost');
          });
          break;
        case 404:
          navigateToLogin();
          break;
      }
    })
    .catch(() =>
      writeMessage('Something went wrong. Please try again!', 'red'),
    );
}

document.getElementById('createPost').addEventListener(
  'click',
  function () {
    createPost();
  },
  false,
);
