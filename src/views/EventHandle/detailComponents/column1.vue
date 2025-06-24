<template>
    <PageColumnVue class="col_1_container" :width="33.33">
        <TopBlockVue title="重大活动详情" icon="Frame88212x">
            <div style="width: 49.5%; display: inline-block;float: left;">
                <SubBlockVue tabs="基础信息" :moreShow="false" class="col_1c">
                    <div class="c_1_b_6_1_c_1">
                        <div class="c_1_b_6_1_m">事件名称</div>
                        <div class="c_1_b_6_1_m">承德市奥林匹克体育中心火灾事件</div>
                        <div class="c_1_b_6_1_m">事件类型</div>
                        <div class="c_1_b_6_1_m">火灾</div>
                        <div class="c_1_b_6_1_m">发生时间</div>
                        <div class="c_1_b_6_1_m">2024-04-23 13:10:12</div>
                        <div class="c_1_b_6_1_m">事件状态</div>
                        <div class="c_1_b_6_1_m"><span>处置中</span></div>
                        <div class="c_1_b_6_1_m">事件地址</div>
                        <div class="c_1_b_6_1_m">承德市某某区某某街道某小区</div>
                        <div class="c_1_b_6_1_m">事件描述</div>
                        <div class="c_1_b_6_1_m">事件描述事件描述事件描述事件描述</div>     
                    </div>
                </SubBlockVue> 
                <SubBlockVue tabs="活动安保部署" :moreShow="false" class="col_2c">
                    <div class="rask_box">
                        <div class="rask_item">死亡人数<p class="value">1人</p></div>
                        <div class="rask_item">受伤人数<p class="value">1人</p></div>
                        <div class="rask_item">经济损失<p class="value">2万元</p></div>
                    </div>
                </SubBlockVue> 
                <SubBlockVue tabs="活动流程" :moreShow="false" class="col_3c">
                    <div class="pe_type_box">
                        <div v-for="(item, index) in statisList" class="pe_type_item">
                            {{ item.label }}
                            <span class="value">{{ item.value }}<span class="unit">{{ item.label == '警车' ? '辆' : item.label == '视频监控' ? '路' : '台' }}</span></span>
                            
                        </div>
                    </div>
                </SubBlockVue> 
            </div>
            <div style="width: 49.5%; display: inline-block; float: right;">
                <SubBlockVue tabs="活动事件" :moreShow="false" class="col_4c"> 
                    <el-steps direction="vertical" finish-status="finish" :active="1" class="el_steps">
                        <el-step title="2024-03-13 13:12:10" description="某某路发生交通事故，道路拥堵200米"></el-step>
                        <el-step title="2024-03-13 13:12:10" status="wait" description="某某路发生交通事故，道路拥堵200米"></el-step>
                        <el-step title="2024-03-13 13:12:10" description="某某路发生交通事故，道路拥堵200米"></el-step>
                        <el-step title="2024-03-13 13:12:10" description="某某路发生交通事故，道路拥堵200米"></el-step>
                        <el-step title="2024-03-13 13:12:10" description="某某路发生交通事故，道路拥堵200米"></el-step>
                        <el-step title="2024-03-13 13:12:10" description="某某路发生交通事故，道路拥堵200米"></el-step>
                        <el-step title="2024-03-13 13:12:10" description="某某路发生交通事故，道路拥堵200米"></el-step>
                    </el-steps>
                </SubBlockVue> 
            </div>
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
            statisList: [
            { label: 'PDT手台', value: 20 },
            { label: '警务终端', value: 28 },
            { label: '5G融合终端', value: 13 },
            { label: '警车', value: 11 },
            { label: '4G执法记录', value: 18 },
            { label: '普通记录仪', value: 14 },
            { label: '视频监控', value: 12 },
            { label: '无人机', value: 10 },
            ], 
            player: null,
            VideoDialogVisible: false,
            pieColorList: ['#00C2FF', '#0085FF', '#FFFF00', '#3FD87C'], 
        }
    },
    mounted() {
        this.pieEchart()
    },
    methods: {
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
        let myChart = echarts.init(dom)
        myChart.setOption(option)
    },
    },
}
</script>
<style lang="scss" scoped>
.col_1_container {
    width: 100%;
    .col_1c, .col_2c, .col_3c{
        width: 100%;
        margin-top: 10px;
    } 
    .col_1c {
        height: 304px;
        .c_1_b_6_1_c_1 {
            width: 100%;
            display: flex; 
            justify-content: start;
            flex-wrap: wrap;
            .c_1_b_6_1_m {
                margin-top: 10px;
                font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
                font-weight: normal;
                font-size: 16px;
                font-style: normal;
                text-transform: none;  
            }
            .c_1_b_6_1_m:nth-child(odd) {
                width: 108px;
                height: 48px;
                font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
                font-weight: normal;
                font-size: 16px;
                color: #FFFFFF;
                line-height: 48px;
                text-align: center;
                font-style: normal;
                text-transform: none;
                background: rgba(0,85,255,0.1);
                margin-left: 8px;
            }
            .c_1_b_6_1_m:nth-child(even) {
                width: 302px;
                height: 48px;
                font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
                font-weight: normal;
                font-size: 22px;
                color: #00AAFF;
                line-height: 48px;
                text-align: left;
                font-style: normal;
                text-transform: none;
                background: rgba(0,133,255,0.15);
                margin-left: 3px;
                padding-left: 20px;
                white-space: nowrap;  
                overflow: hidden;  
                text-overflow: ellipsis;  
                cursor: pointer; 
            }  
            .c_1_b_6_1_m:nth-child(8) {
                span {
                    width: 80px;
                    height: 38px;
                    line-height: 38px;
                    color: #FFD600;
                    text-align: center;
                    display: inline-block;
                    background: #4F3D06;
                    border-radius: 2px 2px 2px 2px;
                    border: 1px solid #FFC343;
                }
            }
            .c_1_b_6_1_m:last-child, .c_1_b_6_1_m:nth-child(10) {
                width: 722px;
            }
        }
    } 
    .col_2c {
        height: 174px;
        .rask_box {
            width: 100%;
            display: flex;
            justify-content: space-between;
            margin: 15px 0;
            flex-wrap: wrap;
            .rask_item {
                width: 32%;
                height: 80px;
                display: flex;
                justify-content: space-around;
                align-items: center;
                background: url("@/assets/images/layout/Fram315152x1.png")no-repeat center;
                background-size: 100% 100%;
                font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
                font-size: 16px;
                color: #CDE9FF;
                padding-left: 75px;
                .value {
                    font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
                    font-size: 18px;
                    color: #00AAFF;
                }
            }
            .rask_item:nth-child(2), .rask_item:nth-child(4) {
                background: url("@/assets/images/layout/Fram315152x2.png")no-repeat center;
                background-size: 100% 100%;
                .value {
                    color: #FFC700;
                }
            }
            .rask_item:nth-child(3) {
                background: url("@/assets/images/layout/Fram315152x3.png")no-repeat center;
                background-size: 100% 100%;
                .value {
                color: #00EAFF;
                }
            }
            }
    }
    .col_3c {
        height: 292px;
        .pe_type_box {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            margin-top: 10px;
            flex-wrap: wrap;
            .pe_type_item {
                width: 24%;
                height: 89px;
                line-height: 58px;
                background: url("@/assets/images/layout/Frame3213882x2.png")no-repeat center;
                background-size: 100% 100%;
                display: flex;
                align-items: center;   
                justify-content: space-between;
                font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
                font-weight: normal;
                font-size: 20px;
                color: #CDE9FF;
                text-align: left;
                text-transform: none;
                padding: 0 0 0 14px;
                .value {
                    width: 80px;
                    text-align: center;
                    font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
                    font-size: 22px;
                    color: #00EAFF;
                    background: url("@/assets/images/layout/Frame3282x2.png")no-repeat center;
                    background-size: 100% 100%;
                }
                .unit {
                    font-size: 18px;
                    padding-left: 5px;
                }
            }  
        }
    }
    .col_4c {
        width: 100%;
        margin-top: 10px;
        height: 790px;
        .el_steps {
            padding-left: 40px;
        }
    } 
    :deep .el-step__title, :deep .el-step__description {
        font-size: 18px;
    } 
    :deep .el-step__head.is-wait, :deep .el-step__head.is-finish {
        color: #fff;
    }
    :deep .el-step__line {
        background-color: #409EFF;
    }
    :deep .el-step.is-vertical .el-step__head{
        width: 44px;
    }
    :deep .el-step__icon {
        width: 34px;
        height: 34px;
        background-color: #409EFF;
    }
    :deep .el-step.is-vertical .el-step__line {
        left: 17px;
    }

}
</style>