<template>
  <div>
    <!-- component -->
    <style type="text/css">
  .swiper {
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
  }
  .swiper > img {
    scroll-snap-align: start;
  }
    </style>
    <div class="flex flex-col items-center">
      <p class="lead font-thin text-3xl my-12">Featured Work</p>
      <div class="flex flex-col items-center">
        <div class="swiper flex overflow-x-scroll w-1/2">
          <img
            class="w-full h-1/2 object-cover bg-gray-300"
            src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/117405704_1950652081736995_4137212378642808387_o.jpg?_nc_cat=111&_nc_sid=a26aad&_nc_ohc=x8MHz5TDaI0AX_DXVNl&_nc_ht=scontent-dfw5-1.xx&oh=91f24fd993c38b6fe69b0d985f6fd966&oe=5F645C5E"
            id="slide1"
          >
          <img
            class="w-full h-1/2 object-cover bg-gray-300"
            src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/117385710_1950652128403657_2635219311154223485_o.jpg?_nc_cat=107&_nc_sid=a26aad&_nc_ohc=qoyS4KaxBXsAX9zvUsZ&_nc_ht=scontent-dfw5-2.xx&oh=cc151f26ba3c40e4a23f524f1cad5c1c&oe=5F657075"
            id="slide2"
          >
          <img
            class="w-full h-1/2 object-cover bg-gray-300"
            src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/117388758_1950652278403642_1238981664536182053_o.jpg?_nc_cat=109&_nc_sid=a26aad&_nc_ohc=f4YwIMrKDh8AX8A0e55&_nc_ht=scontent-dfw5-2.xx&oh=16e2706484c76f3c6aba1054f5ff9262&oe=5F63EC84"
            id="slide3"
          >
          <img
            class="w-full h-1/2 object-cover bg-gray-300"
            src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/109688870_1929822850486585_7681124171563947701_o.jpg?_nc_cat=102&_nc_sid=a26aad&_nc_ohc=CvldTPOf_YkAX-bQsyl&_nc_ht=scontent-dfw5-2.xx&oh=02b9ed1035feec0ec254377caf99a25f&oe=5F66F1B0"
            id="slide4"
          >
          <img
            class="w-full h-1/2 object-cover bg-gray-300"
            src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/103963039_1888260087976195_7535587706464352545_n.jpg?_nc_cat=106&_nc_sid=8bfeb9&_nc_ohc=_ZmKhbXhCEgAX-LgHOt&_nc_ht=scontent-dfw5-2.xx&oh=35acd17e5aef6a1eec9e2694923fd7c9&oe=5F679D65"
            id="slide5"
          >
          <img
            class="w-full h-1/2 object-cover bg-gray-300"
            src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/101550826_1880857105383160_8984505231664480256_o.jpg?_nc_cat=108&_nc_sid=a26aad&_nc_ohc=IMopdiNfeI4AX_DTOO8&_nc_ht=scontent-dfw5-2.xx&oh=afafbd002cec56e859332e7b2fde8d68&oe=5F65BBBE"
            id="slide6"
          >
          <img
            class="w-full h-1/2 object-cover bg-gray-300"
            src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/101550826_1880857105383160_8984505231664480256_o.jpg?_nc_cat=108&_nc_sid=a26aad&_nc_ohc=IMopdiNfeI4AX_DTOO8&_nc_ht=scontent-dfw5-2.xx&oh=afafbd002cec56e859332e7b2fde8d68&oe=5F65BBBE"
            id="slide7"
          >
        </div>
      </div>
      <div class="flex mt-4">
        <a href="#slide1" class="w-4 h-4 mx-1 bg-gray-400 rounded-full"></a>
        <a href="#slide2" class="w-4 h-4 mx-1 bg-gray-400 rounded-full"></a>
        <a href="#slide3" class="w-4 h-4 mx-1 bg-gray-400 rounded-full"></a>
        <a href="#slide4" class="w-4 h-4 mx-1 bg-gray-400 rounded-full"></a>
        <a href="#slide5" class="w-4 h-4 mx-1 bg-gray-400 rounded-full"></a>
        <a href="#slide6" class="w-4 h-4 mx-1 bg-gray-400 rounded-full"></a>
        <a href="#slide7" class="w-4 h-4 mx-1 bg-gray-400 rounded-full"></a>
      </div>
    </div>
  </div>
</template>
