<template lang="html">
  <div class="project_container">
    <div class="title">任务管理</div>
    <div class="content">
      test
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  mounted () {
    console.log('project!!')
  }
}
</script>

<style lang="scss">
.project_container {
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
