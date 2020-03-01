<template>
  <div class="goods-item">
    <!-- 给img添加一个监听事件imageLoad 用来检测请求数据之后图片是否加载完成 -->
    <img :src="goodsItem.show.img" alt="" @load="imageLoad">
    <div class="second-item">
      <p>{{goodsItem.title}}</p>
      <span class="price">¥{{goodsItem.price}}</span>
      <span class="love">❤</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    imageLoad() {
      // 当加载完成之后 就会发射这个事件itemImageLoad
      this.$bus.$emit('itemImageLoad');
    }
  },
};
</script>

<style>
  .goods-item {
    width: 50%;
    flex-grow: .22;
  }
  .goods-item p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
  }
  .goods-item img {
    width: 100%;
    height: 281px;
  }
  .goods-item .second-item {
    text-align: center;
    font-size: 14px;
  }
  .second-item .price {
    color: #f64f59;
    margin-right: 14px;
  }
  .second-item .love {
    color: #f37335;
  }
  .second-item .collect {
    color: #1d4350;
    margin-left: 5px;
  }
</style>