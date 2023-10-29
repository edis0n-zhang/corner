<script>
  import Sidebar from "$lib/components/sidebar.svelte";
  import { page } from '$app/stores';
  import "../app.css";
</script>

<style>
</style>

<div>
  {#if $page.url.pathname != '/newuser'}
    <Sidebar/>
  {/if}
  <slot />
</div>
