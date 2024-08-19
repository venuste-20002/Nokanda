<script>
  import { enhance } from "$app/forms";
  export let form;
</script>

<svelte:head>
  <title>Signup</title>
</svelte:head>

<h1 class="text-center text-[30px] font-bold">Sign Up</h1>


<form method="POST" action="?/signup" class="w-[100%] sm:w-[80%] flex flex-col gap-4  m-auto
  mt-8 p-1" use:enhance>
  <div class="flex flex-col gap-2">
    <label for="emailnumber" class="text-[20px] font-inter font-[600]">Enter
     your valid email</label>
    <input type="text" name="email" placeholder="Enter your email "
      value={form?.email ?? ""}  class="rounded-lg
      w-full p-2 h-[40px] placeholder-black bg-principalGray text-black">
    {#if form?.error && form?.error.email}
      <p class="text-red-700"> {form?.error?.email._errors[0]}</p>
    {/if}
  </div>
  <div class="flex flex-col gap-2">
    <label for="gender" class="text-[20px] font-inter font-[600]">Select your
      gender</label>
    <select value={form?.gender ?? ""} name="gender" id="lang" class="rounded-lg
      w-full p-2 h-[40px] bg-principalGray text-black ">
      <option value="">Select your gender</option>
      <option value="m">Male</option>
      <option value="f">Female</option>
    </select>
    {#if form?.error && form?.error.gender}
      <p class="text-red-700"> {form?.error?.gender._errors[0]}</p>
    {/if}
  </div>
  <div class="flex flex-col gap-2">
    <label for="language" class="text-[20px] font-inter font-[600]">Select your
    language</label>
    <select name="lang" id="lang" value={form?.lang ?? ""}  class="rounded-lg
      w-full p-2 h-[40px] bg-principalGray text-black ">
      <option value="" >Select a language</option>
      <option value="en">English</option>
      <option value="kiny">Kinyarwanda</option>
      <option value="fr">French</option>
    </select>
    {#if form?.error && form?.error.lang}
      <p class="text-red-700"> {form?.error?.lang._errors[0]}</p>
    {/if}
  </div>
  <div >
    <button class="mt-[50px] w-[100%] h-[41px] text-[20px] font-bold
      bg-principalYellow rounded-[5px]">
        Sign up
    </button>
  </div>
  <p class="mt-4 font-bold text-[15px] sm:text-[20px] text-center ">Already have an account?
    Log in </p> 
  <p class="text-principalGray text-center text-opacity-45 text-[20px]">By
    countinuing you
    agree to Nokanda terms of use and privacy policy</p>
  <button formaction="?/github" class="mt-[50px] w-[100%] h-[41px] text-[20px] font-bold
  bg-principalYellow rounded-[5px]">
    Github
  </button>
</form>

 
