<template>
  <PageColumnVue class="col_4_container" :width="13.33">
    <TopBlockVue title="值班信息展示" icon="Frame111112x" />
    <div style="padding: 0 10px ;background: linear-gradient(to top, #022845 20%, #021E2F);">
      <SubBlockVue tabs="市局值班" :moreShow="false" class="c_1_b_1_c">
        <div class="cityPeopleInfoBox">
          <div class="cityPeopleInfo">
            <div class="text">市局机关备勤 <span>45人</span></div>
            <div class="text">各县市分局备勤 <span>45人</span></div>
          </div>
          <div class="cityPeopleInfos">
            <img class="img" src="../../../assets/images/layout/Maskroup@2x.png" alt="">
            <div>
              <div class="text">主任 <span>张其</span></div>
              <div class="tel">13714985319</div>
            </div>
          </div>
          <div class="cityPeopleInfos">
            <img class="img" src="../../../assets/images/layout/Maskroup@2x.png" alt="">
            <div>
              <div class="text">主任 <span>刘爽</span></div>
              <div class="tel">13714985319</div>
            </div>
          </div>
          <div class="cityPeopleInfos">
            <img class="img" src="../../../assets/images/layout/Maskroup@2x.png" alt="">
            <div>
              <div class="text">主任 <span>葛宜</span></div>
              <div class="tel">13714985319</div>
            </div>
          </div>
        </div>
      </SubBlockVue>
      <SubBlockVue tabs="“情指行”运作中心值班" :moreShow="false" class="c_1_b_2_c">
        <div class="fingerActionBox">
          <div class="fingerAction">
            <div class="fingerActionHeader">
              <div class="text">带班</div>
              <img class="img" src="../../../assets/images/layout/avatar.jpg" alt="">
            </div>
            <div class="name">李时</div>
            <div class="tel">13714985319</div>
          </div>
          <div class="fingerAction">
            <div class="fingerActionHeader">
              <div class="text">调度</div>
              <img class="img" src="../../../assets/images/layout/avatar.jpg" alt="">
            </div>
            <div class="name">陈宸</div>
            <div class="tel">13714985319</div>
          </div>
          <div class="fingerAction">
            <div class="fingerActionHeader">
              <div class="text">情报</div>
              <img class="img" src="../../../assets/images/layout/avatar.jpg" alt="">
            </div>
            <div class="name">郑宜</div>
            <div class="tel">13714985319</div>
          </div>
        </div>
      </SubBlockVue>
      <SubBlockVue tabs="舆情专班值班" :moreShow="false" class="c_1_b_3_c">
        <div class="feelingBox">
          <div class="feeling">
              <img class="img" src="../../../assets/images/layout/avatar.jpg" alt="">
            <div class="name">带班 李一骢</div>
            <div class="tel">13714985319</div>
          </div>
          <div class="feeling">
            <img class="img" src="../../../assets/images/layout/avatar.jpg" alt="">
            <div class="name">副班 张好斌</div>
            <div class="tel">16714985319</div>
          </div>
          <div class="feeling">
            <img class="img" src="../../../assets/images/layout/avatar.jpg" alt="">
            <div class="name">副班 何龙</div>
            <div class="tel">15714976519</div>
          </div>
        </div>
      </SubBlockVue>
      <SubBlockVue tabs="民意有感中心值班" :moreShow="false" class="c_1_b_4_c">
        <div class="feelingBox">
          <div class="feeling">
              <img class="img" src="../../../assets/images/layout/avatar.jpg" alt="">
            <div class="name">带班 张斌</div>
            <div class="tel">13714985319</div>
          </div>
          <div class="feeling">
            <img class="img" src="../../../assets/images/layout/avatar.jpg" alt="">
            <div class="name">副班 李骢</div>
            <div class="tel">16714985319</div>
          </div>
          <div class="feeling">
            <img class="img" src="../../../assets/images/layout/avatar.jpg" alt="">
            <div class="name">副班 王龙</div>
            <div class="tel">15714976519</div>
          </div>
        </div>
      </SubBlockVue>
    </div>
  </PageColumnVue>
</template>
<script>
    import TopBlockVue from "@/components/layout/TopBlock";
    import PageColumnVue from "@/components/layout/PageColumn";
    import SubBlockVue from "@/components/layout/SubBlock";
    export default {
      name: "Column4Com",
      components: {
        PageColumnVue,
        SubBlockVue,
        TopBlockVue,
      },
      data() {
        return {}
      },
    }
</script>
<style lang="scss" scoped>
.col_4_container {
  .c_1_b_1_c, .c_1_b_2_c, .c_1_b_3_c, .c_1_b_4_c {
    width: 100%;
    height: 23%;
    margin-top: 7px;
  }
  .c_1_b_1_c {
    .cityPeopleInfoBox {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .cityPeopleInfo {
        width: 48%;
        height: 60px;
        background: url('../../../assets/images/layout/Frame-10875.png') no-repeat;  
        background-size: 100%;
        margin-bottom: 15px;
        .text {
          font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20; 
          font-weight: normal;
          font-size: 16px;
          color: #FFFFFF;
          text-align: left;
          margin-top: 5px;
          margin-left: 20px;
          display: flex;
          justify-content: space-between;
          span {
            color: #00A3FF;
            font-weight: 400;
            width: 40px;
            padding-right: 15px;
          }
        } 
      }
      .cityPeopleInfos {
        width: 48%;
        height: 60px;
        display: inline-block;
        background: url('../../../assets/images/layout/Frame-10876.png') no-repeat;  
        background-size: 100% 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .img {
          width: 58px;
          height: 58px;
          margin-left: 10px;
        }
        div {
          .text {
            font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20; 
            font-weight: normal;
            font-size: 16px;
            color: #FFFFFF;
            text-align: right;
            margin-top: 3px;
            padding-right: 20px;
            span {
              color: #0085FF;
              font-weight: 400;
              width: 40px;
              padding-left: 15px;
            }
          } 
          .tel {
            height: 24px;
            font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
            font-weight: normal;
            font-size: 16px;
            color: #00EAFF;
            line-height: 24px;
            text-align: right;
            margin-top: 10px;
            padding-right: 15px;
          }
        } 
      } 
    }
  }
  .c_1_b_2_c {
    .fingerActionBox {
      margin-top: 5px;
      display: flex;
      justify-content: space-around;
      .fingerAction {
        width: 33%;
        background: rgba(0, 50, 86, 0.6);
        border-radius: 4px 4px 4px 4px;
        border: 1px solid #104068;
        .fingerActionHeader {
          width: 100%;
          height: 48px;
          display: flex;
          font-size: 12px;
          color: #FFFF00;
          line-height: 24px;
          margin-left: 8px;
          margin-top: 10px;
          .text {
            font-size: 16px;
            width: 75px;
            padding-left: 10px;
          }
          img {
            width: 52px;
            height: 52px;
            border-radius: 50%;
          }
        }
        .name {
          text-align: center;
          font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
          font-weight: normal;
          font-size: 16px;
          color: #FFFFFF;
          line-height: 24px;
          margin-top: 5px;
        }
        .tel {
          text-align: center;
          font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
          font-weight: normal;
          font-size: 16px;
          color: #00A3FF;
          line-height: 24px;
          margin-bottom: 5px;
        }
      }
      div:nth-child(1) {
        .fingerActionHeader {
          .text {
            color: #FFFF00;
          }
        }
      }
      div:nth-child(2) {
        .fingerActionHeader {
          .text {
            color: #00CC03;
          }
        }
      }
      div:nth-child(3) {
        .fingerActionHeader {
          .text {
            color: #8D4EDA;
          }
        }
      }
  }
  }
  .c_1_b_3_c, .c_1_b_4_c {
    .feelingBox {
      width: 100%;
      height: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
      background: url('../../../assets/images/layout/feelingBg.png') no-repeat;  
      background-size: 100% 100%;
      padding: 10px;
      .feeling {
        width: 32%;
        height: 100%;
        background: rgba(0,105,185,0.1);
        border-radius: 4px 4px 4px 4px;
        border: 1px solid #104068;
        .img {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: block;
          margin:  0 auto;
          margin-top: 5px;
        }
        .name {
          text-align: center;
          font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
          font-weight: normal;
          font-size: 16px;
          color: #FFFFFF;
          line-height: 24px;
        }
        .tel {
          text-align: center;
          font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
          font-weight: normal;
          font-size: 16px;
          color: #F5F5F5;
          line-height: 24px;
        }
      }
      div:nth-child(1) {
        .name {
          color: #FFFF00;
        }
      }
      div:nth-child(2) {
        .name {
          color: #00CC03;
        }
      }
      div:nth-child(3) {
        .name {
          color: #8D4EDA;
        }
      }
    }
  }
  .c_1_b_3_c {
    .feelingBox {
      padding: 0px;
      background: none;
      .feeling { 
        .tel {
          color: #00A3FF;
        }
      }
      div:nth-child(1), div:nth-child(2), div:nth-child(3) {
        .name {
          margin-top: 10px;
          color: #CDE9FF;
        }
      }
    }
  }
}
</style>