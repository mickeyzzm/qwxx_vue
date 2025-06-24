<template>
    <PageColumnVue class="col_1_container" :width="23.33">
        <TopBlockVue title="重大事件概况" icon="frame_212x">
            <SubBlockVue tabs="重大事件统计" :moreShow="false" class="col_1c">
                <div class="top_total">
                    <div>重大事件数</div>
                    <div class="total_num">123456 <span>起</span></div>
                </div>
                <div class="c_1_b_6_1_c_1">
                    <div v-for="(item, index) in c_1_b_6_1_w_list" :key="index" class="c_1_b_6_1_m">
                        <p class="name">{{item.name}}</p>
                        <p class="num">{{item.num}} 名</p>
                    </div>
                </div>
            </SubBlockVue> 
            <SubBlockVue tabs="事件分类统计" :moreShow="false" class="col_2c">
                <div class="c_1_b_6_1_c_2">
                    <div v-for="(item, index) in c_1_b_6_2_w_list" :key="index" class="c_1_b_6_i">
                        <p class="value">{{item.num}}</p>
                        <p class="label">{{item.name}} <span>{{item.rate}}%</span></p>
                    </div>
                </div>
                <div id="col_chartBarRow"></div>
            </SubBlockVue> 
            <SubBlockVue tabs="重大事件警力资源配置" :moreShow="false" class="col_3c">  
                <div class="c_1_l_1_w">
                    <div class="table_t_title">
                        <img src="../../../assets/images/layout/Group1322x1.png" alt="" class="img">
                        <div class="right">
                            <p>配备警员</p>
                            <div class="num_b"><p class="num">2145</p><span>人</span></div>
                        </div>
                    </div>
                    <div class="table_t_title">
                        <img src="../../../assets/images/layout/Group1322x2.png" alt="" class="img">
                        <div class="right">
                            <p>配备车辆</p>
                            <div class="num_b"><p class="num">4253</p><span>辆</span></div>
                        </div>
                    </div>
                    <div class="table_t_title">
                        <img src="../../../assets/images/layout/Group1322x1.png" alt="" class="img">
                        <div class="right">
                            <p>在线警员</p>
                            <div class="num_b"><p class="num">4562</p><span>人</span></div>
                        </div>
                    </div> 
                    <div class="table_t_title">
                        <img src="../../../assets/images/layout/Group1322x2.png" alt="" class="img">
                        <div class="right">
                            <p>在线车辆</p>
                            <div class="num_b"><p class="num">3615</p><span>辆</span></div>
                        </div>
                    </div>
                </div>
            </SubBlockVue> 
            <SubBlockVue tabs="重大事件趋势分析" :moreShow="false" class="col_4c">
                <div id="col_chartLine"></div>
            </SubBlockVue>
        </TopBlockVue>
    </PageColumnVue>
</template>
<script>
import * as echarts from "echarts";
import TopBlockVue from "@/components/layout/TopBlock"
import PageColumnVue from "@/components/layout/PageColumn"
import SubBlockVue from "@/components/layout/SubBlock"
export default {
    name: "Column1Com",
    components: {
        TopBlockVue,
        PageColumnVue,
        SubBlockVue,
    },
    data() {
        return {
            player: null,
            VideoDialogVisible: false,
            chartPieLegendList: [
                { label: '三级', value: 6, rate: '36.7'},{ label: '二级', value: 4, rate: '25.1' },
                { label: '一级', value: 6, rate: '22.8' },{ label: '特级', value: 6, rate: '15.4' },
            ],
            pieColorList: ['#00C2FF', '#0085FF', '#FFFF00', '#3FD87C'], 
            c_1_b_6_1_w_list: [
                { name: '待处置', num: 225 },
                { name: '处置中', num: 462 },
                { name: '已完结', num: 462 }, 
            ],  
            c_1_b_6_2_w_list: [
                { name: '自然灾害', num: 128, rate: 23 },
                { name: '事故灾害', num: 50, rate: 23 },
                { name: '公共卫生', num: 1, rate: 23 }, 
                { name: '社会安全', num: 1, rate: 23 }, 
            ], 
        }
    },
    mounted() {
        this.lineEchart()
        this.barEchart()
    },
    methods: {
        lineEchart () {
            let dom = document.getElementById("col_chartLine")
            let yData = [224,136,133,194,170,200,202,103,213,223,192,211,323,192,234,159]
            let xData = ['3/01','3/02','3/03', '3/04', '3/05', '3/06', '3/07', '3/08', '3/09', '3/10', '3/11', '3/12', '3/13', '3/14', '3/15', '3/16']
            let option =  { 
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
                    left: '4%',
                    right: '2%',
                    top: '4%',
                    bottom: '18%'
                },
                xAxis: [{
                    type: 'category',
                    data: xData,
                    axisTick: {
                        show: false,
                        alignWithLabel: true
                    },
                    axisLabel: {
                        color: '#D9D9D9',
                        fontSize: 16,
                        rotate: -15,
                        margin: 20,
                        align: 'center'
                    }
                }],
                yAxis: { 
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
                series: [{
                    type: 'line',
                    smooth: false, //是否平滑
                    showAllSymbol: true,
                    symbol: 'circle',
                    symbolSize: 0, 
                    itemStyle: {
                        color: '#00EAFF',
                        borderColor: '#fff',
                        borderWidth: 2,
                        shadowColor: 'rgba(0, 0, 0, .3)',
                        shadowBlur: 0,
                        shadowOffsetY: 2,
                        shadowOffsetX: 2,
                    }, 
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0,
                                0,
                                0,
                                1,
                                [
                                    {
                                        offset: 0,
                                        color: 'rgba(0,234,255,0.9)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(0,234,255,0)',
                                    },
                                ],
                                false
                            ),
                            shadowColor: '#00EAFF',
                            shadowBlur: 20,
                        },
                    },
                    data: yData,
                }]
            }
            let myChart = echarts.init(dom)
            myChart.setOption(option)
        },
        barEchart () {
            let dom = document.getElementById("col_chartBarRow")
            let nameArray = []; // 名称
        let numArray = []; // 值
        let totalArray = []; // 合计
        let symbolArray = []; // 条形图尾部标志
        let max = 0;
        let chartData = [
          {
            name: '低温冻害',
            value: 10
          },
          {
            name: '雪灾',
            value: 9
          },
          {
            name: '森林火灾',
            value: 8
          },
          {
            name: '洪涝',
            value: 7
          },
          {
            name: '高温天气',
            value: 6
          },
          {
            name: '水库重大险情',
            value: 6
          },
          {
            name: '滑坡',
            value: 5
          },
          {
            name: '塌陷',
            value: 5
          },
          {
            name: '冰雹',
            value: 4
          },
          {
            name: '生态干旱',
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
            top: 2,
            bottom: 0,
            left: '30%',
            right: 40
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
                color: '#00AAFF',
                fontSize: '20'
              },
              align: 'right',
              padding: [0, -20, -20, 0],
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
                    color: 'rgba(0, 148, 255, .3)'
                  }, {
                    offset: 1,
                    color: '#25A1FF'
                  }])
                }
              },
              barWidth: 8,
              data: numArray,
              label: {
                normal: {
                  color: '#fff',
                  show: true,
                  position: ['-150px', '-23px'],
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
                      fontSize: '14',
                      fontFamily: 'OPPOSans',
                      color: '#018FFC',
                      width: 20,
                      height: 20,
                      backgroundColor: 'rgba(60, 220, 146, .1)',
                      padding: [0, 0, 0, 5]
                    },
                    a: {
                      fontSize: '16',
                      fontFamily: 'OPPOSans',
                      color: '#018FFC',
                      width: 15,
                      height: 20,
                      backgroundColor: 'rgba(60, 220, 146, .1)',
                      padding: [0, 0, 0, 8]
                    },
                    b: {
                      fontSize: '14',
                      fontFamily: 'customFont',
                      color: '#FFFFFF',
                      padding: [20, 0, 20, 10]
                    }
                  }
                }
              }
            },
            // 背景条形图
            {
              name: '背景',
              type: 'bar',
              barWidth: 10,
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
        let myChart = echarts.init(dom);
        myChart.setOption(option);
        }, 
    },
}
</script>
<style lang="scss" scoped>
.col_1_container { 
  .col_1c {
    width: 49%;
    height: 220px;
    display: inline-block; 
    float: left;
    .top_total {
      height: 40px;
      background: url("@/assets/images/layout/Frame090672x.png")no-repeat center;
      background-size: 100% 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;  
      font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
      font-weight: normal;
      font-size: 18px;
      color: #FFFFFF;
      text-align: left;
      font-style: normal;
      text-transform: none;
      .total_num {
        color: #00AAFF;
        font-size: 20px;
        span {
          font-size: 16px;
        }
      }
    }
    .c_1_b_6_1_c_1 {
      display: flex;
      justify-content: space-between;
      .c_1_b_6_1_m {
        width: 205px;
        height: 114px;
        margin-top: 5px;
        font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
        font-weight: normal;
        font-size: 16px;
        font-style: normal;
        text-transform: none;  
        .name {
          margin-left: 30px;
          margin-top: 12px;
        }
        .num {
          margin-top: 38px;
          text-align: center;
        }
      }
      .c_1_b_6_1_m:nth-child(1) {
        background: url("@/assets/images/layout/par142x31.png")no-repeat center;
        background-size: 100% 100%;
        color: #00C2FF;
      }
      .c_1_b_6_1_m:nth-child(2) {
        background: url("@/assets/images/layout/par142x32.png")no-repeat center;
        background-size: 100% 100%;
        color: #FFA800;
      }
      .c_1_b_6_1_m:nth-child(3) {
        background: url("@/assets/images/layout/par142x33.png")no-repeat center;
        background-size: 100% 100%;
        color: #00EAFF;
      }  
    }
  } 
  .col_2c {
    width: 49%;
    display: inline-block; 
    height: 490px;
    float: right;
    #col_chartBarRow {
      width: 100%;
      height: 84%; 
      margin-top: 20px;
    } 
    .c_1_b_6_1_c_2 {
      display: flex;
      justify-content: space-between;
      .c_1_b_6_i {
        width: 147px;
        height: 56px;
        background: url("@/assets/images/layout/Frame0190692x2.png")no-repeat center;
        background-size: 100% 100%;  
        .value{
          height: 14px;
          line-height: 14px;
          font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
          font-weight: normal;
          font-size: 24px;
          color: #0091FF;
          text-align: center;
          font-style: normal;
          text-transform: none;
          margin-top: 10px;
        }
        .label{
          font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
          font-weight: normal;
          font-size: 18px;
          color: #AEE2FF; 
          text-align: center;
          font-style: normal;
          text-transform: none;
          margin-top: 5px;
          span {
            padding-left: 10px;
          }
        }
      }
      .c_1_b_6_i:nth-child(1) {
        background: url("@/assets/images/layout/Frame0190692x1.png")no-repeat center;
        background-size: 100% 100%;
        .value {
          color:  #00EAFF;
        }
        .label {
          color: #B8F9FF;
        }
      } 
    }
  } 
  .col_3c {
    width: 49%;
    height: 257px;
    display: inline-block;
    margin-top: 10px;  
    .c_1_l_1_w {
      width: 100%;
      height: 12%;
      .table_t_title{
        width: 48.5%;
        height: 82px;
        display: inline-block;
        margin: 10px 0px 10px 0px;
        font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
        font-weight: normal;
        font-size: 16px;
        color: #00A3FF;
        font-style: normal;
        text-transform: none;
        background: url("@/assets/images/layout/Frame0672x.png")no-repeat center;
        background-size: 100% 100%;
        margin-left: 8px; 
        padding-right: 22px; 
        .img {
          width: 70px;
          height: 80px;
          display: inline-block;
          float: left;
        }
        .right {
          display: inline-block;
          margin-top: 12px;
          float: right;
          color: #CDE9FF;
          .num_b {
            display: flex;
            justify-content: end;
            align-items: center;
            .num {
              font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
              font-weight: normal;
              font-size: 24px;
              color: #00AAFF; 
              font-style: normal;
              text-transform: none;
              margin-top: 12px;
            }
            span {
              padding-top: 12px;
              padding-left: 5px;
              color: #00AAFF; 
            }
          }
        }
      }   
    }
  }
  .col_4c {
    width: 100%;
    height: 257px;
    margin-top: 10px;
    #col_chartLine {
      width: 100%;
      height: 100%;
    }
  }
}
</style>