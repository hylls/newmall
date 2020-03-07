<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl"
      class="tabcontrol" v-show="isTabFixed">
      </tab-control>
    <scroll class="wrapper" 
    ref="scroll"
    :probe-type="3"
    :pull-up-load="true"
    @scroll="scrollTop"
    @pullingUp="pullingUp">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl"
      >
      </tab-control>
      <goods :goods="showGoods"></goods>
    </scroll>
    <back-top @click.native="topClick" v-show="this.isBackTop"></back-top>
  </div>
</template>

<script>
// Home的子组件
import HomeSwiper from "./childComps/HomeSwiper"; // 轮播图
import RecommendView from "./childComps/RecommendView"; // 轮播图
import FeatureView from "./childComps/FeatureView"; // 本周流行

import NavBar from "components/common/navbar/NavBar"; // 底下的导航栏
import TabControl from "components/content/tabControl/TabControl"; // 中间的流行/新款/精选
import Goods from "components/content/goods/Goods"; //展示商品的照片以及标题价格和收藏
import Scroll from "components/common/scroll/Scroll"; // 滚动组件
import BackTop from "components/content/backTop/BackTop" // 返回顶部的按钮

// 请求网络数据
import { getHomeMultidata, getHomeGoods } from "network/home";

// BScroll插件 滚动
export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    Goods,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [], //轮播图的数据
      recommends: [], //本周流行数据
      goods: { // 展示商品的数据
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop", // 决定要往网络请求pop, new, sell的类型,默认是pop
      scroll: null, // 滚动对象初始化
      isBackTop: false, //一开始让backTop消失, 等到下滑一定长度再出现
      tabControlOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
    };
  },
  created() {
    // 1. 请求轮播图数据
    this.getHomeMultidata();
    // 2. 请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
    // this.$refs.scroll.scroll.refresh();
  },
  mounted() {
    // const refresh = this.debounce(this.$refs.scroll.scroll.refresh, 500)
    // // 3. 监听item中图片加载完成
    const refresh = this.debounce(this.$refs.scroll.refresh, 500)
    this.$bus.$on('itemImageLoad', () => {
      // 创造完组件之后就立马更新可滚动距离
      refresh();
    })
  },
  destroyed() {
    console.log('销毁');
  },
  activated() {
    // 当活跃时 立马调用此方法
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() { // 不活跃时 把scroll.y的值赋值给saveY 此为调用scroll组件里面的getSaveY方法
    this.saveY = this.$refs.scroll.getSaveY();
  },
  computed: {
    // 把请求的数据给Goods组件
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  methods: {
    /**
     * 事件监听相关方法
     */
    // 防抖动封装函数 第一个参数函数, 第二个延迟时间
    debounce(func, delay) {
      let timer = null;
      return function(...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args)
        }, delay)
      }
    },
    tabClick(index) { // 监听传过来的index,然后判断currentType的属性
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      console.log(this.currentType);
      this.getHomeGoods(this.currentType);
    },
    topClick() { // 访问Scroll组件中的scrollTo方法
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    scrollTop(position) { // 监听什么时候滚动距离,什么时候出现backTop
      // console.log(position.y); // 监听滚动的y距离
      this.isBackTop = position.y <= -1000 ? true : false;
      // console.log(this.isBackTop);
      if (position.y < -this.tabControlOffsetTop.offsetTop) {
        this.isTabFixed = true ;
      } else {
        this.isTabFixed = false;
      }
      // console.log(this.isTabFixed);
      
    },
    pullingUp() {
      this.getHomeGoods(this.currentType);
    },
    swiperImageLoad() {
    // 获取tabControl的offsetTop
    // 所有的组件都有一个$el: 用于获取组件中的元素
      this.tabControlOffsetTop = this.$refs.tabControl.$el;
      console.log(this.tabControlOffsetTop.offsetTop);
    },

    /**
     * 网络请求相关
     */
    getHomeMultidata() {
      getHomeMultidata()
        .then(res => {
          this.banners = res.data.data.banner.list;
          this.recommends = res.data.data.recommend.list;
          // console.log(this.banners[0]);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page)
        .then(res => {
          this.goods[type].list.push(...res.data.data.list);
          // console.log(res);
          this.goods[type].page += 1;
          this.$refs.scroll.finishPullUp(); //完成上拉加载更多
        })
        .catch(err => {});
    }
  },
};
</script>

<style scoped>
/* #home {
  padding-top: 44px;
} */
.home-nav {
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999; */
  background: linear-gradient(to right, #d9a7c7, #fffcdc);
}
.tabcontrol {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  z-index: 9999;
}
.wrapper {
  height: 574px;
  overflow: hidden;
}
</style>