<template>
  <el-header class="app-top">
    <div class="header">
      <div :class="currentHeader">
        <div class="header-left">{{'华为园区智能运营中心'}}</div>
        <div class="headerRight">
          <div class="right-menu-item">AOI&nbsp;&nbsp; {{21}}</div>|
          <div class="right-menu-item">
            <span class="iconfont icon-qing"></span>
            &nbsp;&nbsp;{{'晴'}}&nbsp;&nbsp;
            <span class="iconfont icon-wendu"></span>
            &nbsp;&nbsp;{{31}}℃&nbsp;&nbsp;
          </div>|
          <div class="right-menu-item">
            <span class="iconfont icon-pm25ganyingqibeifen"></span>
            &nbsp;&nbsp;{{'11'}}&nbsp;&nbsp;
            <span
              class="iconfont icon-fengliyucefangan"
            ></span>
            &nbsp;&nbsp;{{'西北风一级'}}℃&nbsp;&nbsp; |
          </div>
          <div class="right-menu-item">UV&nbsp;&nbsp; {{6}}</div>|
          <div class="right-menu-item">{{'20200807'}}&nbsp;&nbsp; {{'21:23:32'}}</div>|
          <div class="right-menu-item">{{'坂田区'}}</div>|
          <div class="right-menu-item">
            <span>{{'中文'}}</span>&nbsp;&nbsp;
            <span>{{'英文'}}</span>
          </div>|
          <div class="right-menu-item">
            <span class="iconfont icon-daohang"></span>
          </div>|
          <div class="right-menu-item">
            <span class="iconfont icon-shezhi"></span>
          </div>
        </div>
      </div>
    </div>
  </el-header>
</template>

<script>
import Vue from "vue";
import Util from "@/libs/Util";
export default {
  data() {
    return {
      currentHeader: "headerMain",
    };
  },
  mounted() {
    this.currentHeader = Util.localSession.get("currentPage", "headerMain");
  },
  methods: {
    getMemberRight() {
      this.$router.push("/memberRight");
      Util.localSession.save("currentPage", "headerMemberRight");
      this.currentHeader = "headerMemberRight";
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100%;
  color: #fff;
  .headerMain {
    height: 4vh;
    padding: 1vh;
    // 左侧头部菜单栏
    .header-left {
      height: 21px;
      float: left;
    }
    // 右侧头部菜单栏
    .headerRight {
      height: 21px;
      float: right;
      .right-menu-item {
        display: inline-block;
        padding: 0 8px;
      }
    }
  }
}
.icon-qing,
.icon-shidu,
.icon-wendu,
.icon-fengliyucefangan,
.icon-pm25ganyingqibeifen,
.icon-daohang,
.icon-shezhi {
  color: #fff;
}
.el-header {
  background-color: rgb(26, 33, 52);
  height:5vh!important;
}
</style>
