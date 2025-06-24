<template>
  <PageColumnVue class="col_3_container" :width="20">
    <TopBlockVue title="资源分析" icon="Frameshelx" />
    <div class="c_1_b_1_c">
      <div class="feelingBox">
        <div v-for="(item, index) in feelingList" class="feeling">
          <div class="name">{{ item.label }}</div>
          <div class="tel">{{ item.value }}</div>
        </div> 
      </div>
    </div>
    <TopBlockVue title="重大活动概览" icon="Frame0002x" />
    <div class="botecharBox">
      <SubBlockVue tabs="活动等级分布" :moreShow="false" class="c_1_b_2_1_c">
        <div id="col_chartPie"></div>
        <div class="chartPieToall">{{ '11' }}</div> 
        <div v-for="(item, index) in pieChartData" :key="index" class="c_1_b_2_1__len">
          <div class="name">{{ item.name }}</div>
          <div class="vPercent">
            <span class="value">{{ item.value }}</span>
            <p>占比：<span class="value">{{ item.percent }}%</span> </p>
          </div>
        </div>
      </SubBlockVue>
      <SubBlockVue tabs="活动安保布控分析" :moreShow="false" class="c_1_b_2_2_c">
        <div class="c_1_b_2_2_c_bg"></div>
        <div v-for="(item, index) in analysisList" :key="index" class="analysisItem">
          <div class="value">{{ item.value }} <span>人</span></div>
          <div class="label">{{ item.label }}</div>
        </div>
      </SubBlockVue>  
      <SubBlockVue tabs="活动安保布控分析" :moreShow="false" class="c_1_b_3_c">
        <div id="col_chartBar"></div>
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
        pieChartData: [
          {
            name: '一级',
            value: 2,
            percent: 18,
          },
          {
            name: '二级',
            value: 6,
            percent: 30,
          },
          {
            name: '三级',
            value: 4,
            percent: 50,
          },
          {
            name: '四级',
            value: 2,
            percent: 2,
          },
        ],
      }
    },
    mounted() {
      this.pieEchart()
      this.barEchart()
    },
    methods: {
      pieEchart () {
        let dom = document.getElementById("col_chartPie");
        let colorList = ['#00AAFF', '#F7BA1E', '#9951FD', '#00FFFF']
        let data = this.pieChartData
        let newData = [];
        // 加阴影效果
        for (let i = 0; i < data.length; i++) {
          newData.push({
            value: data[i].value,
            name: data[i].name,
            itemStyle: {
              normal: {
                // borderWidth: 0,
                shadowBlur: 35,
                // borderRadius: 1,
                // borderColor: colorList[i],
                shadowColor: colorList[i],
              },
            },
          })
        }
        let option = {
          color: colorList,
          title: {
            text: '活动数',
            left: 'center',
            bottom: '80',
            textStyle: {
              fontSize: 16,
              color: '#D9D9D9'
            },
          },
          tooltip: {
            trigger: 'axis',
            backgroundColor: "rgba(0, 21, 43)",
          },
          legend: {
            show: false,
          },
          series: [{
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['50%', '70%'],
            clockwise: true,
            avoidLabelOverlap: true,
            hoverOffset: 2,
            tooltip: {
              trigger: 'axis',
              formatter: function (params) {
                return params.name + '：' + params.value + '<br>占比：' + params.percent.toFixed(1) + '%';
              },
              textStyle: {
                color: '#D9D9D9',
                fontSize: 16,
                fontWeight: 500,
              },
              padding: [10, 20],
              extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);',
            },
            emphasis: {
              itemStyle: {
                borderColor: '#f3f3f3',
                borderWidth: 5,
              },
            },
            //启用鼠标放上去放大效果，这个挺好的
            itemStyle: {
              normal: {
                color: function (params) {
                    return colorList[params.dataIndex];
                },
                // shadowBlur: 20,
                // shadowColor: function (params) {
                //     return colorListShadow[params.dataIndex];
                // },
              },
            },
            label: {
              show: false,
              position: 'outside',
              formatter: '{a|{b}：{d}%}\n{hr|}',
              rich: {
                hr: {
                  backgroundColor: 't',
                  borderRadius: 1,
                  width: 1,
                  height: 1,
                  padding: [1, 1, 0, -4],
                },
                a: {
                  padding: [-15, 7, -10, 7],
                },
              },
            },
            labelLine: {
              normal: {
                length: 10,
                length2: 15,
                lineStyle: {
                  width: 1,
                },
              },
            },
            data: newData,
          }],
        }
        let myChart = echarts.init(dom);
        myChart.setOption(option);
      },
      barEchart () {
        let dom = document.getElementById("col_chartBar");
        let dataList = [4,6,3,4,10,3,4,6,3,5,10,3,4,6,3,5]
        let xData = ['双滦区','平泉市','隆化县', '丰宁县', '承德县', '双桥区', '营子区', '围场县', '滦平县', '宽城县', '兴隆县', '高新区', '钢城', '旅游', '机场', '御道口']
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
            bottom: '20%'
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
                fontSize: 14,
                rotate: -10,
                margin: 20,
                align: 'center'
              }
            }
          ],
          yAxis: {
            name: "活动数（个）",
            nameTextStyle: {
              color: "#D9D9D9",
              padding: [0, 0, -5, 50],
              fontSize: 14,
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: '#D9D9D9',
              fontSize: 14,
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
              symbolSize: [0, 0],
              symbolOffset: [0, 0],
              symbolPosition: 'end',
              z: 12,
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
                }
              },
              data: dataList
            }, 
            {
              type: 'bar',
              showBackground: true,
              backgroundStyle: {
                color: 'rgba(0,133,255,0.2)',
                borderRadius: [0, 0, 0, 0]
              },
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: '#00EAFF',
                      opacity: 1
                    },
                    {
                      offset: 0.5,
                      color: '#0085FF',
                      opacity: 1
                    },
                    {
                      offset: 1,
                      color: '#015B9A',
                      opacity: 0.1
                    }
                  ])
                }
              },
              barWidth: '20',
              data: dataList
            }
          ]
        }
        let myChart = echarts.init(dom)
        myChart.setOption(option)
      },
    }
  }
</script>
<style lang="scss" scoped>
.col_3_container {
  .c_1_b_1_c {
    width: 100%;
    height: 22%;
    margin-bottom: 20px;
    .feelingBox {
      width: 100%;
      height: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
      background: linear-gradient(to top, #022845 20%, #021E2F);
      padding: 10px;
      padding-top: 10px;
      .feeling {
        width: 16%;
        height: 149px;
        background: rgba(0,105,185,0.1);
        border-radius: 4px 4px 4px 4px;
        border: 1px solid #104068;
        .name {
          text-align: center;
          font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
          font-weight: normal;
          font-size: 16px;
          color: #FFFFFF;
          line-height: 24px;
          margin-top: 80px;
        }
        .tel {
          height: 17px;
          font-family: YouSheBiaoTiHei, YouSheBiaoTiHei;
          font-weight: 400;
          font-size: 20px;
          color: #00EAFF;
          line-height: 20px;
          text-align: center;
          font-style: normal;
          text-transform: none;
        }
      }
      .feeling:nth-child(1) {
        background: url('../../../assets/images/layout/droup3213x1.png') no-repeat;  
        background-size: 100% 100%;
      }
      .feeling:nth-child(2) {
        background: url('../../../assets/images/layout/droup3213x2.png') no-repeat;  
        background-size: 100% 100%;
      }
      .feeling:nth-child(3) {
        background: url('../../../assets/images/layout/droup3213x3.png') no-repeat;  
        background-size: 100% 100%;
      }
      .feeling:nth-child(4) {
        background: url('../../../assets/images/layout/droup3213x4.png') no-repeat;  
        background-size: 100% 100%;
      }
      .feeling:nth-child(5) {
        background: url('../../../assets/images/layout/droup3213x5.png') no-repeat;  
        background-size: 100% 100%;
      }
      .feeling:nth-child(6) {
        background: url('../../../assets/images/layout/droup3213x6.png') no-repeat;  
        background-size: 100% 100%;
      }
    }
  }
  .botecharBox {
    width: 100%;
    height: 64%;
    background: linear-gradient(to top, #022845 20%, #021E2F);
    padding: 0 10px;
    .c_1_b_2_1_c, .c_1_b_2_2_c {
      width: 49%;
      height: 50%;
      margin-top: 5px;
      display: inline-block;
    }
    .c_1_b_2_1_c {
      position: relative;
      #col_chartPie {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0%;
        top: 0%;
      }
      .chartPieToall {
        position: absolute;
        left: 48%;
        top: 38%;
        font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
        font-weight: 400;
        font-size: 18px;
        color: #00C2FF;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
      .c_1_b_2_1__len {
        position: absolute;
        width: 140px;
        height: 68px;
        margin: 10px;
        padding: 6px 10px;
        background: url("@/assets/images/layout/Group132131left.png")no-repeat center;
        background-size: 100% 100%;
        /* top: 0%;
        left: 0%; */
        .name {
          font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
          font-weight: normal;
          font-size: 16px;
          color: #FFFFFF;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }
        .vPercent {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
          font-weight: normal;
          font-size: 16px;
          color: #00FFFF;
          font-style: normal;
          text-transform: none; 
          margin-top: 15px; 
        }
      } 
      .c_1_b_2_1__len:nth-child(3) {
        right: 0%;
        top: 0%; 
        background: url("@/assets/images/layout/Group132131right.png")no-repeat center;
        background-size: 100% 100%;
        .name {
          text-align: right;
        }
        .vPercent {
          .value {
            color: #00C2FF;
          }
        }
      }
      .c_1_b_2_1__len:nth-child(4) {
        left: 0%;
        bottom: 0%;
        background: url("@/assets/images/layout/Group132131left.png")no-repeat center;
        background-size: 100% 100%; 
        .vPercent {
          .value {
            color: #9951FD;
          }
        }
      }
      .c_1_b_2_1__len:nth-child(5) {
        right: 0%;
        bottom: 0%;
        background: url("@/assets/images/layout/Group132131right.png")no-repeat center;
        background-size: 100% 100%;
        .name {
          text-align: right;
        }
        .vPercent {
          .value {
            color: #F7BA1E;
          }
        }
      }
    }
    .c_1_b_2_2_c {
      float: right;
      position: relative;
      .c_1_b_2_2_c_bg {
        position: absolute;
        left: 5%;
        bottom: 2%;
        width: 90%;
        height: 90%;
        background: url("@/assets/images/layout/Gro1316429.png")no-repeat center;
        background-size: 100% 100%;
      }
      .analysisItem {
        position: absolute;
        width: 201px;
        height: 56px; 
        padding-left: 70px;
        .value {
          width: 21px;
          height: 26px;
          font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
          font-weight: normal;
          font-size: 18px;
          line-height: 26px;
          text-align: left;
          font-style: normal;
          text-transform: none;
          span {
            color: rgba(255,255,255,0.6);
          }
        }
        .label {
          width: 96px;
          height: 24px;
          font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
          font-weight: normal;
          font-size: 18px;
          color: #CFD2DA;
          line-height: 24px;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }
      }
      .analysisItem:nth-child(2) {
        left: 3%;
        top: 25%;
        background: url("@/assets/images/layout/Group321316431.png")no-repeat center;
        background-size: 100% 100%;
        .value {
          color: #00AAFF;
        }
      }
      .analysisItem:nth-child(3) {
        left: 30%;
        top: 5%;
        background: url("@/assets/images/layout/Group321316432.png")no-repeat center;
        background-size: 100% 100%;
        .value {
          color: #A871E3;
        }
      }
      .analysisItem:nth-child(4) {
        right: 3%;
        top: 32%;
        background: url("@/assets/images/layout/Group321316433.png")no-repeat center;
        background-size: 100% 100%;
        .value {
          color: #01EAFF;
        }
      }
      .analysisItem:nth-child(5) {
        left: 30%;
        bottom: 20%;
        background: url("@/assets/images/layout/Group321316434.png")no-repeat center;
        background-size: 100% 100%;
        .value {
          color: #FF9900;
        }
      }
    }
    .c_1_b_3_c {
      width: 100%;
      height: 45%;
      margin-top: 15px;
      #col_chartBar {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>