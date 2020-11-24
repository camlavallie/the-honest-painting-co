<template>
  <header
    id="top-page"
    class="blue-bg sm:flex items-center sm:justify-between md:items-center lg:items-center sm:items-center sm:px-4 sm:py-3"
  >
    <div class="flex items-center justify-between px-4 py-3 sm:p-0">
      <div>
        <nuxt-link to="/" class="hover:no-underline">
          <div class="flex items-center">
            <div class="lg:w-48 md:w-32 w-24">
              <img src="../assets/images/thehonestpaintingco.png" alt>
            </div>

            <div class="tracking-tight">
              <span
                class="text-1xl tracking-tight lg:text-5xl md:text-3xl font-bold text-black"
              >The Honest</span>
              <span class="text-1xl lg:text-5xl tracking-tight md:text-3xl text-black">Painting Co.</span>
            </div>
          </div>
        </nuxt-link>
      </div>
      <div class="sm:hidden">
        <button
          @click="isOpen = !isOpen"
          type="button"
          class="block text-gray-500 hover:text-black hover:font-semibold focus:text-black focus:outline-none"
        >
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              v-if="isOpen"
              fill-rule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            ></path>
            <path
              v-if="!isOpen"
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <nav @click="isOpen = !isOpen" :class="isOpen ? 'block' : 'hidden'" class="sm:block">
      <div
        class="sm:flex items-center sm:justify-between md:items-center lg:items-center sm:items-center sm:px-4 sm:py-3"
      >
        <nuxt-link
          to="/#residential"
          class="mt-1 block px-2 py-1 text-black font-thin rounded hover:font-bold sm:mt-0 sm:ml-2 hover:no-underline hover:text-red-600"
        >Residential</nuxt-link>

        <nuxt-link
          to="/#commercial"
          class="mt-1 block px-2 py-1 hover:no-underline text-black font-thin rounded hover:font-bold sm:mt-0 sm:ml-2 hover:text-red-600"
        >Commercial</nuxt-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      isOpen: false
    };
  }
};
</script>