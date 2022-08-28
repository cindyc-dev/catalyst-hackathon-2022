import axios from "axios";

export const getUserId = async (accessToken) => {
  const res = await axios.get(`https://graph.facebook.com/me?access_token=${accessToken}`)
  console.log(`userId: ${JSON.stringify(res, null, 2)}`)
  return res.data.id
}

/**
 * Retreive all the pages that the user has access to.
 * @param {string} userId id of user from login
 * @param {string} accessToken user access token from login
 * @returns {Promise} promise that resolves to an array of pages, containing `name`, `access_token`, and `id` of each page
 */
export const getPages = async (accessToken) => {
  const userId = await getUserId(accessToken)
  return await axios.get(`https://graph.facebook.com/${userId}/accounts?fields=name,access_token&access_token=${accessToken}`)
    .then(res => {
      console.log(JSON.stringify(res, null, 2))
      return res.data
    })
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
  let args = {}

  if (content.message) {
    message = "message=" + content.message;
  }

  if (content.link) {
    message += "&link=" + content.link;
  }

  if (content.photo) {
    args.object_attachment = content.photo
  }

  axios.post(`https://graph.facebook.com/${pageId}/feed?${message}&access_token=${accessToken}`, args)
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
