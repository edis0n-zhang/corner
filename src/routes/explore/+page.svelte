<script>
  let searchTerm = "";
</script>


<div class="flex justify-center pt-5">
  <div class="flex mt-10 space-x-2"> <!-- added flex and space-x-2 here -->
    
      <input 
          bind:value={searchTerm} 
          type="text" 
          placeholder="Search..." 
          class="p-2 w-96 border rounded shadow"
      />
  
      <button class="text-black p-2 rounded shadow hover:bg-gray-200">
          Search
      </button>
    
  </div>
</div>


<style lang="postcss">

</style>
