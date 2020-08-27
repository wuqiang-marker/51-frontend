<template>
  <div class="bg-menu-wrapper">
    <div class="bg-menu">
      <ul>
        <li :class="{'active':menuTab==1}">
          <span>
            <span class="menu-title" @click="changeMenu(1)">城市管理</span>
          </span>
        </li>
        <li :class="{'active':menuTab==2}">
          <span>
            <span class="menu-title" @click="changeMenu(2)">应急管理</span>
          </span>
        </li>
        <li :class="{'active':menuTab==3}">
          <span>
            <span class="menu-title" @click="changeMenu(3)">经济运行</span>
          </span>
        </li>
        <li :class="{'active':menuTab==8}">
          <div class="circle1"></div>
          <div class="circle2"></div>
          <div class="circle3"></div>
          <div class="circle4"></div>
          <div class="circle5" @click="changeMenu(8)">智能预警</div>
        </li>
        <li :class="{'active':menuTab==4}">
          <span>
            <span class="menu-title" @click="changeMenu(4)">槐荫总览</span>
          </span>
        </li>
        <li :class="{'active':menuTab==5}">
          <span>
            <span class="menu-title" @click="changeMenu(5)">生态环境</span>
          </span>
        </li>
        <li :class="{'active':menuTab==6}">
          <span>
            <span class="menu-title" @click="changeMenu(6)">康养医疗</span>
          </span>
        </li>
        <li :class="{'active':menuTab==7}">
          <span>
            <span class="menu-title" @click="changeMenu(7)">优政善政</span>
          </span>
        </li>
      </ul>
    </div>
    <div class="menu-line"></div>
    <!-- <div class="bi-title-image"></div> -->
  </div>
</template>
<style lang="scss">
.bg-menu-wrapper {
  pointer-events: auto;
  .bg-menu {
    // background-image: url('../../../assets/image/menu-bg.png');
    background: linear-gradient(
      0deg,
      rgba(1, 28, 80, 0.7) 0%,
      rgba(1, 28, 80, 0.1) 100%
    );
    height: 9vh;
    ul {
      padding: 0;
      margin: 0;
      width: 100%;
      height: 100%;
      li {
        float: left;
        list-style: none;
        color: #80a7bb;
        font-size: 2vh;
        height: 100%;
        width: 12.5%;
        span {
          display: flex;
          justify-content: center;
          // align-items: center;
        }
      }
      li {
        span {
          height: 100%;
          align-items: center;
        }
      }
      /* 动态圆环 */
      .circle1,
      .circle2,
      .circle3,
      .circle4,
      .circle5 {
        width: 3vw;
        height: 10vh;
        border-radius: 50%;
        position: absolute;
        top: 4%;
        left: 43.5vw;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5vh;
        letter-spacing: 2px;
        cursor: pointer;
      }

      .circle5 {
        background-color: rgba(41, 187, 255, 0.3);
      }

      .circle5 > img {
        width: 25%;
        height: 4.5vh;
        margin: 35% auto 0;
        vertical-align: initial;
        position: relative;
        left: 37%;
      }

      .circle1 {
        animation: myfirst 4s linear 0s infinite;
        background-color: rgba(41, 187, 255, 0.3);
        -moz-animation: myfirst 4s linear 0s infinite;
        /* Firefox */
        -webkit-animation: myfirst 4s linear 0s infinite;
        /* Safari 和 Chrome */
        -o-animation: myfirst 4s linear 0s infinite;
        /* Opera */
      }

      .circle2 {
        animation: myfirst 4s linear 1s infinite;
        background-color: rgba(41, 187, 255, 0.3);
        -moz-animation: myfirst 4s linear 1s infinite;
        /* Firefox */
        -webkit-animation: myfirst 4s linear 1s infinite;
        /* Safari 和 Chrome */
        -o-animation: myfirst 4s linear 1s infinite;
        /* Opera */
      }

      .circle3 {
        animation: myfirst 4s linear 2s infinite;
        background-color: rgba(41, 187, 255, 0.3);
        -moz-animation: myfirst 4s linear 2s infinite;
        /* Firefox */
        -webkit-animation: myfirst 4s linear 2s infinite;
        /* Safari 和 Chrome */
        -o-animation: myfirst 4s linear 2s infinite;
        /* Opera */
      }

      .circle4 {
        animation: myfirst 4s linear 3s infinite;
        background-color: rgba(41, 187, 255, 0.3);
        -moz-animation: myfirst 4s linear 3s infinite;
        /* Firefox */
        -webkit-animation: myfirst 4s linear 3s infinite;
        /* Safari 和 Chrome */
        -o-animation: myfirst 4s linear 3s infinite;
        /* Opera */
      }

      @keyframes myfirst {
        0% {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 1;
        }

        10% {
          -webkit-transform: scale(1.15);
          transform: scale(1.15);
          opacity: 0.9;
        }

        20% {
          -webkit-transform: scale(1.3);
          transform: scale(1.3);
          opacity: 0.8;
        }

        30% {
          -webkit-transform: scale(1.45);
          transform: scale(1.45);
          opacity: 0.7;
        }

        40% {
          -webkit-transform: scale(1.6);
          transform: scale(1.6);
          opacity: 0.6;
        }

        50% {
          -webkit-transform: scale(1.75);
          transform: scale(1.75);
          opacity: 0.5;
        }

        60% {
          -webkit-transform: scale(1.9);
          transform: scale(1.9);
          opacity: 0.4;
        }

        70% {
          -webkit-transform: scale(2.05);
          transform: scale(2.05);
          opacity: 0.3;
        }

        80% {
          -webkit-transform: scale(2.2);
          transform: scale(2.2);
          opacity: 0.2;
        }

        90% {
          -webkit-transform: scale(2.35);
          transform: scale(2.35);
          opacity: 0.1;
        }

        100% {
          -webkit-transform: scale(2.5);
          transform: scale(2.5);
          opacity: 0;
        }
      }
      .menu-title {
        cursor: pointer;
      }
      .active {
        span {
          .menu-title {
            height: auto;
            // text-shadow:5px 10px 6px red;
            filter: drop-shadow(4px 6px 6px rgba(0, 255, 222, 1));
            //  filter: DropShadow(Color=green, OffX=5, OffY=5, Positive=1);
            // color: #D4F0FC;
            // background: radial-gradient(
            //   circle,
            //   rgba(0, 255, 222, 1),
            //   rgba(0, 25, 56, 1)
            // );
            // background-size: 110% 90%;
            // border-radius: 50%;
          }
        }
      }
    }
  }

  .bg-menu:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  .menu-line {
    position: relative;
    top: 2vh;
    z-index: 0;
    // margin-top: 3vh;
    height: 0.1vh;
    background: linear-gradient(
      left,
      rgba(84, 115, 169, 0.1) 0%,
      rgba(84, 115, 169, 1) 50%,
      rgba(84, 115, 169, 0.1) 100%
    );
  }
}
</style>


<script>
export default {
  data() {
    return {
      menu: "",
    };
  },
  props: ["menuTab"],
  mounted() {},


  
  methods: {
    changeMenu(menuIndex) {
      this.menu = menuIndex;
      let menuRouter;
      let poiIdData = [];
      switch (this.menu) {
        case 1: //城市管理
          menuRouter = "";
          poiIdData = [
            { id: "customPOI_ID_1" },
            { id: "customPOI_ID_2" },
            { id: "customPOI_ID_3" },
          ];
          break;
        case 2: //城市管理
          menuRouter = "ContingencyManagement";
          poiIdData = [{ id: "customPOI_ID_4" }];
          break;
        case 3: //经济运行
          menuRouter = "EconomicalOperation";
          break;
        case 4: //槐荫总览
          menuRouter = "HuaiYinOverview";
          break;
        case 5: //生态环境
          menuRouter = "ecologicalEnvironment";
          break;
        case 6: //康养医疗
          menuRouter = "healthCare";
          break;
        case 7: //优政善政
          menuRouter = "goodGovernance";
          break;
        case 8: //智能预警
          menuRouter = "ActiveCircle";
          break;
      }
      this.$router.push({
        path: "/" + menuRouter,
        query: { data: poiIdData[poiIdData.length - 1] },
      });
    },
  },
};
</script>


