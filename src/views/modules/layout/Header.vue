<template>
  <el-header class="app-top">
    <div class="header">
      <div :class="currentHeader">
        <div class="header-container">
          <div class="search-wrapper">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
            <el-button type="text" v-on:click.native="searchPOI()">搜索</el-button>
          </div>
          <div class="date-wrapper">
            <div id="show-date"></div>
            <div id="show-day"></div>
            <div id="show-time"></div>
            <div id="weather"></div>
            <div id="temperature">20</div>
          </div>
        </div>
      </div>
    </div>
  </el-header>
</template>

<script>
var t = null;
import Vue from "vue";
import Util from "@/libs/Util";
export default {
  data() {
    return {
      currentHeader: "headerMain",
      input: "",
    };
  },
  mounted() {
    this.currentHeader = Util.localSession.get("currentPage", "headerMain");
    var that = this;
    t = setTimeout(that.time, 1000); //開始运行
  },
  methods: {
    searchPOI() {
      console.log(this.$parent);
      //调用父组件的方法
      this.$parent.searchPOI();
      console.log(this.input);
      let data = {
        input: this.input,
      };
      this.$emit("func", data);
    },
    getMemberRight() {
      this.$router.push("/memberRight");
      Util.localSession.save("currentPage", "headerMemberRight");
      this.currentHeader = "headerMemberRight";
    },
    time() {
      clearTimeout(t); //清除定时器
      var dt = new Date();
      var y = dt.getFullYear();
      var mt = dt.getMonth() + 1;
      var day = dt.getDate();
      var h = dt.getHours(); //获取时
      var m = dt.getMinutes(); //获取分
      var s = dt.getSeconds(); //获取秒
      var realDay = dt.getDay();
      var weeks = new Array(
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六"
      );
      var week = weeks[realDay];
      document.getElementById("show-date").innerHTML =
        y + "年" + mt + "月" + day + "日";
      document.getElementById("show-time").innerHTML =
        h + "时" + m + "分" + s + "秒";
      document.getElementById("show-day").innerHTML = week;
      let that = this;
      t = setTimeout(that.time, 1000); //设定定时器，循环运行
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100%;
  .headerMain {
    background-image: url("../../../assets/image/header.png");
    // background-position: 100% 100%;
    background-size: 100% 100%;
    // margin-top: 1.5vh;
    height: 100%;
    // display: flex;
    // justify-content: space-between;
    .header-container {
      height: 100%;
      position: relative;
      .search-wrapper {
        float: left;
        width: 10%;
        position: absolute;
        bottom: 0.5vh;
        left: 2%;
        .el-input {
          width: 76%;
          display: inline-block;
          color: #fff;
        }
        .el-button {
          color: #fff;
          margin-left: 5%;
        }
      }
      .date-wrapper {
        float: right;
        width: 10%;
        position: absolute;
        bottom: 0.5vh;
        right: 1%;
        #show-date,
        #show-day {
          background: linear-gradient(
            0deg,
            rgba(255, 255, 255, 1) 0%,
            rgba(0, 0, 0, 0.5) 50%,
            rgba(255, 255, 255, 1) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        #show-time,
        #temperature {
          font-family: Impact;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.7) 0%,
            rgba(0, 0, 0, 0) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        #show-day,
        #show-time,
        #temperature,
        .weather {
          margin-left: 0.5vh;
        }
        div {
          display: inline-block;
        }
      }
    }
  }
}
</style>
<style>
.el-input__inner {
  background-color: transparent;
  border-radius: 15px;
  border-color: #fff;
}
</style>
