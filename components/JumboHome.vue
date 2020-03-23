<template>
<div class="bg-gray-50">
  <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
    <h2 class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
      Ready to dive in?
      <br />
      <span class="text-red-600">Start today!</span>
    </h2>
    <div class="mt-8 flex lg:flex-shrink-0 lg:mt-0">
      <div class="inline-flex rounded-md shadow">
        <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
          Get started
        </a>
      </div>
      <div class="ml-3 inline-flex rounded-md shadow">
         <button
      type="button"
      class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
      @click="showModal"
    >
      Contact Us
    </button>

    <modal
      v-show="isModalVisible"
      @close="closeModal"
    />
      </div>
    </div>
  </div>
</div>

</template>
<script>
  import Modal from './Modal.vue'

export default {
  components: {
    Modal,
  },

  
 data () {
   return {
     isModalVisible: false,
      };
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
    },
  };
</script>
