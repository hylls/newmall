<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <div slot="left" class="title-left" @click="back">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div class="title-item"
        v-for="(item, index) in title"
        :class="{active: currentIndex === index}"
        @click="itemClick(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
export default {
  components: {
    NavBar
  },
  data() {
    return {
      title: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0,
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      // console.log(111);
      console.log(index);
    },
    back() {
      this.$router.back();
    }
  }
}
</script>

<style scoped>
  .title {
    display: flex;
    font-size: 13px;
  }
  .title-item {
    flex: 1;
    text-align: center;
    /* vertical-align: middle */
  }
  .active {
    color: red;
  }
  .title-left {
    margin-left: 25px
  }
  .title-left img{
    margin-top: 10px;
  }
</style>