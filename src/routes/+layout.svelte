<script>
  import Sidebar from "$lib/components/sidebar.svelte";
  import { page } from '$app/stores';
  import "../app.css";
</script>

<style>
</style>

<div>
  <div>
    {#if $page.url.pathname != '/newuser' && $page.url.pathname != '/design'}
      <Sidebar/>
    {/if}
  </div>
  <div>
    <slot />
  </div>
</div>
