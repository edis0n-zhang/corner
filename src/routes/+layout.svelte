<script>
  import Sidebar from "$lib/components/sidebar.svelte";
  import { page } from '$app/stores';
  import "../app.css";
</script>

<!-- to do: make sidebar persist throughout all pages except those excluded (like new user / signup page) -->
{#if $page.url.pathname != '/newuser'}
  <Sidebar/>
{/if}

<slot />