<template>
  <div id="top-page">
    <Nav/>
      <div class="">
       <JumboHome/>
      </div>

      <div class="mt-12">
       <JumboHomeFour/>

      <div class="mt-16"></div>
     <div class="">
         <JumboHomeTwo/>
     </div>
      </div>
           <div class="sticky flex text-left bg-opacity-25 top-0 left-0 trasnparent-25">
      <JumboButton />
      </div>
      <div class="mt-12 mb-24">
       <JumboHomeThree/>
      </div>


     <div class="mt-12">
       <div class="text-center mb-24">
         <div>
       <h5 class="text-6xl leading-6 font-thin text-gray-300">Gallery</h5>
         </div>
       </div>
         <Carousel/>
     </div>
    
    <div>
      <Galla />
    </div>
  
     <div>
         <Footer />
     </div>
  </div>
</template>

<script>
import Nav from '~/components/Nav.vue'
import JumboHome from '~/components/JumboHome.vue'
import JumboButton from '~/components/JumboButton.vue'
import JumboHomeTwo from '~/components/JumboHomeTwo.vue'
import JumboHomeThree from '~/components/JumboHomeThree.vue'
import JumboHomeFour from '~/components/JumboHomeFour.vue'
import Carousel from '~/components/Carousel.vue'
import Footer from '~/components/Footer.vue'
import Galla from '~/components/Galla.vue'




  export default {


   head () {
      return {
        title: 'The Honest Painting Co.',
      meta: [
        { hid: 'description', name: 'description', content: 'Geelong affordable house painting. The Honest Painting Co offers excellent painting for Geelong and the surrounding area. We specialize in interior and exterior painting, either commercial or domestic. You can be sure to get competitive painting prices done with excellence. Geelong affordable house painting. The Honest Painting Co offers excellent painting for Geelong and the surrounding area. We specialize in interior and exterior painting, either commercial or domestic. You can be sure to get competitive painting prices done with excellence. Geelong affordable house painting, Geelong Victoria Australia. The Honest Painting Co. Affordable house painting, affordable painting, apartment painting, best home painting services, best painting contractors, best painting services, building exterior painting, building painting contractors, building painting services, commercial building painting, commercial exterior painting, commercial interior paint, commercial painting, commercial painting company, commercial painting contractors, commercial painting services, construction painting, contract painting services contractor painting, contractors for painting, exterior home painting, exterior house painting companies, exterior house painting contractors, exterior house painting services, exterior painting company, exterior painting contractor, exterior painting services, find painting contractors, handyman painting, home improvement painting, home interior painting, home outer painting, home painting, home painting companies, home painting contractor, home painting services, home painting services near me, home pros painting, house painters near me, house painting, house painting companies near me, house painting company.House painting contractors, house painting contractors near me, house painting quotes, house painting services, house wall painting, i need a house painter, indoor house painters, indoor painting services, industrial painting companies, industrial painting contractors, industrial painting services, inside house painters, interior & exterior painting, interior and exterior painting, interior and exterior painting services, interior exterior painting, interior exterior painting services, interior home painting, interior house painting contractors, interior house painting services, interior painters, interior painting company, interior painting contractors, interior painting contractors near me, interior painting service, interior room painting, internal house painting, local exterior painters, local house painters, local interior painters, local painting companies, local painting contractors, local painting service need my house painted, new home painting, new house painting, painters exterior, painters in my area, painting business, painting business near me, painting company, painting company services, painting contractor services, painting contractors in my area, painting contractors painters, painting interior exterior, painting services, painting services contractors, painting the exterior of your home, pro painting company, pro painting contractors, pro painting services, professional commercial painters, professional exterior painters, professional home painters, professional house painters, professional interior painters, professional painters, professional painting company, professional painting contractor, professional painting services, quality house painting, quality painting services, repaint house exterior, residential and commercial painting, residential exterior painting, residential house painters, residential house painting, residential interior painting, residential painting, residential painting company, residential painting contractor, residential painting contractors, residential painting services, room painting, room painting service, the house painters, the painting contractor, top painting contractors, wall painting contractor, wall painting services.' },
        { hid: 'keywords', name: 'keywords', content: 'Geelong affordable house painting. The Honest Painting Co offers excellent painting for Geelong and the surrounding area. We specialize in interior and exterior painting, either commercial or domestic. You can be sure to get competitive painting prices done with excellence. Geelong affordable house painting, Geelong Victoria Australia. The Honest Painting Co. Affordable house painting, affordable painting, apartment painting, best home painting services, best painting contractors, best painting services, building exterior painting, building painting contractors, building painting services, commercial building painting, commercial exterior painting, commercial interior paint, commercial painting, commercial painting company, commercial painting contractors, commercial painting services, construction painting, contract painting services contractor painting, contractors for painting, exterior home painting, exterior house painting companies, exterior house painting contractors, exterior house painting services, exterior painting company, exterior painting contractor, exterior painting services, find painting contractors, handyman painting, home improvement painting, home interior painting, home outer painting, home painting, home painting companies, home painting contractor, home painting services, home painting services near me, home pros painting, house painters near me, house painting, house painting companies near me, house painting company.House painting contractors, house painting contractors near me, house painting quotes, house painting services, house wall painting, i need a house painter, indoor house painters, indoor painting services, industrial painting companies, industrial painting contractors, industrial painting services, inside house painters, interior & exterior painting, interior and exterior painting, interior and exterior painting services, interior exterior painting, interior exterior painting services, interior home painting, interior house painting contractors, interior house painting services, interior painters, interior painting company, interior painting contractors, interior painting contractors near me, interior painting service, interior room painting, internal house painting, local exterior painters, local house painters, local interior painters, local painting companies, local painting contractors, local painting service need my house painted, new home painting, new house painting, painters exterior, painters in my area, painting business, painting business near me, painting company, painting company services, painting contractor services, painting contractors in my area, painting contractors painters, painting interior exterior, painting services, painting services contractors, painting the exterior of your home, pro painting company, pro painting contractors, pro painting services, professional commercial painters, professional exterior painters, professional home painters, professional house painters, professional interior painters, professional painters, professional painting company, professional painting contractor, professional painting services, quality house painting, quality painting services, repaint house exterior, residential and commercial painting, residential exterior painting, residential house painters, residential house painting, residential interior painting, residential painting, residential painting company, residential painting contractor, residential painting contractors, residential painting services, room painting, room painting service, the house painters, the painting contractor, top painting contractors, wall painting contractor, wall painting services.' },
        {name: 'google-site-verification', content: 'rLGhLaaIm4DjBdDzsKpMSP22d_LiO_uyAsZ85wV49Jg' },
      ]
    }
  },
  components: {
    Nav,
    JumboHome,
    JumboButton,
    JumboHomeTwo,
    JumboHomeThree,
    JumboHomeFour,
    Footer,
    Carousel,
    Galla,
 
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
