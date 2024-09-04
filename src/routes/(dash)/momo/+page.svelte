<script>
    import { enhance } from '$app/forms';
    import Alert from "../../../components/Alert.svelte";
    import Sending from "../../../components/Sending.svelte";
    let amount = "";
    let receiverCode = "";
    let addAgentCharge = false;
    export let form 
    $: isFormValid = amount && receiverCode;
</script>


{#if form?.success}
    <Alert>
        <p>USSD has been successfully sent</p>
    </Alert>
{/if}
<Sending>
    <form use:enhance action="/api/universal?provider=momo" method="POST">
            <div class="mb-4 p-1">
                <label for="Amount" class="block text-gray-700 font-bold mb-2"
                >Enter Amount</label
                >
                <input
                    type="number"
                    id="amount"
                    name="value1"
                    class="w-full p-2 border rounded"
                    bind:value={amount}
                    placeholder="Enter Amount"
                />
            </div>
            <div class="mb-4 p-1">
                <label
                    for="merchant code"
                    class="block text-gray-700 font-bold mb-2"
                >Enter Merchant Code
                </label>
                <input
                    type="number"
                    id="receiverCode"
                    name="value2"
                    class="w-full p-2 border rounded"
                    bind:value={receiverCode}
                    placeholder="Enter Merchant Code"
                />
            </div>
            <div class="mb-4 p-1">
                <button
                    type="submit"
                    class={`w-full px-3 p-4 rounded-lg focus:outline-none focus:ring-2 ${isFormValid ? "bg-indigo-950 text-white" : "bg-stone-400 cursor-not-allowed"}`}
                    disabled={!isFormValid}
                >
                    Submit
                </button>
            </div>
    </form>
</Sending>

