<template>
  <TopBlockVue title="流量分析" icon="Frame01992x" class="col_5_container" :width="16.665">
    <div class="col_3_w">
      <div class="c_1_l_1_w">
        <div class="table_t_title1">
          <p>访问总次数</p>
          <p>46 <span>次</span></p>
        </div>
        <div class="table_t_title2">
          <p>访问用户数</p>
          <p>68 <span>个</span></p>
        </div>
        <div class="table_t_title3">
          <p>今日访问数</p>
          <p>68 <span>个</span></p>
        </div>
        <div class="table_t_title1">
          <p>平均响应速率</p>
          <p>68 <span>ms</span></p>
        </div>
      </div>
      <SubBlockVue tabs="流量变化趋势" :moreShow="false" class="b_line_chart">
        <div id="b_line_chart"></div>
      </SubBlockVue>
      <SubBlockVue tabs="数据接入情况" :moreShow="false" class="tableData">
        <div class="table_info">
          <div class="tableHeader">
            <p>序号</p>
            <p>数据表名</p>
            <p>接入时间</p>
            <p>更新方式</p>
            <p>更新频率</p>
            <p>接入数量</p>
          </div>
          <vue-seamless-scroll v-if="tableData.length > 0" :data="tableData" :class-option="classOption" v-cloak class="seamless_warp">
            <div class="tableBody">
              <div v-for="(item, index) in tableData" :key="index" class="tableItem">
                <div class="name">{{ index + 1 }}</div>
                <div class="name">{{ item.carId }}</div>
                <div class="name">{{ item.adress }}</div>
                <div class="name">{{ item.position }}</div>
                <div class="name">{{ item.position }}</div>
                <div class="name">{{ item.num }}</div>
              </div> 
            </div>
          </vue-seamless-scroll>
        </div>
      </SubBlockVue>
    </div>
  </TopBlockVue>
</template>
<script>
import * as echarts from "echarts";
import TopBlockVue from "@/components/layout/TopBlock";
import Mp4boxAllMin from '@/utils/mp4box.all.min.js'
import wsPlayer from '@/utils/wsPlayer.js'
import SubBlockVue from "@/components/layout/SubBlock"
export default {
  name: "Column3Com",
  components: {
    TopBlockVue,
    SubBlockVue,
  },
  data() {
    return {
      player: null,
      tableData: [
        { carId: '组织结构表', adress: '2024-04-12 12:10:11', position: '数据库交互', num: 2234 },
        { carId: '组织结构表', adress: '2024-04-12 12:10:11', position: '数据库交互', num: 2234 },
        { carId: '组织结构表', adress: '2024-04-12 12:10:11', position: '数据库交互', num: 2234 },
        { carId: '组织结构表', adress: '2024-04-12 12:10:11', position: '数据库交互', num: 2234 },
        { carId: '组织结构表', adress: '2024-04-12 12:10:11', position: '数据库交互', num: 2234 },
        { carId: '组织结构表', adress: '2024-04-12 12:10:11', position: '数据库交互', num: 2234 },
        { carId: '组织结构表', adress: '2024-04-12 12:10:11', position: '数据库交互', num: 2234 },
        { carId: '组织结构表', adress: '2024-04-12 12:10:11', position: '数据库交互', num: 2234 },
        { carId: '组织结构表', adress: '2024-04-12 12:10:11', position: '数据库交互', num: 2234 },
        { carId: '组织结构表', adress: '2024-04-12 12:10:11', position: '数据库交互', num: 2234 },
        { carId: '组织结构表', adress: '2024-04-12 12:10:11', position: '数据库交互', num: 2234 },
        { carId: '组织结构表', adress: '2024-04-12 12:10:11', position: '数据库交互', num: 2234 },
        { carId: '组织结构表', adress: '2024-04-12 12:10:11', position: '数据库交互', num: 2234 },
        { carId: '组织结构表', adress: '2024-04-12 12:10:11', position: '数据库交互', num: 2234 },
        { carId: '组织结构表', adress: '2024-04-12 12:10:11', position: '数据库交互', num: 2234 },
        { carId: '组织结构表', adress: '2024-04-12 12:10:11', position: '数据库交互', num: 2234 },
        { carId: '组织结构表', adress: '2024-04-12 12:10:11', position: '数据库交互', num: 2234 },
        { carId: '组织结构表', adress: '2024-04-12 12:10:11', position: '数据库交互', num: 2234 },
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
  // this.initwaPlayer()
  this.lineEchar()
  },
  methods: {
    lineEchar () {
      let dom = document.getElementById("b_line_chart")
      let color = [ "#0091FF", "#FF9900"]
      let yAxisData1 = [18,19,23,16,14,24,15]
      let yAxisData3 = [14,13,15,14,10,20,12]
      let xAxisData = ['09:01','09:04','09:08', '09:12', '09:16', '09:20', '09:24']
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
          right: 20,
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
          name: "单位：Vbps",
          nameTextStyle: {
            color: "#D9D9D9",
            padding: [0, 0, 0, 12],
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
          name: "吞吐量（流入）",
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
          name: "吞吐量（流出）",
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
                }],
                false
              ),
              shadowColor: hexToRgba(color[1], 0.1),
              shadowBlur: 10
            }
          },
          data: yAxisData3
        }]
      }
      let myChart = echarts.init(dom)
      myChart.setOption(option)
    },
    initwaPlayer () {
      this.$http({
        url: this.$http.adornUrl('/getTotalJq?name='),
        method: 'get',
      }).then(res => {
        if (res.data.code == '200') {
          // 创建播放器实例
          let url = res.data.data.ws_fmp4 // ws_fmp4 模拟数据假参数
          this.player = new wsPlayer({ id: 'video_container', url: ''})
          this.player.open()
        }
      })
    },
    handlerClose () {
      this.VideoDialogVisible = false
    },
  },
  beforeDestroy() {
    // 销毁播放器实例
    if (this.player) {
      this.player.close()
    }
  },
}
</script>
<style lang="scss" scoped>
.col_5_container { 
  width: 100%;
  .col_3_w {
    width: 100%;
    height: 95%;
    padding: 0 10px;
    background: linear-gradient(to top, #022845 20%, #021E2F);
    .c_1_l_1_w {
      width: 100%;
      height: 12%;
      .table_t_title1,.table_t_title2,.table_t_title3{
        width: 24%;
        height: 68px;
        display: inline-block;
        margin: 10px 0px 10px 0px;
        font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
        font-weight: normal;
        font-size: 16px;
        color: #0091FF;
        text-align: center;
        font-style: normal;
        text-transform: none;
        background: url("@/assets/images/layout/Frame427392x1.png")no-repeat center;
        background-size: 100% 100%;
        padding-top: 10px;
        margin-left: 5px;
        p:nth-child(2) {
          margin-top: 8px;
          span {
            color: #FFFFFF;
            font-size: 14px;
          }
        }
      }  
      .table_t_title2 {
        color: #FF9900;
        background: url("@/assets/images/layout/Frame427392x2.png")no-repeat center;
        background-size: 100% 100%;
      }  
      .table_t_title3 {
        color: #00EAFF;
        margin-left: 10px;
        background: url("@/assets/images/layout/Frame427392x3.png")no-repeat center;
        background-size: 100% 100%;
      }
    } 
    .b_line_chart {
      width: 100%;
      height: 40%;
      #b_line_chart {
        width: 100%;
        height: 100%;
      }
    } 
    .tableData {
      width: 100%;
      height: 51%;
      margin-top: 16px;
      .table_info {
        width: 100%;
        height: 100%;
        overflow: auto;
        .tableHeader {
          width: 100%;
          height: 40px;
          background: rgba(2,41,73,0.7);
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
            color: #00EAFF;
            line-height: 22px;
          }
          p:nth-child(1) {
            flex: 0.5; 
          }
          p:nth-child(2) {
            flex: 1;  
          }
          p:nth-child(3) {
            flex: 2;
          }
          p:nth-child(4) {
            flex: 1; 
          }
          p:nth-child(5) {
            flex: 1; 
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
              flex: 1; 
            }
            div:nth-child(3) {
              flex: 2;
            }
            div:nth-child(4) {
              flex: 1; 
            }
            div:nth-child(5) {
              flex: 1; 
            } 
            div:nth-child(6) {
              flex: 1; 
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