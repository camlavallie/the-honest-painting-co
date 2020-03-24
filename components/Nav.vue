<template>
<div>
  <header class="bg-white sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
  <div class="flex items-center justify-between px-4 py-3 sm:p-0">
    <div class="w-32">
      <nuxt-link to="/">
      <img src="../assets/images/thehonestpaintingco.png" alt="">
      </nuxt-link>
    </div>
      <nuxt-link to="/">
    <div class="text-xl lg:text-4xl text-red-600 sm:p-0">The Honest Painter CO.</div>
    
      </nuxt-link>
    <div class="sm:hidden">
      <button @click="isOpen = !isOpen" type="button" class="text-gray-500 hover:text-red-600 focus:outline-none block">
        <svg class="w-6 h-6 w-4 fill-current" viewBox="0 0 24 24">
          <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>

          <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
        </svg>
      </button>
  </div>
    </div>
    <nav :class="isOpen ? 'block': 'hidden' " class="text-gray-200 px-2 pt-2 pb-4 sm:flex sm:p-0">
       <router-link to="/" class="block px-2 py-1 font-medium text-gray-500 hover:text-red-600 focus:outline-none focus:text-red-600 transition duration-150 ease-in-out">Home</router-link>
      <router-link to="/about" class="mt-1 block px-2 py-1 font-medium text-gray-500 hover:text-red-600 focus:outline-none focus:text-red-600 transition duration-150 ease-in-out sm:mt-0 sm:ml-2">About</router-link>
    </nav>



  </header>

</div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  }
}
</script>

<style scoped>

</style>
