<div class=" w-full min-h-[100vh] bg-principalBlack
  bg-opacity-100 sm:bg-opacity-60 flex
  sm:flex-row flex-col">
  <div class="w-full border-0 bg-principalBlack text-white sm:border
    border-black p-10 flex-1 ">
    <slot />
  </div> 
  <div class="w-full border border-black
    bg-[url('bg.jpg')] bg-center bg-cover hidden md:hidden lg:flex sm:hidden
    justify-center items-center flex-1"> 
    <h1 class="text-[5vw] bg-principalYellow w-[70%] rounded-[15px]
      font-serif text-center">Nokanda</h1>
  </div> 
</div>