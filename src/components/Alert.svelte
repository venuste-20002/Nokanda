<script>
    import { cubicInOut} from "svelte/easing";
    import { fly} from "svelte/transition";

    let show = true;
    
    setTimeout(() => {
        show = false;
    }, 1000);

</script>

{#if show}
    <div transition:fly={{ x: 500, delay: 800, duration: 800, easing: cubicInOut }} 
        class="fixed top-4 right-4 w-[80%] md:w-auto">
        <div class="min-w-[300px] h-[50px] bg-green-400 p-4 rounded flex text-center gap-5 items-center">
            <iconify-icon icon="akar-icons:info-fill" class="text-[20px] text-black"></iconify-icon>
            <slot />
        </div>
    </div>
{/if}
