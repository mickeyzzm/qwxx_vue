<template>
  <PageContainerVue class="TargetPeople_index_container">
    <Column1 />
    <Column2 />
    <Column3 />
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
export default {
  name: "TargetPeopleIndex",
  components: {
    PageContainerVue,
    PageColumnVue,
    TopBlockVue,
    SubBlockVue,
    Column1,
    Column2,
    Column3,
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
.TargetPeople_index_container {
  
}
</style>
