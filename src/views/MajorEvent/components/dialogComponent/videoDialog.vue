<template>
  <div class="elDialog">
    <div class="cancelBox">
      <p>省厅视频会议</p>
      <i @click="handelCancel"></i>
      <!-- <img src="../../../../assets/images/layout/dialogCancelImg.png" alt="" class="dialogCancelImg"> -->
      <jessibucaDia :videoUrl="videoUrl" :hasAudio="hasAudio" fluent autoplay live ref="jessibucaDia" style="width: 100%; height: 740px; margin-top: 12px;"></jessibucaDia>
    </div> 
  </div>
</template>
<script>
  // import jessibucaDia from "@/components/video/jessibucaDia"
  export default {
    components: {
      // jessibucaDia
    },
    data() {
      return {
        dialogVisible: false,
        videoUrl: '',
        hasAudio: '',
      };
    },
    methods: {
      init (videoUrl, hasAudio) {
        this.videoUrl = videoUrl
        this.hasAudio = hasAudio
      },
      handleSizeChange (val) {

      },
      handleCurrentChange (val) {

      },
      handelCancel() {
        this.$refs.jessibucaDia.destroy()
        this.$emit('handlerClose')
      },
    }
  };
</script>
<style lang="scss" scoped>
.elDialog {
  width: 1551px;
  height: 802px;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 3;
  transform: translate(-50%,-45%);
  background: #043561;
  overflow: hidden;
  .cancelBox {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: url(../../../../assets/images/layout/c1l3VDialogHeadBg.png) no-repeat;
    background-size: 100% 100%;
    padding-left: 25px;
    padding-right: 20px;
    p {
      font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
      font-weight: normal;
      font-size: 20px;
      color: #FFFFFF;
      line-height: 24px;
      text-align: justified;
      font-style: normal;
      text-transform: none;
    }
    i {
      width: 25px;
      height: 25px;
      border: 1px solid 043561;
      cursor: pointer;
    }
  }
}
</style>