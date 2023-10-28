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

<div class={`fixed flex flex-col w-1/3 items-start pl-24`}>
  <div class="font-montserrat font-bold text-5xl my-10 mt-20">
    corner
  </div>

  <ul>
    {#each menuItems as item}
      <li>
        <div class = "flex flex-row items-center">
          <div class="transform scale-125">
            <svelte:component this={item.icon} />
          </div>
          <a href="/{(item.name).toLowerCase()}" class="my-5">
            <span class="ml-3 font-montserrat text-4xl font-semibold hover:text-black/75">{item.name}</span>
          </a>
        </div>
      </li>
    {/each}
  </ul>

  <div class = "flex flex-col">
    <div class = "flex flex-row items-center mt-48">
      <div class="transform scale-125">
        <SettingsIcon/>
      </div>
      <a href = "/settings">
        <span class="ml-3 font-montserrat text-4xl font-semibold hover:text-black/75">Settings</span>
      </a>
    </div>
    <div class = "flex flex-row items-center mt-8">
      <div class="transform scale-125">
        <ProfileIcon/>
      </div>
      <a href = "/profile">
        <span class="ml-3 font-montserrat text-4xl font-semibold hover:text-black/75"> Profile</span>
      </a>
    </div>
  </div>
</div>



<style>
  /* You can add any component-specific styles here, if necessary */
</style>