<template>
  <div class="page_header_container">
    <div class="header_date">
      <span class="color_white">
        {{ DateString }}
      </span>
      <span class="color_blue">
        {{ DayString }}
      </span>
      <span class="color_white">
        {{ TimeString }}
      </span>
    </div>
    <div
      :class="`hader_pre_item ${
        CurrentRouteName === preitem.name ? 'route_active' : ''
      }`"
      v-for="(preitem, preidx) in HeaderPreItems"
      :key="`pre_idex_${preidx}`"
      @click="HandleRoute(preitem)"
    >
      <div class="text">{{ preitem.label }}</div>
    </div>
    <div class="header_title"></div>
    <div
      :class="`hader_next_item ${
        CurrentRouteName === nextitem.name ? 'route_active' : ''
      }`"
      v-for="(nextitem, nextidx) in HeaderNextItems"
      :key="`next_idx_${nextidx}`"
      @click="HandleRoute(nextitem)"
    >
      <div class="text">{{ nextitem.label }}</div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import { weekNumberToZhCn } from "@/utils/common";
export default {
  name: "PageLayoutHeader",
  data() {
    return {
      DateString: "",
      DayString: "",
      TimeString: "",
      HeaderItems: [
        { label: "警情警力", name: "PoliceForce" },
        { label: "综合态势", name: "SituationIndex" },
        { label: "目标人员", name: "TargetPeople" },
        { label: "重点目标场所", name: "TargetLoaction" },
        { label: "关注预警", name: "PointWarning" },
        { label: "勤务考核监测", name: "DutyMinitor" },
        { label: "重大活动", name: "MajorEvent" },
        { label: "数据中心", name: "DataCenter" },
        { label: "重大事件处置", name: "EventHandle" },
        { label: "警种协同指挥", name: "CollaCommand" },
      ],
    };
  },
  computed: {
    HeaderPreItems() {
      return this.HeaderItems.slice(0, this.HeaderItems.length / 2);
    },
    HeaderNextItems() {
      return this.HeaderItems.slice(
        this.HeaderItems.length / 2,
        this.HeaderItems.length
      );
    },
    CurrentRouteName() {
      return this.$route.name;
    },
  },
  mounted() {
    this.TimerInit();
  },
  methods: {
    TimerInit() {
      setInterval(() => {
        let now = dayjs(new Date());
        this.DateString = now.format("YYYY-MM-DD");
        this.DayString = weekNumberToZhCn(now.day());
        this.TimeString = now.format("HH:mm:ss");
      }, 1000);
    },
    HandleRoute(route) {
      this.$router.push({
        name: route.name,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.page_header_container {
  width: 100%;
  height: 100%;
  background-image: url("@/assets/images/layout/header_bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  .header_date {
    position: absolute;
    top: 20px;
    left: 20px;
    font-family: PangMenZhengDao, PangMenZhengDao;
    font-weight: 600;
    font-size: 30px;
    letter-spacing: 6px;
    font-style: normal;
    text-transform: none;
    .color_white {
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.9),
        rgba(74, 106, 135, 0.9)
      );
      -webkit-background-clip: text;
      color: transparent;
    }
    .color_blue {
      color: rgba(0, 170, 255, 1);
    }
  }
  .header_title {
    width: 736px;
    height: 66px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 250px;
    margin-right: 250px;
    &::before {
      content: "";
      display: block;
      width: 66px;
      height: 66px;
      background-image: url("@/assets/images/layout/header_logo.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background-position: center center;
      margin-right: 4px;
    }
    &::after {
      content: "";
      display: block;
      width: 695px;
      height: 66px;
      background-image: url("@/assets/images/layout/header_text.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background-position: center center;
      margin-left: 4px;
    }
  }
  .hader_pre_item,
  .hader_next_item {
    width: 222px;
    height: 55px;
    line-height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url("@/assets/images/layout/header_item_bg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center center;
    cursor: pointer;
    .text {
      font-family: "AlibabaPuHuiTi-2-85-Bold";
      font-weight: normal;
      font-size: 30px;
      text-align: center;
      font-style: normal;
      text-transform: none;
      background: linear-gradient(180deg, #FFFFFF 27%, #BDE3FF 51%, #69D2FF 100%);
      -webkit-background-clip: text; 
      -webkit-text-fill-color: transparent;
    }
  }
  .hader_pre_item {
    margin-right: 86px;
  }
  .hader_next_item {
    margin-left: 86px;
  }
  .route_active {
    background-image: url("@/assets/images/layout/header_item_bg__active.png") !important;
    .text {
      font-weight: bold!important;
    }
  }
}
</style>
