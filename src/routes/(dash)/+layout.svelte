<script>
    import { goto } from "$app/navigation";
    import Leftbar from "../../components/Leftbar.svelte"; 
    let isMenuOpen = false;
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }
    function reroute(href) {
        isMenuOpen = false;
        window.location.href = href;
    }
    let showModal = false;
</script>

<div class="w-[100%] min-h-screen flex bg-white">
    <Leftbar class="hidden md:block" />

    <div class="w-full">
        <div
            class="w-full h-[100px] bg-secondary sticky top-0 text-center text-white font-bold"
        >
            <h1 class="text-[40px]">Nokanda</h1>
            <h2>MTN Airtime & Internet</h2>
            <button
                class="block md:hidden absolute top-5 right-3 text-3xl"
                on:click={toggleMenu}
            >
                &#x2022;&#x2022;&#x2022;
            </button>
            {#if isMenuOpen}
                <div
                    class="fixed top-0 left-0 w-screen h-screen border-b bg-white z-50 flex flex-col gap-8"
                >
                    <div
                        class="w-screen h-[100px] bg-secondary  text-center text-white font-bold"
                    >
                        <h1 class="text-[40px]">Nokanda</h1>
                        <h2>MTN Airtime & Internet</h2>
                        <button
                            on:click={toggleMenu}
                            class=" absolute outline-none border-none top-8 left-5"
                        >
                            <i class="fa-solid fa-xmark text-2xl"></i>
                        </button>
                    </div>
                    <div class="p-20">
                        <button
                            class="text-left w-full  p-5 focus:outline-none focus:ring-2 text-black focus:ring-blue-500"
                        >
                            <i
                                class="text-left fa-solid fa-save p-2 text-secondary"
                            ></i>
                            save accounts
                            <p class="text-center text-xs text-stone-500">
                                save your meter numbers etc
                            </p>
                        </button>

        
                    <button
                        class="text-left w-full px-3 p-5 focus:outline-none focus:ring-2 text-black focus:ring-blue-500"
                    >
                        <i class="fa-solid fa-language p-2 text-secondary"></i>
                        change Language
                        <p class="text-center text-xs text-stone-500"></p>
                    </button>

                    <button
                    class="text-left w-full flex flex-wrap px-3 p-5 focus:outline-none focus:ring-2 text-black focus:ring-blue-500"
                >
                    <i class="fa-solid fa-user p-2 text-secondary"></i>
                    Dark Theme
                    <div
                        class="item-right w-[50px] h-[80%] rounded-2xl bg-stone-800 relative" 
                    >
                        <p class=" text-white text-right p-1 ">Off</p>
                    </div>
                    <p class="text-center text-xs text-stone-500"></p>
                </button>

                <button
                class="text-left w-full px-3 p-5 focus:outline-none focus:ring-2 text-black focus:ring-blue-500"
            >
                <i class="fa-solid fa-user p-2 text-secondary"></i>
                About Nokanda
                <p class="text-center text-xs text-stone-500"></p>
            </button>

            <button
            class="text-left w-full px-3 p-5 focus:outline-none focus:ring-2 text-black focus:ring-blue-500"
        >
            <i class="fa-solid fa-user p-2 text-secondary"></i>
            FAQ
            <p class="text-center text-xs text-stone-500"></p>
        </button>

        <button
        class="text-left w-full px-3 p-5 focus:outline-none focus:ring-2 text-black focus:ring-blue-500"
    >
        <i class="fa-solid fa-user p-2 text-secondary"></i>
        Email Support
        <p class="text-center text-xs text-stone-500"></p>
    </button>

    <button
    class="text-left w-full px-3 p-5 focus:outline-none focus:ring-2 text-black focus:ring-blue-500"
    on:click={()=> (showModal = true)}
>
    <i class="fa-solid fa-user p-2 text-secondary"></i>
    Delete Account
    <p class="text-center text-xs text-stone-500"></p>
</button>

<form action="/api/logout" method="POST">
    <button
        class="text-left w-full px-3 p-5 focus:outline-none focus:ring-2 text-black focus:ring-blue-500"
    >
        <i class="fa-solid fa-user p-2 text-secondary"></i>
        Logout
        <p class="text-center text-xs text-stone-500"></p>
    </button>
</form>

<p class="text-center text-stone-500">version 1.0.0 build: 0000001</p>
                    </div>
                </div>
            {/if}
        </div>
        <div
            class="bg-[url('assets/image1.jpeg')] bg-cover bg-center flex justify-center items-center h-[230px] w-[100%]"
        ></div>
        <div class="p-5">
            <div class="w-[100%] sm:w-[95%] m-auto">
                <slot />
            </div>
        </div>
    </div>
</div>
