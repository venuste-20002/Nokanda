<script>
  // Define the redirectTo function within the Svelte script block
  function redirectTo(page) {
    // Display a message asking the user to dial the USSD code.
    // alert('Please dial *182# on your mobile device.');
    
    // Redirect to the desired page.
    window.location.href = page;
  }
</script>

<div class="absolute top-50 lg:left-[260px] flex flex-wrap z-50 gap-4 p-4">
  <button
    class="w-[19%] h-[150px] bg-white rounded-[10px] shadow-2xl p-4"
    on:click={() => redirectTo('/money')}
  >
    MTN Mobile Money
  </button>

  <button
    class="w-[19%] h-[150px] bg-white rounded-[10px] shadow-2xl p-4"
    on:click={() => redirectTo('/airtime')}
  >
    MTN Airtime & Internet
  </button>

  <button
    class="w-[19%] h-[150px] bg-white rounded-[10px] shadow-2xl p-4"
    on:click={() => redirectTo('/airtel-money')}
  >
    Airtel Money
  </button>

  <button
    class="w-[19%] h-[150px] bg-white rounded-[10px] shadow-2xl p-4"
    on:click={() => redirectTo('/momo-pay')}
  >
    MoMoPay Merchant *182#
  </button>

  <button
    class="w-[19%] h-[150px] bg-white rounded-[10px] shadow-2xl p-4"
    on:click={() => redirectTo('/insurance')}
  >
    Insurance
  </button>

  <button
    class="w-[19%] h-[150px] bg-white rounded-[10px] shadow-2xl p-4"
    on:click={() => redirectTo('/canalbox-internet')}
  >
    CanalBox Internet
  </button>

  <button
    class="w-[19%] h-[150px] bg-white rounded-[10px] shadow-2xl p-4"
    on:click={() => redirectTo('/useful-codes')}
  >
    Rwanda Useful Codes
  </button>
</div>
