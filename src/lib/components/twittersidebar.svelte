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

<div class="h-full w-64 p-4 bg-blue-900 text-white">
  <!-- Logo/Brand -->
  <div class="mb-6 text-4xl">
    🐦
  </div>

  <!-- Menu Items -->
  <ul>
    {#each menuItems as item}
      <li class="flex items-center mb-4 space-x-3 hover:bg-blue-800 p-2 rounded-md cursor-pointer">
        <span>{item.icon}</span>
        <span class="font-semibold">{item.name}</span>
      </li>
    {/each}
  </ul>

  <!-- Tweet Button (for demonstration purposes) -->
  <button class="bg-blue-700 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
    Tweet
  </button>
</div>

<style>
  /* You can add component-specific Tailwind styles here if necessary */
</style>
