<script>
    import Disian from "../../components/Disian.svelte";
    import Leftbar from "../../components/Leftbar.svelte";
    import Rightbar from "../../components/Rightbar.svelte";
</script>

<div class="w-full min-h-screen flex bg-white">
    <Leftbar />
    <Rightbar>
        <slot />
    </Rightbar>
</div>
