import axios from "axios";

/**
 * Retreive all the pages that the user has access to.
 * @param {string} userId id of user from login
 * @param {string} accessToken user access token from login
 * @returns {Promise} promise that resolves to an array of pages, containing `name`, `access_token`, and `id` of each page
 */
export const getPages = (userId, accessToken) => {
  axios.get(`https://graph.facebook.com/${userId}/accounts?fields=name,access_token&access_token=${accessToken}`)
    .then(res => res.data)
    .catch(err => err);
}

/**
 * Publish a post to the specified page.
 * @param {string} pageId id of page to publish to
 * @param {string} accessToken access token of the page
 * @param {object} content content of post to publish, a post can contain a `message`, `link`, and `photo`
 */
export const publishPost = (pageId, accessToken, content) => {
  let message = "";

  if (content.message) {
    message = "message=" + content.message;
  }

  if (content.link) {
    message += "&link=" + content.link;
  }

  if (content.photo) {
    message += "&photo=" + content.photo;
  }

  axios.post(`https://graph.facebook.com/${pageId}/feed?${message}&access_token=${accessToken}`, {
    object_attachment: content.photo
  })
    .then(res => res.data)
    .catch(err => err);
}

export const uploadPhoto = (albumId, accessToken, photo) => {
  axios.post(`https://graph.facebook.com/${albumId}/photos&access_token=${accessToken}`, {
    url: photo
  })
    .then(res => res.data)
    .catch(err => err);
}
