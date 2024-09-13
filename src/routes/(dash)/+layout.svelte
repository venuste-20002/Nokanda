<script>
    import { goto } from "$app/navigation";
    import Leftbar from "../../components/Leftbar.svelte";
    import Dropdown from "../../components/Dropdown.svelte"
</script>

<div class="w-[100%] min-h-screen flex bg-white">
    <div class="hidden lg:block w-1/5 min-h-full shadow-lg">
        <Leftbar />
    </div>
    <div class="w-full">
        <div aria-hidden="true" class="w-full h-[100px] bg-secondary top-0
            sticky text-center text-white font-bold flex justify-center items-center"> 
            <div class="z-1 cursor-pointer" aria-hidden="true" on:click={()=>
                goto("/dash")}>
                <h1 class="text-[40px]">Nokanda</h1>
                <h1 class="">MTN Airtime & Internet</h1>
            </div>
            <div class="z-50 fixed right-3 top-8">
                <Dropdown /> 
            </div>
        </div>
        <div class="bg-[url('/assets/image1.jpeg')] bg-cover bg-center flex
            flex-1 justify-center items-center h-[230px] w-[100%]">
        </div>
        <div class="p-1 sm:p-5">
            <div class="w-[100%] sm:w-[95%] p-2 m-auto">
                <slot />
            </div>
        </div>
    </div>
</div>
