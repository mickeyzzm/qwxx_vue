<template>
  <PageColumnVue class="col_3_container" :width="33.33">
    <TopBlockVue title="车辆布控概览" icon="Frame002x" />
    <div class="col_3_w">
        <div class="c_1_l_1_w">
            <SubBlockVue tabs="近7天车辆布控信息统计" :moreShow="false">
                <div class="table_t_left_title">
                    <p>近7日布控车辆总量</p>
                    <p>46 <span>人</span></p>
                </div>
                <div class="table_t_right_title">
                    <p>近7日预警车辆总量</p>
                    <p>68 <span>人</span></p>
                </div>
                <div id="car7_chartLine"></div>
            </SubBlockVue>
            <SubBlockVue tabs="近30天车辆布控信息统计" :moreShow="false" style="margin-top: 15px;">
                <div class="table_b_left_title">
                    <p>近30天布控车辆总量</p>
                    <p>500 <span>人</span></p>
                </div>
                <div class="table_b_right_title">
                    <p>近30天布控车辆总量</p>
                    <p>608 <span>人</span></p>
                </div>
                <div id="car30_chartLine"></div>
            </SubBlockVue>
        </div>
        <div class="c_1_l_2_w">
            <SubBlockVue tabs="人民触网信息列表" :moreShow="false">
                <div class="table_info">
                    <div class="tableHeader">
                        <p>序号</p>
                        <p>车牌号</p>
                        <p>抓拍地址</p>
                        <p>触网预警时间</p>
                    </div>
                    <vue-seamless-scroll v-if="tableData.length > 0" :data="tableData" :class-option="classOption" class="seamless_warp">
                        <div class="tableBody">
                            <div v-for="(item, index) in tableData" :key="index" class="tableItem">
                                <div class="index">{{ index + 1 }}</div>
                                <div class="name">{{ item.carId }}</div>
                                <div class="name">{{ item.adress }}</div>
                                <div class="name">{{ item.time }}</div>
                            </div> 
                        </div>
                    </vue-seamless-scroll>
                </div>
            </SubBlockVue>
        </div>
        <div class="c_1_l_3_w">
            <SubBlockVue tabs="人民触网抓拍照片" :moreShow="false">
                <div class="c_1_l_2_b">
                    <div v-for="(item, index) in 9" :key="index" class="c_1_l_2_car"> 
                    <img src="../../../assets/images/layout/1733105909453.png" alt="" class="img">
                    <p class="text">冀H7D622</p>
                    <p class="text">2024-03-15 17:23:10</p>
                    </div>
                </div>
            </SubBlockVue>
        </div>
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
                { carId: '冀H7D622', adress: '承德市双桥区卡镇', time: '2024-03-15 17:23:10' },
                { carId: '冀H7D622', adress: '承德市双桥区卡镇', time: '2024-03-15 17:23:10' },
                { carId: '冀H7D622', adress: '承德市双桥区卡镇', time: '2024-03-15 17:23:10' },
                { carId: '冀H7D622', adress: '承德市双桥区卡镇', time: '2024-03-15 17:23:10' },
                { carId: '冀H7D622', adress: '承德市双桥区卡镇', time: '2024-03-15 17:23:10' },
                { carId: '冀H7D622', adress: '承德市双桥区卡镇', time: '2024-03-15 17:23:10' },
                { carId: '冀H7D622', adress: '承德市双桥区卡镇', time: '2024-03-15 17:23:10' },
                { carId: '冀H7D622', adress: '承德市双桥区卡镇', time: '2024-03-15 17:23:10' },
                { carId: '冀H7D622', adress: '承德市双桥区卡镇', time: '2024-03-15 17:23:10' },
                { carId: '冀H7D622', adress: '承德市双桥区卡镇', time: '2024-03-15 17:23:10' },
                { carId: '冀H7D622', adress: '承德市双桥区卡镇', time: '2024-03-15 17:23:10' },
                { carId: '冀H7D622', adress: '承德市双桥区卡镇', time: '2024-03-15 17:23:10' },
                { carId: '冀H7D622', adress: '承德市双桥区卡镇', time: '2024-03-15 17:23:10' },
                { carId: '冀H7D622', adress: '承德市双桥区卡镇', time: '2024-03-15 17:23:10' },
                { carId: '冀H7D622', adress: '承德市双桥区卡镇', time: '2024-03-15 17:23:10' },
                { carId: '冀H7D622', adress: '承德市双桥区卡镇', time: '2024-03-15 17:23:10' },
                { carId: '冀H7D622', adress: '承德市双桥区卡镇', time: '2024-03-15 17:23:10' },
                { carId: '冀H7D622', adress: '承德市双桥区卡镇', time: '2024-03-15 17:23:10' },
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
      this.lineTopEchart()
      this.lineBotpEchart()
    },
    methods: {
     lineTopEchart () {
        let dom = document.getElementById("car7_chartLine");
        let color = [ "#0091FF", "#00EAFF"]
        let yAxisData1 = [18,19,23,16,14,24,15]
        let yAxisData3 = [14,13,15,14,10,20,12]
        let xAxisData = ['3/01','3/02','3/03', '3/04', '3/05', '3/06', '3/07']
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
                right: 10,
                containLabel: true
            },
            xAxis: [{ 
                type: "category",
                boundaryGap: false,
                axisLabel: {
                    show: false,
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
                name: "布控/预警人数（人）",
                nameTextStyle: {
                    color: "#D9D9D9",
                    padding: [0, 0, -5, 90],
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
                            }
                            ],
                            false
                        ),
                        shadowColor: hexToRgba(color[1], 0.1),
                        shadowBlur: 10
                    }
                },
                data: yAxisData3
            }]
        }
        let myChart=echarts.init(dom)
        myChart.setOption(option)
      },
      lineBotpEchart () {
        let dom = document.getElementById("car30_chartLine");
        let color = [ "#FF9900", "#0091FF"]
        let yAxisData1 = [324,236,233,104,130,200,302,203,213,303,102,311,223,192,334,259]
        let yAxisData3 = [224,136,133,194,170,200,202,103,213,223,192,211,323,192,234,159]
        let xAxisData = ['3/01','3/02','3/03', '3/04', '3/05', '3/06', '3/07', '3/08', '3/09', '3/10', '3/11', '3/12', '3/13', '3/14', '3/15', '3/16']
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
            name: "布控/预警人数（人）",
            nameTextStyle: {
                color: "#D9D9D9",
                padding: [0, 0, -5, 90],
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
            dataZoom: [ //给x轴设置滚动条
              {
                  start: 0, //默认为0
                  end: 100 - 1500 / 31, //默认为100
                  type: 'slider',
                  show: true,
                  xAxisIndex: [0],
                  handleSize: 0, //滑动条的 左右2个滑动条的大小
                  height: 10, //组件高度
                  left: 50, //左边的距离
                  right: 40, //右边的距离
                  bottom: 0, //右边的距离
                  handleColor: '#ddd', //h滑动图标的颜色
                  handleStyle: {
                      borderColor: "#cacaca",
                      borderWidth: "1",
                      shadowBlur: 2,
                      background: "#ddd",
                      shadowColor: "#ddd",
                  },
                  fillerColor: '#808080',
                  backgroundColor: '#ddd', //两边未选中的滑动条区域的颜色
                  showDataShadow: false, //是否显示数据阴影 默认auto
                  showDetail: false, //即拖拽时候是否显示详细数值信息 默认true
                  handleIcon: 'M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z',
                  filterMode: 'filter',
              },
              //下面这个属性是里面拖到
              {
                  type: 'inside',
                  show: true,
                  xAxisIndex: [0],
                  start: 0, //默认为1
                  end: 100 - 1500 / 31, //默认为100
              },
            ],
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
            data: yAxisData3
            }]
        }
        let myChart=echarts.init(dom)
        myChart.setOption(option)
      },
    }
  }
</script>
<style lang="scss" scoped>
.col_3_container {
  .col_3_w {
    width: 100%;
    height: 95%;
    padding: 0 10px;
    background: linear-gradient(to top, #022845 20%, #021E2F);
    display: flex;
    justify-content: space-between; 
    .c_1_l_1_w {
        width: 549px;
        height: 100%;
        #car7_chartLine {
            width: 100%;
            height: 230px;
            background: rgba(3,57,98,0.3);
        } 
        #car30_chartLine {
            width: 100%;
            height: 230px;
            background: rgba(3,57,98,0.3);
        } 
        .table_t_left_title, .table_t_right_title, .table_b_left_title, .table_b_right_title {
            width: 49%;
            height: 58px;
            display: inline-block;
            margin: 10px 0px 10px 0px;
            font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
            font-weight: normal;
            font-size: 16px;
            color: #0091FF;
            text-align: center;
            font-style: normal;
            text-transform: none;
            background: url("@/assets/images/layout/Frame2730692x1.png")no-repeat center;
            background-size: 100% 100%;
            padding-top: 5px;
            p:nth-child(2) {
                margin-top: 5px;
                span {
                    color: #FFFFFF;
                    font-size: 14px;
                }
            }
        }  
        .table_t_right_title {
            color: #00EAFF;
            margin-left: 10px;
            background: url("@/assets/images/layout/Frame2730692x2.png")no-repeat center;
            background-size: 100% 100%;
        }
        .table_b_left_title {
            color: #FF9900;
            background: url("@/assets/images/layout/Frame2730692x3.png")no-repeat center;
            background-size: 100% 100%;
        } 
        .table_b_right_title {
            margin-left: 10px;
        }
    }
    .c_1_l_2_w {
        width: 654px;
        height: 750px;
        .table_info {
            width: 100%;
            height: 700px;
            overflow: auto;
            .tableHeader {
                width: 100%;
                height: 40px;
                background: rgba(82,249,255,0.2);
                border-radius: 0px 0px 0px 0px;
                display: inline-block;
                display: flex;
                align-items: center;
                padding: 0 5px;
                p {
                    height: 22px;
                    font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
                    font-weight: normal;
                    display: flex;
                    justify-content: center;
                    font-size: 16px;
                    color: #fff;
                    line-height: 22px;
                }
                div:nth-child(1) {
                    flex: 0.5; 
                }
                p:nth-child(2) {
                    flex: 1.3;  
                }
                p:nth-child(3) {
                    flex: 2;
                }
                p:nth-child(4) {
                    flex: 1.3; 
                }
            }
            .seamless_warp { 
              height: 100%;
              overflow: hidden;
            }
            .tableBody {
                width: 100%;
                height: 100%;
                overflow: auto;
                .tableItem {
                    height: 40px;
                    display: flex;
                    align-items: center; 
                    margin: 3px 0; 
                    .index {
                        width: 48px;
                        height: 34px;
                        line-height: 34px;
                        text-align: center;
                        color: #fff;
                        background-color: #02C5D7;
                        border-radius: 2px 2px 2px 2px;
                    }
                    .name {
                        height: 40px;
                        font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
                        font-weight: normal;
                        font-size: 16px;
                        color: rgba(255,255,255,0.87);
                        line-height: 40px;
                        text-align: center;
                        background: none;
                        white-space: nowrap;  
                        overflow: hidden;  
                        text-overflow: ellipsis;  
                        cursor: pointer; 
                    } 
                    div:nth-child(1) {
                        flex: 0.5; 
                    }
                    div:nth-child(2) {
                        flex: 1.3; 
                    }
                    div:nth-child(3) {
                        flex: 2;
                    }
                    div:nth-child(4) {
                        flex: 1.3; 
                    }
                }
                div:nth-child(even) {
                    background: rgba(2,40,73,0.2);
                }
                div:nth-child(odd) {
                    background: rgba(82,249,255,0.1);
                }
            }
        }
      
    }
    .c_1_l_3_w {
        width: 534px;
        height: 100%;
        .c_1_l_2_b {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            .c_1_l_2_car { 
                width: 33%;
                height: 224px;
                background: url("@/assets/images/layout/Fram132131572x.png")no-repeat center;
                background-size: 100% 100%;
                margin-top: 10px;
                .img {
                    width: 136px;
                    height: 156px;
                    display: block;
                    margin: 0 auto;
                    margin-top: 5px;
                }
                .text {
                    height: 14px;
                    font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
                    font-weight: normal;
                    font-size: 14px;
                    color: #FFFFFF;
                    line-height: 14px;
                    text-align: left;
                    font-style: normal;
                    text-transform: none;
                    margin-left: 10px;
                    margin-top: 10px;
                } 
            }
        }
    } 
  }
}
</style>