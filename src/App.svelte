<script>
  import { dataset_dev } from "svelte/internal";

  let posts = [];

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
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>LSF Show!</h1>
  <button on:click={fetchTopPosts}>Fetch posts</button>

  {#each posts as post}
    <div>
      <p>{post.data.title}</p>

      <!-- <iframe title="hi" width="500" height="500" src={post.data.url} /> -->

      <iframe
        title={post.data.title}
        src="https://clips.twitch.tv/embed?clip={grabClipSlug(post.data.url)}&parent=lsf.show&parent=lsf-show.netlify.app"
        height="500"
        width="500"
        scrolling="no"
        allowfullscreen="true"
        frameborder="0" />
    </div>
  {:else}
    <p>No Posts</p>
  {/each}

</main>
