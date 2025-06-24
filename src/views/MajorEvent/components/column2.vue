<template>
    <PageColumnVue class="col_2_container" :width="10">
        <div class="text">重大活动列表</div>
        <div v-for="(item, index) in tableData" class="tableCon">
            <div class="title">{{ item.title }}</div>
            <div class="time">举办时间: {{ item.time }}</div>
            <div class="content">活动地点: {{ item.content }}</div>
            <div class="bot">
                <div class="bot_con"><img src="../../../assets/images/layout/Frame1009872x1.png" alt="">警员 <span>{{ item.peNum }}</span></div>
                <div class="bot_con"><img src="../../../assets/images/layout/Frame1009872x2.png" alt="">警车 <span>{{ item.carNum }}</span></div>
                <div @click="handelDetail()" class="btn">详情</div>
            </div> 
        </div>
        <div class="pagination">
            <el-pagination
                layout="prev, pager, next"
                :total="50">
            </el-pagination>
        </div>
    </PageColumnVue>
</template>
<script>
import PageColumnVue from "@/components/layout/PageColumn"
import SubBlockVue from "@/components/layout/SubBlock"
export default {
    name: "Column1Com",
    components: {
        PageColumnVue,
        SubBlockVue,
    },
    data () {
        return {
            tableData: [
                { 
                    title: '承德市奥林匹克体育中心火灾事件', 
                    time: ' 2024-03-12 08:00 至 2024-03-14 18:00 ',
                    content: '承德市奥林匹克体育中心', 
                    peNum: '120', 
                    carNum: '58' 
                },
                { 
                    title: '承德市奥林匹克体育中心火灾事件', 
                    time: ' 2024-03-12 08:00 至 2024-03-14 18:00 ',
                    content: '承德市奥林匹克体育中心', 
                    peNum: '120', 
                    carNum: '58' 
                },
                { 
                    title: '承德市奥林匹克体育中心火灾事件', 
                    time: ' 2024-03-12 08:00 至 2024-03-14 18:00 ',
                    content: '承德市奥林匹克体育中心', 
                    peNum: '120', 
                    carNum: '58' 
                },
                { 
                    title: '承德市奥林匹克体育中心火灾事件', 
                    time: ' 2024-03-12 08:00 至 2024-03-14 18:00 ',
                    content: '承德市奥林匹克体育中心', 
                    peNum: '120', 
                    carNum: '58' 
                },
            ],
            alueSelect: '1',
            filterText: '',
            currCheckdId: '', 
        }
    },
    watch: {},
    methods: {
        handelDetail () {
            this.$router.push({
                name: 'MajorEvent/detail',
            })
        },
        filterNode(value, data) {
            if (!value) return true;
            return data.label.indexOf(value) !== -1;
        },
        getCurrentNode (nodeObj, nodeState) { 
            this.currCheckdId = nodeObj.id
            // 判断当前状态是选中还是取消选中
            // let nodes = this.$refs.tree.getCheckedNodes()
            // if (nodes.length > 0) { 
            //     this.isCheckdNode = true
            // } else {
            //     this.isCheckdNode = false
            // }
        },
    },
}
</script>
<style lang="scss" scoped>
.col_2_container {
    background: linear-gradient( 180deg, rgba(0,163,255,0.1) 0%, rgba(0,163,255,0) 100%);
    border-radius: 0px 0px 0px 0px;
    border: 1px solid;
    border-image: linear-gradient(180deg, rgba(0, 170, 255, 1), rgba(0, 170, 255, 0), rgba(0, 170, 255, 1)) 1 1;
    .text {
        width: 100%;
        height: 40px;
        line-height: 40px;
        background: rgba(0,133,255,0.3);
        text-align: center;
        font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
        font-weight: normal;
        font-size: 18px;
        color: #00AAFF;
        text-align: center;
        font-style: normal;
        text-transform: none;
    }
    .tableCon {
        width: 100%;
        height: 158px;
        overflow: auto;
        padding: 0 20px;
        margin-top: 16px;
        background: url("@/assets/images/layout/Frame2135402x.png")no-repeat center;
        background-size: 100% 100%;
        .title {
            height: 36px;
            font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
            font-weight: normal;
            font-size: 16px;
            color: #00c3ff;
            line-height: 36px;
            text-align: left;
            font-style: normal;
            text-transform: none; 
            padding-left: 5px;
        }
        .content, .time{
            font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
            font-weight: normal;
            font-size: 16px;
            color: #FFFFFF; 
            text-align: justified;
            font-style: normal;
            text-transform: none;
            margin-top: 10px;
        }
        .content {
            width: 100%;
            white-space: nowrap;  
            overflow: hidden;  
            text-overflow: ellipsis;  
        }
        .bot {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 40px;
            margin-top: 10px;
            .bot_con {
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
                font-weight: normal;
                font-size: 16px;
                color: #FFFFFF;
                text-align: justified;
                font-style: normal;
                text-transform: none;
                img {
                    width: 26px;
                    height: 26px;
                    margin-right: 5px;
                }
                span {
                    color: #00EAFF;
                    padding-left: 10px;
                }
            }
            .btn {
                display: block;
                width: 63px;
                height: 30px;
                text-align: center;
                line-height: 30px;
                background: #0091FF;
                color: #FFFFFF;
                font-size: 14px;
                border-radius: 2px 2px 2px 2px;
                cursor: pointer;
            }
        }
    }
    .pagination {
        margin-top: 16px;
        text-align: right;
        height: 50px;
    }
}
</style>