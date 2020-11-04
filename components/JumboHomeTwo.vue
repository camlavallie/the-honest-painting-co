
<template>
  <div class="relative bg-white overflow-hidden">
    <div class="max-w-screen-xl mx-auto">
      <div
        class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
      >
        <div class="pt-6 px-4 sm:px-6 lg:px-8">
          <!-- leave this for the time -->
        </div>

        <div
          class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
          id="contact"
        >
          <div class="sm:text-center lg:text-left">
            <h2
              class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-5xl"
            >
              In need of great painters in Black Hills, South Dakota?
              <br class="xl:hidden">
              <span class="text-red-600">Contact us today!</span>
            </h2>
            <div class="sm:text-left mt-12 lg:w-11/12">
              <ContactForm/>
            </div>
          </div>
        </div>
        <svg
          class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="50,0 100,0 50,100 0,100"></polygon>
        </svg>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        src="https://images.pexels.com/photos/6368/art-wall-brush-painting.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        alt
      >
    </div>
  </div>
</template>

<script>
import ContactForm from "./ContactForm.vue";
export default {
  components: {
    ContactForm
  }
};
</script>
