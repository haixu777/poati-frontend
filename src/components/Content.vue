<template lang="html">
  <div class="content clearfix">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .clearfix {
    overflow: auto;
    _height: 1%;
  }
  .content {
    min-width: 1170px;
    min-height: 800px;
    background: #F3F6F9;
  }
</style>
