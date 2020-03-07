<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <scroll class="content">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo"></detail-goods-info>
      <detail-param-info :paramInfo="paramInfo"></detail-param-info>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";

import Scroll from "components/common/scroll/Scroll";

import { getDetail, Goods, Shop } from "network/detail";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    Scroll,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
    };
  },
  created() {
    // 1. 保存存入的iid
    this.iid = this.$route.params.iid;
    // 2. 根据iid请求详情数据
    getDetail(this.iid)
      .then(res => {
        const data = res.data.result;
        console.log(data);
        this.topImages = data.itemInfo.topImages;
        // console.log(this.topImages);
        // 3. 获取商品信息
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        // console.log(this.goods);
        // 4. 创建店铺信息的对象
        this.shop = new Shop(data.shopInfo);
        // 5. 保存商品详细数据
        this.detailInfo = data.detailInfo;
        // 6. 获取参数的信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);
        console.log(this.paramInfo);
        
      })
      .catch(err => {});
      console.log(this.data);
  }
};
</script>

<style scoped>
  .detail {
    height: 100vh;
  }
  .detail-nav {
    position: relative;
    z-index: 999;
    background-color: #fff;
  }
  .content {
    height: calc(100% - 44px);
  }
</style>