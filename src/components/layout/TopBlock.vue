<template>
  <div class="top_block_container">
    <div class="header">
      <div :class="`icon ${icon}`"></div>
      <div class="text">{{ title }}</div>
    </div>
    <div class="body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBlockContainer",
  props: {
    icon: {
      type: String,
      default: "icon_demo",
    },
    title: {
      type: String,
      default: "默认标题",
    },
  },
  data() {
    return {
      name: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.top_block_container {
  .header {
    width: 100%;
    height: 64px;
    background-image: url("@/assets/images/layout/top_block_header_bg.png");
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: 0 0;
    display: flex;
    flex-wrap: nowrap;
    padding: 0 20px;
    align-items: center;
    .text {
      font-family: "AlibabaPuHuiTi-2-65-Medium";
      font-weight: normal;
      font-size: 28px;
      letter-spacing: 1px;
      text-align: left;
      font-style: normal;
      text-transform: none;
      background: linear-gradient(
        to bottom,
        #ffffff 0%,
        #d3f0ff 58%,
        #6fcfff 100%
      );
      -webkit-background-clip: text;
      color: transparent;
      padding-left: 8px;
      padding-bottom: 15px;
    }
    .icon {
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background-position: center center;
      width: 32px;
      height: 32px;
      flex-shrink: 0;
      margin-bottom: 20px;
    }
    .icon_demo {
      background-image: url("@/assets/images/layout/top_block_icon_demo.png");
    }
  }
  .body {
    width: 100%;
    height: calc(100% - 64px);
    padding: 16px;
    background: linear-gradient(
      to bottom,
      rgba(0, 163, 255, 0) 0,
      rgba(0, 163, 255, 0) 15%,
      rgba(0, 133, 255, 0.2) 100%
    );
    border-radius: 0px 0px 0px 0px;
  }
}
</style>
