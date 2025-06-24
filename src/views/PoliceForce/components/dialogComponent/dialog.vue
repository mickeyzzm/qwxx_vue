<template>
  <div class="c_1_b_5_dialog">
    <div class="cancelBox">
      <p>{{ title }}</p>
      <i @click="handelCancel"></i>
      <!-- <img src="../../../../assets/images/layout/dialogCancelImg.png" alt="" class="dialogCancelImg"> -->
    </div>
    <el-table
      :data="tableData"
      class="elTable"
      height="80%"
      :header-cell-style="{'text-align':'center', 'background': '#023E74'}"
      :cell-style="{'text-align':'center', 'background': '#023E74', 'border-bottom': '5px solid #043561'}">
      <el-table-column
        type="index"
        label="序号"
        width="100"
      />
      <el-table-column
        v-for="column in tableColumns"
        :key="column.prop"
        :prop="column.prop"
        :label="column.label">
      </el-table-column>
    </el-table>
    <!-- <div class="paginationBox">
      <el-pagination
        :popper-append-to-body="false"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="pageSize"
        :page-sizes="[50, 100, 200, 300]"
        layout="total, prev, pager, next, sizes"
        :total="total">
      </el-pagination>
    </div> -->
  </div>
</template>
<script>
    export default {
      data() {
        return {
          currentPage: 1,
          pageSize: 10,
          total: 20,
          dialogVisible: false,
          tableColumns: [],
          tableData: [],
          title: '同警格高频警情'
        };
      },
      methods: {
        init (tableColumns, table, tab) {
          this.title = tab
          this.tableColumns = tableColumns
          if (table) {
            this.tableData = table
          }
        },
        handleSizeChange (val) {

        },
        handleCurrentChange (val) {

        },
        handelCancel() {
          this.$emit('handlerClose')
        },
      }
    };
</script>
<style lang="scss" scoped>
.c_1_b_5_dialog {
  width: 853px;
  height: 604px;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 4;
  transform: translate(-50%,-50%);
  background: #043561;
  overflow: hidden;
  .cancelBox {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: url(../../../../assets/images/layout/dialogCancelBg.png) no-repeat;
    background-size: 100% 100%;
    padding-left: 25px;
    padding-right: 20px;
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
    i {
      width: 25px;
      height: 25px;
      border: 1px solid 043561;
      cursor: pointer;
    }
  }
  .elTable {
    width: 94%;
    margin-left: 3%;
    margin-top: 3%;
    overflow: auto;
    background: #043561; 
  } 
  .paginationBox {
    display: flex;
    justify-content: end;
    margin: 10px;
  }
}
</style>