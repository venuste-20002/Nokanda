<script>
    import { page } from '$app/stores';
</script>

<div class="flex flex-col justify-center items-center text-red-700 w-full bg-principalGray min-h-[100vh]">
    <h1 class="text-[10vh] font-bold">{$page.status}: {$page.error && $page.error.message}</h1>
    <div class="flex gap-10">
        <button on:click={()=>  window.location.reload()} class="border
        w-[150px]  bg-principalYellow text-black h-[50px] rounded-lg text-lg
        font-bold">Reload Page</button>
        <button on:click={()=>  window.history.back()} class="border
        w-[150px]  bg-principalYellow text-black h-[50px] rounded-lg text-lg
        font-bold">Go back</button>
    </div>
</div>
