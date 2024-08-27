<script>
    export let data;
</script>
<form method="POST" action="/api/logout">
    <button class="mt-[50px] w-[100%] h-[41px] text-[20px] font-bold
        bg-principalYellow rounded-[5px]">
        logout
    </button>
</form>

{data?.session?.user.email}
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documenttion</p>
