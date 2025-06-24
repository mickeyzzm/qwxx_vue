<template>
  <PageColumnVue class="col_1_container" :width="33.33">
    <TopBlockVue title="目标人员总体情况" icon="frame_212x" style="width: 100%;">
      <div class="col_1_box">
        <div class="left_w">
          <SubBlockVue tabs="目标人员数量" :moreShow="false">
            <div class="c_1_b_6_1_w_b">
              <div class="c_1_b_6_1_c_1">
                <p class="name">目标人员数量</p>
                <span v-for="(item, index) in tarNum.split('')" :key="index" class="num">{{ item }}</span>
              </div>
              <div class="c_1_b_6_1_c_2">
                <div v-for="(item, index) in c_1_b_6_1_w_list" :key="index" class="c_1_b_6_1_m">
                  <p class="name">{{item.name}}</p>
                  <p class="num">{{item.num}} 名</p>
                </div>
              </div>
            </div>
          </SubBlockVue>
          <SubBlockVue tabs="地市目标人员分布" :moreShow="false" style="margin-top: 16px;">
            <div id="left_bar"></div>
          </SubBlockVue>
          <SubBlockVue tabs="地市目标地域分布分析" :moreShow="false" style="margin-top: 16px;">
            <div id="left_tree_bar"></div>
          </SubBlockVue>
        </div>
        <div class="right_w">
          <SubBlockVue tabs="目标人员本市活跃度分析" :moreShow="false">
            <div class="r_top_c">
              <div class="left_pie">
                <div class="m_d_p">近7日活跃人员</div>
                <div class="m_d_p_n"><span>456</span>人</div>
                <div class="m_d_title">活跃用户分布</div>
                <div id="m_d_p_pie_t"></div>
                <div class="m_d_p">近30日活跃人员</div>
                <div class="m_d_p_n"><span>3456</span>人</div>
                <div class="m_d_title">活跃用户分布</div>
                <div id="m_d_p_pie_b"></div>
              </div>

              <div class="right_line">
                <div class="m_d_p">近7日非活跃人员</div>
                <div class="m_d_p_n"><span>456</span>人</div>
                <div class="m_d_title">近7日时间趋势分析</div>
                <div id="m_d_p_line_t"></div>
                <div class="m_d_p">近30日非活跃人员</div>
                <div class="m_d_p_n"><span>3456</span>人</div>
                <div class="m_d_title">近7日时间趋势分析</div>
                <div id="m_d_p_line_b"></div>
              </div>
            </div>
          </SubBlockVue>
          <SubBlockVue tabs="今日重要线索列表" :moreShow="false" class="c_1_c_f">
            <div class="tableHeader">
              <p class="text">序号</p>
              <p class="text">线索标题</p>
              <p class="text">线索时间</p>
              <p class="text">上报单位</p>
              <p class="text">重要级别</p>
              <p class="text">目标人员类型</p>
            </div>
            <vue-seamless-scroll v-if="tableData.length > 0" :data="tableData" :class-option="classOption" v-cloak class="seamless_warp">
              <div class="tableBody">
                <div v-for="(item, index) in tableData" :key="index" v-cloak class="tableItem">
                  <div class="name">{{ index + 1 }}</div>
                  <div class="name code">{{ item.name }}</div>
                  <div class="name date">{{ item.date }}</div>
                  <div class="name">{{ item.compony }}</div>
                  <div class="name level">
                    <el-rate v-model="item.level" disabled />
                  </div>
                  <div class="name date">{{ item.tel }}</div>
                </div> 
              </div>
            </vue-seamless-scroll>
          </SubBlockVue>
        </div>
      </div>
    </TopBlockVue>
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
      tarNum: '142',
      tableData: [
        { name: '刑事犯罪侦查支队', date: "2024-08-22 08:30:45", compony: "元宝山派出所", level: 2, tel: '010-323454' },
        { name: '刑事犯罪侦查支队', date: "2024-08-22 08:30:45", compony: "元宝山派出所", level: 2, tel: '010-323454' },
        { name: '刑事犯罪侦查支队', date: "2024-08-22 08:30:45", compony: "元宝山派出所", level: 2, tel: '010-323454' },
        { name: '刑事犯罪侦查支队', date: "2024-08-22 08:30:45", compony: "元宝山派出所", level: 2, tel: '010-323454' },
        { name: '刑事犯罪侦查支队', date: "2024-08-22 08:30:45", compony: "元宝山派出所", level: 2, tel: '010-323454' },
        { name: '刑事犯罪侦查支队', date: "2024-08-22 08:30:45", compony: "元宝山派出所", level: 2, tel: '010-323454' },
        { name: '刑事犯罪侦查支队', date: "2024-08-22 08:30:45", compony: "元宝山派出所", level: 2, tel: '010-323454' },
        { name: '刑事犯罪侦查支队', date: "2024-08-22 08:30:45", compony: "元宝山派出所", level: 2, tel: '010-323454' },
        { name: '刑事犯罪侦查支队', date: "2024-08-22 08:30:45", compony: "元宝山派出所", level: 2, tel: '010-323454' },
        { name: '刑事犯罪侦查支队', date: "2024-08-22 08:30:45", compony: "元宝山派出所", level: 2, tel: '010-323454' },
      ],
      c_1_b_6_1_w_list: [
        { name: '前科', num: 34 },
        { name: '在逃', num: 6 },
        { name: '涉毒', num: 3 },
        { name: '上访', num: 12 },
        { name: '涉恐', num: 2 },
        { name: '涉稳', num: 43 },
        { name: '精神病', num: 23 },
        { name: '其他', num: 8 },
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
    this.barEchart5()
    this.barTreeEchart5()
    this.pieEchart1('m_d_p_pie_t')
    this.pieEchart1('m_d_p_pie_b')
    this.lineEchart1('m_d_p_line_t', '#01AFFA')
    this.lineEchart1('m_d_p_line_b', '#04B10E')
  },
  methods: {
    barEchart5 () {
      let dom = document.getElementById("left_bar");
      let dataList = [4,6,3,4,10,3,4,6,3,5,10,3,4,6,3,5]
      let xData = ['双滦区','平泉市','隆化县', '丰宁县', '承德县', '双桥区', '营子区', '围场县', '滦平县', '宽城县', '兴隆县', '高新区', '钢城', '旅游', '机场', '御道口']
      let option =  {
        grid: {
          top: '16%',
          left: '0%',
          bottom: '-5%',
          right: '0%',
          containLabel: true,
        },
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
        animation: false,
        xAxis: {
          data: xData,
          type: 'category',
          axisLabel: {
            color: '#D9D9D9',
            fontSize: 16,
            interval: 0,
            rotate: -20,
            margin: 20,
            align: 'center'
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
        },
        yAxis: {
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
            name: '上部圆',
            type: 'pictorialBar',
            silent: true,
            symbolSize: [20, 10],
            symbolOffset: [0, -6],
            symbolPosition: 'end',
            z: 12,
            label: {
              normal: {
                show: true,
                position: 'top',
                fontSize: 16,
                fontWeight: 'bold',
                color: '#00AAFF',
              },
            },
            color: '#00AAFF',
            data: dataList,
          },
          {
            name: '底部圆',
            type: 'pictorialBar',
            silent: true,
            symbolSize: [20, 10],
            symbolOffset: [0, 5],
            z: 12,
            color: '#00AAFF',
            data: dataList,
          },
          {
            type: 'bar',
            barWidth: '20',
            barGap: '10%',
            barCateGoryGap: '10%',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 0.7, [
                  {
                    offset: 0,
                    color: 'rgba(210,210,210,0.3)',
                  },
                  {
                    offset: 1,
                    color: '#00AAFF',
                  },
                ]),
                opacity: 0.8,
              },
            },
            data: dataList,
          },
        ],
      }
      let myChart = echarts.init(dom)
      myChart.setOption(option)
    },
    barTreeEchart5 () {
      let dom = document.getElementById("left_tree_bar");
      let data = [60, 52, 49, 60, 70, 49, 33, 55, 49];
      let xData = ['网吧', '酒店', 'WIFI', '基站', '人脸识别', '汽车', '火车', '飞机', '轮船'];
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
          left: "1%",
          right: "1%",
          bottom: "3%",
          top: "18%",
          containLabel: true
        },
        xAxis: {
          data: xData,
          triggerEvent: true,
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#D9D9D9",
              fontSize: 16
            }
          }
        },
        yAxis: {
          name: "单位：人",
          triggerEvent: true,
          nameTextStyle: {
            color: "#D9D9D9",
            fontSize: 16
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,.4)',
              type: "dashed"
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false, 
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#D9D9D9",
              fontSize: 16
            }
          }
        },
        series: [{
          type: "pictorialBar",
          barCategoryGap: "40%",
          symbol: "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
          itemStyle: {
            normal: {
              //barBorderRadius: 5,
              //渐变色
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                  offset: 0,
                  color: "#79C7FF"
                },
                {
                  offset: 0.3,
                  color: "#79C7FF"
                },
                {
                  offset: 0.5,
                  color: "#79C7FF"
                },
                {
                  offset: 0.7,
                  color: "#79C7FF"
                },
                {
                  offset: 1,
                  color: "#79C7FF"
                }
              ])
            }
          }, 
          data: data,
          z: 10
        }]
      }
      let myChart = echarts.init(dom)
      myChart.setOption(option)
    },
    pieEchart1 (id) {
      let dom = document.getElementById(id)
      let colorList = ['#00C1FE', '#FFFF00', '#0085FF', '#00CC03', '#F9CC45']
      let data = [{
        name: "网吧",
        value: 15
      }, {
        name: "火车",
        value: 10
      }, {
        name: "飞机",
        value: 10
      }, {
        name: "酒店",
        value: 20
      }, {
        name: "基站",
        value: 20
      }]
      let option = { 
        color: colorList,
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
          bottom: 150,
          left: 100,
          right: '10%'
        },
        legend: {
          orient: 'vertical',
          top: "center",
          left: "0%",
          itemWidth: 15,
          itemHeight: 10,
          textStyle: {
            color: '#D9D9D9',
            fontSize: 18,
          },
          icon: 'roundRect',
          formatter:function(name){
            for (let i = 0; i < data.length; i++) {
              if (name == data[i].name) {
                return `${name}：${data[i].value} 次`;
              }
            }
          },
        },
        series: [
          // 主要展示层的
          {
            radius: ['40%', '61%'],
            center: ['67%', '50%'],
            type: 'pie',
            label: {
              normal: {
                show: true,
                formatter: "{b}\n{c}%",
                textStyle: {
                  color: '#D9D9D9',
                  fontSize: 18,
                },
                position: 'outside'
              },
              emphasis: {
                show: true
              }
            },
            labelLine: {
              normal: {
                show: true,
                length: 10,
                length2: 15
              },
              emphasis: {
                show: true
              }
            },
            data: data,
          },
          // 边框的设置
          {
            radius: ['53%', '61%'],
            center: ['67%', '50%'],
            type: 'pie',
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
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
    lineEchart1(id, color ) {
      let dom = document.getElementById(id)
      let echartData = [{
          name: "00:00",
          value1: 100,
          value3: 100,
          value2: 233
        },
        {
          name: "02:00",
          value1: 138,
          value3: 100,
          value2: 233
        },
        {
          name: "04:00",
          value1: 350,
          value3: 100,
          value2: 200
        },
        {
          name: "06:00",
          value1: 173,
          value3: 100,
          value2: 180
        },
        {
          name: "08:00",
          value1: 180,
          value3: 100,
          value2: 199
        },
        {
          name: "10:00",
          value1: 150,
          value3: 100,
          value2: 233
        },
        {
          name: "12:00",
          value1: 180,
          value3: 100,
          value2: 210
        }
      ]
      let xAxisData = echartData.map(v => v.name)
      let yAxisData1 = echartData.map(v => v.value1)
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
          top: 30,
          bottom: 10,
          left: 0,
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
              fontSize: 14,
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
          name: "单位：人",
          nameTextStyle: {
            color: "#D9D9D9",
            padding: [0, 0, -5, 0],
            fontSize: 14,
          },
          axisLabel: {
            textStyle: {
              color: "#D9D9D9",
              fontSize: 14,
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
          smooth: true,
          symbolSize: 6,
          zlevel: 3,
          lineStyle: {
            normal: {
              color: color,
              shadowBlur: 3,
              shadowColor: hexToRgba(color, 0.5),
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
                  color: hexToRgba(color, 0.3)
                },
                {
                  offset: 1,
                  color: hexToRgba(color, 0.1)
                }],false
              ),
              shadowColor: hexToRgba(color, 0.1),
              shadowBlur: 10
            }
          },
          data: yAxisData1
        }]
      }
      let myChart=echarts.init(dom)
      myChart.setOption(option)
    },
  },
}
</script> 

<style lang="scss" scoped>
  .col_1_container {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    .col_1_box {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      .left_w, .right_w {
        width: 49%;
        height: 100%;
      }
      .left_w {
        #left_bar {
          width: 100%;
          height: 190px;
        }
        #left_tree_bar {
          width: 100%;
          height: 190px;
        }
        .c_1_b_6_1_w_b {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .c_1_b_6_1_c_1 {
            display: flex;
            justify-content: center;
            width: 18%;
            height: 150px;
            display: inline-block;
            font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
            font-weight: normal;
            font-size: 16px;
            color: #FFFFFF;
            text-align: center;
            font-style: normal;
            text-transform: none;
            background: url("@/assets/images/layout/Group321315056@2x1-1.png")no-repeat center;
            background-size: 100% 100%;
            padding-top: 12px;
            .num {
              width: 28px;
              height: 34px;
              line-height: 34px;
              text-align: center;
              display: inline-block;
              color: #FFFFFF;  
              background: url("@/assets/images/layout/Frame13213@2x.png")no-repeat center;
              background-size: 100% 100%;
              margin-top: 5px;
            }
          }
          .c_1_b_6_1_c_2 {
            width: 82%;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            align-items: center;
            margin-left: 10px;
            .c_1_b_6_1_m {
              width: 166px;
              height: 70px;
              margin-top: 5px;
              display: inline-block;
              font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
              font-weight: normal;
              font-size: 16px;
              color: #00A3FF;
              text-align: center;
              font-style: normal;
              text-transform: none;
              background: url("@/assets/images/layout/Group 1321316417@2x1.png")no-repeat center;
              background-size: 100% 100%;
              .name {
                margin-top: 15px;
              }
            }
            .c_1_b_6_1_m:nth-child(2) {
              background: url("@/assets/images/layout/Group 1321315196@2x2.png")no-repeat center;
              background-size: 100% 100%;
              color: #1866FF;
            }
            .c_1_b_6_1_m:nth-child(3) {
              background: url("@/assets/images/layout/Group 1321315196@2x3.png")no-repeat center;
              background-size: 100% 100%;
              color: #F7BA1E;
            }
            .c_1_b_6_1_m:nth-child(4) {
              background: url("@/assets/images/layout/Group 1321315196@2x4.png")no-repeat center;
              background-size: 100% 100%;
              color: #00EAFF;
            }
            .c_1_b_6_1_m:nth-child(5) {
              background: url("@/assets/images/layout/Group 1321315196@2x5.png")no-repeat center;
              background-size: 100% 100%;
              color: #8D4EDA;
            }
            .c_1_b_6_1_m:nth-child(6) {
              background: url("@/assets/images/layout/Group 1321315196@2x6.png")no-repeat center;
              background-size: 100% 100%;
              color: #00EAFF;
            }
            .c_1_b_6_1_m:nth-child(7) {
              background: url("@/assets/images/layout/Group 1321315196@2x7.png")no-repeat center;
              background-size: 100% 100%;
              color: #FF9900;
            }
            .c_1_b_6_1_m:nth-child(8) {
              background: url("@/assets/images/layout/Group 1321315196@2x8.png")no-repeat center;
              background-size: 100% 100%;
              color: #00AAFF;
            }
          }
        }
      }
      .right_w {
        .r_top_c {
          width: 100%;
          height: 420px;
          display: flex;
          justify-content: space-around;
          .left_pie, .right_line {
            width: 49%;
            height: 100%;
            .m_d_p {
              display: inline-block;
              width: 70%;
              height: 28px;
              line-height: 28px;
              background: linear-gradient( 90deg, #0a4775 0%, rgba(0,145,255,0) 100%);
              font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
              font-weight: normal;
              font-size: 16px;
              color: #FFFFFF;
              text-align: left;
              font-style: normal;
              text-transform: none;
              padding-left: 20px;
            }
            .m_d_p_n {
              width: 30%;
              display: inline-block;
              height: 28px;
              background: rgba(0,145,255,0.2);
              font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
              font-weight: normal;
              font-size: 12px;
              color: rgba(255,255,255,0.8);
              line-height: 28px;
              text-align: center;
              font-style: normal;
              text-transform: none;
              span {
                color: #0091FF;
                padding-right: 5px;
                font-size: 18px;
              }
            }
            .m_d_title {
              height: 20px;
              font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
              font-weight: normal;
              font-size: 16px;
              color: #FFFFFF;
              text-align: left;
              line-height: 20px;
              font-style: normal;
              text-transform: none;
              position: relative;
              padding-left: 20px;
              margin-top: 10px;
              &::after {
                content: "";
                position: absolute;
                left: 0;
                top: 0;
                width: 1px;
                height: 100%;
                padding: 4px;
                box-sizing: border-box;
                border-radius: 2px;
                background:rgba(0, 170, 255, 1);
                z-index: -1;
              }
            }
            #m_d_p_pie_t {
              width: 100%;
              height: 150px;
            }
            #m_d_p_pie_b {
              width: 100%;
              height: 150px;
            }
          }
          .right_line {
            width: 49%;
            height: 100%;
            #m_d_p_line_t {
              width: 100%;
              height: 150px;
            }
            #m_d_p_line_b {
              width: 100%;
              height: 150px;
            }
          }
        }
        .c_1_c_f {
          width: 100%;
          height: 250px;
          overflow: hidden;
          flex-shrink: 0;
          margin-top: 16px;
          .tableHeader {
            width: 100%;
            height: 40px;
            background: rgba(0,163,255,0.2);
            display: inline-block;
            display: flex;
            align-items: center;
            .text {
              flex: 1;
              height: 24px;
              font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
              font-weight: normal;
              font-size: 20px;
              color: #FFFFFF;
              line-height: 24px;
              text-align: left;
              font-style: normal;
              text-transform: none;
              padding-left: 10px;
            } 
            p:nth-child(1) {
              flex: 0.5;
              padding: 0;
              text-align: center;
            }
            p:nth-child(2) {
              flex: 1.5;
            } 
            p:nth-child(4) {
              flex: 1;
              text-align: center;
            } 
          }
          .tableBody {
            width: 100%;
            .tableItem {
              width: 100%;
              height: 40px;
              display: flex;
              align-items: center;  
              .name {
                flex: 1;
                font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
                font-weight: normal;
                font-size: 18px;
                color: rgba(255,255,255,0.87);
                text-align: left;
                background: none;
                white-space: nowrap;  
                overflow: hidden;  
                text-overflow: ellipsis;  
                cursor: pointer; 
                padding-left: 10px;
              }  
              div:nth-child(1) {
                text-align: center;
                flex: 0.5;
                padding: 0;
              }
              div:nth-child(4) {
                text-align: center;
              }
              .code {
                flex: 1.5;
              }
              .level {  
                color: yellow;
                background: none;
              }
            }
            div:nth-child(odd) {
              background: rgba(0,145,255,0.1);
            }
          }
          .seamless_warp {
            height: 229px;
            overflow: hidden;
          }
        }
      }
    }
  }
</style>
    