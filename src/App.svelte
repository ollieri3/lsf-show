<script>
  import Header from "./Header.svelte";

  let posts = [];
  let cursor = 0;

  fetchTopPosts();

  async function fetchTopPosts() {
    try {
      const tokenResponse = await window.fetch(
        "https://www.reddit.com/api/v1/access_token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${btoa("_0MV5Ob_rhGkJA:")}`,
          },
          body:
            "grant_type=https%3A%2F%2Foauth.reddit.com%2Fgrants%2Finstalled_client&device_id=DO_NOT_TRACK_THIS_DEVICE",
        }
      );

      const { access_token } = await tokenResponse.json();
      const hotPosts = await window.fetch(
        "https://oauth.reddit.com/r/LivestreamFail/hot",
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      const postsData = await hotPosts.json();
      posts = postsData.data.children;
    } catch (error) {
      console.error(error);
    }
  }

  function grabClipSlug(clipUrl) {
    const match = clipUrl.match(/twitch.tv\/(.*)/);
    if (match && match[1]) {
      return match[1];
    }
  }

  function handleKeys(event) {
    // Right Arrow Key
    if (event.keyCode === 39) {
      // arrow right:
      cursor = Math.min(cursor + 1, 24);
    }
    // Left Arrow Key
    if (event.keyCode === 37) {
      cursor = Math.max(cursor - 1, 0);
    }
  }
</script>

<style>
  main {
    padding: 0 16px;
  }

  div {
    margin: auto;
    max-width: 1235px;
    height: 75vh;
  }
</style>

<svelte:window on:keydown={handleKeys} />
<Header />
<main>
  <p>Cursor: {cursor}</p>

  {#if posts[cursor]}
    <div>
      <p>{posts[cursor].data.title}</p>
      <iframe
        title={posts[cursor].data.title}
        src="https://clips.twitch.tv/embed?clip={grabClipSlug(posts[cursor].data.url)}&parent=lsf.show&parent=lsf-show.netlify.app&parent=localhost&autoplay=true"
        height="100%"
        width="100%"
        scrolling="no"
        allowfullscreen="true"
        frameborder="0" />
    </div>
  {/if}

</main>
