import { getAccountDetails } from '../user/accountDetails.js';
import { showMyPosts } from '../post/showMyPosts.js';

window.onload = function () {
  getAccountDetails();
  showMyPosts();
};
