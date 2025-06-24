<template>
  <PageColumnVue class="col_2_container" :width="23">
      <TopBlockVue title="警情高发分析" icon="frame343312x" />
      <div class="col_2_w">
        <SubBlockVue tabs="高发类别分析" :moreShow="false" class="m_t_Box">
          <div> 统计至：<span v-for="(item, index) in btnList" @click="handelBtn(index)" :class="{'active': dateTypeBtnIdx == index}"  :key="index">{{ item.label }}</span>
          </div>
          <div id="barChart"></div>
        </SubBlockVue> 
        <SubBlockVue tabs="高发时段分析" :moreShow="false" class="m_B_Box">
          <div id="lineChart"></div> 
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
      name: "Column2Com",
      components: {
        PageColumnVue,
        SubBlockVue,
        TopBlockVue,
      },
      data() {
        return {
          dateTypeBtnIdx: 0, 
          btnList: [
            { label: '一级', value: '一级' },
            { label: '二级', value: '二级' },
            { label: '三级', value: '三级' }, 
          ],   
        }
      }, 
      mounted() { 
        this.barCharts()
        this.lineEchar()
      },
      methods: {
        barCharts () {
          let dom = document.getElementById('barChart')
          let xData = ['网吧', '酒店', 'WIFI', '基站', '人脸识别', '汽车', '火车', '飞机', '轮船'];
          let ydata = [30, 32, 29, 40, 32, 29, 33, 45, 29];
          let option = {
            color: ['#00D7E9', 'rgba(0, 215, 233, 0.9)'],
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
                  show: true,
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
          let myChart=echarts.init(dom)
          myChart.setOption(option)
        },
        lineEchar () {
          let dom = document.getElementById("lineChart")
          let yAxisData1 = [18,19,23,16,14,24,15,18,19,23,16,14,24,15,21,18,19,23,16,14,24,15,18,19,12]
          let xAxisData = ['1:00','2:00','3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00','13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00',, '21:00', '22:00','23:00', '24:00']
          let option = {
            color: "#0091FF",
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
              right: 15,
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
              type: "line",
              showSymbol: true,
              smooth: true,
              symbolSize: 10,
              zlevel: 3,
              lineStyle: {
                normal: {
                  color: '#0091FF',
                  shadowBlur: 3,
                  shadowColor: '#0091FF',
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
                      color: 'rgba(0,145,255,0.4)'
                    },
                    {
                      offset: 1,
                      color: 'rgba(0,145,255,0)'
                    }
                    ],
                    false
                  ),
                  shadowColor: 'rgba(0,145,255,0.6)',
                  shadowBlur: 10
                }
              },
              data: yAxisData1
            }]
          }
          let myChart = echarts.init(dom)
          myChart.setOption(option)
        },
        handelBtn (index) {
          this.dateTypeBtnIdx = index
        },
      }
    }
</script>
<style lang="scss" scoped>
.col_2_container {
  .col_2_w {
    width: 100%;
    height: 94%;
    padding: 0 10px;
    background: linear-gradient(to top, #022845 20%, #021E2F);
    .m_t_Box{
      width: 100%;
      height: 48.5%;
      font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
      font-size: 20px;
      color: #FFFFFF;
      span {
        font-size: 16px;
        display: inline-block;  
        padding: 6px 18px;
        background: #014467;
        color: #00AAFF;
        margin-left: 15px;
        border-radius: 3px;
        border: 1px solid #00AAFF;
        cursor: pointer;
      }
      .active {
        background: #00AAFF;
        color: #fff;
      }
      #barChart {
        width: 100%;
        height: 85%;
      }
    }
    .m_B_Box {
      width: 100%;
      height: 48.5%;
      margin-top: 16px;
      #lineChart {
        width: 100%;
        height: 100%;
      }
    } 
  }
}
</style>