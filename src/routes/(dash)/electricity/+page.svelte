<script>
    import { enhance } from "$app/forms";
    let amount = "";
    let meteNumber = "";

    import Sending from "../../../components/Sending.svelte";
    $: isFormValid = amount & meteNumber;
</script>
<Sending>
    <form use:enhance action="?/sendSMS" method="POST">
            <div class="mb-4 p-1">
                <label for="Amount" class="block text-gray-700 font-bold mb-2"
                >Enter Amount</label
                >
                <input
                    type="number"
                    name="amount"
                    class="w-full p-2 border rounded"
                    bind:value={amount}
                    placeholder="Enter amount"
                />
            </div>
            <div class="mb-4 p-1">
                <label
                    for="meterNumber"
                    class="block text-gray-700 font-bold mb-2"
                >Enter Meter Number required!</label
                >
                <div class="relative w-full">
                    <input
                        type="number"
                        name="meteNumber"
                        id="meterNumber"
                        class="w-full p-2 border rounded pr-16"
                        bind:value={meteNumber}
                        placeholder="Enter Meter Number required"
                    />
                    <button
                        type="button"
                        class="absolute inset-y-0 right-2 px-4 text-secondary border-l border-gray-300 rounded-r"
                    >
                        Verify
                    </button>
                </div>

            </div>
            <div>
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
