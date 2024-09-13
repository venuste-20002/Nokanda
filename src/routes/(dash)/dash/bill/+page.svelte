<script>
  import Links from "../../../../components/Links.svelte";


  const services = [
    {
      name:"Pay Water Bill-WASAC",
      link:"/sender/water"
    },
    {
      name:"Pay Irembo Bill",
      link:"/sender/irembo"
    },
    {
      name:"Pay Taxes-RRA",
      link:"/sender/rra"
    },
    {
      name:"Pay Tap&Go",
      link:"/dash/tap&go"
    },
    {
      name:"Pay WaKA",
      link:"#"
    },
    {
      name:"Pay MTN Post Paid Bill",
      link:"/sender/mtnbill"
    }
  ]

</script>

<Links {services} />
