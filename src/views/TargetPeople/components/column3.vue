<template>
  <PageColumnVue class="col_3_container" :width="33.33">
    <TopBlockVue title="目标人员流动态势" icon="frame_212x" />
    <div class="col_3_w">
      <div class="c_1_l_1_w">
        <SubBlockVue tabs="近30天本市新增目标人员统计" :moreShow="false">
          <div class="c_1_l_total">1432人</div>
          <div id="c_1_l_pie"></div>
          <div id="c_1_l_bar"></div>
        </SubBlockVue>
      </div>
      <div class="c_1_l_2_w">
        <SubBlockVue tabs="近30天目标人员流入流出统计" :moreShow="false">
          <div id="c_1_l_2_bar"></div>
        </SubBlockVue>
      </div>
      <div class="c_1_l_3_w">
        <SubBlockVue tabs="近30天目标人员进京赴港统计" :moreShow="false">
          <div id="c_1_l_3_bar"></div>
        </SubBlockVue>
        <SubBlockVue tabs="近30天目标人员进京赴港列表" :moreShow="false" style="margin-top: 15px;">
          <div id="c_1_l_3_table">
            <div class="table_left">
                <div class="table_left_title">进京</div>
                <div class="tableHeader">
                    <p>目标人员</p>
                    <p>户籍</p>
                    <p>人员类型</p>
                </div>
                <vue-seamless-scroll v-if="tableDataLeft.length > 0" :data="tableDataLeft" :class-option="classOption" v-cloak class="seamless_warp">
                    <div class="tableBody">
                        <div v-for="(item, index) in tableDataLeft" :key="index" class="tableItem">
                            <div class="name">{{ item.targetP }}</div>
                            <div class="name">{{ item.hj }}</div>
                            <div class="name">{{ item.pType }}</div>
                        </div> 
                    </div>
                </vue-seamless-scroll>
            </div>
            <div class="table_right">
                <div class="table_right_title">赴港</div>
                <div class="tableHeader">
                    <p>目标人员</p>
                    <p>户籍</p>
                    <p>人员类型</p>
                </div>
                <vue-seamless-scroll v-if="tableDataLeft.length > 0" :data="tableDataLeft" :class-option="classOption" v-cloak class="seamless_warp">
                    <div class="tableBody">
                        <div v-for="(item, index) in tableDataLeft" :key="index" class="tableItem">
                            <div class="name">{{ item.targetP }}</div>
                            <div class="name">{{ item.hj }}</div>
                            <div class="name">{{ item.pType }}</div>
                        </div> 
                    </div>
                </vue-seamless-scroll>
            </div>
          </div>
        </SubBlockVue>
      </div>
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
        tableDataLeft: [
            { targetP: '郝以', hj: '承德市双桥区卡镇', pType: '前科' },
            { targetP: '郝以', hj: '承德市双桥区卡镇', pType: '前科' },
            { targetP: '郝以', hj: '承德市双桥区卡镇', pType: '前科' },
            { targetP: '郝以', hj: '承德市双桥区卡镇', pType: '前科' },
            { targetP: '郝以', hj: '承德市双桥区卡镇', pType: '前科' },
            { targetP: '郝以', hj: '承德市双桥区卡镇', pType: '前科' },
            { targetP: '郝以', hj: '承德市双桥区卡镇', pType: '前科' },
            { targetP: '郝以', hj: '承德市双桥区卡镇', pType: '前科' },
            { targetP: '郝以', hj: '承德市双桥区卡镇', pType: '前科' },
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
      this.pieEchart()
      this.barEchart()
      this.leftRightbarEchart()
      this.barTwoEchart()
    },
    methods: {
      pieEchart () {
        let dom = document.getElementById("c_1_l_pie");
        let colorList = ['#00C1FE', '#FFFF00', '#0085FF', '#00CC03', '#F9CC45', '#5E4AB4','#00FFFF','#31FFDA']
        let data = [{
            name: "前科",
            value: 20
        }, {
            name: "涉恐",
            value: 18
        }, {
            name: "涉毒",
            value: 15
        }, {
            name: "神经病",
            value: 10
        }, {
            name: "在逃",
            value: 10
        }, {
            name: "涉稳",
            value: 20
        }, {
            name: "上访",
            value: 20
        }, {
          name: "其他",
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
          title: {
            text: '100%',
            x: '35%',
            y: '45%',
            textAlign: 'center',
            textStyle: {
                fontSize: '24',
                fontWeight: '800',
                color: '#fff',
                textAlign: 'center',
                textShadowColor: '#000',
                textShadowBlur: '1',
                textShadowOffsetX: 4,
                textShadowOffsetY: 4,
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
              left: "75%",
              textStyle: {
                  color: '#D9D9D9',
                  fontSize: 18,
              },
              icon: 'roundRect',
              data: data,
          },
          series: [
              // 主要展示层的
              {
                  radius: ['40%', '61%'],
                  center: ['36%', '50%'],
                  type: 'pie',
                  label: {
                      normal: {
                          show: true,
                          formatter: "{c}%",
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
                          length: 20,
                          length2: 25
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
                  center: ['36%', '50%'],
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
        let myChart = echarts.init(dom);
        myChart.setOption(option);
      },
      barEchart () {
        let dom = document.getElementById("c_1_l_bar");
        let yData = [324,236,233,104,130,321,422,433,313,523,102,311,423,192,334,259]
        let xData = ['3/01','3/02','3/03', '3/04', '3/05', '3/06', '3/07', '3/08', '3/09', '3/10', '3/11', '3/12', '3/13', '3/14', '3/15', '3/16']
        let option =  {
            color: [
                '#63caff', 
                'rgba(4, 79, 136,0.4)',
                'rgba(4, 79, 136,0.4)', 
            ],
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
                left: 10,
                right: 10,
                bottom: 25,
                top: 20,
            },
            xAxis: {
                axisLabel: {
                    color: '#c0c3cd',
                    fontSize: 16,
                    interval: 0,
                },
                axisTick: {
                    lineStyle: {
                        color: '#384267',
                    },
                    show: true,
                },
                splitLine: {
                    show: false,
                },
                axisLine: {
                    lineStyle: {
                        color: '#384267',
                        width: 1,
                        type: 'dashed',
                    },
                    show: true,
                },
                data: xData,
                type: 'category',
            },
            yAxis: {
                axisLabel: {
                    color: '#c0c3cd',
                    fontSize: 16,
                },
                axisTick: {
                    lineStyle: {
                        color: '#384267',
                        width: 1,
                    },
                    show: true,
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#384267',
                        type: 'dashed',
                    },
                },
                axisLine: {
                    lineStyle: {
                        color: '#384267',
                        width: 1,
                        type: 'dashed',
                    },
                    show: true,
                },
                name: '',
            },
            dataZoom: [ //给x轴设置滚动条
                {
                    start: 0, //默认为0
                    end: 100 - 1500 / 31, //默认为100
                    type: 'slider',
                    show: true,
                    xAxisIndex: [0],
                    handleSize: 0, //滑动条的 左右2个滑动条的大小
                    height: 10, //组件高度
                    left: 50, //左边的距离
                    right: 40, //右边的距离
                    bottom: 0, //右边的距离
                    handleColor: '#ddd', //h滑动图标的颜色
                    handleStyle: {
                    borderColor: "#cacaca",
                    borderWidth: "1",
                    shadowBlur: 2,
                    background: "#ddd",
                    shadowColor: "#ddd",
                    },
                    fillerColor: '#808080',
                    backgroundColor: '#ddd', //两边未选中的滑动条区域的颜色
                    showDataShadow: false, //是否显示数据阴影 默认auto
                    showDetail: false, //即拖拽时候是否显示详细数值信息 默认true
                    handleIcon: 'M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z',
                    filterMode: 'filter',
                },
                //下面这个属性是里面拖到
                {
                    type: 'inside',
                    show: true,
                    xAxisIndex: [0],
                    start: 0, //默认为1
                    end: 100 - 1500 / 31, //默认为100
                },
            ],
            series: [
                {
                    data: yData,
                    type: 'bar',
                    barMaxWidth: 'auto',
                    barWidth: 20,
                    itemStyle: {
                        color: {
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            type: 'linear',
                            global: false,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: '#39A3DC',
                                },
                                {
                                    offset: 1,
                                    color: '#0172CB',
                                },
                            ],
                        },
                    },
                    label: {
                        show: true,
                        position: 'top',
                        distance: 6,
                        color: '#00AAFF',
                        fontSize: 16,
                    },
                },
                {
                    data: yData,
                    type: 'pictorialBar',
                    barMaxWidth: '20',
                    symbolPosition: 'end',
                    symbol: 'diamond',
                    symbolOffset: [0, '-50%'],
                    symbolSize: [20, 12],
                    zlevel: 2,
                },
                {
                    data: [1, 1, 1, 1, 1, 1, 1, 1],
                    type: 'pictorialBar',
                    barMaxWidth: '20',
                    symbol: 'diamond',
                    symbolOffset: [0, '50%'],
                    symbolSize: [0, 0],
                },
                {
                    data: [600, 600, 600, 600, 600, 600, 600, 600,600, 600, 600, 600, 600, 600, 600, 600],
                    type: 'bar',
                    barMaxWidth: 'auto',
                    barWidth: 20,
                    barGap: '-100%',
                    zlevel: -1,
                },
            ],
        }
        let myChart = echarts.init(dom);
        myChart.setOption(option);
      },
      leftRightbarEchart () {
        let dom = document.getElementById("c_1_l_2_bar")
        let myData = [
            '2024-04-1', '2024-04-2', '2024-04-3', '2024-04-4', '2024-04-5', '2024-04-6', 
            '2024-04-7', '2024-04-8', '2024-04-9', '2024-04-10', '2024-04-11', '2024-04-12', 
            '2024-04-13', '2024-04-14', '2024-04-15', '2024-04-16', '2024-04-17', '2024-04-18'
        ]
        const offLine = [10, 30, 50, 20, 50, 30, 30, 40, 10, 20, 50, 20, 50, 30, 30, 40, 10, 20]
        const onLine = [10, 20, 20, 40, 20, 10, 60, 60, 40, 20, 50, 20, 50, 30, 30, 40, 10, 20]
        let option =  {
            legend: [ 
                {
                    top: '10',
                    left: 'center', 
                    textStyle: {
                        color: '#fff',
                        fontSize: 16,
                    },
                    selectedMode: false,  
                    data: ['流入', '流出'],
                },
            ],
            tooltip: {
                show: true,
                trigger: "axis",
                backgroundColor: "rgba(0, 21, 43)",
                textStyle: {
                    color: '#fff',
                    fontSize: 20,
                },
            },
            grid: [
                {
                    // 左边
                    show: false,
                    left: '5%',
                    top: 20,
                    bottom: 5,
                    containLabel: true,
                    width: '36%',
                },
                {
                    // 中间
                    show: false,
                    left: '59%',
                    top: 40,
                    bottom: 5,
                    width: '32%',
                },
                {
                    // 右边
                    show: false,
                    right: '5%',
                    top: 20,
                    bottom: 5,
                    containLabel: true,
                    width: '36%',
                },
            ],
            // X轴线配置
            xAxis: [
                {
                    // 左侧区域
                    gridIndex: 0, // x 轴所在的 grid 的索引，默认位于第一个 grid。[ default: 0 ]
                    type: 'value', // 轴线类型: 数值轴
                    position: 'top', // 轴线位置(此处位于顶部)
                    inverse: true, // 是否是反向坐标轴.[ default: false ]
                    axisLine: {
                        show: false, // 轴线不显示
                    },
                    axisTick: {
                        show: false, // 轴线刻度不显示
                    },
                    axisLabel: {
                        // 轴线刻度标签
                        show: true, // 显示刻度标签
                        textStyle: {
                            // 标签样式
                            color: '#153D7D64',
                            fontSize: 12,
                        },
                    },
                    splitLine: {
                        // 垂直于X轴的分隔线
                        show: true, // 显示分隔线
                        lineStyle: {
                            // 分隔线样式
                            color: '#153D7D64',
                            width: 1,
                            type: 'solid',
                        },
                    },
                    // 强制设置坐标轴分割间隔
                    // interval: 50,
                    // min: 0, // 最小值
                    // max: 200 // 最大值
                },
                {
                    // 中间区域
                    gridIndex: 1,
                    show: false, // 中间部分不显示X轴
                },
                {
                    // 右侧区域
                    gridIndex: 2,
                    type: 'value',
                    position: 'top',
                    inverse: false, // 是否是反向坐标轴.[ default: false ]
                    axisLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#153D7D64',
                            fontSize: 12,
                        },
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#153D7D64',
                            width: 1,
                            type: 'solid',
                        },
                    },
                    // 强制设置坐标轴分割间隔
                    // interval: 50,
                    // min: 0, // 最小值
                    // max: 200 // 最大值
                },
            ],
            // Y轴线配置
            yAxis: [
                {
                    // 左侧区域
                    gridIndex: 0, // y 轴所在的 grid 的索引，默认位于第一个 grid。[ default: 0 ]
                    type: 'category', // 轴线类型: 类目轴
                    // 类目轴中 boundaryGap 可以配置为 true 和 false。默认为 true，这时候刻度只是作为分隔线，标签和数据点都会在两个刻度之间的带(band)中间。
                    boundaryGap: true, // 坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样。
                    inverse: true, // 是否是反向坐标轴.[ default: false ]
                    position: 'right', // y轴的位置。'left' or 'right'
                    axisLine: {
                        show: false, // y轴线不显示
                    },
                    axisTick: {
                        show: false, // y轴线刻度不显示
                        lineStyle: {
                            // 刻度线样式
                            color: '#11356D',
                        },
                    },
                    axisLabel: {
                        show: false, // 刻度标签不显示
                    },
                    data: myData, // Y轴(这里是类目轴)的类目数据
                },
                {
                    gridIndex: 1, // 中间区域
                    type: 'category',
                    boundaryGap: true,
                    inverse: true,
                    position: 'left', // y轴的位置。'left' or 'right'
                    axisLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        show: true, // 显示中间部分的Y轴刻度标签(中间的文字)
                        textStyle: {
                            // 标签样式
                            color: '#D9D9D9',
                            fontSize: 16,
                        },
                    },
                    data: myData,
                },
                {
                    // 右侧区域
                    gridIndex: 2,
                    type: 'category',
                    boundaryGap: true,
                    inverse: true,
                    position: 'left',
                    axisLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                        lineStyle: {
                            // 刻度线样式
                            color: '#153D7D',
                        },
                    },
                    axisLabel: {
                        show: false,
                    },
                    data: myData,
                },
            ],
            series: [
                
                {
                    name: '流入', // 系列名称
                    type: 'bar',
                    barWidth: 15, // 柱子宽度
                    xAxisIndex: 0, // 对应在X轴的grid索引
                    yAxisIndex: 0, // 对应在Y轴的grid索引
                    stack: '1', // 相同就是堆叠
                    label: {
                        show: true,
                        position: 'left',
                        color: '#296FFB',
                        fontSize: 16,
                    },
                    itemStyle: {
                        // 柱条样式。
                        color: "rgba(41, 111, 251, 0.7)",
                    },
                    showBackground:true,
                    backgroundStyle:{
                        color: "rgba(18, 69, 139, 0.6)",
                    },
                    data: offLine, // 系列中的数据内容数组
                },
                {
                    name: '流出', // 系列名称
                    type: 'bar',
                    barWidth: 15, // 柱子宽度
                    xAxisIndex: 2, // 对应在X轴的grid索引
                    yAxisIndex: 2, // 对应在Y轴的grid索引
                    stack: '2', // 相同就是堆叠
                    label: {
                        show: true,
                        position: 'right',
                        color: '#F59A3F',
                        fontSize: 16,
                    },
                    itemStyle: {
                        // 柱条样式。
                        color: "rgba(245, 154, 63, 0.7)",
                    },
                    showBackground:true,
                    backgroundStyle:{
                        color:"rgba(18, 69, 139, 0.6)",
                    },
                    data: onLine, // 系列中的数据内容数组
                },
            ],
        }
        let myChart = echarts.init(dom)
        myChart.setOption(option)
      },
      barTwoEchart () {
        let dom = document.getElementById("c_1_l_3_bar");
        let yData = [324,236,233,194,230,321,422,433,313,523,102,311,423,192,334,259]
        let xData = ['3/01','3/02','3/03', '3/04', '3/05', '3/06', '3/07', '3/08', '3/09', '3/10', '3/11', '3/12', '3/13', '3/14', '3/15', '3/16']
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
          legend: {
              data: ['进京', '赴港'],
              align: 'right',
              right: 10,
              textStyle: {
                  color: "#fff"
              },
              itemWidth: 10,
              itemHeight: 10,
              itemGap: 35
          },
          grid: {
              top: '10%',
              left: '3%',
              right: '4%',
              bottom: '10%',
              containLabel: true
          },
          xAxis: [{
              type: 'category',
              data: xData,
              axisLine: {
                  show: true,
                  lineStyle: {
                      color: "#063374",
                      width: 1,
                      type: "solid"
                  }
              },
              axisTick: {
                  show: false,
              },
              axisLabel: {
                  show: true,
                  textStyle: {
                    color: '#D9D9D9',
                    fontSize: 16,
                  }
              },
          }],
          yAxis: [{
              type: 'value',
              axisLabel: {
                color: '#D9D9D9',
                fontSize: 16,
              },
              axisTick: {
                  show: false,
              },
              axisLine: {
                  show: false,
                  lineStyle: {
                      color: "#00c7ff",
                      width: 1,
                      type: "solid"
                  },
              },
              splitLine: {
                  lineStyle: {
                      color: "#063374",
                  }
              }
          }],
          dataZoom: [ //给x轴设置滚动条
              {
                  start: 0, //默认为0
                  end: 100 - 1500 / 31, //默认为100
                  type: 'slider',
                  show: true,
                  xAxisIndex: [0],
                  handleSize: 0, //滑动条的 左右2个滑动条的大小
                  height: 10, //组件高度
                  left: 50, //左边的距离
                  right: 40, //右边的距离
                  bottom: 0, //右边的距离
                  handleColor: '#ddd', //h滑动图标的颜色
                  handleStyle: {
                      borderColor: "#cacaca",
                      borderWidth: "1",
                      shadowBlur: 2,
                      background: "#ddd",
                      shadowColor: "#ddd",
                  },
                  fillerColor: '#808080',
                  backgroundColor: '#ddd', //两边未选中的滑动条区域的颜色
                  showDataShadow: false, //是否显示数据阴影 默认auto
                  showDetail: false, //即拖拽时候是否显示详细数值信息 默认true
                  handleIcon: 'M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z',
                  filterMode: 'filter',
              },
              //下面这个属性是里面拖到
              {
                  type: 'inside',
                  show: true,
                  xAxisIndex: [0],
                  start: 0, //默认为1
                  end: 100 - 1500 / 31, //默认为100
              },
          ],
          series: [{
              name: '进京',
              type: 'bar',
              data: yData,
              barWidth: 10, //柱子宽度
              barGap: 1, //柱子之间间距
              itemStyle: {
                  normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0,
                          color: 'rgba(0, 140, 255, 1)',
                        }, {
                            offset: 1,
                            color: 'rgba(0, 81, 147, 0.1)',
                      }]),
                  }
              }
          }, {
              name: '赴港',
              type: 'bar',
              data: yData,
              barWidth: 10,
              barGap: 1,
              itemStyle: {
                  normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0,
                          color: 'rgba(0, 128, 0, 1)', 
                      }, {
                          offset: 1,
                          color: 'rgba(0, 122, 85, 0.1)', 
                      }]),
                  }
              }
          }]
        }
        let myChart = echarts.init(dom)
        myChart.setOption(option)
      },
    }
  }
</script>
<style lang="scss" scoped>
.col_3_container {
  .col_3_w {
    width: 100%;
    height: 95%;
    padding: 0 10px;
    background: linear-gradient(to top, #022845 20%, #021E2F);
    display: flex;
    justify-content: space-between;
    .c_1_l_1_w, .c_1_l_2_w, .c_1_l_3_w {
      width: calc(33.33% - 10px);
      height: 100%;
    }
    .c_1_l_1_w {
      .c_1_l_total {
        width: 100%;
        height: 40px;
        margin: 10px 0px 26px 0px;
        font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
        font-weight: normal;
        font-size: 20px;
        color: #0091FF;
        line-height: 40px;
        text-align: center;
        font-style: normal;
        text-transform: none;
        background: url("@/assets/images/layout/Frame273190672x.png")no-repeat center;
        background-size: 100% 100%;
      }
      #c_1_l_pie {
        width: 100%;
        height: 300px;
        background: rgba(3,57,98,0.3);
      }
      #c_1_l_bar {
        width: 100%;
        height: 300px;
        margin-top: 20px;
        background: rgba(3,57,98,0.5);
      }
    }
    .c_1_l_2_w {
      #c_1_l_2_bar {
        width: 100%;
        height: 695px;
        background: rgba(3,57,98,0.3);
      }
    }
    .c_1_l_3_w {
      #c_1_l_3_bar {
        width: 100%;
        height: 270px;
        background: rgba(3,57,98,0.3);
      }
      #c_1_l_3_table {
        width: 100%;
        height: 345px;
        background: rgba(3,57,98,0.5);
        display: flex;
        justify-content: space-around;
        .table_left {
            width: 47%;
            height: 100%;
            .table_left_title {
                width: 100%;
                height: 40px;
                margin: 10px 0px 10px 0px;
                font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
                font-weight: normal;
                font-size: 18px;
                color: #52F9FF;
                line-height: 40px;
                text-align: center;
                font-style: normal;
                text-transform: none;
                background: url("@/assets/images/layout/Fra273190672xl.png")no-repeat center;
                background-size: 100% 100%;
            }
            .tableHeader {
                width: 100%;
                height: 40px;
                background: rgba(82,249,255,0.2);
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
                    flex: 1.3;  
                }
                p:nth-child(2) {
                    flex: 2;
                }
                p:nth-child(3) {
                    flex: 1.3; 
                }
            }
            .seamless_warp { 
              height: 240px;
              overflow: hidden;
            }
            .tableBody {
                width: 100%;
                height: 240px;
                overflow: hidden;
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
                        flex: 1.3; 
                    }
                    div:nth-child(2) {
                        flex: 2;
                    }
                    div:nth-child(3) {
                        flex: 1.3; 
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
        .table_right {
            width: 47%;
            .table_right_title {
                width: 100%;
                height: 40px;
                margin: 10px 0px 10px 0px;
                font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
                font-weight: normal;
                font-size: 18px;
                color: #FF9900;
                line-height: 40px;
                text-align: center;
                font-style: normal;
                text-transform: none;
                background: url("@/assets/images/layout/Fra273190672xr.png")no-repeat center;
                background-size: 100% 100%;
            }
            .tableHeader {
                width: 100%;
                height: 40px;
                background: rgba(255,153,0,0.3);
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
                    flex: 1.3; 
                }
                p:nth-child(2) {
                    flex: 2;
                }
                p:nth-child(3) {
                    flex: 1.3; 
                }
            }
            .seamless_warp { 
              height: 240px;
              overflow: hidden;
            }
            .tableBody {
                width: 100%;
                height: 240px;
                overflow: hidden;
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
                        flex: 1.3; 
                    }
                    div:nth-child(2) {
                        flex: 2;
                    }
                    div:nth-child(3) {
                        flex: 1.3; 
                    }
                }
                div:nth-child(even) {
                    background: rgba(2,40,73,0.2);
                }
                div:nth-child(odd) {
                    background: rgba(255,153,0,0.2);
                }
            }
        }
      }
    }
  }
}
</style>