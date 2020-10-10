<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function handleNextClip() {
    dispatch("nextClip");
  }

  function handlePreviousClip() {
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
    border: 1px solid #413f43;
    max-width: 50%;
  }
</style>

<div class="controls">
  <button class="control" on:click={handlePreviousClip}>Previous Clip</button>
  <button class="control" on:click={handleNextClip}>Next Clip</button>
</div>
