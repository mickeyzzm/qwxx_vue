<template>
  <PageColumnVue class="col_4_container" :width="10">
    <div class="be_on_duty">
      <div
        @click="handelBeOnDutyBtn('1')"
        :class="{ be_on_duty_btn_active: beOnDutyBtnActive == '1' }"
        class="be_on_duty_btn"
      >
        今日值班信息
      </div>
      <div
        @click="handelBeOnDutyBtn('2')"
        :class="{ be_on_duty_btn_active: beOnDutyBtnActive == '2' }"
        class="be_on_duty_btn"
      >
        明日值班计划
      </div>
    </div>
    <SubHeaderVue title="市局值班" style="margin-top: 10px" />
    <div class="cityPeopleInfoBox">
      <div
        v-for="(item, index) in pbldList1"
        :key="index"
        class="cityPeopleInfos"
      >
        <img v-if="item.zp" class="img" :src="'/qwxx' + item.zp" alt="" />
        <img
          v-if="!item.zp"
          class="img"
          src="/qwxx/img/defaultAvatar.jpg"
          alt=""
        />
        <div class="infoItem">
          <div class="text">主班局领导</div>
          <div class="name">{{ item.xm || "无" }}</div>
          <div class="tel">{{ item.lxdh || "无" }}</div>
        </div>
      </div>
      <div
        v-for="(item, index) in pbldList2"
        :key="index"
        class="cityPeopleInfos"
      >
        <img v-if="item.zp" class="img" :src="'/qwxx' + item.zp" alt="" />
        <img
          v-if="!item.zp"
          class="img"
          src="/qwxx/img/defaultAvatar.jpg"
          alt=""
        />
        <div class="infoItem">
          <div class="text">副班局领导</div>
          <div class="name">{{ item.xm || "无" }}</div>
          <div class="tel">{{ item.lxdh || "无" }}</div>
        </div>
      </div>
      <div
        v-for="(item, index) in pbldList3"
        :key="index"
        class="cityPeopleInfos"
      >
        <img v-if="item.zp" class="img" :src="'/qwxx' + item.zp" alt="" />
        <img
          v-if="!item.zp"
          class="img"
          src="/qwxx/img/defaultAvatar.jpg"
          alt=""
        />
        <div class="infoItem">
          <div class="text">勤务指挥长</div>
          <div class="name">{{ item.xm || "无" }}</div>
          <div class="tel">{{ item.lxdh || "无" }}</div>
        </div>
      </div>
      <div
        v-for="(item, index) in pbldList4"
        :key="index"
        class="cityPeopleInfos"
      >
        <img v-if="item.zp" class="img" :src="'/qwxx' + item.zp" alt="" />
        <img
          v-if="!item.zp"
          class="img"
          src="/qwxx/img/defaultAvatar.jpg"
          alt=""
        />
        <div class="infoItem">
          <div class="text">专职指挥长</div>
          <div class="name">{{ item.xm || "无" }}</div>
          <div class="tel">{{ item.lxdh || "无" }}</div>
        </div>
      </div>
    </div>
    <SubHeaderVue title="县市区值班" style="margin-top: 10px" />
    <div class="policeSituation">
      <div class="tHeader">
        <p>区县</p>
        <p>主班</p>
        <p>副班</p>
      </div>
      <!-- <vue-seamless-scroll v-if="getSqxList.length > 0" :data="getSqxList" :class-option="scrollOption" class="seamless_regionBox_warp"> -->
      <div class="regionBox">
        <div v-for="(item, index) in getSqxList" :key="index" class="region">
          <div class="regionNm">{{ item.bmmc }}</div>
          <div class="director">
            <img v-if="item.zp" class="img" :src="'/qwxx' + item.zp" alt="" />
            <!-- 内网路径 -->
            <img
              v-if="!item.zp"
              class="img"
              src="/qwxx/img/defaultAvatar.jpg"
              alt=""
            />
            <div class="info">
              <p>{{ item.xm || "无" }}</p>
              <p>{{ item.lxdh || "无" }}</p>
            </div>
          </div>
          <div class="deputyClass">
            <img
              v-if="item.zpSub"
              class="img"
              :src="'/qwxx' + item.zpSub"
              alt=""
            />
            <img
              v-if="!item.zpSub"
              class="img"
              src="/qwxx/img/defaultAvatar.jpg"
              alt=""
            />
            <div class="info">
              <p>{{ item.xmSub || "无" }}</p>
              <p>{{ item.lxdhSub || "无" }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- </vue-seamless-scroll> -->
    </div>
    <div class="matterBox">
      <div
        @click="handelmatterBtn('1')"
        :class="{ matter_active: matterBtnActive == '1' }"
        class="matterBtn"
      >
        重要事项
      </div>
      <div
        @click="handelmatterBtn('2')"
        :class="{ matter_active: matterBtnActive == '2' }"
        class="matterBtn"
      >
        公安黄历
      </div>
    </div>
    <!-- 重要事项 -->
    <div v-if="matterBtnActive == '1'" class="tableBox">
      <div class="tableHeader">
        <p>序号</p>
        <p>事项名称</p>
        <p>发布时间</p>
      </div>
      <vue-seamless-scroll
        :data="tableData"
        :class-option="scrollOption"
        class="seamless-warp"
      >
        <div class="tableBody">
          <div
            v-for="(item, index) in tableData"
            :key="index"
            class="tableItem"
            :title="item.content"
          >
            <div class="indexs">{{ index + 1 }}</div>
            <div class="name">{{ item.title }}</div>
            <div class="date">{{ item.pubTime }}</div>
          </div>
        </div>
      </vue-seamless-scroll>
    </div>
    <!-- 公安黄历 -->
    <div v-if="matterBtnActive == '2'" class="almanacBox">
      <el-calendar v-model="calendarValue" @input="handleMonthChange">
        <template slot="dateCell" slot-scope="{ date, data }">
          <div class="dateBox">
            <p v-if="data.type === 'current-month'" class="dateNm">
              {{ new Number(data.day.split("-").slice(2)[0]) }}
            </p>
            <p
              v-if="data.type === 'current-month'"
              class="dateTitle"
              :title="handelTitle(parseInt(data.day.split('-').slice(2)[0]),parseInt(data.day.split('-').slice(1)[0]))"
            >
              {{ handelTitle(parseInt(data.day.split("-").slice(2)[0]),parseInt(data.day.split("-").slice(1)[0])) }}
            </p>
          </div>
        </template>
      </el-calendar>
    </div>
  </PageColumnVue>
</template>
<script>
import PageColumnVue from "@/components/layout/PageColumn";
import SubHeaderVue from "@/components/layout/SubHeader";
import { RingChart } from "@/utils/RingChart";
export default {
  name: "Column4Com",
  components: {
    PageColumnVue,
    SubHeaderVue,
  },
  data() {
    return {
      pbldList1: [{ xm: "无", lxdh: "无", zp: "" }],
      pbldList2: [{ xm: "无", lxdh: "无", zp: "" }],
      pbldList3: [{ xm: "无", lxdh: "无", zp: "" }],
      pbldList4: [{ xm: "无", lxdh: "无", zp: "" }],
      getSqxList: [],
      getSqxResList: [
        {
          gwmc: "分局主班领导",
          bmmc: "双桥",
          xm: "刘天1",
          lxdh: "13714985319",
          zp: "",
        },
        {
          gwmc: "分局副班领导",
          bmmc: "双桥",
          xm: "刘浩11",
          lxdh: "15714671819",
          zp: "",
        },
        {
          gwmc: "分局主班领导",
          bmmc: "双滦",
          xm: "刘天2",
          lxdh: "13714985319",
          zp: "",
        },
        {
          gwmc: "分局副班领导",
          bmmc: "双滦",
          xm: "刘浩22",
          lxdh: "15714671819",
          zp: "",
        },
        {
          gwmc: "分局主班领导",
          bmmc: "营子",
          xm: "刘天3",
          lxdh: "13714985319",
          zp: "",
        },
        {
          gwmc: "分局副班领导",
          bmmc: "营子",
          xm: "刘浩33",
          lxdh: "15714671819",
          zp: "",
        },
      ],
      dayList: [
        { hlDate: "3", hlMonth: "9", title: "中国1公安局" },
        { hlDate: "4", hlMonth: "9", title: "中国2公安局" },
        { hlDate: "13", hlMonth: "9", title: "中国3公安局" },
      ],
      dayMap: new Map(),
      syMap: new Map(),
      byMap: new Map(),
      xyMap: new Map(),
      calendarValue: new Date(),
      Tab1Value: "标题二",
      beOnDutyBtnActive: "1",
      matterBtnActive: "1",
      scrollOption: {
        step: 0.3, // 数字越大，滚动越慢
      },
      tableData: [
        {
          title: "重要事项名称重要事项名称名称",
          pubTime: "2024-08-22 14:21:21",
          content: "测试",
        },
        {
          title: "重要事项名称重要事项名称名称",
          pubTime: "2024-08-22 14:21:21",
          content: "测试",
        },
        {
          title: "重要事项名称重要事项名称名称",
          pubTime: "2024-08-22 14:21:21",
          content: "测试",
        },
        {
          title: "重要事项名称重要事项名称名称",
          pubTime: "2024-08-22 14:21:21",
          content: "测试",
        },
        {
          title: "重要事项名称重要事项名称名称",
          pubTime: "2024-08-22 14:21:21",
          content: "测试",
        },
        {
          title: "重要事项名称重要事项名称名称",
          pubTime: "2024-08-22 14:21:21",
          content: "测试",
        },
        {
          title: "重要事项名称重要事项名称名称",
          pubTime: "2024-08-22 14:21:21",
          content: "测试",
        },
        {
          title: "重要事项名称重要事项名称名称",
          pubTime: "2024-08-22 14:21:21",
          content: "测试",
        },
      ],
    };
  },
  created() {},
  mounted() {
    this.getLdpb();
    this.getZysx();
    let date=new Date();
    this.syMap=this.getGaHl(date.getMonth());
    this.byMap=this.getGaHl();
    this.xyMap=this.getGaHl(date.getMonth()+2);
    this.dayMap=this.byMap;
    // console.log(this.syMap,this.byMap,this.xyMap);
  },
  methods: {
    getLdpb() {
      let arr = [
        "双桥",
        "双滦",
        "营子",
        "高新",
        "普宁",
        "御道口",
        "承德县",
        "兴隆",
        "平泉",
        "滦平",
        "隆化",
        "丰宁",
        "宽城",
        "围场",
        "钢城",
      ];
      // 静态数据
      // for(let i=0; i<arr.length; i++) {
      //   this.mergedObject(arr[i], this.getSqxResList)
      // }
      this.$http({
        url: this.$http.adornUrl("/getLdpb"),
        method: "get",
      }).then((res) => {
        if (res.data.code == "200") {
          let resList =
            this.beOnDutyBtnActive == "1" ? res.data.today : res.data.tomorrow;
          this.pbldList1 =
            resList.filter((item) => item.gwmc == "主班局领导").length == 0
              ? [{ xm: "无", lxdh: "无", zp: "" }]
              : resList.filter((item) => item.gwmc == "主班局领导");
          this.pbldList2 =
            resList.filter((item) => item.gwmc == "副班局领导").length == 0
              ? [{ xm: "无", lxdh: "无", zp: "" }]
              : resList.filter((item) => item.gwmc == "副班局领导");
          this.pbldList3 =
            resList.filter((item) => item.gwmc == "主班指挥长").length == 0
              ? [{ xm: "无", lxdh: "无", zp: "" }]
              : resList.filter((item) => item.gwmc == "主班指挥长");
          this.pbldList4 =
            resList.filter((item) => item.gwmc == "副班指挥长").length == 0
              ? [{ xm: "无", lxdh: "无", zp: "" }]
              : resList.filter((item) => item.gwmc == "副班指挥长");
          for (let i = 0; i < arr.length; i++) {
            this.mergedObject(arr[i], resList);
          }
        }
      });
    },
    mergedObject(bmName, resList) {
      let obj1 = resList.filter(
        (i) => i.bmmc == bmName && i.gwmc == "分局主班领导"
      )[0];
      let obj2 = resList
        .filter((i) => i.bmmc == bmName && i.gwmc == "分局副班领导")
        .map((item) => {
          return {
            xmSub: item.gwmc == "分局副班领导" ? item.xm : "",
            zpSub: item.gwmc == "分局副班领导" ? item.zp : "",
            lxdhSub: item.gwmc == "分局副班领导" ? item.lxdh : "",
          };
        })[0];
      let mergeBoj = Object.assign({}, obj1, obj2);
      this.getSqxList.push(mergeBoj);
    },
    getZysx() {
      this.$http({
        url: this.$http.adornUrl("/getZysx"),
        method: "get",
      }).then((res) => {
        if (res.data.code == "200") {
          this.tableData = res.data.data;
        }
      });
    },
    getGaHl(month) {
      let map=new Map();
      let geturl = "/getGaHl";
      if (month) {
        geturl = geturl + "?mon=" + month;
      }
      this.$http({
        url: this.$http.adornUrl(geturl),
        method: "get",
      }).then((res) => {
        if (res.data.code == "200") {
          var data = res.data.data;
          for (let i = 0; i < data.length; i++) {
            if (data[i]) {
              map.set(
                parseInt(data[i].hlDate),
                data[i].title
              );
            }
          }
          //console.log(this.dayList);
        }
      });
     console.log("黄历查询的月份",month,map);
      return map;
    },
    handelTitle(day,month) {
      // let month = date.day.split('-').slice(1)[0]
      // let day = date.day.split('-').slice(2)[0]
      // let title = null
      // console.log("返回日期数据",this.dayList);
      // for(let i = 0; i<this.dayList.length; i++) {
      //   // console.log("处理日历数据",this.dayList[i].hlMonth,this.dayList[i].day);
      //   if (this.dayList[i]!=null&&day === parseInt(this.dayList[i].hlDate)) {
      //     title = this.dayList[i].title
      //   }
      // }
      // console.log(day,this.dayMap.get(day));
      let datetype='';
      if(month){
        let date=new Date();
        let mon=date.getMonth()+1;
        if(month<mon){
          datetype='prev-month'
        }else if(month>mon){
          datetype='next-month';
        }else{
          datetype='current-month'
        }
      }else{
        return
      }
      // console.log("当前类型",datetype,"月份",month);
      if(datetype==='current-month'){
        return this.byMap.get(day);
      }
      if(datetype==='prev-month'){
        return this.syMap.get(day);
      }
      if(datetype==='next-month'){
        return this.xyMap.get(day);
      }
      // return this.dayMap.get(day);
    },
    handleMonthChange(date) {
      console.log("黄历日期", date);
      var d=new Date();
      // var currentMonth=d.getMonth()+1;
      //  var month=date.getMonth()+1;
      //  if(month<currentMonth){
      //   this.dayMap=this.syMap
      //  }else if(month>currentMonth){
      //   this.dayMap=this.xyMap
      //  }else{
      //   this.dayMap=this.byMap
      //  }
          //  this.map=new Map();
        //this.getGaHl(month);
    },
    // 检查字符串的第一位是否为零，并且如果是，则移除
    removeLeadingZero(str) {
      return str.replace(/^0+/, "");
    },
    handelBeOnDutyBtn(tab) {
      this.beOnDutyBtnActive = tab;
      this.getLdpb();
    },
    handelmatterBtn(tab) {
      this.matterBtnActive = tab;
      if(tab==='2'){
        this.handleBtn()
      }
    },
    handleBtn() {
        // console.log("执行nextTick");
        // // 点击上个月
        // let prevBtn = document.querySelector(
        //   ".el-calendar__button-group .el-button-group>button:nth-child(1)"
        // );
        // prevBtn.addEventListener("click", (e) => {
        //    this.dayMap=this.syMap;
        //   //  this.dateFormat('YYYY-mm-dd',this.valueData)
        // });
        // // 点击今天
        // let currBtn = document.querySelector(
        //   ".el-calendar__button-group .el-button-group>button:nth-child(2)"
        // );
        // currBtn.addEventListener("click", (e) => {
        //   this.dayMap=this.byMap
        // });
        // // 点击下个月
        // let nextBtn = document.querySelector(
        //   ".el-calendar__button-group .el-button-group>button:nth-child(3)"
        // );
        // nextBtn.addEventListener("click", (e) => {
        //   this.dayMap=this.xyMap;
        //   //  this.dateFormat('YYYY-mm-dd',this.valueData)
        // });
    },
  },
};
</script>
<style lang="scss" scoped>
.col_4_container {
  display: flex;
  flex-wrap: wrap;
  background: rgba(2, 32, 50, 0.8);
  padding: 0 10px;
  .is-selected {
    color: #1989fa;
  }
  .be_on_duty {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 38px;
    .be_on_duty_btn {
      width: 48%;
      height: 38px;
      line-height: 38px;
      font-family: "AlibabaPuHuiTi-2-55-Regular";
      font-weight: normal;
      font-size: 24px;
      color: #638bbd;
      text-align: center;
      background: url("@/assets/images/layout/be_on_duty_btn_bg.png") no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
    }
    .be_on_duty_btn_active {
      background: url("@/assets/images/layout/be_on_duty_btn_bg_ac.png")
        no-repeat;
      background-size: 100% 100%;
      color: #f0f7ff;
      cursor: pointer;
    }
  }
  .cityPeopleInfoBox {
    width: 100%;
    height: 28%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    overflow-y: auto;
    .cityPeopleInfos {
      width: 49%;
      height: 92px;
      display: inline-block;
      background: url("../../../assets/images/layout/Frame-10876.png") no-repeat;
      background-size: 100% 100%;
      display: flex;
      align-items: center;
      .img {
        width: 60px;
        height: 100%;
        margin-left: 10px;
      }
      .infoItem {
        padding-left: 15px;
        .text {
          color: #0085ff;
          font-weight: 400;
        }
        .name {
          font-family: Alibaba PuHuiTi 2, Alibaba PuHuiTi 20;
          font-weight: normal;
          font-size: 16px;
          color: #ffffff;
          margin-top: 10px;
        }
        .tel {
          height: 24px;
          font-family: Alibaba PuHuiTi 2, Alibaba PuHuiTi 20;
          font-weight: normal;
          font-size: 16px;
          color: #ffffff;
          line-height: 24px;
          margin-top: 5px;
        }
      }
    }
  }
  .policeSituation {
    width: 100%;
    height: 196px;
    border: 1px solid rgba(0, 170, 255, 0.4);
    .tHeader {
      width: 100%;
      height: 40px;
      background: rgba(0, 163, 255, 0.1);
      border-radius: 0px 0px 0px 0px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgba(0, 170, 255, 0.4);
      p {
        height: 24px;
        font-family: Alibaba PuHuiTi 2, Alibaba PuHuiTi 20;
        font-weight: normal;
        font-size: 20px;
        color: #009cff;
        line-height: 24px;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
      p:nth-child(1) {
        width: 24%;
        text-align: center;
      }
      p:nth-child(2),
      p:nth-child(3) {
        width: 38%;
        padding-left: 35px;
      }
    }
    .regionBox {
      width: 100%;
      height: 149px;
      overflow-y: auto;
      div:last-child {
        border-bottom: none;
      }
      .region {
        width: 100%;
        display: flex;
        background: linear-gradient(
          90.00000000000003deg,
          #ffffff 19%,
          #dceeff 78%,
          #75acff 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        border-bottom: 1px solid rgba(0, 170, 255, 0.4);
        .regionNm {
          width: 24%;
          height: 48px;
          font-family: Alibaba PuHuiTi 2, Alibaba PuHuiTi 20;
          font-weight: normal;
          font-size: 18px;
          color: #ffffff;
          line-height: 48px;
          text-align: center;
          border-right: 1px solid rgba(0, 170, 255, 0.4);
        }
        .director,
        .deputyClass {
          height: 48px;
          width: 38%;
          border-right: 1px solid rgba(0, 170, 255, 0.4);
          display: flex;
          padding-left: 20px;
          img {
            width: 43px;
            height: 80%;
            margin-top: 5px;
          }
          .info {
            padding-left: 10px;
            p {
              height: 24px;
              font-family: Alibaba PuHuiTi 2, Alibaba PuHuiTi 20;
              font-weight: normal;
              font-size: 18px;
              color: #ffffff;
              line-height: 24px;
              text-align: left;
            }
          }
        }
        .deputyClass {
          border: node;
        }
      }
    }
  }
  .matterBox {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 38px;
    .matterBtn {
      width: 48%;
      height: 38px;
      line-height: 38px;
      font-family: "AlibabaPuHuiTi-2-55-Regular";
      font-weight: normal;
      font-size: 24px;
      color: #638bbd;
      text-align: center;
      background: url("@/assets/images/layout/be_on_duty_btn_bg.png") no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
    }
    .matter_active {
      background: url("@/assets/images/layout/be_on_duty_btn_bg_ac.png")
        no-repeat;
      background-size: 100% 100%;
      color: #f0f7ff;
      cursor: pointer;
    }
  }
  .tableBox {
    width: 100%;
    height: 28%;
    .tableHeader {
      height: 40px;
      background: url("../../../assets/images/layout/Group-5108@2x.png")
        no-repeat;
      background-size: 100% 100%;
      display: inline-block;
      display: flex;
      align-items: center;
      p {
        height: 22px;
        font-family: Alibaba PuHuiTi 2, Alibaba PuHuiTi 20;
        font-weight: normal;
        display: flex;
        font-size: 16px;
        color: #ffffff;
        line-height: 22px;
      }
      p:nth-child(1) {
        flex: 0.8;
        display: flex;
        justify-content: center;
      }
      p:nth-child(2) {
        flex: 3;
      }
      p:nth-child(3) {
        flex: 2;
      }
    }
    .tableBody {
      .tableItem {
        height: 40px;
        display: flex;
        align-items: center;
        .name,
        .date {
          height: 40px;
          font-family: Alibaba PuHuiTi 2, Alibaba PuHuiTi 20;
          font-weight: normal;
          font-size: 18px;
          color: rgba(255, 255, 255, 0.87);
          line-height: 40px;
          text-align: left;
          background: none;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          cursor: pointer;
        }
        div:nth-child(1) {
          flex: 0.8;
          display: flex;
          justify-content: center;
          color: rgba(255, 255, 255, 0.87);
        }
        div:nth-child(2) {
          flex: 3;
        }
        div:nth-child(3) {
          flex: 2;
        }
      }
      div:nth-child(even) {
        background: rgba(0, 145, 255, 0.15);
      }
    }
  }
  .almanacBox {
    width: 100%;
    height: 28%;
    .dateBox {
      display: flex;
      align-items: center;
      .dateNm {
        width: 30%;
      }
      .dateTitle {
        color: red;
        width: 70%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
  .seamless_regionBox_warp {
    height: 149px;
    overflow: hidden;
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
  :deep .el-calendar {
    background: transparent;
  }
  :deep .el-calendar__body {
    padding: 0px 5px 10px;
  }
  :deep .el-calendar-table .el-calendar-day {
    height: 35px;
    padding: 0px 5px 0px 0px;
    line-height: 35px;
    text-align: right;
    color: #dceeff;
  }
  :deep .el-calendar-table .el-calendar-day:hover {
    background: #3a8ee6;
  }
  :deep .el-calendar-table thead th {
    padding: 2px 0;
  }
  :deep .el-calendar__header {
    padding: 5px 20px;
    border-bottom: 1px solid rgba(0, 170, 255, 0.4);
  }
  :deep .el-calendar__title,
  :deep .el-calendar-table thead th {
    color: #dceeff;
  }
  :deep .el-button {
    background: transparent;
    color: #dceeff;
  }
  :deep .el-calendar-table tr td {
    border-left: 1px solid rgba(0, 170, 255, 0.4);
  }
  :deep .el-calendar-table tr:first-child td {
    border-top: 1px solid rgba(0, 170, 255, 0.4);
  }
  :deep .el-calendar-table td {
    border-bottom: 1px solid rgba(0, 170, 255, 0.4);
    border-right: 1px solid rgba(0, 170, 255, 0.4);
  }
  :deep .el-calendar-table td.is-selected {
    background: #3a8ee6;
    color: #dceeff;
  }
}
</style>