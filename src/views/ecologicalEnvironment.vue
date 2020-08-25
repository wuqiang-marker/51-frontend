<template>
  <div class="wrapper-page">
    <div class="left-container">
      <div class="left-container-wrapper">
        <TitleNum :title="'今日案件'" :realData="realData"></TitleNum>
        <div class="air-quality-wrapper">
          <div class="item">
            <div class="item-titleWarpper">
              <div class="title">空气质量</div>
            </div>
          </div>
          <div class="air-quality-item-wrapper">
            <div class="air-quality-container">
              <div class="air-quality-item">
                <div class="air-bg">
                  <span class="air-type">PM2.5</span>
                  <div class="air-bottom">
                    <span class="air-icon">
                      <img src="../assets/image/PM2.5.png" alt />
                    </span>&nbsp;
                    <span class="air-value">{{45}}&nbsp;:&nbsp;{{'空气清新'}}</span>
                  </div>
                </div>
              </div>
              <div class="air-quality-item">
                <div class="air-bg">
                  <span class="air-type">空气湿度</span>
                  <div class="air-bottom">
                    <span class="air-icon">
                      <img src="../assets/image/airHumidity.png" alt />
                    </span>&nbsp;
                    <span class="air-value">{{'45%'}}&nbsp;:&nbsp;{{'正常'}}</span>
                  </div>
                </div>
              </div>
              <div class="air-quality-item">
                <div class="air-bg">
                  <span class="air-type">火险等级</span>
                  <div class="air-bottom">
                    <span class="air-icon">
                      <img src="../assets/image/fire1.png" alt />
                    </span>&nbsp;
                    <span class="air-value">{{1}}&nbsp;:&nbsp;{{'轻级'}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="microStation-detection-wrapper">
          <div class="item">
            <div class="item-titleWarpper">
              <div class="title">微站监测</div>
            </div>
          </div>
          <div class="microStation-detection-item">
            <div class="item">
              <div class="item-wrapper">
                <span class="economic-type">PM2.5</span>
                <span class="economic-unit">毫克/m3</span>
                <span class="economic-num">65</span>
              </div>
            </div>
            <div class="item">
              <div class="item-wrapper">
                <span class="economic-type">PM10</span>
                <span class="economic-unit">MG/m</span>
                <span class="economic-num">6.15</span>
              </div>
            </div>
          </div>
        </div>
        <div class="left-third-container">
          <div>
            <div class="item">
              <div class="item-titleWarpper">
                <div class="title">打赢蓝天保卫战目标完成情况</div>
              </div>
            </div>
            <div class="sky-table-container">
              <!-- 打赢蓝天保卫战目标完成情况 -->
              <div class="sky-table-wrapper">
                <table class="sky-table">
                  <thead>
                    <tr class="tr-color">
                      <th>类型</th>
                      <th>天数</th>
                      <th>2020年目标</th>
                      <th>2020年现状</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(sky, index) in skyTableData" :key="index">
                      <td>{{sky.name}}</td>
                      <td>{{sky.num}}</td>
                      <td>{{sky.contact}}</td>
                      <td>{{sky.remark}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 中间部分 -->
    <div class="center-container">
      <Menu :menuTab="5"></Menu>
    </div>
    <!-- 右侧部分 -->
    <div class="right-container">
      <div class="right-container-wrapper">
        <TitleNum :title="'案件研判'" :realData="realData2"></TitleNum>

        <!-- 水环境监测 -->
        <div class="water-environment-wrapper">
          <div class="item">
            <div class="item-titleWarpper">
              <div class="title">水环境监测</div>
            </div>
          </div>
          <div class="water-environment-line">
            <div class="water-line-fir-wrapper line-item">
              <div id="water-line-fir"></div>
            </div>
            <div class="water-line-sec-wrapper line-item">
              <div id="water-line-sec"></div>
            </div>
          </div>
        </div>
        <!-- 污染源监测 -->
        <div class="pollution-source-wrapper">
          <div class="item">
            <div class="item-titleWarpper">
              <div class="title">污染源监测</div>
            </div>
          </div>
          <div class="pollution-source-bar">
            <div class="pollution-bar-fir-wrapper bar-item">
              <div id="pollution-bar-fir"></div>
            </div>
            <div class="pollution-bar-sec-wrapper bar-item">
              <div id="pollution-bar-sec"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrapper-page {
  //左侧
  .left-container {
    .left-container-wrapper {
      .air-quality-wrapper {
        height: 14vh;
        border-bottom: 0.1vh solid #539ee6;
        display: flex;
        align-items: center;
        justify-content: space-around;
        .item {
          height: 100%;
          flex: 2;
          .item-titleWarpper {
            height: 100%;
            display: flex;
            align-items: center;
          }
        }
        .air-quality-item-wrapper {
          height: 100%;
          flex: 8;
          .air-quality-container {
            height: 100%;
            display: flex;
            justify-content: space-around;
            .air-quality-item {
              height: 100%;
              flex: 1;
              display: flex;
              align-items: center;
              .air-bg {
                max-width: 222px;
                width: 100%;
                max-height: 100px;
                height: 100%;
                background-image: url("../assets/image/air-bg.png");
                background-repeat: no-repeat;
                background-size: 100% 100%;
                position: relative;
                .air-type {
                  background: linear-gradient(
                    0deg,
                    rgba(255, 255, 255, 1) 0%,
                    rgba(81, 160, 254, 1) 100%
                  );
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  display: inline-block;
                  width: 50%;
                  text-align: center;
                  position: relative;
                  top: 1vh;
                }
                .air-value {
                  font-family: Source Han Sans CN;
                  font-weight: 400;
                  color: rgba(27, 233, 255, 1);
                }
                .air-bottom {
                  width: 100%;
                  position: relative;
                  bottom: 1vh;
                  height: 100%;
                  justify-content: center;
                  display: flex;
                  align-items: center;
                  .air-icon {
                    // position: relative;
                    // top: 2vh;
                  }
                  .air-value {
                    font-size: 2vh;
                    // position: relative;
                    // top: 60%;
                  }
                }
              }
            }
          }
        }
      }
      .microStation-detection-wrapper {
        height: 12vh;
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
        }
        .microStation-detection-item {
          height: 100%;
          display: flex;
          align-items: center;
          .item {
            height: 100%;
            display: flex;
            align-items: center;
            .item-wrapper {
              position: relative;
              height: 100%;
              max-height: 110px;
              text-align: center;
              max-width: 150px;
              width: 100%;
              background-image: url("../assets/image/rect.png");
              background-repeat: no-repeat;
              background-size: 100% 100%;
              .economic-type {
                // position: absolute;
                display: block;
                padding-top: 1.5vh;
                color: #fff;
              }
              .economic-unit {
                padding-top: 1.5vh;
                writing-mode: vertical-lr;
                color: #fff;
              }
              .economic-num {
                padding-top: 1.5vh;
                margin-left: 0.5vh;
                color: #1be9ff;
                font-weight: bold;
                font-size: 3.5vh;
              }
            }
            
          }
          .item:nth-child(2){
              margin-left: 10vh;
            
          }
        }
      }
      .left-third-container {
        margin-top: 2vh;
        border-bottom: 0.1vh solid #539ee6;
        .sky-table {
          tbody {
            tr {
              height: 5vh;
            }
          }
        }
      }
      .industrial-structure {
        height: 23vh;
        .industrial-structure-item {
          display: inline-block;
          width: 33.33%;
          height: 100%;
          #proportion-of-output,
          #industrial-distribution,
          #changing-trend-bar {
            height: 100%;
          }
        }
      }
    }
  }
  //中间
  .center-container {
  }
  //右侧
  .right-container {
    .right-container-wrapper {
      .water-environment-wrapper {
        height: 37vh;
        border-bottom: 0.1vh solid #539ee6;
        .item {
          margin-top: 2vh;
        }
        .water-environment-line {
          height: 32vh;
          margin-top: 2vh;
          .line-item {
            width: 50%;
            display: inline-block;
            height: 100%;
            #water-line-fir,
            #water-line-sec {
              height: 100%;
            }
          }
        }
      }
      .pollution-source-wrapper {
        margin-top: 2vh;
        height: 37vh;

        .pollution-source-bar {
          height: 32vh;
          margin-top: 2vh;
          .bar-item {
            width: 48%;
            display: inline-block;
            height: 100%;
            #pollution-bar-fir,
            #pollution-bar-sec {
              height: 100%;
            }
            #pollution-bar-sec {
              margin-left: 4%;
            }
          }
        }
      }
    }
  }
}
</style>
<script>
import ajax from "@/libs/Ajax";
import Menu from "@/components/bi/menu/menu";
import TitleNum from "@/components/bi/title-num/titleNum";
export default {
  name: "ecologicalEnvironment",
  components: { Menu, TitleNum },
  data() {
    return {
      line: null,
      skyTableData: [
        {
          name: "区县一",
          num: "22",
          contact: "无",
          remark: "无",
        },
        {
          name: "区县二",
          num: "22",
          contact: "无",
          remark: "无",
        },
        {
          name: "区县三",
          num: "22",
          contact: "无",
          remark: "无",
        },
        {
          name: "区县4",
          num: "22",
          contact: "无",
          remark: "无",
        },
        {
          name: "区县5",
          num: "22",
          contact: "无",
          remark: "无",
        },

        {
          name: "区县6",
          num: "22",
          contact: "无",
          remark: "无",
        },
        {
          name: "区县7",
          num: "22",
          contact: "无",
          remark: "无",
        },
      ],
      realData: {
        emailNum: "22",
        phoneNum: "200",
        netNum: "200",
        warningNum: "200",
      },
      realData2: {
        emailNum: "33",
        phoneNum: "200",
        netNum: "333",
        warningNum: "200",
      },
    };
  },
  mounted() {
    this.drawWaterLineFir();
    this.drawWaterLineSec();
    this.drawPollutionPieFir();
    this.drawPollutionPieSec();
  },
  methods: {
    //水污染监测折线图
    drawWaterLineFir() {
      let myChart = this.$echarts.init(
        document.getElementById("water-line-fir")
      );
      myChart.setOption({
        legend: {
          data: ["近七日", "月度", "自定义"],
          right: "5%",
          textStyle: {
            fontSize: 12,
            color: "#FFFFFF",
          },
          icon: "rect",
          itemWidth: 10,
          itemHeight: 2,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        grid: [
          {
            left: "5%",
            right: "5%",
            bottom: "5%",
            top: "5%",
            containLabel: true,
          },
        ],
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            //坐标刻度线是否显示
            axisTick: {
              show: true,
            },
            // data: [
            //   "1月",
            //   "2月",
            //   "3月",
            //   "4月",
            //   "5月",
            //   "6月",
            //   "7月",
            //   "8月",
            //   "9月",
            //   "10月",
            //   "11月",
            //   "12月",
            // ],
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
          },
        ],
        yAxis: [
          {
            type: "value",
            axisTick: {
              show: false,
            },
            axisLine: {
              show: true,
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
            name: "近七日",
            type: "line",
            smooth: true,
            symbol: "circle",
            showSymbol: false,
            //堆叠
            /* stack: '总量',*/
            /*label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },*/
            data: [120, 130, 300, 430, 500, 450, 200, 100, 260, 499, 230, 279],
            itemStyle: {
              normal: {
                color: "#0043B3",
              },
            },
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(0,67,179, 0.4)",
                    },
                    {
                      offset: 0.8,
                      color: "rgba(0,67,179, 0.1)",
                    },
                  ],
                  false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)",
              },
            },
          },
          {
            name: "月度",
            type: "line",
            smooth: true,
            symbol: "circle",
            showSymbol: false,
            data: [320, 130, 130, 230, 600, 450, 100, 500, 160, 399, 347, 890],
            itemStyle: {
              normal: {
                color: "#B2701C",
              },
            },
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(178,112,28, 0.4)",
                    },
                    {
                      offset: 0.8,
                      color: "rgba(178,112,28, 0.1)",
                    },
                  ],
                  false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)",
              },
            },
          },
          {
            name: "自定义",
            type: "line",
            smooth: true,
            symbol: "circle",
            showSymbol: false,
            data: [120, 130, 130, 230, 300, 450, 100, 500, 160, 399, 647, 890],
            itemStyle: {
              normal: {
                color: "#9EEC5E",
              },
            },
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(158,236,94, 0.4)",
                    },
                    {
                      offset: 0.8,
                      color: "rgba(158,236,94, 0.1)",
                    },
                  ],
                  false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)",
              },
            },
          },
        ],
      });
    },
    drawWaterLineSec() {
      let myChart = this.$echarts.init(
        document.getElementById("water-line-sec")
      );
      myChart.setOption({
        legend: {
          data: ["近七日", "月度", "自定义"],
          right: "5%",
          textStyle: {
            fontSize: 12,
            color: "#FFFFFF",
          },
          icon: "rect",
          itemWidth: 10,
          itemHeight: 2,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        grid: [
          {
            left: "5%",
            right: "5%",
            bottom: "5%",
            top: "5%",
            containLabel: true,
          },
        ],
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            //坐标刻度线是否显示
            axisTick: {
              show: true,
            },
            // data: [
            //   "1月",
            //   "2月",
            //   "3月",
            //   "4月",
            //   "5月",
            //   "6月",
            //   "7月",
            //   "8月",
            //   "9月",
            //   "10月",
            //   "11月",
            //   "12月",
            // ],
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
          },
        ],
        yAxis: [
          {
            type: "value",
            axisTick: {
              show: false,
            },
            axisLine: {
              show: true,
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
            name: "近七日",
            type: "line",
            smooth: true,
            symbol: "circle",
            showSymbol: false,
            //堆叠
            /* stack: '总量',*/
            /*label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },*/
            data: [120, 130, 300, 430, 500, 450, 200, 100, 260, 499, 230, 279],
            itemStyle: {
              normal: {
                color: "#0043B3",
              },
            },
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(0,67,179, 0.4)",
                    },
                    {
                      offset: 0.8,
                      color: "rgba(0,67,179, 0.1)",
                    },
                  ],
                  false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)",
              },
            },
          },
          {
            name: "月度",
            type: "line",
            smooth: true,
            symbol: "circle",
            showSymbol: false,
            data: [320, 130, 130, 230, 600, 450, 100, 500, 160, 399, 347, 890],
            itemStyle: {
              normal: {
                color: "#B2701C",
              },
            },
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(178,112,28, 0.4)",
                    },
                    {
                      offset: 0.8,
                      color: "rgba(178,112,28, 0.1)",
                    },
                  ],
                  false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)",
              },
            },
          },
          {
            name: "自定义",
            type: "line",
            smooth: true,
            symbol: "circle",
            showSymbol: false,
            data: [120, 130, 130, 230, 300, 450, 100, 500, 160, 399, 647, 890],
            itemStyle: {
              normal: {
                color: "#9EEC5E",
              },
            },
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(158,236,94, 0.4)",
                    },
                    {
                      offset: 0.8,
                      color: "rgba(158,236,94, 0.1)",
                    },
                  ],
                  false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)",
              },
            },
          },
        ],
      });
    },
    // 污染源监测饼图
    drawPollutionPieFir() {
      let myChart = this.$echarts.init(
        document.getElementById("pollution-bar-fir")
      );
      myChart.setOption({
        // title: [
        //   {
        //     text: "优惠券使用量",
        //     subtext: "69258544",
        //     left: 150,
        //     top: 15,
        //     textStyle: {
        //       color: "#7CA1D2",
        //       fontSize: 14,
        //     },
        //     subtextStyle: {
        //       color: "#6CE9FF",
        //       fontSize: 24,
        //       align: "center",
        //     },
        //   },
        // ],
        series: [
          {
            // name: "优惠券",
            type: "pie",
            radius: 70,
            // center: ["25%", "60%"],
            // roseType: "radius",
            label: {
              show: false,
            },
            emphasis: {
              label: {
                show: true,
              },
            },
            data: [
              {
                value: 34500,
                name: "部件",
                itemStyle: {
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 1, [
                    {
                      offset: 0,
                      color: "#4DB1E5",
                    },
                    {
                      offset: 1,
                      color: "#4DB1E5",
                    },
                  ]),
                },
              },
              {
                value: 189000,
                name: "事件",
                itemStyle: {
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 1, [
                    {
                      offset: 0,
                      color: "#12BFC4",
                    },
                    {
                      offset: 1,
                      color: "#12BFC4",
                    },
                  ]),
                },
              },
              {
                value: 26000,
                name: "全部",
                itemStyle: {
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 1, [
                    {
                      offset: 0,
                      color: "#8E80FF",
                    },
                    {
                      offset: 1,
                      color: "#8E80FF",
                    },
                  ]),
                },
              },
            ],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  // formatter: "{a} <br/>{b} : {c} ({d}%)",
                  formatter: "{b}\n{c}",
                  fontSize: 15,
                  color: "#91CBFD",
                },
                labelLine: { show: true },
              },
            },
          },
        ],
      });
    },
    drawPollutionPieSec() {
      let myChart = this.$echarts.init(
        document.getElementById("pollution-bar-sec")
      );
      myChart.setOption({
        // title: [
        //   {
        //     text: "优惠券使用量",
        //     subtext: "69258544",
        //     left: 150,
        //     top: 15,
        //     textStyle: {
        //       color: "#7CA1D2",
        //       fontSize: 14,
        //     },
        //     subtextStyle: {
        //       color: "#6CE9FF",
        //       fontSize: 24,
        //       align: "center",
        //     },
        //   },
        // ],
        series: [
          {
            // name: "优惠券",
            type: "pie",
            radius: 70,
            // center: ["25%", "60%"],
            // roseType: "radius",
            label: {
              show: false,
            },
            emphasis: {
              label: {
                show: true,
              },
            },
            data: [
              {
                value: 34500,
                name: "部件",
                itemStyle: {
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 1, [
                    {
                      offset: 0,
                      color: "#4DB1E5",
                    },
                    {
                      offset: 1,
                      color: "#4DB1E5",
                    },
                  ]),
                },
              },
              {
                value: 189000,
                name: "事件",
                itemStyle: {
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 1, [
                    {
                      offset: 0,
                      color: "#12BFC4",
                    },
                    {
                      offset: 1,
                      color: "#12BFC4",
                    },
                  ]),
                },
              },
              {
                value: 26000,
                name: "全部",
                itemStyle: {
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 1, [
                    {
                      offset: 0,
                      color: "#8E80FF",
                    },
                    {
                      offset: 1,
                      color: "#8E80FF",
                    },
                  ]),
                },
              },
            ],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  // formatter: "{a} <br/>{b} : {c} ({d}%)",
                  formatter: "{b}\n{c}",
                  fontSize: 15,
                  color: "#91CBFD",
                },
                labelLine: { show: true },
              },
            },
          },
        ],
      });
    },
  },
};
</script>
