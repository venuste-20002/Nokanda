<script>
  import { enhance } from "$app/forms";
  export let form;
</script>

<form method="POST" class="w-[100%] sm:w-[80%] flex flex-col gap-4  m-auto
  mt-[150px] p-1" use:enhance>  
  <h1 class="text-[40px] text-center">Set a valid phone number</h1>
  <div class="flex flex-col gap-2 mt-8">
    <label for="number" class="text-[20px] font-inter font-[600]">Enter
     your valid number</label>
    <input type="number" name="phone" placeholder="Enter your number" class="rounded-lg
      w-full p-2 h-[40px] placeholder-black bg-principalGray text-black">
  </div>
    {#if form?.error && form?.error.phone}
      <p class="text-red-700"> {form?.error?.phone._errors[0]}</p>
    {/if}
    <button class="mt-[50px] w-[100%] h-[41px] text-[20px] font-bold
      bg-principalYellow rounded-[5px]">
        Add number
    </button>
</form>
