<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function handleNextClip() {
    window.navigator.vibrate(50);
    dispatch("nextClip");
  }

  function handlePreviousClip() {
    window.navigator.vibrate(50);
    dispatch("previousClip");
  }
</script>

<style>
  .controls {
    display: flex;
    flex-wrap: nowrap;
  }

  .control {
    flex-grow: 1;
    margin: 0;
    background-color: rgba(145, 71, 255, 1);
    color: white;
    border: 0;
    height: 50px;
    max-width: 50%;
    margin: 2px 1px;
  }

  .control:nth-child(1) {
    margin-left: 2px;
  }

  .control:nth-child(2) {
    margin-right: 2px;
  }

  @media (min-width: 768px) {
    .controls {
      display: none;
    }
  }
</style>

<div class="controls">
  <button class="control" on:click={handlePreviousClip}>Previous Clip</button>
  <button class="control" on:click={handleNextClip}>Next Clip</button>
</div>
