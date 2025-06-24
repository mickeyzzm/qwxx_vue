<template>
  <div class="sub_block_container">
    <div class="header">
      <div
        class="item"
        :class="{ active: $attrs.value === item }"
        v-for="(item, idx) in computed_tabs"
        @click="HandleTabClick(item)"
        :key="idx"
      >
        {{ item }}
      </div>
      <div v-if="moreShow" @click="handelMore()" class="more">更多</div>
    </div>
    <div class="body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "SubBlockContainer",
  props: {
    tabs: {
      type: [String, Array],
      default: () => ["默认标题"],
    },
    moreShow: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    computed_tabs() {
      if (!this.tabs) {
        return ["默认标题"];
      } else if (typeof this.tabs === "string") {
        return [this.tabs];
      } else {
        return this.tabs;
      }
    },
  },
  data() {
    return {
      name: "",
    };
  },
  methods: {
    HandleTabClick(item) {
      if (item === this.$attrs.value) {
        return;
      }
      if (!this.tabs || (this.tabs && this.tabs.length <= 1)) {
        return;
      }
      this.$emit("input", item);
      this.$emit("change", item);
    },
    handelMore () {
      this.$emit('handelMore')
    },
  },
};
</script>

<style lang="scss" scoped>
.sub_block_container {
  .header {
    width: 100%;
    height: 48px;
    background-image: url("@/assets/images/layout/sub_block_header_bg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: 0 0;
    display: flex;
    flex-wrap: nowrap;
    padding: 0 20px;
    align-items: center;
    position: relative;
    .item {
      height: 48px;
      line-height: 48px;
      font-family: "AlibabaPuHuiTi-2-65-Medium";
      font-weight: normal;
      font-size: 26px;
      text-align: left;
      font-style: normal;
      text-transform: none;
      padding-right: 12px;
      cursor: pointer;
      background: linear-gradient(
        to bottom,
        #ffffff 0%,
        #c9fbff 86%,
        #00eaff 100%
      );
      -webkit-background-clip: text;
      color: transparent;
    }
    .active {
      background: linear-gradient(
        to bottom,
        #c9fbff 0%,
        #00eaff 100%
      ) !important;
      -webkit-background-clip: text !important;
      color: transparent !important;
    }
    .more {
      width: 64px;
      height: 32px;
      line-height: 30px;
      box-sizing: border-box;
      border: 1px solid rgba(0, 170, 255, 0.3);
      border-radius: 1px;
      background: rgba(0, 170, 255, 0.2);
      color: rgba(0, 170, 255, 1);
      font-family: "Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20";
      font-weight: normal;
      font-size: 20px;
      text-align: center;
      font-style: normal;
      text-transform: none;
      position: absolute;
      right: 20px;
      top: 50%;
      margin-top: -16px;
      cursor: pointer;
    }
  }
  .body {
    width: 100%;
    height: calc(100% - 48px);
    padding: 5px 10px 10px 10px;
    background: linear-gradient(
      to bottom,
      rgba(0, 163, 255, 0) 0,
      rgba(0, 163, 255, 0) 15%,
      rgba(0, 133, 255, 0.2) 100%
    );
    position: relative;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      padding: 1px;
      box-sizing: border-box;
      border-radius: 6px;
      background: linear-gradient(
        to bottom,
        rgba(0, 170, 255, 0) 0%,
        rgba(0, 170, 255, 1) 100%
      );
      --mask-bg: linear-gradient(red, red);
      --mask-clip: content-box, padding-box;
      -webkit-mask-image: var(--mask-bg), var(--mask-bg);
      -webkit-mask-clip: var(--mask-clip);
      mask-composite: exclude;
      -webkit-mask-composite: destination-out;
      z-index: -1;
    }
  }
}
</style>
