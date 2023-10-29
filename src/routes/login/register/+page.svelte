<script>
  import BigLogo from "$lib/images/biglogo.svelte"

  function redirectToSignIn() {
      window.location.href = '/login/signin';
  }
</script>


<div class="w-screen h-screen flex justify-center items-center">
  <div class="flex flex-col w-1/4">
    <div class = "flex flex-row items-center justify-self-center">
      <div class = "mt-[-24px] transform -translate-x-3">
        <BigLogo/>
      </div>
      <div class = "font-montserrat text-7xl font-bold pb-5 justify-self-center">
        hearth
      </div>
    </div>
    <!-- <div class="my-2">Email</div> -->
    <input type="text" class="textbox" placeholder="Email">
    <!-- <div class="my-2">Username</div> -->
    <input type="text" class="textbox" placeholder="Username">
    <!-- <div class="my-2">Password</div> -->
    <input type="password" class="textbox" placeholder="Password">
    <!-- <div class="my-2">Confirm Password</div> -->
    <input type="password" class="textbox" placeholder="Confirm Password">
    <button class="btn">confirm</button>
    <h1 class="mb-1 my-5">
      Already have an account?
    </h1>
    <button class = "btn" on:click={redirectToSignIn}>
      sign in
    </button>
  </div>
</div>

<style lang="postcss">
  .btn {
    padding: 0.5rem 3rem; /* Equivalent to px-4 py-2 */
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

  .textbox + .btn {
    margin-top: 20px; /* Adjust the value as needed */
  }

  .textbox {
    padding: 0.5rem 1rem; /* Space inside the text box */
    border-radius: 0.5rem;
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
    outline: none; /* Remove browser default outline */
    transition: border-color 0.3s ease;
  }

  .textbox:focus {
    border-color: #D3D3D3; /* Change border color on focus instead of hover */
  }

  .textbox + .textbox {
    margin-top: 10px;
  }
</style>
