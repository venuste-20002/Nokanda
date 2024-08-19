<script>
    import Disian from "./Disian.svelte";
    // import Navbar from "./Navbar.svelte";
</script>

<div class="flex-1 lg:ml-1/5 bg-white">
    <!-- Header -->
    <div class="w-full h-[80px] bg-secondary fixed top-0 lg:left-[252px] z-500">
        <div></div>
        <h1 class="text-center text-white text-[36px]">Nokanda</h1>
        <h1 class="text-center text-white">MTN Airtime & Internet</h1>
        <div></div>
    </div>

    <!-- Disian Component and Slot -->
    <div class="pt-[80px]"> 
        <Disian />
        <div>
            <slot />
        </div>
    </div>
</div>
