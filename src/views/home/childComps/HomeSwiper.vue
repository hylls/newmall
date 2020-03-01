<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt @load="imageLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index.js";
export default {
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    },
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      banner: this.banners,
      recommend: this.recommends,
      isLoad: false,
    }
  },
  methods: {
    imageLoad() {
      if (!this.isLoad) {
        this.$emit('swiperImageLoad');
        this.isLoad = true;
      }
    }
  }
};
</script>

<style>
</style>