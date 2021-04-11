<template>

   <div>
<!-- component -->
  <div class="flex flex-wrap justify-center">
<div v-for="card in cards" :key="card.id">
    <div class=" p-4 max-w-sm m-3 ">
        <div class="bg-white shadow-2xl rounded-lg mb-6 tracking-wide " >
            <div class="md:flex-shrink-0 ">
                <img :src="card.pic" alt="The Honest Painting Co Residential Painting" class="w-full h-64 rounded-lg rounded-b-none">
            </div>
            <div class="px-4 py-2 mt-2">
                <p class="font-bold text-lg text-gray-800 tracking-normal">{{card.header}}</p>
                    <p class="text-sm text-gray-700 px-2 mr-1">
                        {{card.info}}
                    </p>
                   
              
            </div>
        </div>
    </div>
    </div>
  </div>
</div>


</template>




<script>
export default {
  data() {
    return {
      cards: [
        {id:1, pic: require("~/assets/images/house5.jpg"), header:'Need a Painter?', info:'Contact us today for all your painting needs!'},
        {id:2, pic: require("~/assets/images/house2.jpg"), header:'Now in Black Hills, South Dakota', info:'Need some fresh paint to make that kitchen pop?'},
        {id:3, pic: require("~/assets/images/house4.jpg"), header:'The Honest Painting Co', info:'Here for the Black Hills and surrounding areas.'},
        {id:4, pic: require("~/assets/images/res1.jpg"), header:'Servicing The Black Hills', info:'Painting done with excellence!'},
        {id:5, pic: require("~/assets/images/res2.jpg"), header:'Residential Painters?', info:'YOU can trust The Honest Painting Co'},
        {id:6, pic: require("~/assets/images/reddoor2.jpg"), header:'Whatever Your Painting Needs...', info:'We\'ve got YOU covered'},
      ]
    }
  },
  head() {
    return {
      title: "The Honest Painting Co.",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Black Hills, South Dakota. The Honest Painting Co offers excellent painting for Black Hills and the surrounding area. We specialise in interior and exterior painting, either commercial or domestic. You can be sure to get competitive painting prices done with excellence."
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Black Hills, South Dakota. The Honest Painting Co, Painters Black Hills, Painters Black Hills, commercial, residential, painting, apartments, office spaces, decks, porches, painter, houses, offices."
        },
        {
          name: "google-site-verification",
          content: "rLGhLaaIm4DjBdDzsKpMSP22d_LiO_uyAsZ85wV49Jg"
        }
      ],
    };
  }
};
</script>
