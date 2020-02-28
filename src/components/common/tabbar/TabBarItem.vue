<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-a"></slot></div>
    <div :class="{active: isActive}">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String
  },
  methods: {
    itemClick() {
      if (this.$route.path != this.path)
      this.$router.replace(this.path)
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    }
  }
};
</script>

<style>
.isActive {
  display: none;
}

.active {
  color: red
}
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  background-color: #dadada;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 1px;
  vertical-align: middle;
}

</style>