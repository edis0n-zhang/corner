<script>
  import FeedIcon from "../images/Paper_fill.svelte"
  import ExploreIcon from "../images/Search.svelte"
  import PinsIcon from "../images/Pin_fill.svelte"
  import SettingsIcon from "../images/Setting_fill.svelte"
  import DesignIcon from "../images/Edit_fill.svelte"
  import ProfileIcon from "../images/User_fill.svelte"
  import Logo from "../images/logo.svelte"
  import { onMount } from 'svelte';

  let isDesignPage;

  let menuItems = [
    { name: "feed", icon: FeedIcon },
    { name: "explore", icon: ExploreIcon },
    { name: "pins", icon: PinsIcon },
    { name: "design", icon: DesignIcon },
  ];

  onMount(() => {
    isDesignPage = window.location.pathname === '/design';
  });
</script>

<div class={`fixed top-16 left-14 flex flex-col w-1/4 items-start h-screen overflow-y-auto overflow-x-hidden scrollbar-hide`}>
  <div class="font-montserrat font-bold text-4xl">
    <div class = "flex flex-row items-center">
      <div class="transform scale-125">
        <Logo/>
      </div>
      <div class="{`opacity-0 lg:opacity-100 lg:inline-block ml-2`}">
        hearth
      </div>
    </div>
  </div>

  <ul class = "list-none">
    {#each menuItems as item}
      <li class="my-5">
        <a href = "/{(item.name).toLowerCase()}" class="flex flex-row items-center">
          <div class={isDesignPage ? 'transform scale-125 -translate-x-3' : 'transform scale-125 translate-x-2'}>
            <svelte:component this={item.icon}/>
          </div>
          <a href="/{(item.name).toLowerCase()}">
            <span class="{isDesignPage ? 'opacity-0 lg:opacity-100 lg:inline-block transform -translate-x-5' : 'opacity-0 lg:opacity-100 lg:inline-block'} ml-5 font-montserrat text-3xl hover:text-black/75">{item.name}</span>
        </a>
      </li>
    {/each}
  </ul>

  <div class = "lg:fixed bottom-20 left-14 flex flex-col translate-x-2">
    <a href = "/settings" class="flex flex-row items-center">
      <div class="transform scale-125">
        <SettingsIcon/>
      </div>
      <span class="{`opacity-0 lg:opacity-100 lg:inline-block`} ml-4 font-montserrat text-3xl hover:text-black/75">settings</span>
    </a>
    <a href = "/profile" class="flex flex-row items-center mt-5">
      <div class="transform scale-125">
        <ProfileIcon/>
      </div>
      <span class="{`opacity-0 lg:opacity-100 lg:inline-block`} ml-4 font-montserrat text-3xl hover:text-black/75"> profile</span>
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