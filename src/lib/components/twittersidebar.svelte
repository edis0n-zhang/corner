<script>
  let menuItems = [
    { name: "Home", icon: "🏠" },
    { name: "Explore", icon: "🔍" },
    { name: "Notifications", icon: "🔔" },
    { name: "Messages", icon: "✉️" },
    { name: "Bookmarks", icon: "🔖" },
    { name: "Lists", icon: "📋" },
    { name: "Profile", icon: "👤" },
    { name: "More", icon: "⋮" }
  ];
</script>

<div class="flex flex-col w-1/2">
  <ul>
    {#each menuItems as item}
      <li class="flex items-center mb-4 space-x-3 hover:bg-gray-50 p-2 rounded-md cursor-pointer">
        <span>{item.icon}</span>
        <span class="font-semibold">{item.name}</span>
      </li>
    {/each}
  </ul>

</div>

<style>
  /* You can add component-specific Tailwind styles here if necessary */
</style>
