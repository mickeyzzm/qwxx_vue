<template>
  <PageContainerVue class="Situation_index_container">
    <Column1 />
    <Column2 />
    <Column3 />
    <Column4 />
  </PageContainerVue>
</template>

<script>
import PageContainerVue from "@/components/layout/PageContainer";
import PageColumnVue from "@/components/layout/PageColumn";
import TopBlockVue from "@/components/layout/TopBlock";
import SubBlockVue from "@/components/layout/SubBlock";
import Column1 from "./components/column1";
import Column2 from "./components/column2";
import Column3 from "./components/column3";
import Column4 from "./components/column4";
export default {
  name: "SituationIndex",
  components: {
    PageContainerVue,
    PageColumnVue,
    TopBlockVue,
    SubBlockVue,
    Column1,
    Column2,
    Column3,
    Column4,
  },
  data() {
    return {
    }
  },
  computed: {
  },
  mounted() {
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
.Situation_index_container {
  .col_1_container {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
