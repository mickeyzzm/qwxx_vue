<template>
  <div id="app">
    <PageLayoutVue>
      <template>
        <router-view />
      </template>
    </PageLayoutVue>
  </div>
</template>
<script>
import PageLayoutVue from "./components/layout/PageLayout.vue";
export default {
  name: "ApplicationIndex",
  components: {
    PageLayoutVue,
  },
  data() {
    return {
      name: "",
    };
  },
};
</script>
<style lang="scss">
  #app {
    width: 100%;
    height: 100%;
    /* border: 1px solid red; */
  }
  * {
    padding: 0;
    margin: 0;
  }
  /* 定义滚动条样式 */
  ::-webkit-scrollbar {
    width: 1px;
    height: 8px;
  }

  /* 定义滚动条的轨道部分 */
  ::-webkit-scrollbar-track {  
    background-color: #f5f5f5;
    width: 1px;  
  }

  /* 定义滚动条的thumb部分 */
  ::-webkit-scrollbar-thumb {  
    background-color: #808385; 
  }
</style>
