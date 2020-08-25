<template>
  <div class="wrapper-page">
    <div class="left-container">
      <div class="left-container-wrapper">
        <div class="today-case">
          <div class="item">
            <div class="item-titleWarpper">
              <div class="title">今日案件</div>
            </div>
          </div>
          <div class="item">
            <div class="case-img">
              <img src="../assets/image/email.png" alt />
            </div>
            <div class="case-right">
              <div class="case-type">信件</div>
              <div class="case-num">
                <span class="num">200</span>
                <span class="unit">类</span>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="case-img">
              <img src="../assets/image/phone.png" alt />
            </div>
            <div class="case-right">
              <div class="case-type">通信</div>
              <div class="case-num">
                <span class="num">200</span>
                <span class="unit">类</span>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="case-img">
              <img src="../assets/image/net.png" alt />
            </div>
            <div class="case-right">
              <div class="case-type">互联网</div>
              <div class="case-num">
                <span class="num">200</span>
                <span class="unit">类</span>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="case-img">
              <img src="../assets/image/warning.png" alt />
            </div>
            <div class="case-right">
              <div class="case-type">预警</div>
              <div class="case-num">
                <span class="num">200</span>
                <span class="unit">类</span>
              </div>
            </div>
          </div>
        </div>
        <div class="economic-indicators">
          <div class="item">
            <div class="item-titleWarpper">
              <div class="title">案件概况</div>
            </div>
          </div>
          <div class="item">
            <div class="item-wrapper">
              <span class="economic-type">上报数量</span>
              <span class="economic-unit">个</span>
              <span class="economic-num">100</span>
            </div>
          </div>
          <div class="item">
            <div class="item-wrapper">
              <span class="economic-type">受理数量</span>
              <span class="economic-unit">个</span>
              <span class="economic-num">100</span>
            </div>
          </div>
          <div class="item">
            <div class="item-wrapper">
              <span class="economic-type">结案数量</span>
              <span class="economic-unit">个</span>
              <span class="economic-num">90</span>
            </div>
          </div>
          <div class="item">
            <div class="item-wrapper">
              <span class="economic-type">待处理</span>
              <span class="economic-unit">个</span>
              <span class="economic-num">10</span>
            </div>
          </div>
        </div>
        <div class="economic-indicators">
          <div class="item">
            <div class="item-titleWarpper">
              <div class="title">案件来源</div>
            </div>
          </div>
          <div class="item">
            <div class="item-wrapper">
              <span class="economic-type">12345热线</span>
              <span class="economic-unit">个</span>
              <span class="economic-num">70</span>
            </div>
          </div>
          <div class="item">
            <div class="item-wrapper">
              <span class="economic-type">自发自处</span>
              <span class="economic-unit">个</span>
              <span class="economic-num">10</span>
            </div>
          </div>
          <div class="item">
            <div class="item-wrapper">
              <span class="economic-type">巡查上报</span>
              <span class="economic-unit">个</span>
              <span class="economic-num">10</span>
            </div>
          </div>
          <div class="item">
            <div class="item-wrapper">
              <span class="economic-type">其它</span>
              <span class="economic-unit">个</span>
              <span class="economic-num">10</span>
            </div>
          </div>
        </div>
        <div class="left-third-container">
          <div class="table-box">
            <table class="attract-investment-table">
              <thead>
                <tr class="tr-color">
                  <th>案件编号</th>
                  <th>案件类型</th>
                  <th>上报时间</th>
                  <th>处理进度</th>
                </tr>
              </thead>
            </table>
          </div>
          <div class="tbody-box">
            <div class="table-tbody">
              <table class="attract-investment-table">
                <tbody>
                  <tr v-for="(attract, index) in attractTableData" :key="index">
                    <td>{{attract.name}}</td>
                    <td>{{attract.num}}</td>
                    <td>{{attract.contact}}</td>
                    <td>{{attract.remark}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="center-container">
      <Menu :menuTab="1"></Menu>
    </div>
    <div class="right-container">
      <div class="right-container-wrapper">
        <div class="today-case">
          <div class="item">
            <div class="item-titleWarpper">
              <div class="title">重点工作</div>
            </div>
          </div>
          <div class="item">
            <div class="case-img">
              <img src="../assets/image/email.png" alt />
            </div>
            <div class="case-right">
              <div class="case-type">信件</div>
              <div class="case-num">
                <span class="num">200</span>
                <span class="unit">类</span>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="case-img">
              <img src="../assets/image/phone.png" alt />
            </div>
            <div class="case-right">
              <div class="case-type">通信</div>
              <div class="case-num">
                <span class="num">200</span>
                <span class="unit">类</span>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="case-img">
              <img src="../assets/image/net.png" alt />
            </div>
            <div class="case-right">
              <div class="case-type">互联网</div>
              <div class="case-num">
                <span class="num">200</span>
                <span class="unit">类</span>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="case-img">
              <img src="../assets/image/warning.png" alt />
            </div>
            <div class="case-right">
              <div class="case-type">预警</div>
              <div class="case-num">
                <span class="num">200</span>
                <span class="unit">类</span>
              </div>
            </div>
          </div>
        </div>
        <div class="left-third-container">
          <div class="changing-trend">
            <div class="item">
              <div class="item-titleWarpper">
                <div class="title">趋势分析</div>
                <div class="title-right">街道排名</div>
              </div>
            </div>
            <div class="changing-trend-container">
              <div class="changing-trend-line">
                <div class="changeItem-wrapper">
                  <div id="city-line"></div>
                </div>
              </div>
              <div class="attract-investment-right">
                <table class="attract-investment-table">
                  <thead>
                    <tr class="tr-color">
                      <th>上报来源</th>
                      <th>受理数量</th>
                      <th>结案数量</th>
                      <th>特殊备注</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(attract, index) in attractRightTableData" :key="index">
                      <td>{{attract.reportSource}}</td>
                      <td class="attract-num">{{attract.aceptedQuantity}}</td>
                      <td>{{attract.casesClosed}}</td>
                      <td class="attract-remark">{{attract.specialRemarks}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="industrial-structure">
          <div class="changing-trend">
            <div class="item">
              <div class="item-titleWarpper">
                <div class="title">频发时间分析</div>
                <div class="title-middle-right">办结情况</div>
              </div>
            </div>
            <div class="changing-trend-container">
              <!-- 招商引资 -->
              <div class="changing-trend-line">
                <div class="changeItem-wrapper">
                  <div id="city-pie"></div>
                </div>
              </div>

              <div class="attract-investment-middle-right">
                <table class="attract-investment-table">
                  <thead>
                    <tr class="tr-color">
                      <th>上报来源</th>
                      <th>受理数量</th>
                      <th>结案数量</th>
                      <th>特殊备注</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(attract, index) in attractRightTableData" :key="index">
                      <td>{{attract.reportSource}}</td>
                      <td class="attract-num">{{attract.aceptedQuantity}}</td>
                      <td>{{attract.casesClosed}}</td>
                      <td class="attract-remark">{{attract.specialRemarks}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
//表格
table {
  width: 100%;
  color: #fff;
  border-collapse: separate;
  border-spacing: 0 1vh;
  .tr-color {
    background-color: rgba(0, 169, 255, 0.4);
  }
  thead {
    tr {
      height: 2.8vh;
      th {
        color: #d2eaff;
      }
    }
  }

  tbody {
    tr {
      background-color: rgba(0, 169, 255, 0.21);
      height: 3vh;
      td {
        text-align: center;
      }
    }
  }
}
.wrapper-page {
  .left-container {
    .left-container-wrapper {
      padding: 0 3vh;
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
        height: 50vh;
        overflow: hidden;
        position: relative;
        .table-box {
          width: 100%;
          top: 0;
          left: 0;
        }
        .tbody-box {
          width: 100%;
          height: 100%;
          overflow: hidden;
          position: absolute;
          .table-tbody {
            width: 100%;
            top: 0;
            left: 0;
            position: absolute;
            .attract-investment-table {
              height: 100%;
              tr {
                text-align: center;
                td {
                  width: 25%;
                }
              }
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
      //标题
      .title {
        color: #fff;
        padding: 0 1vh;
        border-left: 0.1vh solid yellow;
        border-right: 0.1vh solid yellow;
        display: inline-block;
      }
    }
  }
  .right-container {
    .right-container-wrapper {
      padding: 0 3vh;
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

      .left-third-container,
      .industrial-structure {
        margin-top: 2vh;
        border-bottom: 0.1vh solid #539ee6;
        .changing-trend {
          margin-bottom: 1vh;
          .item-titleWarpper {
            height: 100%;
            display: flex;
            align-items: center;
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
              .changeItem-wrapper {
                height: 100%;
                #city-pie,
                #city-line {
                  padding: 1vh;
                  height: 100%;
                }
              }
            }
          }
          .attract-investment-right {
            display: inline-block;
            width: 49%;
            height: 100%;
            margin-left: 1%;
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
          .attract-investment-middle-right {
            display: inline-block;
            width: 49%;
            height: 100%;
            margin-left: 1%;
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
          .attract-investment-left {
            display: inline-block;
            width: 50%;
            height: 100%;
            #middle-line {
              height: 94%;
            }
          }
        }
      }

      .community-management {
        margin-top: 2vh;
        border-bottom: 0.1vh solid #539ee6;
        .community-management-box {
          margin-bottom: 1vh;
          .item-titleWarpper {
            height: 100%;
            display: flex;
            align-items: center;
          }
          .attract-investment-right {
            display: inline-block;
            width: 100%;
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
        height: 37vh;
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
      //标题
      .title {
        color: #fff;
        padding: 0 1vh;
        border-left: 0.1vh solid yellow;
        border-right: 0.1vh solid yellow;
        display: inline-block;
      }
      //标题
      .title-right {
        color: #fff;
        padding: 0 1vh;
        border-left: 0.1vh solid yellow;
        border-right: 0.1vh solid yellow;
        display: inline-block;
        margin-left: 39%;
      }
      //标题
      .title-middle-right {
        color: #fff;
        padding: 0 1vh;
        border-left: 0.1vh solid yellow;
        border-right: 0.1vh solid yellow;
        display: inline-block;
        margin-left: 37%;
      }
    }
  }
}
</style>
<script>
import Menu from "@/components/bi/menu/menu";
import $ from "jquery";
export default {
  components: {
    Menu,
  },
  data() {
    return {
      attractTableData: [
        {
          name: "01",
          num: "民事纠纷",
          contact: "13:01",
          remark: "已完成",
        },
        {
          name: "02",
          num: "民事纠纷",
          contact: "13:01",
          remark: "已完成",
        },
        {
          name: "03",
          num: "民事纠纷",
          contact: "13:01",
          remark: "已完成",
        },
        {
          name: "04",
          num: "民事纠纷",
          contact: "13:01",
          remark: "已完成",
        },
        {
          name: "05",
          num: "民事纠纷",
          contact: "13:01",
          remark: "已完成",
        },
        {
          name: "06",
          num: "民事纠纷",
          contact: "13:01",
          remark: "已完成",
        },
        {
          name: "07",
          num: "民事纠纷",
          contact: "13:01",
          remark: "已完成",
        },
        {
          name: "08",
          num: "民事纠纷",
          contact: "13:01",
          remark: "已完成",
        },
        {
          name: "09",
          num: "民事纠纷",
          contact: "13:01",
          remark: "已完成",
        },
        {
          name: "10",
          num: "民事纠纷",
          contact: "13:01",
          remark: "已完成",
        },
        {
          name: "11",
          num: "民事纠纷",
          contact: "13:01",
          remark: "已完成",
        },
        // {
        //   name: "12",
        //   num: "民事纠纷",
        //   contact: "13:01",
        //   remark: "已完成",
        // },
        // {
        //   name: "13",
        //   num: "民事纠纷",
        //   contact: "13:01",
        //   remark: "已完成",
        // },
        // {
        //   name: "14",
        //   num: "民事纠纷",
        //   contact: "13:01",
        //   remark: "已完成",
        // },
      ],
      attractRightTableData: [
        {
          reportSource: "01街道",
          aceptedQuantity: "20",
          casesClosed: "10",
          specialRemarks: "无",
        },
        {
          reportSource: "01街道",
          aceptedQuantity: "30",
          casesClosed: "20",
          specialRemarks: "无",
        },
        {
          reportSource: "01街道",
          aceptedQuantity: "40",
          casesClosed: "30",
          specialRemarks: "无",
        },
      ],
      populationData: [
        {
          total: "200",
          houseNum: "200",
          localPopulation: "200",
          outPopulation: "200",
        },
      ],
      MyMarhq: "",
    };
  },
  mounted() {
    this.$nextTick(function () {
      // this.init();
      this.makeLine();
      this.makePie();
    });
  },
  methods: {
    makePie() {
      let myChart = this.$echarts.init(document.getElementById("city-pie"));
      myChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          left: "center",
          top: "300",
          data: ["rose1", "rose2", "rose3"],
          textStyle: {
            color: "#ffffff",
          },
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: {
              show: true,
              type: ["pie", "funnel"],
            },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        series: [
          {
            type: "pie",
            radius: [80, 110],
            center: ["50%", "40%"],
            roseType: "radius",
            label: {
              show: false,
            },
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: "{b} : {c} ({d}%)",
                },
                labelLine: { show: true },
              },
            },
            emphasis: {
              label: {
                show: true,
              },
            },
            data: [
              { value: 10, name: "rose1" },
              { value: 5, name: "rose2" },
              { value: 15, name: "rose3" },
            ],
          },
        ],
      });
    },
    makeLine() {
      let myChart = this.$echarts.init(document.getElementById("city-line"));
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
    init() {
      var that = this;
      var newData = $(".tbody-box tbody").html($(".tbody-box tbody").html());

      clearInterval(this.MyMarhq);
      if (that.attractTableData.length > 10) {
        $(".table-tbody").css("top", "0");
        var tblTop = 0;
        var speedhq = 50; // 数值越大越慢
        var outerHeight = $(".table-tbody tbody").find("tr").outerHeight();
        function Marqueehq() {
          if (tblTop <= -outerHeight * that.attractTableData.length) {
            tblTop = 0;
          } else {
            tblTop -= 1;
          }
          $(".table-tbody").css("top", tblTop + "px");
        }

        that.MyMarhq = setInterval(Marqueehq, speedhq);

        // 鼠标移上去取消事件
        $(".table-box tbody").hover(
          function () {
            clearInterval(that.MyMarhq);
          },
          function () {
            clearInterval(that.MyMarhq);
            that.MyMarhq = setInterval(Marqueehq, speedhq);
          }
        );
      }
    },
  },
};
</script>