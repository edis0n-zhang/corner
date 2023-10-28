<script>
  let menuItems = [
    { name: "Feed", icon: "🏠" },
    { name: "Explore", icon: "🔍" },
    { name: "Bookmarks", icon: "🔖" },
    { name: "Settings", icon: "🔖" },
    { name: "Design", icon: "pen"},
    { name: "Profile", icon: "👤" },
  ];
</script>

<div class={`flex flex-col w-1/3 items-start pl-24`}>
  <div class="font-montserrat font-bold text-5xl my-10 mt-40">
    corner
  </div>

  <ul>
    {#each menuItems as item}
      <li>
        <a href="/{(item.name).toLowerCase()}" class="my-5">
          <span class="font-montserrat text-4xl font-semibold hover:text-black/75">{item.name}</span>
        </a>
      </li>
    {/each}
  </ul>

</div>

<style>
  /* You can add any component-specific styles here, if necessary */
</style>
