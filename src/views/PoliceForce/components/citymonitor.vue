<template>
<!-- <div class="citymonitor_Box"> -->
  <!-- <el-carousel trigger="click" width="100%" height="163px" :interval="30000">
    <el-carousel-item v-for="(items,index) in carouselVeData" :key="index"> -->
      <div class="citymonitorBox">
        <div v-for="(item, index) in videoList" :key="index" class="citymonitorBoxItem">
          <jessibuca  :videoUrl="item.videourl" :hasAudio="hasAudio" :videoid="item.videoid" fluent autoplay live ref="refJessibuca" style="width: 121px; height: 73px;"></jessibuca>
          <video v-if="!item" controls width="100%" height="80%">
            <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    <!-- </el-carousel-item>
  </el-carousel> -->
<!-- </div> -->
</template>
<script>
import jessibuca from "@/components/video/jessibuca";
export default {
    name: "cityMonitor",
    components:{
         jessibuca,
    },
    data(){
      return {
        videoList:[ 
          {name:'双桥',videoid:'13080200311324001148', videourl:'ws://20.168.34.108:18188/rtp/13080000002001111111_13080200311324001148.live.flv'},
          {name:'双滦',videoid:'13080300001324703147', videourl:'ws://20.168.34.108:18188/rtp/13080000002001111111_13080300001324703147.live.flv'},
          {name:'营子',videoid:'13080400521310500290', videourl:'ws://20.168.34.108:18188/rtp/13080000002001111111_13080400521310500290.live.flv'},
          {name:'兴隆',videoid:'13082200521312100253', videourl:'ws://20.168.34.108:18188/rtp/13080000002001111111_13082200521312100253.live.flv'},
          {name:'滦平',videoid:'13082400001320027924', videourl:'ws://20.168.34.108:18188/rtp/13080000002001111111_13082400001320027924.live.flv'},
          {name:'隆化',videoid:'13082502001320000001', videourl:'ws://20.168.34.108:18188/rtp/13080000002001111111_13082502001320000001.live.flv'},
          
          {name:'高新',videoid:'13080100021320020193', videourl:'ws://20.168.34.108:18188/rtp/13080000002001111111_13080100021320020193.live.flv'},
          {name:'旅游分局',videoid:'13080200001320000105', videourl:'ws://20.168.34.108:18188/rtp/13080000002001111111_13080200001320000105.live.flv'},
          {name:'隆化',videoid:'13082502001320000001', videourl:'ws://20.168.34.108:18188/rtp/13080000002001111111_13082502001320000001.live.flv'},
          {name:'宽城',videoid:'13082700001310002099', videourl:'ws://20.168.34.108:18188/rtp/13080000002001111111_13082700001310002099.live.flv'},
          {name:'钢城',videoid:'13089905001314859497', videourl:'ws://20.168.34.108:18188/rtp/13080000002001111111_13089905001314859497.live.flv'},
          {name:'宽城交警',videoid:'13082700001310002199', videourl:'ws://20.168.34.108:18188/rtp/13080000002001111111_13082700001310002199.live.flv'}],
        urlList:[]
      }
    },
    computed: {
      carouselVeData() {
        // 将数据分组，每组6个
        const groups = [];
        for (let i = 0; i < this.videoList.length; i += 12) {
          groups.push(this.videoList.slice(i, i + 12));
        }
        return groups;
      },
    },
    mounted(){
       this.initVideos();
    },
    destroyed() {
      this.videoList.forEach((item, index) => {
        this.$refs.refJessibuca[index].destroy()
      })
    },
    methods:{
        initVideos(){
            let self=this;
            for(var i=0;i<this.videoList.length;i++){
                let vid=this.videoList[i].videoid
                this.$http({
                    url: this.$http.adornUrl("/getVideo?id="+self.videoList[i].videoid),
                    method: "get",
                }).then((response) => {
                   self.urlList.push({videourl:response.data.url,videoid:vid});
                    // console.log("视频地址：",response,vid);
                    // self.videoList[i].videourl=response.data.url;
                });
            }
        }
    }
    
}
</script>
<style lang="scss" scoped>
// .citymonitor_Box {
//   overflow: hidden; 
//   :deep .el-carousel__indicator--horizontal {
//     display: none;
//   }
//   :deep ::-webkit-scrollbar {
//     width: 0px;
//   }
  .citymonitorBox {
    width: 100%;
    height: 163px;
    display: grid;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    overflow: hidden; 
    .citymonitorBoxItem {
      background: url("@/assets/images/layout/videoBg.png") no-repeat;
      background-size: 100% 100%;
      width: 15%;
      height: 45%;
    }
    .citymonitorBox:nth-child(-n+3) {
      grid-column: span 2;
    }
    .citymonitorBox:nth-child(n+4) {
      grid-column: span 2;
    }
  }
// }
</style>