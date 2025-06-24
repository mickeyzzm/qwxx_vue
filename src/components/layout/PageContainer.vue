<template>
  <div class="page_container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "PoliceForceIndex",
  data() {
    return {
      name: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.page_container {
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0px 10px 20px 10px;
  flex-wrap: nowrap;
  overflow: auto;
}
</style>
