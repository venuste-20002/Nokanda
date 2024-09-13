<script>
    import { enhance } from '$app/forms';
    import Alert from '../../../../components/Alert.svelte';
    import Input from '../../../../components/Input.svelte';
    import Sending from '../../../../components/Sending.svelte';

    export let data
    export let form

    $: choosenService = data.service;

</script>

{#if form && form?.success}
    <Alert type="success" message={form?.message} />
{/if}

{#if choosenService}
    <Sending>
        <p class="text-center sm:text-3xl text-2xl font-bold my-5">{choosenService.name}</p>
        <form use:enhance action={`?/send&provider=${choosenService.provider}`} method="POST">
            {#each choosenService.inputs as s}
                <div class="mb-4 p-1">
                    <label for={s.id} class="block text-gray-700 font-bold mb-2">
                        {s.placeholder}
                    </label>
                    <Input id={s.id} name={s.name}
                        placeholder={s.placeholder}/>
                </div>
            {/each}
            <div class="mb-4 p-1">
                <button
                    type="submit"
                    class={`w-full px-3 p-4 rounded-lg focus:outline-none focus:ring-2 bg-indigo-950 text-white`}
                >
                    Submit
                </button>
            </div>
        </form>
    </Sending>
{/if}
