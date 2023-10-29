<script>
  import Sidebar from "$lib/components/sidebar.svelte";
  import { page } from '$app/stores';
  import "../app.css";
</script>

<style>
</style>

<div>
<<<<<<< HEAD
  {#if !$page.url.pathname.startsWith('/login') && $page.url.pathname != '/design'}
    <Sidebar/>
  {/if}
  <slot />
</div>
<<<<<<< Updated upstream
=======
=======
>>>>>>> Stashed changes
  <div>
    {#if $page.url.pathname != '/newuser' && $page.url.pathname != '/design'}
      <Sidebar/>
    {/if}
  </div>
  <div>
    <slot />
  </div>
</div>
<<<<<<< Updated upstream
=======
>>>>>>> 1b7cdfd (Add server)
>>>>>>> Stashed changes
