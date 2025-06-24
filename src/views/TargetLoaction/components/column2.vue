<template>
    <PageColumnVue class="col_2_container" :width="10">
        <div class="text">重点目标场所目录</div>
        <div class="treeCon">
            <el-input v-model="filterText" placeholder="请输入搜索内容" class="valueSearch" />
            <el-tree
                ref="tree"
                :data="treedata"
                :props="defaultProps"
                :default-expand-all="true"
                :filter-node-method="filterNode"
                show-checkbox
                node-key="id"
                @check="getCurrentNode"
                class="filter-tree treestyle"
                >
            </el-tree>
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
            alueSelect: '1',
            filterText: '',
            currCheckdId: '',
            options: [
                { label: '承德', value: '1' }
            ],
            treedata: [{
                id: 1,
                label: '巡控网格',
                children: [{
                    id: 5,
                    label: '某巡控网格',
                }]
                }, {
                id: 2,
                label: '勤务网格',
                children: [{
                    id: 6,
                    label: '某勤务网格'
                }]
                },  {
                id: 3,
                label: '封控点位',
                }, {
                id: 4,
                label: '重点路线',
                children: [{
                    id: 7,
                    label: '环京一道线'
                }, {
                    id: 8,
                    label: '环京二道线'
                }, {
                    id: 9,
                    label: '环京三道线'
                }, {
                    id: 10,
                    label: '环秦一道线'
                }, {
                    id: 11,
                    label: '环秦二道线'
                }, {
                    id: 12,
                    label: '环秦三道线'
                }, {
                    id: 13,
                    label: '京沈铁路'
                }]
                },  {
                id: 0,
                label: '封控点位',
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
        }
    },
    watch: {
      filterText(val) {
        this.$refs.tree.filter(val)
      }
    },
    methods: {
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
    .treeCon {
        height: 86%;
        overflow: auto;
        padding: 0 20px;
        margin-top: 10px;
        .valueSearch {
            height: 45px;
            color: #dfd7d7;
            :deep .el-input__inner {
                height: 100%;
                background: rgba(0, 170, 255, 0);
                font-size: 20px;
                color: #dfd7d7;
                border: 1px solid #0177C4;
            }
        }
        .treestyle {
          margin-top: 10px; 
          background: none; 
          :deep .el-tree-node__content{
            background-color: transparent;
            height: 35px;
            &:hover{
              background-color: transparent;
            }
          }
          :deep .el-checkbox__inner {
            border: 1px solid #00AAFF;
            background: none;
            width: 20px;
            height: 20px;

          }
          :deep .el-checkbox__input.is-checked .el-checkbox__inner {
            background-color: #409EFF;
            color: #dfd7d7;
          }
          :deep .el-tree-node__label {
            font-size: 20px;
            color: #dfd7d7;
          }
        }
    }
}
</style>