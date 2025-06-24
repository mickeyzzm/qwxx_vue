<template>
  <PageColumnVue class="col_2_container" :width="33.33">
    <div id="map" ref="mapContainer" class="myMap"></div> 
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
        zoom: 10,
        legendList: [
          {
            img: require('../../../assets/images/layout/198091.png'),
            label: '警员'
          }, {
            img: require('../../../assets/images/layout/198092.png'),
            label: '对讲机'
          }, {
            img: require('../../../assets/images/layout/198093.png'),
            label: '摄像头'
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
            label: 'POI'
          }
        ],
        currCheckdId: '',
        isCheckdNode: false,
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
        });
      },
    },
  };
</script>
    
<style lang="scss" scoped>
  .col_2_container {
    border: 1px solid blue;
    position: relative;
    .myMap {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1;
    } 
    .legend_box {
        height: 32%;
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 2; 
        width: 425px;
        height: 32%;
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
  }
</style>