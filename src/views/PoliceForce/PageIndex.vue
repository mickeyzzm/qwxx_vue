<template>
  <!-- 警情警力 -->
  <PageContainerVue class="police_force_container">
    <Column1 />
    <Column2 />
    <Column3 />
    <Column4 />
  </PageContainerVue>
</template>

<script>
import PageContainerVue from "@/components/layout/PageContainer";
import Column1 from "./components/column1";
import Column2 from "./components/column2";
import Column3 from "./components/column3";
import Column4 from "./components/column4";
import * as echarts from "echarts";
import { RingChart } from "@/utils/RingChart";
export default {
  name: "PoliceForceIndex",
  components: {
    PageContainerVue,
    Column1,
    Column2,
    Column3,
    Column4,
  },
  data() {
    return {
    };
  },
  mounted() {
    
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
  .police_force_container {
    // width: 100%;
  }
</style>
