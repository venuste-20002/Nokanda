<script>
    import { slide } from 'svelte/transition';
    import Deleting from './Deleting.svelte'
    import Leftbar from './Leftbar.svelte';
    import { quintInOut } from 'svelte/easing';
    let showModal = false;
    let showDropdown = false
</script>


<div class="block lg:hidden ">
        <iconify-icon aria-hidden="true" icon={!showDropdown?
        "bi:three-dots-vertical": "material-symbols:close"} class="text-[20px]
        text-black" on:click={()=>showDropdown=!showDropdown}></iconify-icon>
</div>

{#if showDropdown}
    <div class="w-[100%] bg-white text-black fixed left-0 top-24 border
        border-b-black/10 block lg:hidden">
        <div class="w-full relative" transition:slide={{easing: quintInOut,
            duration:400, axis:'y'}}>
            <Leftbar />
        </div>
    </div> 
{/if}

<Deleting bind:showModal/>
