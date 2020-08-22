<script>
  const name = "world";

  async function fetchTopPosts() {
    try {
      const token = await window.fetch(
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
      console.log("token", token);
    } catch (error) {
      console.error(error);
    }
  }

  function clicked() {
    console.log("clicked!");
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
  <button on:click={fetchTopPosts}>Fetch Posts</button>
</main>
