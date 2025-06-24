<template>
    <PageColumnVue class="col_2_container" :width="16.665">
      <TopBlockVue title="勤务设备统计" icon="Frame09112x" />
        <div class="col_1_w">
          <div class="rask_box">
            <div v-for="(item, index) in statisList" class="rask_item">{{ item.label }}<span class="value">{{ item.value }}</span></div>
          </div>
          <SubBlockVue tabs="任务类型统计" :moreShow="false" class="c_1_l_1_w">
            <div id="m_t_chart_l"></div>
            <div id="m_t_chart_c"></div>
            <div id="m_t_chart_r"></div>
            <div class="m_t_chart_bg_l"></div>
            <div class="m_t_chart_bg_c"></div>
            <div class="m_t_chart_bg_r"></div>
          </SubBlockVue> 
          <SubBlockVue tabs="任务类型统计" :moreShow="false" class="c_1_l_2_w">
              <div class="table_info">
                  <div class="tableHeader">
                      <p>序号</p>
                      <p>设备编号</p>
                      <p>设备类型</p>
                      <p>使用民警</p>
                      <p>部门</p>
                      <p>操作</p>
                  </div>
                  <vue-seamless-scroll v-if="tableData.length > 0" :data="tableData" :class-option="classOption" v-cloak class="seamless_warp">
                    <div class="tableBody">
                        <div v-for="(item, index) in tableData" :key="index" class="tableItem">
                            <div class="index">{{ index + 1 }}</div>
                            <div class="name">{{ item.id }}</div>
                            <div class="name">{{ item.type }}</div>
                            <div class="name">{{ item.name }}</div>
                            <div class="name">{{ item.adress }}</div>
                            <div class="name active">
                              <span>定位</span>
                              <span>轨迹</span>
                            </div>
                        </div> 
                    </div>
                  </vue-seamless-scroll>
              </div>
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
          statisList: [
            { label: 'PDT手台', value: 28 },
            { label: '警务终端', value: 28 },
            { label: '5G融合终端', value: 53 },
            { label: '警车', value: 10 },
            { label: '4G执法记录', value: 28 },
            { label: '普通记录仪', value: 17 },
            { label: '视频监控', value: 24586 },
            { label: '警车', value: 10 },
          ], 
          tableData: [
            { id: '025600111832', name: '王帅', type: '警车', adress: '河北省承德市公安局双桥分局' },
            { id: '025600111832', name: '王帅', type: '警车', adress: '河北省承德市公安局双桥分局' },
            { id: '025600111832', name: '王帅', type: '警车', adress: '河北省承德市公安局双桥分局' },
            { id: '025600111832', name: '王帅', type: '警车', adress: '河北省承德市公安局双桥分局' },
            { id: '025600111832', name: '王帅', type: '警车', adress: '河北省承德市公安局双桥分局' },
            { id: '025600111832', name: '王帅', type: '警车', adress: '河北省承德市公安局双桥分局' },
            { id: '025600111832', name: '王帅', type: '警车', adress: '河北省承德市公安局双桥分局' },
            { id: '025600111832', name: '王帅', type: '警车', adress: '河北省承德市公安局双桥分局' },
            { id: '025600111832', name: '王帅', type: '警车', adress: '河北省承德市公安局双桥分局' },
            { id: '025600111832', name: '王帅', type: '警车', adress: '河北省承德市公安局双桥分局' },
            { id: '025600111832', name: '王帅', type: '警车', adress: '河北省承德市公安局双桥分局' },
            { id: '025600111832', name: '王帅', type: '警车', adress: '河北省承德市公安局双桥分局' },
            { id: '025600111832', name: '王帅', type: '警车', adress: '河北省承德市公安局双桥分局' },
            { id: '025600111832', name: '王帅', type: '警车', adress: '河北省承德市公安局双桥分局' },
            { id: '025600111832', name: '王帅', type: '警车', adress: '河北省承德市公安局双桥分局' },
            { id: '025600111832', name: '王帅', type: '警车', adress: '河北省承德市公安局双桥分局' },
            { id: '025600111832', name: '王帅', type: '警车', adress: '河北省承德市公安局双桥分局' },
            { id: '025600111832', name: '王帅', type: '警车', adress: '河北省承德市公安局双桥分局' },
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
        let left = [{
          offset: 0,
          color: 'rgba(138,225,233, 0.8)',
        },
        {
          offset: 0.5,
          color: 'rgba(70,230,244, 1)',
        },
        {
          offset: 1,
          color: 'rgba(0,233,254, 1)',
        }]
        let center = [{
          offset: 0,
          color: 'rgba(244,212,163, 0.8)',
        },
        {
          offset: 0.5,
          color: 'rgba(250,182,79, 1)',
        },
        {
          offset: 1,
          color: 'rgba(254,153,0, 1)',
        }]
        let right = [{
          offset: 0,
          color: 'rgba(153,213,244, 0.8)',
        },
        {
          offset: 0.5,
          color: 'rgba(74,191,250, 1)',
        },
        {
          offset: 1,
          color: 'rgba(0,170,255, 1)',
        }]
        this.echarts('m_t_chart_l', '警车在线率', left, 58)
        this.echarts('m_t_chart_c', '警务通在线率', center, 38)
        this.echarts('m_t_chart_r', '对讲机在线率', right, 78)
      },
      methods: {
        echarts (id, label, colorList, data) {
          let dom = document.getElementById(id);
          let option = {
            title: {
              show: false,
              x: "center",
              text: '',
            },
            tooltip: {
              show: false,
              backgroundColor: '#F7F9FB',
              borderColor: '#92DAFF',
              borderWidth: '1px',
              textStyle: {
                color: 'red'
              },
            },
            series: [{
              name: '',
              type: 'gauge',
              center: ['50%', '68%'],
              radius: '125%',
              startAngle: 180,
              endAngle: 0,
              min: 0,
              max: 100,
              axisLine: {
                show: true,
                lineStyle: {
                  width: 20,
                  shadowBlur: 0,
                  color: [
                    [
                      1, new echarts.graphic.LinearGradient(
                      0, 0, 1, 0, colorList)
                    ],
                  ]
                }
              },
              axisTick: {
                show: false,
                splitNumber: 1
              },
              splitLine: {
                show: false, 
              },
              axisLabel: {
                show: false,
                textStyle: {
                  fontSize: 14,
                  color: '#fff'
                }
              },
              pointer: {
                show: true,
                width: 5,
                length: '70%', 
              },
              detail: {
                offsetCenter: [0, 25],
                formatter: function(param) {  
                  return `{a|${label} }` + param + `%`;
                },
                rich: {
                  a: {
                    color: '#fff',
                    lineHeight: 55,
                    fontSize: 16,
                    fontWeight: 400
                  }
                },
                textStyle: {
                  fontSize: 16,
                  color: colorList[2].color
                },
              },
              data: [{
                value: data
              }]
            },
            {
              type: 'gauge',
              center: ['50%', '68%'],
              radius: '125%',
              splitNumber: 5,
              min: 0,
              max: 100,
              startAngle: 180,
              endAngle: 0,
              axisLine: {
                show: true,
                lineStyle: {
                  width: 2,
                  color: [
                    [1, 'white']
                  ]
                }
              }, //仪表盘轴线
              //刻度样式
              splitLine: {
                show: false, 
              }, //分隔线样式
              axisLabel: {
                show: true,
                distance: 5,
                textStyle: {
                  color: '#647A94',
                  fontSize: '12',
                }
              },
              pointer: {
                show: 0
              },
              detail: {
                show: 0
              }, 
            },{
              name: "指针",
              type: "gauge",
              z: 9,
              radius: "70%",
              startAngle: 180,
              endAngle: 0,
              center: ["50%", "70%"], //整体的位置设置
              axisLine: {
                lineStyle: {
                  // 属性lineStyle控制线条样式//指针颜色
                  color: [
                      [1, "rgb(30, 191, 182)"]
                  ],
                  width: 0
                }
              },
              axisTick: {
                show: false
              },
              splitLine: {
                show: false
              },
              axisLabel: {
                show: false
              },
              min: 0,
              max: 1,
              pointer: {
                show: true,
                width: 5,
                length: "120%"
              },
              itemStyle: {
                normal: {
                  color: colorList[2].color
                }
              },
              detail: {
                show: false, 
              },
              data: [data/100] //指针位置
            },]
          }
          let myChart=echarts.init(dom)
          myChart.setOption(option)
        },
      }
    }
  </script>
  <style lang="scss" scoped>
  .col_2_container {
    .col_1_w {
      width: 100%;
      height: 94%;
      padding: 0 10px;
      background: linear-gradient(to top, #022845 20%, #021E2F);
      .rask_box {
        width: 100%;
        height: 117px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-top: 10px;
        flex-wrap: wrap;
        .rask_item {
          width: 24%;
          height: 50px;
          background: url("@/assets/images/layout/Frame21315390.png")no-repeat center;
          background-size: 100% 100%;
          display: flex;
          align-items: center;   
          justify-content: space-between;
          font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
          font-weight: normal;
          font-size: 18px;
          color: #CDE9FF;
          text-align: left;
          text-transform: none;
          padding: 0 20px;
          .value {
            font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
            font-size: 16px;
            color: #00EAFF;
          }
        } 
      }
      .c_1_l_1_w {
        width: 100%;
        height: 190px;
        position: relative;
        #m_t_chart_l, #m_t_chart_c, #m_t_chart_r {
          display: inline-block;
          width: 33%;
          height: 139px;
        }
        .m_t_chart_bg_l, .m_t_chart_bg_c, .m_t_chart_bg_r {
          position: absolute; 
          width: 202px;
          height: 102px;
          background: url("@/assets/images/layout/pa2481882x.png")no-repeat center;
          background-size: 100% 100%; 
        }
        .m_t_chart_bg_l {
          top: 2%;
          left: 5.5%;
        }
        .m_t_chart_bg_c {
          top: 2%;
          left: 38%;
        }
        .m_t_chart_bg_r {
          top: 2%;
          right: 6.5%;
        }
      }
      .c_1_l_2_w {
        width: 100%;
        height: 435px;
        margin-top: 10px;
        .table_info {
            width: 100%;
            height: 100%;
            overflow: hidden;
            .tableHeader {
                width: 100%;
                height: 40px;
                background: url("@/assets/images/layout/tb_th192x.png")no-repeat center;
                  background-size: 100% 100%;
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
                p:nth-child(1) {
                  flex: 0.3; 
                }
                p:nth-child(2) {
                  flex: 1.5; 
                }
                p:nth-child(3) {
                  flex: 0.6;
                }
                p:nth-child(4) {
                  flex: 0.6; 
                }
                p:nth-child(5) {
                  flex: 3;
                }
                p:nth-child(6) {
                  flex: 1; 
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
                  width: 35px;
                  height: 32px;
                  line-height: 32px;
                  text-align: center;
                  color: #fff;
                  border-radius: 2px 2px 2px 2px;
                  background: url("@/assets/images/layout/Frame11087112x.png")no-repeat center;
                  background-size: 100% 100%;
                  margin-left: 10px;
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
                div:nth-child(2) {
                  flex: 1.5; 
                }
                div:nth-child(3) {
                  flex: 0.6;
                }
                div:nth-child(4) {
                  flex: 0.6;
                }
                div:nth-child(5) {
                  flex: 3;
                }
                div:nth-child(6) {
                  flex: 1; 
                }
                .active {
                  color: #00EAFF;
                  span:nth-child(2) {
                    margin-left: 10px;
                  }
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
    }
  }
  </style>