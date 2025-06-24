<template>
  <div class="layout_container">
    <div class="layout_header">
      <PageHeaderVue />
    </div>
    <div class="layout_body">
      <div class="layout_body_self">
        <slot />
      </div>
    </div>
  </div>
</template>
<script>
import PageHeaderVue from "./PageHeader.vue";
export default {
  name: "demoName",
  components: {
    PageHeaderVue,
  },
  data() {
    return {
      name: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.layout_container {
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url("@/assets/images/layout/background.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  .layout_header {
    width: 100%;
    height: 126px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
  }
  .layout_body {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
    padding: 126px 0 0 0;
    .layout_body_self {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
