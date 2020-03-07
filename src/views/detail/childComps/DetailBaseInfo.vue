<template>
  <div class="detail-base-info" v-show="Object.keys(goods).length != 0">
    <div class="title">{{goods.title}}</div>
    <div class="price">
      <span class="price-new">{{goods.newPrice}}</span>
      <span class="price-old">{{goods.oldPrice}}</span>
    </div>
    <div class="column" v-if="goods.services">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="line"></div>
    <div class="service">
      <span v-for="item in goods.services">
        <img :src="item.icon" alt="" class="service-img">
        <span>{{item.name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
    }
  }
}
</script>

<style scoped>
  .detail-base-info {
    margin-top: 10px;
  }
  .title {
    font-size: 17px;
  }
  .price {
    margin-top: 10px;
  }
  .price-new {
    font-size: 22px;
    color: red
  }
  .price-old {
    margin-left: 3px;
    font-size: 15px;
    color: #999
  }
  .column {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    color: #999
    /* align-items: center; */
  }
  .line {
    width: 100%;
    background-color: #333333;
  }
  .service {
    margin-top: 10px;
    display: flex;
    justify-content: space-evenly;
    font-size: 12px;
  }
  .service-img {
    width: 14px;
  }
</style>