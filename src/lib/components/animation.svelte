<script>
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  import BigLogo from '$lib/images/biglogo.svelte';
  let verbs = ["build", "launch", "create", "make"];
  let nouns = ["brand", "business", "portfolio", "dream"];
  let i = 0, counter = 0;
  let animationFinished = false;

  function redirectToRegister() {
      window.location.href = '/login/register';
  }

  function redirectToSignIn() {
      window.location.href = '/login/signin';
  }

  onMount(() => {
    const scrollTexts = document.querySelectorAll('.scrolling-text');
    const centerText = document.getElementById('centerText');
    const btn = document.getElementById('btn');

    scrollTexts.forEach((scrollText) => {
      scrollText.style.animationDuration = `${scrollText.scrollHeight / 150}s`;

      // Increment i every time the animation completes one iteration
      scrollText.addEventListener('animationiteration', () => {
        counter += 1;
        if(counter % 2 == 1){
          i++;
        }
        i = i % 4

        if (counter >= verbs.length * 2) {
          // scrollText.style.display = 'none';
          // centerText.style.display = 'none';
          animationFinished = true;
        }
      });
    });
  });
  
</script>

<style>

  .scrolling-text {
    animation: scrollAnimation infinite linear;
    white-space: nowrap;
    transform-origin: 50% 100%;
    will-change: transform;
  }

  @keyframes scrollAnimation {
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
    20% {
      transform: translateY(20%);
      opacity: 1;
    }
    80% {
      transform: translateY(-20%);
      opacity: 1;
    }
    100% {
      transform: translateY(-100%);
      opacity: 0;
    }
  }

  .parent {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; /* for three items */
  }

  .signup {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }

  .btn {
    padding: 0.5rem 1rem; /* Equivalent to px-4 py-2 */
    border-radius: 0.5rem; /* Equivalent to rounded-lg */
    background-color: #fff; /* Equivalent to bg-white */
    color: #000; /* Equivalent to text-black */
    outline: 1px solid #000; /* Equivalent to outline outline-1 */
    transition: background-color 0.3s ease;
    cursor: pointer;
  }

  .btn:hover {
    background-color: #D3D3D3; /* New background color on hover */
    /* Additional styles to apply on hover */
  }

  .btn + .btn {
    margin-top: 10px; /* Adjust the value as needed */
  }
</style>

<div class="flex justify-center items-center h-screen">
  {#if !animationFinished}
  <div class="parent items-center text-6xl w-7/12">  
    <div id="scrollText" class="scrolling-text text-right font-montserrat">
      {verbs[i]}
    </div>
    
    <div id="centerText" class = "child font-montserrat text-center font-bold">
      YOUR
    </div>

    <div id="scrollText" class="child scrolling-text text-left font-montserrat">
      {nouns[i]}
    </div>
  </div>
  {:else}
    <div class = "signup w-screen h-screen items-center" in:fade={{ duration: 1000 }}>
      <div class = "flex flex-row items-center justify-self-center">
        <div class = "transform scale-150 mt-[-14px]">
          <BigLogo/>
        </div>
        <div class = "font-montserrat text-9xl font-bold pb-5 justify-self-center ml-8">
          hearth
        </div>
      </div>
      <div class = "flex flex-col self-justify-center">
        <h1 class="mb-1">
          Need an account?
        </h1>
        <button class = "btn w-1/2" on:click={redirectToRegister}>
          sign up
        </button>
        <hr class = "my-5 w-1/2">
        <h1 class="mb-1">
          Already have an account?
        </h1>
        <button class = "btn w-1/2" on:click={redirectToSignIn}>
          sign in
        </button>
      </div>
    </div>
  {/if}
</div>