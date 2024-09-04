<script>
    export let type
    export let id
    export let name
    export let placeholder
    export let value 
</script>

<input
    {type}
    {id}
    {name}
    class="w-full p-2 border rounded-lg"
    bind:value
    {placeholder}
/>
