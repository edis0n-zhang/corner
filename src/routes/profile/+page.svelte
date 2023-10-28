<script>
  let displayedContent = "" 
</script>

<div class="flex justify-center h-screen">
  <div class="w-1/2 fixed font-monsterrat">

    <div class="font-semibold mt-20 text-3xl">
      Username
    </div>

    <div class="flex flex-row mt-1 text-sm">
      <div>
        123 posts
      </div>
      <div class="ml-10 hover:underline text-sm">
        123 followers
      </div>
      <div class="ml-10 hover:underline text-sm">
        123 following
      </div>
    </div>

    <div class="mt-7">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur leo. Maecenas non diam cursus, imperdiet massa eget, pellentesque ex. Vestibulum lacinia porttitor ultrices. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed pulvinar egestas libero, in sodales mauris efficitur a. Fusce non bibendum dui.
    </div>
  
    <div class="text-center py-10">
      <button 
          class="mr-20 text-gray-500 hover:bg-gray-200 text-sm" 
          on:click={() => displayedContent = "posts"}>
          Posts
      </button>
      <button 
          class="text-gray-500 hover:bg-gray-200 text-sm" 
          on:click={() => displayedContent = "liked"}>
          Liked
      </button>
      <hr>
    </div>

    {#if displayedContent === "posts"}
    <div>
        This is Content 1
    </div>
{:else if displayedContent === "liked"}
    <div>
        This is Content 2
    </div>
{/if}

  </div>

</div>

<style lang="postcss">

</style>
