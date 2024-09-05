<!-- <script>
    const stage1 = "phone"
    const stage2="momo"
    const stage4="electricity"

</script>
<main>

</main> -->
<script>
    import Electricity from "../../../components/Electricity.svelte";
    import Momo from "../../../components/Momo.svelte";
    import Phone from "../../../components/Phone.svelte";


    let stage = 'phone';
</script>

<div>
    {#if stage === 'phone'}
        <Phone />
    {:else if stage === 'momo'}
        <Momo />
    {:else if stage === 'electricity'}
        <Electricity />
    {/if}
</div>

<div class="flex justify-center mt-4">
    <button on:click={() => stage = 'phone'} class="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2">Phone</button>
    <button on:click={() => stage = 'momo'} class="px-4 py-2 bg-green-500 text-white rounded-lg">Momo</button>
    <button on:click={() => stage = 'electricity'} class="px-4 py-2 bg-red-500 text-white rounded-lg">Electricity</button>
</div>

