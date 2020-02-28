<template>
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="~assets/img/tabbar/home.png" alt />
        <img slot="item-icon-a" src="~assets/img/tabbar/home_a.png" alt />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="~assets/img/tabbar/category.png" alt />
        <img slot="item-icon-a" src="~assets/img/tabbar/category_a.png" alt />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart">
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.png" alt />
        <img slot="item-icon-a" src="~assets/img/tabbar/shopcart_a.png" alt />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="~assets/img/tabbar/profile.png" alt />
        <img slot="item-icon-a" src="~assets/img/tabbar/profile_a.png" alt />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from './tabbar/TabBar'
import TabBarItem from './tabbar/TabBarItem'
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style>

</style>