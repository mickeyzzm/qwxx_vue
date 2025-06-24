<template>
  <PageColumnVue class="col_5_container" :width="16.665">
    <TopBlockVue title="警务关联统计" icon="Frame902x" />
    <div class="topSearchBtn">
      <p v-for="(item, index) in btnList" @click="handelBtn(index)" :class="{'dateTypeBtnIdx': dateTypeBtnIdx == index}" :key="index" class="btnClass">{{ item.name }}</p> 
    </div>
    <div class="col_1_w">
      <div class="num">警情数 <span>255</span></div>
      <div id="pie_charts"></div>
      <div id="radar_charts"></div>
      <SubBlockVue tabs="单位处置警情Top10" :moreShow="false" style="width: 49%;height: 521px;">
        <div id="bar_left_charts"></div>
      </SubBlockVue>
      <SubBlockVue tabs="民警处置警情Top10" :moreShow="false" style="width: 49%;height: 521px;">
        <div id="bar_right_charts"></div>
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
        analysisList: [
          { label: '警力配置', value: 62 },
          { label: '安保岗点备', value: 61 },
          { label: '装备配置', value: 63 },
          { label: '车辆配备', value: 60 },
        ],
        feelingList: [
          { label: '在线警员', value: 8746 },
          { label: '可用警车', value: 2473 },
          { label: '摄像头', value: 6063 },
          { label: '对讲机', value: 1082 },
          { label: '警务通', value: 1082 },
          { label: '执法记录仪', value: 1082 },
        ],
        tableData: [
          { carId: '王帅', adress: '承德市双桥区卡镇', time: '2024-03-15 17:23:10' },
          { carId: '王帅', adress: '承德市双桥区卡镇', time: '2024-03-15 17:23:10' },
          { carId: '王帅', adress: '承德市双桥区卡镇', time: '2024-03-15 17:23:10' },
          { carId: '王帅', adress: '承德市双桥区卡镇', time: '2024-03-15 17:23:10' },
          { carId: '王帅', adress: '承德市双桥区卡镇', time: '2024-03-15 17:23:10' },
          { carId: '王帅', adress: '承德市双桥区卡镇', time: '2024-03-15 17:23:10' },
          { carId: '王帅', adress: '承德市双桥区卡镇', time: '2024-03-15 17:23:10' },
          { carId: '王帅', adress: '承德市双桥区卡镇', time: '2024-03-15 17:23:10' },
          { carId: '王帅', adress: '承德市双桥区卡镇', time: '2024-03-15 17:23:10' },
          { carId: '王帅', adress: '承德市双桥区卡镇', time: '2024-03-15 17:23:10' },
          { carId: '王帅', adress: '承德市双桥区卡镇', time: '2024-03-15 17:23:10' },
          { carId: '王帅', adress: '承德市双桥区卡镇', time: '2024-03-15 17:23:10' },
          { carId: '王帅', adress: '承德市双桥区卡镇', time: '2024-03-15 17:23:10' },
          { carId: '王帅', adress: '承德市双桥区卡镇', time: '2024-03-15 17:23:10' },
          { carId: '王帅', adress: '承德市双桥区卡镇', time: '2024-03-15 17:23:10' },
          { carId: '王帅', adress: '承德市双桥区卡镇', time: '2024-03-15 17:23:10' },
          { carId: '王帅', adress: '承德市双桥区卡镇', time: '2024-03-15 17:23:10' },
          { carId: '王帅', adress: '承德市双桥区卡镇', time: '2024-03-15 17:23:10' },
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
          step: 0.3,
        }
      }
    },
    mounted() { 
      this.pieEchart()
      this.radarEchart()
      this.barLeftCharts()
      this.barRightCharts()
    },
    methods: {
      handelBtn (index) {
        this.dateTypeBtnIdx = index
      },
      pieEchart () {
        let dom = document.getElementById("pie_charts");
        let colorList = ['#00C1FE', '#00FFFF']
        let data = [{
          name: "办结警情",
          value: 199
        }, {
          name: "未结警情",
          value: 56
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
          legend: {
            show: false, 
          },
          series: [
            {
              radius: ['40%', '55%'],
              center: ['50%', '60%'],
              type: 'pie',
              label: {
                normal: {
                  show: true,
                  formatter: "{b}\n{c}",
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
                  length: 20,
                  length2: 25
                },
                emphasis: {
                  show: true
                }
              },
              data: data,
            },
          ]
        }
        let myChart = echarts.init(dom);
        myChart.setOption(option);
      },
      radarEchart () {
        let dom = document.getElementById("radar_charts");
        let option = {
          color: ['#3D91F7', '#61BE67'],
          tooltip: {
            show: false // 弹层数据去掉
          },
          legend: {
            show: false,
          },
          radar: {
            center: ['50%', '54%'], // 外圆的位置
            radius: '70%',
            name: {
              textStyle: {
                color: '#fff',
                fontSize: 16,
                fontWeight: 400,
                fontFamily: 'PingFangSC-Regular,PingFang SC',
                fontStyle: 'normal',
              }
            },
            // TODO:
            indicator: [
              {
                name: '刑事警情',
                max: 100
              },
              {
                name: '其他',
                max: 100
              },
              {
                name: '举报线索',
                max: 100
              },
              {
                name: '火警事件',
                max: 100
              },
              {
                name: '群众求助',
                max: 100
              },{
                name: '交通事件',
                max: 100
              },{
                name: '治安事件',
                max: 100
              }
            ],
            splitArea: {
              // 坐标轴在 grid 区域中的分隔区域，默认不显示。
              show: true,
              areaStyle: {
                // 分隔区域的样式设置。
                color: ['rgba(42, 62, 82, 0.5)'] // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
              }
            },
            axisLine: {
              // 指向外圈文本的分隔线样式
              lineStyle: {
                color: '#2E465B'
              }
            },
            splitLine: {
              lineStyle: {
                type: 'solid',
                color: '#2E465B', // 分隔线颜色
                width: 1 // 分隔线线宽
              }
            }
          },
          series: [
            {
              type: 'radar',
              symbolSize: 6,
              itemStyle:{
                borderColor: '#00A3FF',
                color: '#fff',
                borderWidth: 2
              },
              lineStyle: {
                normal:{
                  width: 2,
                  color: '#00A3FF',
                }
              },
              data: [
                {
                  // TODO:
                  value: [80, 80, 80, 70, 60,50,70],
                  areaStyle: {
                    normal: {
                      color: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [{
                          offset: 0, color: 'rgba(46,203,255, 0.14)' // 0% 处的颜色
                        }, 
                        {
                          offset: 0.15, color: 'rgba(46,203,255, 0.14)' // 100% 处的颜色
                        },
                        {
                          offset: 0.75, color: 'rgba(46,203,255, 0.4)' // 100% 处的颜色
                        },
                        {
                          offset: 1, color: 'rgba(46,203,255, 0.5)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                      }
                    }
                  },
                },
                {
                  // TODO:
                  value: [40, 70, 50, 60, 30, 50, 70],
                  itemStyle:{
                    borderColor: '#FF9900',
                    color: '#fff',
                    borderWidth: 2
                  },
                  lineStyle: {
                    normal:{
                      width: 2,
                      color: '#FF9900',
                    }
                  },
                  areaStyle: {
                    normal: {
                      color:{
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [{
                          offset: 0, color: 'rgba(255, 127,0, 0.14)' // 0% 处的颜色
                        }, 
                        {
                          offset: 0.15, color: 'rgba(255, 127,0, 0.14)' // 100% 处的颜色
                        },
                        {
                          offset: 0.75, color: 'rgba(2255, 127,0, 0.4)' // 100% 处的颜色
                        },
                        {
                          offset: 1, color: 'rgba(255, 127,0, 0.5)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                      }
                    }
                  },
                }
              ]
            }
          ]
        }
        let myChart = echarts.init(dom);
        myChart.setOption(option);
      },
      barLeftCharts () {
        let dom = document.getElementById("bar_left_charts");
        let nameArray = []; // 名称
        let numArray = []; // 值
        let totalArray = []; // 合计
        let symbolArray = []; // 条形图尾部标志
        let max = 0;
        let chartData = [
          {
            name: '河北省承德市公安局双滦分局',
            value: 10
          },
          {
            name: '河北省承德市公安局双桥分局',
            value: 9
          },
          {
            name: '河北省承德市公安局治安警察支队',
            value: 8
          },
          {
            name: '河北省隆化县公安局',
            value: 7
          },
          {
            name: '河北省隆化县公安局',
            value: 6
          },
          {
            name: '河北省隆化县公安局',
            value: 6
          },
          {
            name: '河北省隆化县公安局',
            value: 5
          },
          {
            name: '河北省隆化县公安局',
            value: 5
          },
          {
            name: '河北省隆化县公安局',
            value: 4
          },
          {
            name: '河北省隆化县公安局',
            value: 3
          }
        ]
        // 只取前10条
        chartData.forEach(ele => {
          nameArray.push(ele.name);
          numArray.push(ele.value);
          max = ele.value > max ? Math.ceil(ele.value / 10) * 10 : max;
          symbolArray.push({
            value: ele.value,
            symbolPosition: 'end'
          })
        })
        // 如果返回了total数量
        totalArray = new Array(10).fill(max)
        let option = {
          grid: {
            top: 10,
            bottom: 0,
            left: 10,
            right: 10
          },
          tooltip: {
            show: false,
          },
          xAxis: {
            show: false,
            type: 'value'
          },
          yAxis: [{
            type: 'category',
            show: true,
            inverse: true,
            axisLabel: {
              show: false,
              textStyle: {
                color: 'rgba(255,255,255,.6)'
              },
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            data: nameArray
          }, {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
              textStyle: {
                color: '#ffffff',
                fontSize: '14'
              },
              align: 'right',
              padding: [0, 8, 0, 0],
              verticalAlign: 'bottom',
              lineHeight: 36,
              // 空闲车位、占比
              formatter: function (value, index) {
                return `{a|${value}}`;
              },
              rich: {
                a: {
                  fontSize: 18,
                  fontFamily: 'OPPOSans',
                  padding: [0, 3, 0, 0]
                }
              }
            },
            data: numArray
          }],
          series: [
            // 条形图
            {
              name: '数量',
              type: 'bar',
              zlevel: 1,
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#033865'
                  }, {
                    offset: 1,
                    color: '#018FFC'
                  }])
                }
              },
              barWidth: 8,
              data: numArray,
              label: {
                  normal: {
                    color: '#fff',
                    show: true,
                    position: [0, '-23px'],
                    textStyle: {
                      fontSize: '14',
                      fontFamily: 'customFont',
                      color: '#FFFFFF'
                    },
                    // 序号、停车场名称
                    formatter: function (value) {
                      return `{t|NO}{a|${value.dataIndex + 1}}{b|${value.name}}`;
                    },
                    rich: {
                      t: {
                        fontSize: 14,
                        fontFamily: 'OPPOSans',
                        color: '#018FFC',
                        width: 22,
                        height: 16,
                        align: 'center',
                        verticalAlign: 'middle',
                        backgroundColor: 'rgba(60, 220, 146, .1)',
                        padding: [3, 0, 0, 5]
                      },
                      a: {
                        fontSize: 16,
                        fontFamily: 'OPPOSans',
                        color: '#018FFC',
                        width: 22,
                        height: 16,
                        align: 'center',
                        verticalAlign: 'middle',
                        backgroundColor: 'rgba(60, 220, 146, .1)',
                        padding: [3, 0, 0, 0]
                      },
                      b: {
                        fontSize: '14',
                        fontFamily: 'customFont',
                        color: '#FFFFFF',
                        padding: [0, 0, 0, 12]
                      }
                    }
                  }
                }
            },
            // 背景条形图
            {
              name: '背景',
              type: 'bar',
              barWidth: 8,
              barGap: '-100%',
              data: totalArray,
              itemStyle: {
                normal: {
                  color: '#47515C'
                }
              },
            },
            // 条形图尾部方块
            {
              type: 'pictorialBar',
              symbol: 'rect',
              symbolSize: [6, 15],
              symbolOffset: [3, 0],
              zlevel: 2,
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: '#FBDD9E'
                  }, {
                    offset: 1,
                    color: '#FFFFFF'
                  }]),
                  shadowBlur: 5,
                  shadowOffsetY: 2,
                  shadowColor: 'rgba(0, 0, 0, 0.72)'
                }
              },
              data: symbolArray
            }
          ]
        }
        let myChart = echarts.init(dom)
        myChart.setOption(option)
      },
      barRightCharts () {
        let dom = document.getElementById("bar_right_charts");
        let nameArray = []; // 名称
        let numArray = []; // 值
        let totalArray = []; // 合计
        let symbolArray = []; // 条形图尾部标志
        let max = 0;
        let chartData = [
          {
            name: '张力',
            value: 10
          },
          {
            name: '何骇邦',
            value: 9
          },
          {
            name: '张莉',
            value: 8
          },
          {
            name: '张力',
            value: 7
          },
          {
            name: '李一超',
            value: 6
          },
          {
            name: '张勇莉',
            value: 6
          },
          {
            name: '蔡力邦',
            value: 5
          },
          {
            name: '张莉',
            value: 5
          },
          {
            name: '何邦',
            value: 4
          },
          {
            name: '张尧力',
            value: 3
          }
        ]
        // 只取前10条
        chartData.forEach(ele => {
          nameArray.push(ele.name);
          numArray.push(ele.value);
          max = ele.value > max ? Math.ceil(ele.value / 10) * 10 : max;
          symbolArray.push({
              value: ele.value,
              symbolPosition: 'end'
          });
        })
        // 如果返回了total数量
        totalArray = new Array(10).fill(max);
        let option = {
          grid: {
            top: 10,
            bottom: 0,
            left: 10,
            right: 10
          },
          tooltip: {
            show: false,
          },
          xAxis: {
            show: false,
            type: 'value'
          },
          yAxis: [{
            type: 'category',
            show: true,
            inverse: true,
            axisLabel: {
              show: false,
              textStyle: {
                color: 'rgba(255,255,255,.6)'
              },
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            data: nameArray
          }, {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
              textStyle: {
                color: '#ffffff',
                fontSize: '14'
              },
              align: 'right',
              padding: [0, 8, 0, 0],
              verticalAlign: 'bottom',
              lineHeight: 36,
              // 空闲车位、占比
              formatter: function (value, index) {
                return `{a|${value}}`;
              },
              rich: {
                a: {
                  fontSize: 18,
                  fontFamily: 'OPPOSans',
                  padding: [0, 3, 0, 0]
                }
              }
            },
            data: numArray
          }],
          series: [
            // 条形图
            {
              name: '数量',
              type: 'bar',
              zlevel: 1,
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#033865'
                  }, {
                    offset: 1,
                    color: '#018FFC'
                  }])
                }
              },
              barWidth: 8,
              data: numArray,
              label: {
                normal: {
                  color: '#fff',
                  show: true,
                  position: [0, '-23px'],
                  textStyle: {
                    fontSize: '14',
                    fontFamily: 'customFont',
                    color: '#FFFFFF'
                  },
                  // 序号、停车场名称
                  formatter: function (value) {
                    return `{t|NO}{a|${value.dataIndex + 1}}{b|${value.name}}`;
                  },
                  rich: {
                    t: {
                      fontSize: 14,
                      fontFamily: 'OPPOSans',
                      color: '#018FFC',
                      width: 22,
                      height: 16,
                      align: 'center',
                      verticalAlign: 'middle',
                      backgroundColor: 'rgba(60, 220, 146, .1)',
                      padding: [3, 0, 0, 5]
                    },
                    a: {
                      fontSize: 16,
                      fontFamily: 'OPPOSans',
                      color: '#018FFC',
                      width: 22,
                      height: 16,
                      align: 'center',
                      verticalAlign: 'middle',
                      backgroundColor: 'rgba(60, 220, 146, .1)',
                      padding: [3, 0, 0, 0]
                    },
                    b: {
                      fontSize: '14',
                      fontFamily: 'customFont',
                      color: '#FFFFFF',
                      padding: [0, 0, 0, 12]
                    }
                  }
                }
              }
            },
            // 背景条形图
            {
              name: '背景',
              type: 'bar',
              barWidth: 8,
              barGap: '-100%',
              data: totalArray,
              itemStyle: {
                normal: {
                  color: '#47515C'
                }
              },
            },
            // 条形图尾部方块
            {
              type: 'pictorialBar',
              symbol: 'rect',
              symbolSize: [6, 15],
              symbolOffset: [3, 0],
              zlevel: 2,
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: '#FBDD9E'
                  }, {
                    offset: 1,
                    color: '#FFFFFF'
                  }]),
                  shadowBlur: 5,
                  shadowOffsetY: 2,
                  shadowColor: 'rgba(0, 0, 0, 0.72)'
                }
              },
              data: symbolArray
            }
          ]
        }
        let myChart = echarts.init(dom)
        myChart.setOption(option)
      },
    }
  }
</script>
<style lang="scss" scoped>
.col_5_container {
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
    height: 95%;
    padding: 0 10px;
    background: linear-gradient(to top, #022845 20%, #021E2F);
    display: flex;
    justify-content: space-between; 
    flex-wrap: wrap;
    position: relative;
    .num {
      position: absolute;
      left: 2%;
      top: 1%;
      width: 219px;
      height: 40px;
      background: url("@/assets/images/layout/Rectangle36902x1.png")no-repeat center;
      background-size: 100% 100%;
      font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
      font-weight: normal;
      font-size: 16px;
      color: #FFFFFF;
      line-height: 12px;
      text-align: left;
      font-style: normal;
      text-transform: none;
      padding: 0 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        height: 40px;
        font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
        font-weight: normal;
        font-size: 18px;
        color: #0091FF;
        line-height: 40px;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
    }
    #pie_charts, #radar_charts {
      width: 49%;
      height: 233px;
      background: url("@/assets/images/layout/Rectangle36902x1.png")no-repeat center;
      background-size: 100% 100%;
    }
    #bar_left_charts, #bar_right_charts {
      width: 100%;
      height: 471px;
    }
  }
}
</style>