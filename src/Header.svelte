<script>
  import logo from "../public/lsfshowicon.svg"

</script>

<style>
  header {
    min-height: 80px;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  h1 {
    margin: 0;
  }

  a {
    color: #e8f1f2;
    text-decoration: none;
  }

  .info {
    display: flex;
    align-items: center;
    font-size: 16px;
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
</style>

<header>

  <img alt="The lsf.show logo, a small box television" src={logo} width="67" height="83"/>

  <a href="/">
    <h1>LSF Show</h1>
  </a>

  <div class="info">
    <p>
      Use
      <kbd>&larr;</kbd>
      and
      <kbd>&rarr;</kbd>
      arrow keys to navigate
    </p>
  </div>

</header>
