<template>
  <div class="bi-title">
    <div class="bi-title-font-container">
      <font class="bi-title-font" :style="{fontSize:fontSize+'px',top:top+'%'}">{{text}}</font>
      <!-- <font class="bi-title-font" :style="{fontSize:fontSize+'px'}">{{text}}</font> -->
      <div style="display: inline-block">
        <i class="iconfont icon-gengduo" v-if="!ifIcon"></i>
        <div class="icon-wrapper">
          <i class="iconfont icon-duanxin" v-if="ifIcon"></i>
          <i class="iconfont icon-telephone" v-if="ifIcon"></i>
          <i class="iconfont icon-diannao" v-if="ifIcon"></i>
          <i class="iconfont icon-lingdang" v-if="ifIcon"></i>
        </div>
      </div>
    </div>
    <!-- <div class="bi-title-image"></div> -->
  </div>
</template>
<style lang="scss">
.bi-title {
  width: 100%;
  text-align: center;
  background: rgb(26, 33, 52);

  .bi-title-font-container {
    text-align: left;
    height: 5vh;
    margin-left: 16px;
    position: relative;
  }
  .bi-title-font {
    position: relative; /*脱离文档流*/
    top: 25%; /*偏移*/
    // font-family: "hanyi76";
    font-weight: bold;
    font-size: 16px;
    letter-spacing:1.5vh;
    background: linear-gradient(to right, #2cc9cd, #75e976);
    -webkit-background-clip: text;
    color: transparent;

    // text-shadow: 0.2rem 0rem 0.5rem #01f1fe, -0.2rem 0rem 0.5rem #01f1fe,
    //   0rem 0.2rem 0.5rem #01f1fe, 0rem -0.2rem 0.5rem #01f1fe;
    text-shadow: 0 0 1em #132d5b;
    display: inline-block;
    text-align: left;
  }

  .icon-gengduo {
    color: #fff;
    position: absolute;
    right: 16px;
    top: 25%;
  }
  .icon-wrapper {
    position: absolute;
    top: 15%;
    .icon-duanxin,
    .icon-telephone,
    .icon-diannao,
    .icon-lingdang {
      background-image: -webkit-linear-gradient(
        -45deg,
        #caff55 20%,
        #45cd00 60%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      // color: #585655;
      font-size: 3vh;
      margin-left: 3.5vh;
      position: relative;
      top: 20%;
    }
  }
}
</style>


<script>
export default {
  props: ["text", "fontSize", "ifIcon","top"],
  mounted() {},
  methods: {},
};
</script>


