<template>
  <PageContainerVue class="police_force_container">
    <PageColumnVue class="col_1_container" :width="33.33">
      <TopBlockVue class="c_1_b_1"> 
        <vue-seamless-scroll v-if="tableData.length > 0" :data="tableData" :class-option="classOption" v-cloak class="seamless_warp">
          <div class="tableBody">
            <div v-for="(item, index) in tableData" :key="index" v-cloak class="tableItem">
              <span style="color: orange">block1</span>
            </div> 
          </div>
        </vue-seamless-scroll>
      </TopBlockVue>
      <TopBlockVue class="c_1_b_2">
        <span style="color: orange">block2</span>
      </TopBlockVue>
      <SubBlockVue
        class="c_1_b_3"
        v-model="Tab1Value"
        :tabs="['标题一', '标题二']"
      >
        <div class="echarts_demo" id="col2_chart5"></div>
      </SubBlockVue>
      <SubBlockVue class="c_1_b_4">
        <div class="echarts_demo" id="col2_chart1"></div>
      </SubBlockVue>
    </PageColumnVue>
    <PageColumnVue :width="33.33">Column 2</PageColumnVue>
    <PageColumnVue :width="23.33">Column 3</PageColumnVue>
    <PageColumnVue :width="10">Column 4</PageColumnVue>
  </PageContainerVue>
</template>

<script>
import PageContainerVue from "@/components/layout/PageContainer";
import PageColumnVue from "@/components/layout/PageColumn";
import TopBlockVue from "@/components/layout/TopBlock";
import SubBlockVue from "@/components/layout/SubBlock";
import * as echarts from "echarts";
import { RingChart } from "@/utils/RingChart";
export default {
  name: "PoliceForceIndex",
  components: {
    PageContainerVue,
    PageColumnVue,
    TopBlockVue,
    SubBlockVue,
  },
  data() {
    return {
      Tab1Value: "标题二",
      tableData: [
        { name: 'block1' },
        { name: 'block1' },
        { name: 'block1' },
        { name: 'block1' },
        { name: 'block1' },
        { name: 'block1' },
        { name: 'block1' },
        { name: 'block1' },
      ]
    };
  },
  computed: {
    classOption () {
      return {
        step: 0.3
      }
    }
  },
  mounted() {
    this.DemoRingChart();
    this.DemoEchart();
  },
  methods: {
    DemoRingChart() {
      let items = [
        { value: 40, label: "重复校验", color: "rgba(204, 81, 32, 1)" },
        { value: 50, label: "逻辑校验", color: "rgba(0, 106, 255, 1)" },
        { value: 60, label: "空值校验", color: "rgba(0, 204, 3, 1)" },
        { value: 70, label: "参照校验", color: "rgba(255, 214, 0, 1)" },
        { value: 80, label: "格式校验", color: "rgba(0, 234, 255, 1)" },
        { value: 90, label: "一致性校验", color: "rgba(0, 170, 255, 1)" },
      ];
      let chart = new RingChart("col2_chart5", items);
      setInterval(() => {
        items = items.map((it) => {
          return {
            ...it,
            value: parseInt(Math.random() * 100),
          };
        });
        chart.draw(items);
      }, 2000);
    },
    DemoEchart() {
      let dom = document.getElementById("col2_chart1");
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
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)",
            },
          },
        ],
      };
      echarts.init(dom).setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
.police_force_container {
  .col_1_container {
    display: flex;
    flex-wrap: wrap;
    .c_1_b_1 {
      width: calc(50% - 10px);
      height: 50%;
      margin-right: 10px;
      flex-shrink: 0;
      .seamless_warp {
        height: 100px;
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
      .tableBody {
        height: 100px;
        /* border: 1px solid red; */
        overflow: hidden;
      }
    }
    .c_1_b_2 {
      width: calc(50% - 10px);
      height: 50%;
      margin-left: 10px;
      flex-shrink: 0;
    }
    .c_1_b_3 {
      width: calc(50% - 10px);
      height: calc(50% - 20px);
      margin-right: 10px;
      margin-top: 20px;
      flex-shrink: 0;
      .echarts_demo {
        width: 100%;
        height: 100%;
      }
    }
    .c_1_b_4 {
      width: calc(50% - 10px);
      height: calc(50% - 20px);
      margin-left: 10px;
      margin-top: 20px;
      flex-shrink: 0;
      .echarts_demo {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
