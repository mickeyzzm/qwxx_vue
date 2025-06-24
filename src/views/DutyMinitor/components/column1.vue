<template>
  <PageColumnVue class="col_1_container" :width="16.665">
    <TopBlockVue title="人员出勤情况统计" icon="Frame09112x" />
      <div class="col_1_w">
        <div class="rask_box">
          <div class="rask_item">今日出勤人员<p class="value">78</p></div>
          <div class="rask_item">今日休假人员<p class="value">12</p></div>
          <div class="rask_item">本周出勤人员<p class="value">562</p></div>
          <div class="rask_item">本周休假人员<p class="value">68</p></div>
        </div>
        <SubBlockVue tabs="任务类型统计" :moreShow="false" class="c_1_l_1_w">
          <div class="topSearchBtn">
            <p v-for="(item, index) in btnList" @click="handelBtn(index)" :class="{'dateTypeBtnIdx': dateTypeBtnIdx == index}" :key="index" class="btnClass">{{ item.name }}</p> 
          </div>
          <div class="pe_type_box">
            <div v-for="(item, index) in statisList" class="pe_type_item">{{ item.label }}<span class="value">{{ item.value }}</span></div>
          </div>
        </SubBlockVue> 
        <SubBlockVue tabs="任务类型统计" :moreShow="false" class="c_1_l_2_w">
          <div class="table_info">
              <div class="tableHeader">
                  <p>序号</p>
                  <p>单位名称</p>
                  <p>执勤岗位</p>
                  <p>应值班人数/实际值班人数</p>
              </div>
              <vue-seamless-scroll v-if="tableData.length > 0" :data="tableData" :class-option="classOption" v-cloak class="seamless_warp">
                <div class="tableBody">
                    <div v-for="(item, index) in tableData" :key="index" class="tableItem">
                        <div class="index">{{ index + 1 }}</div>
                        <div class="name">{{ item.adress }}</div>
                        <div class="name">{{ item.type }}</div>
                        <!-- active -->
                        <div class="name">
                          <span>{{ item.num2 }}/</span>
                          <span>{{ item.num1 }}</span>
                        </div>
                    </div> 
                </div>
              </vue-seamless-scroll>
          </div>
      </SubBlockVue>
      </div>
  </PageColumnVue>
</template>
<script>
  import * as echarts from "echarts";
  import PageColumnVue from "@/components/layout/PageColumn";
  import SubBlockVue from "@/components/layout/SubBlock";
  import TopBlockVue from "@/components/layout/TopBlock";
  export default {
    name: "Column3Com",
    components: {
      PageColumnVue,
      SubBlockVue,
      TopBlockVue,
    },
    data() {
      return {
        dateTypeBtnIdx: 0,
        btnList: [
          { name: '今日', value: 'today'},
          { name: '本周', value: 'sevenDay'},
        ],
        statisList: [
          { label: '民警', value: 8000 },
          { label: '辅警', value: 28 },
          { label: '巡控网格', value: 53 },
          { label: '135快反圈', value: 10 },
          { label: '必巡点', value: 8 },
          { label: '驻停点', value: 17 },
          { label: '巡控路线', value: 10 },
          { label: '联勤武装巡区', value: 10 },
        ],  
        tableData: [
          { id: '025600111832', num1: '38', num2: '40', type: '110接警岗', adress: '河北省承德市公安局双桥分局' },
          { id: '025600111832', num1: '38', num2: '40', type: '110接警岗', adress: '河北省承德市公安局双桥分局' },
          { id: '025600111832', num1: '38', num2: '40', type: '110接警岗', adress: '河北省承德市公安局双桥分局' },
          { id: '025600111832', num1: '38', num2: '40', type: '110接警岗', adress: '河北省承德市公安局双桥分局' },
          { id: '025600111832', num1: '38', num2: '40', type: '110接警岗', adress: '河北省承德市公安局双桥分局' },
          { id: '025600111832', num1: '38', num2: '40', type: '110接警岗', adress: '河北省承德市公安局双桥分局' },
          { id: '025600111832', num1: '38', num2: '40', type: '110接警岗', adress: '河北省承德市公安局双桥分局' },
          { id: '025600111832', num1: '38', num2: '40', type: '110接警岗', adress: '河北省承德市公安局双桥分局' },
          { id: '025600111832', num1: '38', num2: '40', type: '110接警岗', adress: '河北省承德市公安局双桥分局' },
          { id: '025600111832', num1: '38', num2: '40', type: '110接警岗', adress: '河北省承德市公安局双桥分局' },
          { id: '025600111832', num1: '38', num2: '40', type: '110接警岗', adress: '河北省承德市公安局双桥分局' },
          { id: '025600111832', num1: '38', num2: '40', type: '110接警岗', adress: '河北省承德市公安局双桥分局' },
          { id: '025600111832', num1: '38', num2: '40', type: '110接警岗', adress: '河北省承德市公安局双桥分局' },
          { id: '025600111832', num1: '38', num2: '40', type: '110接警岗', adress: '河北省承德市公安局双桥分局' },
          { id: '025600111832', num1: '38', num2: '40', type: '110接警岗', adress: '河北省承德市公安局双桥分局' },
          { id: '025600111832', num1: '38', num2: '40', type: '110接警岗', adress: '河北省承德市公安局双桥分局' },
          { id: '025600111832', num1: '38', num2: '40', type: '110接警岗', adress: '河北省承德市公安局双桥分局' },
          { id: '025600111832', num1: '38', num2: '40', type: '110接警岗', adress: '河北省承德市公安局双桥分局' },
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
      handelBtn (index) {
        this.dateTypeBtnIdx = index
      },
    }
  }
</script>
<style lang="scss" scoped>
.col_1_container {
  .col_1_w {
    width: 100%;
    height: 94%;
    padding: 0 10px;
    background: linear-gradient(to top, #022845 20%, #021E2F);
    .rask_box {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin: 15px 0;
      flex-wrap: wrap;
      .rask_item {
        width: 24%;
        height: 64px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: url("@/assets/images/layout/Frame2731732x1.png")no-repeat center;
        background-size: 100% 100%;
        font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
        font-size: 16px;
        color: #CDE9FF;
        padding-left: 75px;
        .value {
          font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
          font-size: 18px;
          color: #00AAFF;
        }
      }
      .rask_item:nth-child(2), .rask_item:nth-child(4) {
        background: url("@/assets/images/layout/Frame2731732x2.png")no-repeat center;
        background-size: 100% 100%;
        .value {
          color: #FFC700;
        }
      }
      .rask_item:nth-child(3) {
        background: url("@/assets/images/layout/Frame2731732x3.png")no-repeat center;
        background-size: 100% 100%;
        .value {
          color: #00EAFF;
        }
      }
    }
    .c_1_l_1_w {
      margin-top: 10px;
      position: relative;
      .topSearchBtn {
        position: absolute;
        top: -23%;
        right: 1%;
        display: flex;
        .btnClass {
          height: 32px;
          font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
          font-weight: normal;
          font-size: 14px;
          color: #00AAFF;
          line-height: 32px;
          text-align: left;
          font-style: normal;
          text-transform: none;
          padding: 0px 18px;
          background: radial-gradient( 0% 20% at 56% 57%, rgba(0,128,255,0.1) 0%, rgba(0,128,255,0.2) 100%), rgba(0,170,255,0.2);
          border-radius: 2px 2px 2px 2px;
          border: 2px solid;
          border-image: linear-gradient(360deg, rgba(0, 170, 255, 0.6), rgba(0, 170, 255, 0)) 3 3;
          margin-left: 10px;
          cursor: pointer;
        }
        .dateTypeBtnIdx {
          color: #DEF0FF;
          background: #00AAFF;
        }
      }
      .pe_type_box {
        width: 100%;
        height: 147px;
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        flex-wrap: wrap;
        .pe_type_item {
          width: 24%;
          height: 58px;
          line-height: 58px;
          background: url("@/assets/images/layout/Frame3213153882x2.png")no-repeat center;
          background-size: 100% 100%;
          display: flex;
          align-items: center;   
          justify-content: space-between;
          font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
          font-weight: normal;
          font-size: 18px;
          color: #CDE9FF;
          text-align: left;
          text-transform: none;
          padding: 0 0 0 14px;
          .value {
            width: 42px;
            font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
            font-size: 16px;
            color: #00EAFF;
          }
        } 
        .pe_type_item:nth-child(1) {
          background: url("@/assets/images/layout/Frame3213153882x1.png")no-repeat center;
          background-size: 100% 100%;
          .value {
            width: 60px;
          }
        }
      }
    }
    .c_1_l_2_w {
      margin-top: 10px;
      .table_info {
            width: 100%;
            height: 380px;
            overflow: hidden;
            .tableHeader {
                width: 100%;
                height: 40px;
                background: url("@/assets/images/layout/tb_th292x.png")no-repeat center;
                  background-size: 100% 100%;
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
                  color: #fff;
                  line-height: 22px;
                }
                p:nth-child(1) {
                  flex: 0.3; 
                }
                p:nth-child(2) {
                  flex: 3; 
                }
                p:nth-child(3) {
                  flex: 1;
                }
                p:nth-child(4) {
                  flex: 2; 
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
                .index {
                  width: 35px;
                  height: 32px;
                  line-height: 32px;
                  text-align: center;
                  color: #fff;
                  border-radius: 2px 2px 2px 2px;
                  background: url("@/assets/images/layout/Frame11082x.png")no-repeat center;
                  background-size: 100% 100%;
                  margin-left: 10px;
                }
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
                div:nth-child(2) {
                  flex: 3; 
                }
                div:nth-child(3) {
                  flex: 1;
                }
                div:nth-child(4) {
                  flex: 2;
                  color: #00AAFF;
                } 
                .active {
                  color: #00CC03; 
                }
              }
              div:nth-child(even) {
                background: rgba(2,40,73,0.1);
              }
              div:nth-child(odd) {
                background: rgba(53, 143, 226, 0.1);
              }
            }
        }
    }
  }
}
</style>