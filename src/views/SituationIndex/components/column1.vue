<template>
  <PageColumnVue class="col_1_container" :width="33.33">
    <TopBlockVue title="警情态势" icon="frame343312x"  class="c_1_b_1_w">
      <div class="topSearchContent">
        <div class="police_count">
          <img src="../../../assets/images/layout/Group321486@2x.png" alt="" class="img">
          <p class="text">警情数</p>
          <p v-for="(item, index) in policeNum.split('')" :key="index" class="num">{{ item }}</p>
        </div>
        <p v-for="(item, index) in btnList" @click="handelBtn(index)" :class="{'dateTypeBtnIdx': dateTypeBtnIdx == index}" :key="index" class="btnClass">{{ item.name }}</p> 
      </div>
      <div style="display: flex; margin-top: 30px;">
        <SubBlockVue tabs="警情趋势分析" :moreShow="false" class="c_1_b_1">
          <div id="col1_chartLine"></div>
        </SubBlockVue>
        <SubBlockVue tabs="警情类型分析" :moreShow="false" class="c_1_b_2">
          <div class="type6Box">
            <div v-for="(item, index) in jqTypeListc_2" @click="handelWarInst(item)" :key="index" class="type6Item">
              <el-progress type="circle" :percentage="item.percentage" :stroke-width="8" :width="70" :height="70" :color="index == 0 ? '#00AAFF' : index == 1 ? '#F0F50F' : index == 2 ? '#00EAFF' : index == 3 ? '#743ED4' : index == 4 ? '#00CC03' : index == 5 ? '#4080FF' : index == 6 ? '#C0050F' : index == 7 ? '#00AAFF' : index == 8 ? '#FF9900' : '#00EAFF'" :define-back-color="index == 0 ? '#005A8E' : index == 1 ? '#798922' : index == 2 ? '#01849B' : index == 3 ? '#392C80' : index == 4 ? '#01741C' : index == 5 ? '#21509D' : index == 6 ? '#5E1122' : index == 7 ? '#00588A' : index == 8 ? '#815C1D' : '#01859D'" />
              <div class="type6Info">
                <p>{{item.name}}</p>
                <p>{{item.value}} 件</p>
                <el-progress type="line" :show-text="false" :stroke-width="8" :percentage="item.value" :color="index == 0 ? '#00AAFF' : index == 1 ? '#F0F50F' : index == 2 ? '#00EAFF' : index == 3 ? '#743ED4' : index == 4 ? '#00CC03' : index == 5 ? '#4080FF' : index == 6 ? '#C0050F' : index == 7 ? '#00AAFF' : index == 8 ? '#FF9900' : '#00EAFF'" :define-back-color="index == 0 ? '#005A8E' : index == 1 ? '#798922' : index == 2 ? '#01849B' : index == 3 ? '#392C80' : index == 4 ? '#01741C' : index == 5 ? '#21509D' : index == 6 ? '#5E1122' : index == 7 ? '#00588A' : index == 8 ? '#815C1D' : '#01859D'" />
              </div>
            </div>
          </div>
        </SubBlockVue>
        <SubBlockVue tabs="警情趋势分析" :moreShow="false" class="c_1_b_3">
          <div id="col3_chartPie"></div>
        </SubBlockVue>
      </div>
      <div style="display: flex;">
        <SubBlockVue tabs="警情级别分析" :moreShow="false" class="c_1_b_4">
          <div class="pieBg"></div>
          <div id="col4_chartPie"></div>
        </SubBlockVue>
        <SubBlockVue tabs="警情区域分布分析" :moreShow="false" class="c_1_b_5">
          <div id="col5_chartBar"></div>
        </SubBlockVue>
      </div>
    </TopBlockVue>
    <TopBlockVue title="目标人员分析" icon="frame_212x"  class="c_1_b_6_w">
      <div style="display: flex;">
        <SubBlockVue tabs="今日目标人员预警数" :moreShow="false" class="c_1_b_6_1_w_c">
          <div class="c_1_b_6_1_w_b">
            <div class="c_1_b_6_1_c_1">
              <p class="name">目标人员数量</p>
              <span v-for="(item, index) in num.split('')" :key="index" class="num">{{ item }}</span>
            </div>
            <div class="c_1_b_6_1_c_2">
              <div v-for="(item, index) in c_1_b_6_1_w_list" :key="index" class="c_1_b_6_1_m">
                <p class="name">{{item.name}}</p>
                <p class="num">{{item.num}} 名</p>
              </div>
            </div>
          </div>
        </SubBlockVue>
        <SubBlockVue tabs="目标人员地域分布分析" class="c_1_b_6_2_w_c">
          <div id="col6_chartBar"></div>
        </SubBlockVue>
      </div>
    </TopBlockVue>
  </PageColumnVue>
</template>
  
<script>
import * as echarts from "echarts";
import PageColumnVue from "@/components/layout/PageColumn";
import SubBlockVue from "@/components/layout/SubBlock";
import TopBlockVue from "@/components/layout/TopBlock";
export default {
  name: "Column1Com",
  components: {
    PageColumnVue,
    SubBlockVue,
    TopBlockVue,
  },
  data() {
    return {
      policeNum: '688',
      num: '142',
      dateTypeBtnIdx: 0,
      scrollOption: {
        step: 0.3,
      },
      c_1_b_6_1_w_list: [
        { name: '前科', num: 34 },
        { name: '在逃', num: 6 },
        { name: '涉毒', num: 3 },
        { name: '上访', num: 12 },
        { name: '涉恐', num: 2 },
        { name: '涉稳', num: 43 },
        { name: '精神病', num: 23 },
        { name: '其他', num: 8 },
      ],
      jqTypeListc_2: [
        { name: '刑事警情', value: 27, percentage: 45},
        { name: '交警警情', value: 6, percentage: 13.8},
        { name: '治安警情', value: 8, percentage: 10.3},
        { name: '灾害事故', value: 10, percentage: 17.8},
        { name: '群众求助', value: 10, percentage: 17.2},
        { name: '举报线索', value: 5, percentage: 8.6},
        { name: '119警情', value: 2, percentage: 3.4},
        { name: '社会联动', value: 4, percentage: 68},
        { name: '投诉监督', value: 16, percentage: 27.6},
        { name: '群众事件', value: 16, percentage: 70},
      ],
      btnList: [
        { name: '今日', value: 'today'},
        { name: '近七天', value: 'sevenDay'},
        { name: '本月', value: 'currentMonth'},
      ],
    }
  },
  computed: {
  },
  mounted() {  
    this.lineEchart1()
    this.pieEchart3()
    this.pieEchart4()
    this.barEchart5()
    this.barEchart6()
  },
  methods: {
    // 今天, 近7天, 本月
    handelBtn (index) {
      this.dateTypeBtnIdx = index
    },
    lineEchart1() {
      let dom = document.getElementById("col1_chartLine");
      let color = [
        "#01AFFA",
        "#EF7034",
        "#04B10E",
        "#FF515A",
        "#8B5CFF",
        "#00CA69"
      ]
      let echartData = [{
        name: "00:00",
        value1: 100,
        value3: 100,
        value2: 233
      },
      {
        name: "02:00",
        value1: 138,
        value3: 100,
        value2: 233
      },
      {
        name: "04:00",
        value1: 350,
        value3: 100,
        value2: 200
      },
      {
        name: "06:00",
        value1: 173,
        value3: 100,
        value2: 180
      },
      {
        name: "08:00",
        value1: 180,
        value3: 100,
        value2: 199
      },
      {
        name: "10:00",
        value1: 150,
        value3: 100,
        value2: 233
      },
      {
        name: "12:00",
        value1: 180,
        value3: 100,
        value2: 210
      }]
      let xAxisData = echartData.map(v => v.name)
      let yAxisData1 = echartData.map(v => v.value1)
      let yAxisData2 = echartData.map(v => v.value2)
      let yAxisData3 = echartData.map(v => v.value3)
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
          top: 25,
          bottom: 0,
          left: 0,
          right: 10,
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
          name: "警情数(件)",
          nameTextStyle: {
            color: "#D9D9D9",
            padding: [0, 0, -5, 0],
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
          name: "同比",
          type: "line",
          smooth: true,
          // showSymbol: false,/
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
        }, {
          name: "环比",
          type: "line",
          smooth: true,
          // showSymbol: false,
          symbolSize: 6,
          zlevel: 3,
          lineStyle: {
            normal: {
              color: color[1],
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
                  }
                ],
                false
              ),
              shadowColor: hexToRgba(color[1], 0.1),
              shadowBlur: 10
            }
          },
          data: yAxisData2
        }, {
          name: "实时",
          type: "line",
          smooth: true,
          // showSymbol: false,
          symbolSize: 6,
          zlevel: 3,
          lineStyle: {
            normal: {
              color: color[2],
              shadowBlur: 3,
              shadowColor: hexToRgba(color[2], 0.5),
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
                    color: hexToRgba(color[2], 0.3)
                  },
                  {
                    offset: 1,
                    color: hexToRgba(color[2], 0.1)
                  }
                ],
                false
              ),
              shadowColor: hexToRgba(color[2], 0.1),
              shadowBlur: 10
            }
          },
          data: yAxisData3
        }]
    }
      let myChart=echarts.init(dom)
      myChart.setOption(option)
    },
    pieEchart3 () {
      let dom = document.getElementById("col3_chartPie");
      let pieData = [
        {value: 735, name: '已办'},
        {value: 1048, name: '在办'},
        {value: 580, name: '未办'},
      ]
      let option = {
        legend: {
          show: false,
        },
        series: [{
          name: '',
          type: 'pie',
          radius: ['55%', '70%'],
          center: ['50%', '46%'],
          clockwise: false,
          avoidLabelOverlap: false,
          hoverOffset: 10,
          legendHoverLink: true,
          label: {
            normal: {
              padding: [0, 0],
              // formatter: '{b|{b}}\n数量：{c|{c}%}\n占比：{d|{d}%}',
              formatter: '{b}\n数量：{c}\n占比：{d}%',
              color: '#fff',
              fontSize: 16,
            },
          },
          labelLine: {
            length:10,
            length2:20,
            show: true,
            color:'#00ffff'
          },
          data: pieData
        },
        {
          type: 'gauge',
          splitNumber: 3,
          radius: '72%',
          center: ['50%', '46%'],
          startAngle: 90,
          endAngle: -269.9999,
          axisLine: {
            show: false
          },
          axisTick: {
            show: true,
            lineStyle: {
              color: '#2D4C6A',
              width: 2
            },
            length: 12,
            splitNumber: 10
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          detail: {
            show: false
          }
        }]
      }
      let myChart = echarts.init(dom)
      myChart.setOption(option)
    },
    pieEchart4 () {
      let dom = document.getElementById("col4_chartPie")
      let data = [
        {
          name: "一级",
          value: 1,
        },
        {
          name: "二级",
          value: 5,
        },
        {
          name: "三级",
          value: 23,
        },
        {
          name: "四级",
          value: 9,
        }
      ]
      let option = {
        color: [
          "#00C2FF",
          "#0085FF",
          "#FFFF00",
          "#00CC03",
          "#00EAFF",
          "#FF9900",
          "#7B3DD1",
          "#0055FF",
          "#CC0000",
        ],
        title: {
          show: true,
          text: '18.5%',
          itemGap: 0, //主副标题之间的距离
          x: '15.5%', //水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
          y: 'center',
          textStyle: { //主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
            fontSize: 18,
            color: '#17A6FA'
          },
        },
        tooltip: {
          show: true,
          trigger: "axis",
          formatter: "{b}{c} ({d}%)",
          backgroundColor: "rgba(0, 21, 43)",
          textStyle: {
            color: '#fff',
            fontSize: 20,
          },
        },
        legend: {
          orient: "vertical", //设置图例的方向
          right: "8%",
          top: "center",
          itemHeight: 10,
          itemWidth: 10,
          itemGap: 10, //设置图例的间距
          icon: "rect", // 图例项的icon,类型包括 circle(圆形),rect(正方形),
          //roundRect(圆角正方形),triangle(三角形),diamond(菱形),
          //pin(大头针行),arrow(箭头形),none(无图例项的icon)
          formatter: (e) => {
            let ratio = 0;
            let value = 0;
            //  通过e的内容,获取后台的百分比和车数
            if (data.length > 0) {
              data.forEach((item) => {
                if (e == item.name) {
                  ratio = ((item.value * 100) / 3799).toFixed(0);
                  value = item.value;
                }
              });
            }
            let arr = [
              "{a|" + e + "}",
              // "{b|" + ratio + "%}",
              "{c|" + value + "}" + "\n{d|}",
            ];
            // //此处的a,b,c是textStyle里面配置的a,b,c,d可以自定义
            return arr.join("");
          },
          textStyle: {
            //图例文字的样式
            rich: {
              d: {
                width: "100%",
                borderWidth: 0.5,
                height: 0,
                backgroundColor: "1",
              },
              a: {
                width: 60,
                align: "left",
                fontSize: 16,
                color: "1",
              },
              b: {
                width: 40,
                align: "left",
                fontSize: 16,
                color: "1",
              },
              c: {
                width: 30,
                align: "left",
                fontSize: 16,
                color: "1",
              },
            },
          },
        },
        series: [
        // 最内刻度线
        {
          type: "gauge",
          radius: "70%",
          center: ["23%", "48%"],
          clockwise: true,
          startAngle: "90",
          endAngle: "-269.9999",
          splitNumber: 50, //线的条数
          pointer: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          tooltip: {
            show: false,
          },
          splitLine: {
            show: true,
            length: 5,
            lineStyle: {
              color: "rgba(52, 185, 232, .5)",
              width: 1,
            },
          },
          axisLabel: {
            show: false,
          },
        },
          // 数据
          {
            type: "pie",
            center: ["23%", "48%"],
            radius: ["52%", "72%"],
            label: {
              show: false,
            },
            data: data,
          },
        ],
      }
      let myChart = echarts.init(dom)
      myChart.setOption(option)
    },
    barEchart5 () {
      let dom = document.getElementById("col5_chartBar");
      let dataList = [4,6,3,4,10,3,4,6,3,5]
      let xData = ['平泉市','隆化县','双滦区', '承德县', '双桥区', '鹰手营子矿区', '围场满族蒙古自治区', '滦平县', '宽城满族自治区', '兴隆县']
      let option =  {
        color: ['#1A64F8'],
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
          left: '2%',
          right: '2%',
          top: '17%',
          bottom: '27%'
        },
        xAxis: [
          {
            type: 'category',
            data: xData,
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: {
              color: '#D9D9D9',
              fontSize: 16,
              rotate: -10,
              margin: 20,
              align: 'center'
            }
          }
        ],
        yAxis: {
          name: "警情数",
          nameTextStyle: {
            color: "#D9D9D9",
            padding: [0, 0, -5, 0],
            fontSize: 16,
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#D9D9D9',
            fontSize: 16,
          },
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "#244662"
            }
          },
        },
        series: [
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [30, 10],
            symbolOffset: [0, -5],
            symbolPosition: 'end',
            z: 12,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 1,
                    color: '#1A64F8',
                    opacity: 1
                  },
                  {
                    offset: 0,
                    color: '#82BEFF',
                    opacity: 1
                  }
                ])
                // barBorderRadius: 11,
              }
            },
            data: dataList
          },
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [30, 10],
            symbolOffset: [0, 5],
            z: 12,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 1,
                    color: '#82BEFF',
                    opacity: 1
                  },
                  {
                    offset: 0,
                    color: '#1A64F8',
                    opacity: 1
                  }
                ])
              }
            },
            data: dataList
          },
          {
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(216, 229, 247, 0.25)',
              borderRadius: [6, 6, 0, 0]
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#93C3FF',
                    opacity: 0.85
                  },
                  {
                    offset: 1,
                    color: '#246CFF',
                    opacity: 0.79
                  }
                ])
              }
            },
            barWidth: '30',
            data: dataList
          }
        ]
      }
      let myChart = echarts.init(dom)
      myChart.setOption(option)
    },
    barEchart6 () {
      let dom = document.getElementById("col6_chartBar");
      let xData = ['网吧', '酒店', 'WIFI', '基站', '人脸识别', '汽车', '火车', '飞机', '轮船'];
      let ydata = [30, 32, 29, 40, 32, 29, 33, 45, 29];
      let itemcolor = {
        type: 'linear',
        colorStops: [
            {
                offset: 0,
                color: 'rgba(6, 120, 157,1)',
            },
            {
                offset: 0.5,
                color: 'rgba(6, 120, 157,0.2)',
            },
            {
                offset: 1,
                color: 'rgba(6, 120, 157,1)',
            },
        ],
      }
      let option =  {
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
        toolbox: {
            show: false,
            feature: {
                saveAsImage: {
                    backgroundColor: '#031245',
                },
                restore: {},
            },
            iconStyle: {
                borderColor: '#c0c3cd',
            },
        },
        color: ['#00D7E9', 'rgba(0, 215, 233, 0.9)'],
        grid: {
            containLabel: true,
            left: 8,
            right: 8,
            bottom: 0,
            top: 25,
        },
        xAxis: {
          axisLabel: {
            color: '#D9D9D9',
            fontSize: 16,
            interval: 0,
          },
          axisTick: {
            show: false,
            lineStyle: {
              color: '#384267',
              width: 1,
            },
          },
          splitLine: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: '#335971',
            },
            show: true,
          },
          data: xData,
          type: 'category',
        },
        yAxis: { 
            name: '单位：人',
            nameTextStyle: {
              color: '#D9D9D9',
              padding: [0, 0, -5, 0],
              fontSize: 16,
            },
            axisLabel: {
              color: '#D9D9D9',
              fontSize: 16,
            },
            axisTick: {
              lineStyle: {
                color: '#668092',
                width: 1,
              },
              show: true,
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#335971',
                type: "dashed"
              },
            },
            axisLine: {
              show: false, 
            },
        },
        series: [
          {
            data: ydata,
            type: 'bar',
            barMaxWidth: 'auto',
            barWidth: 20,
            itemStyle: {
              color: {
                x: 0,
                y: 1,
                x2: 0,
                y2: 0,
                type: 'linear',
                colorStops: [
                  {
                    offset: 0,
                    color: '#00D7E9',
                  },
                  {
                    offset: 1,
                    color: 'rgba(0, 167, 233,0.3)',
                  },
                ],
              },
            },
            label: {
              show: false,
              position: 'top',
              distance: 10,
              color: '#fff',
            },
          },
          {
            data: [1, 1, 1, 1, 1, 1],
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbol: 'diamond',
            symbolOffset: [0, '50%'],
            symbolSize: [20, 10],
          },
          {
            data: ydata,
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [20, 12],
            zlevel: 2,
          },
        ], 
      }
      let myChart = echarts.init(dom)
      myChart.setOption(option)
    },
  },
}
</script> 
  
<style lang="scss" scoped>
  .col_1_container {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    .c_1_b_1_w {
      width: calc(100% - 10px);
      height: calc(70% - 10px);
      flex-shrink: 0; 
      .topSearchContent {
        width: 100%;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: end;
        position: absolute;
        top: 1%;
        right: 2%;
        :deep .el-date-editor.el-input {
          width: 483px;
          margin-left: 10px;
        }
        :deep .el-input__inner {
          height: 52px;
          line-height: 52px;
          background-color: #021F3C;
          font-size: 24px;
          color: #DEF0FF;
        }
        .police_count {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-right: 34px;
          border: 2px solid #634212;
          background-color: rgba(61, 50, 9, 0.6);
          border-radius: 5px;
          .img {
            width: 20px;
            height: 22px;
            margin-left: 6px;
          }
          .text {
            height: 46px;
            font-family: PangMenZhengDao, PangMenZhengDao;
            font-weight: normal;
            font-size: 20px;
            line-height: 47px;
            letter-spacing: 6px;
            font-style: normal;
            text-transform: none;
            text-stroke: 1px rgba(171,214,255,0.5);
            text-align: center;
            padding-left: 5px;
            margin-right: 66px;
            background: linear-gradient(180deg, #FFFFFF 0%, #f8d0aa 48%, #e97e19 100%);
            -webkit-text-stroke: 1px rgba(171,214,255,0.5);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .num {
            width: 28px;
            height: 34px;
            line-height: 34px;
            text-align: center;
            display: inline-block;
            color: #FFFFFF;  
            font-size: 22px;
            font-weight: 800;
            background: url("@/assets/images/layout/frame315059.png")no-repeat center;
            background-size: 100% 100%;
            margin-right: 5px;
          }
        }
        .btnClass {
          height: 28px;
          font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
          font-weight: normal;
          font-size: 20px;
          color: #00AAFF;
          line-height: 28px;
          text-align: left;
          font-style: normal;
          text-transform: none;
          padding: 6px 22px;
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
      .c_1_b_1 { 
        width: calc(25% - 10px);
        height: calc(30% - 10px);
        margin-right: 10px;
        flex-shrink: 0;
        display: inline-block;
        #col1_chartLine {
          width: 100%;
          height: 150px;
        }
      }
      .c_1_b_2 {
        width: calc(55% - 10px);
        height: calc(30% - 10px);
        flex-shrink: 0; 
        display: inline-block;
        .type6Box { 
          width: 100%;
          height: 50%;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          .type6Item { 
            width: 17%;
            height: 100%;
            display: flex;
            align-items: center;
            margin: 3px;
            :deep .el-progress--circle .el-progress__text {
              font-size: 16px !important;
              color: #FFF !important;
            }
            .type6Info {
              height: 80%;
              width: 80%;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              padding-left: 10px;
              p:nth-child(1) {
                height: 16px;
                font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
                font-weight: normal;
                font-size: 18px;
                color: #00AAFF;
                line-height: 16px;
                text-align: left;
                font-style: normal;
                text-transform: none;
              }
              p:nth-child(2) {
                height: 16px;
                font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
                font-weight: normal;
                font-size: 18px;
                color: #FFFFFF;
                line-height: 16px;
                text-align: left;
                font-style: normal;
                text-transform: none;
                margin: 5px 0;
              }
            }
          }
          .type6Item:nth-child(2){
            .type6Info {
              p:nth-child(1) {
                color: #F0F50F;
              }
            }
          }
          .type6Item:nth-child(3){
            .type6Info {
              p:nth-child(1) {
                color: #00EAFF;
              }
            }
          }
          .type6Item:nth-child(4){
            .type6Info {
              p:nth-child(1) {
                color: #743ED4; 
              }
            }
          }
          .type6Item:nth-child(5){
            .type6Info {
              p:nth-child(1) {
                color: #00CC03;
              }
            }
          }
          .type6Item:nth-child(6){
            .type6Info {
              p:nth-child(1) {
                color: #4080FF;
              }
            }
          }
          .type6Item:nth-child(7){
            .type6Info {
              p:nth-child(1) {
                color: #C0050F;
              }
            }
          }
          .type6Item:nth-child(8){
            .type6Info {
              p:nth-child(1) {
                color: #00AAFF;
              }
            }
          }
          .type6Item:nth-child(9){
            .type6Info {
              p:nth-child(1) {
                color: #FF9900;
              }
            }
          }
          .type6Item:nth-child(10){
            .type6Info {
              p:nth-child(1) {
                color: #00EAFF;
              }
            }
          }
        }
      }
      .c_1_b_3 { 
        width: calc(20% - 10px);
        height: calc(30% - 10px);
        margin-left: 10px;
        flex-shrink: 0;
        display: inline-block;
        #col3_chartPie {
          width: 100%;
          height: 150px;
        }
      } 
      .c_1_b_4 {
        width: calc(22% - 10px);
        height: 220px;
        margin-right: 10px;
        flex-shrink: 0;
        margin-top: 16px;
        display: inline-block;
        .pieBg {
          width: 155px;
          height: 147px;
          background: url('@/assets/images/layout/Group416.png') no-repeat center;  
          background-size: 100%;  
          position: absolute;
          top: 3%;
          left: 8%;
        }
        #col4_chartPie {
          width: 95%;
          height: 147px;
          position: absolute;
          top: 3%;
          left: 6%;
        }
      }
      .c_1_b_5 {
        width: calc(78% - 10px);
        height: 220px;
        flex-shrink: 0;
        margin-top: 16px;
        display: inline-block;
        #col5_chartBar {
          width: 100%;
          height: 100%;
        }
      }
    }

    .c_1_b_6_w {
      width: calc(100% - 10px);
      height: calc(38% - 10px);
      flex-shrink: 0; 
      .c_1_b_6_1_w_c, .c_1_b_6_2_w_c {
        width: calc(50% - 5px);
        height: calc(38% - 10px);
        display: inline-block;
      }
      .c_1_b_6_1_w_c {
        margin-right: 10px; 
        .c_1_b_6_1_w_b {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .c_1_b_6_1_c_1 {
            display: flex;
            justify-content: center;
            width: 18%;
            height: 150px;
            display: inline-block;
            font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
            font-weight: normal;
            font-size: 16px;
            color: #FFFFFF;
            text-align: center;
            font-style: normal;
            text-transform: none;
            background: url("@/assets/images/layout/Group321315056@2x1-1.png")no-repeat center;
            background-size: 100% 100%;
            padding-top: 12px;
            .num {
              width: 28px;
              height: 34px;
              line-height: 34px;
              text-align: center;
              display: inline-block;
              color: #FFFFFF;  
              background: url("@/assets/images/layout/Frame13213@2x.png")no-repeat center;
              background-size: 100% 100%;
              margin-top: 5px;
            }
          }
          .c_1_b_6_1_c_2 {
            width: 82%;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            align-items: center;
            margin-left: 10px;
            .c_1_b_6_1_m {
              width: 166px;
              height: 70px;
              margin-top: 5px;
              display: inline-block;
              font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
              font-weight: normal;
              font-size: 16px;
              color: #00A3FF;
              text-align: center;
              font-style: normal;
              text-transform: none;
              background: url("@/assets/images/layout/Group 1321316417@2x1.png")no-repeat center;
              background-size: 100% 100%;
              .name {
                margin-top: 15px;
              }
            }
            .c_1_b_6_1_m:nth-child(2) {
              background: url("@/assets/images/layout/Group 1321315196@2x2.png")no-repeat center;
              background-size: 100% 100%;
              color: #1866FF;
            }
            .c_1_b_6_1_m:nth-child(3) {
              background: url("@/assets/images/layout/Group 1321315196@2x3.png")no-repeat center;
              background-size: 100% 100%;
              color: #F7BA1E;
            }
            .c_1_b_6_1_m:nth-child(4) {
              background: url("@/assets/images/layout/Group 1321315196@2x4.png")no-repeat center;
              background-size: 100% 100%;
              color: #00EAFF;
            }
            .c_1_b_6_1_m:nth-child(5) {
              background: url("@/assets/images/layout/Group 1321315196@2x5.png")no-repeat center;
              background-size: 100% 100%;
              color: #8D4EDA;
            }
            .c_1_b_6_1_m:nth-child(6) {
              background: url("@/assets/images/layout/Group 1321315196@2x6.png")no-repeat center;
              background-size: 100% 100%;
              color: #00EAFF;
            }
            .c_1_b_6_1_m:nth-child(7) {
              background: url("@/assets/images/layout/Group 1321315196@2x7.png")no-repeat center;
              background-size: 100% 100%;
              color: #FF9900;
            }
            .c_1_b_6_1_m:nth-child(8) {
              background: url("@/assets/images/layout/Group 1321315196@2x8.png")no-repeat center;
              background-size: 100% 100%;
              color: #00AAFF;
            }
          }
        }
      }
      .c_1_b_6_2_w_c {
        height: 213px;
        #col6_chartBar {
          width: 100%;
          height: 148px;
        }
      }
    }
  }
</style>
    