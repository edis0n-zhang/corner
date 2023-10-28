<script>
  import Animation from "$lib/components/animation.svelte";
  let isAnimationFinished = false;
</script>

<Animation bind:animationFinished={isAnimationFinished}/>

{#if isAnimationFinished}
  <div class="position: fixed">
    <button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Register
    </button>
  </div>
{/if}

<style lang="postcss">

</style>
