<script>
  import FeedIcon from "../images/Paper_fill.svelte"
  import ExploreIcon from "../images/Search.svelte"
  import PinsIcon from "../images/Pin_fill.svelte"
  import SettingsIcon from "../images/Setting_fill.svelte"
  import DesignIcon from "../images/Edit_fill.svelte"
  import ProfileIcon from "../images/User_fill.svelte"

  let menuItems = [
    { name: "Feed", icon: FeedIcon },
    { name: "Explore", icon: ExploreIcon },
    { name: "Pins", icon: PinsIcon },
    { name: "Design", icon: DesignIcon },
  ];

</script>

<div class={`fixed top-10 left-16 flex flex-col w-1/4 items-start h-screen overflow-y-auto overflow-x-hidden scrollbar-hide`}>
  <div class="font-montserrat font-bold text-5xl my-10">
    <div class = "flex flex-row items-center">
      <div class="transform scale-125">
        <DesignIcon/>
      </div>
      <div class="{`opacity-0 lg:opacity-100 lg:inline-block`}">
        corner
      </div>
    </div>
  </div>

  <ul>
    {#each menuItems as item}
      <li class="my-5">
        <a href = "/{(item.name).toLowerCase()}" class="flex flex-row items-center">
          <div class="transform scale-125">
            <svelte:component this={item.icon}/>
          </div>
          <a href="/{(item.name).toLowerCase()}">
            <span class="{`opacity-0 lg:opacity-100 lg:inline-block`} ml-3 font-montserrat text-4xl font-semibold hover:text-black/75">{item.name}</span>
        </a>
      </li>
    {/each}
  </ul>

  <div class = "lg:fixed bottom-20 left-16 flex flex-col">
    <a href = "/settings" class="flex flex-row items-center">
      <div class="transform scale-125">
        <SettingsIcon/>
      </div>
      <span class="{`opacity-0 lg:opacity-100 lg:inline-block`} ml-4 font-montserrat text-4xl font-semibold hover:text-black/75">Settings</span>
    </a>
    <a href = "/profile" class="flex flex-row items-center">
      <div class="transform scale-125">
        <ProfileIcon/>
      </div>
      <span class="{`opacity-0 lg:opacity-100 lg:inline-block`} ml-4 font-montserrat text-4xl font-semibold hover:text-black/75"> Profile</span>
    </a>
  </div>
</div>



<style>
  /* For Webkit-based browsers (Chrome, Safari and Opera) */
  .scrollbar-hide::-webkit-scrollbar {
      display: none;
  }

  /* For IE, Edge and Firefox */
  .scrollbar-hide {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
  }
  /* You can add any component-specific styles here, if necessary */
</style>