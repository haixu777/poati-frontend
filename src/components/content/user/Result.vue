<template lang="html">
  <div class="result_container">
    <div class="title">个人成绩</div>
    <div class="">
      <div class="radio_area">
        <el-select v-model="contestActive" clearable placeholder="请选择项目" @change="handleContest">
          <el-option
            v-for="item in contestList"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <el-table
        :data="tableData"
        stripe
        border
        style="width: 100%;text-align: left">
        <el-table-column prop="status" label="状态"></el-table-column>
        <el-table-column prop="createTime" label="开始时间" width="150" sortable></el-table-column>
        <el-table-column prop="finishTime" label="结束时间" width="150" sortable></el-table-column>
        <el-table-column prop="F1" label="F1" sortable></el-table-column>
        <el-table-column prop="recall" label="recall" sortable width="120"></el-table-column>
        <el-table-column prop="precision" label="precision" width="130" sortable></el-table-column>
        <el-table-column prop="dataVersion" label="测试集" width="130" sortable></el-table-column>
        <el-table-column prop="times" label="次数" sortable width="100"></el-table-column>
        <el-table-column prop="contest" label="项目" sortable width="130"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
const utils = require('../../../../utils/util')
export default {
  data () {
    return {
      tableData: [
      ],
      contestList: [
        { label: '关键词抽取', value: 'gjccq' },
        { label: '文本分类', value: 'wbfl' },
        { label: '事件样本发现', value: 'sjybfx' },
        { label: '事件关键元素识别', value: 'sjgjyssb' },
        { label: '事件关系抽取', value: 'sjgxcq' },
        { label: '社交关系预测', value: 'sjgxyc' },
        { label: '用户画像', value: 'yhhx' }
      ],
      contestActive: '',
      utils: utils
    }
  },
  watch: {
  },
  methods: {
    handleContest (val) {
      this.contestActive = val
      this.fetchDataFromServer()
    },
    formatTableData (tableData) {
      tableData.map((item) => {
        item.createTime = utils.formatTime(item.createTime * 1000)
        item.finishTime = utils.formatTime(item.finishTime * 1000)
      })
      return tableData
    },
    fetchDataFromServer () {
      this.$http.get('user/score.do',
        {
          params: {
            project: this.contestActive
          }
        }
      ).then((d) => {
        if (d.body.success) {
          this.tableData = this.formatTableData(d.body.scoreList)
        } else {
          console.log('error')
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.tableData = this.formatTableData([
      { createTime: 1490684472, finishTime: 1491020581, F1: '0.22', status: '完成', times: 1, dataVersion: 1, details: 'details_text', contest: '关键词抽取' },
      { createTime: 1492694580, finishTime: 1493020666, F1: '0.22', status: '完成', times: 2, dataVersion: 3, details: 'details_text', contest: '关键词抽取' },
      { createTime: 1493704690, finishTime: 1493820777, F1: '0.22', status: '完成', times: 3, dataVersion: 1, details: 'details_text', contest: '关键词抽取' },
      { createTime: 1494734713, finishTime: 1496020888, F1: '0.22', status: '完成', times: 1, dataVersion: 2, details: 'details_text', contest: '事件样本发现' }
    ])
    this.fetchDataFromServer()
  }
}
</script>

<style lang="scss">
.result_container {
  padding: 20px;
  float: right;
  width: 980px;
  box-shadow: 1px 1px 2px 0 rgba(0,0,0,.1);
  background: #fff;
  .title {
    text-align: left;
    font-weight: 500;
    padding-left: 10px;
    margin: 0 0 10px 0;
    border-left: 3px solid #495057;
  }
  .radio_area {
    text-align: right;
    margin-bottom: 10px;
  }
}
</style>
