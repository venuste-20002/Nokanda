<script>
  import Links from "../../../../components/Links.svelte";

  const services = [
    {
      name:"Send Money",
      link:"/sender/momo"
    },
    {
      name:"MoMoPay-Merchant",
      link:"/sender/momo"
    },
    {
      name:"Buy Electricy EUCL",
      link:"/sender/electricity"
    },
    {
      name:"Buy MTN Airtime",
      link:"/dash/airtime"
    },
    {
      name:"Pay Water Bill WASAC",
      link:"/sender/water"
    },
    {
      name:"Bill Payments",
      link:"/dash/bill"
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

<Links {services} />
