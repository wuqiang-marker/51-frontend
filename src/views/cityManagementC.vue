<template>
  <div class="wrapper-page">
    <div class="left-container">
      <div class="left-container-wrapper">
        <TitleNum :title="'今日案件'" :realData="realData"> </TitleNum>  
        <div class="economic-indicators">
          <div class="item">
            <div class="item-titleWarpper">
              <div class="title">经济指标</div>
            </div>
          </div>
          <div class="item">
            <div class="item-wrapper">
              <span class="economic-type">GDP</span>
              <span class="economic-unit">单位</span>
              <span class="economic-num">9876</span>
            </div>
          </div>
          <div class="item">
            <div class="item-wrapper">
              <span class="economic-type">一般公共预算收入</span>
              <span class="economic-unit">单位</span>
              <span class="economic-num">9876</span>
            </div>
          </div>
          <div class="item">
            <div class="item-wrapper">
              <span class="economic-type">全年支出</span>
              <span class="economic-unit">单位</span>
              <span class="economic-num">9876</span>
            </div>
          </div>
          <div class="item">
            <div class="item-wrapper">
              <span class="economic-type">预算支出</span>
              <span class="economic-unit">单位</span>
              <span class="economic-num">9876</span>
            </div>
          </div>
        </div>
        <div class="left-third-container">
          <div class="changing-trend">
            <div class="item">
              <div class="item-titleWarpper">
                <div class="title">变化趋势</div>
              </div>
            </div>
            <div class="item">
              <div class="item-titleWarpper">
                <div class="title">招商引资</div>
              </div>
            </div>
            <div class="changing-trend-container">
              <!-- 变化趋势 -->
              <div class="changing-trend-line">
                <div class="changeItem-wrapper">
                  <div id="changeItem"></div>
                </div>
              </div>
              <!-- 招商引资 -->
              <div class="attract-investment">
                <table class="attract-investment-table">
                  <thead>
                    <tr class="tr-color">
                      <th>项目名称</th>
                      <th>项目个数</th>
                      <th>名称关联</th>
                      <th>备注信息</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(attract, index) in attractTableData" :key="index">
                      <td>{{attract.name}}</td>
                      <td class="attract-num">{{attract.num}}</td>
                      <td>{{attract.contact}}</td>
                      <td class="attract-remark">{{attract.remark}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="industrial-structure">
          <div class="item">
              <div class="item-titleWarpper">
                <div class="title">产业结构</div>
              </div>
            </div>
          <div class="industrial-structure-item">
            <div id="proportion-of-output"></div>
          </div>
          <div class="industrial-structure-item">
            <div id="industrial-distribution"></div>
          </div>
          <div class="industrial-structure-item">
            <div id="changing-trend-bar"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="center-container">
      <Menu :menuTab="1"></Menu>
    </div>
    <div class="right-container">
      <div class="right-container-wrapper">
        <div class="general-situation">
          <div class="general-situation-title">
            <div class="item">
              <div class="item-titleWarpper">
                <div class="title">总体情况</div>
              </div>
            </div>
          </div>
          <div class="general-situation-wrapper">
            <div class="item">
              <div class="item-wrapper">
                <span class="economic-type">项目总个数</span>
                <span class="economic-unit">单位</span>
                <span class="economic-num">9876</span>
              </div>
            </div>
            <div class="item">
              <div class="item-wrapper">
                <span class="economic-type">总投资</span>
                <span class="economic-unit">单位</span>
                <span class="economic-num">9876</span>
              </div>
            </div>
            <div class="item">
              <div class="item-wrapper">
                <span class="economic-type">详情</span>
                <span class="economic-unit">单位</span>
                <span class="economic-num">9876</span>
              </div>
            </div>
            <div class="item">
              <div class="item-wrapper">
                <span class="economic-type">备注</span>
                <span class="economic-unit">单位</span>
                <span class="economic-num">9876</span>
              </div>
            </div>
          </div>
          <div class="middle-chart">
            <div class="middle-item">
              <div id="middle-pie"></div>
            </div>
            <div class="middle-item">
              <div id="middle-bar"></div>
            </div>
          </div>
        </div>

        <!-- 招商引资 -->
        <div class="attract-investment-wrapper">
          <div class="item">
            <div class="item-titleWarpper">
              <div class="title">招商引资</div>
            </div>
          </div>
          <div class="attract-investment">
            <table class="attract-investment-table">
              <thead>
                <tr class="tr-color">
                  <th>项目名称</th>
                  <th>项目个数</th>
                  <th>名称关联</th>
                  <th>备注信息</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(attract, index) in attractTableData" :key="index">
                  <td>{{attract.name}}</td>
                  <td class="attract-num">{{attract.num}}</td>
                  <td>{{attract.contact}}</td>
                  <td class="attract-remark">{{attract.remark}}</td>
                </tr>
              </tbody>
            </table>
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
      .economic-indicators {
        margin-top: 2vh;
        height: 10vh;
        border-bottom: 0.1vh solid #539ee6;
        padding-bottom: 1vh;
        .item {
          float: left;
          width: 20%;
          height: 100%;

          .item-titleWarpper {
            height: 100%;
            display: flex;
            align-items: center;
          }
          .item-wrapper {
            position: relative;
            height: 100%;
            text-align: center;
            max-width: 150px;
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
      .general-situation {
        margin-top: 3.8vh;
        height: 52vh;
        border-bottom: 0.1vh solid #539ee6;
        .general-situation-wrapper {
          height: 16vh;
          margin-top: 2vh;
          .item {
            float: left;
            width: 25%;
            height: 100%;

            .item-wrapper {
              position: relative;
              height: 100%;
              max-width: 150px;
              text-align: center;
              background-image: url("../assets/image/rect.png");
              background-repeat: no-repeat;
              margin: 0 auto;
              // background-size: 100% 100%;
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
                font-size: 3vh;
              }
            }
          }
        }
        .middle-chart {
          height: 32vh;
          .middle-item {
            display: inline-block;
            width: 50%;
            height: 100%;
            #middle-pie {
              height: 100%;
            }
            #middle-bar {
              height: 94%;
            }
          }
        }
      }
      .attract-investment-wrapper {
        margin-top: 2vh;
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
  name: "cityManagementPage",
  components: { Menu,TitleNum },
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
      realData:{
        emailNum:'11',
        phoneNum:'200',
        netNum:'200',
        warningNum:'200',
      }
    };
  },
  mounted() {
    this.trend();
    this.drawProportionOfOutputBar();
    this.drawIndustrialDistributionBar();
    this.drawChangingTrendBar();
    this.drawPie();
    this.drawMiddleBar();
  },
  methods: {
    trend() {
      let myChart = this.$echarts.init(document.getElementById("changeItem"));
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
    //产值比例柱状图
    drawProportionOfOutputBar() {
      let myChart = this.$echarts.init(document.getElementById("proportion-of-output"));
      myChart.setOption({
        title: {
          text: "产值比例",
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
    //产业分布柱状图
    drawIndustrialDistributionBar() {
      let myChart = this.$echarts.init(document.getElementById("industrial-distribution"));
      myChart.setOption({
        title: {
          text: "产业分布",
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
    //变化趋势柱状图
    drawChangingTrendBar() {
      let myChart = this.$echarts.init(document.getElementById("changing-trend-bar"));
      myChart.setOption({
        title: {
          text: "变化趋势",
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
    drawPie() {
      let myChart = this.$echarts.init(document.getElementById("middle-pie"));
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
        tooltip: {
          trigger: "item",
          formatter: "{b} : {c} ({d}%)",
          // formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
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
                  formatter: "{b}:{c}",
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
    drawMiddleBar() {
      let myChart = this.$echarts.init(document.getElementById("middle-bar"));
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
  },
};
</script>
