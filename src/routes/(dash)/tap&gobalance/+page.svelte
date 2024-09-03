<script>
    import { enhance } from '$app/forms';
  let billid = "";

  $: isFormValid = billid;
</script>


<div class="w-[50%] m-auto  h-full">
  <form use:enhance action="?/sendSMS" method="POST">
      <div class="p-6 w-full m-auto  shadow-lg rounded-lg">
          <div class="mb-4 p-1">
              <label for="Amount" class="block text-gray-700 font-bold mb-2"
                  >Enter Tap&Go Card Number</label
              >
              <input
                  type="number"
                  id="billid"
                  name="billid"
                  class="w-full p-2 border rounded"
                  bind:value={billid}
                  placeholder="Enter Tap&Go Card Number"
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
      </div>
  </form>
</div>
