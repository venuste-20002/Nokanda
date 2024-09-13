<script>
    import { cubicInOut } from "svelte/easing";
    import { fly } from "svelte/transition";
    export let message
    export let type;
    let show = true;

    const alertMessagesEnum = ['success', 'error'];

    if (!alertMessagesEnum.includes(type)) {
        show = false; 
    }

    setTimeout(() => {
        show = false;
    }, 1000);
</script>

{#if show}
    <div transition:fly={{ x: 500, delay: 100, duration: 800, easing: cubicInOut }} 
        class="fixed top-4 right-4 w-[80%] md:w-auto">
        <div class={`min-w-[300px] h-[50px] ${type === "success" ?
            "bg-green-400" : "bg-red-400"} p-4 rounded flex text-center gap-5
            items-center`}>
            <iconify-icon icon="akar-icons:info-fill" class="text-[20px]
                text-black"></iconify-icon>
           {message}
        </div>
    </div>
{/if}
