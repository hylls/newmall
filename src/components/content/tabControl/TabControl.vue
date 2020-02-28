<template>
  <div class="tab-control" >
    <div v-for="item in titles" class="tab-control-item">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style>
  .tab-control {
    display: flex;
    background-color: #ffeeee;
    height: 45px;
  }
  .tab-control-item {
    flex: 1;
    text-align: center;
    line-height: 45px;
  }
</style>