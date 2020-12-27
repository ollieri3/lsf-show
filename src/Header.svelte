<script>
  import logo from "../public/lsfshowicon.svg";
</script>

<style>
  header {
    min-height: 55px;
    padding: 8px 10px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
  }

  h1 {
    margin: 0;
    font-weight: bold;
    font-size: 18px;
  }

  a {
    color: #e8f1f2;
    text-decoration: none;
  }

  .branding {
    display: flex;
    align-items: center;
  }

  .branding img {
    margin-right: 10px;
    width: 32px;
  }

  .shortcuts {
    display: none;
    flex-direction: column;
    font-size: 16px;
    border: 1px solid #707070;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: #383838;
    width: 290px;
  }

  .shortcuts h3 {
    padding: 8px;
    margin: 0;
    background: #ffffff;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    color: black;
    font-size: 16px;
  }

  .shortcuts p {
    margin: 0;
    margin-left: 6px;
    padding: 8px 8px;
    font-weight: bold;
  }

  kbd {
    background-color: #eee;
    border-radius: 3px;
    border: 1px solid #b4b4b4;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),
      0 2px 0 0 rgba(255, 255, 255, 0.7) inset;
    color: #333;
    display: inline-block;
    font-size: 0.85em;
    font-weight: 700;
    line-height: 1;
    padding: 2px 4px;
    white-space: nowrap;
  }

  /* Tablet upwards */
  @media (min-width: 768px) {
    header {
      justify-content: space-between;
      padding: 20px 25px;
    }

    .branding h1 {
      font-size: 28px;
    }

    .branding img {
      width: 67px;
      height: 83px;
    }

    .shortcuts {
      display: flex;
    }
  }
</style>

<header>
  <div class="branding">
    <img alt="The lsf.show logo, a small box television" src={logo} />
    <a href="/">
      <h1>lsf.show</h1>
    </a>
  </div>

  <div class="shortcuts">
    <h3>Shortcuts</h3>
    <p><kbd>&larr;</kbd> <kbd>&rarr;</kbd> Previous / Next clip</p>
    <p><kbd>&uarr;</kbd> Open in Reddit</p>
  </div>
</header>
