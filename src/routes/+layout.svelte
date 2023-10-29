<script>
  import Sidebar from "$lib/components/sidebar.svelte";
  import { page } from '$app/stores';
  import "../app.css";

  import {signedIn} from '../store.js';
  import {onMount} from 'svelte';

  onMount(() => {
    if (!$signedIn && !window.location.pathname.startsWith('/login')) {
      window.location.href = '/login';
    } else if ($signedIn && page.url.pathname == '/') {
      window.location.href = '/feed';
    }
  });

</script>

<style>
</style>

<div>
  {#if !$page.url.pathname.startsWith('/login') && $page.url.pathname != '/design'}
    <Sidebar/>
  {/if}
  <slot />
</div>