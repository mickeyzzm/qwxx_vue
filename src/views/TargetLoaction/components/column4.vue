<template>
  <TopBlockVue title="重点目标场所监控视频" icon="frame343312x" class="col_4_container" :width="33.33">
    <div class="peakVideoBox">
      <div v-for="(item,index) in 12" :key="index" class="peakVideo">
        <div class="videoH">视频名称</div>
        <video controls width="100%" height="80%">
          <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />                
        </video>
      </div>
    </div>
    <VideoDialog v-if="VideoDialogVisible" ref="VideoDialogRef" />
  </TopBlockVue>
</template>
<script>
  import TopBlockVue from "@/components/layout/TopBlock";
import Mp4boxAllMin from '@/utils/mp4box.all.min.js'
import wsPlayer from '@/utils/wsPlayer.js'
import VideoDialog from "./dialogComponent/videoDialog"
export default {
  name: "Column3Com",
  components: {
    TopBlockVue,
    VideoDialog,
  },
  data() {
    return {
      player: null,
      VideoDialogVisible: false,
    }
  },
  mounted() {
  // this.initwaPlayer()
  },
  methods: {
    initwaPlayer () {
      this.$http({
        url: this.$http.adornUrl('/getTotalJq?name='),
        method: 'get',
      }).then(res => {
        if (res.data.code == '200') {
          // 创建播放器实例
          let url = res.data.data.ws_fmp4 // ws_fmp4 模拟数据假参数
          this.player = new wsPlayer({ id: 'video_container', url: ''})
          this.player.open()
        }
      })
    },
    handlerClose () {
      this.VideoDialogVisible = false
    },
  },
  beforeDestroy() {
    // 销毁播放器实例
    if (this.player) {
      this.player.close()
    }
  },
}
</script>
<style lang="scss" scoped>
.col_4_container { 
  padding-bottom: 0px;
  .peakVideoBox {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .peakVideo {
      background: url("@/assets/images/layout/videoBg.png")no-repeat;
      background-size: 100% 100%;
      width: 24.5%;
      height: 237px;
      margin-top: 15px;
      .videoH {
        padding: 8px 10px;
        font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
        font-weight: normal;
        font-size: 20px;
        color: #FFFFFF;
        text-align: left;
      }
    }
  }
}
</style>