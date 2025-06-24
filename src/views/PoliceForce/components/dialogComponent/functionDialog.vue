<template>
  <div class="c_1_b_2_function_dialog">
    <div class="cancelTitle">
      <p>{{ title }}</p>
      <p class="cancelIcon" @click="handelCancel">X</p>
    </div>
    <div class="textBox">
      <div v-for="(item, index) in dataList" @click="handelItem(item.value)" :key="index" :title="item.name">{{ item.name }}</div>
    </div>
  </div>
</template>
<script>
    export default {
      data() {
        return {
          dataList: [
            { name: '百度百度百度百度百度百度百度百度百度百度', value: 'https://www.baidu.com/?tn=62095104_19_oem_dg'},
            { name: '百度', value: 'https://www.baidu.com/?tn=62095104_19_oem_dg'},
            { name: '百度', value: 'https://www.baidu.com/?tn=62095104_19_oem_dg'},
            { name: '百度', value: 'https://www.baidu.com/?tn=62095104_19_oem_dg'},
          ],
          title: ''
        };
      },
      methods: {
        init (title) {
          this.title = title
          let data1 = [
            { name: '智能勤务', value: 'http://20.168.34.195/qwxx/login'},
            { name: '人员管控', value: 'http://20.168.34.71:8028/main/decision-center/search-home'},
            { name: '一体化云指通道', value: 'http://20.168.34.85/login?redirect=%2Findex'},
            { name: '110接处警', value: 'http://20.168.26.176:28080/ds-uac-web/login'},
            { name: '地址资源库', value: 'http://20.168.143.30:7189/addrdata/standardAddress/addressStatisticsConfig'},
          ]
          let data2 = [
            { name: '智库', value: 'http://10.24.2.236/ebga/'},
            { name: '禁毒云（百灵搜）', value: 'http://dami.jd.gd/nebula/SSO!login.action'},
            { name: '云搜平台', value: 'https://ys.zyfw.ga/'},
            { name: '智慧搜', value: 'http://21.1.12.45:8080/bsp/jsp/hebei/signin.jsp'},
            { name: '警务百度', value: 'http://20.168.20.30/index.jsp'},
            { name: '河北图像信息综合应用平台', value: 'http://20.3.16.116/portal/cas/loginPage?service'},
            { name: '承德市公安局图像围栏', value: 'http://20.168.100.182:11180/fp/login'},
            { name: '全国刑专平台', value: 'http://xz.xz.ga/sso/login.jsp'},
          ]
          let data3 = [
            { name: '智汇平台', value: 'http://zhihui.eb/login?redirect=%2Fcalendar'},
            { name: '市级情报协同办公平台', value: 'http://20.168.34.59/user.php?mod=login'},
            { name: '合成作战平台', value: 'http://20.168.20.37:30001/page/combined-navigation/#/'},
            { name: '电子围栏平台', value: 'http://20.168.11.22/#/login'},
            { name: '执法智加系统', value: 'http://20.168.131.10/jdgl/#/login/'},
          ]
          let data4 = [
            { name: '人员管控', value: 'http://20.168.34.71:8028/main/decision-center/search-home'},
            { name: '一体化云指通道', value: 'http://20.168.34.85/login?redirect=%2Findex'},
            { name: '云搜平台', value: 'https://ys.zyfw.ga/'},
            { name: '智慧搜', value: 'http://21.1.12.45:8080/bsp/jsp/hebei/signin.jsp'},
            { name: '合成作战平台', value: 'http://20.168.20.37:30001/page/combined-navigation/#/'},
            { name: '电子围栏平台', value: 'http://20.168.11.22/#/login'},
            { name: '执法智加系统', value: 'http://20.168.131.10/jdgl/#/login/'},
          ]
          if (title == '功能模块') {
            this.dataList = data1
          } else if(title == '查询系统') {
            this.dataList = data2
          } else if (title == '应用平台') {
            this.dataList = data3
          } else if (title == '常用收藏') {
            this.dataList = data4
          }
        },
        handelItem (value) {
          window.open(value, '_blank')
        },
        handelCancel() {
          this.$emit('handlerClose')
        },
      }
    };
</script>
<style lang="scss" scoped>
.c_1_b_2_function_dialog {
  width: 267px;
  height: 404px;
  position: absolute;
  bottom: 1.4%;
  left: 92.5%;
  z-index: 4;
  transform: translate(-50%,-50%);
  background: #043561;
  overflow: hidden;
  .cancelTitle {
    height: 50px;
    line-height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 25px;
    border-bottom: 1px solid rgba(125, 131, 218, 0.6);
    p {
      font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
      font-weight: normal;
      font-size: 22px;
      color: #FFFFFF;
      line-height: 24px;
      text-align: justified;
      font-style: normal;
      text-transform: none;
    }
    .cancelIcon {
      width: 30px;
      height: 25px;
      font-size: 20px;
      cursor: pointer;
    }
  }
  .textBox {
    width: 94%;
    height: 90%;
    overflow-y: auto;
    margin-left: 3%;
    margin-right: 2%;
    margin-top: 3%;
    overflow: auto;
    background: #043561; 
    div {
      width: 90%;
      color: #FFFFFF;
      font-size: 16px;
      margin-top: 10px;
      margin-left: 10px;
      cursor: pointer;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  } 
}
</style>