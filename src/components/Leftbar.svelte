<script>
    import Deleting from './Deleting.svelte'
    let showModal = false;
</script>

<div class="">
    <div class="top-0 sticky p-5">
        <button
            class="text-left w-full px-3 focus:outline-none focus:ring-2
            focus:ring-blue-500"
        >
            <iconify-icon icon="ion:save" class="text-[20px] text-principalYellow"></iconify-icon>
            save accounts
            <p class="text-center text-xs text-stone-500">
                save your meter numbers etc
            </p>
        </button>
        <button
            class="text-left w-full px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
            <iconify-icon icon="ooui:share" class="text-[20px] text-principalYellow"></iconify-icon>
            share Nokanda
            <p class="text-center text-xs text-stone-500">
                share app with friends
            </p>
        </button>
        <button
            class="text-left w-full px-3 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
            <iconify-icon icon="fa-solid:language" class="text-[20px] text-principalYellow"></iconify-icon>
            change Language
            <p class="text-center text-xs text-stone-500"></p>
        </button>
        <button
            class="text-left w-full px-3 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            on:click={()=>window.open('https://www.hexakomb.com')}
        >
            <iconify-icon icon="material-symbols:info" class="text-[20px] text-principalYellow"></iconify-icon>
            About Nokanda
            <p class="text-center text-xs text-stone-500"></p>
        </button>
        <button
            class="text-left w-full px-3 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
            <iconify-icon icon="mdi:faq" class="text-[20px] text-principalYellow"></iconify-icon>
            FAQ
            <p class="text-center text-xs text-stone-500"></p>
        </button>
        <button
            class="text-left w-full px-3 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            on:click={()=>window.location = 'mailto:info@hexakomb.com'}
        >
            <iconify-icon icon="ic:baseline-email" class="text-[20px] text-principalYellow"></iconify-icon>
            Email Support
            <p class="text-center text-xs text-stone-500"></p>
        </button>
        <button
            class="text-left w-full px-3 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            on:click={()=> (showModal = true)}
        >
            <iconify-icon icon="line-md:account-delete" class="text-[20px] text-principalYellow"></iconify-icon>
                 Delete Account
            <p class="text-center text-xs text-stone-500"></p>
        </button>
        <form action="/api/logout" method="POST">
            <button
                class="text-left w-full px-3 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <iconify-icon icon="foundation:shield" class="text-[20px] text-principalYellow"></iconify-icon>
                     Logout
                <p class="text-center text-xs text-stone-500"></p>
            </button>
        </form>
        <p class="text-center text-stone-500">version 1.0.0 build: 0000001</p>
    </div>
</div>

<Deleting bind:showModal/>
