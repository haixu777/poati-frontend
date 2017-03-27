<template lang="html">
  <div class="result_container">
    <div class="title">个人成绩</div>
    😊&nbsp;&nbsp;您的成绩将在比赛结束后公布.
    <div class="">
      <el-steps :space="100" :active="2">
        <el-step title="步骤 1" icon="edit" status="error"></el-step>
        <el-step title="步骤 2" icon="upload"></el-step>
        <el-step title="步骤 3" icon="picture"></el-step>
      </el-steps>

    </div>
  </div>
</template>

<script>
export default {
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
}
</style>
