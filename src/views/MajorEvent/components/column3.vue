<template>
  <PageColumnVue class="col_3_container" :width="33.33">
    <div id="map" ref="mapContainer" class="myMap"></div>
    <div class="topSearchContent">
      <img src="../../../assets/images/layout/chengdeimg.png" alt="" class="chengdeimg">
      <el-select v-model="valueSelect" :popper-append-to-body="false" placeholder="请选择" class="col2select" style="width: 200px;">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select> 
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
        valueSelect: '',
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
        map: null,
        zoom: 10, 
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
  .col_3_container {
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
    .topSearchContent {
      width: 100%;
      height: 54px;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2; 
      margin-top: 5px; 
      display: flex;
      align-items: center;
      background: url("@/assets/images/layout/Rectangle902x.png")no-repeat;
      background-size: 100% 100%;
      .chengdeimg {
        width: 100px;
        height: 40px;
        margin-left: 8px;
      } 
      .col2select {
        width: 193px;
        height: 40px;
        margin-left: 8px;
        border-radius: 2px 2px 2px 2px;
        border: none;
        :deep .el-input {
          width: 193px;
        }
        :deep .el-input__inner {
          width: 193px;
          background: inherit;
          border: 2px solid #0e53ad;
          background: #02306C;
          font-size: 18px;
          color: #FFFFFF;
          height: 40px;
        }
        :deep .el-select-dropdown {
          width: 193px;
          background: #02306C;
          font-size: 20px;
          color: #FFFFFF;
        }
      } 
    }
  }
</style>