<script>
  import Links from "../../../../components/Links.svelte";

  const service = [
    {
      name:"Buy MTN airtime for my number",
      link:"/sender/airtimemy"
    },
    {
      name:"Buy MTN airtime for others",
      link:"/sender/airtimeothers"
    }
  ]
</script>

<Links services={service} />
  
