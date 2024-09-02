<script>
  import { enhance } from '$app/forms';

  let amount = '';
  let receiverNumber = '';
  let addAgentCharge = false;

  $: isFormValid = amount && receiverNumber;
</script>

<div class=" w-[50%] m-auto flex flex-wrap h-full">
  <div class="p-6 w-full m-auto bg-slate-100 shadow-lg rounded-lg">
    <form use:enhance action="?/sendSMS" method="POST">
      <div class="mb-4 p-1">
        <label for="amount" class="block text-gray-700 font-bold mb-2">Enter Amount</label>
        <input 
          type="number" 
          id="amount" 
          name="amount" 
          class="w-full p-2 border rounded" 
          bind:value={amount} 
          placeholder="Enter Amount"
        >
      </div>

      <div class="flex justify-between mb-4">
        <button type="button" class="flex items-center justify-center w-1/2 bg-white font-bold py-2 px-4 rounded mr-2">
          Contact
        </button>
        <button type="button" class="flex items-center justify-center w-1/2 bg-white font-bold py-2 px-4 rounded ml-2">
          Scan QR
        </button>
      </div>

      <div class="mb-4 p-1">
        <label for="receiver" class="block text-gray-700 font-bold mb-2">Enter Receiver's Number</label>
        <input 
          type="text" 
          id="receiver" 
          name="receiverNumber" 
          class="w-full p-2 border rounded" 
          bind:value={receiverNumber} 
          placeholder="Enter Receiver's Number"
        >
      </div>
      
      <p class="mb-2 text-gray-800">
        Sending <span class="font-bold">{amount || 0}</span> to <span class="font-bold">{receiverNumber || '078...'}</span>
      </p>

      <div class="flex items-center mb-4">
        <p class="text-gray-700 mr-2">Add agent withdrawal charge?</p>
        <input 
          type="checkbox" 
          id="agentCharge" 
          name="addAgentCharge" 
          class="h-4 w-4 bg-indigo-950 rounded" 
          bind:checked={addAgentCharge}
        >
      </div>

      <div>
        <button 
          type="submit"
          class={`w-full px-3 p-4 rounded-lg focus:outline-none focus:ring-2 ${isFormValid ? 'bg-indigo-950 text-white' : 'bg-stone-400 cursor-not-allowed'}`} 
          disabled={!isFormValid}
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</div>

