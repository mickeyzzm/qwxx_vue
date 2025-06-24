<template>
    <PageColumnVue class="col_1_container" :width="23.33">
        <TopBlockVue title="重大活动概括" icon="frame343312x">
            <SubBlockVue tabs="活动状态统计" :moreShow="false" class="col_1c">
                <div class="c_1_b_6_1_c_1">
                    <div v-for="(item, index) in c_1_b_6_1_w_list" :key="index" class="c_1_b_6_1_m">
                        <p class="name">{{item.name}}</p>
                        <p class="num">{{item.num}} 名</p>
                    </div>
                </div>
            </SubBlockVue> 
            <SubBlockVue tabs="活动布防分析" :moreShow="false" class="col_2c">
                <div class="c_1_b_6_1_c_2">
                    <div v-for="(item, index) in c_1_b_6_2_w_list" :key="index" class="c_1_b_6_i">
                        <p class="label">{{item.name}}</p>
                        <p class="value">{{item.num}} {{ item.name == '车辆配置' ? '辆': '人' }}</p>
                    </div>
                </div>
            </SubBlockVue> 
            <SubBlockVue tabs="活动分布统计" :moreShow="false" class="col_4c"> 
                <div id="col_ChartBar"></div> 
            </SubBlockVue>
            <SubBlockVue tabs="活动等级统计" :moreShow="false" class="col_3c">
                <div class="col_chart_pieBg"></div>
                <div id="col_chartPie"></div>
                <div class="col_chart_pie_legend">
                    <div v-for="(item,index) in chartPieLegendList" :key="index" class="label">
                        <p :style="{backgroundColor: pieColorList[index]}"></p>
                        <p>{{ item.label}}  {{ item.value }}&nbsp;&nbsp;&nbsp;占比：<span :style="{color: pieColorList[index]}">{{ item.rate }}%</span></p>
                    </div>
                </div>
            </SubBlockVue> 
            <SubBlockVue tabs="活动变化趋势" :moreShow="false" class="col_5c">
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
                { name: '计划举办', num: 34 },
                { name: '正在举办', num: 6 },
                { name: '已结束', num: 3 }, 
            ],  
            c_1_b_6_2_w_list: [
                { name: '警力配置', num: 34 },
                { name: '车辆配置', num: 6 },
                { name: '装备配置', num: 3 }, 
                { name: '安保岗点', num: 3 }, 
            ], 
        }
    },
    mounted() {
        this.lineEchart()
        this.pieEchart()
        this.barErChart()
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
                    smooth: true, //是否平滑
                    showAllSymbol: true,
                    symbol: 'circle',
                    symbolSize: 7, 
                    itemStyle: {
                        color: '#00AAFF',
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
                                        color: 'rgba(0,151,228,0.9)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(4,3,243,0.05)',
                                    },
                                ],
                                false
                            ),
                            shadowColor: 'rgba(0,179,244, 0.9)',
                            shadowBlur: 20,
                        },
                    },
                    data: yData,
                }]
            }
            let myChart = echarts.init(dom)
            myChart.setOption(option)
        },
        pieEchart () {
        let dom = document.getElementById("col_chartPie")
        let colorList = ['#00C2FF', '#0085FF', '#FFFF00', '#3FD87C']
        let data = [{
            name: "三级",
            value: 6
        }, {
            name: "二级",
            value: 4
        }, {
            name: "一级",
            value: 6
        }, {
            name: "特级",
            value: 6
        }]
        let option = { 
            color: colorList,
            tooltip: {
                show: false,
                trigger: "axis",
                backgroundColor: "rgba(0, 21, 43)",
                textStyle: {
                    color: '#fff',
                    fontSize: 20,
                },
            },
            title: {
                text:  12 + '\n活动数',
                x: '48%',
                y: '36%',
                textAlign: 'center',
                textStyle: {
                    fontSize: '16',
                    fontWeight: '200',
                    color: '#fff',
                    textAlign: 'center',
                },
                
            },
            legend: {
                show: false,
            },
            series: [
                // 主要展示层的
                {
                    radius: ['45%', '70%'],
                    center: ['50%', '48%'],
                    type: 'pie',
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                    tooltip: {
                        show: false, 
                    },
                    data: data, 
                },
                // 边框的设置
                {
                    radius: ['60%', '76%'],
                    center: ['50%', '48%'],
                    type: 'pie',
                    label: {
                        show: false,
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
        barErChart () {
            let dom = document.getElementById("col_ChartBar")
            let dataList = [4,6,3,4,10]
            let xData = ['平泉市','双滦区','承德县', '双桥区', '围场满族蒙古族自治县']
            let option =  {
                color: ['#1A64F8'],
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
                left: '5%',
                right: '4%',
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
                name: "活动数",
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
                series: [{
                    type: 'bar',
                    data: dataList,
                    barWidth: '25%',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(0,244,255,1)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(0,77,167,1)' // 100% 处的颜色
                            }], false),
                            shadowColor: 'rgba(0,160,221,1)',
                            shadowBlur: 4,
                        }
                    },
                }]
            } 
            let myChart = echarts.init(dom)
            myChart.setOption(option)
        },
    },
}
</script>
<style lang="scss" scoped>
.col_1_container {
    .col_1c, .col_2c, .col_3c, .col_4c {
        width: 49%;
        margin-top: 10px;
        display: inline-block; 
    }
    
    .col_1c, .col_2c{
        height: 210px;
    }
    .col_3c, .col_4c {
        height: 257px;
    }
    .col_1c {
        float: left;
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
                    margin-left: 28px;
                    margin-top: 10px;
                }
                .num {
                    margin-top: 38px;
                    margin-left: 108px;
                }
            }
            .c_1_b_6_1_m:nth-child(1) {
                background: url("@/assets/images/layout/par142x1.png")no-repeat center;
                background-size: 100% 100%;
                color: #00C2FF;
            }
            .c_1_b_6_1_m:nth-child(2) {
                background: url("@/assets/images/layout/par142x2.png")no-repeat center;
                background-size: 100% 100%;
                color: #FFA800;
            }
            .c_1_b_6_1_m:nth-child(3) {
                background: url("@/assets/images/layout/par142x3.png")no-repeat center;
                background-size: 100% 100%;
                color: #AFCFFF;
            }  
        }
    } 
    .col_2c {
        float: right;
        .c_1_b_6_1_c_2 {
            display: flex;
            justify-content: space-between;
            .c_1_b_6_i {
                width: 139px;
                height: 140px;
                padding-top: 86px;
                padding-left: 30px;
                .label {
                    height: 12px;
                    font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
                    font-weight: normal;
                    font-size: 16px;
                    color: #FFFFFF;
                    line-height: 12px;
                    text-align: left;
                    font-style: normal;
                    text-transform: none;
                }
                .value {
                    height: 18px;
                    font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
                    font-weight: normal;
                    font-size: 18px;
                    color: #00AAFF;
                    line-height: 18px;
                    text-align: left;
                    font-style: normal;
                    text-transform: none;
                    margin-top: 5px;
                }
            }
            .c_1_b_6_i:nth-child(1) {
                background: url("@/assets/images/layout/Grou21314932x1.png")no-repeat center;
                background-size: 100% 100%;
            }
            .c_1_b_6_i:nth-child(2) {
                background: url("@/assets/images/layout/Grou21314932x2.png")no-repeat center;
                background-size: 100% 100%;
            }
            .c_1_b_6_i:nth-child(3) {
                background: url("@/assets/images/layout/Grou21314932x3.png")no-repeat center;
                background-size: 100% 100%;
            }
            .c_1_b_6_i:nth-child(4) {
                background: url("@/assets/images/layout/Grou21314932x4.png")no-repeat center;
                background-size: 100% 100%;
            } 
        }
    }
    .col_3c {
        position: relative; 
        margin-left: 20px; 
        #col_chartPie {
            width: 50%;
            height: 90%;
            position: absolute;
            top: 10%;
            left: 2%;
        }
        .col_chart_pieBg {
            width: 31%;
            height: 80%;
            position: absolute;
            top: 14%;
            left: 11.7%;
            background: url("@/assets/images/layout/Grou13213164432x.png")no-repeat center;
            background-size: 100% 100%;
        }
        .col_chart_pie_legend {
            position: absolute;
            top: 5%;
            right: 0%;
            width: 50%;
            height: 90%; 
            .label {
                width: 75%;
                height: 35px; 
                background: url("@/assets/images/layout/pieBg12x.png")no-repeat center;
                background-size: 100% 100%;
                display: flex;
                align-items: center;
                margin-top: 10px;
                margin-left: 10px;
                p:nth-child(1) { 
                    width: 10px;
                    height: 10px;
                    box-sizing: border-box;
                    border-radius: 50%;
                    background:rgba(0, 170, 255, 1);
                    margin: 0 10px 0 18px;
                    margin-top: 3px;
                }
                p:nth-child(2) {
                    font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
                    font-weight: normal;
                    font-size: 16px;
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
        margin-top: 2%; 
        #col_ChartBar {
            width: 100%;
            height: 100%;
        } 
    }
    .col_5c {
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