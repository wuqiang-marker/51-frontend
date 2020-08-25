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
        <div class="left-third-container">
          <div class="changing-trend">
            <div class="item">
              <div class="item-titleWarpper">
                <div class="title">区情介绍</div>
              </div>
            </div>
            <div class="changing-trend-container">
              <!-- 招商引资 -->
              <div class="attract-investment">
                <table class="attract-investment-table">
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
                    <tr v-for="(attract, index) in attractTableData" :key="index">
                      <td>{{attract.administrativeDivision}}</td>
                      <td class="attract-num">{{attract.community}}</td>
                      <td>{{attract.administrativeVillage}}</td>
                      <td class="attract-remark">{{attract.area}}</td>
                      <td>{{attract.population}}</td>
                      <td class="attract-remark">{{attract.gdp}}</td>
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
                <div class="title">区情介绍</div>
              </div>
            </div>
            <div class="changing-trend-container">
              <!-- 招商引资 -->
              <div class="attract-investment">
                <table class="attract-investment-table">
                  <thead>
                    <tr class="tr-color">
                      <th>领导体系</th>
                      <th>运营小组</th>
                      <th>服务内容</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(attract, index) in headerTableData" :key="index">
                      <td>{{attract.leadershipSystem}}</td>
                      <td class="attract-num">{{attract.operationsTeam}}</td>
                      <td>{{attract.serviceContent}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="center-container">
      <Menu :menuTab="4"></Menu>
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
                <div class="title">蓝天保卫战</div>
                <div class="title-right">防汛指挥</div>
              </div>
            </div>
            <div class="changing-trend-container">
              <div class="changing-trend-line">
                <div class="changeItem-wrapper">
                  <div id="cm-line"></div>
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
                <div class="title">重点项目建设</div>
                <div class="title-middle-right">应急救援</div>
              </div>
            </div>
            <div class="changing-trend-container">
              <!-- 招商引资 -->
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
        <div class="economic-indicators">
          <div class="item">
            <div class="item-titleWarpper">
              <div class="title">社区总数</div>
            </div>
          </div>
          <div class="item">
            <div class="item-wrapper">
              <span class="economic-type">小区数量</span>
              <span class="economic-unit">单位</span>
              <span class="economic-num">200</span>
            </div>
          </div>
          <div class="item">
            <div class="item-wrapper">
              <span class="economic-type">房屋数量</span>
              <span class="economic-unit">单位</span>
              <span class="economic-num">200</span>
            </div>
          </div>
          <div class="item">
            <div class="item-wrapper">
              <span class="economic-type">本地人口</span>
              <span class="economic-unit">单位</span>
              <span class="economic-num">200</span>
            </div>
          </div>
          <div class="item">
            <div class="item-wrapper">
              <span class="economic-type">外地人口</span>
              <span class="economic-unit">单位</span>
              <span class="economic-num">200</span>
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

    .left-third-container,
    .industrial-structure {
      margin-top: 2vh;
      border-bottom: 0.1vh solid #539ee6;
      .changing-trend {
        margin-bottom: 2vh;
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
      height: 35vh;
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
            height: 25vh;
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
                #cm-line {
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
        height: 30vh;
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
        margin-left: 38%;
      }
    }
  }
}
</style>
<script>
import Menu from "@/components/bi/menu/menu";
export default {
  components: {
    Menu,
  },
  data() {
    return {
      attractTableData: [
        {
          administrativeDivision: "A",
          community: "01",
          administrativeVillage: "A0",
          area: "20Km²",
          population: "20万",
          gdp: "50亿",
        },
        {
          administrativeDivision: "A",
          community: "01",
          administrativeVillage: "A0",
          area: "20Km²",
          population: "20万",
          gdp: "50亿",
        },
        {
          administrativeDivision: "A",
          community: "01",
          administrativeVillage: "A0",
          area: "20Km²",
          population: "20万",
          gdp: "50亿",
        },
        {
          administrativeDivision: "A",
          community: "01",
          administrativeVillage: "A0",
          area: "20Km²",
          population: "20万",
          gdp: "50亿",
        },
        {
          administrativeDivision: "A",
          community: "01",
          administrativeVillage: "A0",
          area: "20Km²",
          population: "20万",
          gdp: "50亿",
        },
      ],
      headerTableData: [
        {
          leadershipSystem: "A",
          operationsTeam: "01",
          serviceContent: "A0",
        },
        {
          leadershipSystem: "A",
          operationsTeam: "01",
          serviceContent: "A0",
        },
        {
          leadershipSystem: "A",
          operationsTeam: "01",
          serviceContent: "A0",
        },
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
    };
  },
  mounted() {
    this.makeLine();
  },
  methods: {
    makeLine() {
      let myChart = this.$echarts.init(document.getElementById("cm-line"));
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
  },
};
</script>