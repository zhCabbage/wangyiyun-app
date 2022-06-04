<template>
  <div class="home">
    <top-nav-vue></top-nav-vue>
    <swiper-top-vue></swiper-top-vue>
    <icon-list-vue></icon-list-vue>
    <music-list-vue></music-list-vue>
  </div>
</template>

<script>
import TopNavVue from '@/components/home/TopNav.vue';
import SwiperTopVue from '@/components/home/SwiperTop.vue';
import IconListVue from '@/components/home/IconList.vue';
import MusicListVue from '@/components/home/MusicList.vue';
export default {
  name: "HomeView",
  components: {
    TopNavVue,SwiperTopVue,IconListVue,MusicListVue
  },
};
</script>
