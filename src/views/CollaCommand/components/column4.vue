<template>
    <PageColumnVue class="col_4_container" :width="33.33">
      <TopBlockVue title="警种警情细类统计" icon="Frameshelx" />
      <div class="topSearchBtn">
        <p v-for="(item, index) in btnList" @click="handelBtn(index)" :class="{'dateTypeBtnIdx': dateTypeBtnIdx == index}" :key="index" class="btnClass">{{ item }}</p> 
      </div>
      <div class="col_1_w">
        <SubBlockVue tabs="警情处理情况" :moreShow="false" class="lineChart">
          <div v-for="(item, index) in lineChartInfo" :key="index" class="line_chart_info">
            <p>{{ item.label }}</p>
            <p>{{ item.value }}</p>
          </div>
          <div id="b_line_chart"></div>
        </SubBlockVue>
        <SubBlockVue tabs="警情细类占比分析" :moreShow="false" class="m_l_Box">
          <div id="m_d_p_pie_t"></div>
        </SubBlockVue> 
        <SubBlockVue tabs="案件嫌疑人年龄分析" :moreShow="false" class="m_r_Box">
          <div id="radar_charts"></div>
        </SubBlockVue> 
        <SubBlockVue tabs="警情区域分布统计" :moreShow="false" class="m_b_l_Box">
          <div id="lbar_charts"></div>
        </SubBlockVue> 
        <SubBlockVue tabs="案件嫌疑人职业分析" :moreShow="false" class="m_b_r_Box">
          <div id="radar2_charts"></div>
        </SubBlockVue> 
      </div> 
    </PageColumnVue>
  </template>
  <script>
    import * as echarts from "echarts";
    import PageColumnVue from "@/components/layout/PageColumn";
    import SubBlockVue from "@/components/layout/SubBlock";
    import TopBlockVue from "@/components/layout/TopBlock";
    export default {
      name: "Column3Com",
      components: {
        PageColumnVue,
        SubBlockVue,
        TopBlockVue,
      },
      data() {
        return {
          lineChartInfo: [
            { label: '案件数', value: '28' },
            { label: '已办结', value: '18' },
            { label: '未办结', value: '10' },
          ],
          raskList: [
            { img: require('../../../assets/images/layout/Group1772x0.png'), label: '河北省承德市公安局双桥分局', value: 96 },
            { img: require('../../../assets/images/layout/Group1772x1.png'), label: '河北省承德市公安局双滦分局', value: 90 },
            { img: require('../../../assets/images/layout/Group1772x2.png'), label: '河北省承德市公安局警务督察支队', value: 87 },
            { img: require('../../../assets/images/layout/Group1772x3.png'), label: '河北省承德市公安局巡警支队', value: 84 },
            { img: require('../../../assets/images/layout/Group1772x4.png'), label: '河北省承德市公安局交通警察支队', value: 80 },
          ],  
          dateTypeBtnIdx: 0,
          btnList: ["治安","交通","刑侦","经侦","巡警","网安","消防","技侦","技侦","缉私",  "反恐","特警","特警","民航","森林","督察","督察","边防","监所","其他"],
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
        let colorStops1 = [{
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
        }]
        let colorStops2 = [{
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
        }]
        let value1 = [80, 80, 80, 70, 60,50,70]
        let value2 = [40, 70, 50, 60, 30, 50, 70]
        this.pieEchart()
        this.lineEchar()
        let radar1Data = [{
          name: '0-16岁',
          max: 100
        },
        {
          name: '16-25岁',
          max: 100
        },
        {
          name: '25-30岁',
          max: 100
        },
        {
          name: '30-40岁',
          max: 100
        },
        {
          name: '50-60岁',
          max: 100
        },{
          name: '60-70岁',
          max: 100
        },{
          name: '70岁以上',
          max: 100
        }]
        let radar2Data = [{
          name: '公司',
          max: 100
        },
        {
          name: '机关',
          max: 100
        },
        {
          name: '事业',
          max: 100
        },
        {
          name: '其他职业',
          max: 100
        },
        {
          name: '无职业',
          max: 100
        }]
        this.radarEchart("radar_charts", colorStops1, radar1Data, value1)
        this.radarEchart("radar2_charts", colorStops2, radar2Data, value2)
        this.barEchart()
      },
      methods: {
        handelBtn (index) {
          this.dateTypeBtnIdx = index
        },
        lineEchar () {
          let dom = document.getElementById("b_line_chart")
          let color = [ "#0091FF", "#B0A62C"]
          let yAxisData1 = [18,19,23,16,14,24,15,18,19,23,16]
          let yAxisData3 = [14,13,15,14,10,20,12,18,19,23,16]
          let xAxisData = ['8:00','9:00','10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00']
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
              right: 20,
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
              name: "已办结",
              type: "line",
              showSymbol: false,
              smooth: true,
              symbolSize: 6,
              zlevel: 3,
              lineStyle: {
                normal: {
                  color: color[0],
                  shadowBlur: 3,
                  shadowColor: hexToRgba(color[0], 0.8),
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
                      color: hexToRgba(color[0], 0.8)
                    },
                    {
                      offset: 1,
                      color: hexToRgba(color[0], 0.3)
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
              name: "未办结",
              type: "line",
              showSymbol: false,
              smooth: true,
              symbolSize: 6,
              zlevel: 3,
              lineStyle: {
                normal: {
                  color: color[2],
                  shadowBlur: 3,
                  shadowColor: hexToRgba(color[1], 0.8),
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
                      color: hexToRgba(color[1], 0.8)
                    },
                    {
                      offset: 1,
                      color: hexToRgba(color[1], 0.3)
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
        pieEchart (id) {
          let dom = document.getElementById("m_d_p_pie_t")
          let colorList = [
            '#00AAFF', '#3491FA', '#0085FF', '#165DFF', '#A871E3', '#8D4EDA', '#722ED1', '#5E4AB4',
            '#00CC03', '#31FFDA', '#00FFFF','#CC5120', '#FF7D00', '#B35E31', '#FF9900', '#F9CC45'
          ]
          let pieData = [{
              name: "盗窃",
              value: 15
            }, {
              name: "抢劫",
              value: 10
            }, {
              name: "抢夺",
              value: 10
            }, {
              name: "杀人",
              value: 20
            }, {
              name: "伤害",
              value: 20
            }, {
              name: "诈骗",
              value: 20
            }, {
              name: "敲诈勒索",
              value: 20
            }, {
              name: "制贩使用假币",
              value: 20
            },
            {
              name: "强奸",
              value: 15
            }, {
              name: "贩毒",
              value: 10
            }, {
              name: "恐吓",
              value: 10
            }, {
              name: "投毒",
              value: 20
            }, {
              name: "纵火",
              value: 20
            }, {
              name: "恐怖活动",
              value: 20
            }, {
              name: "非法拘禁",
              value: 20
            }, {
              name: "其他",
              value: 20
            }
          ] 
          let totalNm = 0
          for (const mapKey in pieData) {
            totalNm += pieData[mapKey].value
          }
          let datum = pieData.map((v) => v.value)
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
              orient: 'vertical',
              top: "center",
              right: "0%",
              itemWidth: 12,
              itemHeight: 8, 
              itemGap: 16,
              icon: 'roundRect',
              formatter: (name) => {
                var value = 0
                var percent = 0
                for(let i =0; i<pieData.length; i++) {
                  if (pieData[i].name == name) {
                    value = pieData[i].value
                    percent = (pieData[i].value / totalNm * 100).toFixed(2)// 1980 2024
                  }
                }
                return [
                  // `{a|${name}}`,`{b|${value}}`,`{c|${percent}%}`,
                  `{a|${name}}`,`{b|${value}}`,
                ]
              },
              textStyle: {
                rich: {
                  a: {
                    color: '#D9D9D9',
                    fontSize: '16',
                    padding: [0, 10, 0, 0],
                    // width: 100,
                  },
                  b: {
                    color: '#D9D9D9',
                    fontSize: '16',
                    width: 30,
                  },
                  c: {
                    color: '#D9D9D9',
                    fontSize: '16',
                  },
                },
              },
            },
            series: [
              // 主要展示层的
              {
                radius: ['40%', '61%'],
                center: ['25%', '50%'],
                type: 'pie',
                label: {
                  normal: {
                    show: false,
                    formatter: "{b}\n{c}  {d}%",
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
                data: pieData,
              },
              // 边框的设置
              {
                radius: ['53%', '61%'],
                center: ['25%', '50%'],
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
        radarEchart (id, colorStops, dataList, value) {
          let dom = document.getElementById(id)
          let option = {
            tooltip: {
              show: false // 弹层数据去掉
            },
            legend: {
              show: true,
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
              indicator: dataList,
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
            series: [{
              type: 'radar',
              symbolSize: 6,
              itemStyle:{
                borderColor: colorStops[3].color,
                color: '#fff',
                borderWidth: 2
              },
              lineStyle: {
                normal:{
                  width: 2,
                  color: colorStops[3].color,
                }
              },
              data: [ {
                value: value,
                areaStyle: {
                  normal: {
                    color: {
                      type: 'radial',
                      x: 0.5,
                      y: 0.5,
                      r: 0.5,
                      colorStops: colorStops,
                      global: false // 缺省为 false
                    }
                  }
                },
              }]
            }
          ]}
          let myChart = echarts.init(dom)
          myChart.setOption(option)
        },
        barEchart () {
          let dom = document.getElementById("lbar_charts")
          let path = 'path://M214,1079l8-6h16l8,6-8,6H222Z';
          let yData = ["271", "301", "441", "321", "221","271", "301", "441", "321", "221","271", "301", "441", "321", "221", "340"];
          let xData = ['双滦区','平泉市','隆化县', '丰宁县', '承德县', '双桥区', '营子区', '围场县', '滦平县', '宽城县', '兴隆县', '高新区', '钢城', '旅游', '机场', '御道口']
          let option = {
            tooltip: {
              show: true,
              trigger: "axis",
              backgroundColor: "rgba(0, 21, 43)",
              formatter: "{b} {c}",
              textStyle: {
                color: '#fff',
                fontSize: 20,
              },
            },
            grid: {
              left: '0%',
              right: '0%',
              bottom: '4%',
              top:'16%',
              containLabel: true
            },
            legend: {
              show: false
            },
            xAxis: [{ 
              type: "category",
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
              data: xData
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
              type: 'pictorialBar',
              symbol: path,
              symbolSize: [30, 8],
              symbolOffset: [0, -4],
              symbolPosition: 'end',
              z: 12,
              color: "#3440FF",
              data: yData
            },
            {
              type: 'pictorialBar',
              symbol: path,
              symbolSize: [30, 8],
              symbolOffset: [0, 4],
              z: 12,
              color: "rgba(126,192,238,0.6)",
              data: yData
            },
            {
              name: '年初值',
              type: 'bar',
              barWidth: '30',
              itemStyle: {
                normal: {
                  opacity: .7,
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'blue'
                  }, {
                    offset: 1,
                    color: '#7EC0EE'
                  }]),
                  barBorderRadius: 0,
                },
              },
              label: {
                show: false,
                position: ['0','-18'],
                color: '#00AAFF',
                fontSize: 12,
              },
              data: yData
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
      display: flex;
      margin: 8px 0;
      .btnClass {
        height: 32px;
        font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
        font-weight: normal;
        font-size: 16px;
        color: #00AAFF;
        line-height: 32px;
        text-align: left;
        font-style: normal;
        text-transform: none;
        padding: 0px 22px;
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
      padding: 0 10px 14px 10px;
      background: linear-gradient(to top, #022845 20%, #021E2F);
      .m_l_Box {
        display: inline-block;
        width: 33%;
        height: 342px;
        margin-left: 15px; 
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
        display: inline-block;
        width: 33%;
        height: 342px;
        margin-left: 15px; 
        #radar_charts {
          width: 100%;
          height: 100%;
        }
      }
      .lineChart {
        display: inline-block;
        width: 32%;
        height: 342px;
        #b_line_chart {
          float: left;
          width: 100%;
          height: 70%;
          margin-top: 24px;
        }
        .line_chart_info {
          float: left;
          width: 31%;
          height: 46px;
          line-height: 46px;
          text-align: center;
          color: #0091FF;
          display: inline-block;
          background: url("@/assets/images/layout/Frame13212x1.png")no-repeat center;
          background-size: 100% 100%;
          margin-top: 10px;
          margin-left: 10px; 
          p {
            height: 8px;
            line-height: 8px;
            margin-top: 10px;
          }
        }
        .line_chart_info:nth-child(2) {
          color: #FF9900;
          background: url("@/assets/images/layout/Frame13212x2.png")no-repeat center;
          background-size: 100% 100%;
        }
        .line_chart_info:nth-child(3) {
          color: #00EAFF;
          background: url("@/assets/images/layout/Frame13212x3.png")no-repeat center;
          background-size: 100% 100%;
        }
      }
      .m_b_l_Box {
        display: inline-block;
        width: 66%;
        height: 342px;
        margin-top: 16px;
        #lbar_charts {
          width: 100%;
          height: 100%;
        }
      }
      .m_b_r_Box {
        display: inline-block;
        width: 33%;
        height: 342px;
        margin-left: 15px; 
        #radar2_charts {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  </style>