<template>
  <div>
    <div class="row justify-content-center mt-12 p-3">
      <div v-for="image in images" :key="image.id">
        <div class="flex flex-wrap m-3">
          <a :href="image.pic" data-toggle="lightbox" data-gallery="example-gallery" class="w-64">
            <img :src="image.pic" class="img-fluid" alt="The Honest Painting Co Commercial Paining">
          </a>
        </div>
        
      </div>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      images: [
        {
          id: 1,
          pic:
            require("~/assets/commercial/c1.jpg")
        },
        {
          id: 2,
          pic:
           require("~/assets/commercial/c2.jpg")
        },
        {
          id: 3,
          pic:
            require("~/assets/commercial/c3.jpg")
        },
        {
          id: 4,
          pic:
            require("~/assets/commercial/c4.jpg")
        },
        {
          id: 5,
          pic:
           require("~/assets/commercial/c5.jpg")
        },
        {
          id: 6,
          pic:
            require("~/assets/commercial/c6.jpg")
        },
        {
          id: 7,
          pic:
            require("~/assets/commercial/c7.jpg")
        },
        {
          id: 8,
          pic:
            require("~/assets/commercial/c8.jpg")
        },
        {
          id: 9,
          pic:
            require("~/assets/commercial/c9.jpg")
        },
        {
          id: 10,
          pic:
           require("~/assets/commercial/c10.jpg")
        }
      ]
    };
  }
};
</script>
