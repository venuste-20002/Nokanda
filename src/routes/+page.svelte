<script>
    export let data;
</script>
<svelte:head>
    <title>Home</title>
</svelte:head>
<form method="POST" action="/api/logout">
    <button class="mt-[50px] w-[100%] h-[41px] text-[20px] font-bold
        bg-principalYellow rounded-[5px]">
        logout
    </button>
</form>

Email:{data?.session?.user.email}<br/>
Phone:{data?.user[0]?.phone}
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documenttion</p>
