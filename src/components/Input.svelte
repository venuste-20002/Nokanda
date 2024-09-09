<script>
    export let id 
    export let name 
    export let placeholder
</script>

<input
    type="number"
    {id}
    {name}
    class="w-full p-2 border rounded"
    {placeholder}
    required
/>
