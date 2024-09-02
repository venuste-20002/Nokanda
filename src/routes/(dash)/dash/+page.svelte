<script>
    import { goto } from "$app/navigation";

  function redirectTo(page) { 
    goto(page);
  }

  const services = [
    {
      name:"MTN Mobile Money",
      link:"/money"
    },
    {
      name:"MTN Airtime & Internet",
      link:"/airtime"
    },
    {
      name:"Airtel Money",
      link:"/airtel-money"
    },
    {
      name:"MoMoPay Merchant",
      link:"/insurance"
    },
    {
      name:"Insurance",
      link:"/insurance"
    },
    {
      name:"CanalBox Internet",
      link:"/insurance"
    },
    {
      name:"Rwanda Useful codes",
      link:"/useful-codes"
    },
  ]
</script>

<div class="justify-center items-center flex gap-3 p-2 flex-wrap">
  {#each services as s }
      <div aria-hidden="true" class="flex justify-center items-center
      cursor-pointer w-[80%] sm:w-[13%] h-[150px] bg-white rounded-[10px]
      shadow-2xl p-4" on:click={()=> redirectTo(`${s.link}`)}>
        {s.name}
      </div>
  {/each}
</div>


