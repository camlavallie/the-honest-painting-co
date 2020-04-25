<template>
  <div id="toppage">
    <Nav/>
      <div class="">
       <JumboHome/>
      </div>

      <div class="mt-12">
       <JumboHomeFour/>
      </div>

      <div class="mt-16"></div>
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
     <div class="m-12 justify-center text-center flex flex-wrap m-3">
         <div>
         <a href="#contact" class="inline-flex items-center px-5 py-3 mr-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-600 hover:bg-red-400 focus:outline-none focus:shadow-outline ">
        <img class="w-6 h-6 text-white m-1" src="../assets/images/arrowup.png" alt="">
        Contact Us!
        </a>
         </div>
        <div>
         <a href="#toppage" class="inline-flex items-center px-5 py-3 ml-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-600 hover:bg-red-400 focus:outline-none focus:shadow-outline ">
        <img class="w-6 h-6 text-white m-1" src="../assets/images/arrowup.png" alt="">
        </a>
        </div>
     </div>

     <div>
         <Footer />
     </div>
  </div>
</template>

<script>
import Nav from '~/components/Nav.vue'
import JumboHome from '~/components/JumboHome.vue'
import JumboHomeTwo from '~/components/JumboHomeTwo.vue'
import JumboHomeThree from '~/components/JumboHomeThree.vue'
import JumboHomeFour from '~/components/JumboHomeFour.vue'
import Carousel from '~/components/Carousel.vue'
import Footer from '~/components/Footer.vue'



  export default {


   head () {
      return {
        title: 'The Honest Painting Co.',
      meta: [
        { hid: 'description', name: 'description', content: 'The Honest Painting Co offers excellent painting for Geelong and the surrounding area. We specialize in interior and exterior painting, either commercial or domestic. You can be sure to get competitive painting prices done with excellence.' },
        { hid: 'keywords', name: 'keywords', content: 'The Honest Painting Co, Painters Geelong, Painters victoria, Painters australia, commercial, residential, painting, apartments, office spaces, decks, porches, painter, houses, offices.' },
        {name: 'google-site-verification', content: 'rLGhLaaIm4DjBdDzsKpMSP22d_LiO_uyAsZ85wV49Jg' },
      ]
    }
  },
  components: {
    Nav,
    JumboHome,
    JumboHomeTwo,
    JumboHomeThree,
    JumboHomeFour,
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
