<script>
  import Header from "./Header.svelte";
  import { authenticate, getHotPosts } from "./redditService";

  let posts = [];
  let cursor = 0;

  fetchTopPosts();

  async function fetchTopPosts() {
    try {
      const accessToken = await authenticate();
      posts = await getHotPosts(accessToken);
      console.log(posts);
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
      <a
        href={`https://reddit.com${posts[cursor].data.permalink}`}
        target="_blank"
        rel="noopener noreferrer">{posts[cursor].data.title}</a>
      <iframe
        title={posts[cursor].data.title}
        src="https://clips.twitch.tv/embed?clip={grabClipSlug(posts[cursor].data.url)}&parent=lsf.show&parent=lsf-show.netlify.app&parent=localhost&autoplay={__isProd__}"
        height="100%"
        width="100%"
        scrolling="no"
        allowfullscreen="true"
        frameborder="0" />
    </div>
  {/if}
</main>
