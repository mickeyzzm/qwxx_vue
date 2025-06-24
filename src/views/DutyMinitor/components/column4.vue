<template>
    <PageColumnVue class="col_4_container" :width="16.665">
      <TopBlockVue title="勤务任务统计" icon="Frame09112x" />
      <div class="topSearchBtn">
        <p v-for="(item, index) in btnList" @click="handelBtn(index)" :class="{'dateTypeBtnIdx': dateTypeBtnIdx == index}" :key="index" class="btnClass">{{ item.name }}</p> 
      </div>
      <div class="col_1_w">
        <div class="rask_box">
          <div class="rask_item">任务数<span class="value">80</span></div>
          <div class="rask_item">进行中<span class="value">37</span></div>
          <div class="rask_item">已完成<span class="value">40</span></div>
          <div class="rask_item">已超时<span class="value">37</span></div>
        </div>
        <div style="width:100%; display: flex; justify-content: space-between;">
          <SubBlockVue tabs="任务类型统计" :moreShow="false" class="m_l_Box">
            <div id="m_d_p_pie_t"></div>
          </SubBlockVue> 
          <SubBlockVue tabs="部门任务完成率排名" :moreShow="false" class="m_r_Box">
            <div v-for="(item, index) in raskList" :key="index" class="rask_table">
              <p class="label">
                <img :src="item.img" alt="">
                {{ item.label }}
              </p>
              <p class="value">{{ item.value }}%</p>
            </div>
          </SubBlockVue> 
        </div>
        <SubBlockVue tabs="勤务任务处理趋势" :moreShow="false" class="lineChart">
          <div id="b_line_chart"></div>
        </SubBlockVue>
      </div>
    </PageColumnVue>
  </template>
  <script>
    import * as echarts from "echarts";
    import PageColumnVue from "@/components/layout/PageColumn";
    import SubBlockVue from "@/components/layout/SubBlock";
    import TopBlockVue from "@/components/layout/TopBlockBtn";
    export default {
      name: "Column3Com",
      components: {
        PageColumnVue,
        SubBlockVue,
        TopBlockVue,
      },
      data() {
        return {
          raskList: [
            { img: require('../../../assets/images/layout/Group1772x0.png'), label: '河北省承德市公安局双桥分局', value: 96 },
            { img: require('../../../assets/images/layout/Group1772x1.png'), label: '河北省承德市公安局双滦分局', value: 90 },
            { img: require('../../../assets/images/layout/Group1772x2.png'), label: '河北省承德市公安局警务督察支队', value: 87 },
            { img: require('../../../assets/images/layout/Group1772x3.png'), label: '河北省承德市公安局巡警支队', value: 84 },
            { img: require('../../../assets/images/layout/Group1772x4.png'), label: '河北省承德市公安局交通警察支队', value: 80 },
          ],  
          dateTypeBtnIdx: 0,
          btnList: [
            { name: '今日', value: 'today'},
            { name: '近七天', value: 'sevenDay'},
            { name: '本月', value: 'currentMonth'},
          ],
        }
      },
      computed: {
        classOption () {
          return {
            step: 0.3
          }
        }
      },
      mounted() { 
        this.pieEchart()
        this.lineEchar()
      },
      methods: {
        handelBtn (index) {
          this.dateTypeBtnIdx = index
        },
        pieEchart (id) {
          let dom = document.getElementById("m_d_p_pie_t")
          let colorList = ['#00C1FE', '#FFFF00', '#0085FF', '#00CC03', '#00CC03', '#F9CC45']
          let data = [{
            name: "应急处置",
            value: 15
          }, {
            name: "攻防演练",
            value: 10
          }, {
            name: "活动安保",
            value: 10
          }, {
            name: "信息采集",
            value: 20
          }, {
            name: "人员核查",
            value: 20
          }, {
            name: "巡控任务",
            value: 20
          }]
          let option = { 
            color: colorList,
            tooltip: {
              show: true,
              trigger: "axis",
              backgroundColor: "rgba(0, 21, 43)",
              textStyle: {
                color: '#fff',
                fontSize: 20,
              },
            },
            grid: {
              bottom: 150,
              left: 100,
              right: '10%'
            },
            legend: {
              // orient: 'vertical',
              bottom: "0%",
              left: "0%",
              itemWidth: 12,
              itemHeight: 8,
              textStyle: {
                color: '#D9D9D9',
                fontSize: 16,
              },
              icon: 'roundRect',
            },
            series: [
              // 主要展示层的
              {
                radius: ['40%', '61%'],
                center: ['45%', '40%'],
                type: 'pie',
                label: {
                  normal: {
                    show: true,
                    formatter: "{c}\n{d}%",
                    textStyle: {
                      color: '#D9D9D9',
                      fontSize: 18,
                    },
                    position: 'outside'
                  },
                  emphasis: {
                    show: true
                  }
                },
                labelLine: {
                  normal: {
                    show: true,
                    length: 10,
                    length2: 15
                  },
                  emphasis: {
                    show: true
                  }
                },
                data: data,
              },
              // 边框的设置
              {
                radius: ['53%', '61%'],
                center: ['45%', '40%'],
                type: 'pie',
                label: {
                  normal: {
                    show: false
                  },
                  emphasis: {
                    show: false
                  }
                },
                labelLine: {
                  normal: {
                    show: false
                  },
                  emphasis: {
                    show: false
                  }
                },
                animation: false,
                tooltip: {
                  show: false
                },
                data: [{
                  value: 1,
                  itemStyle: {
                    color: "rgba(2,55,92,0.7)",
                  },
                }],
              },  
            ]
          }
          let myChart = echarts.init(dom)
          myChart.setOption(option)
        },
        lineEchar () {
          let dom = document.getElementById("b_line_chart")
          let color = [ "#0091FF", "#00EAFF"]
          let yAxisData1 = [18,19,23,16,14,24,15]
          let yAxisData3 = [14,13,15,14,10,20,12]
          let xAxisData = ['周一','周二','周三', '周四', '周五', '周六', '周日']
          const hexToRgba = (hex, opacity) => {
            let rgbaColor = "";
            let reg = /^#[\da-f]{6}$/i;
            if (reg.test(hex)) {
              rgbaColor = `rgba(${parseInt("0x" + hex.slice(1, 3))},${parseInt(
              "0x" + hex.slice(3, 5)
              )},${parseInt("0x" + hex.slice(5, 7))},${opacity})`;
            }
            return rgbaColor;
          }
          let option = {
            color: color,
            legend: {
              right: 10,
              top: 0,
              itemHeight: 10,
              itemWidth: 16,
              itemGap: 10, //设置图例的间距
              textStyle: {
                color: '#D9D9D9',
                fontWeight: 'normal',
                fontSize: 16,
              },
            },
            tooltip: {
              show: true,
              trigger: "axis",
              backgroundColor: "rgba(0, 21, 43)",
              textStyle: {
                color: '#fff',
                fontSize: 20,
              },
            },
            grid: {
              top: 35,
              bottom: 5,
              left: 10,
              right: 15,
              containLabel: true
            },
            xAxis: [{ 
              type: "category",
              boundaryGap: false,
              axisLabel: {
                // formatter: '{value}月',
                textStyle: {
                  color: "#D9D9D9",
                  fontSize: 16,
                }
              },
              axisTick: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  color: "#999",
                  type: "dashed",
                }
              },
              data: xAxisData
            }],
            yAxis: [{
              type: "value",
              name: "单位：件",
              nameTextStyle: {
                color: "#D9D9D9",
                padding: [0, 0, 0, 0],
                fontSize: 16,
              },
              axisLabel: {
                textStyle: {
                  color: "#D9D9D9",
                  fontSize: 16,
                }
              },
              splitLine: {
                lineStyle: {
                  type: "dashed",
                  color: "#244662"
                }
              },
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              }
            }],
            series: [{
              name: "布控人员",
              type: "line",
              showSymbol: false,
              smooth: true,
              symbolSize: 6,
              zlevel: 3,
              lineStyle: {
                normal: {
                  color: color[0],
                  shadowBlur: 3,
                  shadowColor: hexToRgba(color[0], 0.5),
                  shadowOffsetY: 8
                }
              },
              areaStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [{
                      offset: 0,
                      color: hexToRgba(color[0], 0.3)
                    },
                    {
                      offset: 1,
                      color: hexToRgba(color[0], 0.1)
                    }
                    ],
                    false
                  ),
                  shadowColor: hexToRgba(color[0], 0.1),
                  shadowBlur: 10
                }
              },
              data: yAxisData1
            },{
              name: "预警人员",
              type: "line",
              showSymbol: false,
              smooth: true,
              symbolSize: 6,
              zlevel: 3,
              lineStyle: {
                normal: {
                  color: color[2],
                  shadowBlur: 3,
                  shadowColor: hexToRgba(color[1], 0.5),
                  shadowOffsetY: 8
                }
              },
              areaStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [{
                      offset: 0,
                      color: hexToRgba(color[1], 0.3)
                    },
                    {
                      offset: 1,
                      color: hexToRgba(color[1], 0.1)
                    }],
                    false
                  ),
                  shadowColor: hexToRgba(color[1], 0.1),
                  shadowBlur: 10
                }
              },
              data: yAxisData3
            }]
          }
          let myChart = echarts.init(dom)
          myChart.setOption(option)
        },
      }
    }
  </script>
  <style lang="scss" scoped>
  .col_4_container {
    position: relative;
    .topSearchBtn {
      position: absolute;
      top: 2.5%;
      right: 1%;
      display: flex;
      .btnClass {
        height: 32px;
        font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
        font-weight: normal;
        font-size: 14px;
        color: #00AAFF;
        line-height: 32px;
        text-align: left;
        font-style: normal;
        text-transform: none;
        padding: 0px 18px;
        background: radial-gradient( 0% 20% at 56% 57%, rgba(0,128,255,0.1) 0%, rgba(0,128,255,0.2) 100%), rgba(0,170,255,0.2);
        border-radius: 2px 2px 2px 2px;
        border: 2px solid;
        border-image: linear-gradient(360deg, rgba(0, 170, 255, 0.6), rgba(0, 170, 255, 0)) 3 3;
        margin-left: 10px;
        cursor: pointer;
      }
      .dateTypeBtnIdx {
        color: #DEF0FF;
        background: #00AAFF;
      }
    }
    .col_1_w {
      width: 100%;
      height: 94%;
      padding: 0 10px;
      background: linear-gradient(to top, #022845 20%, #021E2F);
      .rask_box {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: 10px 0;
        .rask_item {
          width: 24%;
          height: 68px;
          background: url("@/assets/images/layout/Frame3250452x1.png")no-repeat center;
          background-size: 100% 100%;
          display: flex;
          align-items: center;   
          font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
          font-weight: normal;
          font-size: 18px;
          color: #CDE9FF;
          text-align: left;
          font-style: normal;
          text-transform: none;
          padding-left: 50px;
          .value {
            font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
            font-weight: normal;
            font-size: 22px;
            color: #00AAFF;
            padding-left: 60px;
          }
        }
        .rask_item:nth-child(2) {
          background: url("@/assets/images/layout/Frame3250452x2.png")no-repeat center;
          background-size: 100% 100%;
          .value {
            color: #FFC700;
          }
        }
        .rask_item:nth-child(3) {
          background: url("@/assets/images/layout/Frame3250452x3.png")no-repeat center;
          background-size: 100% 100%;
          .value {
            color: #00EAFF;
          }
        }
        .rask_item:nth-child(4) {
          background: url("@/assets/images/layout/Frame3250452x4.png")no-repeat center;
          background-size: 100% 100%;
          .value {
            color: #CC5120;
          }
        }
      }
      .m_l_Box {
        width: 49%;
        height: 335px;
        #m_d_p_pie_t {
          width: 100%;
          height: 100%;
        }
        .right_table {
          width: 100%;
          height: 100%;
        }
      }
      .m_r_Box {
        width: 49%;
        height: 335px;
        margin-left: 15px; 
        .rask_table {
          width: 100%;
          height: 49px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: url("@/assets/images/layout/tb_th2x1.png")no-repeat center;
          background-size: 100% 100%;
          margin-top: 5px;
          .label {
            font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
            font-weight: normal;
            font-size: 20px;
            color: #FFFFFF;
            text-align: left;
            font-style: normal;
            text-transform: none;
            display: flex;
            align-items: center;
            img {
              width: 25px;
              height: 33px;
              padding: 0 10px;
            }
          }
          .value {
            font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
            font-weight: normal;
            font-size: 18px;
            color: #FFFFFF;
            text-align: left;
            font-style: normal;
            text-transform: none;
            padding-right: 12px;
          }
        }
        .rask_table:nth-child(odd) {
          background: url("@/assets/images/layout/tb_th2x2.png")no-repeat center;
          background-size: 100% 100%;
        }
        .rask_table:nth-child(4), .rask_table:nth-child(5){
          .label {
            img {
              width: 25px;
              height: 25px;
            }
          }
        }
      }
      .lineChart {
        width: 100%;
        height: 324px;
        margin-top: 10px;
        #b_line_chart {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  </style>