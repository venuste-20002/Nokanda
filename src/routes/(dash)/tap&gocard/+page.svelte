<script>
    import { enhance } from '$app/forms';
  
    let amount = '';
    let tap = '';
 
  
    $: isFormValid = amount && tap;
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
        <div class="mb-4 p-1">
          <label for="receiver" class="block text-gray-700 font-bold mb-2">Enter Tap&Go Number</label>
          <input 
            type="number" 
            id="tap" 
            name="tap" 
            class="w-full p-2 border rounded" 
            bind:value={tap} 
            placeholder="Enter Tap&Go Number"
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
  