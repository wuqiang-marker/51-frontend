<template>
  <div class="wrapper-page">
    <!-- 左面部分 -->
    <div class="left-container">
      <div class="left-container-wrapper">
        <TitleNum :title="'今日案件'" :realData="realData"></TitleNum>
        <!-- 党员发展 -->
        <div class="communist-party">
          <div class="communist-party-wrapper">
            <div class="item">
              <div class="item-titleWarpper">
                <div class="title">党员发展</div>
              </div>
            </div>
            <div class="communist-party-item">
              <div class="item">
                <div class="item-wrapper">
                  <span class="economic-type">数量</span>
                  <span class="economic-unit">个</span>
                  <span class="economic-num">65</span>
                </div>
              </div>
              <div class="item">
                <div class="item-wrapper">
                  <span class="economic-type">党支部数量</span>
                  <span class="economic-unit">个</span>
                  <span class="economic-num">6.15</span>
                </div>
              </div>
              <div class="item">
                <div class="item-wrapper">
                  <span class="economic-type">男女比例</span>
                  <span class="economic-unit"></span>
                  <span class="economic-num">6:5</span>
                </div>
              </div>
            </div>
          </div>
          <!-- 党员发展图表 -->
          <div class="communist-party-echart">
            <div id="communist-party-line"></div>
            <div id="communist-party-communistAge-pie"></div>
            <div id="communist-party-age-pie"></div>
          </div>
        </div>
        <div class="party-bar">
          <div class="party-bar-title">
            <div class="item">
              <div class="item-titleWarpper">
                <div class="title">学历分布</div>
              </div>
            </div>
            <div class="item">
              <div class="item-titleWarpper">
                <div class="title">民族分布</div>
              </div>
            </div>
          </div>
          <div class="party-bar-content">
            <div id="education-bar"></div>
            <div id="nation-bar"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 中间部分 -->
    <div class="center-container">
      <Menu :menuTab="7"></Menu>
    </div>
    <!-- 右侧部分 -->
    <div class="right-container">
      <div class="right-container-wrapper">
        <!-- 民生关注 -->
        <div class="people-concerns-wrapper">
          <div class="people-wrapper">
            <div class="item">
              <div class="item-titleWarpper">
                <div class="title">民生关注</div>
              </div>
            </div>
            <div class="people-item">
              <div class="item">
                <div class="item-wrapper">
                  <span class="economic-type">舆情总数</span>
                  <span class="economic-unit">个</span>
                  <span class="economic-num">65</span>
                </div>
              </div>
              <div class="item">
                <div class="item-wrapper">
                  <span class="economic-type">非负面</span>
                  <span class="economic-unit">个</span>
                  <span class="economic-num">15</span>
                </div>
              </div>
              <div class="item">
                <div class="item-wrapper">
                  <span class="economic-type">负面</span>
                  <span class="economic-unit">个</span>
                  <span class="economic-num">65</span>
                </div>
              </div>
              <div class="item">
                <div class="item-wrapper">
                  <span class="economic-type">负面舆情率</span>
                  <span class="economic-unit">%</span>
                  <span class="economic-num">6.15</span>
                </div>
              </div>
            </div>
          </div>
          <!-- 民生关注图表 -->
          <div class="people-echart">
            <div id="people-echart-pie"></div>
            <div id="people-echart-bar"></div>
          </div>
        </div>
        <!-- 关注热点 舆情来源-->
        <div class="radar-title">
          <div class="item">
            <div class="item-titleWarpper">
              <div class="title">关注热点</div>
            </div>
          </div>
          <div class="item">
            <div class="item-titleWarpper">
              <div class="title">舆情来源</div>
            </div>
          </div>
        </div>
        <div class="radar-wrapper">
          <div id="radar-follow"></div>
          <div id="radar-from"></div>
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
      .communist-party {
        height: 46vh;
        border-bottom: 0.1vh solid #539ee6;
        .communist-party-wrapper {
          height: 14vh;

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
          .communist-party-item {
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .item {
              height: 100%;
              flex: 1;
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
          }
        }
        .communist-party-echart {
          display: flex;
          justify-content: space-around;
          margin-top: 3vh;

          #communist-party-line,
          #communist-party-communistAge-pie,
          #communist-party-age-pie {
            flex: 1;
            height: 24vh;
          }
        }
      }
      .party-bar {
        .party-bar-title {
          display: flex;
          justify-content: space-around;
          margin-top: 2vh;
          .item {
            flex: 1;
          }
        }
        .party-bar-content {
          display: flex;
          justify-content: space-around;
          #education-bar,
          #nation-bar {
            flex: 1;
            height: 28vh;
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
      .people-concerns-wrapper {
        height: 56vh;
        border-bottom: 0.1vh solid #539ee6;
        .people-wrapper {
          height: 14vh;
          margin-top: 2vh;

          .item {
            display: block;
            .item-titleWarpper {
              height: 100%;
              display: flex;
              align-items: center;
            }
          }
          .people-item {
            height: 10vh;
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-top: 2vh;
            .item {
              height: 100%;
              flex: 1;
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
          }
        }
        .people-echart {
          display: flex;
          justify-content: space-around;
          #people-echart-pie,
          #people-echart-bar {
            flex: 1;
            height: 40vh;
          }
        }
      }
      .radar-title {
        display: flex;
        justify-content: space-around;
        margin-top: 2vh;
        .item {
          flex: 1;
        }
      }
      .radar-wrapper {
        display: flex;
        justify-content: space-around;
        #radar-follow,
        #radar-from {
          flex: 1;
          height: 24vh;
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
  name: "goodGovernance",
  components: { Menu, TitleNum },
  data() {
    return {
      line: null,
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
    this.trend();
    this.drawCommunistAgePie();
    this.drawCommunistPartyAgePie();
    this.drawEducationBar();
    this.drawNationBar();
    this.drawPeopleBar();
    this.drawPeoplePie();
    this.drawRadarFollow();
    this.drawRadarFrom();
  },
  methods: {
    // 变化趋势折线图
    trend() {
      let myChart = this.$echarts.init(
        document.getElementById("communist-party-line")
      );
      myChart.setOption({
        legend: {
          data: ["示例一", "示例二"],
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
              show: false,
            },
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月",
            ],
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
            name: "示例一",
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
            name: "示例二",
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
        ],
      });
    },
    // 党龄分布
    drawCommunistAgePie() {
      let that = this;
      let myChart = this.$echarts.init(
        document.getElementById("communist-party-communistAge-pie")
      );
      myChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{b}: {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          bottom: 0,
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
    // 年龄分布
    drawCommunistPartyAgePie() {
      let that = this;
      let myChart = this.$echarts.init(
        document.getElementById("communist-party-age-pie")
      );
      myChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{b}: {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          bottom: 0,
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
    // 学历分布柱状图
    drawEducationBar() {
      let myChart = this.$echarts.init(document.getElementById("education-bar"));
      myChart.setOption({
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
              color:function(pramas){
                let colorList = ['#018DFF','#62C5DC','#1058DA','#4479D8','#00A2FF','#22BADD','#01FFDE'];
                return colorList[pramas.dataIndex]
              }
            },
            data:[100,200,500,300,600,700,400],
            label: {
              show: false,
              formatter: "{c}",
              position: "top",
            },
          },
        ],
      });
    },
    // 民族分布柱状图
    drawNationBar() {
      let myChart = this.$echarts.init(document.getElementById("nation-bar"));
      myChart.setOption({
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
              color:function(pramas){
                let colorList = ['#018DFF','#62C5DC','#1058DA','#4479D8','#00A2FF','#22BADD','#01FFDE'];
                return colorList[pramas.dataIndex]
              }
            },
            data:[100,200,500,300,600,700,400],
            label: {
              show: false,
              formatter: "{c}",
              position: "top",
            },
          },
        ],
      });
    },
    // 民生关注柱状图
    drawPeopleBar() {
      let myChart = this.$echarts.init(
        document.getElementById("people-echart-bar")
      );
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
          bottom: "25%",
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
    // 民生关注饼图
    drawPeoplePie() {
      let that = this;
      let myChart = this.$echarts.init(
        document.getElementById("people-echart-pie")
      );
      myChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{b}: {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          bottom: 0,
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
    // 关注热点雷达图
    drawRadarFollow() {
      let myChart = this.$echarts.init(document.getElementById("radar-follow"));
      myChart.setOption({
        // title: {
        //   text: "多雷达图",
        // },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          left: "20",
          data: ["1", "2", "3", "4", "5"],
        },
        radar: {
          indicator: [
            { text: "市政", max: 100 },
            { text: "医疗", max: 100 },
            { text: "工资", max: 100 },
            { text: "性能", max: 100 },
            { text: "屏幕", max: 100 },
          ],
          radius: 80,
          center: ["50%", "60%"],
          splitArea: {
            show: false,
          },
          splitLine: {
            show: true,
            lineStyle: {
              width: 1,
              color: "#8599A5", // 设置网格的颜色
            },
          },
        },

        series: {
          type: "radar",
          symbol: "none",
          data: [
            {
              value: [85, 70, 90, 35, 95],
              name: "一",
              itemStyle: {
                color: "rgb(79, 75, 219)",
              },
              areaStyle: {
                opacity: 0.2,
              },
            },
            {
              value: [95, 8, 65, 80, 63],
              name: "二",
              itemStyle: {
                color: "rgb(0,191,223)",
              },
              areaStyle: {
                opacity: 0.2,
              },
            },
            {
              value: [85, 98, 35, 10, 93],
              name: "二",
              itemStyle: {
                color: "rgb(109,91,191)",
              },
              areaStyle: {
                opacity: 0.2,
              },
            },
          ],
        },
      });
    },
    // 舆情来源雷达图
    drawRadarFrom() {
      let myChart = this.$echarts.init(document.getElementById("radar-from"));
      myChart.setOption({
        tooltip: {
          trigger: "axis",
        },
        legend: {
          left: "60",
          data: ["1", "2", "3", "4", "5"],
        },
        radar: {
          indicator: [
            { text: "网络", max: 100 },
            { text: "报纸", max: 100 },
            { text: "电话", max: 100 },
            { text: "微信", max: 100 },
            { text: "屏幕", max: 100 },
          ],
          radius: 80,
          center: ["50%", "60%"],
          splitArea: {
            show: false,
          },
          splitLine: {
            show: true,
            lineStyle: {
              width: 1,
              color: "#8599A5", // 设置网格的颜色
            },
          },
        },

        series: {
          type: "radar",
          symbol: "none",
          data: [
            {
              value: [85, 70, 90, 35, 95],
              name: "一",
              itemStyle: {
                color: "rgb(35,133,233)",
              },
              areaStyle: {
                opacity: 0.2,
              },
            },
            {
              value: [95, 8, 65, 80, 63],
              name: "二",
              itemStyle: {
                color: "rgb(105,73,219)",
              },
              areaStyle: {
                opacity: 0.2,
              },
            },
            {
              value: [85, 98, 35, 10, 93],
              name: "三",
              itemStyle: {
                color: "rgb(0,191,223)",
              },
              areaStyle: {
                opacity: 0.2,
              },
            },
            {
              value: [15, 58, 35, 70, 93],
              name: "四",
              itemStyle: {
                color: "rgb(109,91,191)",
              },
              areaStyle: {
                opacity: 0.2,
              },
            },
          ],
        },
      });
    },
    // 雷达图
    drawPollutePieFir() {
      let myChart = this.$echarts.init(
        document.getElementById("pollution-bar-fir")
      );
      myChart.setOption({
        // title: {
        //   text: "多雷达图",
        // },
        tooltip: {
          trigger: "axis",
        },
        legend: [
          {
            left: "20",
            data: ["1", "2", "3", "4", "5"],
          },
          {
            left: "60",
            data: ["1", "2", "3", "4", "5"],
          },
        ],
        radar: [
          {
            indicator: [
              { text: "市政", max: 100 },
              { text: "医疗", max: 100 },
              { text: "工资", max: 100 },
              { text: "性能", max: 100 },
              { text: "屏幕", max: 100 },
            ],
            radius: 80,
            center: ["30%", "50%"],
            splitArea: {
              show: false,
            },
            splitLine: {
              show: true,
              lineStyle: {
                width: 1,
                color: "#8599A5", // 设置网格的颜色
              },
            },
          },
          {
            indicator: [
              { text: "网络", max: 100 },
              { text: "报纸", max: 100 },
              { text: "电话", max: 100 },
              { text: "微信", max: 100 },
              { text: "屏幕", max: 100 },
            ],
            radius: 80,
            center: ["80%", "50%"],
            splitArea: {
              show: false,
            },
            splitLine: {
              show: true,
              lineStyle: {
                width: 1,
                color: "#8599A5", // 设置网格的颜色
              },
            },
          },
        ],

        series: [
          {
            type: "radar",
            symbol: "none",
            data: [
              {
                value: [85, 70, 90, 35, 95],
                name: "一",
                itemStyle: {
                  color: "rgb(79, 75, 219)",
                },
                areaStyle: {
                  opacity: 0.2,
                },
              },
              {
                value: [95, 8, 65, 80, 63],
                name: "二",
                itemStyle: {
                  color: "rgb(0,191,223)",
                },
                areaStyle: {
                  opacity: 0.2,
                },
              },
              {
                value: [85, 98, 35, 10, 93],
                name: "二",
                itemStyle: {
                  color: "rgb(109,91,191)",
                },
                areaStyle: {
                  opacity: 0.2,
                },
              },
            ],
          },
          {
            type: "radar",
            symbol: "none",
            radarIndex: 1,
            data: [
              {
                value: [85, 70, 90, 35, 95],
                name: "一",
                itemStyle: {
                  color: "rgb(35,133,233)",
                },
                areaStyle: {
                  opacity: 0.2,
                },
              },
              {
                value: [95, 8, 65, 80, 63],
                name: "二",
                itemStyle: {
                  color: "rgb(105,73,219)",
                },
                areaStyle: {
                  opacity: 0.2,
                },
              },
              {
                value: [85, 98, 35, 10, 93],
                name: "三",
                itemStyle: {
                  color: "rgb(0,191,223)",
                },
                areaStyle: {
                  opacity: 0.2,
                },
              },
              {
                value: [15, 58, 35, 70, 93],
                name: "四",
                itemStyle: {
                  color: "rgb(109,91,191)",
                },
                areaStyle: {
                  opacity: 0.2,
                },
              },
            ],
          },
        ],
      });
    },
  },
};
</script>
