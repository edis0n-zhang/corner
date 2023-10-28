<script>
  import Sidebar from "$lib/components/sidebar.svelte";
  import { goto } from '$app/navigation';

  // function navigateToUser(userId) {
  //     goto(`/user/${userId}`);
  // }
</script>

<Sidebar/>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
