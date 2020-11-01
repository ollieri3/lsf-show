<script>
  import Header from "./Header.svelte";
  import MobileControls from "./MobileControls.svelte";
  import { authenticate, getHotPosts } from "./redditService";

  let posts = [];
  let cursor = 0;

  fetchTopPosts();

  async function fetchTopPosts() {
    try {
      const accessToken = await authenticate();
      const unfilteredPosts = await getHotPosts(accessToken);
      posts = unfilteredPosts.filter((post) =>
        post.data.url.match(/twitch.tv\/(.*)/)
      );
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

  function goToNextClip() {
    cursor = Math.min(cursor + 1, 24);
  }

  function goToPreviousClip() {
    cursor = Math.max(cursor - 1, 0);
  }

  function handleKeys(event) {
    // Right Arrow Key
    if (event.keyCode === 39) {
      // arrow right:
      goToNextClip();
    }
    // Left Arrow Key
    if (event.keyCode === 37) {
      goToPreviousClip();
    }
  }
</script>

<style>
  .page {
    display: flex;
    flex-direction: column;
  }

  main {
    padding: 0 8px;
    flex-grow: 1;
    margin: 25px 0;
    display: flex;
    flex-direction: column;
  }

  div a {
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
    -webkit-box-shadow: 0px 0px 5px 0px rgba(145, 71, 255, 1);
    -moz-box-shadow: 0px 0px 5px 0px rgba(145, 71, 255, 1);
    box-shadow: 0px 0px 5px 0px rgba(145, 71, 255, 1);
    width: 100%;
    height: 100%;
  }

  .clip-card {
    max-width: 1500px;
    max-height: 50vh;
    margin-left: auto;
    margin-right: auto;
    height: 100%;
    width: 100%;
  }

  @media (min-width: 768px) {
    main {
      padding: 0 16px;
      margin: 0;
    }

    .clip-card {
      max-height: 75vh;
    }
  }
</style>

<svelte:window on:keydown={handleKeys} />

<div class="page" style="height: {window.innerHeight}px">
  <Header />
  <main>
    {#if posts[cursor]}
      <div class="clip-card">
        <a
          href={`https://reddit.com${posts[cursor].data.permalink}`}
          target="_blank"
          rel="noopener noreferrer">{posts[cursor].data.title}<svg
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"><path
              class="heroicon-ui"
              d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41zM17 14a1 1 0 0 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h5a1 1 0 0 1 0 2H5v12h12v-5z" /></svg></a>
        <iframe
          title={posts[cursor].data.title}
          src="https://clips.twitch.tv/embed?clip={grabClipSlug(posts[cursor].data.url)}&parent=lsf.show&parent=lsf-show.netlify.app&parent=localhost&autoplay={__isProd__}"
          scrolling="no"
          allowfullscreen="true"
          frameborder="0" />
      </div>
    {/if}
  </main>

  <MobileControls
    on:nextClip={goToNextClip}
    on:previousClip={goToPreviousClip} />
</div>
