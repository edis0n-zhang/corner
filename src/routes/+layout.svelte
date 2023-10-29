<script>
  import Sidebar from "$lib/components/sidebar.svelte";
  import { page } from '$app/stores';
  import "../app.css";
<<<<<<< HEAD

  import {signedIn} from '../store.js';
  import {onMount} from 'svelte';

  $signedIn = true

  onMount(() => {
    if (!$signedIn && !window.location.pathname.startsWith('/login')) {
      window.location.href = '/login';
    } else if ($signedIn && page.url.pathname == '') {
      window.location.href = '/feed';
    }
  });

=======
>>>>>>> gen
</script>

<style>
</style>

<div>
<<<<<<< HEAD
  {#if !$page.url.pathname.startsWith('/login')}
    <Sidebar/>
  {/if}
  <slot />
</div>
=======
  {#if $page.url.pathname != '/newuser'}
    <Sidebar/>
  {/if}
  <slot />
</div>
>>>>>>> gen
