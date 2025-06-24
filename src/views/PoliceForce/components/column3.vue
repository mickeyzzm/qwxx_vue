<template>
  <PageColumnVue class="col_3_container" :width="23.33">
    <div class="c_3_b_1">
      <div class="headlines">
        <img src="../../../assets/images/layout/WechatIMG2851@2x.png" alt="" class="img" />
        <div class="text">指</div>
      </div>
      <div>
        <input type="text" placeholder="请输入关键字搜索" class="search">
      </div>
    </div>
    <SubBlockVue
        tabs="视频专题"
        :moreShow="false"
        class="c_3_b_1_1"
      >
      <SubHeaderVue title="高峰点位" />
      <el-carousel trigger="click" height="180px" :interval="300000">
        <el-carousel-item v-for="(items,index) in carouselVdeoData" :key="index">
        <div class="peakVideoBox">
            <div v-for="(item, index) in items" :key="index" @click="clickJessibuca(item, hasAudio)" class="peakVideo">
              <div class="videoH">{{item.videoname}}</div>
              <jessibuca v-if="item" :videoid="item.videoid" fluent autoplay live ref="jessibucaTop3" style="width: 392px; height: 140px;"></jessibuca>
              <video v-if="!item" controls width="392px" height="140px">
                <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
      <SubHeaderVue title="重点部位" style="margin-top: 5px" />
      <el-carousel trigger="click" height="180px" :interval="300000">
        <el-carousel-item v-for="(items,index) in carouselMainUrlData" :key="index">
          <div class="peakVideoBox">
            <div v-for="(item, index) in items" :key="index" @click="clickKeynote(item, hasAudio)" class="peakVideo">
              <div class="videoH">{{item.videoname}}</div>
              <jessibuca v-if="item" :videoid="item.videoid" fluent autoplay live ref="jessibucaTop4" style="width: 392px; height: 140px;"></jessibuca>
              <video v-if="!item" controls width="100%" height="80%">
                <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </SubBlockVue>
    <SubBlockVue
      tabs="视频调度"
      :moreShow="false" 
      class="c_3_b_2"
    >
      <div class="peakVideoBox">
        <div class="peakVideo">
          <div class="videoH">河北省厅</div>
          <img src="/qwxx/img/shengti.png" alt="" class="videoImg">
          <!-- <iframe :src="monitorUrl" width="100%" height="80%"></iframe> -->
          <!-- <video controls width="100%" height="80%">
            <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
          </video> -->
        </div>
        <!-- <div class="peakVideo">
          <div class="videoH">承德市局</div>
          <iframe :src="monitorUrl" width="100%" height="80%"></iframe>
        </div> -->
        <div  class="peakVideo2">
          <div class="videoH">县市分局</div>
          <Citymonitor></Citymonitor>
          <!-- <video controls width="100%" height="80%">
            <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
          </video> -->
        </div>
      </div>
    </SubBlockVue>
    <VideoDialog v-show="VideoDialogVisible" ref="VideoDialogRef" @handlerClose="handlerClose" />
  </PageColumnVue>
</template>
<script>
import PageColumnVue from "@/components/layout/PageColumn";
import SubBlockVue from "@/components/layout/SubBlock";
import SubHeaderVue from "@/components/layout/SubHeader";
// import wsPlayer from "@/utils/wsPlayer.js";
import VideoDialog from "./dialogComponent/videoDialog";
import jessibuca from "@/components/video/jessibuca";
import Citymonitor from './citymonitor.vue';
export default {
  name: "Column3Com",
  components: {
    PageColumnVue,
    SubBlockVue,
    SubHeaderVue,
    VideoDialog,
    jessibuca,
    Citymonitor,
  },
  data() {
    return {
      hasAudio: false,
      player: null,
      VideoDialogVisible: false,
      urlIds: ['13080200311324120296', '13080200311324129819', '13080200051320000607'], //'13082700001320006046','13080200311324120296',
      mainUrlIds: ['13082700001320006046','13080400001320007052','13080200311324000097'],
      urlIdList: [],
      mainUrlList: [],
      jessibucaTop3Idex: null,
      jessibucaTop4Idex: null,
      monitorUrl:"",
    };
  },
  computed: {
    carouselVdeoData() {
      // 将数据分组，每组3个
      const groups = [];
      for (let i = 0; i < this.urlIdList.length; i += 3) {
        groups.push(this.urlIdList.slice(i, i + 3))
      }
      return groups;
    },
    carouselMainUrlData() {
      // 将数据分组，每组3个
      const groups = [];
      for (let i = 0; i < this.mainUrlList.length; i += 3) {
        groups.push(this.mainUrlList.slice(i, i + 3))
      }
      return groups;
    },
  },
 
  mounted() {
    this.initwaPlayer();
    this.initwasPlayer();
    this.showMonitor();
  },
  destroyed() {
    this.jessibuca.destroy();
  },
  methods: {
    initwaPlayer() {
      //护学岗
      this.$http({
        url: this.$http.adornUrl("/getVideoList?type=04"),
        method: "get",
      }).then((response) => {
        let videoList=response.data.data;
        for(var i=0;i<videoList.length;i++){
          this.urlIdList.push({videourl:videoList[i].videourl,videoid:videoList[i].videoid,videoname:videoList[i].videoname});
        }
        console.log('this.urlIdList=>', this.urlIdList)
        // var url = response.data.url;
        // this.urlIdList.push(url);
      }).catch(err=>{
        console.log('err=>', err)
      })
      //   for(let i=0; i<this.urlIds.length; i++){
      //     this.$http({
      //       url: this.$http.adornUrl("/getVideo?id="+this.urlIds[i]),
      //       method: "get",
      //     }).then((response) => {
      //       var url = response.data.url;
      //       this.urlIdList.push(url);
      //     }).catch(err=>{
      //       console.log('err=>', err)
      //     })
      // }
    },
    initwasPlayer() {
      //机关
        this.$http({
        url: this.$http.adornUrl("/getVideoList?type=03"),
        method: "get",
      }).then((response) => {
        let videoList=response.data.data;
        for(var i=0;i<videoList.length;i++){
          this.mainUrlList.push({videourl:videoList[i].videourl,videoid:videoList[i].videoid,videoname:videoList[i].videoname});
        }
      }).catch(err=>{
        console.log('err=>', err)
      })
    },
    clickJessibuca (item, hasAudio) {
      this.$nextTick(() => {
        this.$http({
          url: this.$http.adornUrl("/getVideo?id="+item.videoid),
            method: "get",
          }).then((response) => {
            var url = response.data.url;
            this.urlIdList.forEach((it, index) => {
              if (item.videoid == it.videoid) {
                this.jessibucaTop3Idex = index;
                this.$refs.jessibucaTop3[index].destroy()
                this.VideoDialogVisible = true;
                this.$refs.VideoDialogRef.init(url, hasAudio,item.videoname,index, 'jessibucaTop3', this.urlIdList)
              }
            });
          }).catch(err=>{
            console.log('err=>', err)
          })
       
      })
    },
    clickKeynote (item, hasAudio) { 
      this.$nextTick(() => {
        this.$http({
            url: this.$http.adornUrl("/getVideo?id="+item.videoid),
            method: "get",
          }).then((response) => {
            var url = response.data.url;
            this.mainUrlList.forEach((it, index) => {
              if (item.videoid == it.videoid) {
                this.jessibucaTop4Idex = index;
                this.$refs.jessibucaTop4[index].destroy()
                this.VideoDialogVisible = true;
                this.$refs.VideoDialogRef.init(url, hasAudio,item.videoname,index, 'jessibucaTop4', this.mainUrlList)
              }
            })
          }).catch(err=>{
            console.log('err=>', err)
          })
       
      })
    },
    showMonitor(){
      // console.log("视频会议处理信息方法");
      let self=this;
      	$.ajax({
				  type : "post",
				  url : "/sphy/login.action",
				  data : "cmd=-1&username=admin&password="+hex_md5('admin')+"&repeatLogin=0",
				  async: false,
				  dataType:"json",
				  success : function(result) {
				  	console.log("省厅视频会议登录返回结果",JSON.stringify(result));
				  	 var status = result.status;
				  	if(status==="repeatLogin_confirm"){
    			  	// alert("进入重新登录验证");
				  		$.ajax({
				  			  type : "post",
							  url : "/sphy/login.action",
							  data : "cmd=-1&username=admin&password="+hex_md5('admin')+"&repeatLogin=1",
							  async: false,
							  dataType:"json",
							  success : function(resp) {
//							  	alert("重新登录验证"+JSON.stringify(resp));
//							  	window.location.href='/sphy/manager/meeting.action?meetingId=6f79b0ec-8cd1-11e2-989d-946b0b5fed7d';
							  	// $("#video").attr("src","/sphy/manager/meeting.action?meetingId=6f79b0ec-8cd1-11e2-989d-946b0b5fed7d");
                 
							  	self.monitorUrl="/sphy/manager/meeting.action?meetingId=6f79b0ec-8cd1-11e2-989d-946b0b5fed7d";
                   console.log("monitorUrl",self.monitorUrl);
							  }
				  		});
				  	}
				  	
				  	 console.log(status);
//				  	 window.location.href='/sphy/manager/meeting.action?meetingId=6f79b0ec-8cd1-11e2-989d-946b0b5fed7d';
              self.monitorUrl="/sphy/manager/meeting.action?meetingId=6f79b0ec-8cd1-11e2-989d-946b0b5fed7d";
               console.log("monitorUrl",self.monitorUrl);
				  	//  $("#video").attr("src","/sphy/manager/meeting.action?meetingId=6f79b0ec-8cd1-11e2-989d-946b0b5fed7d");
				  } 
			});
    },
    handlerClose(index, refStr, list) {
      this.VideoDialogVisible = false;
      this.$http({
          url: this.$http.adornUrl("/getVideo?id="+list[index].videoid),
          method: "get",
        }).then((response) => {
          var url = response.data.url;
          this.$refs[refStr][index].play(url); 
        }).catch(err=>{
          console.log('err=>', err)
        })
    },
  }
};
</script>
<style lang="scss" scoped>
.col_3_container {
  .c_3_b_1 {
    width: 100%;
    height: 6%;
    flex-shrink: 0;
    display: flex;
    justify-content: space-between;
    .headlines {
      display: flex;
      align-items: center;
      .img {
        width: 46px;
        height: 46px;
      }
      .text {
        height: 46px;
        font-family: PangMenZhengDao, PangMenZhengDao;
        font-weight: 600;
        font-size: 48px;
        line-height: 42px;
        letter-spacing: 6px;
        font-style: normal;
        text-transform: none;
        text-stroke: 1px rgba(171, 214, 255, 0.5);
        text-align: center;
        padding-left: 5px;
        background: linear-gradient(90deg, #EAF5FF 0%, #637986 100%);
        -webkit-text-stroke: 1px rgba(171, 214, 255, 0.5);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    .search {
      width: 483px;
      height: 46px;
      background: linear-gradient(180deg, rgba(2,48,108,0.9) 0%, rgba(2,48,108,0.9) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      border-radius: 2px 2px 2px 2px;
      bottom: 1px solid;
      border-image: linear-gradient(180deg, rgba(0,170,255,0.9), rgba(0,170,255,0.6)) 1 1;
      padding-left: 10px;
      font-size: 24px;
      color: #DEF0FF;
    }
  }
  .c_3_b_1_1  {
    height: 62%;
    .body {
      padding:5px!important;
      height: calc(100% - 10px)!important;
    }
    :deep .el-carousel__indicator--horizontal {
      display: none;
    }
    :deep ::-webkit-scrollbar {
      width: 0px;
    }
    .peakVideoBox {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 5px;
      .peakVideo {
        background: url("@/assets/images/layout/videoBg.png") no-repeat;
        background-size: 100% 100%;
        width: 32%;
        height: 27%;
        .videoH {
          padding: 8px 10px;
          font-family: Alibaba PuHuiTi 2, Alibaba PuHuiTi 20;
          font-weight: normal;
          font-size: 20px;
          color: #ffffff;
          text-align: left;
        }
      }
    }
  } 

  .c_3_b_2 {
    width: 100%;
    height: 31%;
    margin-top: 10px;
    flex-shrink: 0;
    .body {
      padding:5px!important;
    }
    .peakVideoBox {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .peakVideo {
        background: url("@/assets/images/layout/videoBg.png") no-repeat;
        background-size: 100% 100%;
        width: 32%;
        height: 28%;
        .videoH {
          padding: 2px 10px;
          font-family: Alibaba PuHuiTi 2, Alibaba PuHuiTi 20;
          font-weight: normal;
          font-size: 20px;
          color: #ffffff;
          text-align: left;
        }
        .videoImg {
          display: inline-block;
          width: 100%;
          height: 152px;
        }
      }
      .peakVideo2 {
        background: url("@/assets/images/layout/videoBg.png") no-repeat;
        background-size: 100% 100%;
        width: 66%;
        height: 28%;
        .videoH {
          padding: 2px 10px;
          font-family: Alibaba PuHuiTi 2, Alibaba PuHuiTi 20;
          font-weight: normal;
          font-size: 20px;
          color: #ffffff;
          text-align: left;
        }
      }
    } 
  }
}
</style>