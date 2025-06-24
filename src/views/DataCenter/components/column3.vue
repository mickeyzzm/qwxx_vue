<template>
  <PageColumnVue class="col_3_container" :width="33.33">
    <div class="data_wrap_b_1">
      <div class="title_b">
        <div class="label">大数据中心总数据量</div>
        <div v-for="(item,index) in totalList.split('')" :key="index" class="total">{{ item }}</div>
      </div>
      <div class="cont_b">
        <div class="header">大数据中心</div>
        <div class="name">采集</div>
        <div class="dialog_con3">
          <div class="info_item"><span class="infoname">采集数据</span>2,134,283 条</div>
          <div class="info_item"><span class="infoname">本月新增</span>20215 条</div>
          <div class="info_item"><span class="infoname">数据项</span>133 个</div>
        </div>
        <div class="name server">服务</div>
        <div class="dialog_con3 dialog_con3_b_l">
          <div class="info_item"><span class="infoname">数据服务</span>532 个</div>
          <div class="info_item"><span class="infoname">服务申请</span>210 项</div>
          <div class="info_item"><span class="infoname">服务调用</span>19293 次</div>
          <div class="info_item"><span class="infoname">服务失败</span>827 次</div>
        </div>
        <div class="name watch">监控</div>
        <div class="dialog_con3 dialog_con3_b_r">
          <div class="info_item"><span class="infoname">访问用户</span>237 个</div>
          <div class="info_item"><span class="infoname">访问次数</span>20215 条</div>
          <div class="info_item"><span class="infoname">警告数量</span>5896 次</div>
          <div class="info_item"><span class="infoname">异常数据</span>10384 条</div>
        </div>
        <div class="name administer">治理</div>
        <div class="dialog_con3 dialog_con3_r">
          <div class="info_item"><span class="infoname">数据治理</span>834,283 条</div>
          <div class="info_item"><span class="infoname">治理流程</span>16488 次</div>
          <div class="info_item"><span class="infoname">正在运行</span>23 个</div>
        </div>
      </div>
    </div>
  </PageColumnVue>
</template>
    
<script>
  import PageColumnVue from "@/components/layout/PageColumn";
  import SubBlockVue from "@/components/layout/SubBlock";
  export default {
    name: "Column2Com",
    components: {
      PageColumnVue,
      SubBlockVue,
    },
    data() {
      return { 
        totalList: '13765431'
      }
    },
    computed: {
      
    },
    mounted() {
      
    },
    methods: {},
  }
</script>
    
<style lang="scss" scoped>
  .col_3_container {
    .data_wrap_b_1 {
      width: 100%;
      height: 100%;
      background: url("@/assets/images/layout/Maskgroup1292x.png")no-repeat center;
      background-size: 100% 100%;
      padding-top: 20px;
      .title_b {
        display: flex;
        justify-content: center;
        .label {
          height: 46px;
          font-family: HuXiaoBo-NanShen, HuXiaoBo-NanShen;
          font-weight: 400;
          font-size: 30px;
          color: #FFFFFF;
          line-height: 46px;
          letter-spacing: 1px;
          text-align: left;
          font-style: normal;
          text-transform: none;
          padding-right: 20px;
        }
        .total {
          width: 42px;
          height: 48px;
          text-align: center;
          line-height: 48px;
          background: url("@/assets/images/layout/params0982x.png")no-repeat center;
          background-size: 100% 100%;
          font-family: YouSheBiaoTiHei, YouSheBiaoTiHei;
          font-weight: 400;
          font-size: 30px;
          text-align: center;
          color: #FFFFFF;
          margin-left: 5px;
        }
      }
      .cont_b {
        width: 85%;
        height: 740px;
        margin: 0 auto;
        background: url("@/assets/images/layout/box02982x.png")no-repeat center;
        background-size: 100% 100%;
        position: relative;
        .header {
          font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
          font-weight: 600;
          font-size: 36px;
          color: #FFFFFF;
          letter-spacing: 1px;
          text-align: left;
          font-style: normal;
          text-transform: none;
          background: linear-gradient(180deg, #FFFFFF 0%, #86c6e6 58%, #08a4f1 100%);
          -webkit-background-clip: text; 
          -webkit-text-fill-color: transparent;
          position: absolute;
          top: 30%;
          left: 44%;
        }
        .name {
          width: 213px;
          height: 192px;
          font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
          font-weight: normal;
          font-size: 26px;
          color: #00EAFF;
          letter-spacing: 1px;
          text-align: center;
          font-style: normal;
          text-transform: none;
          padding-top: 90px;
          background: url("@/assets/images/layout/Group153022x1.png")no-repeat center;
          background-size: 100% 100%;
          position: absolute;
          top: 38%;
          left: 0.5%;
        } 
        .server {
          background: url("@/assets/images/layout/Group153022x2.png")no-repeat center;
          background-size: 100% 100%;
          position: absolute;
          top: 68%;
          left: 24%;
        }
        .watch {
          background: url("@/assets/images/layout/Group153022x3.png")no-repeat center;
          background-size: 100% 100%;
          position: absolute;
          top: 68%;
          left: 60%;
        }
        .administer {
          background: url("@/assets/images/layout/Group153022x4.png")no-repeat center;
          background-size: 100% 100%;
          position: absolute;
          top: 40%;
          left: 86%;
        }
        .dialog_con3 {
          width: 237px;
          height: 176px; 
          background: url("@/assets/images/layout/Group5002xBot.png")no-repeat center;
          background-size: 100% 100%;
          position: absolute;
          left: 0%;
          top: 16%;
          .info_item {
            width: 229px;
            height: 42px;
            line-height: 42px;
            background: url("@/assets/images/layout/Frame273192x.png")no-repeat center;
            background-size: 100% 100%;
            margin-top: 6px;
            padding-left: 16px;
            font-family: AlibabaPuHuiTi-2-85-Bold;
            font-weight: normal;
            font-size: 20px;
            color: #0091FF;
            text-align: left;
            font-style: normal;
            text-transform: none;
            .infoname {
              width: 92px;
              display: inline-block;
              color: #FFFFFF;
              font-family: normal;
            }
          }
          .info_item:nth-child(2) {
            color: #00EAFF;
          }
          .info_item:nth-child(3) {
            color: #FFC700;
          }
          .info_item:nth-child(4) {
            color: #CC5120;
          }
        }
        .dialog_con3_r {
          position: absolute;
          left: 85%;
          top: 16%;
        }
        .dialog_con3_b_l {
          width: 264px;
          height: 201px;
          position: absolute;
          left: 8%;
          top: 65%;
          background: url("@/assets/images/layout/Group5002xRig.png")no-repeat center;
          background-size: 100% 100%;
        }
        .dialog_con3_b_r {
          width: 264px;
          height: 201px;
          position: absolute;
          left: 73%;
          top: 65%;
          background: url("@/assets/images/layout/Group5002xLef.png")no-repeat center;
          background-size: 100% 100%; 
          padding-left: 31px;
        }
      }
    } 
  }
</style>