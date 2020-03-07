<template>
<!-- ref不仅在父组件传给子组件可以用, 也可以操作DOM,拿到这个标签 -->
  <div class="wrapper" ref="wrapper">  
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      scroll: null, // 初始化scroll属性
    }
  },
  mounted() {
    let wr = this.$refs.wrapper;
    this.scroll = new BScroll(wr, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true,
    });
    // 监听滚动事件
    this.scroll.on("scroll", position => {
      // console.log(position);
      this.$emit('scroll', position)
    });
    // 监听上拉加载时间
    this.scroll.on("pullingUp", ()=> {
      this.$emit("pullingUp");
      console.log('监听滚到底部');
      
    })
    this.scroll.refresh(); // 等图片加载完之后 更新可滚动距离
  },
  methods: {
    // 给scroll对象加一个scrollTo的方法 => 往上拉 
    scrollTo(x, y ,time) {
      this.scroll && this.scroll.scrollTo(x, y, time = 500);
    },
    // finishPullUp确保下次往上拉还能用 完成上拉加载更多
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    // 重新计算可滚动距离
    refresh() {
      console.log('重新计算距离-refresh');
      this.scroll.refresh();
    },
    // 当用户离开页面时 获取当前的scroll.y的值
    getSaveY() {
      return this.scroll ? this.scroll.y : 0;
    }
  }
};
</script>

<style scoped>
  /* .wrraper {
    height: 150px;
    overflow: hidden;
  } */
</style>