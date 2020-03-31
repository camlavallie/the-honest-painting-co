<template>
  <div>
    <Nav/>
      <div class="">
       <JumboHome/>
      </div>

      <div class="mt-12"></div>
     <div class="">
         <JumboHomeTwo/>
     </div>
      <div class="mt-12 mb-24">
       <JumboHomeThree/>
      </div>
     <div class="mt-12">
       <div class="text-center mb-24">
         <div>
       <h5 class="text-6xl leading-6 font-medium text-gray-300">Gallery</h5>
         </div>
       </div>
         <Carousel/>
     </div>
      <div class="mt-12 mb-24">
       <InstaFeed />
      </div>
     <div class="">
         <Footer />
     </div>
  </div>
</template>

<script>
import Nav from '~/components/Nav.vue'
import JumboHome from '~/components/JumboHome.vue'
import JumboHomeTwo from '~/components/JumboHomeTwo.vue'
import JumboHomeThree from '~/components/JumboHomeThree.vue'
import Carousel from '~/components/Carousel.vue'
// import InstaFeed from '~/components/InstaFeed.vue'
import Footer from '~/components/Footer.vue'


export default {
  components: {
    Nav,
    JumboHomeTwo,
    JumboHomeThree,
    JumboHome,
    // InstaFeed,
    Footer,
    Carousel,
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
