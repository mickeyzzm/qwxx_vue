<template>
  <PageColumnVue class="col_2_container" :width="16.665">
    <TopBlockVue title="资源概况" icon="Frameshelx" />
      <div class="col_1_w">
        <div class="sql_1_w">
          <div class="sql_1_w_item">库<p class="value">28<span class="rate">个</span></p></div>
          <div class="sql_1_w_item">表<p class="value">1037<span class="rate">张</span></p></div>
          <div class="sql_1_w_item">总记录数<p class="value">1308930<span class="rate">条</span></p></div> 
          <div class="table_item" v-for="(item, index) in 12" :key="index">
            <div class="peo_sql">人口库</div>
            <div class="table_num">
              <p>表/张</p>
              <p class="number">34</p>
              <p>对应记录数/条</p>
              <p class="number">7789</p>
            </div>
          </div>
        </div>
        <SubBlockVue tabs="资源占用情况分析" :moreShow="false" class="c_1_l_2_w">
          <div class="serve_box">
            <div class="rask_item">服务器<p class="value">46<span class="rate">台</span></p></div>
            <div class="rask_item">CPU数量<p class="value">1216<span class="rate">核</span></p></div>
            <div class="rask_item">内存数量<p class="value">2332<span class="rate">GB</span></p></div>
            <div class="rask_item">存储空间<p class="value">246<span class="rate">TB</span></p></div>
          </div>
          <div id="m_t_chart_l"></div>
          <div id="m_t_chart_c"></div>
          <div id="m_t_chart_r"></div>
          <div class="m_t_chart_bg_l"></div>
          <div class="m_t_chart_bg_c"></div>
          <div class="m_t_chart_bg_r"></div>
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
      let colorArry = [{
        offset: 0,
        color: '#FF9900',
      },
      {
        offset: 0.5,
        color: '#1C60FE',
      },
      {
        offset: 1,
        color: '#00EAFF',
      }]
      this.echarts('m_t_chart_l', 'CPU已使用', colorArry, 58)
      this.echarts('m_t_chart_c', '内存占用率', colorArry, 38)
      this.echarts('m_t_chart_r', '内存已使用', colorArry, 78)
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
    .sql_1_w {
      width: 100%;
      height: 470px;
      .sql_1_w_item {
        display: inline-block;
        width: 32%;
        height: 67px;
        background: url("@/assets/images/layout/Frame50452x1.png")no-repeat center;
        background-size: 100% 100%;
        font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
        font-weight: normal;
        font-size: 18px;
        color: #CDE9FF;
        text-align: left;
        font-style: normal;
        text-transform: none;
        padding-left: 94px;
        padding-top: 8px;
        margin-left: 10px;
        .value {
          font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
          font-weight: 400;
          font-size: 18px;
          color: #00AAFF;
          span {
            display: inline-block;
            height: 14px;
            line-height: 14px;
            font-weight: normal;
            font-size: 14px;
            color: #CDE9FF;
            padding: 3px 15px;
            margin-left: 5px;
            background: rgba(0,170,255,0.2);
            border-radius: 30px 30px 30px 30px;
          }
        }
      } 
      .sql_1_w_item:nth-child(2) {
          background: url("@/assets/images/layout/Frame50452x2.png")no-repeat center;
          background-size: 100% 100%;
          .value {
              color: #FFD600;
              span {
                  background: rgba(255,214,0,0.2);
              }
          }
      }
      .sql_1_w_item:nth-child(3) {
          background: url("@/assets/images/layout/Frame50452x3.png")no-repeat center;
          background-size: 100% 100%;
          .value {
              color: #00EAFF;
              span {
                  background: rgba(0,234,255,0.2);
              }
          }
      } 
      .table_item {
        float: left;
        width: 23.5%;
        height: 112px;
        background: url("@/assets/images/layout/params1112x.png")no-repeat center;
        background-size: 100% 100%;
        margin-left: 10px;
        margin-top: 16px;
        display: flex;
        justify-content: start;
        align-items: center;
        .peo_sql {
          width: 5px;
          margin-left: 18px;
          font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
          font-weight: normal;
          font-size: 16px;
          color: #00C4FF;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }
        .table_num {
          margin-left: 36px;
          font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
          font-weight: normal;
          font-size: 16px;
          color: #CDE9FF;
          text-align: left;
          font-style: normal;
          text-transform: none;
          .number {
            color: #00C4FF;
          }
        }
      }
    }
    .c_1_l_2_w {
      width: 100%;
      height: 290px;
      position: relative;
      #m_t_chart_l, #m_t_chart_c, #m_t_chart_r {
        display: inline-block;
        width: 31%;
        height: 139px;
        background: url("@/assets/images/layout/Frame90642x.png")no-repeat center;
        background-size: 100% 100%;
        margin-left: 14px;
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
      .serve_box {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: 10px 0;
        .rask_item {
          width: 24.5%;
          height: 67px;
          background: url("@/assets/images/layout/Frame0732x1.png")no-repeat center;
          background-size: 100% 100%;
          font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
          font-weight: normal;
          font-size: 18px;
          color: #CDE9FF;
          text-align: left;
          font-style: normal;
          text-transform: none;
          padding-left: 74px;
          padding-top: 10px;
          .value {
            font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
            font-weight: 400;
            font-size: 22px;
            color: #00AAFF;
            span {
              font-weight: normal;
              font-size: 14px;
              padding-left: 5px;
              color: #CDE9FF;
            }
          }
        } 
        .rask_item:nth-child(2) {
          background: url("@/assets/images/layout/Frame0732x2.png")no-repeat center;
          background-size: 100% 100%;
          .value {
            color: #FF9900;
          }
        }
        .rask_item:nth-child(3) {
          background: url("@/assets/images/layout/Frame0732x3.png")no-repeat center;
          background-size: 100% 100%;
          .value {
            color: #00EAFF;
          }
        }
        .rask_item:nth-child(4) {
          background: url("@/assets/images/layout/Frame0732x4.png")no-repeat center;
          background-size: 100% 100%;
        }
      }
    } 
  }
}
</style>