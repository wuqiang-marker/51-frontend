<template>
  <div class="wrapper-page">
    <div class="left-container">
      <div class="left-container-wrapper">
        <TitleNum :title="'今日案件'" :realData="realData"></TitleNum>
        <!-- 企业概况 -->
        <div class="company">
          <div class="company-wrapper">
            <div class="item">
              <div class="item-titleWarpper">
                <div class="title">企业概况</div>
              </div>
            </div>
            <div class="company-item">
              <div class="item">
                <div class="item-wrapper">
                  <span class="economic-type">医疗卫生医院总数</span>
                  <span class="economic-unit">个</span>
                  <span class="economic-num">65</span>
                </div>
              </div>
              <div class="item">
                <div class="item-wrapper">
                  <span class="economic-type">医疗卫生资源负载数</span>
                  <span class="economic-unit">%</span>
                  <span class="economic-num">6.15</span>
                </div>
              </div>
            </div>
          </div>
          <!-- 企业概况表格 -->
          <div class="attract-investment">
            <table class="attract-investment-table">
              <thead>
                <tr class="tr-color">
                  <th>区域</th>
                  <th>民营医院</th>
                  <th>卫生室</th>
                  <th>疾控中心</th>
                  <th>妇幼保健</th>
                  <th>执业医师</th>
                  <th>执业护士</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(attract, index) in attractTableData" :key="index">
                  <td>{{attract.name}}</td>
                  <td class="attract-num">{{attract.num}}</td>
                  <td>{{attract.contact}}</td>
                  <td class="attract-remark">{{attract.remark}}</td>
                  <td>{{attract.name}}</td>
                  <td class="attract-num">{{attract.num}}</td>
                  <td>{{attract.contact}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- 总体概况 -->
        <div class="general-situation">
          <div class="general-situation-wrapper">
            <div class="item">
              <div class="item-titleWarpper">
                <div class="title">企业概况</div>
              </div>
            </div>
            <div class="general-situation-item">
              <div class="item">
                <div class="item-wrapper">
                  <span class="economic-type">基层门诊人数</span>
                  <span class="economic-unit">个</span>
                  <span class="economic-num">65</span>
                </div>
              </div>
              <div class="item">
                <div class="item-wrapper">
                  <span class="economic-type">基层住院人数</span>
                  <span class="economic-unit">个</span>
                  <span class="economic-num">615</span>
                </div>
              </div>
              <div class="item">
                <div class="item-wrapper">
                  <span class="economic-type">二级以上门诊人数</span>
                  <span class="economic-unit">个</span>
                  <span class="economic-num">65</span>
                </div>
              </div>
              <div class="item">
                <div class="item-wrapper">
                  <span class="economic-type">二级以上住院人数</span>
                  <span class="economic-unit">个</span>
                  <span class="economic-num">65</span>
                </div>
              </div>
            </div>
          </div>
          <!-- 总体情况图表 -->
          <div class="general-situation-echart">
            <div id="general-pie"></div>
            <div id="general-bar"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="center-container">
      <Menu :menuTab="6"></Menu>
    </div>
    <div class="right-container">
      <div class="right-container-wrapper">
        <!-- 人口结构 -->
        <div class="people-wrapper">
          <div class="item">
            <div class="item-titleWarpper">
              <div class="title">人口结构</div>
            </div>
          </div>
          <div class="attract-investment">
            <table class="attract-investment-table">
              <thead>
                <tr class="tr-color">
                  <th>物资仓库</th>
                  <th>人数</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(attract, index) in attractTableData" :key="index">
                  <td>{{attract.name}}</td>
                  <td>{{attract.num}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- 诊断疾病排行榜 -->
        <div class="disease-rankings">
          <div class="item">
            <div class="item-titleWarpper">
              <div class="title">诊断疾病排行榜</div>
            </div>
          </div>
          <div class="disease-bar">
            <div class="disease-bar-item">
              <div id="disease-bar-quarter"></div>
            </div>
            <div class="disease-bar-item">
              <div id="disease-bar-month"></div>
            </div>
            <div class="disease-bar-item">
              <div id="disease-bar-day"></div>
            </div>
          </div>
        </div>
        <!-- 就诊与住院信息 -->
        <div class="hospital-information">
          <div class="item">
            <div class="item-titleWarpper">
              <div class="title">就诊与住院信息</div>
            </div>
          </div>
          <div class="hospital-bar">
            <div class="hospital-bar-item">
              <div id="hospital-bar-quarter"></div>
            </div>
            <div class="hospital-bar-item">
              <div id="hospital-bar-month"></div>
            </div>
            <div class="hospital-bar-item">
              <div id="hospital-bar-day"></div>
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
      .company {
        height: 46vh;
        border-bottom: 0.1vh solid #539ee6;
        .company-wrapper {
          height: 12vh;

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
          .company-item {
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
            .item:nth-child(2) {
              margin-left: 10vh;
            }
          }
        }
      }
      .general-situation {
        height: 32vh;
        .general-situation-wrapper {
          height: 12vh;
          display: flex;
          justify-content: space-around;
          align-items: center;

          .item {
            flex: 1;
            .item-titleWarpper {
              height: 100%;
              display: flex;
              align-items: center;
            }
          }
          .general-situation-item {
            flex: 4;
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
            // .item:nth-child(2),
            // .item:nth-child(3),
            // .item:nth-child(4) {
            //   margin-left: 10vh;
            // }
          }
        }
        .general-situation-echart {
          display: flex;
          justify-content: space-around;
          #general-pie,
          #general-bar {
            flex: 1;
            height: 20vh;
          }
        }
      }

      .left-third-container {
        margin-top: 2vh;
        border-bottom: 0.1vh solid #539ee6;
        .changing-trend {
          margin-bottom: 2vh;
          .item {
            display: inline-block;
            width: 50%;
            height: 100%;
            .item-titleWarpper {
              height: 100%;
              display: flex;
              align-items: center;
            }
          }

          .changing-trend-container {
            margin-top: 2vh;
            height: 32vh;
            .changing-trend-line {
              display: inline-block;
              width: 49%;
              height: 100%;
              // height: 32vh;
              background: linear-gradient(
                -39deg,
                rgba(0, 169, 255, 0.1),
                rgba(32, 84, 200, 0.1)
              );
              border: 1px solid;
              border-image: radial-gradient(
                  circle,
                  rgba(13, 54, 78, 0.35),
                  rgba(3, 110, 154, 0.35)
                )
                1 1;
              position: relative;
              top: 1vh;
              .changeItem-wrapper {
                height: 100%;
                #changeItem {
                  padding: 1vh;
                  height: 100%;
                }
              }
            }
          }
          .attract-investment {
            display: inline-block;
            width: 49%;
            height: 100%;
            pointer-events: auto;
            table {
              height: 100%;
              // position: relative;
              // top:-1vh;
              // thead {
              //   border-spacing: 0;
              // }
              tr {
                height: 3.045vh;
              }
            }
          }
        }
      }
      .industrial-structure {
        height: 23vh;
        margin-top: 2vh;
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
      .people-wrapper {
        margin-top: 2vh;
      }
      .disease-rankings {
        height: 28vh;
        .disease-bar {
          display: flex;
          justify-content: space-around;
          .disease-bar-item {
            flex: 1;
            #disease-bar-month,
            #disease-bar-quarter,
            #disease-bar-day {
              height: 26vh;
            }
          }
        }
      }

      .hospital-information {
        height: 28vh;
        .hospital-bar {
          display: flex;
          justify-content: space-around;
          .hospital-bar-item {
            flex: 1;
            #hospital-bar-month,
            #hospital-bar-quarter,
            #hospital-bar-day {
              height: 26vh;
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
  name: "healthCarePage",
  components: { Menu, TitleNum },
  data() {
    return {
      line: null,
      attractTableData: [
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
        emailNum: "11",
        phoneNum: "200",
        netNum: "200",
        warningNum: "200",
      },
    };
  },
  mounted() {
    let ids = ["disease-bar-quarter", "disease-bar-month", "disease-bar-day"];
    let titles = ["季度统计", "月度统计", "日统计"];
    for (let i = 0; i < ids.length; i++) {
      this.drawDiseaseBar(ids[i], titles[i]);
    }
    let hospitalIds = [
      "hospital-bar-quarter",
      "hospital-bar-month",
      "hospital-bar-day",
    ];
    let hospitalTitles = ["季度统计", "月度统计", "日统计"];
    for (let i = 0; i < hospitalIds.length; i++) {
      this.drawDiseaseBar(hospitalIds[i], hospitalTitles[i]);
    }
    this.drawPie();
    this.drawGeneralBar();
  },
  methods: {
    // 诊断疾病排行榜
    drawDiseaseBar(id, title, data) {
      let myChart = this.$echarts.init(document.getElementById(id));
      myChart.setOption({
        title: {
          text: title,
          x: "18",
          y: "16",
          textStyle: {
            color: "#FFF",
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: "7%",
          right: "7%",
          bottom: "5%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            // data: [
            //   "东北",
            //   "南区",
            //   "中区",
            //   "西北",
            //   "西南",
            //   "西区",
            //   "东1",
            // ],
            axisTick: {
              show: false,
            },
            //x轴颜色
            axisLine: {
              lineStyle: {
                color: "#FFFFFF",
                opacity: 0.2,
              },
            },
            // x轴的字体样式
            axisLabel: {
              show: true,
              textStyle: {
                color: "#0E8BFF",
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
            // x轴的字体样式
            axisLabel: {
              show: true,
              textStyle: {
                color: "#CCCCCC",
                fontSize: "10",
              },
            },
          },
        ],
        series: [
          {
            name: "销售额",
            type: "bar",
            barWidth: "25%",
            itemStyle: {
              barBorderRadius: [40, 40, 1, 1],
              color: function (pramas) {
                let colorList = [
                  "#018DFF",
                  "#62C5DC",
                  "#1058DA",
                  "#4479D8",
                  "#00A2FF",
                  "#22BADD",
                  "#01FFDE",
                ];
                return colorList[pramas.dataIndex];
              },
            },
            data: [100, 200, 500, 300, 600, 700, 400],
            label: {
              show: false,
              formatter: "{c}",
              position: "top",
            },
          },
        ],
      });
    },
    // 总体概况柱状图
    drawGeneralBar() {
      let myChart = this.$echarts.init(document.getElementById("general-bar"));
      myChart.setOption({
        // title: {
        //   text: "产值比例",
        //   x: "18",
        //   y: "16",
        //   textStyle: {
        //     color: "#FFF",
        //   },
        // },
        color: [
          "#018DFF",
          "#62C5DC",
          "#1058DA",
          "#4479D8",
          "#00A2FF",
          "#22BADD",
          "#01FFDE",
        ],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: "7%",
          right: "7%",
          bottom: "5%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            axisTick: { show: false },
            // data: ["2012", "2013", "2014", ],
            //x轴颜色
            axisLine: {
              lineStyle: {
                color: "#FFFFFF",
                opacity: 0.2,
              },
            },
            // x轴的字体样式
            axisLabel: {
              show: true,
              textStyle: {
                color: "#0E8BFF",
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
            // x轴的字体样式
            axisLabel: {
              show: true,
              textStyle: {
                color: "#CCCCCC",
                fontSize: "10",
              },
            },
          },
        ],
        series: [
          {
            name: "1",
            type: "bar",
            barGap: 0,
            data: [320, 332, 301],
            itemStyle: {
              barBorderRadius: [40, 40, 1, 1],
            },
          },
          {
            name: "2",
            type: "bar",
            data: [220, 182, 191],
            itemStyle: {
              barBorderRadius: [40, 40, 1, 1],
            },
          },
          {
            name: "3",
            type: "bar",
            data: [150, 232, 201],
            itemStyle: {
              barBorderRadius: [40, 40, 1, 1],
            },
          },
          {
            name: "4",
            type: "bar",
            data: [220, 182, 191],
            itemStyle: {
              barBorderRadius: [40, 40, 1, 1],
            },
          },
          {
            name: "5",
            type: "bar",
            data: [150, 232, 201],
            itemStyle: {
              barBorderRadius: [40, 40, 1, 1],
            },
          },
        ],
      });
    },
    // 总体概况饼图
    drawPie() {
      let that = this;
      let myChart = this.$echarts.init(document.getElementById("general-pie"));
      myChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{b}: {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          bottom: -10,
          data: ["一日", "一月", "一年"],
          textStyle: {
            color: "#fff",
          },
          orient: "horizontal",
        },
        series: [
          {
            // name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            // avoidLabelOverlap: false,
            label: {
              color: "#fff",
              // position: "center",
            },
            itemStyle: {
              color: function (params) {
                var colorList = [
                  {
                    c1: "#37B9DF", //管理
                    c2: "#97D7FE",
                  },
                  {
                    c1: "#23C9FF", //实践
                    c2: "#238BFF",
                  },
                  {
                    c1: "#9700FF", //操作
                    c2: "#B07BD4",
                  },
                ];
                return new that.$echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  {
                    //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上

                    offset: 0,
                    color: colorList[params.dataIndex].c1,
                  },
                  {
                    offset: 1,
                    color: colorList[params.dataIndex].c2,
                  },
                ]);
              },
            },
            data: [
              { value: 335, name: "一日" },
              { value: 310, name: "一月" },
              { value: 234, name: "一年" },
            ],
          },
        ],
      });
    },
  },
};
</script>
