<script>
    export let showModal;
    let dialog;

    $: {
        if (dialog && showModal) {
            dialog.showModal();
        }
    }
</script>

<dialog bind:this={dialog} 
    on:close={() => (showModal = false)}
    aria-hidden=true
    on:click|self={() => dialog.close()}
    class="w-[90%] sm:w-[50%] min-h-[20%] border backdrop-blur-3xl p-5
    text-center rounded-lg"> 
        <p class="text-3xl font-bold">Are you sure you want to delete this account?</p>
        <div class="my-5 flex justify-center gap-5"> 
            <form action="/api/delete" method="POST">
                <button class="w-[150px] h-[40px] border
                rounded-lg bg-red-500 text-white font-bold">Delete</button>
            </form>
            <button on:click={()=> dialog.close()} class="w-[150px] h-[40px] border
            rounded-lg bg-principalBlack text-white font-bold">close</button>
        </div>
</dialog>
