<template>
    <PageContainerVue class="detailIndex_index_container">
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
  import Column1 from "./detailComponents/column1";
  import Column2 from "./detailComponents/column2";
  import Column3 from "./detailComponents/column3";
  export default {
    name: "detailIndexIndex",
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
  .detailIndex_index_container {
  }
  </style>
  