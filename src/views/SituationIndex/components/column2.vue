<template>
  <PageColumnVue class="col_2_container" :width="33.33">
    <div id="map" ref="mapContainer" class="myMap"></div>
    <div class="topSearchContent">
      <div class="leftCon">
        <img src="../../../assets/images/layout/chengdeimg.png" alt="" class="chengdeimg">
        <el-select v-model="valueSelect" :popper-append-to-body="false" placeholder="请选择" class="col2select" style="width: 200px;">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <div class="police_count"> 
          <img src="../../../assets/images/layout/Group3138862x.png" alt="" class="img">
          <p class="text">今日警情</p>
          <p v-for="(item, index) in policeNum.split('')" :key="index" class="num">{{ item }}</p>
          <p class="text2">环比</p>
          <p class="roat">+4.5%</p>
          <img src="../../../assets/images/layout/arrow_yellow.png" alt="">
        </div>
      </div>
      <div v-for="(item, index) in topRightList" class="rightCon">
        <p class="text">{{item.name}}</p>
        <p class="value">{{item.value}}</p>
      </div>
    </div>
    <div class="footerContent"> 
      <div class="box">
        <div class="l_tableList">
          <SubBlockVue tabs="实时警情列表" :moreShow="false" class="c_1_c_f">
            <div class="tableHeader">
              <p class="text">序号</p>
              <p class="text">警情编号</p>
              <p class="text">报警时间</p>
              <p class="text">警情性质</p>
              <p class="text">级别</p>
              <p class="text">报警电话</p>
              <p class="text">管辖单位</p>
              <p class="text">接警员</p>
              <p class="text">阶段</p>
              <p class="text">案发地点</p>
            </div>
            <vue-seamless-scroll v-if="tableData.length > 0" :data="tableData" :class-option="classOption" v-cloak class="seamless_warp">
              <div class="tableBody">
                <div v-for="(item, index) in tableData" :key="index" v-cloak class="tableItem">
                  <div class="name">{{ index + 1 }}</div>
                  <div class="name code">{{ item.name }}</div>
                  <div class="name date">{{ item.date }}</div>
                  <div class="name type">{{ item.type }}</div>
                  <div class="name level">
                    <el-rate v-model="item.level" disabled />
                  </div>
                  <div class="name date">{{ item.tel }}</div>
                  <div class="name">{{ item.compony }}</div>
                  <div class="name">{{ item.Nm }}</div>
                  <div class="name stage">{{ item.stage }}</div>
                  <div class="name">{{ item.addres }}</div>
                </div> 
              </div>
            </vue-seamless-scroll>
          </SubBlockVue>
        </div>
        <div class="legend_box">
          <div class="title">图例</div>
          <div class="titleLegend">
            <img src="../../../assets/images/layout/1737128.png" alt="" class="img">
            <p class="text">警务网格</p>
            <img src="../../../assets/images/layout/Frame091@2x.png" alt="" class="img2">
            <img src="../../../assets/images/layout/1737128.png" alt="" class="img img1">
            <p class="text">路网</p>
            <img src="../../../assets/images/layout/Frame092@2x.png" alt="" class="img2">
          </div>
          <div class="legendItemBox">
            <div v-for="(item,index) in legendList" :key="index" class="legendItem">
              <img :src="item.img" alt="" class="img">
              <span class="label">{{ item.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageColumnVue>
</template>
    
<script>
  import PageColumnVue from "@/components/layout/PageColumn";
  import SubBlockVue from "@/components/layout/SubBlock";
  export default {
    name: "Column2Com",
    components: {
      PageColumnVue,
      SubBlockVue,
    },
    data() {
      return {
        map: null,
        valueSelect: '',
        policeNum: '66',
        zoom: 10,
        legendList: [
          {
            img: require('../../../assets/images/layout/198091.png'),
            label: '警员'
          }, {
            img: require('../../../assets/images/layout/198092.png'),
            label: '350M'
          }, {
            img: require('../../../assets/images/layout/198093.png'),
            label: '视频监控'
          }, {
            img: require('../../../assets/images/layout/198094.png'),
            label: '警务通'
          }, {
            img: require('../../../assets/images/layout/198095.png'),
            label: '警车'
          }, {
            img: require('../../../assets/images/layout/198096.png'),
            label: '执法记录仪'
          }, {
            img: require('../../../assets/images/layout/198097.png'),
            label: '地标点'
          }, {
            img: require('../../../assets/images/layout/198098.png'),
            label: '兴趣点'
          }
        ],
        options: [
          {
            value: '双桥区',
            label: '双桥区'
          }, {
            value: '滦平县',
            label: '滦平县'
          }, {
            value: '兴隆县',
            label: '兴隆县'
          }
        ],
        tableData: [
          { name: '4408022018111214000010221', type: '寻衅滋事', date: "2024-08-22 08:30:45", compony: "元宝山派出所", level: 2, tel: '010-323454', Nm: '张三', stage: '已接警,未出警', addres: '承德市元宝山大街25号,未出警'},
          { name: '4408022018111214000010221', type: '寻衅滋事', date: "2024-08-22 08:30:45", compony: "元宝山派出所", level: 2, tel: '010-323454', Nm: '张三', stage: '已接警,未出警', addres: '承德市元宝山大街25号,未出警'},
          { name: '4408022018111214000010221', type: '寻衅滋事', date: "2024-08-22 08:30:45", compony: "元宝山派出所", level: 2, tel: '010-323454', Nm: '张三', stage: '已接警,未出警', addres: '承德市元宝山大街25号,未出警'},
          { name: '4408022018111214000010221', type: '寻衅滋事', date: "2024-08-22 08:30:45", compony: "元宝山派出所", level: 2, tel: '010-323454', Nm: '张三', stage: '已接警,未出警', addres: '承德市元宝山大街25号,未出警'},
          { name: '4408022018111214000010221', type: '寻衅滋事', date: "2024-08-22 08:30:45", compony: "元宝山派出所", level: 2, tel: '010-323454', Nm: '张三', stage: '已接警,未出警', addres: '承德市元宝山大街25号,未出警'},
          { name: '4408022018111214000010221', type: '寻衅滋事', date: "2024-08-22 08:30:45", compony: "元宝山派出所", level: 2, tel: '010-323454', Nm: '张三', stage: '已接警,未出警', addres: '承德市元宝山大街25号,未出警'},
          { name: '4408022018111214000010221', type: '寻衅滋事', date: "2024-08-22 08:30:45", compony: "元宝山派出所", level: 2, tel: '010-323454', Nm: '张三', stage: '已接警,未出警', addres: '承德市元宝山大街25号,未出警'},
          { name: '4408022018111214000010221', type: '寻衅滋事', date: "2024-08-22 08:30:45", compony: "元宝山派出所", level: 2, tel: '010-323454', Nm: '张三', stage: '已接警,未出警', addres: '承德市元宝山大街25号,未出警'},
          { name: '4408022018111214000010221', type: '寻衅滋事', date: "2024-08-22 08:30:45", compony: "元宝山派出所", level: 2, tel: '010-323454', Nm: '张三', stage: '已接警,未出警', addres: '承德市元宝山大街25号,未出警'},
          { name: '4408022018111214000010221', type: '寻衅滋事', date: "2024-08-22 08:30:45", compony: "元宝山派出所", level: 2, tel: '010-323454', Nm: '张三', stage: '已接警,未出警', addres: '承德市元宝山大街25号,未出警'},
        ],
        currCheckdId: '',
        isCheckdNode: false,
        topRightList: [
          { name: '刑事警情', value: 7 },
          { name: '治安警情', value: 8 },
          { name: '交通警情', value: 6 },
          { name: '群体事件', value: 5 },
          { name: '灾害事故', value: 5 },
          { name: '举报线索', value: 5 },
          { name: '119警情', value: 2 },
          { name: '社会联动', value: 4 },
          { name: '监督投诉', value: 16 },
          { name: '社会求助', value: 4 },
        ]
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
      // this.initMap();
      // this.bindWheelEvent();
    },
    methods: {
      getCurrentNode (nodeObj, nodeState) {
        this.currCheckdId = nodeObj.id
        // 判断当前状态是选中还是取消选中
        let nodes = this.$refs.tree.getCheckedNodes()
        if (nodes.length > 0) { 
          this.isCheckdNode = true
        } else {
          this.isCheckdNode = false
        }
      }, 
      initMap() { 
        this.map = new BMapGL.Map('map'); // 创建地图实例  
        const point = new BMapGL.Point(117.969971,40.959381); // 创建点坐标
        this.map.centerAndZoom(point, this.zoom); // 初始化地图，设置中心点坐标和缩放级别
        this.map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
        this.map.setMapStyleV2({
          styleJson: [
            {
            'featureType': 'land',
            'elementType': 'geometry',
            'stylers': {
              'color': '#053448ff'
            }
          }, {
            'featureType': 'background',
            'elementType': 'geometry',
            'stylers': {
              'color': '#053448ff'
            }
          }, {
            'featureType': 'road',
            'elementType': 'geometry.fill',
            'stylers': {
              'color': '#13bab3ff'
            }
          }, {
            'featureType': 'road',
            'elementType': 'geometry.stroke',
            'stylers': {
              'color': '#13bab3ff'
            }
          }
          ]
        })
      },
      bindWheelEvent() {
        const mapContainer = this.$refs.mapContainer
        mapContainer.addEventListener('wheel', (event) => {
          event.preventDefault();
          // 通过事件对象的deltaY判断滚轮方向，实现缩放
          if (event.deltaY < 0) {
            // 向上滚动，放大地图
            this.zoom += 1;
          } else {
            // 向下滚动，缩小地图
            this.zoom -= 1;
          }
          this.map.setZoom(this.zoom); // 设置地图的缩放级别
        });
      },
    },
  }
</script>
    
<style lang="scss" scoped>
  .col_2_container {
    :deep .anchorBL{display:none;}
    display: flex;
    flex-wrap: wrap;
    position: relative;
    .myMap {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    .topSearchContent {
      width: 100%;
      height: 54px;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      display: flex;
      align-items: center;
      margin-top: 5px;
      .leftCon {
        width: 596px;
        height: 54px;
        display: flex;
        align-items: center;
        background: url("@/assets/images/layout/Rectangle3690@2x.png")no-repeat;
        background-size: 100% 100%;
        margin-left: 8px;
        .chengdeimg {
          width: 100px;
          height: 40px;
          margin-left: 8px;
        } 
        .col2select {
          width: 93px;
          height: 40px;
          margin-left: 8px;
          border-radius: 2px 2px 2px 2px;
          border: none;
          :deep .el-input {
            width: 93px;
          }
          :deep .el-input__inner {
            width: 93px;
            background: inherit;
            border: 2px solid #0e53ad;
            background: #02306C;
            font-size: 18px;
            color: #FFFFFF;
            height: 40px;
          }
          :deep .el-select-dropdown {
            width: 93px;
            background: #02306C;
            font-size: 20px;
            color: #FFFFFF;
          }
        }
        .police_count {
          padding: 0 8px;
          height: 40px;
          display: flex;
          align-items: center;
          margin-right: 8px;
          margin-left: 12px;
          padding-right: 19px;
          border-radius: 5px;
          background: url("@/assets/images/layout/Frame3213154381.png")no-repeat center;
          background-size: 100% 100%;
          .img {
            width: 20px;
            height: 22px;
            margin-left: 8px;
          }
          .text {
            width: 110px;
            height: 40px;
            font-family: PangMenZhengDao, PangMenZhengDao;
            font-weight: normal;
            font-size: 20px;
            line-height: 40px;
            font-style: normal;
            text-transform: none;
            text-stroke: 1px rgba(171,214,255,0.5);
            text-align: center;
            background: linear-gradient(180deg, #FFFFFF 0%, #f8d0aa 48%, #e97e19 100%);
            -webkit-text-stroke: 1px rgba(171,214,255,0.5);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .num {
            width: 28px;
            height: 34px;
            line-height: 34px;
            text-align: center;
            display: inline-block;
            color: #FFFFFF;  
            font-size: 22px;
            font-weight: 800;
            background: url("@/assets/images/layout/Frame13213@2x.png")no-repeat center;
            background-size: 100% 100%;
            margin-right: 5px;
          }
          .text2 {
            width: 36px;
            height: 24px;
            font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
            font-weight: normal;
            font-size: 18px;
            color: #FFFFFF;
            line-height: 24px;
            text-align: left;
            font-style: normal;
            text-transform: none;
            background: linear-gradient(180deg, #FFFFFF 0%,  #fd9a06 70%);
            -webkit-text-stroke: 1px rgba(171,214,255,0.5);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-left: 22px;
          }
          .roat {
            width: 53px;
            height: 24px;
            font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
            font-weight: normal;
            font-size: 18px;
            color: #FFFFFF;
            line-height: 24px;
            text-align: left;
            font-style: normal;
            text-transform: none;
            margin: 0px 5px;
          }
        }
      }
      .rightCon {
        width: 115px;
        height: 50px;
        margin-left: 9px; 
        .text {
          width: 86px;
          height: 16px;
          font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
          font-weight: normal;
          font-size: 16px;
          color: #FFFFFF;
          line-height: 24px;
          text-align: left;
          font-style: normal;
          text-transform: none;
          margin-left: 10px;
          margin-top: 7px;
        }
        .value {
          width: 25px;
          height: 16px;
          font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
          font-weight: normal;
          font-size: 16px;
          line-height: 24px;
          text-align: left;
          font-style: normal;
          text-transform: none;
          margin-left: 10px;
          margin-top: 3px;
        }
      } 
      .rightCon:nth-child(2) {
        background: url("@/assets/images/layout/Group3164382x1.png")no-repeat;
        background-size: 100% 100%;
        .value {
          color: #00EAFF;
        }
      }
      .rightCon:nth-child(3) {
        background: url("@/assets/images/layout/Group3164382x2.png")no-repeat;
        background-size: 100% 100%;
        .value {
          color: #00AAFF;
        }
      }
      .rightCon:nth-child(4) {
        background: url("@/assets/images/layout/Group3164382x3.png")no-repeat;
        background-size: 100% 100%;
        .value {
          color: #F0F50F;
        }
      }
      .rightCon:nth-child(5) {
        background: url("@/assets/images/layout/Group3164382x4.png")no-repeat;
        background-size: 100% 100%;
        .value {
          color: #00EAFF;
        }
      }
      .rightCon:nth-child(6) {
        background: url("@/assets/images/layout/Group3164382x5.png")no-repeat;
        background-size: 100% 100%;
        .value {
          color: #FF9900;
        }
      }
      .rightCon:nth-child(7) {
        background: url("@/assets/images/layout/Group3164382x6.png")no-repeat;
        background-size: 100% 100%;
        .value {
          color: #00BB03;
        }
      }
      .rightCon:nth-child(8) {
        background: url("@/assets/images/layout/Group3164382x7.png")no-repeat;
        background-size: 100% 100%;
        .value {
          color: #00EAFF;
        }
      }
      .rightCon:nth-child(9) {
        background: url("@/assets/images/layout/Group3164382x8.png")no-repeat;
        background-size: 100% 100%;
        .value {
          color: #00AAFF;
        }
      }
      .rightCon:nth-child(10) {
        background: url("@/assets/images/layout/Group3164382x9.png")no-repeat;
        background-size: 100% 100%;
        .value {
          color: #9D67FE;
        }
      }
      .rightCon:nth-child(11) {
        background: url("@/assets/images/layout/Group3164382x10.png")no-repeat;
        background-size: 100% 100%;
        .value {
          color: #00EAFF;
        }
      }
    }
    .footerContent {
      width: 100%;
      height: 32%;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 2;
      .box {
        width: 100%;
        height: 100%;
        display: flex;
      }
      .legend_box {
        width: 425px;
        height: 100%;
        background: url("@/assets/images/layout/legend2Bg.png")no-repeat;
        background-size: 100% 100%;
        .title {
          width: 48px;
          height: 28px;
          font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
          font-weight: normal;
          font-size: 20px;
          color: #FFFFFF;
          line-height: 23px;
          letter-spacing: 2px;
          text-align: left;
          font-style: normal;
          text-transform: none;
          margin: 10px 14px;
        }
        .titleLegend {
          display: flex;
          align-items: center;
          .img {
            width: 14px;
            height: 14px;
            display: inline-block;
            margin-left: 14px;
          }
          .img1 {
            margin-left: 88px;
          }
          .img2 {
            width: 26px;
            height: 26px;
            display: inline-block;
            margin-left: 15px;
          }
          .text {
            display: inline-block;
            height: 24px;
            font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
            font-weight: normal;
            font-size: 16px;
            color: #FFFFFF;
            line-height: 24px;
            text-align: left;
            font-style: normal;
            text-transform: none;
            margin-left: 5px;
          }
        }
        .legendItemBox {
          display: flex;
          flex-wrap: wrap;
          .legendItem {
            width: 33%;
            margin-top: 15px;
            display: flex;
            align-items: center;
            .img {
              width: 37px;
              height: 40px;
              display: inline-block;
            }
            .label {
              display: inline-block;
              width: 84px;
              font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
              font-weight: normal;
              font-size: 16px;
              color: #FFFFFF;
              text-align: left;
              font-style: normal;
              text-transform: none;
              margin-left: 5px;
            }
          }
        }
      }
      .l_tableList {
        width: 85%;
        height: 100%;
        background: rgba(25,32,47,0.9);
        .c_1_c_f {
          width: 100%;
          height: 100%;
          overflow: hidden;
          flex-shrink: 0;
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
              flex: 2;
            } 
            p:nth-child(4) {
              text-align: center;
            }
            /* 接警员 */
            p:nth-child(8) {
              flex: 0.5;
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
              .code {
                flex: 2;
              }
              /* 警情性质 */
              .type {
                height: 36px;
                line-height: 36px;
                color: #00AAFF;
                text-align: center;
                background: url("@/assets/images/layout/Frame42@2x.png")no-repeat center;
                background-size: 80% 100%;
              }  
              /* 接警员 */
              div:nth-child(8) {
                flex: 0.5;
              } 
              .stage {
                color: #00CC03;
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