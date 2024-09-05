<script>
    import { goto } from "$app/navigation";

    function redirectTo(page) {
    goto(page);
  }

  const services = [
    {
      name:"Send Money",
      link:"/phone"
    },
    {
      name:"MoMoPay-Merchant",
      link:"/momo"
    },
    {
      name:"Buy Electricy EUCL",
      link:"/electricity"
    },
    {
      name:"Buy MTN Airtime",
      link:"/"
    },
    {
      name:"Pay Water Bill WASAC",
      link:"#"
    },
    {
      name:"Bill Payments",
      link:"/bill"
    },
    {
      name:"Bank Services",
      link:"#"
    },
    {
      name:"Bank Services",
      link:"#"
    },
    {
      name:"Check MoMo Balance",
      link:"#"
    },
    {
      name:"Pay For TV",
      link:"#"
    },
    {
      name:"My Account",
      link:"#"
    },
    {
      name:"SPENN",
      link:"#"
    },
  ]
</script>

<div class="flex flex-col items-center">
    {#each services as s ,i}
      <div key={i} aria-hidden="true" on:click={()=> redirectTo(`${s.link}`)} class="w-[100%] sm:w-[80%] h-[60px]
      bg-white rounded-[10px] shadow-2xl my-1 flex items-center justify-between
      cursor-pointer
      px-4"> 
        <span class="mr-2">➡️</span>{s.name}<span class="mr-8 text-[25px]">></span>
      </div>  
    {/each}
</div>
