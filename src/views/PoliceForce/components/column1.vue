<template>
  <PageColumnVue class="col_1_container" :width="33.33">
    <div class="topSearchContent">
      <img src="../../../assets/images/layout/WechatIMG2851@2x.png" alt="" class="img">
      <p class="text">情</p>
      <p v-for="(item, index) in btnList" @click="handelBtn(index)" :class="{'dateTypeBtnIdx': dateTypeBtnIdx == index}" :key="index" class="btnClass">{{ item.name }}</p> 
      <el-date-picker v-model="dateValue" type="datetime" placeholder="选择日期时间" />
    </div>
    <SubBlockVue tabs="警情概览" :moreShow="false" class="c_1_b_1">
      <div class="toVerview">
        <div class="total">
          <p>{{ resDataOverview.total || 519 }}</p>
          <p>总呼入量</p>
        </div>
        <div class="overview">
          <div class="year_on_year">
            <p class="text">同比</p>
            <p class="rate">{{ resDataOverview.tb ? Number(resDataOverview.tb).toFixed(2) : 5 }}<span> %</span></p>
            <img  v-if="Number(resDataOverview.tb)>0" src="../../../assets/images/layout/add_yellow.png"  alt="" />
            <img  v-if="Number(resDataOverview.tb)<=0" src="../../../assets/images/layout/reduce_green.png"  alt="" />
          </div>
          <div class="year_on_year month_on_month">
            <p class="text">环比</p>
            <p class="rate">{{ resDataOverview.hb ? Number(resDataOverview.hb).toFixed(2) : 6 }}<span> %</span></p>
            <img  v-if="Number(resDataOverview.hb)>0" src="../../../assets/images/layout/add_yellow.png"  alt="">
            <img  v-if="Number(resDataOverview.hb)<=0" src="../../../assets/images/layout/reduce_green.png"  alt="">
          </div>
        </div>
      </div>
    </SubBlockVue>
    <SubBlockVue v-model="c_1_b_2TabValue" :tabs="['警情类型分析', '警情类型同比环比']" @change="handelsBtnc_1_b_2" :moreShow="false" class="c_1_b_2">
      <div v-if="c_1_b_2TabValue == '警情类型分析'" class="type6Box">
        <div v-for="(item, index) in jqTypeListc_2.slice(0, 6)" @click="handelWarInst(item)" :key="index" class="type6Item">
          <el-progress type="circle" :percentage="item.percentage" :stroke-width="8" :width="80" :height="80" :color="index == 0 ? '#00AAFF' : index == 1 ? '#00EAFF' : index == 2 ? '#FF9900' : index == 3 ? '#00CC03' : index == 4 ? '#743ED4' : '#00AAFF'" :define-back-color="index == 0 ? '#005A91' : index == 1 ? '#018297' : index == 2 ? '#895B12' : index == 3 ? '#017615' : index == 4 ? '#3C2B81' : '#005A90'" />
          <div class="type6Info">
            <p>{{item.name}}</p>
            <p>{{item.value}} 起</p>
            <el-progress type="line" :show-text="false" :stroke-width="8" :percentage="item.value" :color="index == 0 ? '#00AAFF' : index == 1 ? '#00EAFF' : index == 2 ? '#FF9900' : index == 3 ? '#00CC03' : index == 4 ? '#743ED4' : '#00AAFF'" :define-back-color="index == 0 ? '#005A91' : index == 1 ? '#018297' : index == 2 ? '#895B12' : index == 3 ? '#017615' : index == 4 ? '#3C2B81' : '#005A90'" />
          </div>
        </div>
      </div>
      <div v-if="c_1_b_2TabValue == '警情类型分析'" class="type5Box">
        <div v-for="(item, index) in jqTypeListc_2.slice(-5)" @click="handelWarInst(item)" :key="index" class="type5Item">
          <el-progress type="circle" :percentage="item.percentage" :stroke-width="6" :width="62" :height="62" :color="index == 0 ? '#0085FF' : index == 1 ? '#F0F50F' : index == 2 ? '#7B3DEA' : index == 3 ? '#4080FF' : '#00EAFF'" :define-back-color="index == 0 ? '#00588E' : index == 1 ? '#86911A' : index == 2 ? '#432B93' : index == 3 ? '#174B90' : '#018CA1'" />
          <div class="type5Info">
            <p>{{item.name}}</p>
            <p>{{item.value}} 起</p>
          </div>
        </div>
      </div>
      <div v-if="c_1_b_2TabValue == '警情类型同比环比'" class="type6TbHbBox">
        <div v-for="(item, index) in jqTypeListc_2_tb_hb_list.slice(0, 6)" @click="handelWarInst(item)" :key="index" class="type6Item">
          <div class="name">{{item.name}}</div>
          <div class="type6Info">
            <p class="text_tb">同比<span v-show="item.tbStatusIsDown">-</span>{{ item.tb }}%</p>
            <el-progress type="line" :show-text="false" :stroke-width="8" :percentage="item.tb" :color="index == 0 ? '#00AAFF' : index == 1 ? '#00EAFF' : index == 2 ? '#FF9900' : index == 3 ? '#00CC03' : index == 4 ? '#743ED4' : '#00AAFF'" :define-back-color="index == 0 ? '#005A91' : index == 1 ? '#018297' : index == 2 ? '#895B12' : index == 3 ? '#017615' : index == 4 ? '#3C2B81' : '#005A90'" />
            <p class="text_hb">环比<span v-show="item.hbStatusIsDown">-</span>{{ item.hb }}%</p>
            <el-progress type="line" :show-text="false" :stroke-width="8" :percentage="item.hb" :color="index == 0 ? '#00AAFF' : index == 1 ? '#00EAFF' : index == 2 ? '#FF9900' : index == 3 ? '#00CC03' : index == 4 ? '#743ED4' : '#00AAFF'" :define-back-color="index == 0 ? '#005A91' : index == 1 ? '#018297' : index == 2 ? '#895B12' : index == 3 ? '#017615' : index == 4 ? '#3C2B81' : '#005A90'" />
          </div>
        </div>
      </div>
      <div v-if="c_1_b_2TabValue == '警情类型同比环比'" class="type5TbHbBox">
        <div v-for="(item, index) in jqTypeListc_2_tb_hb_list.slice(-5)" @click="handelWarInst(item)" :key="index" class="type5Item">
          <div class="name">{{item.name}}</div>
          <div class="type5Info">
            <p class="text_tb">同比 <span v-show="item.tbStatusIsDown">-</span>{{ item.tb }}%</p>
            <el-progress type="line" :show-text="false" :stroke-width="8" :percentage="item.tb" :color="index == 0 ? '#0085FF' : index == 1 ? '#F0F50F' : index == 2 ? '#7B3DEA' : index == 3 ? '#4080FF' : '#00EAFF'" :define-back-color="index == 0 ? '#00588E' : index == 1 ? '#86911A' : index == 2 ? '#432B93' : index == 3 ? '#174B90' : '#018CA1'" />
            <p class="text_hb">环比 <span v-show="item.hbStatusIsDown">-</span>{{ item.hb }}%</p>
            <el-progress type="line" :show-text="false" :stroke-width="8" :percentage="item.hb" :color="index == 0 ? '#0085FF' : index == 1 ? '#F0F50F' : index == 2 ? '#7B3DEA' : index == 3 ? '#4080FF' : '#00EAFF'" :define-back-color="index == 0 ? '#00588E' : index == 1 ? '#86911A' : index == 2 ? '#432B93' : index == 3 ? '#174B90' : '#018CA1'" />
          </div>
        </div>
      </div>
    </SubBlockVue>
    <SubBlockVue tabs="县市区警情" :moreShow="false" class="c_1_b_3">
      <el-carousel trigger="click" width="100%" height="180px" :interval="6000">
        <el-carousel-item v-for="(items,index) in carouselData" :key="index">
          <div class="c_1_b_3_box">
            <div v-for="(item, inx) in items" :key="inx" class="b_3region">
              <div class="index">{{ item.index }}</div>
              <div class="regionInfo">
                <div class="name">
                  <span :title="item.mc">{{ item.mc }}</span>
                  <span>{{ item.num }}</span>
                </div>
                <div class="rate">
                  <div :class="item.tb>0?'rate_ring':'rate_with'"><span class="text">同比</span><span>{{ Number(item.tb)===100?100:Number(item.tb).toFixed(2) }}%</span><img :src="item.tb>0?'/qwxx/images/arrow_yellow.png':'/qwxx/images/arrow_green.png'" alt="" class="img"></div>
                  <div :class="item.hb>0?'rate_ring':'rate_with'"><span class="text">环比</span><span>{{ Number(item.hb)===100?100:Number(item.hb).toFixed(2) }}%</span><img :src="item.hb>0?'/qwxx/images/arrow_yellow.png':'/qwxx/images/arrow_green.png'" alt="" class="img"></div>
                </div>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </SubBlockVue>
    <SubBlockVue tabs="警情高发时段" :moreShow="false" class="c_1_b_4">
      <div class="echarts_demo" id="col4_chartLine"></div>
    </SubBlockVue>
    <SubBlockVue v-model="c_1_b_5TabValue" :tabs="['同警格高频警情', '同类型高频警情']" @change="handelsBtnc_1_b_5" @handelMore="handelMorevc1b5" class="c_1_b_5">
      <div class="hot">HOT</div>
      <div class="name" v-for="(item, index) in getListc_5.slice(0, 11)" :key="index">{{item.name}}<span style="color:#fff">({{item.num}})</span></div>
    </SubBlockVue>
    <SubBlockVue v-model="c_1_b_6TabValue" :tabs="['情报概览', '舆情概览']" @change="handelsBtnc_1_b_6" :moreShow="false" class="c_1_b_6">
      <vue-seamless-scroll :data="tableData6" :class-option="scrollOption" class="seamless-warp">
        <div class="tableBody">
          <div v-for="(item, index) in tableData6" :key="index" class="tableItem">
            <div class="color" :class="[(item.color == '蓝' || item.color == '一般' ) ? 'activeColor_blue' :(item.color == '橙' || item.color == '紧急') ? 'activeColor_orange' :(item.color == '红' || item.color == '重要') ? 'activeColor_red' : 'activeColor_yellow']"></div>
            <div class="name">{{ item.title }}</div>
            <div class="type" :class="[(item.color == '蓝' || item.color == '一般' ) ? 'activeColor_blue' :(item.color == '橙' || item.color == '紧急') ? 'activeColor_orange' :(item.color == '红' || item.color == '重要') ? 'activeColor_red' : 'activeColor_yellow']">{{ item.source }}</div>
            <div class="date">{{ item.time }}</div>
          </div> 
        </div>
      </vue-seamless-scroll>
    </SubBlockVue>
    <SubBlockVue tabs="同人高频报警" :moreShow="true" @handelMore="handelMorevc1b7" class="c_1_b_7">
      <div class="tableHeader">
        <p>序号</p>
        <p>报警电话</p>
        <p>报警次数</p>
        <p>报警总时长</p>
      </div>
      <div class="tableBody">
        <div v-for="(item, index) in getTrGpJq_7" :key="index" class="tableItem">
          <div class="indexs">{{ index + 1}}</div>
          <div class="name">{{ item.bjdh }}</div>
          <div class="date">{{ item.num }}</div>
          <div class="date">{{ item.jjsc }}</div>
        </div> 
      </div>
    </SubBlockVue>
    <SubBlockVue tabs="同地高频预警" :moreShow="true" @handelMore="handelMorevc1b8" class="c_1_b_8">
      <div class="tableHeader">
        <p>序号</p>
        <p>报警地址</p>
        <p>报警次数</p>
      </div>
      <div class="tableBody">
        <div v-for="(item, index) in getTdzGpJq_8" :key="index" class="tableItem">
          <div class="indexs">{{ index + 1}}</div>
          <div class="name">{{ item.lxdz }}</div>
          <div class="date">{{ item.num }}</div>
        </div> 
      </div>
    </SubBlockVue>
    <C1bDialog v-show="C1bDialogVisible" ref="C1bDialogRef" @handlerClose="C1bDialogVisible = false" />
  </PageColumnVue>
</template>

<script>
import * as echarts from "echarts";
import PageColumnVue from "@/components/layout/PageColumn";
import SubBlockVue from "@/components/layout/SubBlock";
import C1bDialog from "./dialogComponent/dialog";
export default {
  name: "Column1Com",
  components: {
    PageColumnVue,
    SubBlockVue,
    C1bDialog,
  },
  data() {
    return {
      C1bDialogVisible: false,
      dateValue: '',
      jqlb: '',
      dateTypeBtnIdx: 0,
      scrollOption: {
        step: 0.3,
      },
      resDataOverview: {},
      jqTypeListc_2: [],
      jqTypeListc_2_tb_hb_list: [],
      jqTypeListc_2_tb_hb_today: [
        {name: '处警量', tb: '4.71', hb: '0.71', tbStatusIsDown: true, hbStatusIsDown: false}, // - +
        {name: '治安警情', tb: '4.9', hb: '30.95', tbStatusIsDown: false, hbStatusIsDown: true}, // + -
        {name: '刑事警情', tb: '350', hb: '50', tbStatusIsDown: false, hbStatusIsDown: false},// + +
        {name: '交通警情', tb: '3.37', hb: '37.67', tbStatusIsDown: true, hbStatusIsDown: false}, // - +
        {name: '纠纷警情', tb: '29.03', hb: '61.4', tbStatusIsDown: true, hbStatusIsDown: true}, // _ _
        {name: '群众警情', tb: '50', hb: '45.45', tbStatusIsDown: true, hbStatusIsDown: true}, // _ _
        {name: '盗窃', tb: '10.5', hb: '5.77', tbStatusIsDown: true, hbStatusIsDown: false},// + +
        {name: '打架', tb: '26.67', hb: '47.62', tbStatusIsDown: true, hbStatusIsDown: true},// _ _
        {name: '紧急求助', tb: '100', hb: '77.78', tbStatusIsDown: false, hbStatusIsDown: false},// + _
        {name: '走失', tb: '25', hb: '40', tbStatusIsDown: true, hbStatusIsDown: false},// _  _
        {name: '扬言极端', tb: '0', hb: '0', tbStatusIsDown: false, hbStatusIsDown: false}, // 
      ],
      jqTypeListc_2_tb_hb_7day: [
        {name: '处警量', tb: '1.16', hb: '15.04', tbStatusIsDown: true, hbStatusIsDown: true}, // - -
        {name: '治安警情', tb: '33.43', hb: '3.7', tbStatusIsDown: true, hbStatusIsDown: true}, //- -
        {name: '刑事警情', tb: '14.29', hb: '0', tbStatusIsDown: false, hbStatusIsDown: false}, //+ 
        {name: '交通警情', tb: '7.46', hb: '16.69', tbStatusIsDown: true, hbStatusIsDown: true}, //- -
        {name: '纠纷警情', tb: '0.45', hb: '9.88', tbStatusIsDown: true, hbStatusIsDown: true}, // - -
        {name: '群众警情', tb: '33.06', hb: '36.15', tbStatusIsDown: true, hbStatusIsDown: true}, // - -
        {name: '盗窃', tb: '7.59', hb: '2.57', tbStatusIsDown: true, hbStatusIsDown: true}, // + -
        {name: '打架', tb: '5.35', hb: '0.29', tbStatusIsDown: false, hbStatusIsDown: true}, // + -
        {name: '紧急求助', tb: '2.73', hb: '12.83', tbStatusIsDown: false, hbStatusIsDown: true}, // + -
        {name: '走失', tb: '15.79', hb: '62.79', tbStatusIsDown: true, hbStatusIsDown: true}, // - -
        {name: '扬言极端', tb: '0', hb: '0', tbStatusIsDown: false, hbStatusIsDown: false}, //
      ],
      jqTypeListc_2_tb_hb_30day: [
        {name: '处警量', tb: '5.78', hb: '12.19', tbStatusIsDown: false, hbStatusIsDown: false}, // ++
        {name: '治安警情', tb: '29.39', hb: '5.54', tbStatusIsDown: true, hbStatusIsDown: false}, // - +
        {name: '刑事警情', tb: '10.76', hb: '3.84', tbStatusIsDown: false, hbStatusIsDown: true}, // + -
        {name: '交通警情', tb: '2.47', hb: '19.55', tbStatusIsDown: true, hbStatusIsDown: false}, // - +
        {name: '纠纷警情', tb: '0.04', hb: '3.8', tbStatusIsDown: false, hbStatusIsDown: false}, // + +
        {name: '群众警情', tb: '7.56', hb: '0.06', tbStatusIsDown: true, hbStatusIsDown: false}, // - +
        {name: '盗窃', tb: '4.2', hb: '17.46', tbStatusIsDown: true, hbStatusIsDown: true}, // + +
        {name: '打架', tb: '7.33', hb: '5.55', tbStatusIsDown: false, hbStatusIsDown: false}, // + +
        {name: '紧急求助', tb: '12.7', hb: '7.76', tbStatusIsDown: false, hbStatusIsDown: false}, // + +
        {name: '走失', tb: '18.24', hb: '4.29', tbStatusIsDown: false, hbStatusIsDown: true}, // + +
        {name: '扬言极端', tb: '0', hb: '0', tbStatusIsDown: false, hbStatusIsDown: false}, // 
      ],
      XsqJqListc_3: [
        // { mc: '双桥', num: '21', tb: 3.333333, hb: 3.333333, index: 1},
        // { mc: '双桥', num: '3', tb: 3.333333, hb: 3.333333, index: 2},
        // { mc: '双桥', num: '4', tb: 3.333333, hb: 3.333333, index: 3},
        // { mc: '双桥', num: '5', tb: 3.333333, hb: 3.333333, index: 4},
        // { mc: '双桥', num: '6', tb: 3.333333, hb: 3.333333, index: 5},
        // { mc: '双桥', num: '7', tb: 3.333333, hb: 3.333333, index: 6},
        // { mc: '双桥', num: '8', tb: 3.333333, hb: 3.333333, index: 7},
        // { mc: '双桥', num: '9', tb: 3.333333, hb: 3.333333, index: 8},
        // { mc: '双桥', num: '10', tb: 3.333333, hb: 3.333333, index: 8},
        // { mc: '双桥', num: '11', tb: 3.333333, hb: 3.333333, index: 10},
        // { mc: '双桥', num: '12', tb: 3.333333, hb: 3.333333, index: 11},
        // { mc: '双桥', num: '13', tb: 3.333333, hb: 3.333333, index: 12},
        // { mc: '双桥', num: '8', tb: 3.333333, hb: 3.333333, index: 13},
        // { mc: '双桥', num: '9', tb: 3.333333, hb: 3.333333, index: 14},
        // { mc: '双桥', num: '10', tb: 3.333333, hb: 3.333333, index: 15},
        // { mc: '双桥', num: '11', tb: 3.333333, hb: 3.333333, index: 16},
        // { mc: '双桥', num: '12', tb: 3.333333, hb: 3.333333, index: 17},
        // { mc: '双桥', num: '13', tb: 3.333333, hb: 3.333333, index: 18},
      ],
      getListc_5: [
        // { name: '元宝山派出所-大元宝山村警格', num: 2},
        // { name: '牛圈子沟派出所-牛圈子沟村警格', num: 2},
        // { name: '牛圈子沟派出所-牛圈子沟村警格', num: 2},
        // { name: '牛圈子沟派出所-牛圈子沟村警格', num: 2},
        // { name: '双桥双桥双桥-同警格高频警情', num: 2},
        // { name: '双桥双桥双桥-同警格高频警情', num: 2},
        // { name: '双桥双桥双桥-同警格高频警情', num: 2},
        // { name: '双桥双桥双桥-同警格高频警情', num: 2},
        // { name: '双桥双桥双桥-同警格高频警情', num: 2},
        // { name: '双桥双桥双桥-同警格高频警情', num: 2},
        // { name: '双桥双桥双桥-同警格高频警情', num: 2},
      ],
      btnList: [
        { name: '今日', value: 'today'},
        { name: '近七天', value: 'sevenDay'},
        { name: '本月', value: 'currentMonth'},
      ],
      c_1_b_2TabValue: '警情类型分析',
      c_1_b_5TabValue: '同警格高频警情', 
      c_1_b_6TabValue: '情报概览', 
      tableData6: [
        // { title: '这是一条某某类型的情报内容内容内容内容内容内容一般', source: '情报来源', time: "2024-08-22 08:30:45", color: '一般' },
        // { title: '这是一条某某类型的情报内容内容内容内容内容内容紧急', source: '情报来源', time: "2024-08-22 08:30:45", color: '紧急'},
        // { title: '这是一条某某类型的情报内容内容内容内容内容内容', source: '情报来源', time: "2024-08-22 08:30:45", color: '一般' },
        // { title: '这是一条某某类型的情报内容内容内容内容内容内容', source: '情报来源', time: "2024-08-22 08:30:45", color: '橙' },
        // { title: '这是一条某某类型的情报内容内容内容内容内容内容', source: '情报来源', time: "2024-08-22 08:30:45", color: '重要' },
        // { title: '这是一条某某类型的情报内容内容内容内容内容内容', source: '情报来源', time: "2024-08-22 08:30:45", color: '' },
      ],
      getTrGpJq_7: [
        // { bjdh: '19132999334', num: '8', jjsc: "210" },
        // { bjdh: '19132999334', num: '8', jjsc: "210" },
        // { bjdh: '19132999334', num: '8', jjsc: "210" },
        // { bjdh: '19132999334', num: '8', jjsc: "210" },
        // { bjdh: '19132999334', num: '8', jjsc: "210" },
      ],
      getTdzGpJq_8: [
        // { lxdz: '承德市车站路35号', num: '3' },
        // { lxdz: '承德市车站路35号', num: '3' },
        // { lxdz: '承德市车站路35号', num: '3' },
        // { lxdz: '承德市车站路35号', num: '3' },
        // { lxdz: '承德市车站路35号', num: '3' },
      ],
    }
  },
  computed: {
    carouselData() {
      // 将数据分组，每组6个
      const groups = [];
      for (let i = 0; i < this.XsqJqListc_3.length; i += 6) {
        groups.push(this.XsqJqListc_3.slice(i, i + 6));
      }
      return groups;
    },
  },
  mounted() {  
    // 初始化接口
    this.DemoEchart()
    this.getOverviewData()
    this.getWarInstType()
    this.getXsqJq()
    this.getTjgGpJq()
    this.getQbzlxx()
    this.getTrGpJq()
    this.getTdzGpJq()

    // 30分钟刷新一次
    window.setInterval(() => {
      setTimeout(() => {
        this.DemoEchart()
        this.getOverviewData()
        this.getWarInstType()
        this.getXsqJq()
        this.getQbzlxx()
        this.getYqList()
        this.getTrGpJq()
        this.getTdzGpJq()
        if (this.c_1_b_5TabValue == '同类型高频警情') {
          this.getTlxGpJq() // 同类型高频警情
        } else {
          this.getTjgGpJq() // 同警格高频警情
        }
        if (this.c_1_b_6TabValue == '舆情概览') {
          this.getYqList() // 同类型高频警情
        } else {
          this.getQbzlxx() // 情报概览
        }
      }, 0)
    }, 300000)
  },
  methods: {
    // 今天, 近7天, 本月
    handelBtn (index) {
      this.dateTypeBtnIdx = index
      this.getOverviewData () // 警情概览
      this.getXsqJq () // 县市区警情
      this.getTrGpJq() // 同人高频警情
      this.getTdzGpJq() // 同地高频警情
      this.DemoEchart() //警情高发时段统计
      if (this.c_1_b_2TabValue == '警情类型同比环比') {
        this.getWarInstHomocyclic() // 警情类型同比环比
      } else {
        this.getWarInstType () // 警情类型
      }
      if (this.c_1_b_5TabValue == '同类型高频警情') {
        this.getTlxGpJq() // 同类型高频警情
      } else {
        this.getTjgGpJq() // 同警格高频警情
      }
      if (this.c_1_b_6TabValue == '舆情概览') {
        this.getYqList() // 同类型高频警情
      } else {
        this.getQbzlxx() // 情报概览
      }
    },
    
    // 警情类型点击事件
    handelWarInst (it) {
      this.jqlb = it.value
    },
    
    // 获取警情概览
    getOverviewData () {
      this.$http({
        url: this.$http.adornUrl('/getTotalJq?dateType=' + this.btnList[this.dateTypeBtnIdx].value + '&jqlb=' + this.jqlb),
        method: 'get',
      }).then(res => {
        // console.log("警情总览",res);
        if (res.data.code == '200') {
          this.resDataOverview = res.data.data
        }
      })
    }, 
    
    // 获取警情类型
    getWarInstType () { 
      let self=this;
      this.$http({
        url: this.$http.adornUrl('/getJqlx?dateType=' + this.btnList[this.dateTypeBtnIdx].value),
        method: 'get',
      }).then(res => {
        if (res.data.code == '200') {
          // console.log("获取警情总量",res.data.data);
          this.jqTypeListc_2=[];
          let resData = []
          let total = 0
          for (let key in res.data.data) {
            if(key==="处警量"){
              total=res.data.data[key];
            }
            resData.push({name: key, value: res.data.data[key]})
          }
          
          let list2 = resData
          // resData.forEach((type) => {
          //   if(type.name==="处警量"){
              
          //   }
            
          // });

          list2.forEach((it) => {
            if(it.name==="处警量"){
                  let data = {
                  value: it.value,
                  percentage: Number((it.value / self.resDataOverview.total) * 100).toFixed(2),
                  name: it.name
                }
                this.jqTypeListc_2.push(data)
            }else{
                let data = {
                  value: it.value,
                  percentage: Number((it.value / total) * 100).toFixed(2),
                  name: it.name
                }
                this.jqTypeListc_2.push(data)
            }
            
          })
        }
      })
    },
    // 警情类型同比环比
    getWarInstHomocyclic () {
      if (this.dateTypeBtnIdx == 0) { // 今天
        this.jqTypeListc_2_tb_hb_list = this.jqTypeListc_2_tb_hb_today
      } else if (this.dateTypeBtnIdx == 1) { // 近7天
        this.jqTypeListc_2_tb_hb_list = this.jqTypeListc_2_tb_hb_7day
      } else if (this.dateTypeBtnIdx == 2) { // 近30天
        this.jqTypeListc_2_tb_hb_list = this.jqTypeListc_2_tb_hb_30day
      }
    },
    // 县市区警情
    getXsqJq () {
      this.$http({
        url: this.$http.adornUrl('/getXsqJq?dateType=' + this.btnList[this.dateTypeBtnIdx].value + '&jqlb=' + this.jqlb),
        method: 'get',
      }).then(res => {
        if (res.data.code == '200') {
          this.XsqJqListc_3 = res.data.data.map((item, index)=>{
            return {
              ...item,
              index: index + 1
            }
          })
        }
      })
    },

    // 警情类型分析/警情类型同比环比
    handelsBtnc_1_b_2 (item) { 
      if (item == '警情类型同比环比') {
        this.getWarInstHomocyclic()
      } else {
        this.getWarInstType()
      }
    },    
    // 同警格高频警情/同类型高频警情 
    handelsBtnc_1_b_5 (item) {
      if (item == '同类型高频警情') {
        this.getTlxGpJq()
      } else {
        this.getTjgGpJq()
      }
    },
    
    // 同警格高频警情
    getTjgGpJq () {
      this.getListc_5 = []
      this.$http({
        url: this.$http.adornUrl('/getTjgGpJq?dateType=' + this.btnList[this.dateTypeBtnIdx].value),
        method: 'get',
      }).then(res => {
        if (res.data.code == '200') {
          let resData = res.data.data.map(item=>{
            return {
              name: item.jgmc,
              num: item.num,
            }
          })
          this.$set(this, 'getListc_5', resData)
        }
      })
    },
    
    // 同类型高频警情
    getTlxGpJq () {
      this.getListc_5 = []
      this.$http({
        url: this.$http.adornUrl('/getTlxGpJq?dateType=' + this.btnList[this.dateTypeBtnIdx].value),
        method: 'get',
      }).then(res => {
        if (res.data.code == '200') {
          let resData = res.data.data.map(item=>{
            return {
              name: item.jqlxmc,
              num: item.num,
              ay: item.ay,
            }
          })
          this.$set(this, 'getListc_5', resData)
        }
      })
    },
    
    // 情报概览/舆情概览
    handelsBtnc_1_b_6 (item) {
      if (item == '舆情概览') {
        this.getYqList()
      } else {
        this.getQbzlxx()
      }
    },
    
    // 情报概览
    getQbzlxx () {
      this.tableData6 = []
      this.$http({
        url: this.$http.adornUrl('/getQbzlxx'),
        method: 'get',
      }).then(res => {
        if (res.data.code == '200') {
          this.tableData6 = res.data.data.map(item=>{
            return {
              title: item.zlbt,
              source: item.zllx,
              time: item.create_time,
              color: item.zllx // 一般，紧急和重要，分别用蓝色、橙色、红色
            }
          })
        }
      })
    },
    
    // 舆情概览
    getYqList () {
      this.tableData6 = []
      this.$http({
        url: this.$http.adornUrl('/getYqList'),
        method: 'get',
      }).then(res => {
        if (res.data.code == '200') {
          this.tableData6 = res.data.data.map(item=>{
            return {
              title: item.newTitle,
              source: item.newSource,
              time: item.reportTime,
              color: item.levelName,
            }
          })
        }
      })
    },
    
    // 同人高频警情
    getTrGpJq () {
      this.$http({
        url: this.$http.adornUrl('/getTrGpJq?dateType=' + this.btnList[this.dateTypeBtnIdx].value),
        method: 'get',
      }).then(res => {
        if (res.data.code == '200') {
          this.getTrGpJq_7 = res.data.data
        }
      })
    },
    
    // 同地高频警情
    getTdzGpJq () {
      this.$http({
        url: this.$http.adornUrl('/getTdzGpJq?dateType=' + this.btnList[this.dateTypeBtnIdx].value),
        method: 'get',
      }).then(res => {
        if (res.data.code == '200') {
          this.getTdzGpJq_8 = res.data.data
        }
      })
    },
    
    DemoEchart() {//警情高发时段
      let dom = document.getElementById("col4_chartLine");
      let xItems = [];
      let yItems = [];
      for (let index = 0; index < 12; index++) {
        xItems.push(`${index + 1}月`);
        if (index === 5) {
          yItems.push({
            value: parseInt(Math.random() * 100),
            itemStyle: {
              color: "rgba(0, 148, 255, 1)",
            },
          });
        } else {
          yItems.push(parseInt(Math.random() * 100));
        }
      }
      let option = {
        aria: {
          enabled: true,
          decal: { show: true },
        },
        color: ["rgba(0, 148, 255, 0.40)"],
        grid: {
          top: "10%",
          left: "2%",
          right: "2%",
          bottom: "0",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: xItems,
        },
        yAxis: {
          type: "value",
          splitLine: {
            lineStyle: { color: "#F5F5F5", opacity: 0.3, type: "dashed" },
          },
        },
        series: [
          {
            data: yItems,
            type: "line",
            showBackground: true,
            smooth:'true',
            // 在这里设置线条的渐变色
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 121, 187, 0.4)' // 渐变起始颜色
                }, {
                    offset: 1,
                    color: 'rgba(0, 121, 187, 0)' // 渐变结束颜色
                }])
            }
          },
        ],
      };
      let myChart=echarts.init(dom);
      myChart.setOption(option);
      this.$http({
        url: this.$http.adornUrl('/getJqGfSd?dateType=' + this.btnList[this.dateTypeBtnIdx].value),
        method: 'get',
      }).then(res => {
        if (res.data.code == '200') {
          let obj= res.data.data;
          xItems.length=0;
          yItems.length=0;
          for(var key in obj){
            xItems.push(key);
            yItems.push(obj[key]);
          }
          option.xAxis.data=xItems;
          option.series[0].data=yItems;
          myChart.setOption(option);
        }
      })
      
    },
    
    handelMorevc1b5 () {
      this.$nextTick(() => {
        this.C1bDialogVisible = true
        let tableColumns = [
          { label: '警情名称', prop: 'name'},
          { label: '警情次数', prop: 'num'},
        ]
        this.$refs.C1bDialogRef.init(tableColumns, this.getListc_5, this.c_1_b_5TabValue)
      })
    },
    handelMorevc1b7 () {
      this.$nextTick(() => {
        this.C1bDialogVisible = true
        let tableColumns = [
          { label: '报警电话', prop: 'bjdh'},
          { label: '报警次数', prop: 'num'},
          { label: '报警总时长', prop: 'jjsc'},
        ]
        this.$refs.C1bDialogRef.init(tableColumns, this.getTrGpJq_7)
      })
    },
    handelMorevc1b8 () {
      this.$nextTick(() => {
        this.C1bDialogVisible = true
        let tableColumns = [
          { label: '报警地址', prop: 'lxdz'},
          { label: '报警次数', prop: 'num'},
        ]
        this.$refs.C1bDialogRef.init(tableColumns, this.getTdzGpJq_8)
      })
    },

  },
}
</script> 

<style lang="scss" scoped>
  .col_1_container {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    .topSearchContent {
      width: 100%;
      height: 70px;
      display: flex;
      align-items: center;
      :deep .el-date-editor.el-input {
        width: 483px;
        margin-left: 10px;
      }
      :deep .el-input__inner {
        height: 52px;
        line-height: 52px;
        background-color: #021F3C;
        font-size: 24px;
        color: #DEF0FF;
      }
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
        text-stroke: 1px rgba(171,214,255,0.5);
        text-align: center;
        padding-left: 5px;
        background: linear-gradient(90deg, #EAF5FF 0%, #72848f 100%);
        -webkit-text-stroke: 1px rgba(44, 74, 102, 0.5);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-right: 28px;
      }
      .btnClass {
        height: 34px;
        font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
        font-weight: normal;
        font-size: 24px;
        color: #00AAFF;
        line-height: 34px;
        text-align: left;
        font-style: normal;
        text-transform: none;
        padding: 8px 25px;
        background: radial-gradient( 0% 20% at 56% 57%, rgba(0,128,255,0.1) 0%, rgba(0,128,255,0.2) 100%), rgba(0,170,255,0.2);
        border-radius: 2px 2px 2px 2px;
        border: 2px solid;
        border-image: linear-gradient(360deg, rgba(0, 170, 255, 0.6), rgba(0, 170, 255, 0)) 3 3;
        margin-left: 10px;
        cursor: pointer;
      }
      .dateTypeBtnIdx {
        color: #DEF0FF;
        background: #00AAFF;
      }
    }
    .c_1_b_1 { 
      width: calc(32% - 10px);
      height: calc(27% - 10px);
      margin-right: 10px;
      flex-shrink: 0;
      .toVerview {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        .total {
          width: 63%;
          height: 100%;
          background: url("@/assets/images/layout/Police_S_Total.png")no-repeat center;
          background-size: 150% 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          p {
            padding: 0;
            margin: 0;
            font-weight: bold;
            font-size: 52px;
            text-shadow: 0px 4px 4px rgba(0,0,0,0.25);
            text-align: center;
            background: linear-gradient(180deg, #006FD0 0%, #FFFFFF 50%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          p:nth-child(1) {
            background: linear-gradient(180deg, #FFFFFF 50%, #006FD0 100% );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-top: 18px;
            height: 40px;
            line-height: 40px;
            padding-left: 5px;
          }
          p:nth-child(2) {
            font-size: 28px;
            height: 40px;
            font-family: "AlibabaPuHuiTi-2-65-Medium"; 
          }
        }
        .overview {
          width: 37%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .year_on_year {
            display: flex;
            align-items: center;
            .text {
              font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
              font-weight: normal;
              font-size: 22px;
              color: #E8F0FF;
              line-height: 28px;
              text-align: left;
              font-style: normal;
              text-transform: none;
              margin-right: 10px;
            }
            .rate {
              font-family: YouSheBiaoTiHei, YouSheBiaoTiHei;
              font-weight: 800;
              font-size: 24px;
              color: #32D74B;
              line-height: 28px;
              text-align: left;
              font-style: normal;
              text-transform: none;
              margin-right: 5px;
              span {
                font-size: 16px;
                font-weight: normal;
              }
            }
            img {
              width: 17.5px;
              height: 14px;
            }
          } 
          .month_on_month {
            .rate {
              color: #FF9900;
            }
            img {
              width: 17.5px;
              height: 14px;
            }
          }
        }
      }
    }
    .c_1_b_2 {
      width: calc(68% - 10px);
      height: calc(27% - 10px);
      margin-left: 10px;
      flex-shrink: 0; 
      .type6Box { 
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: space-between;
        .type6Item { 
          width: 15%;
          height: 100%;
          display: flex;
          align-items: center;
          :deep .el-progress--circle .el-progress__text {
            font-size: 16px !important;
            color: #FFF !important;
          }
          .type6Info {
            height: 80%;
            width: 80%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-left: 10px;
            p:nth-child(1) {
              height: 16px;
              font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
              font-weight: normal;
              font-size: 18px;
              color: #00AAFF;
              line-height: 16px;
              text-align: left;
              font-style: normal;
              text-transform: none;
            }
            p:nth-child(2) {
              height: 16px;
              font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
              font-weight: normal;
              font-size: 18px;
              color: #FFFFFF;
              line-height: 16px;
              text-align: left;
              font-style: normal;
              text-transform: none;
            }
          }
        }
        .type6Item:nth-child(2){
          .type6Info {
            p:nth-child(1) {
              color: #00EAFF;
            }
          }
        }
        .type6Item:nth-child(3){
          .type6Info {
            p:nth-child(1) {
              color: #FF9900;
            }
          }
        }
        .type6Item:nth-child(4){
          .type6Info {
            p:nth-child(1) {
              color: #00CC03;
            }
          }
        }
        .type6Item:nth-child(5){
          .type6Info {
            p:nth-child(1) {
              color: #743ED4;
            }
          }
        }
        .type6Item:nth-child(6){
          .type6Info {
            p:nth-child(1) {
              color: #00AAFF;
            }
          }
        }
      }
      .type5Box {
        width: 100%;
        height: 46%;
        display: flex;
        justify-content: space-between;
        margin-top: 15px;
        .type5Item {
          width: 18%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-around;
          background: url("@/assets/images/layout/Frame10672_1@2x.png")no-repeat center;
          background-size: 100% 100%;
          :deep .el-progress--circle .el-progress__text {
            font-size: 16px !important;
            color: #FFF !important;
          }
          .type5Info {
            p:nth-child(1) {
              height: 16px;
              font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
              font-weight: normal;
              font-size: 18px;
              color: #FFFFFF;
              line-height: 16px;
              text-align: center;
              font-style: normal;
              text-transform: none;
              margin-top: 5px;
            }
            p:nth-child(2) {
              height: 16px;
              font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
              font-weight: normal;
              font-size: 18px;
              color: #00AAFF;
              line-height: 16px;
              text-align: center;
              font-style: normal;
              text-transform: none;
              margin-top: 20px;
            }
          }
        }
        .type5Item:nth-child(2) {
          background: url("@/assets/images/layout/Frame10672_2@2x.png")no-repeat center;
          background-size: 100% 100%;
          .type5Info {
            p:nth-child(2) {
              color: #F0F50F;
            }
          }
        }
        .type5Item:nth-child(3) {
          background: url("@/assets/images/layout/Frame10672_3@2x.png")no-repeat center;
          background-size: 100% 100%;
          .type5Info {
            p:nth-child(2) {
              color: #7B3DEA;
            }
          }
        }
        .type5Item:nth-child(4) {
          background: url("@/assets/images/layout/Frame10672_4@2x.png")no-repeat center;
          background-size: 100% 100%;
          .type5Info {
            p:nth-child(2) {
              color: #4080FF;
            }
          }
        }
        .type5Item:nth-child(5) {
          background: url("@/assets/images/layout/Frame10672_5@2x.png")no-repeat center;
          background-size: 100% 100%;
          .type5Info {
            p:nth-child(2) {
              color: #00EAFF;
            }
          }
        }
      }
      .type6TbHbBox { 
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: space-between;
        .type6Item { 
          width: 15%;
          height: 100%;
          display: flex;
          align-items: center;
          .name {
            width: 36%;
            color: #fff;
          }
          :deep .el-progress--circle .el-progress__text {
            font-size: 16px !important;
            color: #FFF !important;
          }
          .type6Info {
            height: 82%;
            width: 60%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-left: 10px;
            .text_tb {
              height: 16px;
              font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
              font-weight: normal;
              font-size: 16px;
              color: #00AAFF;
              line-height: 16px;
              text-align: left;
              font-style: normal;
              text-transform: none;
              margin-bottom: 3px;
            }
            .text_hb {
              height: 16px;
              font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
              font-weight: normal;
              font-size: 16px;
              color: #00AAFF;
              line-height: 16px;
              text-align: left;
              font-style: normal;
              text-transform: none;
              margin-top: 8px;
              margin-bottom: 3px;
            }
          }
        }
        .type6Item:nth-child(2){
          .type6Info {
            .text_tb, .text_hb {
              color: #00EAFF;
            }
          }
        }
        .type6Item:nth-child(3){
          .type6Info {
            .text_tb, .text_hb {
              color: #FF9900;
            }
          }
        }
        .type6Item:nth-child(4){
          .type6Info {
            .text_tb, .text_hb {
              color: #00CC03;
            }
          }
        }
        .type6Item:nth-child(5){
          .type6Info {
            .text_tb, .text_hb {
              color: #743ED4;
            }
          }
        }
        .type6Item:nth-child(6){
          .type6Info {
            .text_tb, .text_hb {
              color: #00AAFF;
            }
          }
        }
      }
      .type5TbHbBox {
        width: 100%;
        height: 46%;
        display: flex;
        justify-content: space-between;
        margin-top: 15px;
        .type5Item {
          width: 18%;
          height: 100%; 
          display: flex;
          align-items: center;
          justify-content: space-around;
          background: url("@/assets/images/layout/Frame10672_1@2x.png")no-repeat center;
          background-size: 100% 100%;
          .name {
            width: 38%;
            color: #fff;
            padding-left: 10px;
          }
          :deep .el-progress--circle .el-progress__text {
            font-size: 16px !important;
            color: #FFF !important;
          } 
          .type5Info {
            height: 80%;
            width: 60%;
            .text_tb {
              height: 16px;
              font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
              font-weight: normal;
              font-size: 16px;
              color: #00AAFF;
              line-height: 16px;
              text-align: left;
              font-style: normal;
              text-transform: none;
              margin-bottom: 3px;
            }
            .text_hb {
              height: 16px;
              font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
              font-weight: normal;
              font-size: 16px;
              color: #00AAFF;
              line-height: 16px;
              text-align: left;
              font-style: normal;
              text-transform: none;
              margin-top: 3px;
            }
          }
        }
        .type5Item:nth-child(2) {
          background: url("@/assets/images/layout/Frame10672_2@2x.png")no-repeat center;
          background-size: 100% 100%;
          .type5Info {
            .text_tb, .text_hb {
              color: #F0F50F;
            }
          }
        }
        .type5Item:nth-child(3) {
          background: url("@/assets/images/layout/Frame10672_3@2x.png")no-repeat center;
          background-size: 100% 100%;
          .type5Info {
            .text_tb, .text_hb {
              color: #7B3DEA;
            }
          }
        }
        .type5Item:nth-child(4) {
          background: url("@/assets/images/layout/Frame10672_4@2x.png")no-repeat center;
          background-size: 100% 100%;
          .type5Info {
            .text_tb, .text_hb {
              color: #4080FF;
            }
          }
        }
        .type5Item:nth-child(5) {
          background: url("@/assets/images/layout/Frame10672_5@2x.png")no-repeat center;
          background-size: 100% 100%;
          .type5Info {
            .text_tb, .text_hb {
              color: #00EAFF;
            }
          }
        }
      }
    }
    .c_1_b_3, .c_1_b_4, .c_1_b_5 {
      width: calc(32% - 10px);
      height: calc(30% - 10px);
      margin-top: 24px;
      margin-right: 24px;
      flex-shrink: 0;
      .echarts_demo {
        width: 100%;
        height: 100%;
      }
    }
    .c_1_b_3 { 
      :deep .el-carousel__indicator--horizontal {
        display: none;
      }
      :deep ::-webkit-scrollbar {
        width: 0px;
      }
      .c_1_b_3_box {
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        overflow: auto;
        overflow: hidden;
        .b_3region {
          width: 49%;
          height: 23%;
          background: url("@/assets/images/layout/Frame427319069@2x.png")no-repeat center;
          background-size: 100% 100%;
          display: flex;
          align-items: center;
          .index {
            width: 39px;
            height: 39px;
            background: url("@/assets/images/layout/regionIndexBgMor.png")no-repeat;
            background-size: 100% 100%;
            font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
            font-weight: normal;
            font-size: 22px;
            color: #00AAFF;
            line-height: 39px;
            text-align: center;
            font-style: normal;
            text-transform: none;
            margin-left: 6px;
          }
          .regionInfo {
            width: 90%;
            padding: 8px;
            .name {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-between;
              height: 22px;
              font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
              font-weight: normal;
              font-size: 20px;
              color: #00AAFF;
              line-height: 22px;
              text-align: left;
              font-style: normal;
              text-transform: none;
              padding-top: 5px;
              span:nth-child(1) {
                width: 80%;
                white-space: nowrap;  
                overflow: hidden;  
                text-overflow: ellipsis;  
              }
              span:nth-child(2) {
                font-size: 22px;
                text-align: right;
              }
            }
            .rate {
              display: flex;
              justify-content: space-between;
              height: 22px;
              font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
              font-weight: normal;
              font-size: 16px;
              color: #FFFFFF;
              line-height: 22px;
              text-align: left;
              font-style: normal;
              text-transform: none;
              // margin-top: 8px;
              .rate_with, .rate_ring {
                display: flex;
                align-items: center;
                justify-content: space-between;
                .text {
                  width: 32px;
                }
                .img {
                  width: 8px;
                  height: 16px;
                }
              }
              .rate_with { 
                span:nth-child(2) {
                  color: #32D74B;
                  padding-left: 10px;
                }
              }
              .rate_ring {
                span:nth-child(2) {
                  color: #FF9900;
                  padding-left: 10px;
                }
              }
            }
          }
        } 
        .b_3region:nth-child(1) {
          .index {
            color: #FF9900;
            background: url("@/assets/images/layout/regionIndexBg1.png")no-repeat;
          }
        }
        .b_3region:nth-child(2) {
          .index {
            color: #FFFFFF;
            background: url("@/assets/images/layout/regionIndexBg2.png")no-repeat;
            background-size: 100% 100%;
          }
        }
        .b_3region:nth-child(3) {
          .index {
            color: #BD6D41;
            background: url("@/assets/images/layout/regionIndexBg3.png")no-repeat;
            background-size: 100% 100%;
          }
        }
      }
    }
    .c_1_b_5 {
      width: calc(33%);
      margin-right: 0px;
      background: url("@/assets/images/layout/Frame1321315436@2x.png")no-repeat center;
      background-size: 100% 85%;
      background-position: 0 30px;
      position: relative;
      .hot {
        width: 39px;
        height: 31px;
        font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
        font-weight: normal;
        font-size: 20px;
        color: #D8D8D8;
        line-height: 30px;
        text-align: left;
        font-style: normal;
        text-transform: none;
        position: absolute;
        top: 42%;
        left: 48%;
      }
      .name {
        width: 180px;
        font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
        font-weight: normal;
        font-size: 18px;
        color: #00AAFF;
        text-align: center;
        font-style: normal;
        text-transform: none;
        background: linear-gradient( 347deg, rgba(0,170,255,0.2) 0%, rgba(0,170,255,0.6) 100%);
        border-radius: 20px;
        border: 1px solid rgba(0,170,255,0.3);
        padding: 5px;
        position: absolute;
      }
      div:nth-child(2) {
        width: 230px;
        top: 25%;
        left: 20%;
        font-size: 15px;
        color: red;
        background: rgba(243, 41, 14, 0.4);
        border: 1px solid rgba(252, 94, 3, 0.9);
      }
      div:nth-child(3) {
        width: 200px;
        top: 50%;
        left: 37%;
        font-size: 15px;
        color: #FF8435;
        background: rgba(243, 41, 14, 0.4);
        border: 1px solid rgba(243, 41, 14, 0.6);
      }
      div:nth-child(4) {
        width: 220px;
        top: 3%;
        left: 10%;
        font-size: 14px;
        color: #FFBD35;
        background: rgba(197, 34, 13, 0.3);
        border: 1px solid rgba(243, 41, 14, 0.4);
      }
      div:nth-child(5) { 
        width: 200px;
        top: 7%;
        left: 47%;
        font-size: 14px;
        color: #EBFF02;
        background: linear-gradient( 327deg, rgba(211, 129, 6, 0.2) 0%, rgba(255,153,0,0.6) 100%);
        border: 1px solid rgba(255,153,0,0.9);
      }
      div:nth-child(6) {
      width: 200px;
        top: 28%;
        left: 59%;
        font-size: 13px;
        color: #ebd10e;
        background: linear-gradient( 360deg, rgba(255,153,0,0.6) 0%, rgba(255,153,0,0.1) 100%);
        border: 1px solid rgba(255,153,0,0.9);
      }
      div:nth-child(7) {
        top: 72%;
        left: 25%;
        font-size: 15px;
        color: #80c21e;
        background: linear-gradient( 360deg, rgba(44, 241, 5, 0.1) 0%, rgba(135, 190, 4, 0.6) 80%);
        border: 1px solid rgba(30, 248, 11, 0.9);
      }
      div:nth-child(8) {
        width: 150px;
        top: 50%;
        left: 70%;
        font-size: 13px;
        color: #00EAFF; 
        background: linear-gradient( 347deg, rgba(0,234,255,0.2) 0%, rgba(5, 165, 228, 0.6) 100%);
        border: 1px solid rgba(0, 119, 255, 0.9);
      }
      div:nth-child(9) {
        width: 150px;
        top: 60%;
        left: 1%;
        font-size: 13px;
        color: #90e4f3;
        background: linear-gradient( 347deg, rgba(0,234,255,0.1) 0%, rgba(18, 160, 173, 0.4) 100%);
        border: 1px solid rgba(0,234,255,0.9);
      }
      div:nth-child(10) {
        width: 120px;
        top: 75%;
        left: 75%;
        font-size: 13px;
        color: #11c7d8;
        background: linear-gradient( 347deg, rgba(0,234,255,0.2) 0%, rgba(0,234,255,0.6) 100%);
        border: 1px solid rgba(0,234,255,0.9);
      }
      div:nth-child(11) {
        width: 120px;
        top: 7%;
        left: 78%;
        font-size: 13px;
        color: #0976b9;
        background: linear-gradient( 347deg, rgba(32, 97, 129, 0.1) 0%, rgba(6, 122, 180, 0.3) 100%);
        border: 1px solid rgba(3,41,68,0.3);
      }
      div:nth-child(12) {
        width: 120px;
        top: 35%;
        left: 2%;
        font-size: 12px;
        color: #10547e;
        background: linear-gradient( 347deg, rgba(32, 97, 129, 0.1) 0%, rgba(6, 122, 180, 0.2) 100%);
        border: 1px solid rgba(12, 74, 119, 0.3);
      }
    }
    .c_1_b_6, .c_1_b_7, .c_1_b_8 {
      width: calc(32% - 10px);
      height: calc(33% - 10px);
      margin-right: 24px;
      margin-top: 24px;
      flex-shrink: 0;
      overflow: hidden;
    }
    .c_1_b_6 {
      .tableBody {
        width: 100%;
        .tableItem {
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center; 
            .color {
              width: 12px;
              height: 12px;
              margin-left: 5px;
              background: #0E96FF;
              border-radius: 50%;
            }
            .activeColor_blue {
              background: #0E96FF;
            }
            .activeColor_orange{
              background: rgb(247, 141, 3);
            }
            .activeColor_red {
              background: red;
            }
            .activeColor_yellow {
              background: yellow;
            } 
            .name, .type, .date {
              width: 48px;
              height: 40px;
              font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
              font-weight: normal;
              font-size: 18px;
              color: rgba(255,255,255,0.87);
              line-height: 40px;
              text-align: left;
              background: none;
              white-space: nowrap;  
              overflow: hidden;  
              text-overflow: ellipsis;  
              cursor: pointer; 
            }  
            .name {
              width: 62%;
              padding-left: 10px;
            }
            .type {
              width: 17%;
              height: 30px;
              line-height: 30px;
              color: #00EAFF;
              text-align: center;
              background: rgba(0,234,255,0.25);
              border-radius: 2px 2px 2px 2px;
            }
            .date {
              width: 30%;
              padding-left: 20px;
            }
        }
        div:nth-child(odd) {
          background: rgba(0,145,255,0.15);
        }
      }
    }
    .c_1_b_7 {
      width: calc(33% - 10px);
      .tableHeader {
        height: 40px;
        background: linear-gradient(90deg, rgb(5, 48, 77) 0%, #0d405e 50%, #032033 100%);
        background-size: 100% 100%;
        display: inline-block;
        display: flex;
        align-items: center;
        p {
            height: 22px;
            font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
            font-weight: normal;
            display: flex;
            font-size: 20px;
            color: #009CFF;
            line-height: 22px;
        }
        p:nth-child(1) {
          flex: 1;
          display: flex;
          justify-content: center;
        }
        p:nth-child(2) {
          flex: 3;
          padding-left: 10px;
        }
        p:nth-child(3) {
          flex: 2;
          display: flex;
          justify-content: center;
        }
        p:nth-child(4) {
          flex: 3;
          display: flex;
          justify-content: center;
        }
      }
      .tableBody {
        height: 190px;
        overflow: auto;
        .tableItem {
            height: 40px;
            display: flex;
            align-items: center; 
            .indexs {
              color: rgba(255,255,255,0.87); 
              text-align: center;
              height: 30px;
              line-height: 30px;
              background: rgba(0,170,255,0.1);
              border-radius: 0px 0px 0px 0px;
              border: 2px dotted rgba(0,234,255,0.4);
            }
            .name, .date {
              width: 48px;
              height: 40px;
              font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
              font-weight: normal;
              font-size: 18px;
              color: rgba(255,255,255,0.87);
              line-height: 40px;
              text-align: left;
              background: none;
              white-space: nowrap;  
              overflow: hidden;  
              text-overflow: ellipsis;  
              cursor: pointer; 
            } 
            div:nth-child(1) {
              flex: 1;
            }
            div:nth-child(2) {
              flex: 3;
              padding-left: 10px;
            }
            div:nth-child(3) {
              flex: 2;
              color: #FF9900;
              text-align: center;
            }
            div:nth-child(4) {
              flex: 3;
              text-align: center;
            }
        }
        div:nth-child(even) {
          background: rgba(0,145,255,0.15);
        }
      }
    }
    .c_1_b_8 {
      width: calc(33% - 10px);
      margin-right: 0px;
      .tableHeader {
        width: 100%;
        height: 40px;
        background: linear-gradient(90deg, rgb(5, 48, 77) 0%, #2a6468 50%, #032033 100%);
        display: inline-block;
        display: flex;
        align-items: center;
        p {
            height: 22px;
            font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
            font-weight: normal;
            display: flex;
            font-size: 20px;
            color: #00EAFF;
            line-height: 22px;
        }
        p:nth-child(1) {
          flex: 0.6; 
          display: flex;
          justify-content: center;
        }
        p:nth-child(2) {
          flex: 3;
          padding-left: 10px;
        }
        p:nth-child(3) {
          flex: 2;
          display: flex;
          justify-content: center;
        }
      }
      .tableBody {
        width: 100%;
        height: 190px;
        overflow: auto;
        .tableItem {
            height: 40px;
            display: flex;
            align-items: center; 
            margin: 3px 0;
            .indexs {
              color: rgba(255,255,255,0.87); 
              text-align: center;
              height: 30px;
              line-height: 30px;
              background: rgba(0,234,255,0.1);
              border-radius: 0px 0px 0px 0px;
              border: 2px dotted rgba(0,234,255,0.4);
              font-size: 18px;
            }
            .name, .date {
                height: 40px;
                font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
                font-weight: normal;
                font-size: 18px;
                color: rgba(255,255,255,0.87);
                line-height: 40px;
                text-align: left;
                background: none;
                white-space: nowrap;  
                overflow: hidden;  
                text-overflow: ellipsis;  
                cursor: pointer; 
            } 
            div:nth-child(1) {
              flex: 0.6;
            }
            div:nth-child(2) {
              flex: 3;
              padding-left: 10px;
            }
            div:nth-child(3) {
              flex: 2;
              text-align: center;
              color: #00EAFF;
            }
        }
        div:nth-child(even) {
          background: rgba(82,249,255,0.2);
        }
        div:nth-child(odd) {
          background: rgba(82,249,255,0.1);
        }
      }
    }
    .seamless-warp {
      height: 229px;
      overflow: hidden;
      -webkit-backface-visibility: hidden;
      -moz-backface-visibility: hidden;
      -ms-backface-visibility: hidden;
      backface-visibility: hidden;
      -webkit-perspective: 1000;
      -moz-perspective: 1000;
      -ms-perspective: 1000;
      perspective: 1000; /* Other transform properties here */
    }
  }
</style>
  