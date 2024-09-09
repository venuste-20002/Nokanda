<script>
  import { goto } from "$app/navigation";

  export let services = [] 
    
</script>

<div class="flex flex-col items-center">
    {#each services as s ,i}
      <div key={i} aria-hidden="true" on:click={()=>goto(s.link)}
        class="w-[100%] sm:w-[80%] h-[60px] bg-white rounded-[10px] shadow-2xl
        my-1 flex items-center justify-between
        cursor-pointer
        px-4"> 
          <span class="mr-2">➡️</span>{s.name}<span class="mr-8 text-[25px]">></span>
      </div>
    {/each}
</div>
