export function authenticate() {
  return window
    .fetch("https://www.reddit.com/api/v1/access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${btoa("_0MV5Ob_rhGkJA:")}`,
      },
      body:
        "grant_type=https%3A%2F%2Foauth.reddit.com%2Fgrants%2Finstalled_client&device_id=DO_NOT_TRACK_THIS_DEVICE",
    })
    .then((resp) => resp.json())
    .then((json) => json.access_token);
}

export function getHotPosts(accessToken) {
  return window
    .fetch("https://oauth.reddit.com/r/LivestreamFail/hot", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((resp) => resp.json())
    .then((json) => json.data.children);
}
