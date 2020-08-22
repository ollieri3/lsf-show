<script>
  const name = "world";

  async function fetchTopPosts() {
    try {
      const token = await window.fetch(
        "https://www.reddit.com/api/v1/access_token",
        {
          method: "POST",
          body: "grant_type=client_credentials",
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
