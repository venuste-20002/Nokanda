<script>
    import { goto } from "$app/navigation";
import Leftbar from "../../components/Leftbar.svelte";
</script>

<div class="w-[100%] min-h-screen flex bg-white">
    <Leftbar />
    <div class="w-full">
        <div aria-hidden="true" class="w-full h-[100px] bg-secondary top-0
            sticky text-center text-white font-bold" on:click={()=>
                goto("/dash")}> 
            <h1 class="text-[40px]">Nokanda</h1>
            <h1 class="">MTN Airtime & Internet</h1>
        </div>
        <div class="bg-[url('assets/image1.jpeg')] bg-cover bg-center flex
            flex-1 justify-center items-center h-[230px] w-[100%]">
        </div>
        <div class="p-5">
            <div class="w-[100%] sm:w-[95%] m-auto">
                <slot />
            </div>
        </div>
    </div>
</div>
