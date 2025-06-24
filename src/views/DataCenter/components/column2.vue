<template>
  <PageColumnVue class="col_4_container" :width="16.665">
    <TopBlockVue title="数据采集分析" icon="Frame32302312x" />
    <div class="col_1_w">
      <div class="rask_box">
        <div class="rask_item">数据采集总数<p class="value">2,134,283<span class="rate">条</span></p></div>
        <div class="rask_item">今日采集数<p class="value">11037<span class="rate">条</span></p></div>
        <div class="rask_item">接入单位数<p class="value">56<span class="rate">个</span></p></div>
      </div>
      <div style="width:100%; display: flex; justify-content: space-between;">
        <SubBlockVue tabs="数据采集情况" :moreShow="false" class="m_l_Box">
          <div id="m_d_p_bar_t"></div>
        </SubBlockVue> 
        <SubBlockVue tabs="数据接入单位TOP5" :moreShow="false" class="m_r_Box">
          <div v-for="(item, index) in raskList" :key="index" class="rask_table">
            <p class="label_box">
              <img :src="item.img" alt="">
              <span :title="item.label">{{ item.label }}</span>
            </p>
            <p class="value_box">{{ item.value }} <span>万条</span></p>
          </div>
        </SubBlockVue> 
      </div>
      <TopBlockVue title="数据治理分析" icon="Frame88212x" style="margin-top: 16px;" />
      <div class="bot_left_con">
        <div class="top_total">
          <div><img src="../../../assets/images/layout/Group3148862x.png" alt=""> 数据治理通过率</div>
          <div class="total_num">74.00 <span>%</span></div>
        </div>
        <div class="bot_right_item">
          <div class="value">271</div>
          <div class="label">数据治理规则数量</div>
        </div>
        <div class="bot_right_item item_ml">
          <div class="value">834,283</div>
          <div class="label">数据治理总量</div>
        </div>
        <div class="bot_right_item">
          <div class="value">4,283</div>
          <div class="label">数据治理总量</div>
        </div>
        <div class="bot_right_item item_ml">
          <div class="value">2083</div>
          <div class="label">今日问题数据量</div>
        </div>
      </div>
      <SubBlockVue tabs="治理规则统计" :moreShow="false" class="bot_right_hart">
        <div id="b_pie_chart"></div>
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
        raskList: [
          { img: require('../../../assets/images/layout/Group1772x0.png'), label: '省公安厅', value: 100 },
          { img: require('../../../assets/images/layout/Group1772x1.png'), label: '省公安厅', value: 95 },
          { img: require('../../../assets/images/layout/Group1772x2.png'), label: '省公安厅', value: 57 },
          { img: require('../../../assets/images/layout/Group1772x3.png'), label: '省公安厅', value: 65 },
          { img: require('../../../assets/images/layout/Group1772x4.png'), label: '省公安厅', value: 65 },
        ],  
        dateTypeBtnIdx: 0,
        btnList: [
          { name: '今日', value: 'today'},
          { name: '近七天', value: 'sevenDay'},
          { name: '本月', value: 'currentMonth'},
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
      this.barEchart()
      this.lineEchar()
    },
    methods: {
      handelBtn (index) {
        this.dateTypeBtnIdx = index
      },
      barEchart () {
        let dom = document.getElementById("m_d_p_bar_t")
        let xItems = []
        let yItems = []
        for (let index = 0; index < 12; index++) {
          xItems.push(`${index + 1}月`);
          if (index === 5) {
            yItems.push({
              value: parseInt(Math.random() * 100),
              itemStyle: {
                color: "rgba(1, 228, 249, 1)",
              },
            })
          } else {
            yItems.push(parseInt(Math.random() * 100));
          }
        }
        let option = {
          aria: {
            enabled: true,
            decal: { show: true },
          },
          color: ["rgba(0, 148, 255, 0.7)"],
          grid: {
            top: "9%",
            left: "2%",
            right: "4%",
            bottom: "0",
            containLabel: true,
          },
          xAxis: [{ 
            type: "category",
            boundaryGap: true,
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
            data: xItems
          }],
          yAxis: [{ 
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
            data: yItems,
            type: "bar",
            barWidth: '16',
            showBackground: true,
            backgroundStyle: {
              color: "rgba(27, 57, 83, 0.4)",
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(0,244,255,0.6)' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: 'rgba(0,77,167,1)' // 100% 处的颜色
                }], false),
                shadowColor: 'rgba(0,160,221,0.5)',
                shadowBlur: 4,
                label: {
                  show: true,
                  position: 'top',
                  formatter: '{c}',
                  textStyle: {  //数值样式
                    fontSize: 14,
                    color: '#00AAFF',
                  }
                }
              }
            },
          }],
        }
        let myChart = echarts.init(dom)
        myChart.setOption(option)
      },
      lineEchar () {
        let dom = document.getElementById("b_pie_chart")
        let dataPie = [
          {
            name: '一致性校验',
            value: 131,
          },
          {
            name: '格式校验',
            value: 151,
          },
          {
            name: '参照校验',
            value: 122,
          },
          {
            name: '空值校验',
            value: 102,
          },
          {
            name: '逻辑校验',
            value: 80,
          },
          {
            name: '重复校验',
            value: 60,
          }
        ];
        let arrName = getArrayValue(dataPie, 'name');
        let arrValue = getArrayValue(dataPie, 'value');
        let sumValue = eval(arrValue.join('+'));
        let objData = array2obj(dataPie, 'name');
        let optionData = getData(dataPie);
        function getArrayValue(array, key) {
          var key = key || 'value';
          var res = [];
          if (array) {
            array.forEach(function (t) {
              res.push(t[key]);
            });
          }
          return res;
        }

        function array2obj(array, key) {
          var resObj = {};
          for (var i = 0; i < array.length; i++) {
            resObj[array[i][key]] = array[i];
          }
          return resObj;
        }

        function getData(data) {
          var res = {
            series: [],
            yAxis: [],
          };
          for (let i = 0; i < data.length; i++) {
            res.series.push({
              name: '',
              type: 'pie',
              clockWise: false, //顺时加载
              hoverAnimation: false, //鼠标移入变大
              radius: [85 - i * 15 + '%', 77 - i * 15 + '%'],
              center: ['30%', '50%'],
              label: {
                show: false,
              },
              itemStyle: {
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
                borderWidth: 5,
              },
              data: [
                {
                  value: data[i].value,
                  name: data[i].name,
                },
                {
                  value: sumValue - data[i].value,
                  name: '',
                  itemStyle: {
                    color: '#03243F',
                    borderWidth: 0,
                  },
                  tooltip: {
                    show: false,
                  },
                  hoverAnimation: false,
                },
              ],
            })
            res.series.push({
              name: '',
              type: 'pie',
              silent: true,
              z: 1,
              clockWise: false, //顺时加载
              hoverAnimation: false, //鼠标移入变大
              radius: [85 - i * 15 + '%', 77 - i * 15 + '%'],
              center: ['30%', '50%'],
              label: {
                show: false,
              },
              itemStyle: {
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
                borderWidth: 5,
              },
              data: [
                {
                  value: 7.5,
                  itemStyle: {
                    color: '#03243F',
                    borderWidth: 0,
                  },
                  tooltip: {
                    show: false,
                  },
                  hoverAnimation: false,
                },
                {
                  value: 2.5,
                  name: '',
                  itemStyle: {
                    color: 'rgba(0,0,0,0)',
                    borderWidth: 0,
                  },
                  tooltip: {
                    show: false,
                  },
                  hoverAnimation: false,
                },
              ],
            })
            res.yAxis.push(data[i].value)
          }
          return res;
        }
        let option = {
          legend: {
            show: true,
            top: 'center',
            left: '60%',
            data: arrName,
            itemWidth: 16,
            itemHeight: 8,
            // width: 50,
            padding: [0, 5],
            itemGap: 12,
            formatter: function (name) {
              // return '{title|' + name + '}\n{value|' + objData[name].value + '元}';
              return '{title|' + name + '}';
            },
            textStyle: {
              rich: {
                title: {
                  fontSize: 16,
                  lineHeight: 16,
                  color: '#D9D9D9',
                },
                value: {
                  fontSize: 16,
                  lineHeight: 18,
                  color: '#D9D9D9',
                },
              },
            },
          },
          tooltip: {
            show: true,
            trigger: 'item',
            backgroundColor: "rgba(0, 21, 43)",
            formatter: '{b}: {c}({d}%)',
            textStyle: {
              color: '#fff',
              fontSize: 20,
            },
          },
          color: ['#CC5120', '#006AFF', '#00CC03', '#FFD600', '#00EAFF', '#00AAFF'],
          grid: {
            top: '20%',
            bottom: '48%',
            left: '30%',
            containLabel: false,
          },
          yAxis: [
            {
              type: 'category',
              inverse: true,
              axisLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              axisLabel: {
                show: false,
                interval: 0,
                inside: true,
                textStyle: {
                  // color: '#000',
                  fontSize: 16,
                },
              },
              data: optionData.yAxis,
            },
          ],
          xAxis: [
            {
              show: false,
            },
          ],
          series: optionData.series,
        }
        let myChart = echarts.init(dom)
        myChart.setOption(option)
      },
    }
  }
</script>
<style lang="scss" scoped>
.col_4_container {
  position: relative;
  .col_1_w {
    width: 100%;
    height: 94%;
    padding: 0 10px;
    background: linear-gradient(to top, #022845 20%, #021E2F);
    .rask_box {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin: 10px 0;
      .rask_item {
        width: 32%;
        height: 67px;
        background: url("@/assets/images/layout/Frame07012x1.png")no-repeat center;
        background-size: 100% 100%;
        font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
        font-weight: normal;
        font-size: 18px;
        color: #CDE9FF;
        text-align: center;
        font-style: normal;
        text-transform: none;
        padding-left: 50px;
        padding-top: 10px;
        .value {
          font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
          font-weight: 600;
          font-size: 22px;
          color: #00AAFF;
          span {
            font-size: 14px;
            padding-left: 5px;
          }
        }
      } 
      .rask_item:nth-child(2) {
        background: url("@/assets/images/layout/Frame07012x2.png")no-repeat center;
        background-size: 100% 100%;
      }
      .rask_item:nth-child(3) {
        background: url("@/assets/images/layout/Frame07012x3.png")no-repeat center;
        background-size: 100% 100%;
      }
    }
    .m_l_Box {
      width: 49%;
      height: 335px;
      #m_d_p_bar_t {
        width: 100%;
        height: 100%;
      }
      .right_table {
        width: 100%;
        height: 100%;
      }
    }
    .m_r_Box {
      width: 49%;
      height: 335px;
      margin-left: 15px; 
      .rask_table {
        width: 100%;
        height: 49px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: rgba(0,163,255,0.1); 
        margin-top: 5px;
        .label_box {
          width: 70%;
          font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
          font-weight: normal;
          font-size: 20px;
          color: #FFFFFF;
          text-align: left;
          font-style: normal;
          text-transform: none;
          display: flex;
          align-items: center;
          img {
            width: 25px;
            height: 33px;
            padding: 0 10px;
          }
          span {
            display: inline-block;
            width: 85%;
            white-space: nowrap;  
            overflow: hidden;  
            text-overflow: ellipsis;  
            cursor: pointer; 
          }
        }
        .value_box {
          width: 110px; 
          height: 43px;
          line-height: 43px;
          font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
          font-weight: normal;
          font-size: 20px;
          color: #FFFFFF;
          text-align: center;
          font-style: normal;
          text-transform: none;
          background: url("@/assets/images/layout/Frame1322x.png")no-repeat center;
          background-size: 100% 100%;
          span {
            font-size: 16px;
            color: rgba(255,255,255,0.8);
          }
        }
      }
      .rask_table:nth-child(odd) { 
        background-color: rgba(0,163,255,0.25);
        .value_box {
          width: 110px; 
          height: 43px;
          display: block;
        }
      }
      .rask_table:nth-child(4), .rask_table:nth-child(5){
        .label_box {
          img {
            width: 25px;
            height: 25px;
          }
        }
      }
    } 
    .bot_left_con {
      width: 49%;
      height: 254px;
      margin-top: 10px;
      float: left;
      border: 1px solid;
      border-image: linear-gradient(360deg, rgba(0, 170, 255, 1), rgba(0, 48, 171, 0.02)) 1 1;
      padding: 0 10px;
      .top_total {
          height: 40px;
          background: url("@/assets/images/layout/Frame211582.png")no-repeat center;
          background-size: 100% 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;  
          font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
          font-weight: normal;
          font-size: 18px;
          color: #A8FCFF;
          text-align: left;
          font-style: normal;
          text-transform: none;
          img {
              width: 25px;
              height: 20px;
          }
          .total_num {
              color: #00EAFF;
              font-size: 20px;
              font-weight: 400;
              span {
                  font-size: 16px;
              }
          }
      }
      .bot_right_item {
          width: 45%;
          height: 38%;
          background: url("@/assets/images/layout/Group13152902x.png")no-repeat center;
          background-size: 100% 100%;
          display: inline-block;
          margin-top: 8px; 
          .value {
              font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
              font-weight: normal;
              font-size: 18px;
              color: #00EAFF;
              text-align: center;
              font-style: normal;
              text-transform: none;
              margin-top: 8px;
          }
          .label {
              font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
              font-weight: normal;
              font-size: 16px;
              color: #FFFFFF;
              text-align: center;
              font-style: normal;
              text-transform: none;
              margin-top: 38px;
          }
      }
      .item_ml {
          margin-left: 40px;
      }
    }
    .bot_right_hart {
      width: 49%;
      height: 254px;
      margin-top: 10px;
      float: right;
      #b_pie_chart {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>