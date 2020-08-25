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
                <div class="title">企业概况</div>
              </div>
            </div>
            <div class="changing-trend-container">
              <div class="item">
                <div class="item-wrapper">
                  <span class="economic-type">危化品企业数量</span>
                  <span class="economic-unit">个</span>
                  <span class="economic-num">100</span>
                </div>
              </div>
              <div class="item">
                <div class="item-wrapper">
                  <span class="economic-type">工商贸企业数量</span>
                  <span class="economic-unit">个</span>
                  <span class="economic-num">100</span>
                </div>
              </div>
              <!-- 招商引资 -->
              <div class="attract-investment">
                <table class="attract-investment-table">
                  <thead>
                    <tr class="tr-color">
                      <th>企业名称</th>
                      <th>企业位置</th>
                      <th>企业类型</th>
                      <th>重大危险源情况</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(attract, index) in attractTableData" :key="index">
                      <td>{{attract.enterpriseName}}</td>
                      <td class="attract-num">{{attract.enterpriseLocation}}</td>
                      <td>{{attract.enterpriseType}}</td>
                      <td class="attract-remark">{{attract.MajorHazardSources}}</td>
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
                <div class="title">网格员分布</div>
              </div>
            </div>
            <div class="changing-trend-container">
              <!-- 招商引资 -->
              <div class="attract-investment-bottom">
                <table class="attract-investment-table">
                  <thead>
                    <tr class="tr-color">
                      <th>街道名称</th>
                      <th>网格员数量</th>
                      <th>注册用户</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(attract, index) in headerTableData" :key="index">
                      <td>{{attract.streetName}}</td>
                      <td class="attract-num">{{attract.gridMembersNumber}}</td>
                      <td>{{attract.RegisteredUsers}}</td>
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
      <Menu :menuTab="2"></Menu>
    </div>
    <div class="right-container">
      <div class="right-container-wrapper">
        <div class="industrial-structure-header">
          <div class="changing-trend">
            <div class="item">
              <div class="item-titleWarpper">
                <div class="title">应急仓库救援</div>
              </div>
            </div>
            <div class="changing-trend-container">
              <!-- 招商引资 -->
              <div class="attract-investment-right">
                <table class="attract-investment-table">
                  <thead>
                    <tr class="tr-color">
                      <th>物资仓库</th>
                      <th>类别</th>
                      <th>来源</th>
                      <th>坏损</th>
                      <th>备注</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(attract, index) in contingencyTableData" :key="index">
                      <td>{{attract.materialwarehouse}}</td>
                      <td class="attract-num">{{attract.type}}</td>
                      <td>{{attract.from}}</td>
                      <td class="attract-remark">{{attract.badDamage}}</td>
                      <td class="attract-remark">{{attract.remarks}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="industrial-structure-header">
          <div class="changing-trend">
            <div class="item">
              <div class="item-titleWarpper">
                <div class="title">应急队伍</div>
              </div>
            </div>
            <div class="changing-trend-container">
              <div class="attract-investment-right">
                <table class="attract-investment-table">
                  <thead>
                    <tr class="tr-color">
                      <th>队伍名称</th>
                      <th>联系人</th>
                      <th>联系电话</th>
                      <th>队伍类型</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(attract, index) in teamTableData" :key="index">
                      <td>{{attract.teamName}}</td>
                      <td class="attract-num">{{attract.name}}</td>
                      <td>{{attract.phone}}</td>
                      <td class="attract-remark">{{attract.type}}</td>
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
                <div class="title">防灾减灾</div>
                <div class="title-middle-right">近三年安全生产事故</div>
              </div>
            </div>
            <div class="changing-trend-container">
              <!-- 招商引资 -->
              <div class="changing-trend-line">
                <div class="changeItem-wrapper">
                  <div id="cm-line"></div>
                </div>
              </div>
              <div class="changing-trend-line-right">
                <div class="item">
                  <div class="item-wrapper">
                    <span class="economic-type">时间名称</span>
                    <span class="economic-unit"></span>
                    <span class="economic-num">001</span>
                  </div>
                </div>
                <div class="item">
                  <div class="item-wrapper">
                    <span class="economic-type">位置</span>
                    <span class="economic-unit"></span>
                    <span class="economic-num">香河园</span>
                  </div>
                </div>
                <div class="item-bottom">
                  <div class="item-wrapper">
                    <span class="economic-type">详情</span>
                    <span class="economic-unit"></span>
                    <span class="economic-num">点击查看</span>
                  </div>
                </div>
                <div class="item-bottom">
                  <div class="item-wrapper">
                    <span class="economic-type">备注</span>
                    <span class="economic-unit"></span>
                    <span class="economic-num">无</span>
                  </div>
                </div>
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
          height: 35vh;
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
        .item {
          float: left;
          width: 30%;
          height: 30%;

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
        .attract-investment {
          display: inline-block;
          width: 100%;
          height: 77%;
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
        .attract-investment-bottom {
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
  }
  .center-container {
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
      .industrial-structure-header {
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
            margin-top: 1vh;
            height: 22vh;
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
            .changing-trend-line-right {
              display: inline-block;
              width: 49%;
              height: 100%;
              .item {
                float: left;
                width: 47%;
                height: 50%;
                margin-left: 3%;

                .item-titleWarpper {
                  height: 100%;
                  display: flex;
                  align-items: center;
                }
                .item-wrapper {
                  position: relative;
                  height: 100%;
                  text-align: center;
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
                    font-size: 3vh;
                  }
                }
              }
              .item-bottom {
                float: left;
                width: 47%;
                height: 50%;
                margin-left: 3%;
                margin-top: 2%;

                .item-titleWarpper {
                  height: 100%;
                  display: flex;
                  align-items: center;
                }
                .item-wrapper {
                  position: relative;
                  height: 100%;
                  text-align: center;
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
                    font-size: 3vh;
                  }
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
        height: 32vh;
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
        margin-left: 40%;
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
          enterpriseName: "中牟化工",
          enterpriseLocation: "香河园街道",
          enterpriseType: "民营企业",
          MajorHazardSources: "暂无",
        },
        {
          enterpriseName: "中牟化工",
          enterpriseLocation: "香河园街道",
          enterpriseType: "民营企业",
          MajorHazardSources: "暂无",
        },
        {
          enterpriseName: "中牟化工",
          enterpriseLocation: "香河园街道",
          enterpriseType: "民营企业",
          MajorHazardSources: "暂无",
        },
        {
          enterpriseName: "中牟化工",
          enterpriseLocation: "香河园街道",
          enterpriseType: "民营企业",
          MajorHazardSources: "暂无",
        },
        {
          enterpriseName: "中牟化工",
          enterpriseLocation: "香河园街道",
          enterpriseType: "民营企业",
          MajorHazardSources: "暂无",
        },
      ],
      headerTableData: [
        {
          streetName: "香河园街道",
          gridMembersNumber: "100",
          RegisteredUsers: "80",
        },
        {
          streetName: "香河园街道",
          gridMembersNumber: "100",
          RegisteredUsers: "80",
        },
        {
          streetName: "香河园街道",
          gridMembersNumber: "100",
          RegisteredUsers: "80",
        },
      ],
      contingencyTableData: [
        {
          materialwarehouse: "01仓库",
          type: "A",
          from: "B",
          badDamage: "1",
          remarks: "无",
        },
        {
          materialwarehouse: "01仓库",
          type: "A",
          from: "B",
          badDamage: "1",
          remarks: "无",
        },
        {
          materialwarehouse: "01仓库",
          type: "A",
          from: "B",
          badDamage: "1",
          remarks: "无",
        },
      ],
      teamTableData: [
        {
          teamName: "01",
          name: "张三",
          phone: "01001",
          type: "A",
        },
        {
          teamName: "01",
          name: "张三",
          phone: "01001",
          type: "A",
        },
        {
          teamName: "01",
          name: "张三",
          phone: "01001",
          type: "A",
        },
        {
          teamName: "01",
          name: "张三",
          phone: "01001",
          type: "A",
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