<template>
  <div class="flex justify-center m-3">
    <!-- component -->
    <div class="my-20">
      <div class="max-w-md rounded-sm p-2 border border-gray-200 bg-white shadow-lg">
        <div class="text-right p-4">
          <span class="text-xs text-gray-500 tracking-widest uppercase">The Honest Painting Co</span>
        </div>

        <div class="flex items-center relative mb-10">
          <div class="border-t border-gray-200 z-20 w-full"></div>

          <div class="rounded-full z-30 p-2 inline-block absolute mx-8">
            <!-- <img class="w-12 h-12" src="../../assets/images/thanks.jpg" alt> -->
          </div>
        </div>
        <div class="px-8 pb-4">
          <h2 class="text-gray-800 text-xl font-bold">Thanks for contacting us!</h2>
          <p class="text-gray-600 text-xs mb-2">We will be in touch with you soon!</p>
          <nuxt-link
            to="/"
            class="bg-red-600 py-2 px-2 text-white font-bold uppercase text-xs rounded hover:bg-gray-300 hover:text-gray-800"
          >Back Home</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
