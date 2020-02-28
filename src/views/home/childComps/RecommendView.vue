<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommendItem">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
     recommends: {
       type: Array,
       default() {
         return [];
       }
     }
  }
}
</script>

<style>
  .recommend {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 13px;
    margin: 10px 0 20px 0;
    padding: 0 0 15px 0;
    border-bottom: 10px solid #ffdde1;
  }
  .recommendItem {
    flex: 1
  }
  .recommendItem img {
    width: 65px;
    width: 65px;
  }
</style>