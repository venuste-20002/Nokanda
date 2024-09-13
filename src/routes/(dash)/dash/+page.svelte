<script>
  import { goto } from "$app/navigation";

  function redirectTo(page) { 
    goto(page);
  }

  const services = [
    {
      name:"MTN Mobile Money",
      link:"/dash/money"
    },
    {
      name:"MTN Airtime & Internet",
      link:"/dash/airtime"
    },
    {
      name:"Airtel Money",
      link:"#"
    },
    {
      name:"MoMoPay Merchant",
      link:"#"
    },
    {
      name:"Insurance",
      link:"#"
    },
    {
      name:"CanalBox Internet",
      link:"#"
    },
    {
      name:"Rwanda Useful codes",
      link:"#"
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


