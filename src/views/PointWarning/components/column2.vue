<template>
  <PageColumnVue class="col_2_container" :width="33.33">
    <div id="map" ref="mapContainer" class="myMap"></div>
    <div class="topSearchContent">
      <div v-for="(item, index) in topList" class="police_count">
        <div class="text">{{ item.name }}</div>
        <p v-for="(it, index) in item.value.split('')" :key="index" class="num">{{ it }}</p> 
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
        policeNum: '131000',
        zoom: 10, 
        currCheckdId: '',
        isCheckdNode: false,
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
      position: absolute;
      top: 1%;
      left: 0%;
      z-index: 2;
      display: flex;
      align-items: center;
      .police_count {
        width: 445px;
        height: 60px;
        display: flex;
        align-items: center;
        background: url("@/assets/images/layout/3450012x.png")no-repeat center;
        background-size: 100% 100%;
        margin-left: 2px;
        .text {
          font-family: PangMenZhengDao, PangMenZhengDao;
          font-weight: normal;
          font-size: 18px;
          font-style: normal;
          text-transform: none;
          color: #00D1FF;
          margin-left: 15px;
          margin-right: 56px;
        }
        .num {
          width: 30px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          display: inline-block;
          color: #FFFFFF;  
          font-size: 22px;
          font-weight: 800;
          background: url("@/assets/images/layout/23e1267.png")no-repeat center;
          background-size: 100% 100%;
          margin-left: 5px;
        } 
      } 
    }
  }
</style>