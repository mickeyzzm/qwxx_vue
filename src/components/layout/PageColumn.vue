<template>
  <div class="page_column" :style="{ width: column_width }">
    <slot />
  </div>
</template>

<script>
export default {
  name: "demoName",
  props: {
    // 栏宽度：string： 直接附值给width， number：当作%计算
    width: {
      type: [String, Number],
      default: 25,
    },
  },
  computed: {
    column_width() {
      if (!this.width) {
        return `calc(25% - 20px)`;
      }
      if (typeof this.width === "string") {
        return `calc(${this.width} - 20px)`;
      } else if (typeof this.width === "number") {
        return `calc(${this.width}% - 20px)`;
      } else {
        return `calc(25% - 20px)`;
      }
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
.page_column {
  height: 100%;
  margin: 0 10px;
  flex-shrink: 0;
}
</style>
