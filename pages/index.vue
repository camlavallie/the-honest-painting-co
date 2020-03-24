<template>
  <div>
    <Nav/>
     <div class="m-12">
         <JumboHomeTwo/>
     </div>
      <div class="m-12">
       <JumboHome/>
      </div>
  </div>
</template>

<script>
import Nav from '~/components/Nav.vue'
import JumboHome from '~/components/JumboHome.vue'
import JumboHomeTwo from '~/components/JumboHomeTwo.vue'


export default {
  components: {
    Nav,
    JumboHomeTwo,
    JumboHome,
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
