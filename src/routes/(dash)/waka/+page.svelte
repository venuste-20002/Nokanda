<script>
    import { goto } from "$app/navigation";

    function redirectTo(page) {
    goto(page);
  }

  const services = [
    {
      name:"Flex Pass 50K/Month",
      link:"/phone"
    },
    {
      name:"Punch W/Card 33500",
      link:"/momo"
    },
    {
      name:"Punch Renewal 30K",
      link:"/electricity"
    },
    {
      name:"Basic Membership 60K/Month",
      link:"/airtime"
    },
    {
      name:"Basic Membership 150K/ 3 Months",
      link:"/water"
    },
    {
      name:"Basic Membership 300K/year",
      link:"/bill"
    },
    {
      name:"Plus Membership 420K/year",
      link:"#"
    }
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
