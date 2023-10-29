<script>
  import { feedStore } from '../../store.js';
</script>


<div class="flex flex-col w-screen items-center my-20">
  {#each $feedStore as post (post.user)}
    <div class="post my-2">
      <img src="https://via.placeholder.com/40" class="icon" alt="{post.user}">
      <div class="content mx-5">
        <div class="w-96 font-semibold">{post.user}</div>
        <div>{post.content}</div>
      </div>
    </div>
  {/each}
</div>


<style lang="postcss">
  .post {
    display: grid;
    grid-template-columns: 40px 1fr;
    max-width: 50vw;
    width: 100%; /* Make sure it takes the full width of its parent */
    margin: 0 auto; 
  }

  .icon {
    border-radius: 50%
  }
</style>
