<template>
  <div>
    <div class="bg-cover bg-center pallet h-auto text-white py-24 px-10 object-fill">
      <div class="md:w-1/2">
        <p class="font-bold text-sm uppercase">{{this.title1}}</p>
        <p class="text-3xl font-bold">{{this.title2}}</p>
        <p class="text-2xl mb-10 leading-none">{{this.title3}}</p>
        <a
          href="#contact"
          class="bg-red-600 py-4 px-8 text-white shadow-md font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
        >Contact us</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pallet {
  background-image: url("https://images.pexels.com/photos/976906/pexels-photo-976906.jpeg?auto=compress&cs=tinysrgb&h=650&w=940");
}
</style>


<script>
export default {
  data() {
    return {
      title1: "How Can We Help?",
      title2: "Our Services",
      title3: "All interior and exterior painting.  New builds and repaints."
    };
  },
  head() {
    return {
      title1: this.title1,
      title2: this.title2,
      title3: this.title3,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "The Honest Painting Co offers excellent painting for Black Hills, South Dakota and the surrounding area. We specialize in interior and exterior painting, either commercial or domestic. You can be sure to get competitive painting prices done with excellence."
        }
      ]
    };
  }
};
</script>