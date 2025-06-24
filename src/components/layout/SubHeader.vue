<template>
  <div class="top_block_sub">
    <div class="header">
      {{ title }} 
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBlockSub",
  props: {
    title: {
      type: String,
      default: "默认二级标题",
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
.top_block_sub {
  width: 100%;
  height: 25px;
  .header {
    height: 100%;
    line-height: 25px;
    font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
    font-weight: normal;
    font-size: 24px;
    color: #00AAFF;
    text-align: left;
    margin-bottom: 10px;
    border-left: 5px solid #00AAFF;
    padding-left: 10px;
  }
}
</style>
  