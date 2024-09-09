<script>
    import { cubicInOut } from "svelte/easing";
        import { fly } from "svelte/transition";
    export let message
    export let type
    const alertMessagesEnum = ['success', 'error'];

    if (!alertMessagesEnum.includes(type)) {
        console.log("Unknow Alert Type");
        show = false;
    }

    let show = true
    
    setTimeout(() => {
        show = false;
    }, 1000);
</script>

{#if show}
    <div transition:fly={{ x: 500, delay: 800, duration: 800, easing: cubicInOut }} 
        class="fixed top-4 right-4 w-[80%] md:w-auto">
        <div class={`min-w-[300px] h-[50px] ${type === "success" ?
            "bg-green-400" : "bg-red-500"} p-4 rounded flex text-center gap-5
            items-center`}>
            <iconify-icon
                icon={type==="success"?"akar-icons:info-fill":"fluent-mdl2:status-circle-error-x"}
                class="text-[20px] text-black">
            </iconify-icon>
            {message}
        </div>
    </div>
{/if}
