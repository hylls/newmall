<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
// Home的子组件
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from './childComps/HomeSwiper';
import RecommendView from './childComps/RecommendView';

// 请求网络数据
import {getHomeMultidata} from 'network/home';
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  created() {
    getHomeMultidata()
      .then(res => {
        this.banners = res.data.data.banners.list;
        this.recommends = res.data.data.recommends.list;
        console.log(this.banners);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style>
  .home-nav {
    background: linear-gradient(to right, #d9a7c7, #fffcdc);
  }
</style>