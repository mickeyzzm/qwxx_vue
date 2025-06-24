<template>
  <PageColumnVue class="col_2_container" :width="33.33">
    <div id="allmap" ref="mapContainer" class="myMap"></div>
    <div class="topSearchContent">
      <img
        src="../../../assets/images/layout/WechatIMG2851@2x.png"
        alt=""
        class="img"
      />
      <p class="text">行</p>
      <el-select
        v-model="valueSelect"
        :popper-append-to-body="false"
        placeholder="请选择"
        class="col2select"
        style="width: 200px"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-input
        v-model="valueSearch"
        type="text"
        placeholder="请输入关键词搜索"
        class="valueSearch"
      />
    </div>
    <div class="leftServiceDuties">
      <div v-if="isshowDutiesCon" class="serviceDutiesCon">
        <div class="header">勤务要素</div>
        <el-tree
          ref="tree"
          :data="treedata"
          :props="defaultProps"
          :default-expand-all="true"
          show-checkbox
          node-key="id"
          @check="getCurrentNode"
          class="treestyle"
        >
          <span class="span-ellipsis" slot-scope="{ node, data }">
              <span :title="node.label">{{ node.label }}</span>
          </span>
        </el-tree>
      </div>
      <!-- 收缩箭头 -->
      <div class="caretBox">
        <i
          v-if="isShowDuties"
          @click="(isshowDutiesCon = false), (isShowDuties = false)"
          class="el-icon-caret-left"
        ></i>
        <i
          v-if="!isShowDuties"
          @click="(isshowDutiesCon = true), (isShowDuties = true)"
          class="el-icon-caret-right"
        ></i>
      </div>
      <div v-if="isshowDutiesCon" class="gridInfo">
        <p class="text">网格信息</p>
        <p class="text">网格数量<span>{{gridNum}}</span></p>
        <p class="text">网格类型<span>{{gridTypeName}}</span></p>
      </div>
    </div>
    <div class="rightPoliceWork">
      <!-- 收缩箭头 -->
      <div class="caretBox">
        <i
          v-if="isShowCaret"
          @click="(isshowPoliceWorkCon = false), (isShowCaret = false)"
          class="el-icon-caret-right"
        ></i>
        <i
          v-if="!isShowCaret"
          @click="(isshowPoliceWorkCon = true), (isShowCaret = true)"
          class="el-icon-caret-left"
        ></i>
      </div>
      <div v-if="isshowPoliceWorkCon" class="policeWorkCon">
        <div class="header">警务资源</div>
        <div class="policeStrengthItem">
          <div class="text">
            <img
              src="../../../assets/images/layout/rightPoliceWork1.png"
              alt=""
            />
            可用警力
          </div>
          <div class="num">{{kyjl}}<span>人</span></div>
        </div>
        <div class="policeStrengthItem">
          <div class="text">
            <img
              src="../../../assets/images/layout/rightPoliceWork2.png"
              alt=""
            />
            值班警力
          </div>
          <div class="num">{{zbjl}}<span>人</span></div>
        </div>
        <div class="policeStrengthItem">
          <div class="text">
            <img
              src="../../../assets/images/layout/rightPoliceWork3.png"
              alt=""
            />
            任务警力
          </div>
          <div class="num">{{rwjl}}<span>人</span></div>
        </div>
        <div class="header">在线装备 <i class="el-icon-arrow-right"></i></div>
        <div class="policeStrengthItem">
          <div class="text">
            <img
              src="../../../assets/images/layout/rightPoliceWork4.png"
              alt=""
            />
            PDT
          </div>
          <div class="num">{{pdt}}<span>部</span></div>
        </div>
       
        <div class="policeStrengthItem">
          <div class="text">
            <img
              src="../../../assets/images/layout/rightPoliceWork6.png"
              alt=""
            />
            5G融合终端
          </div>
          <div class="num">{{zfjly}}<span>台</span></div>
        </div>
        <div class="policeStrengthItem" @click="showPTU" style="cursor:pointer">
          <div class="text">
            <img
              src="../../../assets/images/layout/rightPoliceWork7.png"
              alt=""
            />
            PTU作战单元
          </div>
          <div class="num">{{ptuList.length}}<span>支</span></div>
        </div>
         <div class="policeStrengthItem">
          <div class="text">
            <img
              src="../../../assets/images/layout/rightPoliceWork5.png"
              alt=""
            />
            移动警务终端
          </div>
          <div class="num">{{ydjwzd}}<span>台</span></div>
        </div>
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
              <!-- <p class="text">接警员</p> -->
              <p class="text">进程</p>
              <p class="text">案发地点</p>
            </div>
            <vue-seamless-scroll
              v-if="tableData.length > 0"
              :data="tableData"
              :class-option="classOption"
              v-cloak
              class="seamless_warp"
            >
              <div class="tableBody">
                <div
                  v-for="(item, index) in tableData"
                  :key="index"
                  v-cloak
                  class="tableItem"
                  @click="showJq(index)"
                >
                  <div class="name">{{ index + 1 }}</div>
                  <div class="name code">{{ item.name }}</div>
                  <div class="name date">{{ item.date }}</div>
                  <div class="name type">{{ item.type }}</div>
                  <div class="name level">
                    <el-rate v-model="item.level" disabled />
                  </div>
                  <div class="name date">{{ item.tel }}</div>
                  <div class="name">{{ item.compony }}</div>
                  <!-- <div class="name">{{ item.Nm }}</div> -->
                  <div class="name stage">{{ item.stage }}</div>
                  <div class="name">{{ item.addres }}</div>
                </div>
              </div>
            </vue-seamless-scroll>
          </SubBlockVue>
        </div>
        <div class="function">
          <div class="addFun"></div>
          <div class="funItem" @click="handelFunction('功能模块')">功能模块</div>
          <div class="funItem" @click="handelFunction('查询系统')">查询系统</div>
          <div class="funItem" @click="handelFunction('应用平台')">应用平台</div>
          <div class="funItem" @click="handelFunction('常用收藏')">常用收藏</div>
        </div>
      </div>
    </div>
    <FunctionDialog v-show="showFunctionDialog" ref="refFunctionDialog" @handlerClose="showFunctionDialog = false"></FunctionDialog>
  </PageColumnVue>
</template>
  
<script>
import PageColumnVue from "@/components/layout/PageColumn";
import SubBlockVue from "@/components/layout/SubBlock";
import {getAllXkGrid,showXkWg,getAllFkGrid,getAllDzwlGrid,getAllZDGrid,getAllQwwg} from '@/utils/baidu/xkGrid';
import {getKyjl,getZbjl,getRwjl,getPdt,getZfjly,getYdjwzd,getPTU,showJqMap,showPTUMap} from '@/utils/baidu/jwzy';
import FunctionDialog from "./dialogComponent/functionDialog";

export default {
  name: "Column2Com",
  components: {
    PageColumnVue,
    SubBlockVue,
    FunctionDialog,
  },
  data() {
    return {
      showFunctionDialog: false,
      map: null,
      zoom: 11,
      valueSearch: "",
      options: [
        {
          value: "承德市",
          label: "承德市",
        },
        {
          value: "廊坊市",
          label: "廊坊市",
        },
      ],
      treedata: [
        {
          id: "xkwg",
          label: "巡控网格",
          children: [
            {
              id: 5,
              label: "某巡控网格",
            },
          ],
        },
        {
          id: "qwwg",
          label: "勤务网格",
          children: [
            {
              id: 6,
              label: "某勤务网格",
            },
          ],
        },
        {
          id: "fkdw",
          label: "封控点位",
          children: []
        },
        {
          id: "dzwl",
          label: "电子围栏",
          children: []
        },
        {
          id: "spzy",
          label: "视频资源",
          children: []
        },
        {
          id: "zdbw",
          label: "重点部位",
          children: []
        },
        {
          id: "zdlx",
          label: "重点路线",
          children: [
            {
              id: 7,
              label: "环京一道线",
            },
            {
              id: 8,
              label: "环京二道线",
            },
            {
              id: 9,
              label: "环京三道线",
            },
            {
              id: 10,
              label: "环秦一道线",
            },
            {
              id: 11,
              label: "环秦二道线",
            },
            {
              id: 12,
              label: "环秦三道线",
            },
            {
              id: 13,
              label: "京沈铁路",
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
      isShowDuties: true,
      isshowDutiesCon: true,
      isShowCaret: true,
      isshowPoliceWorkCon: true,
      tableData: [
        {
          name: "4408022018111214000010221",
          type: "寻衅滋事",
          date: "2024-08-22 08:30:45",
          compony: "元宝山派出所",
          level: 2,
          tel: "010-323454",
          Nm: "张三",
          stage: "已接警,未出警",
          addres: "承德市元宝山大街25号,未出警",
        },
        {
          name: "4408022018111214000010221",
          type: "寻衅滋事",
          date: "2024-08-22 08:30:45",
          compony: "元宝山派出所",
          level: 2,
          tel: "010-323454",
          Nm: "张三",
          stage: "已接警,未出警",
          addres: "承德市元宝山大街25号,未出警",
        },
        {
          name: "4408022018111214000010221",
          type: "寻衅滋事",
          date: "2024-08-22 08:30:45",
          compony: "元宝山派出所",
          level: 2,
          tel: "010-323454",
          Nm: "张三",
          stage: "已接警,未出警",
          addres: "承德市元宝山大街25号,未出警",
        },
        {
          name: "4408022018111214000010221",
          type: "寻衅滋事",
          date: "2024-08-22 08:30:45",
          compony: "元宝山派出所",
          level: 2,
          tel: "010-323454",
          Nm: "张三",
          stage: "已接警,未出警",
          addres: "承德市元宝山大街25号,未出警",
        },
        {
          name: "4408022018111214000010221",
          type: "寻衅滋事",
          date: "2024-08-22 08:30:45",
          compony: "元宝山派出所",
          level: 2,
          tel: "010-323454",
          Nm: "张三",
          stage: "已接警,未出警",
          addres: "承德市元宝山大街25号,未出警",
        },
        {
          name: "4408022018111214000010221",
          type: "寻衅滋事",
          date: "2024-08-22 08:30:45",
          compony: "元宝山派出所",
          level: 2,
          tel: "010-323454",
          Nm: "张三",
          stage: "已接警,未出警",
          addres: "承德市元宝山大街25号,未出警",
        },
        {
          name: "4408022018111214000010221",
          type: "寻衅滋事",
          date: "2024-08-22 08:30:45",
          compony: "元宝山派出所",
          level: 2,
          tel: "010-323454",
          Nm: "张三",
          stage: "已接警,未出警",
          addres: "承德市元宝山大街25号,未出警",
        },
        {
          name: "4408022018111214000010221",
          type: "寻衅滋事",
          date: "2024-08-22 08:30:45",
          compony: "元宝山派出所",
          level: 2,
          tel: "010-323454",
          Nm: "张三",
          stage: "已接警,未出警",
          addres: "承德市元宝山大街25号,未出警",
        },
        {
          name: "4408022018111214000010221",
          type: "寻衅滋事",
          date: "2024-08-22 08:30:45",
          compony: "元宝山派出所",
          level: 2,
          tel: "010-323454",
          Nm: "张三",
          stage: "已接警,未出警",
          addres: "承德市元宝山大街25号,未出警",
        },
        {
          name: "4408022018111214000010221",
          type: "寻衅滋事",
          date: "2024-08-22 08:30:45",
          compony: "元宝山派出所",
          level: 2,
          tel: "010-323454",
          Nm: "张三",
          stage: "已接警,未出警",
          addres: "承德市元宝山大街25号,未出警",
        },
      ],
      currCheckdId: "",
      isCheckNode: false,
      gridNum: 0,
      gridTypeName: "",
      gridDataMap: new Map(),
      gridLabelMap: new Map(),
      gridPolygonMap: new Map(),
      xkOldNode:new Array(),
      xkOldLabel:new Array(),
      bddwGridView: null,
      bddwClusterLayer: null,
      dzwlGridView: null,
      dzwlClusterLayer: null,
      kyjl:0,
      zbjl:0,
      rwjl:0,
      pdt:393,
      zfjly:81,
      ydjwzd:278,
      ptuList:[],//13,
    };
  },
  computed: {
    classOption() {
      return {
        step: 0.3,
      };
    },
  },
  mounted() {
    this.initMap();
    this.getMapData()
    this.jqList();
    this.getZbxx();
    // this.bindWheelEvent();
    window.setInterval(() => {
      setTimeout(() => {
        this.jqList();
        // this.getZbxx();
      }, 0)
    }, 60000)
  },
  methods: {
    // 功能模块
    handelFunction (name) {
      this.showFunctionDialog = true
      this.$refs.refFunctionDialog.init(name)
    },
    getCurrentNode(nodeObj, nodeState) {
      this.currCheckdId = nodeObj.id;
      let nodes = this.$refs.tree.getCheckedNodes();
      let self=this
      let nodedx=this.$refs.tree.getNode(nodeObj);
      if(nodedx.level>1){
        let parent=this.$refs.tree.getNode(nodeObj).parent;
        if(parent){
          this.gridNum=parent.childNodes.length;
          this.gridTypeName=parent.data.label;
        }
      }else if(nodedx.level===1){
        if(nodedx.checked){
          this.gridNum=nodedx.childNodes.length;
          this.gridTypeName=nodedx.data.label;
        }else{
          this.gridNum=0;
          this.gridTypeName="";
        }
      }else{
        this.gridNum=0;
        this.gridTypeName="";
      }
      if(nodes.length===0){
        this.gridNum=0;
        this.gridTypeName="";
        if (this.bddwClusterLayer) this.bddwGridView.removeLayer(this.bddwClusterLayer);
        if(this.dzwlClusterLayer) this.dzwlGridView.removeLayer(this.dzwlClusterLayer);
      }
      // console.log("树节点",parent,nodedx);
      console.log('nodeObj',nodeObj)
      // console.log(nodes, 'nodes')
      setTimeout(()=>{
        if ((nodeObj.type == 'MultiPolygon' || nodeObj.type == 'MultiLineString'||nodeObj.id==='xkwg'||nodeObj.id==='zdlx'||nodeObj.id==='qwwg') ) { // 巡控网格、重点路线
          showXkWg(self.xkOldNode,self.xkOldLabel,nodes,self.map); 
        }else if((nodeObj.type == 'MultiPolygon' || nodeObj.type == 'MultiLineString')&&this.gridTypeName==='勤务网格' ){
          
        } else if (nodeObj.type == 'Point' && this.gridTypeName == '封控点位') {
          this.showFkdw(nodes) // 封控点位
        } else if (nodeObj.type == 'Point' && this.gridTypeName == '电子围栏') { 
          this.showDzwl(nodes) // 电子围栏
        }
      },500);
    },
    // 封控点位
    showFkdw(nodes) {
      if (nodes.length > 0) {
        var dataList = [];
        for (var i = 0; i < nodes.length; i++) {
          var item = nodes[i];
          dataList.push({
            geometry: {
              type: "Point",
              coordinates: [item.centX, item.centY],
              data: item,
            },
            properties: {
              icon: ["/qwxx/images/map/new/福利院.png"][nodes.length % 1],
              width: 59,
              height: 62,
            },
          })
        }
        this.bddwGridView = new mapvgl.View({ map: this.map });
        this.bddwClusterLayer = new mapvgl.ClusterLayer({
          minSize: 30,
          maxSize: 50,
          clusterRadius: 150,
          maxZoom: 15,
          minZoom: 5,
          showText: true,
          minPoints: 5,
          textOptions: { fontSize: 12, color: "white" },
          enablePicked: true,
          onClick(e) {
            console.log(e, 'eeeee')
            if (e.dataItem) {
              var label = new BMapGL.Label("", {
                position: new BMapGL.Point(
                  e.dataItem.geometry.coordinates[0],
                  e.dataItem.geometry.coordinates[1]
                ),
                offset: new BMapGL.Size(0, 0),
                zIndex: 9999,
              });
              label.setStyle({ border: 'none',background: 'rgba(0, 170, 255, 0.3)' });
              var content =
                '<div id="containerOneDialog">' +
                '<div class="posInfo">' +
                '<div class="titleBox" style="display: inline;>' +
                '<span class="postext">详细信息</span></div>' +
                '<img src="/qwxx/ajax/libs/baidu/images/cancel.png" alt="" class="close1 close" style="display: inline; opacity: 1;">' +
                "</div>" +
                '<div class="posItem">' +
                '<span class="descInfo"><i class="fa fa-bookmark-o"></i> 点位名称：</span>' +
                '<span class="Info">' +
                e.dataItem.geometry.data.name +
                "</span>" +
                "</div>" +
                '<div class="posItem">' +
                '<a class="btn btn-fill btn-xs" style="margin: 5px" onclick="openPOI(\'' +
                e.dataItem.geometry.data.y +
                "', '" +
                e.dataItem.geometry.data.x +
                '\')"><i class="fa fa-map-pin"></i> 周边 POI</a>' +
                '<a class="btn btn-fill btn-xs" style="margin: 5px" onclick="openVideo(\'' +
                e.dataItem.geometry.data.y +
                "', '" +
                e.dataItem.geometry.data.x +
                '\')"><i class="fa fa-video-camera"></i> 周边监控</a>' +
                "</div>" +
                "</div>";
              label.setContent(content);
              this.map.addOverlay(label);
              // 关闭lable
              $(".close").on("click", () => {
                label.setStyle({ display: "none" });
              });
              this.map.addEventListener("click", function () {
                label.setStyle({ display: "none" });
              });
            }
          },
        })
        this.bddwGridView.addLayer(this.bddwClusterLayer);
        this.bddwClusterLayer.setData(dataList);
      } 
    },
    // 电子围栏
    showDzwl(nodes) {
      if (nodes.length > 0) {
        var dataList = [];
        for (var i = 0; i < nodes.length; i++) {
          var item = nodes[i];
          dataList.push({
            geometry: {
              type: "Point",
              coordinates: [item.centX, item.centY],
              data: item,
            },
            properties: {
              icon: ["/qwxx/images/map/new/派出所.png"][nodes.length % 1],
              width: 59,
              height: 62,
            },
          })
        }
        this.dzwlGridView = new mapvgl.View({ map: this.map });
        this.dzwlClusterLayer = new mapvgl.ClusterLayer({
          minSize: 30,
          maxSize: 50,
          clusterRadius: 150,
          maxZoom: 15,
          minZoom: 5,
          showText: true,
          minPoints: 5,
          textOptions: { fontSize: 12, color: "white" },
          enablePicked: true,
          onClick(e) {
            console.log(e, 'eeeee')
            if (e.dataItem) {
              var label = new BMapGL.Label("", {
                position: new BMapGL.Point(
                  e.dataItem.geometry.coordinates[0],
                  e.dataItem.geometry.coordinates[1]
                ),
                offset: new BMapGL.Size(0, 0),
                zIndex: 9999,
              });
              label.setStyle({ width: "280px", display: "", border: 'none',background: 'rgba(0, 170, 255, 0.3)' });
              var content =
                '<div id="containerOneDialog">' +
                '<div class="posInfo">' +
                '<div class="titleBox" style="display: inline;>' +
                '<span class="postext">详细信息</span></div>' +
                '<img src="/qwxx/ajax/libs/baidu/images/cancel.png" alt="" class="close1 close" style="display: inline; opacity: 1;">' +
                "</div>" +
                '<div class="posItem">' +
                '<span class="descInfo"><i class="fa fa-bookmark-o"></i> 点位名称：</span>' +
                '<span class="Info">' +
                e.dataItem.geometry.data.name +
                "</span>" +
                "</div>" +
                '<div class="posItem">' +
                '<a class="btn btn-fill btn-xs" style="margin: 5px" onclick="openPOI(\'' +
                e.dataItem.geometry.data.y +
                "', '" +
                e.dataItem.geometry.data.x +
                '\')"><i class="fa fa-map-pin"></i> 周边 POI</a>' +
                '<a class="btn btn-fill btn-xs" style="margin: 5px" onclick="openVideo(\'' +
                e.dataItem.geometry.data.y +
                "', '" +
                e.dataItem.geometry.data.x +
                '\')"><i class="fa fa-video-camera"></i> 周边监控</a>' +
                "</div>" +
                "</div>";
              label.setContent(content);
              this.map.addOverlay(label);
              // 关闭lable
              $(".close").on("click", () => {
                label.setStyle({ display: "none" });
              });
              this.map.addEventListener("click", function () {
                label.setStyle({ display: "none" });
              });
            }
          },
        })
        this.dzwlGridView.addLayer(this.dzwlClusterLayer);
        this.dzwlClusterLayer.setData(dataList);
      } 
    },
    rdmRgbColor() {
      //随机生成RGB颜色
      const arr = [];
      for (let i = 0; i < 3; i++) {
        // 暖色
        arr.push(Math.floor(Math.random() * 128 + 64));
        // 亮色
        //arr.push(Math.floor(Math.random() * 128 + 128));
      }
      const [r, g, b] = arr;
      const color = `#${
        r.toString(16).length > 1 ? r.toString(16) : "0" + r.toString(16)
      }${g.toString(16).length > 1 ? g.toString(16) : "0" + g.toString(16)}${
        b.toString(16).length > 1 ? b.toString(16) : "0" + b.toString(16)
      }`;
      return color;
    },
    initMap() {
      this.map = new BMapGL.Map("allmap"); // 创建地图实例
      // 初始化Label
      var label = new BMapGL.Label("", {
        position: new BMapGL.Point(
          defaultCenterPoint[0],
          defaultCenterPoint[1]
        ), // 指定文本标注所在的地理位置
        offset: new BMapGL.Size(0, 32), // 设置文本偏移量,
        zIndex: 9999,
      });
      const point = new BMapGL.Point(117.969971, 40.959381); // 创建点坐标
      this.map.centerAndZoom(point, this.zoom); // 初始化地图，设置中心点坐标和缩放级别
      this.map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
      var view = new mapvgl.View({ map: this.map });
      var aoiBoundaryMap = new mapvgl.PolygonLayer({
        lineColor: "rgba(36,104,242,1)",
        lineWidth: 2,
        fillColor: "rgba(36,104,242,0.10)",
        dashArray: [10, 5],
        data: [],
      });
      view.addLayer(aoiBoundaryMap);
      this.map.addOverlay(label);
      var darkStyle = [{
        "featureType": "land",
        "elementType": "geometry",
        "stylers": {
            "visibility": "on",
            "color": "#091220ff"
        }
    }];
       this.map.setOptions({
            styleUrl: 'http://20.168.100.124:8119/dugis-demo-3d/mapstyle/mapstyle.json',
            style: {
                styleJson: darkStyle
            },
        });
      // this.map.setMapStyleV2({
      //   styleJson: [
      //     {
      //     'featureType': 'land',
      //     'elementType': 'geometry',
      //     'stylers': {
      //       'color': '#053448ff'
      //     }
      //   }, {
      //     'featureType': 'background',
      //     'elementType': 'geometry',
      //     'stylers': {
      //       'color': '#053448ff'
      //     }
      //   }, {
      //     'featureType': 'road',
      //     'elementType': 'geometry.fill',
      //     'stylers': {
      //       'color': '#13bab3ff'
      //     }
      //   }, {
      //     'featureType': 'road',
      //     'elementType': 'geometry.stroke',
      //     'stylers': {
      //       'color': '#13bab3ff'
      //     }
      //   }
      //   ]
      // })
    },
    jqList() {
      this.$http({
        url: this.$http.adornUrl("/getJqList"),
        method: "get",
      }).then((res) => {
        if (res.data.code === "200") {
          let data = res.data.data;
          // console.log("警情数据",data);
          this.tableData=[];
          for (var i = 0; i < data.length; i++) {
            var obj = {};
            obj.name = data[i].jjdbh;
            obj.type = data[i].jqlxmc;
            obj.date = data[i].bjsj_format;
            obj.compony = data[i].ssfj;
            obj.level = data[i].jqjbdm; //=='一级'?1:data[i].jqjbdm=='二级'?2:data[i].jqjbdm=='三级'?3:data[i].jqjbdm=='四级'?4:data[i].jqjbdm=='五级'?5:0;
            obj.tel = data[i].bjdh;
            obj.Nm = data[i].bjrxm;
            obj.stage = "";
            obj.addres = data[i].lxdz;
            obj.xzb = data[i].xzb;
            obj.yzb = data[i].yzb;
            this.tableData.push(obj);
            // { name: '4408022018111214000010221', type: '寻衅滋事', date: "2024-08-22 08:30:45", compony: "元宝山派出所", level: 2, tel: '010-323454', Nm: '张三', stage: '已接警,未出警', addres: '承德市元宝山大街25号,未出警'},
          }
        }
      }); 
    },
    showJq(index){
      //console.log("当前警情",this.tableData[index]);
      showJqMap(this.map,this.tableData[index].xzb,this.tableData[index].yzb);
    },
    getMapData () {
      getAllXkGrid(this.treedata) // 获取所有巡控网格 
      //getAllQwwg(this.treedata);//勤务网格
      getAllFkGrid(this.treedata) // 获取所有的封控点位
      getAllDzwlGrid(this.treedata) // 获取所有的电子围栏
      getAllZDGrid(this.treedata) // 获取所有的重点路线
      this.kyjl=getKyjl();
      this.zbjl=getZbjl();
      this.rwjl=getRwjl();
    },
    getZbxx(){
      this.pdt=getPdt();
      this.zfjly=getZfjly();
      this.ydjwzd=getYdjwzd();
      getPTU(this.ptuList);
      console.log("ptu",this.ptuList);
    },
    showPTU(){
      showPTUMap(this.map,this.ptuList);
    },
    bindWheelEvent() {
      const mapContainer = this.$refs.mapContainer;
      mapContainer.addEventListener("wheel", (event) => {
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
  :deep .anchorBL {
    display: none;
  }
  display: flex;
  flex-wrap: wrap;
  position: relative;
  .myMap {
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .span-ellipsis {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #ffffff;
    display: block;
  }
  .topSearchContent {
    width: 100%;
    height: 70px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    background: url("@/assets/images/layout/Rectangle3690@2x.png") no-repeat;
    background-size: 100% 100%;
    .img {
      width: 46px;
      height: 46px;
      margin-left: 26px;
    }
    .text {
      height: 46px;
      font-family: PangMenZhengDao, PangMenZhengDao;
      font-weight: 600;
      font-size: 48px;
      line-height: 42px;
      letter-spacing: 6px;
      font-style: normal;
      text-transform: none;
      text-stroke: 1px rgba(171, 214, 255, 0.5);
      text-align: center;
      padding-left: 5px;
      background: linear-gradient(90deg, #EAF5FF 0%, #637986 100%);
      -webkit-text-stroke: 1px rgba(171, 214, 255, 0.5);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .col2select {
      width: 200px;
      height: 50px;
      margin-left: 45px;
      border-radius: 2px 2px 2px 2px;
      border: 1px solid;
      border: none;
      :deep .el-input__inner {
        background: inherit;
        font-size: 20px;
        color: #ffffff;
        height: 50px;
      }
      :deep .el-select-dropdown {
        width: 200px;
        background: #033a7c;
        font-size: 20px;
        color: #ffffff;
      }
    }
    .valueSearch {
      width: 483px;
      height: 50px;
      background: inherit;
      border-radius: 2px 2px 2px 2px;
      border: 1px solid;
      margin-left: 14px;
      border: none;
      :deep .el-input__inner {
        height: 100%;
        background: inherit;
        font-size: 20px;
        color: #ffffff;
      }
    }
  }
  .leftServiceDuties {
    width: 248px;
    height: 64%;
    position: absolute;
    top: 10%;
    left: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    .serviceDutiesCon {
      width: 248px;
      height: 100%;
      overflow: auto;
      padding: 10px;
      background: url("@/assets/images/layout/Rectangle34624260@2x.png") no-repeat;
      background-size: 100% 100%;
      border-radius: 4px 4px 4px 4px;
      .header {
        width: 100%;
        height: 22px;
        display: flex;
        justify-content: space-between;
        font-family: Alibaba PuHuiTi 2, Alibaba PuHuiTi 20;
        font-weight: normal;
        font-size: 18px;
        color: #ffffff;
        line-height: 8px;
        text-align: left;
        background: url("@/assets/images/layout/Group-132137.png") no-repeat;
        background-size: 100% 100%;
        padding-left: 10px;
        margin-top: 20px;
      }
      .treestyle {
        margin-top: 10px;
        background: none;
        :deep .el-tree-node__content {
          background-color: transparent;
          height: 35px;
          &:hover {
            background-color: transparent;
          }
        }
        :deep .el-checkbox__inner {
          border: 1px solid #00aaff;
          background: none;
          width: 16px;
          height: 16px;
        }
        :deep .el-checkbox__input.is-checked .el-checkbox__inner {
          background-color: #409eff;
          color: #ffffff;
        }
        :deep .el-tree-node__label {
          font-size: 20px;
          color: #dfd7d7;
        }
      }
    }
    .caretBox {
      width: 21px;
      height: 50px;
      background: linear-gradient( 180deg, rgba(2, 48, 108, 0.9) 0%, rgba(2, 48, 108, 0.1) 100% ), radial-gradient( 0% 20% at 56% 57%, rgba(0, 128, 255, 0.1) 0%, rgba(0, 128, 255, 0.2) 100%);
      border-radius: 0px 2px 2px 0px;
      border: 1px solid;
      border-image: linear-gradient( 91deg, rgba(0, 170, 255, 0.6), rgba(0, 170, 255, 0) ) 3 3;
      line-height: 50px;
      text-align: center;
      color: #0091ff;
      cursor: pointer;
    }
    .gridInfo {
      width: 100%;
      height: 142px;
      overflow: auto;
      padding: 10px;
      background: url("@/assets/images/layout/grid_Info_Bg.png") no-repeat;
      background-size: 100% 100%;
      position: absolute;
      top: 0;
      left: 100%;
      .text {
        height: 24px;
        font-family: Alibaba PuHuiTi 2, Alibaba PuHuiTi 20;
        font-weight: normal;
        font-size: 18px;
        color: #ffffff;
        line-height: 24px;
        text-align: justified;
        font-style: normal;
        text-transform: none;
        margin-left: 10px;
      }
      p:nth-child(1) {
        line-height: 20px;
        margin-left: 25px;
      }
      p:nth-child(2) {
        margin-top: 20px;
        span {
          height: 24px;
          font-family: Alibaba PuHuiTi 2, Alibaba PuHuiTi 20;
          font-weight: normal;
          font-size: 18px;
          color: #00eaff;
          line-height: 24px;
          text-align: justified;
          font-style: normal;
          text-transform: none;
          padding-left: 20px;
        }
      }
      p:nth-child(3) {
        margin-top: 5px;
         span {
          height: 24px;
          font-family: Alibaba PuHuiTi 2, Alibaba PuHuiTi 20;
          font-weight: normal;
          font-size: 18px;
          color: #00eaff;
          line-height: 24px;
          text-align: justified;
          font-style: normal;
          text-transform: none;
          padding-left: 20px;
        }
      }
    }
  }
  .rightPoliceWork {
    width: 248px;
    height: 64%;
    position: absolute;
    top: 10%;
    right: 0;
    z-index: 2;
    display: flex;
    justify-content: end;
    .caretBox {
      width: 21px;
      height: 50px;
      background: linear-gradient( 180deg, rgba(2, 48, 108, 0.9) 0%, rgba(2, 48, 108, 0.1) 100% ), radial-gradient( 0% 20% at 56% 57%, rgba(0, 128, 255, 0.1) 0%, rgba(0, 128, 255, 0.2) 100%);
      border-radius: 0px 2px 2px 0px;
      border: 1px solid;
      border-image: linear-gradient( 91deg, rgba(0, 170, 255, 0.6), rgba(0, 170, 255, 0) ) 3 3;
      line-height: 50px;
      text-align: center;
      color: #0091ff;
      cursor: pointer;
      margin-top: 236px;
    }
    .policeWorkCon {
      width: 100%;
      height: 100%;
      overflow: auto;
      padding: 10px;
      background: linear-gradient(
        86deg,
        #00386a 0%,
        rgba(0, 56, 106, 0.5) 100%
      );
      border-radius: 4px 4px 4px 4px;
      .header {
        width: 100%;
        height: 22px;
        display: flex;
        justify-content: space-between;
        font-family: Alibaba PuHuiTi 2, Alibaba PuHuiTi 20;
        font-weight: normal;
        font-size: 18px;
        color: #ffffff;
        line-height: 8px;
        text-align: left;
        background: url("@/assets/images/layout/Group-132137.png") no-repeat;
        background-size: 100% 100%;
        padding-left: 10px;
        margin-top: 20px;
      }
      .policeStrengthItem {
        width: 158px;
        height: 62px;
        padding-left: 5px;
        border: 1px solid #00aaff;
        margin-top: 8px;
        .text {
          height: 25px;
          font-family: Alibaba PuHuiTi 2, Alibaba PuHuiTi 20;
          font-weight: normal;
          font-size: 18px;
          color: #ffffff;
          text-align: left;
          font-style: normal;
          text-transform: none;
          display: flex;
          margin-top: 7px;
          img {
            width: 28px;
            height: 25px;
            padding-right: 5px;
          }
        }
        .num {
          height: 24px;
          font-family: Alibaba PuHuiTi 2, Alibaba PuHuiTi 20;
          font-weight: normal;
          font-size: 18px;
          color: #2db9ff;
          line-height: 24px;
          text-align: left;
          font-style: normal;
          text-transform: none;
          padding-left: 32px;
          span {
            display: inline-block;
            width: 29px;
            height: 18px;
            font-family: Alibaba PuHuiTi 2, Alibaba PuHuiTi 20;
            font-weight: normal;
            font-size: 14px;
            color: #ffffff;
            line-height: 16px;
            text-align: center;
            font-style: normal;
            text-transform: none;
            background: rgba(0, 170, 255, 0.3);
            border-radius: 16px 16px 16px 16px;
            margin-left: 13px;
          }
        }
      }
    }
  }
  .footerContent {
    width: 100%;
    height: 26%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;
    .box {
      width: 100%;
      height: 100%;
      display: flex;
    }
    .function {
      width: 15%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      position: relative;
      .addFun {
        position: absolute;
        width: 55px;
        height: 55px;
        background: url("@/assets/images/layout/addFunBg.png") no-repeat;
        background-size: 100% 100%;
        left: 40%;
        top: 38%;
        cursor: pointer;
      }
      .funItem {
        width: 50%;
        height: 50%;
        background: url("@/assets/images/layout/function_bg1.png") no-repeat;
        background-size: 100% 100%;
        font-family: Alibaba PuHuiTi 2, Alibaba PuHuiTi 20;
        font-weight: normal;
        font-size: 18px;
        color: #ffffff;
        text-align: center;
        font-style: normal;
        text-transform: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 45px;
      }
    }
    .l_tableList {
      width: 85%;
      background: rgba(25, 32, 47, 0.9);
      .c_1_c_f {
        width: 100%;
        height: 100%;
        overflow: hidden;
        flex-shrink: 0;
        .body {
          padding:5px;
        }
        .tableHeader {
          width: 100%;
          height: 40px;
          background: rgba(0, 163, 255, 0.2);
          display: inline-block;
          display: flex;
          align-items: center;
          .text {
            flex: 1;
            height: 24px;
            font-family: Alibaba PuHuiTi 2, Alibaba PuHuiTi 20;
            font-weight: normal;
            font-size: 20px;
            color: #ffffff;
            line-height: 24px;
            text-align: left;
            font-style: normal;
            text-transform: none;
            padding-left: 10px;
          }
          p:nth-child(1) {
            flex: 0.5;
            text-align: center;
            padding: 0;
          }
          p:nth-child(2) {
            flex: 2;
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
              font-family: Alibaba PuHuiTi 2, Alibaba PuHuiTi 20;
              font-weight: normal;
              font-size: 18px;
              color: rgba(255, 255, 255, 0.87);
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
              flex: 1.5;
              height: 36px;
              line-height: 36px;
              color: #00aaff;
              text-align: center;
              background: url("@/assets/images/layout/Frame42@2x.png") no-repeat
                center;
              background-size: 80% 100%;
            }
            /* 接警员 */
            div:nth-child(8) {
              flex: 0.5;
            }
            .stage {
              color: #00cc03;
            }
            .level {
              color: yellow;
              background: none;
            }
          }
          div:nth-child(odd) {
            background: rgba(0, 145, 255, 0.1);
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