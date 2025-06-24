<template>
    <PageColumnVue class="col_3_container" :width="33.33">
      <div id="map" ref="mapContainer" class="myMap"></div>
      <div class="topSearchContent">
        <div class="topSearchBtn">
          <p v-for="(item, index) in btnList" @click="handelBtn(index)" :class="{'dateTypeBtnIdx': dateTypeBtnIdx == index}" :key="index" class="btnClass">{{ item }}</p> 
        </div>
        <div class="police_count"> 
          <img src="../../../assets/images/layout/Group3138862x.png" alt="" class="img">
          <p class="text">今日警情</p>
          <p v-for="(item, index) in policeNum.split('')" :key="index" class="num">{{ item }}</p>
          <p class="text2">环比</p>
          <p class="roat">+4.5%</p>
          <img src="../../../assets/images/layout/arrow_yellow.png" alt="">
        </div>
      </div>
      <div class="footerContent">
        <div v-for="(item, index) in c_1_b_6_1_w_list" :key="index" class="c_1_b_6_1_m">
            <p class="name">{{item.name}}</p>
            <p class="num">{{item.num}} 名</p>
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
          dateTypeBtnIdx: 0,
          map: null,
          policeNum: '66',
          btnList: ["今日","近7日","近30日"],
          zoom: 10, 
          currCheckdId: '',
          isCheckdNode: false,
          c_1_b_6_1_w_list: [
            { name: '前科', num: 34 },
            { name: '在逃', num: 6 },
            { name: '涉毒', num: 3 },
            { name: '上访', num: 12 },
            { name: '涉恐', num: 2 },
            { name: '涉稳', num: 43 },
            { name: '精神病', num: 23 },
            { name: '其他', num: 8 },
            { name: '涉恐', num: 2 },
            { name: '涉稳', num: 43 },
            { name: '精神病', num: 23 },
            { name: '其他', num: 8 },
            { name: '涉恐', num: 2 },
            { name: '涉稳', num: 43 },
            { name: '涉恐', num: 2 },
            { name: '涉稳', num: 43 },
            { name: '精神病', num: 23 },
            { name: '其他', num: 8 },
            { name: '涉恐', num: 2 },
            { name: '涉稳', num: 43 },
          ],  
          topList: [
            { name: '全市布控人员总数', value: '131000' },
            { name: '布控人员今日预警', value: '131000' },
            { name: '全市布控车辆总数', value: '131000' },
            { name: '布控车辆今日预警', value: '131000' },
          ]
        }
      },
      computed: {
      },
      mounted() {
        // this.initMap();
        // this.bindWheelEvent();
      },
      methods: {
        handelBtn (index) {
          this.dateTypeBtnIdx = index
        },
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
          const mapContainer = this.$refs.mapContainer;
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
          })
        },
      },
    }
  </script>
      
  <style lang="scss" scoped>
    .col_3_container {
      border: 1px solid blue;
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
        margin-top: 5px;
        width: 696px;
        height: 54px;
        display: flex;
        align-items: center;
        background: url("@/assets/images/layout/Rectangle6901x.png")no-repeat;
        background-size: 100% 100%;
        margin-left: 8px;
        .topSearchBtn {
          display: flex;
          margin: 8px 0;
          .btnClass {
            height: 32px;
            font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
            font-weight: normal;
            font-size: 16px;
            color: #00AAFF;
            line-height: 32px;
            text-align: left;
            font-style: normal;
            text-transform: none;
            padding: 0px 22px;
            background: radial-gradient( 0% 20% at 56% 57%, rgba(0,128,255,0.1) 0%, rgba(0,128,255,0.2) 100%), rgba(0,170,255,0.2);
            border-radius: 2px 2px 2px 2px;
            border: 2px solid;
            border-image: linear-gradient(360deg, rgba(0, 170, 255, 0.6), rgba(0, 170, 255, 0)) 3 3;
            margin-left: 14px;
            cursor: pointer;
            z-index: 9;
          }
          .dateTypeBtnIdx {
            color: #DEF0FF;
            background: #00AAFF;
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
      .footerContent {
        width: 100%;
        height: 140px;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 2;
        background: url("@/assets/images/layout/Rectangl24262x.png")no-repeat center;
        background-size: 100% 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
        padding: 0 16px;
            .c_1_b_6_1_m {
              width: 164px;
              height: 60px;
              margin-top: 5px;
              font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
              font-weight: normal;
              font-size: 16px;
              color: #00A3FF;
              text-align: left;
              font-style: normal;
              text-transform: none;
              display: flex;
              flex-direction: column;
              align-items: start;
              justify-content: center;
              padding-left: 20px;
              .name {
                color: #FFFFFF;
              }
            }
            .c_1_b_6_1_m:nth-child(1), .c_1_b_6_1_m:nth-child(2), .c_1_b_6_1_m:nth-child(3), .c_1_b_6_1_m:nth-child(4), .c_1_b_6_1_m:nth-child(5), 
            .c_1_b_6_1_m:nth-child(6), .c_1_b_6_1_m:nth-child(7), .c_1_b_6_1_m:nth-child(8), .c_1_b_6_1_m:nth-child(9), .c_1_b_6_1_m:nth-child(10) {
              color: #00AAFF;
            }
            .c_1_b_6_1_m:nth-child(11), .c_1_b_6_1_m:nth-child(12), .c_1_b_6_1_m:nth-child(13), .c_1_b_6_1_m:nth-child(14), .c_1_b_6_1_m:nth-child(15), 
            .c_1_b_6_1_m:nth-child(16), .c_1_b_6_1_m:nth-child(17), .c_1_b_6_1_m:nth-child(18), .c_1_b_6_1_m:nth-child(19), .c_1_b_6_1_m:nth-child(110) {
              color: #00EAFF;
            }
            .c_1_b_6_1_m:nth-child(1) {
                background: url("@/assets/images/layout/Group392x1.png")no-repeat center;
                background-size: 100% 100%;
            }
            .c_1_b_6_1_m:nth-child(2) {
                background: url("@/assets/images/layout/Group392x2.png")no-repeat center;
                background-size: 100% 100%;
                color: #00EAFF;
            }
            .c_1_b_6_1_m:nth-child(3) {
                background: url("@/assets/images/layout/Group392x3.png")no-repeat center;
                background-size: 100% 100%;
                color: #9254FF;
            }
            .c_1_b_6_1_m:nth-child(4) {
                background: url("@/assets/images/layout/Group392x4.png")no-repeat center;
                background-size: 100% 100%;
                color: #00CC03;
            }
            .c_1_b_6_1_m:nth-child(5) {
                background: url("@/assets/images/layout/Group392x5.png")no-repeat center;
                background-size: 100% 100%;
                color: #00A3FF;
            }
            .c_1_b_6_1_m:nth-child(6) {
                background: url("@/assets/images/layout/Group392x6.png")no-repeat center;
                background-size: 100% 100%;
                color: #F7BA1E;
            }
            .c_1_b_6_1_m:nth-child(7) {
                background: url("@/assets/images/layout/Group392x7.png")no-repeat center;
                background-size: 100% 100%;
                color: #00CC03;
            }
            .c_1_b_6_1_m:nth-child(8) {
                background: url("@/assets/images/layout/Group392x8.png")no-repeat center;
                background-size: 100% 100%;
                color: #9254FF;
            }
            .c_1_b_6_1_m:nth-child(9) {
                background: url("@/assets/images/layout/Group392x9.png")no-repeat center;
                background-size: 100% 100%;
                color: #F7BA1E;
            }
            .c_1_b_6_1_m:nth-child(10) {
                background: url("@/assets/images/layout/Group392x10.png")no-repeat center;
                background-size: 100% 100%;
                color: #00EAFF;
            }
            .c_1_b_6_1_m:nth-child(11) {
                background: url("@/assets/images/layout/Group392x11.png")no-repeat center;
                background-size: 100% 100%;
                color: #00A3FF;
            }
            .c_1_b_6_1_m:nth-child(12) {
                background: url("@/assets/images/layout/Group392x12.png")no-repeat center;
                background-size: 100% 100%;
                color: #9254FF;
            }
            .c_1_b_6_1_m:nth-child(13) {
                background: url("@/assets/images/layout/Group392x13.png")no-repeat center;
                background-size: 100% 100%;
                color: #00A3FF;
            }
            .c_1_b_6_1_m:nth-child(14) {
                background: url("@/assets/images/layout/Group392x14.png")no-repeat center;
                background-size: 100% 100%;
                color: #00EAFF;
            }
            .c_1_b_6_1_m:nth-child(15) {
                background: url("@/assets/images/layout/Group392x15.png")no-repeat center;
                background-size: 100% 100%;
                color: #00EAFF;
            }
            .c_1_b_6_1_m:nth-child(16) {
                background: url("@/assets/images/layout/Group392x16.png")no-repeat center;
                background-size: 100% 100%;
                color: #00EAFF;
            }
            .c_1_b_6_1_m:nth-child(17) {
                background: url("@/assets/images/layout/Group392x17.png")no-repeat center;
                background-size: 100% 100%;
                color: #00EAFF;
            }
            .c_1_b_6_1_m:nth-child(18) {
                background: url("@/assets/images/layout/Group392x18.png")no-repeat center;
                background-size: 100% 100%;
                color: #00EAFF;
            }
            .c_1_b_6_1_m:nth-child(19) {
                background: url("@/assets/images/layout/Group392x19.png")no-repeat center;
                background-size: 100% 100%;
                color: #00EAFF;
            }
            .c_1_b_6_1_m:nth-child(20) {
                background: url("@/assets/images/layout/Group392x20.png")no-repeat center;
                background-size: 100% 100%;
                color: #00EAFF;
            }
      }
    }
  </style>