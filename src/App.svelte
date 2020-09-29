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

  div a  {
    display: flex;
    align-items: center;
    padding: 6px 0;
    font-weight: bold;
    color: white;
  }

  div a svg {
    margin-left: 5px;
    fill: white;
  }

  iframe {
    background-color: #383838;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(145,71,255,1);
    -moz-box-shadow: 0px 0px 5px 0px rgba(145,71,255,1);
    box-shadow: 0px 0px 5px 0px rgba(145,71,255,1);  
  }

</style>

<svelte:window on:keydown={handleKeys} />
<Header />
<main>
  {#if posts[cursor]}
    <div>
      <a
        href={`https://reddit.com${posts[cursor].data.permalink}`}
        target="_blank"
        rel="noopener noreferrer">{posts[cursor].data.title}<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path class="heroicon-ui" d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41zM17 14a1 1 0 0 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h5a1 1 0 0 1 0 2H5v12h12v-5z"/></svg></a>
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
