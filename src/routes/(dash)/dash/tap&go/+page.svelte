<script>
    import Links from "../../../../components/Links.svelte";
  
    const services = [
      {
        name:"Check Tap&Go Card Balance",
        link:"/sender/tapandgo"
      },
      {
        name:"Top-Up Tap&Go Card",
        link:"/sender/tapandgocard"
      }
    ]
  
</script>
  
<Links {services} />
