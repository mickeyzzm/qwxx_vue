<template>
    <PageColumnVue class="col_1_container" :width="23.33">
        <TopBlockVue title="重点目标场所概览" icon="frame343312x">
            <SubBlockVue tabs="场所分类统计" :moreShow="false" class="col_1c">
                <div class="c_1_b_6_1_c_2">
                    <div v-for="(item, index) in c_1_b_6_1_w_list" :key="index" class="c_1_b_6_1_m">
                        <p class="name">{{item.name}}</p>
                        <p class="num">{{item.num}} 名</p>
                    </div>
                </div>
            </SubBlockVue>
            <SubBlockVue tabs="重点目标场所区域分布" :moreShow="false" class="col_2c">
                <div id="col_chartBar"></div>
            </SubBlockVue>
            <SubBlockVue tabs="重点目标场所分类占比分析" :moreShow="false" class="col_3c">
                <div class="col_chart_pieBg"></div>
                <div id="col_chartPie"></div>
                <div class="col_chart_pie_legend">
                    <div v-for="(item,index) in chartPieLegendList" :key="index" class="label">
                        <p :style="{backgroundColor: pieColorList[index]}"></p>
                        <p>{{ item.label }}</p>
                    </div>
                </div>
            </SubBlockVue>
            <SubBlockVue tabs="警情高发场所" :moreShow="false" class="col_4c">
                <div class="col_r_content">
                    <div id="col_4scatterChart"></div>
                </div>
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
                { label: '党政机关' },{ label: '文化场馆' },
                { label: '市场商超' },{ label: '医疗机构' },
                { label: '展销场所' },{ label: '体育场馆' },
                { label: '养老院' },{ label: '学校' },
                { label: '娱乐休闲场所' },{ label: '场站码头' },
                { label: '企事业单位' },{ label: '加油加气站' },
                { label: '酒店宾馆' },{ label: '福利院' },
            ],
                pieColorList: [
                '#00FFFF', '#0085FF', '#8D4EDA', '#FFFF00', '#5E4AB4', '#4080FF','#FF9900',
                '#00C2FF', '#F9CC45', '#9FDB1D', '#00CC03', '#CFAF0F', '#0E42D2','#FBE842'
            ], 
            c_1_b_6_1_w_list: [
                { name: '前科', num: 34 },
                { name: '在逃', num: 6 },
                { name: '涉毒', num: 3 },
                { name: '上访', num: 12 },
                { name: '涉恐', num: 2 },
                { name: '涉稳', num: 43 },
                { name: '精神病', num: 23 },
                { name: '其他', num: 8 },
                { name: '涉恐', num: 2 },
                { name: '涉稳', num: 43 },
                { name: '精神病', num: 23 },
                { name: '其他', num: 8 },
                { name: '涉恐', num: 2 },
                { name: '涉稳', num: 43 },
            ],  
        }
    },
    mounted() {
        this.barEchart()
        this.pieEchart()
        this.scattErChart()
    },
    methods: {
        barEchart () {
        let dom = document.getElementById("col_chartBar")
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
                rotate: -15,
                margin: 20,
                align: 'center'
                }
            }
            ],
            yAxis: {
            name: "单位：个",
            nameTextStyle: {
                color: "#D9D9D9",
                padding: [0, 0, -5, 20],
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
                symbolSize: [25, 10],
                symbolOffset: [0, -5],
                symbolPosition: 'end',
                z: 12,
                label: {
                normal: {
                    show: true,
                    position: 'top',
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#00AAFF',
                },
                },
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
                symbolSize: [25, 10],
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
                showBackground: false,
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
                barWidth: '25',
                data: dataList
            }
            ]
        }
        let myChart = echarts.init(dom)
        myChart.setOption(option)
        },
        pieEchart () {
        let dom = document.getElementById("col_chartPie")
        let colorList = [
            '#00FFFF', '#0085FF', '#8D4EDA', '#FFFF00', '#5E4AB4', '#4080FF','#FF9900',
            '#00C2FF', '#F9CC45', '#9FDB1D', '#00CC03', '#CFAF0F', '#0E42D2','#FBE842'
        ]
        let data = [{
            name: "前科1",
            value: 20
        }, {
            name: "涉恐",
            value: 18
        }, {
            name: "涉毒2",
            value: 15
        }, {
            name: "神经病",
            value: 10
        }, {
            name: "在逃3",
            value: 10
        }, {
            name: "涉稳",
            value: 20
        }, {
            name: "上访4",
            value: 20
        }, {
          name: "其他5",
          value: 20
        }, {
            name: "涉稳6",
            value: 20
        }, {
            name: "上访7",
            value: 20
        }, {
          name: "其他8",
          value: 20
        }, {
            name: "涉稳9",
            value: 20
        }, {
            name: "上访10",
            value: 20
        }, {
          name: "其他11",
          value: 20
        }, {
            name: "涉稳12",
            value: 20
        }, {
            name: "上访13",
            value: 20
        }, {
          name: "其他14",
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
          title: {
            text: '场所分类',
            x: '47%',
            y: '42%',
            textAlign: 'center',
            textStyle: {
                fontSize: '18',
                fontWeight: '200',
                color: '#fff',
                textAlign: 'center',
                textShadowColor: '#000',
                textShadowBlur: '1',
                textShadowOffsetX: 4,
                textShadowOffsetY: 4,
            },
            
        },
          legend: {
            show: false,
          },
          series: [
              // 主要展示层的
              {
                  radius: ['45%', '90%'],
                  center: ['50%', '48%'],
                  type: 'pie',
                  label: {
                    normal: {
                        show: false,
                        fontSize: '18',
                        color: '#D9D9D9'
                    },
                    emphasis: {
                        show: false
                    }
                  },
                  labelLine: {
                    show: false,
                  },
                  data: data,

              },
              // 边框的设置
              {
                  radius: ['80%', '96%'],
                  center: ['50%', '48%'],
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
        let myChart = echarts.init(dom);
        myChart.setOption(option);
    },
        scattErChart () {
            let dom = document.getElementById("col_4scatterChart")
            let data = [
                {
                    name: '娱乐休闲场所',
                    value: '395',
                },
                {
                    name: '学校',
                    value: '373',
                },
                {
                    name: '酒店宾馆',
                    value: '347',
                },
                {
                    name: '市场商超',
                    value: '227',
                },
                {
                    name: '体育场馆',
                    value: '188',
                },
                {
                    name: '养老院',
                    value: '143',
                },
                {
                    name: '场站码头',
                    value: '128',
                }
            ]
            //偏移量
            var offsetData = [
                [55, 48],
                [35, 75],
                [30, 28],
                [70, 77],
                [10, 51],
                [50, 13],
                [80, 28],
            ];
            //symbolSize 散点气泡大小
            var symbolSizeData = [120, 98, 87, 86, 63, 62, 51];
            //
            //循环定义series的data值
            var datas = [];
            for (var i = 0; i < data.length; i++) {
                var item = data[i];

                datas.push({
                    // name: item.name + '\n' + item.value + '人',
                    name: item.name,
                    value: offsetData[i],
                    symbolSize: symbolSizeData[i],
                    label: {
                        normal: {
                            textStyle: {
                                fontSize: 16,
                            },
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.RadialGradient(0.3, 0.5, 0.7, [
                                {
                                    offset: 0,
                                    color: 'rgba(31,102,162,0)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(31,102,192,0.8)',
                                },
                            ]),
                            opacity: 0.8,
                            shadowColor: '#2e78eca8',
                            shadowBlur: 10,
                            shadowOffsetX: 1,
                            shadowOffsetY: 1,
                        },
                    },
                });
            }
            let option =  {
                grid: {
                    show: false,
                    top: 10,
                    bottom: 10,
                },
                xAxis: {
                    type: 'value',
                    show: false,
                    min: 0,
                    max: 100,
                    nameLocation: 'middle',
                    nameGap: 5,
                },
                yAxis: {
                    min: 0,
                    show: false,
                    max: 100,
                    nameLocation: 'middle',
                    nameGap: 30,
                },

                series: [
                    {
                        type: 'scatter',
                        symbol: 'circle',
                        symbolSize: 120,
                        label: {
                            normal: {
                                show: true,
                                formatter: '{b}',
                                color: '#fff',
                                textStyle: {
                                    fontSize: '16',
                                },
                            },
                        },
                        itemStyle: {
                            normal: {
                                color: '#00acea',
                            },
                        },
                        data: datas,
                    },
                ]
            }
            let myChart = echarts.init(dom)
            myChart.setOption(option)
        },
    },
}
</script>
<style lang="scss" scoped>
.col_1_container {
    .col_1c {
        width: 100%;
        height: 210px;
        margin-top: 10px;
        .c_1_b_6_1_c_2 {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            align-items: center;
            .c_1_b_6_1_m {
                width: 166px;
                height: 70px;
                margin-top: 5px;
                font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
                font-weight: normal;
                font-size: 16px;
                color: #00A3FF;
                text-align: center;
                font-style: normal;
                text-transform: none; 
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                padding: 15px 0;
            }
            .c_1_b_6_1_m:nth-child(1) {
                background: url("@/assets/images/layout/Group5196x1.png")no-repeat center;
                background-size: 100% 100%;
                color: #00A3FF;
            }
            .c_1_b_6_1_m:nth-child(2) {
                background: url("@/assets/images/layout/Group5196x2.png")no-repeat center;
                background-size: 100% 100%;
                color: #00EAFF;
            }
            .c_1_b_6_1_m:nth-child(3) {
                background: url("@/assets/images/layout/Group5196x3.png")no-repeat center;
                background-size: 100% 100%;
                color: #9254FF;
            }
            .c_1_b_6_1_m:nth-child(4) {
                background: url("@/assets/images/layout/Group5196x4.png")no-repeat center;
                background-size: 100% 100%;
                color: #00CC03;
            }
            .c_1_b_6_1_m:nth-child(5) {
                background: url("@/assets/images/layout/Group5196x5.png")no-repeat center;
                background-size: 100% 100%;
                color: #00A3FF;
            }
            .c_1_b_6_1_m:nth-child(6) {
                background: url("@/assets/images/layout/Group5196x6.png")no-repeat center;
                background-size: 100% 100%;
                color: #F7BA1E;
            }
            .c_1_b_6_1_m:nth-child(7) {
                background: url("@/assets/images/layout/Group5196x7.png")no-repeat center;
                background-size: 100% 100%;
                color: #00CC03;
            }
            .c_1_b_6_1_m:nth-child(8) {
                background: url("@/assets/images/layout/Group5196x8.png")no-repeat center;
                background-size: 100% 100%;
                color: #9254FF;
            }
            .c_1_b_6_1_m:nth-child(9) {
                background: url("@/assets/images/layout/Group5196x9.png")no-repeat center;
                background-size: 100% 100%;
                color: #F7BA1E;
            }
            .c_1_b_6_1_m:nth-child(10) {
                background: url("@/assets/images/layout/Group5196x10.png")no-repeat center;
                background-size: 100% 100%;
                color: #00EAFF;
            }
            .c_1_b_6_1_m:nth-child(11) {
                background: url("@/assets/images/layout/Group5196x11.png")no-repeat center;
                background-size: 100% 100%;
                color: #00A3FF;
            }
            .c_1_b_6_1_m:nth-child(12) {
                background: url("@/assets/images/layout/Group5196x12.png")no-repeat center;
                background-size: 100% 100%;
                color: #9254FF;
            }
            .c_1_b_6_1_m:nth-child(13) {
                background: url("@/assets/images/layout/Group5196x13.png")no-repeat center;
                background-size: 100% 100%;
                color: #00A3FF;
            }
            .c_1_b_6_1_m:nth-child(14) {
                background: url("@/assets/images/layout/Group5196x14.png")no-repeat center;
                background-size: 100% 100%;
                color: #00EAFF;
            }
        }
    }
    .col_2c {
        width: 100%;
        height: 257px;
        margin-top: 10px;
        #col_chartBar {
            width: 100%;
            height: 100%;
        }
    }
    .col_3c, .col_4c {
        width: 49.5%;
        height: 257px;
        margin-top: 10px;
        display: inline-block; 
    }
    .col_3c {
        position: relative; 
        .col_chart_pieBg {
            width: 33%;
            height: 90%;
            position: absolute;
            top: 10%;
            left: 2%;
            background: url("@/assets/images/layout/Grou13213164432x.png")no-repeat center;
            background-size: 100% 100%;
        }
        #col_chartPie {
            width: 33%;
            height: 90%;
            position: absolute;
            top: 10%;
            left: 2%;
        }
        .col_chart_pie_legend {
            position: absolute;
            top: 10%;
            right: 0%;
            width: 65%;
            height: 90%;
            display: flex;
            flex-wrap: wrap;
            justify-content: start;
            .label {
                width: 29%;
                height: 35px; 
                background: url("@/assets/images/layout/pieBg12x.png")no-repeat center;
                background-size: 100% 100%;
                display: flex;
                align-items: center;
                padding-left: 10px;
                margin-left: 10px;
                p:nth-child(1) { 
                    width: 8px;
                    height: 8px;
                    box-sizing: border-box;
                    border-radius: 50%;
                    background:rgba(0, 170, 255, 1);
                    margin-right: 4px;
                }
                p:nth-child(2) {
                    font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
                    font-weight: normal;
                    font-size: 14px;
                    color: #FFFFFF;
                    text-align: left;
                    font-style: normal;
                    text-transform: none;
                }
            }
        }
    }
    .col_4c {
        display: inline-block;
        margin-left: 10px; 
        .col_r_content {
            width: 100%;
            height: 95%;
            background: url("@/assets/images/layout/param182x.png")no-repeat center;
            background-size: 100% 100%;
            margin-top: 2%;
            #col_4scatterChart {
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>