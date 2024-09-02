<script>
    import Deleting from './Deleting.svelte'
    let showModal = false;
</script>

<div class="hidden lg:block w-1/5 min-h-full shadow-lg">
    <div class="top-0 sticky p-5">
        <button
            class="text-left w-full px-3 focus:outline-none focus:ring-2
            focus:ring-blue-500"
        >
            <i class="fa-solid fa-save p-2 text-secondary"></i>
            save accounts
            <p class="text-center text-xs text-stone-500">
                save your meter numbers etc
            </p>
        </button>
        <button
            class="text-left w-full px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
            <i class="fa-solid fa-share p-2 text-secondary"></i>
            share Nokanda
            <p class="text-center text-xs text-stone-500">
                share app with friends
            </p>
        </button>
        <button
            class="text-left w-full px-3 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
            <i class="fa-solid fa-language p-2 text-secondary"></i>
            change Language
            <p class="text-center text-xs text-stone-500"></p>
        </button>
        <button
            class="text-left w-full flex flex-wrap px-3 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
            <i class="fa-solid fa-user p-2 text-secondary"></i>
            Dark Theme
            <div
                class="item-right w-[50px] h-[80%] rounded-2xl bg-stone-800"
            >
                <p class="text-white text-right p-1">Off</p>
            </div>
            <p class="text-center text-xs text-stone-500"></p>
        </button>
        <button
            class="text-left w-full px-3 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
            <i class="fa-solid fa-user p-2 text-secondary"></i>
            About Nokanda
            <p class="text-center text-xs text-stone-500"></p>
        </button>
        <button
            class="text-left w-full px-3 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
            <i class="fa-solid fa-user p-2 text-secondary"></i>
            FAQ
            <p class="text-center text-xs text-stone-500"></p>
        </button>
        <button
            class="text-left w-full px-3 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
            <i class="fa-solid fa-user p-2 text-secondary"></i>
            Email Support
            <p class="text-center text-xs text-stone-500"></p>
        </button>
        <button
            class="text-left w-full px-3 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            on:click={()=> (showModal = true)}
        >
            <i class="fa-solid fa-user p-2 text-secondary"></i>
            Delete Account
            <p class="text-center text-xs text-stone-500"></p>
        </button>
        <form action="/api/logout" method="POST">
            <button
                class="text-left w-full px-3 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <i class="fa-solid fa-user p-2 text-secondary"></i>
                Logout
                <p class="text-center text-xs text-stone-500"></p>
            </button>
        </form>
        <p class="text-center text-stone-500">version 1.0.0 build: 0000001</p>
    </div>
</div>

<Deleting bind:showModal/>
