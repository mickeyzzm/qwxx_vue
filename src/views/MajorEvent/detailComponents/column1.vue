<template>
    <PageColumnVue class="col_1_container" :width="33.33">
        <TopBlockVue title="重大活动详情" icon="Frame88212x">
            <SubBlockVue tabs="基础信息" :moreShow="false" class="col_1c">
                <div class="c_1_b_6_1_c_1">
                    <div class="c_1_b_6_1_m">活动名称</div>
                    <div class="c_1_b_6_1_m">承德首届全民健身大会</div>
                    <div class="c_1_b_6_1_m">活动类型</div>
                    <div class="c_1_b_6_1_m">大型运动会</div>
                    <div class="c_1_b_6_1_m">主办单位</div>
                    <div class="c_1_b_6_1_m">承德市体育局</div>
                    <div class="c_1_b_6_1_m">承办单位</div>
                    <div class="c_1_b_6_1_m">XXX单位</div>
                    <div class="c_1_b_6_1_m">活动时间</div>
                    <div class="c_1_b_6_1_m">2024-03-12 至 2024-03-14 18:00</div>
                    <div class="c_1_b_6_1_m">活动状态</div>
                    <div class="c_1_b_6_1_m"><span>进行中</span></div>
                    <div class="c_1_b_6_1_m">活动地址</div>
                    <div class="c_1_b_6_1_m">承德市奥林匹克体育中心</div>
                </div>
            </SubBlockVue> 
            <SubBlockVue tabs="活动安保部署" :moreShow="false" class="col_2c">
                <div class="c_1_b_6_1_c_2">
                    <div class="c_1_b_6_l">
                        <p>活动指挥部</p>
                        <p><span>部长</span>张三</p>
                        <p><span>副部长</span>张酒</p>
                    </div>
                    <div class="c_1_b_6_r">
                        <div v-for="(item, index) in c_1_b_6_2_w_list" :key="index" class="c_1_b_6_i">
                            <p class="label">{{item.name}}</p>
                            <p class="value">{{item.num}} {{ item.name == '车辆配置' ? '辆': item.name == '安保岗点' ? '个' : '人' }}</p>
                        </div>
                    </div>
                </div>
            </SubBlockVue> 
            <SubBlockVue tabs="活动流程" :moreShow="false" class="col_3c">
                <div class="col_3c_c">
                    <div class="date">03-12</div>
                    <div class="content">08:00    开幕式</div>
                    <div class="content">-</div>
                    <div class="content">-</div>
                    <div class="date">03-13</div>
                    <div class="content">-</div>
                    <div class="content">-</div>
                    <div class="content">-</div>
                    <div class="date">03-14</div>
                    <div class="content">-</div>
                </div>
            </SubBlockVue>  
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
        let myChart = echarts.init(dom);
        myChart.setOption(option);
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
    .col_1c {
        height: 238px;
        float: left;
        .c_1_b_6_1_c_1 {
            width: 100%;
            display: flex; 
            justify-content: start;
            flex-wrap: wrap;
            .c_1_b_6_1_m {
                margin-top: 5px;
                font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
                font-weight: normal;
                font-size: 16px;
                font-style: normal;
                text-transform: none;  
            }
            .c_1_b_6_1_m:nth-child(odd) {
                width: 108px;
                height: 40px;
                font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
                font-weight: normal;
                font-size: 16px;
                color: #FFFFFF;
                line-height: 40px;
                text-align: center;
                font-style: normal;
                text-transform: none;
                background: rgba(0,85,255,0.1);
                border-radius: 0px 0px 0px 0px;
                border: 1px solid rgba(0,133,255,0.8);
                margin-left: 8px;
            }
            .c_1_b_6_1_m:nth-child(even) {
                width: 302px;
                height: 40px;
                font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
                font-weight: normal;
                font-size: 16px;
                color: #00AAFF;
                line-height: 40px;
                text-align: left;
                font-style: normal;
                text-transform: none;
                background: rgba(0,85,255,0.1);
                border-radius: 0px 0px 0px 0px;
                border: 1px solid rgba(0,133,255,0.8);
                margin-left: 3px;
                padding-left: 20px;
                white-space: nowrap;  
                overflow: hidden;  
                text-overflow: ellipsis;  
                cursor: pointer; 
            }  
            .c_1_b_6_1_m:nth-child(12) {
                span {
                    width: 80px;
                    height: 26px;
                    line-height: 26px;
                    color: #FFD600;
                    text-align: center;
                    display: inline-block;
                    background: #4F3D06;
                    border-radius: 2px 2px 2px 2px;
                    border: 1px solid #FFC343;
                }
            }
            .c_1_b_6_1_m:last-child {
                width: 722px;
            }
        }
    } 
    .col_2c {
        width: 50%;
        height: 238px;
        float: right;
        .c_1_b_6_1_c_2 {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap; 
            .c_1_b_6_l {
                width: 25%;
                height: 148px;
                background: url("@/assets/images/layout/Frame3154542x.png")no-repeat center;
                background-size: 100% 100%;
                margin-top: 10px;
                p:nth-child(1) {
                    height: 18px;
                    font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
                    font-weight: normal;
                    font-size: 18px;
                    color: #FFFFFF;
                    line-height: 18px;
                    text-align: center;
                    font-style: normal;
                    text-transform: none;
                    margin-top: 3px;
                }
                p:nth-child(2),p:nth-child(3) {
                    height: 22px;
                    font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
                    font-weight: normal;
                    font-size: 16px;
                    color: #fff;
                    line-height: 19px;
                    text-align: left;
                    font-style: normal;
                    text-transform: none;
                    margin-top: 32px;
                    margin-left: 89px;
                    span {
                        color: #FFC700;
                        width: 64px;
                        display: inline-block;
                    }
                }
                p:nth-child(3) {
                    span {
                        color: #00AAFF;
                    }
                }
            }
            .c_1_b_6_r {
                width: 72%;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                .c_1_b_6_i {
                    width: 48%;
                    height: 80px;
                    margin-top: 10px;
                    .label {
                        height: 12px;
                        font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
                        font-weight: normal;
                        font-size: 16px;
                        color: #FFFFFF;
                        line-height: 12px;
                        text-align: right;
                        font-style: normal;
                        text-transform: none;
                        margin-top: 16px;
                        padding-right: 20px;
                    }
                    .value {
                        height: 18px;
                        font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
                        font-weight: normal;
                        font-size: 18px;
                        color: #00AAFF;
                        line-height: 18px;
                        text-align: right;
                        font-style: normal;
                        text-transform: none;
                        margin-top: 20px;
                        padding-right: 20px;
                    }
                }
                .c_1_b_6_i:nth-child(1) {
                    background: url("@/assets/images/layout/Frame3154542x2.png")no-repeat center;
                    background-size: 100% 100%;
                }
                .c_1_b_6_i:nth-child(2) {
                    background: url("@/assets/images/layout/Frame3154542x3.png")no-repeat center;
                    background-size: 100% 100%;
                }
                .c_1_b_6_i:nth-child(3) {
                    background: url("@/assets/images/layout/Frame3154542x4.png")no-repeat center;
                    background-size: 100% 100%;
                }
                .c_1_b_6_i:nth-child(4) {
                    background: url("@/assets/images/layout/Frame3154542x5.png")no-repeat center;
                    background-size: 100% 100%;
                } 
            }
        }
    }
    .col_3c {
        height: 512px;
        float: left;
        .col_3c_c {
            padding: 0 10px 0 10px;
            .date {
                width: 100px;
                height: 40px;
                background: url("@/assets/images/layout/params240912x.png")no-repeat center;
                background-size: 100% 100%;
                font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
                font-weight: normal;
                font-size: 18px;
                color: #00AAFF;
                line-height: 40px;
                text-align: center;
                font-style: normal;
                text-transform: none;
                margin-top: 5px;
            }
            .content {
                width: 850px;
                height: 40px;
                line-height: 40px;
                background: rgba(0,101,182,0.2);
                border-radius: 0px 0px 0px 0px;
                border: 1px solid;
                border-image: linear-gradient(270deg, rgba(0, 158, 220, 0), rgba(0, 142, 255, 1), rgba(0, 158, 220, 0)) 1 1;
                font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
                font-weight: normal;
                font-size: 16px;
                color: #FFFFFF;
                text-align: left;
                font-style: normal;
                text-transform: none;
                padding-left: 21px;
                margin-top: 4px;
            }
        }
    }
    .col_4c { 
        height: 512px;
        margin-left: 20px; 
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