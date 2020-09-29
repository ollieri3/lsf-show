<script>
  import logo from "../public/lsfshowicon.svg"

</script>

<style>
  header {
    min-height: 80px;
    padding: 20px 25px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  h1 {
    margin: 0;
    font-weight: bold;
    font-size: 28px;
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
  }

  .shortcuts {
    display: flex;
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
    background: #FFFFFF;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    color:black;
    font-size: 16px;
  }

  .shortcuts p {
    margin: 0;
    padding: 16px 8px;
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

  kbd:nth-child(2) {
    margin-right: 6px;
  }
</style>

<header>

  <div class="branding">
    <img alt="The lsf.show logo, a small box television" src={logo} width="67" height="83"/>
    <a href="/">
      <h1>lsf.show</h1>
    </a>
  </div>


  <div class="shortcuts">
    <h3>Shortcuts</h3>
    <p>
      <kbd>&larr;</kbd>
      <kbd>&rarr;</kbd>
      Previous / Next clip
    </p>
  </div>

</header>
