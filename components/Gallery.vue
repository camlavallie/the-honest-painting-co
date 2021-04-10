<template>
  <div>
    <div class="row justify-content-center mt-6">
      <div v-for="image in images" :key="image.id">
        <div class="flex flex-wrap m-3">
          <a :href="image.pic" data-toggle="lightbox" data-gallery="example-gallery" class="w-64">
            <img :src="image.pic" class="img-fluid">
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
            "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.6435-9/118651925_1973498056119064_4810311052788742905_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=a26aad&_nc_ohc=qn4i46sTzssAX8X5Ego&_nc_ht=scontent-dfw5-2.xx&oh=90f7dbaeb96a1bc17e6c6638861ccb0f&oe=6095EFC0"
        },
        {
          id: 2,
          pic:
            "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.6435-9/118646843_1973498062785730_1041105515949400711_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=a26aad&_nc_ohc=sEzLv6vYK9kAX--EEGa&_nc_ht=scontent-dfw5-2.xx&oh=9b271a399b3b262bb8ae51e74000241a&oe=60991EEA"
        },
        {
          id: 3,
          pic:
            "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.6435-9/118806943_1973498039452399_6394270211711066960_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=a26aad&_nc_ohc=5fYeFdHhaPQAX9sIzga&_nc_ht=scontent-dfw5-1.xx&oh=bac0705d418268c2e49eafbe3601f011&oe=6096CBB6"
        },
        {
          id: 4,
          pic:
            "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.6435-9/118767948_1973498059452397_2797388340226155625_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=a26aad&_nc_ohc=wyRCJiFfIx8AX-nBEIx&_nc_ht=scontent-dfw5-2.xx&oh=f64d9ec9213820709ba0f4f25725bcfa&oe=609961B9"
        },
        {
          id: 5,
          pic:
            "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.6435-9/118714776_1973498046119065_703304349660899936_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=a26aad&_nc_ohc=DX-psDFxgUwAX8-U6MZ&_nc_ht=scontent-dfw5-2.xx&oh=ceacee1a1ba8705e748147521e7d69f6&oe=60984B0C"
        },
        {
          id: 6,
          pic:
            "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.6435-9/118770895_1973498052785731_472049589621437752_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=a26aad&_nc_ohc=C_PXOl6M3XwAX-67cgV&_nc_ht=scontent-dfw5-2.xx&oh=b50d03421a5db331485817591b91e735&oe=6096A03E"
        },
        {
          id: 7,
          pic:
            "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.6435-9/118681824_1973498066119063_8261143921177332165_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=a26aad&_nc_ohc=6hkYnvJsApkAX_EttGx&_nc_ht=scontent-dfw5-1.xx&oh=e40c8034b10620c28c9bd5450b8adb46&oe=6098F61A"
        },
        {
          id: 8,
          pic:
            "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.6435-9/118737273_1973498042785732_7367348586141259925_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=a26aad&_nc_ohc=rHAjacGdAjUAX8HbfZk&_nc_ht=scontent-dfw5-1.xx&oh=a89f04607c889f7d02f8b9ff28f7e5cf&oe=60961E00"
        },
        {
          id: 9,
          pic:
            "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.6435-9/118635657_1973498069452396_923816015356054311_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=a26aad&_nc_ohc=dkyVGa4rqV4AX8RZDzN&_nc_ht=scontent-dfw5-2.xx&oh=e9b2b5f6557eac63f44f49a4a49e01d7&oe=60995D19"
        },
        {
          id: 10,
          pic:
            "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.6435-9/118678922_1973498049452398_5918075542498414205_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=a26aad&_nc_ohc=EH5gUl9pJrIAX-aRi8u&_nc_ht=scontent-dfw5-2.xx&oh=20a98aca4cb5445fb0e6214f8c8e15a2&oe=6095CEEC"
        }
      ]
    };
  }
};
</script>
