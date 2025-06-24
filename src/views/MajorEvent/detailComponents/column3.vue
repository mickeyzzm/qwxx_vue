<template>
  <PageColumnVue class="col_3_container" :width="33.33">
      <div class="c_1_l_w">
        <TopBlockVue title="警力列表" icon="Frame2902x" />
        <div class="table_info">
          <div class="tableHeader">
            <p>序号</p>
            <p>姓名</p>
            <p>职务</p>
            <p>安保活动</p>
            <p>操作</p>
          </div>
          <vue-seamless-scroll v-if="tableData.length > 0" :data="tableData" :class-option="classOption" v-cloak class="seamless_warp">
            <div class="tableBody">
              <div v-for="(item, index) in tableData" :key="index" class="tableItem">
                <div class="name">{{ index + 1 }}</div>
                <div class="name">{{ item.carId }}</div>
                <div class="name">{{ item.adress }}</div>
                <div class="name">{{ item.position }}</div>
                <div class="name active">定位</div>
              </div> 
            </div>
          </vue-seamless-scroll>
        </div>
      </div>
      <div class="c_1_l_w c_1_2_w">
        <TopBlockVue title="警车列表" icon="Frame002x" />
        <div class="table_info">
          <div class="tableHeader">
            <p>车牌号</p>
            <p>驾驶员</p>
            <p>所属部门</p>
            <p>操作</p>
          </div>
          <vue-seamless-scroll v-if="tableData.length > 0" :data="tableData" :class-option="classOption" v-cloak class="seamless_warp">
            <div class="tableBody">
              <div v-for="(item, index) in tableData" :key="index" class="tableItem">
                <div class="name">{{ index + 1 }}</div>
                <div class="name">{{ item.carId }}</div>
                <div class="name">{{ item.adress }}</div>
                <div class="name active">定位</div>
              </div> 
            </div>
          </vue-seamless-scroll>
        </div>
      </div>
      <div class="c_1_3_w">
        <TopBlockVue title="活动监控视频" icon="icon_demo" />  
        <div class="peakVideoBox">
          <div v-for="(item,index) in 8" :key="index" class="peakVideo">
            <div class="videoH">视频名称</div>
            <video controls width="100%" height="80%">
              <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />                
            </video>
          </div>
        </div>
      </div>
  </PageColumnVue>
</template>
<script>
  import * as echarts from "echarts";
  import PageColumnVue from "@/components/layout/PageColumn";
  import SubBlockVue from "@/components/layout/SubBlock";
  import TopBlockVue from "@/components/layout/TopBlock";
  export default {
    name: "Column5Com",
    components: {
      PageColumnVue,
      SubBlockVue,
      TopBlockVue,
    },
    data() {
      return {
        tableData: [
          { carId: '王帅', adress: '承德首届全民健身大会', position: '安保指挥部部长' },
          { carId: '王帅', adress: '承德首届全民健身大会', position: '安保指挥部部长' },
          { carId: '王帅', adress: '承德首届全民健身大会', position: '安保指挥部部长' },
          { carId: '王帅', adress: '承德首届全民健身大会', position: '安保指挥部部长' },
          { carId: '王帅', adress: '承德首届全民健身大会', position: '安保指挥部部长' },
          { carId: '王帅', adress: '承德首届全民健身大会', position: '安保指挥部部长' },
          { carId: '王帅', adress: '承德首届全民健身大会', position: '安保指挥部部长' },
          { carId: '王帅', adress: '承德首届全民健身大会', position: '安保指挥部部长' },
          { carId: '王帅', adress: '承德首届全民健身大会', position: '安保指挥部部长' },
          { carId: '王帅', adress: '承德首届全民健身大会', position: '安保指挥部部长' },
          { carId: '王帅', adress: '承德首届全民健身大会', position: '安保指挥部部长' },
          { carId: '王帅', adress: '承德首届全民健身大会', position: '安保指挥部部长' },
          { carId: '王帅', adress: '承德首届全民健身大会', position: '安保指挥部部长' },
          { carId: '王帅', adress: '承德首届全民健身大会', position: '安保指挥部部长' },
          { carId: '王帅', adress: '承德首届全民健身大会', position: '安保指挥部部长' },
          { carId: '王帅', adress: '承德首届全民健身大会', position: '安保指挥部部长' },
          { carId: '王帅', adress: '承德首届全民健身大会', position: '安保指挥部部长' },
          { carId: '王帅', adress: '承德首届全民健身大会', position: '安保指挥部部长' },
        ], 
      }
    },
    computed: {
      classOption () {
        return {
          step: 0.3
        }
      }
    },
    mounted() { 
    },
    methods: {
    }
  }
</script>
<style lang="scss" scoped>
.col_3_container {
  width: 100%;
  .c_1_l_w  {
    width: 49.5%;
    height: 49%;
    padding: 10px;
    background: linear-gradient(to top, #022845 20%, #021E2F);
    overflow: hidden;
    display: inline-block;
    .table_info {
      width: 100%;
      height: 83%;
      overflow: auto;
      .tableHeader {
        width: 100%;
        height: 40px;
        background: rgba(2,41,73,0.7);
        border-radius: 0px 0px 0px 0px;
        display: inline-block;
        display: flex;
        align-items: center;
        padding: 0 5px;
        p {
          height: 22px;
          font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
          font-weight: normal;
          display: flex;
          justify-content: center;
          font-size: 16px;
          color: #009CFF;
          line-height: 22px;
        }
        p:nth-child(1) {
          flex: 1; 
        }
        p:nth-child(2) {
          flex: 1;  
        }
        p:nth-child(3) {
          flex: 3;
        }
        p:nth-child(4) {
          flex: 1.5; 
        }
        p:nth-child(5) {
          flex: 1; 
        }
      }
      .seamless_warp { 
        height: 100%;
        overflow: hidden;
      }
      .tableBody {
        width: 100%;
        height: 100%;
        overflow: auto;
        .tableItem {
          height: 40px;
          display: flex;
          align-items: center; 
          margin: 3px 0; 
          .name {
            height: 40px;
            font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
            font-weight: normal;
            font-size: 16px;
            color: rgba(255,255,255,0.87);
            line-height: 40px;
            text-align: center;
            background: none;
            white-space: nowrap;  
            overflow: hidden;  
            text-overflow: ellipsis;  
            cursor: pointer; 
          } 
          div:nth-child(1) {
            flex: 1; 
          }
          div:nth-child(2) {
            flex: 1; 
          }
          div:nth-child(3) {
            flex: 3;
          }
          div:nth-child(4) {
            flex: 1.5; 
          }
          div:nth-child(5) {
            flex: 1; 
          }
          .active {
            color: #00AAFF;
          }
        }
        div:nth-child(even) {
          background: rgba(2,40,73,0.2);
        }
        div:nth-child(odd) {
          background: rgba(82, 122, 255, 0.1);
        }
      }
    }
  }
  .c_1_2_w {
    .table_info {
      .tableHeader {
        p {
          color: #00EAFF;
        }
      }
      .tableBody {
    }
      .tableItem {
        .name {
          color: #00EAFF;
        }
      }
      div:nth-child(even) {
        background: rgba(2,40,73,0.2);
      }
      div:nth-child(odd) {
        background: rgba(82,249,255,0.1);
      }
    }
  }
  .c_1_3_w {
    width: 100%;
    height: 51%;
    padding: 10px;
    background: linear-gradient(to top, #022845 20%, #021E2F);
    margin-top: 16px; 
    .peakVideoBox {
      width: 100%;
      height: 87%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .peakVideo {
        background: url("@/assets/images/layout/videoBg.png")no-repeat;
        background-size: 100% 100%;
        width: 24%;
        height: 45%;
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
}
</style>