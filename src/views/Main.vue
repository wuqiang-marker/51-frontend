<template>
  <div class="home-page">
    <div class="left-container">
      <div class="today-case">
        <Title :text="'今日案件'" :fontSize="24" :top='18' :ifIcon="true" />
      </div>
      <div class="district-introduction-container">
        <Title :text="'区情介绍'" :ifIcon="false" />
        <div class="district" style="height:80%">
          <div style="height:1vh"></div>
          <table class="district-table" width="100%" cellpadding="0" cellspacing="0">
            <thead>
              <tr class="tr-color">
                <th>行政区分</th>
                <th>社区</th>
                <th>行政村</th>
                <th>面积</th>
                <th>人口</th>
                <th>GDP</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(sales, index) in tableData" :key="index">
                <td>{{sales.division}}</td>
                <td>{{sales.community}}</td>
                <td>{{sales.country}}</td>
                <td>{{sales.area}}</td>
                <td>{{sales.num}}</td>
                <td>{{sales.gdp}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="leaderSystem-container">
        <Title :text="'领导体系'" />
        <div class="leaderSystem-wrapper" style="height:90%;">
          <table class="leaderSystem-table" width="90%" style="table-layout: fixed;">
            <thead>
              <tr class="tr-color">
                <th>领导体系</th>
                <th>运营小组</th>
                <th>服务体系</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(sales, index) in tableData" :key="index">
                <td>{{sales.division}}</td>
                <td>{{sales.community}}</td>
                <td>{{sales.country}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="center-container">
      <div class="bg-menu">
        <ul>
          <li class="active">
            <span>综合态势</span>
          </li>
          <li>综合安防</li>
          <li>便捷通行</li>
          <li>资产管理</li>
          <li>
            <!-- 智能预警 -->
            <img src="../assets/image/warning.png" alt="">
          </li>
          <li>能效管理</li>
          <li>设置管理</li>
          <li>环境空间</li>
        </ul>
      </div>
      <div class="menu-line"></div>
    </div>
    <div class="right-container">
      <div class="important-work">
        <Title :text="'重点工作'" :fontSize="24" :top='18' :ifIcon="true" />
      </div>
      <div class="top-container">
        <div class="blueSky">
          <Title :text="'蓝天保卫战'" />
          <div class="lineWrapper">
            <div class="time-control">
              <div class="time-wrapper">
                <div class="item">
                  <span class="green-time-control"></span>
                  <span class="time-text">近七日</span>
                </div>
                <div class="item">
                  <span class="greenBlue-time-control"></span>
                  <span class="time-text">月度</span>
                </div>
                <div class="item">
                  <span class="blue-time-control"></span>
                  <span class="time-text">自定义</span>
                </div>
              </div>
            </div>
            <div id="skyLine" style="height:90%"></div>
          </div>
        </div>
        <div class="flood-control">
          <Title :text="'防汛指挥'" />
          <div class="flood-control-table">
            <div class="time-control">
              <div class="time-wrapper">
                <div class="item">
                  <span class="green-time-control"></span>
                  <span class="time-text">近七日</span>
                </div>
                <div class="item">
                  <span class="greenBlue-time-control"></span>
                  <span class="time-text">月度</span>
                </div>
                <div class="item">
                  <span class="blue-time-control"></span>
                  <span class="time-text">自定义</span>
                </div>
              </div>
            </div>
            <table class="flood-table">
              <thead>
                <tr class="tr-color">
                  <th>上报来源</th>
                  <th>受理数量</th>
                  <th>结案数量</th>
                  <th>特殊备注</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(sales, index) in floodTableData" :key="index">
                  <td>{{sales.reportingSource}}</td>
                  <td>{{sales.acceptedQuantity}}</td>
                  <td>{{sales.caseNum}}</td>
                  <td>{{sales.specialRemarks}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="right-center-container">
        <div class="impartant">
          <Title :text="'重点项目建设'" />
          <div class="important-wrapper">
            <div class="time-control">
              <div class="time-wrapper">
                <div class="item">
                  <span class="green-time-control"></span>
                  <span class="time-text">近七日</span>
                </div>
                <div class="item">
                  <span class="greenBlue-time-control"></span>
                  <span class="time-text">月度</span>
                </div>
                <div class="item">
                  <span class="blue-time-control"></span>
                  <span class="time-text">自定义</span>
                </div>
              </div>
            </div>
            <table class="impartant-table">
              <thead>
                <tr class="tr-color">
                  <th>上报来源</th>
                  <th>受理数量</th>
                  <th>结案数量</th>
                  <th>特殊备注</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(sales, index) in impartantTableData" :key="index">
                  <td>{{sales.reportingSource}}</td>
                  <td>{{sales.acceptedQuantity}}</td>
                  <td>{{sales.caseNum}}</td>
                  <td>{{sales.specialRemarks}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="emergency">
          <Title :text="'应急救援'" />
          <div class="emergency-control-table">
            <div class="time-control">
              <div class="time-wrapper">
                <div class="item">
                  <span class="green-time-control"></span>
                  <span class="time-text">近七日</span>
                </div>
                <div class="item">
                  <span class="greenBlue-time-control"></span>
                  <span class="time-text">月度</span>
                </div>
                <div class="item">
                  <span class="blue-time-control"></span>
                  <span class="time-text">自定义</span>
                </div>
              </div>
            </div>
            <table class="emergency-table">
              <thead>
                <tr class="tr-color">
                  <th>上报来源</th>
                  <th>受理数量</th>
                  <th>结案数量</th>
                  <th>特殊备注</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(sales, index) in emergencyTableData" :key="index">
                  <td>{{sales.reportingSource}}</td>
                  <td>{{sales.acceptedQuantity}}</td>
                  <td>{{sales.caseNum}}</td>
                  <td>{{sales.specialRemarks}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="bottom-container">
        <Title :text="'社区管理'" />
        <div class="community">
          <div class="communityItem">
            <div class="communityTitle">小区总数</div>
            <div class="communityNum">200</div>
          </div>
          <div class="communityItem">
            <div class="communityTitle">房屋数量</div>
            <div class="communityNum">200</div>
          </div>
          <div class="communityItem">
            <div class="communityTitle">本地人口</div>
            <div class="communityNum">200</div>
          </div>
          <div class="communityItem">
            <div class="communityTitle">外地人口</div>
            <div class="communityNum">200</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.home-page {
  width: 100%;
  height: 100%;
  .left-container {
    float: left;
    width: 26%;
    height: 100%;
    .today-case {
      height: 6vh;
      width: 90%;
      color: green;
      // .bi-title-font{
      //   top:10%!important;
      // }
    }
    .district-introduction-container {
      height: 24vh;
      width: 100%;
      margin-top: 2vh;
      .district {
        background-image: url('../assets/image/border.png');
        background-repeat: no-repeat;
        // background: rgb(24, 34, 49);
        margin-top: 1vh;
        .district-table {
          color: #fff;
          table-layout: fixed;
          border-collapse: separate;
          border-spacing: 1vh 0;
          .tr-color {
            background-color: rgba(0, 0, 0, 0.5);
          }

          tbody {
            tr {
              background-color: rgba(0, 0, 0, 0.5);
              td {
                text-align: center;
                height: 5vh;
              }
            }
          }
        }
      }
    }
    .leaderSystem-container {
      height: 58vh;
      width: 100%;
      margin-top: 2vh;
      .leaderSystem-wrapper {
        background-color: rgb(24, 34, 49);
        // background-color: rgba(0, 0, 0, 0.3);
        margin-top: 1vh;
        .leaderSystem-table {
          width: 90% !important;
          table-layout: fixed;
          margin: 0 auto;
          border-spacing: 1vh 1vh !important;
          tbody {
            tr {
              td {
                height: 14vh;
              }
            }
          }
        }
      }
    }
  }
  .center-container {
    float: left;
    width: 48%;
    height: 100%;
    //完成后需要将左右间距改为 注释中的值
    // margin-left: 2.5%;
    // margin-right: 2.5%;
    .bg-menu {
      ul {
        padding: 0;
        margin: 0;
        li {
          float: left;
          list-style: none;
          color: #fff;
          font-size: 2vh;
          // padding: 0.5vh 1vh;
          // width: 12.5%;
        }
        li:not(:last-child) {
          margin-right: 3.8%;
        }
        .active {
          span {
            padding: 0.5vh 1.5vh;
            border-radius: 90%;
            background: linear-gradient(
              top,
              rgba(24, 41, 77, 0.5) 0%,
              rgba(36, 84, 189, 0.5) 50%,
              rgba(24, 41, 77, 0.5) 100%
            );
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
      top: -5vh;
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
  .right-container {
    float: left;
    width: 26%;
    .important-work {
      height: 6vh;
      width: 90%;
      color: green;
    }
    .top-container {
      height: 33vh;
      width: 100%;
      margin-top: 2vh;

      .blueSky {
        width: 47.5%;
        display: inline-block;
        height: 100%;
        .lineWrapper {
          background: rgb(24, 34, 49);
          margin-top: 1vh;
          height: 80%;
        }
      }
      .flood-control {
        width: 47.5%;
        margin-left: 5%;
        display: inline-block;
        height: 100%;

        .flood-control-table {
          margin-top: 1vh;
          height: 80%;
          background-color: #182231;
          padding: 1vh;
        }
      }
      tbody {
        td {
          height: 4vh;
        }
      }
    }
    .right-center-container {
      height: 33vh;
      width: 100%;
      margin-top: 2vh;

      .impartant {
        width: 47.5%;
        display: inline-block;
        height: 100%;
        .important-wrapper {
          background: rgb(24, 34, 49);
          margin-top: 1vh;
          height: 80%;
          padding: 1vh;
        }
      }
      .emergency {
        width: 47.5%;
        margin-left: 5%;
        display: inline-block;
        height: 100%;
        .emergency-control-table {
          background: rgb(24, 34, 49);
          margin-top: 1vh;
          height: 80%;
          padding: 1vh;
        }
      }
      tbody {
        td {
          height: 4vh;
        }
      }
    }
    .bottom-container {
      height: 14vh;
      width: 100%;
      margin-top: 2vh;
      .community {
        background: rgb(24, 34, 49);
        margin-top: 1vh;
        .communityItem {
          width: 20%;
          display: inline-block;
          margin: 3% 2.5%;
          background-color: rgba(0, 0, 0, 0.5);
          .communityTitle {
            background-color: rgba(0, 0, 0, 0.5);
            color:#fff;
            text-align: center;
          }
          .communityNum {
            padding: 0.5vh 0;
            color: #fff;
            text-align: center;
          }
        }
      }
    }
  }
  //时间控制
  .time-control {
    height: 2vh;
    width: 100%;
    .time-wrapper {
      margin: 0 auto;
      width: 80%;
      .item:not(:first-child){
        margin-left:1vh;
      }
    }

    .time-wrapper:after {
      content: "";
      display: block;
      height: 0;
      clear: both;
      visibility: hidden;
    }

    .item {
      float: left;
    }
    .green-time-control {
      display: inline-block;
      width: 2vh;
      height: 2vh;
      background-color: #bde61a;
    }
    .greenBlue-time-control {
      display: inline-block;
      width: 2vh;
      height: 2vh;
      background-color: #99ffff;
    }
    .blue-time-control {
      display: inline-block;
      width: 2vh;
      height: 2vh;
      background-color: #3399ff;
    }
    .time-text {
      color: #fff;
      margin-left: 2vh;
    }
  }
  //表格
  table {
    width: 100%;
    color: #fff;
    border-collapse: separate;
    border-spacing: 0 1vh;
    .tr-color {
      background-color: rgba(0, 0, 0, 0.5);
    }

    tbody {
      tr {
        background-color: rgba(0, 0, 0, 0.5);
        td {
          text-align: center;
        }
      }
    }
  }
}
</style>
<script>
import ajax from "@/libs/Ajax";
import Title from "@/components/bi/title/title";
export default {
  name: "homePage",
  components: { Title },
  data() {
    return {
      line: null,
      tableData: [
        {
          division: "A",
          community: "01",
          country: "A0",
          area: "20Km²",
          num: "20万",
          gdp: "50亿",
        },
        {
          division: "A",
          community: "01",
          country: "A0",
          area: "20Km²",
          num: "20万",
          gdp: "50亿",
        },
        {
          division: "A",
          community: "01",
          country: "A0",
          area: "20Km²",
          num: "20万",
          gdp: "50亿",
        },
      ],
      floodTableData: [
        {
          reportingSource: "01街道",
          acceptedQuantity: "20",
          caseNum: "10",
          specialRemarks: "无",
        },
        {
          reportingSource: "01街道",
          acceptedQuantity: "20",
          caseNum: "10",
          specialRemarks: "无",
        },
        {
          reportingSource: "01街道",
          acceptedQuantity: "20",
          caseNum: "10",
          specialRemarks: "无",
        },
      ],
      impartantTableData: [
        {
          reportingSource: "01街道",
          acceptedQuantity: "20",
          caseNum: "10",
          specialRemarks: "无",
        },
        {
          reportingSource: "01街道",
          acceptedQuantity: "20",
          caseNum: "10",
          specialRemarks: "无",
        },
        {
          reportingSource: "01街道",
          acceptedQuantity: "20",
          caseNum: "10",
          specialRemarks: "无",
        },
      ],
      emergencyTableData: [
        {
          reportingSource: "01街道",
          acceptedQuantity: "20",
          caseNum: "10",
          specialRemarks: "无",
        },
        {
          reportingSource: "01街道",
          acceptedQuantity: "20",
          caseNum: "10",
          specialRemarks: "无",
        },
        {
          reportingSource: "01街道",
          acceptedQuantity: "20",
          caseNum: "10",
          specialRemarks: "无",
        },
      ],
    };
  },
  mounted() {
    this.line = this.$echarts.init(document.getElementById("skyLine"));
    this.loadLine();
  },
  methods: {
    getData() {
      this.shop[0].salesnum++;
      this.shop[0].guestnum++;
      this.shop[0].ordernum++;
      this.shop[1].salesnum++;
      this.shop[1].guestnum++;
      this.shop[1].ordernum++;
      this.shop[2].salesnum++;
      this.shop[2].guestnum++;
      this.shop[2].ordernum++;
      this.menuKey += 1;
    },
    //折线图
    loadLine(x, y) {
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              //
              color: "#dddc6b",
            },
          },
        },
        // legend: {
        //   top: "0%",
        //   data: ["安卓", "IOS"],
        //   textStyle: {
        //     color: "rgba(255,255,255,.5)",
        //     fontSize: "12"
        //   }
        // },
        grid: {
          left: "10",
          top: "30",
          right: "10",
          bottom: "10",
          containLabel: true,
        },

        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLabel: {
              textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: 12,
              },
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.2)",
              },
            },
            // data:x
            data: ["01", "02", "03", "04", "05", "06", "07", "08", "09"],
          },
          {
            axisPointer: { show: false },
            axisLine: { show: false },
            position: "bottom",
            offset: 20,
          },
        ],

        yAxis: [
          {
            type: "value",
            axisTick: { show: false },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)",
              },
            },
            axisLabel: {
              textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: 12,
              },
            },

            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)",
              },
            },
          },
        ],
        series: [
          {
            name: "安卓",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                color: "#0184d5",
                width: 2,
              },
            },
            itemStyle: {
              normal: {
                color: "#0184d5",
                borderColor: "rgba(221, 220, 107, .1)",
                borderWidth: 12,
              },
            },
            data: [3, 4, 3, 4, 3, 4, 3, 6, 2, 4, 2, 4, 3, 4, 3, 4, 3],
          },
          {
            // name: "IOS",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                color: "#00d887",
                width: 2,
              },
            },
            itemStyle: {
              normal: {
                color: "#00d887",
                borderColor: "rgba(221, 220, 107, .1)",
                borderWidth: 12,
              },
            },
            // data:y
            data: [
              5,
              3,
              5,
              6,
              1,
              5,
              3,
              5,
              6,
              4,
              6,
              4,
              8,
              3,
              5,
              6,
              1,
              5,
              3,
              7,
              2,
              5,
              1,
              4,
            ],
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      this.line.setOption(option);
    },
    //销售趋势
    drawSkyLine() {
      let myChart = this.$echarts.init(document.getElementById("skyLine"));
      myChart.setOption({
        title: [
          {
            text: "线上销售",
            left: 40,
            top: 5,
            textStyle: {
              color: "#91CBFD",
              fontSize: 12,
            },
          },
          {
            text: "线下销售",
            left: 295,
            top: 5,
            textStyle: {
              color: "#91CBFD",
              fontSize: 12,
            },
          },
          {
            text: "客单价",
            left: 550,
            top: 5,
            textStyle: {
              color: "#91CBFD",
              fontSize: 12,
            },
          },
        ],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        // grid: [
        //   {
        //     left: "2%",
        //     right: "68%",
        //     bottom: "20%",
        //     top: "20%",
        //     containLabel: true,
        //   },
        // ],
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            //坐标刻度线是否显示
            axisTick: {
              show: false,
            },
            data: ["1", "2", "3", "4", "5", "6", "7"],
            axisLine: {
              lineStyle: {
                color: "#07288C",
                opacity: 0.4,
              },
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#B0C8FF",
                fontSize: "10",
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            //设置网格线颜色
            splitLine: {
              show: true,
              lineStyle: {
                color: ["#FFFFFF"],
                width: 1,
                type: "solid",
                opacity: 0.2,
              },
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#B0C8FF",
                fontSize: "10",
              },
            },
          },
        ],
        series: [
          {
            name: "微信商城",
            type: "line",
            areaStyle: {
              // color: "#FFFF00",
              // opacity: 0.2
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#7049E0" },
                  { offset: 1, color: "transparent" },
                ]),
              },
            },
            data: [600, 700, 720, 700, 600, 200, 100],
            smooth: true,
            symbol: "none",
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#7049E0" },
                  { offset: 1, color: "#4F4CDC" },
                ]),
              },
            },
          },
          {
            name: "官网商城",
            type: "line",
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#9900FF" },
                  { offset: 1, color: "transparent" },
                ]),
              },
            },
            data: [600, 300, 720, 780, 600, 600, 100],
            smooth: true,
            symbol: "none",
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#9900FF" },
                  { offset: 1, color: "#D200FF" },
                ]),
              },
            },
          },
          {
            name: "微信导购",
            type: "line",
            //堆叠
            /* stack: '总量',*/
            /*label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },*/
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#38A0D6" },
                  { offset: 1, color: "transparent" },
                ]),
              },
            },
            data: [600, 200, 720, 300, 600, 200, 500],
            smooth: true,
            symbol: "none",
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#38A0D6" },
                  { offset: 1, color: "#6DCDE6" },
                ]),
              },
            },
          },
        ],
      });
    },
  },
};
</script>
