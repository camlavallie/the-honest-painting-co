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
import Footer from '~/components/Footer.vue'



  export default {


   head () {
      return {
        title: 'The Honest Painting Co.',
      meta: [
        { hid: 'description', name: 'description', content: 'We specialize in both internal and external painting for residential and commercial needs. When we do the job, you can trust us to do it right.' },
        { hid: 'keywords', name: 'keywords', content: 'The Honest Painting Co, Painters Geelong, Painters victoria, Painters australia, commercial, residential, painting, apartments, office spaces, decks, porches, painter, houses, offices.' },
        {name: 'google-site-verification', content: 'rLGhLaaIm4DjBdDzsKpMSP22d_LiO_uyAsZ85wV49Jg' },
      ]
    }
  },
  components: {
    Nav,
    JumboHomeTwo,
    JumboHomeThree,
    JumboHome,
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
