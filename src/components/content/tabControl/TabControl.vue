<template>
  <div class="tab-control" >
    <div v-for="(item,index) in titles" 
    class="tab-control-item" 
    :class="{active:currentIndex === index}"
    @click="itemClick(index)">
      <span :class="{spanActive:currentIndex === index}">{{item,index}}</span>
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
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick', index)
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
  .active {
    color: red;
  }
  .spanActive {
    border-bottom: 3px solid red;
  }
</style>