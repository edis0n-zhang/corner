<script>
  import Sidebar from "$lib/components/sidebar.svelte";
  import { page } from '$app/stores';
  import "../app.css";

  import {signedIn} from '../store.js';
  import {onMount} from 'svelte';

  onMount(() => {
    if (signedIn && $page.url.pathname != '/newuser') {
      window.location.href = '/newuser';
    }
  });

</script>

<style>
</style>

<div>
  {#if $page.url.pathname != '/newuser' && $page.url.pathname != '/design'}
    <Sidebar/>
  {/if}
  <slot />
</div>