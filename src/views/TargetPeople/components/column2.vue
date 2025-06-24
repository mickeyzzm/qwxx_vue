<template>
  <PageColumnVue class="col_2_container" :width="33.33">
    <div id="map" ref="mapContainer" class="myMap"></div>
    <div class="topSearchContent">
      <div class="police_count">
        <div class="text">
          <p>今日全市</p>
          <p>目标人员</p>
        </div>
        <p v-for="(item, index) in policeNum.split('')" :key="index" class="num">{{ item }}</p> 
      </div>
      <div v-for="(item, index) in topRightList" class="rightCon">
        <p class="text">{{item.name}}</p>
        <p class="value">{{item.value}}</p>
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
        policeNum: '1310',
        zoom: 10, 
        currCheckdId: '',
        isCheckdNode: false,
        topRightList: [
          { name: '前科', value: 167 },
          { name: '在逃', value: 118 },
          { name: '上访', value: 266 },
          { name: '涉恐', value: 155 },
          { name: '涉稳', value: 139 },
          { name: '精神病', value: 128 },
          { name: '其他', value: 6 },
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
  .col_2_container {
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
      width: 100%;
      height: 54px;
      position: absolute;
      top: 6%;
      left: 2%;
      z-index: 2;
      display: flex;
      align-items: center;
      .police_count {
        width: 460px;
        height: 108px;
        display: flex;
        align-items: center;
        background: url("@/assets/images/layout/4233332x.png")no-repeat center;
        background-size: 100% 100%;
        .text {
          width: 120px;
          font-family: PangMenZhengDao, PangMenZhengDao;
          font-weight: normal;
          font-size: 26px;
          font-style: normal;
          text-transform: none;
          color: #00D1FF;
          margin-left: 35px;
          margin-right: 56px;
        }
        .num {
          width: 42px;
          height: 47px;
          line-height: 47px;
          text-align: center;
          display: inline-block;
          color: #FFFFFF;  
          font-size: 30px;
          font-weight: 800;
          background: url("@/assets/images/layout/23e1267.png")no-repeat center;
          background-size: 100% 100%;
          margin-left: 10px;
        } 
      }
      .rightCon {
        width: 153px;
        height: 108px;
        margin-left: 24px; 
        background: url("@/assets/images/layout/2323422x.png")no-repeat;
        background-size: 100% 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .text {
          font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
          font-weight: normal;
          font-size: 26px;
          color: #FFFFFF;
          line-height: 24px;
          font-style: normal;
          text-transform: none;
          margin-left: 10px;
        }
        .value {
          font-family: AlibabaPuHuiTi-2-55-Regular;
          font-weight: 600;
          font-size: 30px;
          color: #00D1FF;
          line-height: 24px;
          font-style: normal;
          text-transform: none;
          margin-top: 10px;
        }
      } 
    }
  }
</style>