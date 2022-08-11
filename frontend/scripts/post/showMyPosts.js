import { getCurrentUserSession } from '../utils/session.js';
import { getApi } from '../utils/api.js';
import { createPostComponent } from '../components/post.js';

export function showMyPosts() {
  var user = getCurrentUserSession();
  getApi('post?authorId=' + user.id).then((data) => {
    console.log(data);
    switch (data.status) {
      case 200:
        data
          .json()
          .then((posts) =>
            posts.map((post) => createPostComponent(post, user, 'posts')),
          );
        break;
      case 404:
        writeMessage('Error: This author id does not exist', 'red');
        break;
      default:
        writeMessage('There are no posts available', 'red');
        break;
    }
  });
}
