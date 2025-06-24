<template>
  <div class="elDialog">
    <div class="cancelBox">
      <p>{{title}}</p>
      <i class="el-icon-close" @click="handelCancel"></i>
    </div> 
    <jessibuca :videoUrl="videoUrl" :hasAudio="hasAudio" fluent autoplay live ref="jessibucaDia" style="width: 100%; height: 740px;margin-top: 12px"></jessibuca>
  </div>
</template>
<script>
import jessibuca from "@/components/video/jessibuca";
export default {
  components: {
    jessibuca,
  },
  data() {
    return {
      dialogVisible: false,
      videoUrl: '',
      hasAudio: false,
      title: '',
      index:null,
      refStr:null,
      list: [],
    };
  },
  methods: {
    init (videoUrl, hasAudio,title,index, refStr, list) {
      // console.log(videoUrl, hasAudio, 'tab')
      this.videoUrl = videoUrl;
      this.hasAudio = hasAudio;
      this.title = title;
      this.index=index;
      this.refStr = refStr
      this.list = list
    },
    handelCancel() {
      this.$refs.jessibucaDia.destroy()
      this.$emit('handlerClose',this.index, this.refStr, this.list)
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
  z-index: 9;
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
      cursor: pointer;
      color: #fff;
    }
  }
}
</style>