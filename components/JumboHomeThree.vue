<template>
  <div class="py-12 bg-gray-100 justify-betweem">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mt-10">
        <ul class="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
          <li>
            <div class="flex">
              <div class="flex-shrink-0">
                <div
                  class="flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white"
                >
                  <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h5 class="text-lg leading-6 font-medium text-gray-900">Competitive rates</h5>
                <p class="mt-2 text-base leading-6 text-gray-600">{{this.title1}}</p>
              </div>
            </div>
          </li>
          <li class="mt-10 md:mt-0">
            <div class="flex">
              <div class="flex-shrink-0">
                <div
                  class="flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white"
                >
                  <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h5 class="text-lg leading-6 font-medium text-gray-900">Free Quotes</h5>
                <p class="mt-2 text-base leading-6 text-gray-600">{{this.title2}}</p>
              </div>
            </div>
          </li>
          <li class="mt-10 md:mt-0">
            <div class="flex">
              <div class="flex-shrink-0">
                <div
                  class="flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white"
                >
                  <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h5 class="text-lg leading-6 font-medium text-gray-900">You are important to us</h5>
                <p class="mt-2 text-base leading-6 text-gray-600">{{this.title3}}</p>
              </div>
            </div>
          </li>
          <li class="mt-10 md:mt-0">
            <div class="flex">
              <div class="flex-shrink-0">
                <div
                  class="flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white"
                >
                  <img class="w-6 h-6 text-white" src="../assets/images/phone.png" alt>
                </div>
              </div>
              <div class="ml-4">
                <h5 class="text-lg leading-6 font-medium text-gray-900">Contact Us Today</h5>
                <a href="tel:+16054401515">
                  <p
                    class="mt-2 text-base leading-6 hover:text-blue-500 text-gray-600"
                  >{{this.title4}}</p>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>





<script>
export default {
  data() {
    return {
      title1:
        " The Honest Painting Co strives to offer painting services at a competitive price for Black Hills, South Dakota and the surrounding area.",
      title2: "Call or message us today for your FREE quote.",
      title3: "You can expect excellence in everything we do.",
      title4: "1 (605) 440-1515"
    };
  },
  head() {
    return {
      title1: this.title1,
      title2: this.title2,
      title3: this.title3,
      title3: this.title4,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "The Honest Painting Co strives to offer painting services at a competitive price for Black Hills, South Dakota and the surrounding area."
        }
      ]
    };
  }
};
</script>
