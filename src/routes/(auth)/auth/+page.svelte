<script>
  import { enhance } from "$app/forms";
</script>

<form method="POST" action="?/auth" class="w-[100%] sm:w-[80%] flex flex-col gap-4  m-auto
   p-1 justify-center items-center  min-h-screen sm:h-[100%] text-black" use:enhance>
  <button formaction="?/auth&provider=github" class="mb-[20px] w-[100%] h-[41px] text-[20px] font-bold
  bg-principalYellow rounded-[5px] flex  justify-center items-center gap-2">
  <iconify-icon icon="logos:github-icon" class="text-black text-[25px]"></iconify-icon>
    Github
  </button>
  <button formaction="?/auth&provider=google" class="mb-[20px] w-[100%] h-[41px] text-[20px] font-bold
  bg-principalYellow rounded-[5px] flex  justify-center items-center gap-2">
  <iconify-icon icon="devicon:google" class="text-black text-[25px]"></iconify-icon>
    Google
  </button>
</form> 


