<template>
  <!-- <div style="width: 100%; height: 100%;"> -->
    <div :id="id" ref="container"></div>
  <!-- </div> -->
</template>
<script>
export default {
  name: "Camera",
  props: {
    id: {
      type: String,
      default: "",
    }
  },
  data() {
    return {
      jessibuca: null,
      version: "",
      playing: false,
      loaded: false, // mute
      showOperateBtns: false,
      showBandwidth: false,
      wasm: false,
      err: "",
      performance: "",
      volume: 1,
      videoUrl: ""
    };
  },
  watch: {
    videoUrl: {
      handler(n) {
        this.play();
      },
    },
  },
  mounted() {
    this.create();
    this.queryVideoUrl();
    if (this.videoUrl != "") {
      this.play();
    }
    window.onerror = (msg) => (this.err = msg);
  },
  methods: {
    create(options) {
      options = options || {};
      this.jessibuca = new window.Jessibuca(
        Object.assign(
          {
            container: document.getElementById(this.id),
            videoBuffer: 0.2,
            decoder: "/qwxx/ajax/libs/jessibuca/decoder.js",
            isResize: false,
            text: "",
            loadingText: "视频加载中...",
            debug: false,
            operateBtns: {
              fullscreen: this.showOperateBtns,
              screenshot: this.showOperateBtns,
              play: this.showOperateBtns,
              audio: this.showOperateBtns,
            },
            isNotMute: true,
            timeout: 10,
          },
          options
        )
      );
      var _this = this;
      this.jessibuca.on("pause", function () {
        // console.log("on pause");
        _this.playing = false;
      });
      this.jessibuca.on("error",error=>{
        // console.log("on error",error);
      })
      this.jessibuca.on("play", () => {
        _this.playing = true;
        _this.loaded = true;
      });
    },
    queryVideoUrl(){
        this.$http({
          url: this.$http.adornUrl("/getVideo?id="+this.id),
          method: "get",
        }).then((response) => {
          var url = response.data.url;
          // console.log("获取播放链接：", response);
          this.videoUrl=url;
          // // var videoObj=document.getElementById("video_container1");
          // // videoObj.play();

          // this.player = new wsPlayer("video_container1", url);
          // this.player.open();
        });
    },
    play() {
        console.log("读取到播放链接",this.videoUrl);
      if (this.videoUrl) {
        let url = this.videoUrl;
        this.jessibuca.play(url).catch((err) => {
          // console.log(err);
        });
      }
    },
    destroy() {
      if (this.jessibuca) {
        this.jessibuca.destroy();
      }
      this.create();
      this.playing = false;
      this.loaded = false;
      this.performance = "";
    },
  },
  beforeDestroy() {
    // 销毁播放器实例
    if (this.player) {
      this.player.close();
    }
  },
};
</script>
