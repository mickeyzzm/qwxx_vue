<template>
  <PageColumnVue class="col_1_container" :width="10.33">
    <TopBlockVue title="警种警情处置排名" icon="Frame902x" />
    <div id="col_bar_chart"></div>
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
      }
    }, 
    mounted() {
      this.barCharts()
    },
    methods: {
      barCharts () {
        let dom = document.getElementById('col_bar_chart')
        let salvProName = ["治安","交通","刑侦","经侦","巡警","网安","消防","技侦","技侦","缉私",  "反恐","特警","特警","民航","森林","督察","督察","边防","监所","其他"]
        let salvProValue =[239,221,209,194,183,165,157,144,132,127,115,109,94,82,72,61,55,42,31,15]
        let salvProMax =[];//背景按最大值
        for (let i = 0; i < salvProValue.length; i++) {
          salvProMax.push(salvProValue[0])
        }
        let option = {
          grid: {
            left: '4%',
            right: '4%',
            bottom: '2%',
            top: '2%',
            containLabel: true
          },
          tooltip: {
            show: true,
            trigger: "axis",
            backgroundColor: "rgba(0, 21, 43)",
            textStyle: {
              color: '#fff',
              fontSize: 20,
            },
            formatter: function(params) {
              return params[0].name  + ' : ' + params[0].value
            }
          },
          xAxis: {
            show: false,
            type: 'value'
          },
          yAxis: [{
            type: 'category',
            inverse: true,
            axisLabel: {
              show: true,
              textStyle: {
                color: '#fff',
                fontSize: 16, 
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
            data: salvProName
          }, {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
              textStyle: {
                color: '#ffffff',
                fontSize: '16'
              },
            },
            data:salvProValue
          }],
          series: [{
            name: '值',
            type: 'bar',
            zlevel: 1,
            barWidth: 15,
            itemStyle: {
              normal: {
                barBorderRadius: 30,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                  offset: 0,
                  color: 'rgb(57,89,255,1)'
                }, {
                  offset: 1,
                  color: 'rgb(46,200,207,1)'
                }]),
              },
            },
            data: salvProValue
          },
          {
            name: '背景',
            type: 'bar',
            barWidth: 15,
            barGap: '-100%',
            data: salvProMax,
            itemStyle: {
              normal: {
                color: 'rgba(28,52,86,0.8)',
                barBorderRadius: 30,
              }
            },
          }]
        }
        let myChart=echarts.init(dom)
        myChart.setOption(option)
      },
    }
  }
</script>
<style lang="scss" scoped>
  .col_1_container {
    #col_bar_chart {
      width: 100%;
      height: 94%;
      background: linear-gradient(to top, #022845 20%, #021E2F);
    }
  }
  </style>