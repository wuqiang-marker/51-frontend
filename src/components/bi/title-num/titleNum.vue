<template>
  <div class="bi-title-num" :model="caseData">
    <div class="today-case">
      <div class="item">
        <div class="item-titleWarpper">
          <div class="title">{{title}}</div>
        </div>
      </div>
      <div class="item">
        <div class="case-img">
          <img src="../../../assets/image/email.png" alt />
        </div>
        <div class="case-right">
          <div class="case-type">信件</div>
          <div class="case-num">
            <span class="num">{{caseData.emailNum}}</span>
            <span class="unit">类</span>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="case-img">
          <img src="../../../assets/image/phone.png" alt />
        </div>
        <div class="case-right">
          <div class="case-type">通信</div>
          <div class="case-num">
            <span class="num">{{caseData.phoneNum}}</span>
            <span class="unit">类</span>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="case-img">
          <img src="../../../assets/image/net.png" alt />
        </div>
        <div class="case-right">
          <div class="case-type">互联网</div>
          <div class="case-num">
            <span class="num">{{caseData.netNum}}</span>
            <span class="unit">类</span>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="case-img">
          <img src="../../../assets/image/warning.png" alt />
        </div>
        <div class="case-right">
          <div class="case-type">预警</div>
          <div class="case-num">
            <span class="num">{{caseData.warningNum}}</span>
            <span class="unit">类</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.bi-title-num {
  .today-case {
    margin-top: 3.8vh;
    height: 9vh;
    border-bottom: 0.1vh solid #539ee6;
    .item {
      float: left;
      width: 20%;
      height: 100%;

      .item-titleWarpper {
        height: 100%;
        display: flex;
        align-items: center;
      }

      .case-img,
      .case-right {
        display: inline-block;
        height: 100%;
        position: relative;
      }
      .case-type {
        position: relative;
        top: -3vh;
        color: #01dbec;
        margin-left: 0.5vh;
        text-align: center;
      }
      .case-num {
        margin-left: 0.5vh;
        position: relative;
        top: -1vh;
        text-align: center;
        // position: relative;
        // top: -2vh;
        .num {
          color: #ffc02c;
        }
        .unit {
          color: #fff;
        }
      }
    }
  }
}
</style>


<script>
export default {
  data(){
    return{
      caseData:{
        emailNum:'',
        phoneNum:'',
        netNum:'',
        warningNum:'',
      }
    }
  },
  props: ["title", "realData", "ifIcon", "top"],
  mounted() {
    this.caseData = {...this.realData}
  },
  methods: {},
};
</script>


