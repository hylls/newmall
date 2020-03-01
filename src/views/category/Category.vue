<template>
  <div class="wrraper">
    <ul class="content">
      <li>信息1</li>
      <li>信息2</li>
      <li>信息3</li>
      <li>信息4</li>
      <li>信息5</li>
      <li>信息6</li>
      <li>信息7</li>
      <li>信息8</li>
      <li>信息9</li>
      <li>信息10</li>
      <li>信息11</li>
      <li>信息12</li>
      <li>信息13</li>
      <li>信息14</li>
      <li>信息15</li>
      <li>信息16</li>
      <li>信息17</li>
      <li>信息18</li>
      <li>信息19</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息1</li>
      <li>信息2</li>
      <li>信息3</li>
      <li>信息4</li>
      <li>信息5</li>
      <li>信息6</li>
      <li>信息7</li>
      <li>信息8</li>
      <li>信息9</li>
      <li>信息10</li>
      <li>信息11</li>
      <li>信息12</li>
      <li>信息13</li>
      <li>信息14</li>
      <li>信息15</li>
      <li>信息16</li>
      <li>信息17</li>
      <li>信息18</li>
      <li>信息19</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息1</li>
      <li>信息2</li>
      <li>信息3</li>
      <li>信息4</li>
      <li>信息5</li>
      <li>信息6</li>
      <li>信息7</li>
      <li>信息8</li>
      <li>信息9</li>
      <li>信息10</li>
      <li>信息11</li>
      <li>信息12</li>
      <li>信息13</li>
      <li>信息14</li>
      <li>信息15</li>
      <li>信息16</li>
      <li>信息17</li>
      <li>信息18</li>
      <li>信息19</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息1</li>
      <li>信息2</li>
      <li>信息3</li>
      <li>信息4</li>
      <li>信息5</li>
      <li>信息6</li>
      <li>信息7</li>
      <li>信息8</li>
      <li>信息9</li>
      <li>信息10</li>
      <li>信息11</li>
      <li>信息12</li>
      <li>信息13</li>
      <li>信息14</li>
      <li>信息15</li>
      <li>信息16</li>
      <li>信息17</li>
      <li>信息18</li>
      <li>信息19</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息1</li>
      <li>信息2</li>
      <li>信息3</li>
      <li>信息4</li>
      <li>信息5</li>
      <li>信息6</li>
      <li>信息7</li>
      <li>信息8</li>
      <li>信息9</li>
      <li>信息10</li>
      <li>信息11</li>
      <li>信息12</li>
      <li>信息13</li>
      <li>信息14</li>
      <li>信息15</li>
      <li>信息16</li>
      <li>信息17</li>
      <li>信息18</li>
      <li>信息19</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息20</li>
      <li>信息1</li>
      <li>信息2</li>
      <li>信息3</li>
      <li>信息4</li>
      <li>信息5</li>
      <li>信息6</li>
      <li>信息7</li>
      <li>信息8</li>
      <li>信息9</li>
      <li>信息10</li>
      <li>信息11</li>
      <li>信息12</li>
      <li>信息13</li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Category",
  data() {
    return {
      scroll: null
    };
  },
  // created() {
  //   this.scroll = new BScroll(wr);
  // },
  mounted() {
    let wr = document.querySelector(".wrraper");
    this.scroll = new BScroll(wr, {
      probeType: 3,
      pullUpLoad: true,
    });
    this.scroll.on('scroll', (position) => {
      // console.log(position);
    })
    this.scroll.on('pullingUp', () => {
      console.log('上啦加载更多');
      
    })
  }
};
</script>

<style>
.wrraper {
  height: 300px;
  background-color: yellowgreen;
  overflow: hidden;
  /* overflow-y: scroll; */
}
</style>